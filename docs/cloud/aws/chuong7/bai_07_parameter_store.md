# Systems Manager Parameter Store

## 1. Mục tiêu bài học

- Hiểu Parameter Store dùng để lưu config và parameter.
- Biết SecureString dùng để lưu giá trị nhạy cảm đơn giản.
- Phân biệt Parameter Store và Secrets Manager.
- Biết khi nào chọn Parameter Store trong đề thi.

## 2. Giải thích dễ hiểu

Parameter Store giống như nơi lưu cấu hình cho ứng dụng: API endpoint, feature flag, environment config, hoặc secret đơn giản. Nếu cần bảo mật hơn, có thể dùng SecureString để mã hóa bằng KMS.

Nếu yêu cầu là lưu config hoặc parameter đơn giản, Parameter Store thường phù hợp. Nếu yêu cầu là secret rotation tự động, Secrets Manager phù hợp hơn.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- Parameter Store thuộc AWS Systems Manager.
- Dùng để lưu config value và parameter.
- SecureString có thể mã hóa bằng KMS.
- Parameter Store thường rẻ và đơn giản hơn Secrets Manager.
- Secrets Manager mạnh hơn ở phần secret rotation.

Keyword “configuration value”, “SecureString”, “store parameter” thường nghĩ tới Parameter Store.

## 4. Lab thực hành

- Tạo String parameter cho APP_ENV.
- Tạo SecureString parameter cho API_KEY.
- Cấp quyền Lambda đọc parameter.
- Lambda đọc parameter bằng AWS SDK.
- So sánh thao tác đọc parameter và đọc secret.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| configuration value | Parameter Store |
| SecureString | Parameter Store + KMS |
| store parameter | Parameter Store |
| simple secret | Parameter Store SecureString |
| automatic secret rotation | Secrets Manager |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Chọn Parameter Store khi đề yêu cầu rotate database password tự động.
- Nhầm Parameter Store là database.
- Lưu secret nhưng không dùng SecureString.
- Cấp quyền đọc toàn bộ parameter không cần thiết.

## 8. Bài tập về nhà

- So sánh Parameter Store và Secrets Manager bằng bảng.
- Viết 3 ví dụ config nên lưu trong Parameter Store.
- Viết 3 ví dụ secret nên lưu trong Secrets Manager.
