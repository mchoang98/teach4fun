# Buổi 7: HTTPS và bảo mật cơ bản

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu HTTPS là gì.
- Hiểu SSL là gì.
- Biết vì sao website cần HTTPS.
- Biết kiểm tra HTTPS trên domain.
- Biết cấu hình SSL trong Cloudflare ở mức cơ bản.
- Biết kiểm tra lỗi production sau khi gắn domain.

## 2. Nội dung học

- HTTPS là gì.
- SSL/TLS là gì.
- Vì sao website bán hàng cần HTTPS.
- Cloudflare SSL.
- Render HTTPS.
- Kiểm tra ổ khóa trên trình duyệt.
- Kiểm tra lỗi redirect.
- Kiểm tra lỗi mixed content.
- Checklist website trước khi public.

## 3. Kiến thức chính

```text
HTTPS : kết nối bảo mật giữa trình duyệt và website
SSL   : chứng chỉ bảo mật
TLS   : phiên bản bảo mật hiện đại hơn SSL
Mixed Content : lỗi trang HTTPS nhưng tải tài nguyên HTTP
```

## 4. Vì sao cần HTTPS?

Website bán hàng cần HTTPS vì:

- Bảo vệ dữ liệu người dùng.
- Tạo sự tin tưởng.
- Trình duyệt không cảnh báo nguy hiểm.
- Tốt hơn cho SEO.
- Cần thiết khi xử lý form và thông tin khách hàng.

## 5. Thực hành

- Kiểm tra website bằng domain.
- Kiểm tra có biểu tượng ổ khóa không.
- Vào Cloudflare kiểm tra SSL/TLS.
- Kiểm tra Render custom domain đã xác thực chưa.
- Kiểm tra các link CSS, JS, ảnh không dùng HTTP cũ.
- Kiểm tra form đặt hàng.

## 6. Checklist production

| Nội dung | Đã kiểm tra |
| --- | --- |
| Trang chủ mở được | ☐ |
| Trang sản phẩm mở được | ☐ |
| Trang chi tiết sản phẩm mở được | ☐ |
| Form đặt hàng hoạt động | ☐ |
| Database online có dữ liệu | ☐ |
| Không lỗi 500 | ☐ |
| Không lỗi thiếu CSS | ☐ |
| Không lộ password trong code | ☐ |
| Website chạy trên HTTPS | ☐ |

## 7. Lỗi thường gặp

### HTTPS chưa hoạt động

Có thể do DNS chưa cập nhật hoặc SSL chưa sẵn sàng.

### Website báo không an toàn

Kiểm tra SSL/TLS trong Cloudflare và custom domain trong Render.

### Mixed content

Kiểm tra các link ảnh, CSS, JS có đang dùng `http://` không.

### Redirect sai

Kiểm tra cấu hình domain, www/non-www và HTTPS.

## 8. Sản phẩm nhỏ

Website có domain riêng và HTTPS hoạt động.

## 9. Checklist cuối buổi

- [ ] Hiểu HTTPS là gì.
- [ ] Hiểu SSL là gì.
- [ ] Kiểm tra được ổ khóa trên trình duyệt.
- [ ] Biết kiểm tra Cloudflare SSL.
- [ ] Biết kiểm tra lỗi mixed content.
- [ ] Website mở được bằng HTTPS.
- [ ] Website hoạt động ổn định sau khi gắn domain.

## 10. Kết quả cần đạt

Website chạy online bằng domain riêng và có HTTPS bảo mật.
