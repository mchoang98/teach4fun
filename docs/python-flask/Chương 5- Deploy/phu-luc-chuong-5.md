# PHỤ LỤC CHƯƠNG 5

## 1. Lệnh thường dùng

### Tạo requirements.txt

```bash
pip freeze > requirements.txt
```

### Cài thư viện từ requirements.txt

```bash
pip install -r requirements.txt
```

### Cài gunicorn

```bash
pip install gunicorn
```

### Chạy Flask local

```bash
python app.py
```

### Kiểm tra git

```bash
git status
```

### Khởi tạo git

```bash
git init
```

### Thêm file vào git

```bash
git add .
```

### Commit code

```bash
git commit -m "Initial Flask shop project"
```

### Kết nối GitHub repository

```bash
git remote add origin <repository-url>
```

### Push code lên GitHub

```bash
git push -u origin main
```

### Build Command trên Render

```bash
pip install -r requirements.txt
```

### Start Command trên Render

```bash
gunicorn app:app
```

---

## 2. Bảng thuật ngữ nhanh

| Thuật ngữ | Ý nghĩa |
| --- | --- |
| Deploy | Đưa website lên môi trường online |
| Hosting | Nơi chạy website trên internet |
| Server | Máy chủ xử lý website |
| Localhost | Website chạy trên máy cá nhân |
| Production | Môi trường thật cho người dùng |
| GitHub | Nơi lưu source code online |
| Render | Nền tảng deploy ứng dụng web |
| Web Service | Dịch vụ chạy backend web |
| Build Command | Lệnh cài đặt trước khi chạy app |
| Start Command | Lệnh khởi động app |
| Environment Variable | Biến môi trường |
| DATABASE_URL | Đường dẫn kết nối database |
| SECRET_KEY | Khóa bí mật của Flask |
| PostgreSQL | Cơ sở dữ liệu |
| Domain | Tên miền |
| DNS | Hệ thống trỏ tên miền |
| Nameserver | Máy chủ quản lý DNS |
| Cloudflare | Dịch vụ quản lý DNS, bảo mật và CDN |
| CNAME | Bản ghi DNS trỏ domain về domain khác |
| A Record | Bản ghi DNS trỏ domain về IP |
| HTTPS | Kết nối bảo mật |
| SSL/TLS | Chứng chỉ và giao thức bảo mật |

---

## 3. Lỗi thường gặp khi deploy

### Lỗi 1: Thiếu requirements.txt

Cách sửa:

```bash
pip freeze > requirements.txt
```

### Lỗi 2: Thiếu gunicorn

Cách sửa:

```bash
pip install gunicorn
pip freeze > requirements.txt
```

### Lỗi 3: Sai Start Command

Nếu file chính là `app.py` và biến Flask là `app`, dùng:

```bash
gunicorn app:app
```

Nếu file chính là `main.py`, dùng:

```bash
gunicorn main:app
```

### Lỗi 4: Không có DATABASE_URL

Cần thêm biến môi trường trên Render:

```text
DATABASE_URL=...
```

### Lỗi 5: Không có SECRET_KEY

Khi dùng session, cần có:

```text
SECRET_KEY=...
```

### Lỗi 6: Đưa file .env lên GitHub

Không nên đưa `.env` lên GitHub.

Cần thêm vào `.gitignore`:

```text
.env
```

### Lỗi 7: App chạy local nhưng lỗi online

Nguyên nhân thường gặp:

- Thiếu thư viện trong `requirements.txt`.
- Sai database URL.
- Chưa tạo bảng database online.
- Sai Start Command.
- Dùng đường dẫn file không phù hợp.
- Quên biến môi trường.

### Lỗi 8: Website lỗi 500

Cần vào Render Logs để xem lỗi chi tiết.

Không nên đoán lỗi chỉ bằng giao diện trình duyệt.

### Lỗi 9: CSS không hiện

Kiểm tra:

- File CSS nằm trong thư mục `static`.
- Template dùng đúng `url_for`.
- Đường dẫn static không bị sai.

### Lỗi 10: Database online chưa có bảng

Cần chạy lệnh tạo bảng hoặc viết chức năng init database phù hợp.

---

## 4. Lỗi thường gặp khi trỏ domain

### Domain không hoạt động

Nguyên nhân có thể là:

- Sai DNS record.
- Chưa đổi nameserver.
- DNS chưa cập nhật xong.
- Chưa thêm custom domain trong Render.

### HTTPS không hoạt động

Nguyên nhân có thể là:

- SSL chưa sẵn sàng.
- DNS chưa cập nhật.
- Cấu hình SSL Cloudflare chưa phù hợp.
- Render chưa xác thực custom domain.

### Website không load

Nguyên nhân có thể là:

- Sai CNAME target.
- Render chưa add domain.
- Web Service đang bị lỗi.
- Domain trỏ sai về service khác.

---

## 5. Hướng phát triển sau Chương 5

Sau chương này, học viên có thể học tiếp:

1. CDN với Cloudflare.
2. Tối ưu tốc độ website.
3. SEO cơ bản cho domain.
4. Deploy nâng cao với Docker.
5. Giám sát lỗi production.
6. Backup database.
7. REST API với Flask.
8. Upload ảnh sản phẩm.
9. Đăng nhập và phân quyền admin.
10. Thanh toán online cơ bản.
