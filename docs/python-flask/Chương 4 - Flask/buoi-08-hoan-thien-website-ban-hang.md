# Buổi 8: Hoàn thiện ứng dụng Flask REST API

## 1. Mục tiêu

- Ghép frontend, API và PostgreSQL thành một hệ thống.
- Chuẩn hóa cấu trúc source, cấu hình và lỗi JSON.
- Tạo giao diện quản lý gọi CRUD API.
- Kiểm thử luồng chính và các trường hợp thất bại.
- Phân biệt cấu hình học tập với yêu cầu production.

## 2. Cấu trúc hoàn chỉnh

```text
flask-shop/
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── .env
│   ├── .env.example
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

Không có thư mục `templates`. Frontend chỉ biết API URL; backend không biết bố cục HTML.

## 3. Chuẩn hóa lỗi API

```python
@app.errorhandler(404)
def handle_not_found(error):
    return jsonify({"error": "Endpoint không tồn tại"}), 404


@app.errorhandler(405)
def handle_method_not_allowed(error):
    return jsonify({"error": "HTTP method không được hỗ trợ"}), 405


@app.errorhandler(500)
def handle_server_error(error):
    db.session.rollback()
    return jsonify({"error": "Server gặp lỗi ngoài dự kiến"}), 500
```

Không gửi stack trace, mật khẩu hoặc chi tiết database cho client. Log chi tiết ở server.

## 4. Giao diện quản lý

`admin.html` cần có bảng danh sách, form tạo/sửa, nút sửa, nút xóa và vùng thông báo. JavaScript quyết định method:

```javascript
const editingId = form.dataset.editingId;
const method = editingId ? "PUT" : "POST";
const path = editingId ? `/products/${editingId}` : "/products";

await getJson(path, {
  method,
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(readFormData()),
});
form.reset();
delete form.dataset.editingId;
await loadProducts();
```

Trước khi xóa, hỏi xác nhận. Sau tạo/sửa/xóa thành công, tải lại danh sách từ API để giao diện phản ánh trạng thái database.

## 5. CORS và cấu hình

Trong môi trường học tập có thể dùng `CORS(app)`. Khi hoàn thiện, chỉ cho phép origin frontend:

```python
CORS(app, resources={
    r"/api/*": {"origins": ["http://127.0.0.1:5500", "http://localhost:5500"]}
})
```

`.env.example` chỉ chứa tên biến và giá trị minh họa, không chứa mật khẩu thật.

## 6. Kịch bản kiểm thử cuối chương

| Nhóm | Kịch bản | Kết quả |
|---|---|---|
| Product | Lấy danh sách rỗng | `200` và `[]` |
| Product | Tạo hợp lệ | `201` và object mới |
| Product | Giá âm | `400` và `error` |
| Product | Xem id không có | `404` |
| Product | Sửa rồi tải lại | Dữ liệu mới được giữ |
| Product | Xóa | `204`, biến mất khỏi danh sách |
| Cart | Tăng, giảm, xóa | Tổng cập nhật đúng |
| Order | Giỏ rỗng | `400` |
| Order | Sản phẩm không có | `400`, không tạo nửa đơn |
| Order | Dữ liệu hợp lệ | `201`, tổng do server tính |
| UI | API dừng | Hiển thị lỗi, không treo loading |

## 7. Thực hành trên lớp

### Yêu cầu

Hoàn thiện trang quản lý để tạo, sửa, xóa sản phẩm qua API.

### Dữ liệu đầu vào

Tên 1–100 ký tự; giá là số nguyên không âm; mô tả và URL ảnh tối đa 500 ký tự.

### Kết quả mong đợi

Thành công hiển thị thông báo và danh sách mới. Lỗi hiển thị nội dung `error`; form không bị reset khi request thất bại.

### Yêu cầu kỹ thuật

Dùng module `api.js`, `fetch`, POST/PUT/DELETE; không dùng submit HTML truyền thống hoặc Jinja.

## 8. Lỗi thường gặp

- URL API lặp ở nhiều file: gom vào `api.js`.
- CORS quá rộng: giới hạn origin khi hoàn thiện.
- `debug=True` ở production: chỉ bật lúc phát triển.
- Nuốt lỗi: hiển thị thông báo cho người dùng và log ở server.
- Frontend hiện dữ liệu cũ: gọi lại API sau mutation.

## 9. Bài tập về nhà

### Yêu cầu

Chạy toàn bộ checklist kiểm thử và viết báo cáo ngắn cho từng trường hợp chưa đạt.

### Dữ liệu đầu vào

Dùng các trường hợp trong bảng kiểm thử và ít nhất hai trường hợp biên tự bổ sung.

### Kết quả mong đợi

Báo cáo ghi request, kết quả thực tế, kết quả mong đợi và trạng thái đạt/chưa đạt.

### Yêu cầu kỹ thuật

Sửa mọi lỗi chức năng trước khi nộp; không đưa `.env` hoặc mật khẩu vào source.

## 10. Checklist

- [ ] Frontend và backend chạy độc lập.
- [ ] Mọi dữ liệu động đến từ REST API.
- [ ] CRUD và đặt hàng hoạt động.
- [ ] Có xử lý lỗi, empty state và loading.
- [ ] Không còn Jinja/server-side rendering.
