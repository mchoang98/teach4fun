# Buổi 1: Tổng quan Deploy và Domain

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu deploy là gì.
- Hiểu hosting là gì.
- Hiểu domain là gì.
- Hiểu DNS là gì.
- Hiểu vì sao cần đưa website lên internet.
- Hiểu luồng hoạt động từ người dùng đến website Flask online.

## 2. Nội dung học

- Localhost là gì.
- Hosting là gì.
- Server là gì.
- Deploy là gì.
- Domain là gì.
- DNS là gì.
- HTTPS là gì.
- Render dùng để làm gì.
- Cloudflare dùng để làm gì.

## 3. Kiến thức chính

```text
Localhost : website chỉ chạy trên máy của mình
Hosting   : nơi chạy website trên internet
Server    : máy chủ xử lý website
Deploy    : đưa website lên internet
Domain    : tên miền, ví dụ myshop.com
DNS       : hệ thống trỏ tên miền về server
HTTPS     : kết nối bảo mật giữa trình duyệt và website
```

## 4. Luồng hoạt động

```text
User → Domain → DNS → Server Render → Flask App → Database → Response
```

Giải thích:

- Người dùng nhập domain vào trình duyệt.
- DNS xác định website đang trỏ về đâu.
- Render nhận request.
- Flask xử lý request.
- Nếu cần dữ liệu, Flask đọc từ PostgreSQL.
- Flask trả HTML về trình duyệt.

## 5. Ví dụ thực tế

Khi website còn chạy local:

```text
http://127.0.0.1:5000
```

Chỉ máy của học viên truy cập được.

Khi deploy lên Render:

```text
https://ten-du-an.onrender.com
```

Người khác có thể truy cập qua internet.

Khi gắn domain:

```text
https://www.tenmien.com
```

Website có địa chỉ dễ nhớ và chuyên nghiệp hơn.

## 6. Sản phẩm nhỏ

Học viên vẽ được sơ đồ luồng deploy website của mình:

```text
Code local
→ GitHub
→ Render
→ PostgreSQL online
→ Cloudflare DNS
→ Domain riêng
→ HTTPS
```

## 7. Checklist cuối buổi

- [ ] Hiểu localhost là gì.
- [ ] Hiểu hosting là gì.
- [ ] Hiểu deploy là gì.
- [ ] Hiểu domain là gì.
- [ ] Hiểu DNS là gì.
- [ ] Hiểu Render dùng để làm gì.
- [ ] Hiểu Cloudflare dùng để làm gì.
- [ ] Vẽ được luồng website online.

## 8. Kết quả cần đạt

Học viên hiểu tổng quan quá trình đưa website Flask từ máy cá nhân lên internet và gắn tên miền riêng.
