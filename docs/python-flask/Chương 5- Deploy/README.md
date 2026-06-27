# CHƯƠNG 5: DEPLOY HOSTING VỚI RENDER VÀ LIÊN KẾT TÊN MIỀN BẰNG CLOUDFLARE

*Dành cho học viên đã hoàn thành website Flask + PostgreSQL*

> **Sản phẩm cuối chương:** Học viên đưa website bán hàng lên internet bằng Render, kết nối PostgreSQL online, cấu hình biến môi trường, liên kết tên miền bằng Cloudflare, bật HTTPS và kiểm tra website hoạt động ổn định.

---

## 1. Thông tin chương học

| Thông tin | Nội dung |
| --- | --- |
| Chương | Chương 5 - Deploy Hosting với Render và Cloudflare |
| Số buổi đề xuất | 8 buổi |
| Thời lượng mỗi buổi | 2-3 giờ |
| Điều kiện trước khi học | Đã học HTML, CSS, JavaScript, Flask, PostgreSQL |
| Sản phẩm đầu vào | Website bán hàng Flask ở Chương 4 |
| Công cụ chính | GitHub, Render, PostgreSQL, Cloudflare |
| Dự án cuối chương | Website bán hàng online có tên miền riêng |

---

## 2. Mục tiêu chương học

Sau khi hoàn thành Chương 5, học viên có thể:

- Hiểu deploy và hosting.
- Hiểu domain và DNS.
- Biết deploy Flask lên Render.
- Biết tạo PostgreSQL online.
- Biết cấu hình biến môi trường.
- Biết liên kết domain với Render.
- Biết sử dụng Cloudflare để quản lý DNS.
- Biết bật HTTPS cho website.
- Biết kiểm tra lỗi production.
- Hoàn thiện website online có tên miền riêng.

---

## 3. Kiến thức nền cần có trước khi học

### HTML/CSS

- Tạo giao diện website.
- Làm form, nút bấm, menu, card sản phẩm.
- Responsive cơ bản.

### JavaScript

- Biết xử lý tương tác đơn giản.
- Biết kiểm tra form cơ bản.

### Flask

- Biết tạo route.
- Biết render template.
- Biết xử lý form.
- Biết dùng session.
- Biết kết nối database.

### PostgreSQL

- Biết database là gì.
- Biết bảng dữ liệu là gì.
- Biết tạo model cơ bản bằng SQLAlchemy.

### GitHub

- Biết tạo repository.
- Biết commit và push code.

---

## 4. Công cụ sử dụng

| Công cụ | Mục đích |
| --- | --- |
| GitHub | Lưu source code |
| Render | Deploy Flask |
| Render PostgreSQL | Database online |
| Cloudflare | Quản lý domain và DNS |
| VS Code | Soạn code |
| Terminal | Chạy lệnh |
| Trình duyệt | Kiểm tra website |

---

## 5. Cấu trúc chương học

| Buổi | Chủ đề | Nội dung chính | Sản phẩm |
| --- | --- | --- | --- |
| Buổi 1 | Tổng quan Deploy và Domain | Hosting, domain, DNS | Hiểu hệ thống |
| Buổi 2 | Chuẩn bị Flask project | requirements, gunicorn | Project sẵn sàng |
| Buổi 3 | GitHub | Push code | Repo online |
| Buổi 4 | Deploy Render | Web Service | Website online |
| Buổi 5 | PostgreSQL | Database online | Website có dữ liệu |
| Buổi 6 | Cloudflare và Domain | DNS, trỏ domain | Domain hoạt động |
| Buổi 7 | HTTPS và tối ưu | SSL, kiểm tra lỗi | Website bảo mật |
| Buổi 8 | Tổng kết | Demo sản phẩm | Website hoàn chỉnh |

---

## 6. Sơ đồ luồng cuối chương

```text
Code → GitHub → Render → Deploy
→ PostgreSQL online
→ Cloudflare → DNS → Domain → HTTPS
→ Website bán hàng online hoàn chỉnh
```

---

## 7. Danh sách file bài học

```text
chuong5
├── README.md
├── buoi-01-tong-quan-deploy-va-domain.md
├── buoi-02-chuan-bi-flask-project.md
├── buoi-03-github-va-quan-ly-source-code.md
├── buoi-04-deploy-flask-len-render.md
├── buoi-05-postgresql-online-va-bien-moi-truong.md
├── buoi-06-lien-ket-domain-voi-cloudflare.md
├── buoi-07-https-va-bao-mat.md
├── buoi-08-tong-ket-va-demo-san-pham.md
├── du-an-cuoi-chuong-5.md
└── phu-luc-chuong-5.md
```
