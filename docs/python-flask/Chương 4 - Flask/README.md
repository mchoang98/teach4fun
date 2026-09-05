# CHƯƠNG 4: XÂY DỰNG REST API VỚI FLASK VÀ POSTGRESQL

## 1. Định hướng

Chương gồm 8 buổi. Học viên xây dựng Flask backend trả JSON và frontend HTML/CSS/JavaScript độc lập dùng `fetch()`. Flask không render HTML bằng Jinja.

```text
Trình duyệt → HTTP/JSON → Flask REST API → SQLAlchemy → PostgreSQL
```

## 2. Mục tiêu

- Phân biệt frontend, backend, API và database.
- Thiết kế endpoint REST, dùng đúng HTTP method và status code.
- Nhận, kiểm tra và trả dữ liệu JSON.
- Xây dựng CRUD sản phẩm với Flask, SQLAlchemy và PostgreSQL.
- Dùng `fetch()` để cập nhật giao diện không tải lại trang.
- Xử lý loading, lỗi, dữ liệu rỗng và CORS.
- Lưu giỏ hàng ở `localStorage` và gửi đơn hàng đến API.
- Kiểm thử và hoàn thiện ứng dụng tách frontend/backend.

## 3. Quy ước

- URL API bắt đầu bằng `/api`.
- Request và response dùng JSON, trừ response `204 No Content`.
- Lỗi có dạng `{"error": "Nội dung lỗi"}`.
- Frontend không có cú pháp Jinja; backend không dùng `render_template`, `redirect` hay `request.form`.
- API chạy tại `http://127.0.0.1:5000`; frontend chạy bằng Live Server.
- Tiền là số nguyên không âm, đơn vị đồng.

## 4. Kế hoạch học

| Buổi | Nội dung | Sản phẩm |
|---|---|---|
| 1 | Backend, HTTP, Flask và JSON | API đầu tiên |
| 2 | REST, endpoint và `fetch()` | Frontend gọi API |
| 3 | JSON request và validation | Form client-side gửi API |
| 4 | PostgreSQL và SQLAlchemy | API đọc database |
| 5 | CRUD REST sản phẩm | Bộ endpoint CRUD |
| 6 | Danh sách và chi tiết | Giao diện bán hàng |
| 7 | Giỏ hàng và đặt hàng | `localStorage` và Orders API |
| 8 | Tích hợp và kiểm thử | Ứng dụng hoàn chỉnh |

## 5. Cấu trúc dự án

```text
flask-shop/
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── .env
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── product.html
    ├── cart.html
    ├── admin.html
    ├── css/style.css
    └── js/
        ├── api.js
        ├── products.js
        ├── product-detail.js
        ├── cart.js
        └── admin.js
```

## 6. Tài liệu

Tám file `buoi-*.md` là lộ trình chính; `du-an-cuoi-chuong-4.md` là đề dự án và `phu-luc-chuong-4.md` là tài liệu tra cứu.
