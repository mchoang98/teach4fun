# Buổi 5: Xây dựng REST API CRUD sản phẩm

## 1. Mục tiêu

- Ánh xạ CRUD sang HTTP method.
- Hoàn thiện endpoint tạo, sửa và xóa.
- Dùng validation chung và status code phù hợp.
- Kiểm thử API độc lập với frontend.

## 2. Thiết kế endpoint

| Chức năng | Method | URL | Thành công |
|---|---|---|---|
| Danh sách | GET | `/api/products` | `200` |
| Chi tiết | GET | `/api/products/<id>` | `200` |
| Tạo | POST | `/api/products` | `201` |
| Sửa toàn bộ | PUT | `/api/products/<id>` | `200` |
| Xóa | DELETE | `/api/products/<id>` | `204` |

## 3. Validation dùng chung

```python
def validate_product(data):
    if not isinstance(data, dict):
        return "Body phải là một object JSON"
    name = data.get("name")
    price = data.get("price")
    description = data.get("description", "")
    image_url = data.get("image_url", "")

    if not isinstance(name, str) or not name.strip() or len(name.strip()) > 100:
        return "Tên phải có từ 1 đến 100 ký tự"
    if type(price) is not int or price < 0:
        return "Giá phải là số nguyên không âm"
    if not isinstance(description, str) or len(description) > 500:
        return "Mô tả phải là chuỗi tối đa 500 ký tự"
    if not isinstance(image_url, str) or len(image_url) > 500:
        return "URL ảnh phải là chuỗi tối đa 500 ký tự"
    return None
```

## 4. Các endpoint ghi dữ liệu

```python
@app.post("/api/products")
def create_product():
    data = request.get_json(silent=True)
    error = validate_product(data)
    if error:
        return jsonify({"error": error}), 400
    product = Product(
        name=data["name"].strip(),
        price=data["price"],
        description=data.get("description", "").strip(),
        image_url=data.get("image_url", "").strip(),
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201


@app.put("/api/products/<int:product_id>")
def update_product(product_id):
    product = db.session.get(Product, product_id)
    if product is None:
        return jsonify({"error": "Không tìm thấy sản phẩm"}), 404
    data = request.get_json(silent=True)
    error = validate_product(data)
    if error:
        return jsonify({"error": error}), 400
    product.name = data["name"].strip()
    product.price = data["price"]
    product.description = data.get("description", "").strip()
    product.image_url = data.get("image_url", "").strip()
    db.session.commit()
    return jsonify(product.to_dict()), 200


@app.delete("/api/products/<int:product_id>")
def delete_product(product_id):
    product = db.session.get(Product, product_id)
    if product is None:
        return jsonify({"error": "Không tìm thấy sản phẩm"}), 404
    db.session.delete(product)
    db.session.commit()
    return "", 204
```

Response `204` không có JSON body.

## 5. Thực hành trên lớp

### Yêu cầu

Thêm `stock` vào API tạo và sửa.

### Dữ liệu đầu vào

`stock` là trường bắt buộc, kiểu số nguyên và từ 0 trở lên. Boolean và chuỗi số không hợp lệ.

### Dữ liệu đầu ra

Hợp lệ trả sản phẩm có `stock`; sai trả object `error` và `400`.

### Yêu cầu kỹ thuật

Bổ sung validation chung, không lặp quy tắc ở từng endpoint.

## 6. Lỗi thường gặp

- Quên `commit()`: thay đổi chưa được lưu.
- Sửa/xóa id không có: kiểm tra `None`.
- DELETE trả JSON với `204`: phải trả body rỗng.
- Ép kiểu trước validation: có thể vô tình chấp nhận dữ liệu sai.

## 7. Bài tập về nhà

### Yêu cầu

Thêm lọc `GET /api/products?min_price=...&max_price=...`.

### Dữ liệu đầu vào

Hai tham số tùy chọn, phải là số nguyên không âm; nếu cùng có thì min không lớn hơn max.

### Dữ liệu đầu ra

Hợp lệ trả danh sách và `200`; sai trả object `error` và `400`.

### Yêu cầu kỹ thuật

Lọc trong query database, không tải toàn bộ rồi lọc bằng Python.

## 8. Checklist

- [ ] Có đủ năm endpoint CRUD.
- [ ] Validation rõ ràng và dùng chung.
- [ ] Dùng đúng `200`, `201`, `204`, `400`, `404`.
- [ ] Kiểm thử cả đường đi thành công và thất bại.
