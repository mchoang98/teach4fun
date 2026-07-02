# AWS Secrets Manager

## 1. Mục tiêu bài học

- Hiểu Secrets Manager dùng để lưu secret an toàn.
- Biết secret rotation là gì.
- Biết Lambda/app đọc secret bằng IAM Role.
- Nhận diện tình huống không hard-code password/API key.

## 2. Giải thích dễ hiểu

Secrets Manager là nơi lưu các thông tin nhạy cảm như database password, API key, token. Thay vì viết password trong code hoặc environment variable dạng plain text, app sẽ gọi Secrets Manager để lấy secret khi cần.

Điểm mạnh quan trọng của Secrets Manager là hỗ trợ rotation, đặc biệt với database credentials.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- Secrets Manager dùng để lưu secret như password, API key, token.
- Có thể tự động rotate secret.
- Secret có thể được mã hóa bằng KMS.
- App/Lambda cần IAM permission để đọc secret.
- Không nên hard-code secret trong source code.

Keyword “rotate database password”, “store API key securely”, “avoid hard-coded password” thường nghĩ tới Secrets Manager.

## 4. Lab thực hành

- Tạo secret chứa database username/password.
- Cấp quyền cho Lambda đọc secret.
- Viết Lambda đọc secret.
- Bật rotation giả lập hoặc tìm hiểu rotation flow.
- Test AccessDenied khi Lambda thiếu quyền secretsmanager:GetSecretValue.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| store API key securely | Secrets Manager |
| rotate database password | Secrets Manager |
| avoid hard-coded password | Secrets Manager |
| secret rotation | Secrets Manager |
| GetSecretValue | Read secret permission |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Lưu password thẳng trong code repository.
- Lưu secret trong environment variable mà không kiểm soát quyền.
- Chọn Parameter Store cho yêu cầu automatic rotation database password.
- Quên cấp quyền IAM cho Lambda đọc secret.

## 8. Bài tập về nhà

- Giải thích vì sao không nên hard-code secret.
- Tạo bảng so sánh Secrets Manager và KMS.
- Viết flow Lambda đọc database password từ Secrets Manager.
