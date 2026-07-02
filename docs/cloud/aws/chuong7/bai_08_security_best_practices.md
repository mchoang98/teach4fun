# Security Best Practices cho Developer

## 1. Mục tiêu bài học

- Biết các nguyên tắc bảo mật quan trọng khi build app trên AWS.
- Biết tránh hard-code credentials.
- Biết dùng IAM Role và least privilege.
- Biết bảo vệ dữ liệu bằng encryption và quản lý secret đúng cách.

## 2. Giải thích dễ hiểu

Security best practices là các thói quen giúp app an toàn hơn. Trong đề AWS, đáp án đúng thường là đáp án giảm quyền, tránh credential cố định, dùng dịch vụ quản lý secret, mã hóa dữ liệu, và dùng role thay vì access key.

Developer không cần trở thành security expert, nhưng phải biết những nguyên tắc có khả năng ra đề.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- Dùng IAM Role thay vì hard-code access key.
- Cấp quyền theo least privilege.
- Dùng Secrets Manager cho secret cần rotation.
- Dùng Parameter Store cho config/parameter đơn giản.
- Dùng KMS để mã hóa dữ liệu at rest.
- Dùng HTTPS/TLS để bảo vệ dữ liệu in transit.
- Không dùng root account cho công việc hằng ngày.
- Bật MFA cho tài khoản quan trọng.
- Ghi log và monitor access/error.

Trong đề thi, các đáp án “hard-code key”, “store password in code”, “use root account” gần như luôn sai.

## 4. Lab thực hành

- Review một kiến trúc app và tìm điểm chưa an toàn.
- Thay access key hard-code bằng IAM Role.
- Chuyển password từ code sang Secrets Manager.
- Bật encryption cho S3 bucket.
- Kiểm tra IAM policy có quyền quá rộng hay không.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| least privilege | IAM Policy |
| avoid hard-coded credentials | IAM Role / Secrets Manager |
| encrypt at rest | KMS |
| encrypt in transit | TLS / HTTPS |
| root account | Do not use for daily tasks |
| MFA | Protect account |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Chọn đáp án dùng root account để thao tác hằng ngày.
- Cấp quyền AdministratorAccess cho Lambda trong production.
- Hard-code access key trong source code.
- Lưu secret trong GitHub repository.
- Không mã hóa dữ liệu nhạy cảm.

## 8. Bài tập về nhà

- Tạo checklist security cho một serverless API.
- Tìm 5 lỗi security phổ biến trong app AWS.
- Làm 15 câu trắc nghiệm ôn tập chương 7.
