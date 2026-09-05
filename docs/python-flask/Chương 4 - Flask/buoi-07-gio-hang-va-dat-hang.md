# Buổi 7: Giỏ hàng Client-side và API đặt hàng

## 1. Mục tiêu

- Lưu giỏ hàng ở `localStorage`.
- Thêm, cập nhật, xóa sản phẩm và tính tổng ở client.
- Không tin giá tiền do client gửi.
- Tạo đơn hàng trong một transaction.

## 2. Thiết kế dữ liệu

Client chỉ lưu id và số lượng:

```json
[{"product_id": 1, "quantity": 2}]
```

Request:

```json
{
  "customer_name": "Nguyễn An",
  "customer_phone": "0901234567",
  "items": [{"product_id": 1, "quantity": 2}]
}
```

Backend lấy giá từ database và tự tính tổng, không nhận giá do client quyết định.

## 3. Giỏ hàng phía client

```javascript
const CART_KEY = "flask_shop_cart";

function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) ?? [];
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(productId) {
  const cart = getCart();
  const item = cart.find((entry) => entry.product_id === productId);
  if (item) item.quantity += 1;
  else cart.push({ product_id: productId, quantity: 1 });
  saveCart(cart);
}
```

`localStorage` thuộc trình duyệt và origin frontend, không phải session Flask.

## 4. API đặt hàng

Model tối thiểu gồm `Order(id, customer_name, customer_phone, total)` và `OrderItem(id, order_id, product_id, quantity, unit_price)`. `unit_price` lưu giá tại lúc đặt.

```python
@app.post("/api/orders")
def create_order():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Body phải là một object JSON"}), 400
    name, phone, items = data.get("customer_name"), data.get("customer_phone"), data.get("items")
    if not isinstance(name, str) or not name.strip():
        return jsonify({"error": "Tên khách hàng không được để trống"}), 400
    if not isinstance(phone, str) or not phone.strip():
        return jsonify({"error": "Số điện thoại không được để trống"}), 400
    if not isinstance(items, list) or not items:
        return jsonify({"error": "Giỏ hàng không được để trống"}), 400

    normalized = {}
    for item in items:
        if not isinstance(item, dict):
            return jsonify({"error": "Phần tử giỏ hàng không hợp lệ"}), 400
        product_id, quantity = item.get("product_id"), item.get("quantity")
        if type(product_id) is not int or type(quantity) is not int or quantity <= 0:
            return jsonify({"error": "Mã sản phẩm hoặc số lượng không hợp lệ"}), 400
        normalized[product_id] = normalized.get(product_id, 0) + quantity

    try:
        order = Order(customer_name=name.strip(), customer_phone=phone.strip(), total=0)
        db.session.add(order)
        total = 0
        for product_id, quantity in normalized.items():
            product = db.session.get(Product, product_id)
            if product is None:
                db.session.rollback()
                return jsonify({"error": f"Không tìm thấy sản phẩm {product_id}"}), 400
            total += product.price * quantity
            order.items.append(OrderItem(
                product_id=product.id, quantity=quantity, unit_price=product.price
            ))
        order.total = total
        db.session.commit()
        return jsonify({"id": order.id, "total": order.total}), 201
    except Exception:
        db.session.rollback()
        app.logger.exception("Không thể tạo đơn hàng")
        return jsonify({"error": "Không thể tạo đơn hàng"}), 500
```

## 5. Gửi đơn hàng

```javascript
const response = await fetch("http://127.0.0.1:5000/api/orders", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    customer_name: nameInput.value.trim(),
    customer_phone: phoneInput.value.trim(),
    items: getCart(),
  }),
});
const data = await response.json();
if (!response.ok) throw new Error(data.error);
localStorage.removeItem(CART_KEY);
message.textContent = `Đặt hàng thành công. Mã đơn: ${data.id}`;
```

Chỉ xóa giỏ sau khi API thành công.

## 6. Thực hành trên lớp

### Yêu cầu

Cho phép đổi số lượng. Số lượng 0 nghĩa là xóa sản phẩm.

### Dữ liệu đầu vào

`product_id` là số nguyên dương; `quantity` là số nguyên từ 0.

### Kết quả mong đợi

Lưu giỏ, vẽ lại và tính tổng theo giá API. Giỏ rỗng in `Giỏ hàng đang trống`.

### Yêu cầu kỹ thuật

Không lưu tổng tiền trong `localStorage`; luôn tính lại.

## 7. Lỗi thường gặp

- JSON hỏng: bọc `JSON.parse` trong `try/catch`.
- Tin giá client: backend phải đọc database.
- Tạo nửa đơn: rollback khi lỗi.
- Xóa giỏ trước thành công: người dùng có thể mất dữ liệu.

## 8. Bài tập về nhà

### Yêu cầu

Tạo `GET /api/orders/<id>` trả đơn và các dòng hàng.

### Dữ liệu đầu vào

`id` là số nguyên dương.

### Dữ liệu đầu ra

Có dữ liệu: thông tin khách, `total`, array `items` và `200`. Không có: object `error` và `404`.

### Yêu cầu kỹ thuật

Mỗi dòng có `product_id`, `quantity`, `unit_price`; không dùng Jinja.

## 9. Checklist

- [ ] Giỏ lưu ở client.
- [ ] Backend tự tính giá và tổng.
- [ ] Đơn hàng lưu theo transaction.
- [ ] Chỉ xóa giỏ sau khi thành công.
