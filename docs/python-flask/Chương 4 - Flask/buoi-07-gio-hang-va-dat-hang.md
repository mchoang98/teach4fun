#  Buổi 7: Giỏ hàng và đặt hàng

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu session là gì.
- Biết lưu giỏ hàng trong session.
- Biết thêm sản phẩm vào giỏ hàng.
- Biết xem giỏ hàng.
- Biết xóa sản phẩm khỏi giỏ hàng.
- Biết tính tổng tiền.
- Biết tạo form đặt hàng cơ bản.

## 2. Kiến thức chính

Session là nơi lưu dữ liệu tạm theo từng người dùng.

Khi dùng session trong Flask, cần có:

```python
app.secret_key = "your-secret-key"
```

Các route giỏ hàng:

```text
/cart
/cart/add/<id>
/cart/remove/<id>
/checkout
```

## 3. Giải thích dễ hiểu

Giỏ hàng là nơi lưu các sản phẩm khách muốn mua.

Ví dụ:

```text
Khách bấm thêm Áo thun
→ Flask lưu sản phẩm vào session
→ Khách mở giỏ hàng
→ Flask đọc session và hiển thị sản phẩm
```

Session phù hợp để lưu dữ liệu tạm như giỏ hàng.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`shopping cart session workflow diagram`

- Vị trí chèn:  
Sau phần giải thích giỏ hàng và session.

- Chú thích:  
Session giúp lưu giỏ hàng riêng cho từng người dùng.

## 5. Ví dụ code

### Bật secret key

```python
app.secret_key = "flask-shop-secret-key"
```

### Route thêm vào giỏ hàng

```python
from flask import session, redirect

@app.route("/cart/add/<int:id>")
def add_to_cart(id):
    product = Product.query.get_or_404(id)

    cart = session.get("cart", [])
    cart.append({
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "quantity": 1
    })

    session["cart"] = cart
    return redirect("/cart")
```

### Route xem giỏ hàng

```python
@app.route("/cart")
def cart():
    cart = session.get("cart", [])
    total = 0

    for item in cart:
        total += item["price"] * item["quantity"]

    return render_template("cart.html", cart=cart, total=total)
```

### Route xóa khỏi giỏ hàng

```python
@app.route("/cart/remove/<int:id>")
def remove_from_cart(id):
    cart = session.get("cart", [])
    new_cart = []

    for item in cart:
        if item["id"] != id:
            new_cart.append(item)

    session["cart"] = new_cart
    return redirect("/cart")
```

File `templates/cart.html`:

```html
{% extends "layout.html" %}

{% block content %}
<h2>Giỏ hàng</h2>

{% if cart %}
    {% for item in cart %}
    <div class="card">
        <h3>{{ item.name }}</h3>
        <p>Giá: {{ item.price }} VND</p>
        <p>Số lượng: {{ item.quantity }}</p>
        <a href="/cart/remove/{{ item.id }}" class="btn">Xóa</a>
    </div>
    {% endfor %}

    <h3>Tổng tiền: {{ total }} VND</h3>
    <a href="/checkout" class="btn">Đặt hàng</a>
{% else %}
    <p>Giỏ hàng đang trống.</p>
{% endif %}
{% endblock %}
```

## 6. Thực hành trên lớp

- Thêm `secret_key`.
- Tạo route `/cart/add/<id>`.
- Tạo route `/cart`.
- Tạo route `/cart/remove/<id>`.
- Tạo template `cart.html`.
- Tính tổng tiền trong giỏ hàng.
- Tạo nút đặt hàng.

## 7. Lỗi thường gặp

### Lỗi 1: Quên `secret_key`

Cần có:

```python
app.secret_key = "your-secret-key"
```

### Lỗi 2: Session không lưu được dữ liệu phức tạp

Chỉ nên lưu dữ liệu đơn giản như string, number, list, dictionary.

### Lỗi 3: Giỏ hàng bị lỗi khi chưa có dữ liệu

Nên dùng:

```python
cart = session.get("cart", [])
```

### Lỗi 4: Tổng tiền sai

Cần nhân giá với số lượng:

```python
total += item["price"] * item["quantity"]
```

## 8. Bài tập về nhà

Hoàn thiện giỏ hàng:

- Thêm sản phẩm vào giỏ.
- Xem giỏ hàng.
- Xóa sản phẩm khỏi giỏ.
- Tính tổng tiền.
- Tạo nút checkout.

## 9. Checklist cuối buổi

- [ ] Hiểu session là gì.
- [ ] Biết dùng `app.secret_key`.
- [ ] Thêm được sản phẩm vào giỏ.
- [ ] Xem được giỏ hàng.
- [ ] Xóa được sản phẩm khỏi giỏ.
- [ ] Tính được tổng tiền.
- [ ] Biết dùng `session.get`.
- [ ] Tạo được trang cart.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên có giỏ hàng hoạt động cơ bản bằng Flask session.
