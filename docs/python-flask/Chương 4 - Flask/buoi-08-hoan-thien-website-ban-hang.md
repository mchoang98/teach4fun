# Bài giảng Buổi 8: Hoàn thiện website bán hàng

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Ôn lại toàn bộ kiến thức Flask đã học.
- Hoàn thiện website bán hàng.
- Kiểm tra route.
- Kiểm tra database.
- Kiểm tra CRUD.
- Kiểm tra giỏ hàng.
- Kiểm tra form đặt hàng.
- Chuẩn bị trình bày dự án.

## 2. Kiến thức chính

Các kiến thức cần dùng lại:

- Flask route.
- Template.
- Static file.
- Form.
- Request.
- SQLAlchemy.
- PostgreSQL.
- CRUD.
- Session.
- Jinja template.
- HTML/CSS.

## 3. Giải thích dễ hiểu

Buổi này là buổi tổng hợp. Học viên sẽ ghép các phần đã học thành một website bán hàng hoàn chỉnh.

Website cần có:

- Trang chủ.
- Trang danh sách sản phẩm.
- Trang chi tiết sản phẩm.
- Trang quản lý sản phẩm.
- Giỏ hàng.
- Form đặt hàng.
- Database lưu sản phẩm.

Quy trình kiểm tra:

```text
Chạy Flask app
→ Mở trang chủ
→ Kiểm tra sản phẩm
→ Thêm/sửa/xóa sản phẩm
→ Xem trang bán hàng
→ Thêm vào giỏ
→ Xem giỏ hàng
→ Đặt hàng
→ Kiểm tra lỗi
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`ecommerce website workflow diagram`

- Vị trí chèn:  
Sau phần giải thích quy trình website bán hàng.

- Chú thích:  
Website bán hàng gồm luồng quản lý sản phẩm, xem sản phẩm, giỏ hàng và đặt hàng.

## 5. Ví dụ code

Cấu trúc project cuối chương:

```text
flask-shop
├── app.py
├── config.py
├── requirements.txt
├── templates
│   ├── layout.html
│   ├── index.html
│   ├── products.html
│   ├── product_detail.html
│   ├── cart.html
│   ├── checkout.html
│   ├── admin_products.html
│   ├── admin_product_form.html
│   └── order_success.html
└── static
    ├── style.css
    └── images
```

Các route nên có:

```text
/
/products
/products/<id>
/cart
/cart/add/<id>
/cart/remove/<id>
/checkout
/admin/products
/admin/products/create
/admin/products/<id>/edit
/admin/products/<id>/delete
```

## 6. Thực hành trên lớp

- Kiểm tra toàn bộ route.
- Kiểm tra giao diện.
- Kiểm tra CRUD sản phẩm.
- Kiểm tra giỏ hàng.
- Kiểm tra checkout.
- Làm đẹp CSS.
- Kiểm tra lỗi terminal.
- Chuẩn bị trình bày sản phẩm.

## 7. Lỗi thường gặp

### Lỗi 1: Không chạy được Flask app

Kiểm tra môi trường ảo, thư viện và file `app.py`.

### Lỗi 2: Không kết nối được database

Kiểm tra PostgreSQL đã chạy chưa, tên database, username, password.

### Lỗi 3: Template không tìm thấy

Kiểm tra file có nằm trong thư mục `templates` không.

### Lỗi 4: CSS không chạy

Kiểm tra file `style.css` có nằm trong thư mục `static` không.

### Lỗi 5: Giỏ hàng không lưu

Kiểm tra đã có `app.secret_key` chưa.

## 8. Bài tập về nhà

Hoàn thiện dự án website bán hàng.

Yêu cầu:

- Có đủ file và thư mục.
- Có trang chủ.
- Có trang sản phẩm.
- Có trang chi tiết sản phẩm.
- Có quản lý sản phẩm.
- Có giỏ hàng.
- Có đặt hàng cơ bản.
- Giao diện dễ nhìn.
- Không có lỗi nghiêm trọng.

## 9. Checklist cuối buổi

- [ ] Chạy được `python app.py`.
- [ ] Mở được trang chủ.
- [ ] Có trang danh sách sản phẩm.
- [ ] Có trang chi tiết sản phẩm.
- [ ] Thêm được sản phẩm.
- [ ] Sửa được sản phẩm.
- [ ] Xóa được sản phẩm.
- [ ] Thêm được sản phẩm vào giỏ hàng.
- [ ] Xem được giỏ hàng.
- [ ] Đặt hàng cơ bản được.
- [ ] Giao diện dễ nhìn.
- [ ] Trình bày được sản phẩm.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên hoàn thành website bán hàng bằng Flask và PostgreSQL.
