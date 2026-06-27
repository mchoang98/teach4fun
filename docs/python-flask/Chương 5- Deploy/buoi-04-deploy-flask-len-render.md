# Buổi 4: Deploy Flask lên Render

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Biết tạo tài khoản Render.
- Biết kết nối Render với GitHub.
- Biết tạo Web Service.
- Biết cấu hình Build Command.
- Biết cấu hình Start Command.
- Biết đọc deploy log.
- Deploy được Flask app lên internet.

## 2. Nội dung học

- Render là gì.
- Web Service là gì.
- Kết nối Render với GitHub.
- Chọn repository Flask.
- Cấu hình Python environment.
- Cấu hình build command.
- Cấu hình start command.
- Theo dõi deploy log.
- Mở URL website online.

## 3. Kiến thức chính

```text
Web Service   : dịch vụ chạy backend web
Build Command : lệnh cài đặt trước khi chạy app
Start Command : lệnh chạy app
Deploy Log    : nơi xem quá trình deploy thành công hoặc lỗi
Auto Deploy   : tự deploy lại khi code thay đổi trên GitHub
```

## 4. Build Command gợi ý

```bash
pip install -r requirements.txt
```

## 5. Start Command gợi ý

Nếu file chính là `app.py` và biến Flask là `app`:

```bash
gunicorn app:app
```

Giải thích:

```text
app:app
│   └── biến Flask app trong file
└────── tên file app.py
```

Nếu file chính là `main.py`:

```bash
gunicorn main:app
```

## 6. URL sau khi deploy

Render thường cung cấp URL dạng:

```text
https://ten-du-an.onrender.com
```

## 7. Lỗi thường gặp

### Thiếu requirements.txt

Cách sửa:

```bash
pip freeze > requirements.txt
```

### Thiếu gunicorn

Cách sửa:

```bash
pip install gunicorn
pip freeze > requirements.txt
```

### Sai Start Command

Kiểm tra tên file và tên biến Flask app.

### App chạy local nhưng lỗi online

Xem Render Logs để biết lỗi cụ thể.

## 8. Sản phẩm nhỏ

Website Flask chạy online bằng URL Render.

## 9. Checklist cuối buổi

- [ ] Tạo được tài khoản Render.
- [ ] Kết nối được GitHub.
- [ ] Tạo được Web Service.
- [ ] Cấu hình đúng Build Command.
- [ ] Cấu hình đúng Start Command.
- [ ] Deploy không bị lỗi nghiêm trọng.
- [ ] Mở được URL online.
- [ ] Biết xem Render Logs.

## 10. Kết quả cần đạt

Học viên deploy được Flask app lên Render và có URL online đầu tiên.
