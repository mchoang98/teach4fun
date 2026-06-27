# Buổi 5: PostgreSQL online và biến môi trường

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Biết tạo PostgreSQL online trên Render.
- Biết lấy `DATABASE_URL`.
- Biết cấu hình environment variables.
- Biết cấu hình `SECRET_KEY`.
- Biết kiểm tra database online.
- Biết tạo bảng và thêm dữ liệu thử nghiệm.

## 2. Nội dung học

- Render PostgreSQL là gì.
- Tạo database online.
- Lấy connection string.
- Cấu hình `DATABASE_URL`.
- Cấu hình `SECRET_KEY`.
- Tạo bảng database online.
- Kiểm tra website hiển thị dữ liệu từ database online.

## 3. Kiến thức chính

```text
DATABASE_URL : đường dẫn kết nối database online
SECRET_KEY   : khóa bí mật cho Flask session
Environment  : nơi lưu biến cấu hình trên hosting
Production DB: database thật khi website chạy online
```

## 4. Biến môi trường cần có

| Key | Ý nghĩa |
| --- | --- |
| DATABASE_URL | Link kết nối PostgreSQL online |
| SECRET_KEY | Khóa bảo mật Flask session |
| FLASK_ENV | Môi trường chạy app, nếu cần |

## 5. Cấu hình trong Flask

```python
import os

app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key")

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
```

## 6. Lưu ý quan trọng

- Không viết trực tiếp database password vào code.
- Không đưa file `.env` lên GitHub.
- Không dùng database local cho website online.
- Cần kiểm tra database online đã có bảng chưa.
- Cần kiểm tra app có quyền kết nối database chưa.

## 7. Lỗi thường gặp

### DATABASE_URL bị thiếu

Cần thêm biến môi trường trên Render.

### Database chưa có bảng

Cần chạy lệnh tạo bảng hoặc tạo cơ chế init database.

### Sai driver PostgreSQL

Cần có:

```text
psycopg2-binary
```

trong `requirements.txt`.

## 8. Sản phẩm nhỏ

Website online kết nối được PostgreSQL online.

## 9. Checklist cuối buổi

- [ ] Tạo được PostgreSQL trên Render.
- [ ] Lấy được `DATABASE_URL`.
- [ ] Cấu hình `DATABASE_URL` vào Web Service.
- [ ] Cấu hình `SECRET_KEY`.
- [ ] Website online kết nối được database.
- [ ] Database online có bảng dữ liệu.
- [ ] Trang sản phẩm hiển thị dữ liệu từ database.

## 10. Kết quả cần đạt

Website Flask online chạy với PostgreSQL online, không phụ thuộc vào database local.
