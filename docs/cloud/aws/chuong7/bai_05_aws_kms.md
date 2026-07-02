# AWS KMS

## 1. Mục tiêu bài học

- Hiểu AWS KMS dùng để quản lý encryption key.
- Phân biệt AWS managed key và customer managed key.
- Biết key policy và IAM permission ảnh hưởng đến quyền dùng key.
- Hiểu encryption at rest và envelope encryption ở mức exam.

## 2. Giải thích dễ hiểu

KMS giống như nơi quản lý chìa khóa mã hóa. Dữ liệu có thể được lưu trong S3, DynamoDB, EBS hoặc service khác, nhưng key mã hóa được quản lý bởi KMS.

Nếu đề bài nói cần mã hóa dữ liệu ở trạng thái lưu trữ, cần quản lý key, cần customer managed key, hoặc cần kiểm soát quyền dùng key, hãy nghĩ đến KMS.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- KMS dùng để tạo và quản lý encryption keys.
- AWS managed key do AWS quản lý nhiều hơn.
- Customer managed key cho phép khách hàng kiểm soát key policy, rotation, permission.
- Key policy quy định ai có quyền dùng key.
- KMS thường dùng cho encryption at rest.
- Envelope encryption là mô hình dùng data key để mã hóa dữ liệu, còn master key bảo vệ data key.

Keyword “encrypt at rest”, “customer managed key”, “key rotation” thường nghĩ tới KMS.

## 4. Lab thực hành

- Tạo customer managed key.
- Bật key rotation.
- Mã hóa S3 object bằng KMS key.
- Cấp quyền cho Lambda dùng key.
- Test lỗi AccessDenied khi thiếu quyền KMS.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| encrypt at rest | KMS |
| customer managed key | KMS CMK |
| key policy | KMS permission |
| envelope encryption | KMS |
| key rotation | KMS |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Nghĩ chỉ cần IAM Allow là đủ, trong khi key policy cũng quan trọng.
- Nhầm KMS với Secrets Manager. KMS mã hóa, Secrets Manager lưu secret.
- Chọn KMS để lưu password trực tiếp.
- Không cấp quyền kms:Decrypt cho Lambda đọc dữ liệu mã hóa.

## 8. Bài tập về nhà

- Giải thích KMS dùng để làm gì.
- So sánh AWS managed key và customer managed key.
- Viết 5 keyword liên quan KMS trong đề thi.
