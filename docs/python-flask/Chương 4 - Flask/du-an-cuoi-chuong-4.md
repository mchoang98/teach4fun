# Dự án cuối Chương 4: Website bán hàng với Flask và PostgreSQL

## 1. Mô tả dự án

Học viên xây dựng một website bán hàng đơn giản. Website cho phép người quản lý thêm sản phẩm, khách hàng xem sản phẩm, thêm vào giỏ hàng và đặt hàng cơ bản.

Dự án tập trung vào backend, không yêu cầu giao diện quá phức tạp.

## 2. Sản phẩm cần hoàn thành

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

## 3. Chức năng bắt buộc

### Phần khách hàng

- Xem trang chủ.
- Xem danh sách sản phẩm.
- Xem chi tiết sản phẩm.
- Thêm sản phẩm vào giỏ hàng.
- Xem giỏ hàng.
- Xóa sản phẩm khỏi giỏ hàng.
- Nhập thông tin đặt hàng.
- Gửi đơn hàng.

### Phần quản lý

- Xem danh sách sản phẩm.
- Thêm sản phẩm.
- Sửa sản phẩm.
- Xóa sản phẩm.

## 4. Chức năng khuyến khích

- Tìm kiếm sản phẩm.
- Phân loại sản phẩm theo danh mục.
- Upload ảnh sản phẩm.
- Tăng giảm số lượng trong giỏ hàng.
- Lưu đơn hàng vào database.
- Trang xem danh sách đơn hàng.
- Thông báo flash message.
- Responsive cho điện thoại.
- Trang lỗi 404 đơn giản.

## 5. Database gợi ý

### Bảng products

| Cột | Kiểu dữ liệu | Ý nghĩa |
| --- | --- | --- |
| id | Integer | Mã sản phẩm |
| name | String | Tên sản phẩm |
| price | Integer | Giá sản phẩm |
| description | Text | Mô tả |
| image_url | String | Link ảnh |
| created_at | DateTime | Ngày tạo |

### Bảng orders

| Cột | Kiểu dữ liệu | Ý nghĩa |
| --- | --- | --- |
| id | Integer | Mã đơn hàng |
| customer_name | String | Tên khách hàng |
| phone | String | Số điện thoại |
| address | Text | Địa chỉ |
| total_price | Integer | Tổng tiền |
| created_at | DateTime | Ngày đặt hàng |

### Bảng order_items

| Cột | Kiểu dữ liệu | Ý nghĩa |
| --- | --- | --- |
| id | Integer | Mã chi tiết đơn hàng |
| order_id | Integer | Mã đơn hàng |
| product_id | Integer | Mã sản phẩm |
| quantity | Integer | Số lượng |
| price | Integer | Giá tại thời điểm mua |

## 6. Luồng hoạt động của website

```text
Admin thêm sản phẩm
→ Sản phẩm được lưu vào PostgreSQL
→ Khách hàng mở trang sản phẩm
→ Flask lấy sản phẩm từ database
→ Khách hàng xem chi tiết sản phẩm
→ Khách hàng thêm sản phẩm vào giỏ
→ Flask lưu giỏ hàng vào session
→ Khách hàng nhập thông tin đặt hàng
→ Flask lưu đơn hàng
→ Hiển thị trang đặt hàng thành công
```

## 7. Tiêu chí đánh giá

| Tiêu chí | Điểm |
| --- | --- |
| Project Flask chạy được | 1 |
| Có cấu trúc thư mục rõ ràng | 1 |
| Có giao diện HTML/CSS cơ bản | 1 |
| Kết nối được PostgreSQL | 1 |
| Có model Product | 1 |
| Có CRUD sản phẩm | 1 |
| Có trang danh sách và chi tiết sản phẩm | 1 |
| Có giỏ hàng cơ bản | 1 |
| Có form đặt hàng | 1 |
| Code sạch, dễ hiểu, ít lỗi | 1 |
| **Tổng điểm** | **10** |

## 8. Checklist trước khi nộp

| Tiêu chí | Đã làm |
| --- | --- |
| Chạy được `python app.py` | ☐ |
| Mở được trang chủ | ☐ |
| Có thư mục `templates` | ☐ |
| Có thư mục `static` | ☐ |
| Có file CSS | ☐ |
| Kết nối được PostgreSQL | ☐ |
| Tạo được bảng products | ☐ |
| Thêm được sản phẩm | ☐ |
| Sửa được sản phẩm | ☐ |
| Xóa được sản phẩm | ☐ |
| Hiển thị được danh sách sản phẩm | ☐ |
| Xem được chi tiết sản phẩm | ☐ |
| Thêm được sản phẩm vào giỏ hàng | ☐ |
| Xem được giỏ hàng | ☐ |
| Gửi được form đặt hàng | ☐ |
| Không có lỗi nghiêm trọng trên terminal | ☐ |
| Giao diện dễ nhìn | ☐ |
| Học viên trình bày được sản phẩm | ☐ |

## 9. Gợi ý trình bày sản phẩm

```text
Xin chào thầy/cô và các bạn.
Đây là website bán hàng em xây dựng bằng Flask và PostgreSQL.

Website của em có các chức năng:
- Xem danh sách sản phẩm
- Xem chi tiết sản phẩm
- Quản lý sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Đặt hàng cơ bản

Em đã dùng Flask để tạo backend.
Em dùng PostgreSQL để lưu dữ liệu sản phẩm.
Em dùng SQLAlchemy để thao tác với database.
Phần em thấy khó nhất là ...
Phần em thích nhất là ...
```
