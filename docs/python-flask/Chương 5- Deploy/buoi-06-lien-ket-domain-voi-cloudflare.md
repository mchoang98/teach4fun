# Buổi 6: Liên kết Domain với Cloudflare

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu domain là gì.
- Hiểu DNS record là gì.
- Hiểu Cloudflare là gì.
- Biết thêm domain vào Cloudflare.
- Biết đổi nameserver sang Cloudflare.
- Biết thêm DNS record.
- Biết thêm custom domain vào Render.
- Trỏ được domain về website Render.

## 2. Nội dung học

- Domain là gì.
- DNS là gì.
- DNS record là gì.
- A Record là gì.
- CNAME Record là gì.
- Nameserver là gì.
- Cloudflare dùng để làm gì.
- Quy trình trỏ domain về Render.

## 3. Kiến thức chính

```text
A Record     : trỏ domain về IP
CNAME Record : trỏ domain về URL khác
Nameserver   : máy chủ DNS
DNS          : hệ thống phân giải tên miền
Cloudflare   : dịch vụ quản lý DNS, bảo mật và CDN
```

## 4. Quy trình thực hiện

```text
Mua domain
→ Thêm domain vào Cloudflare
→ Đổi nameserver sang Cloudflare
→ Thêm DNS record
→ Thêm custom domain vào Render
→ Đợi DNS cập nhật
→ Kiểm tra domain hoạt động
```

## 5. Ví dụ DNS record

Trỏ `www.tenmien.com` về Render:

```text
Type: CNAME
Name: www
Target: ten-du-an.onrender.com
```

Trỏ domain gốc `tenmien.com` có thể cần cấu hình theo hướng dẫn cụ thể của Render và Cloudflare.

## 6. Thêm domain vào Render

Trong Render Web Service:

```text
Settings → Custom Domains → Add Custom Domain
```

Sau đó nhập domain, ví dụ:

```text
www.tenmien.com
```

Render sẽ hiển thị hướng dẫn DNS cần cấu hình.

## 7. Kết quả mong muốn

Website truy cập được bằng:

```text
https://www.tenmien.com
```

## 8. Lỗi thường gặp

### Domain chưa hoạt động ngay

DNS có thể cần thời gian cập nhật.

### Sai CNAME target

Cần kiểm tra đúng URL Render.

### Chưa add custom domain trong Render

DNS đúng nhưng Render chưa nhận domain thì website vẫn có thể lỗi.

### Chưa đổi nameserver

Nếu domain chưa dùng nameserver Cloudflare, cấu hình DNS trong Cloudflare sẽ chưa có tác dụng.

## 9. Checklist cuối buổi

- [ ] Có domain.
- [ ] Thêm domain vào Cloudflare.
- [ ] Đổi nameserver sang Cloudflare.
- [ ] Thêm DNS record.
- [ ] Thêm custom domain vào Render.
- [ ] Domain trỏ đúng về Render.
- [ ] Website mở được bằng domain riêng.

## 10. Kết quả cần đạt

Học viên liên kết được domain với website Render thông qua Cloudflare.
