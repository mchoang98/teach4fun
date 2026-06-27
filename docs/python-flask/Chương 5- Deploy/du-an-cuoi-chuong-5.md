# DỰ ÁN CUỐI CHƯƠNG 5: WEBSITE BÁN HÀNG ONLINE CÓ DOMAIN RIÊNG

## 1. Mô tả dự án

Học viên deploy website Flask bán hàng từ Chương 4 lên Render, kết nối PostgreSQL online, sau đó liên kết domain bằng Cloudflare và bật HTTPS.

Dự án tập trung vào:

```text
Deploy website
→ Kết nối database online
→ Gắn tên miền riêng
→ Bật HTTPS
→ Kiểm tra website production
```

---

## 2. Sản phẩm cần hoàn thành

```text
project
├── Website online trên Render
├── Domain riêng quản lý bằng Cloudflare
├── PostgreSQL online
├── GitHub repository
└── HTTPS hoạt động
```

---

## 3. Yêu cầu kỹ thuật

Website cần có:

- Deploy thành công trên Render.
- Source code nằm trên GitHub.
- Có file `requirements.txt`.
- Có dùng `gunicorn`.
- Có cấu hình Start Command đúng.
- Có PostgreSQL online.
- Có biến môi trường `DATABASE_URL`.
- Có biến môi trường `SECRET_KEY`.
- Có domain riêng.
- Domain trỏ đúng về Render.
- HTTPS hoạt động.
- Các trang chính hoạt động.
- Không có lỗi nghiêm trọng khi truy cập.

---

## 4. Yêu cầu chức năng website

Website bán hàng online cần có:

- Trang chủ.
- Trang danh sách sản phẩm.
- Trang chi tiết sản phẩm.
- Giỏ hàng.
- Form đặt hàng.
- Trang thông báo đặt hàng thành công.
- Dữ liệu sản phẩm được lấy từ PostgreSQL online.

---

## 5. Luồng hoàn thành dự án

```text
Hoàn thiện website Flask local
→ Đưa code lên GitHub
→ Tạo Web Service trên Render
→ Deploy Flask app
→ Tạo PostgreSQL online
→ Cấu hình DATABASE_URL
→ Kiểm tra website online
→ Thêm domain vào Cloudflare
→ Cấu hình DNS
→ Add custom domain trong Render
→ Kiểm tra HTTPS
→ Demo sản phẩm
```

---

## 6. Tiêu chí đánh giá

| Tiêu chí | Điểm |
| --- | --- |
| Deploy thành công trên Render | 2 |
| Database PostgreSQL online hoạt động | 2 |
| Domain hoạt động qua Cloudflare | 2 |
| HTTPS hoạt động | 2 |
| Website chạy ổn định, trình bày rõ ràng | 2 |
| **Tổng** | **10** |

---

## 7. Checklist trước khi nộp

| Nội dung | Done |
| --- | --- |
| Code trên GitHub | ☐ |
| Có `.gitignore` | ☐ |
| Không đưa `.env` lên GitHub | ☐ |
| Có `requirements.txt` | ☐ |
| Có `gunicorn` | ☐ |
| Deploy Render thành công | ☐ |
| PostgreSQL hoạt động | ☐ |
| Có `DATABASE_URL` | ☐ |
| Có `SECRET_KEY` | ☐ |
| Domain trỏ đúng | ☐ |
| HTTPS hoạt động | ☐ |
| Website không lỗi 500 | ☐ |
| Trang sản phẩm hoạt động | ☐ |
| Giỏ hàng hoạt động | ☐ |
| Form đặt hàng hoạt động | ☐ |

---

## 8. Gợi ý trình bày sản phẩm

```text
Website của em deploy trên Render.
Em sử dụng PostgreSQL online để lưu dữ liệu.
Em sử dụng Cloudflare để trỏ domain.
Website có HTTPS và hoạt động ổn định.

Link website: https://tenmien.com
GitHub repo: ...
Phần em thấy khó nhất là ...
Phần em học được nhiều nhất là ...
```
