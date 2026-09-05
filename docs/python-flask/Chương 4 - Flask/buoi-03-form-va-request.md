# Buổi 3: JSON Request, Validation và Xử lý lỗi

## 1. Mục tiêu

- Gửi JSON bằng `fetch()` với POST.
- Đọc JSON bằng `request.get_json()`.
- Kiểm tra trường bắt buộc, kiểu và miền giá trị.
- Trả lỗi JSON cùng status code phù hợp.

## 2. Kiến thức chính

```text
POST /api/products
Content-Type: application/json
Body: {"name": "Bút máy", "price": 45000}
```

Không tin dữ liệu từ client. Validation HTML hỗ trợ trải nghiệm; validation backend bảo vệ dữ liệu.

## 3. Backend mẫu

```python
@app.post("/api/products")
def create_product():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Body phải là một object JSON"}), 400

    name = data.get("name")
    price = data.get("price")
    if not isinstance(name, str) or not name.strip():
        return jsonify({"error": "Tên sản phẩm không được để trống"}), 400
    if type(price) is not int or price < 0:
        return jsonify({"error": "Giá phải là số nguyên không âm"}), 400

    product = {"id": len(products) + 1, "name": name.strip(), "price": price}
    products.append(product)
    return jsonify(product), 201
```

`type(price) is int` loại boolean, vì `bool` là lớp con của `int` trong Python.

## 4. Frontend mẫu

```html
<form id="product-form">
  <label>Tên <input id="name" required></label>
  <label>Giá <input id="price" type="number" min="0" step="1" required></label>
  <button>Thêm sản phẩm</button>
</form>
<p id="message"></p>
```

```javascript
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = {
    name: document.querySelector("#name").value.trim(),
    price: Number(document.querySelector("#price").value),
  };

  const response = await fetch("http://127.0.0.1:5000/api/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  message.textContent = response.ok ? `Đã tạo ${data.name}` : data.error;
});
```

## 5. Thực hành trên lớp

### Yêu cầu

Nhận thêm `description`. Tên dài tối đa 100 ký tự; mô tả có thể rỗng nhưng tối đa 500 ký tự.

### Dữ liệu đầu vào

Object JSON có `name`, `price`, `description`. Tên là chuỗi không rỗng; giá là số nguyên từ 0; mô tả là chuỗi.

### Dữ liệu đầu ra

- Hợp lệ: sản phẩm đã tạo, status `201`.
- Không hợp lệ: `{"error": "..."}`, status `400`.

### Yêu cầu kỹ thuật

Dùng `request.get_json(silent=True)`, không dùng `request.form`.

## 6. Kiểm thử

```text
curl -X POST http://127.0.0.1:5000/api/products -H "Content-Type: application/json" -d "{\"name\":\"Bút máy\",\"price\":45000,\"description\":\"Ngòi êm\"}"
```

Kiểm thử thêm: thiếu tên, tên trắng, giá âm, giá chuỗi, body rỗng và JSON sai.

## 7. Lỗi thường gặp

- Nhận `None`: kiểm tra header và JSON hợp lệ.
- Giá là chuỗi: chuyển ở client nhưng vẫn kiểm tra ở server.
- Trang tải lại: gọi `event.preventDefault()`.
- Luôn báo thành công: kiểm tra `response.ok`.

## 8. Bài tập về nhà

### Yêu cầu

Tạo `POST /api/contacts` nhận họ tên, email và nội dung.

### Dữ liệu đầu vào

Ba trường là chuỗi không rỗng; email chứa `@`; nội dung tối đa 1000 ký tự.

### Dữ liệu đầu ra

Hợp lệ trả `{"message": "Đã nhận liên hệ"}`, status `201`; sai trả object `error`, status `400`.

### Yêu cầu kỹ thuật

Form client-side gửi JSON bằng `fetch`; không dùng Jinja.

## 9. Checklist

- [ ] Gửi và nhận được JSON.
- [ ] Validation được ở backend.
- [ ] Dùng đúng status `201` và `400`.
