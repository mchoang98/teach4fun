# Bài giảng Buổi 5: CRUD sản phẩm

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu CRUD là gì.
- Biết thêm sản phẩm vào database.
- Biết hiển thị danh sách sản phẩm.
- Biết sửa sản phẩm.
- Biết xóa sản phẩm.
- Tạo được trang quản lý sản phẩm đơn giản.

## 2. Kiến thức chính

CRUD là 4 thao tác cơ bản với dữ liệu:

```text
Create : Thêm mới
Read   : Xem dữ liệu
Update : Cập nhật
Delete : Xóa
```

Thêm dữ liệu:

```python
product = Product(name=name, price=price)
db.session.add(product)
db.session.commit()
```

Lấy danh sách:

```python
products = Product.query.all()
```

Lấy một sản phẩm:

```python
product = Product.query.get(id)
```

Xóa:

```python
db.session.delete(product)
db.session.commit()
```

## 3. Giải thích dễ hiểu

Trang quản lý sản phẩm giúp chủ shop thêm, sửa, xóa sản phẩm.

Luồng hoạt động:

```text
Admin nhập thông tin sản phẩm
→ Flask nhận dữ liệu form
→ Flask lưu vào PostgreSQL
→ Trang quản lý hiển thị sản phẩm mới
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CRUD create read update delete diagram`

- Vị trí chèn:  
Sau phần giải thích CRUD.

- Chú thích:  
CRUD là 4 thao tác cơ bản khi làm việc với dữ liệu.

## 5. Ví dụ code

### Route danh sách sản phẩm admin

```python
@app.route("/admin/products")
def admin_products():
    products = Product.query.all()
    return render_template("admin_products.html", products=products)
```

### Route thêm sản phẩm

```python
@app.route("/admin/products/create", methods=["GET", "POST"])
def create_product():
    if request.method == "POST":
        name = request.form.get("name")
        price = int(request.form.get("price"))
        description = request.form.get("description")
        image_url = request.form.get("image_url")

        product = Product(
            name=name,
            price=price,
            description=description,
            image_url=image_url
        )

        db.session.add(product)
        db.session.commit()

        return redirect("/admin/products")

    return render_template("admin_product_form.html")
```

### Route xóa sản phẩm

```python
@app.route("/admin/products/<int:id>/delete")
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return redirect("/admin/products")
```

## 6. Thực hành trên lớp

- Tạo trang `/admin/products`.
- Tạo form thêm sản phẩm.
- Lưu sản phẩm vào database.
- Hiển thị danh sách sản phẩm.
- Tạo nút sửa sản phẩm.
- Tạo nút xóa sản phẩm.

## 7. Lỗi thường gặp

### Lỗi 1: Quên `db.session.commit()`

Nếu không commit, dữ liệu chưa được lưu thật vào database.

### Lỗi 2: Giá sản phẩm là chuỗi

Dữ liệu từ form là chuỗi. Cần đổi:

```python
price = int(request.form.get("price"))
```

### Lỗi 3: Quên import redirect

```python
from flask import redirect
```

### Lỗi 4: Không tìm thấy sản phẩm

Nên dùng:

```python
Product.query.get_or_404(id)
```

## 8. Bài tập về nhà

Hoàn thiện trang quản lý sản phẩm có:

- Danh sách sản phẩm.
- Form thêm sản phẩm.
- Form sửa sản phẩm.
- Chức năng xóa sản phẩm.

## 9. Checklist cuối buổi

- [ ] Hiểu CRUD là gì.
- [ ] Thêm được sản phẩm.
- [ ] Xem được danh sách sản phẩm.
- [ ] Sửa được sản phẩm.
- [ ] Xóa được sản phẩm.
- [ ] Biết dùng `db.session.add`.
- [ ] Biết dùng `db.session.commit`.
- [ ] Biết dùng `Product.query.all`.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên có trang admin quản lý sản phẩm cơ bản.
