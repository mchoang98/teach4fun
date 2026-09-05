# Dự án cuối Chương 4: Cửa hàng dùng Flask REST API

## 1. Yêu cầu

Xây dựng ứng dụng bán hàng gồm frontend HTML/CSS/JavaScript độc lập và Flask REST API kết nối PostgreSQL. Frontend phải gọi API bằng `fetch()`; Flask không render template.

## 2. Chức năng bắt buộc

### Khách hàng

- Xem danh sách và chi tiết sản phẩm.
- Tìm theo từ khóa và lọc theo khoảng giá.
- Thêm, đổi số lượng, xóa sản phẩm trong giỏ.
- Giỏ được lưu bằng `localStorage`.
- Nhập họ tên, số điện thoại và đặt hàng.
- Xem thông báo thành công hoặc lỗi rõ ràng.

### Quản lý

- Xem danh sách sản phẩm.
- Tạo, sửa và xóa sản phẩm qua REST API.
- Xác nhận trước khi xóa.
- Hiển thị lỗi validation do API trả về.

### Backend

- Lưu sản phẩm, đơn hàng và chi tiết đơn hàng trong PostgreSQL.
- Validation mọi JSON request.
- Tự đọc giá từ database và tính tổng đơn.
- Trả JSON cùng status code phù hợp.
- Rollback transaction nếu tạo đơn thất bại.

## 3. Dữ liệu đầu vào

### Sản phẩm

| Trường | Quy tắc |
|---|---|
| `name` | Chuỗi 1–100 ký tự |
| `price` | Số nguyên không âm, đơn vị đồng |
| `description` | Chuỗi tối đa 500 ký tự, có thể rỗng |
| `image_url` | Chuỗi tối đa 500 ký tự, có thể rỗng |

### Đơn hàng

| Trường | Quy tắc |
|---|---|
| `customer_name` | Chuỗi không rỗng, tối đa 100 ký tự |
| `customer_phone` | Chuỗi không rỗng, tối đa 20 ký tự |
| `items` | Array có ít nhất một phần tử |
| `product_id` | Số nguyên dương, phải tồn tại |
| `quantity` | Số nguyên dương |

Client không gửi giá dùng để tính tiền. Nếu có gửi, backend phải bỏ qua.

## 4. API bắt buộc

| Method | Endpoint | Kết quả |
|---|---|---|
| GET | `/api/products` | Danh sách; hỗ trợ `keyword`, `min_price`, `max_price` |
| GET | `/api/products/<id>` | Chi tiết hoặc `404` |
| POST | `/api/products` | Tạo mới, `201` |
| PUT | `/api/products/<id>` | Sửa toàn bộ, `200` |
| DELETE | `/api/products/<id>` | Xóa, `204` |
| POST | `/api/orders` | Tạo đơn, `201` |
| GET | `/api/orders/<id>` | Chi tiết đơn hoặc `404` |

Mọi lỗi do dữ liệu đầu vào trả `{\"error\": \"...\"}`. DELETE thành công không có body.

## 5. Database tối thiểu

- `products`: `id`, `name`, `price`, `description`, `image_url`.
- `orders`: `id`, `customer_name`, `customer_phone`, `total`, `created_at`.
- `order_items`: `id`, `order_id`, `product_id`, `quantity`, `unit_price`.

`unit_price` là giá tại lúc đặt; `total` bằng tổng `quantity * unit_price` của các dòng.

## 6. Cấu trúc nộp bài

```text
flask-shop/
├── README.md
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── .env.example
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── product.html
    ├── cart.html
    ├── admin.html
    ├── css/style.css
    └── js/
```

README phải hướng dẫn tạo database, cấu hình `DATABASE_URL`, cài thư viện và chạy cả hai phần. Không nộp `venv`, `.env`, mật khẩu hoặc cache.

## 7. Kết quả mong đợi

- Người dùng hoàn thành trọn luồng xem hàng → thêm giỏ → đặt hàng.
- Quản lý hoàn thành CRUD mà không tải trang theo kiểu form server-side.
- Reload frontend vẫn giữ giỏ hàng.
- Reload dữ liệu sau mutation phản ánh đúng database.
- Khi API dừng hoặc dữ liệu sai, giao diện có thông báo và không treo.

## 8. Yêu cầu kỹ thuật

- Bắt buộc dùng Flask, Flask-SQLAlchemy, PostgreSQL, JSON và `fetch()`.
- Không dùng `render_template`, Jinja, `request.form` hoặc Flask session cho giỏ hàng.
- Không xây SQL bằng cách nối chuỗi.
- Cấu hình database lấy từ biến môi trường.
- Tạo DOM an toàn; ưu tiên `textContent` với dữ liệu từ API.

## 9. Tiêu chí đánh giá

| Hạng mục | Điểm |
|---|---:|
| Thiết kế và status code API | 2.0 |
| Model, quan hệ và tính đúng dữ liệu | 2.0 |
| CRUD sản phẩm | 1.5 |
| Giỏ hàng và đặt hàng an toàn | 2.0 |
| Frontend gọi API, xử lý trạng thái | 1.5 |
| Cấu trúc source, README, bảo mật cấu hình | 1.0 |
| **Tổng** | **10.0** |

## 10. Checklist trước khi nộp

- [ ] Không còn Jinja hoặc HTML do Flask render.
- [ ] Có đủ endpoint bắt buộc.
- [ ] Validation cả kiểu dữ liệu và miền giá trị.
- [ ] Backend tự tính tổng đơn.
- [ ] Kiểm thử id không tồn tại, body sai và giỏ rỗng.
- [ ] Không commit thông tin nhạy cảm.
- [ ] Người khác có thể chạy dự án theo README.
