# Tổng quan Security nâng cao cho Developer

## 1. Mục tiêu bài học

- Hiểu vì sao security là domain quan trọng trong DVA-C02.
- Phân biệt authentication, authorization, encryption và secret management.
- Biết các dịch vụ AWS security developer cần học.
- Nhận diện keyword bảo mật trong đề thi.

## 2. Giải thích dễ hiểu

Trong ứng dụng thực tế, security không chỉ là tạo password mạnh. Developer cần biết ai được đăng nhập, ai được gọi API, app lấy secret ở đâu, dữ liệu có được mã hóa không, và quyền có bị cấp quá rộng không.

Có thể hiểu đơn giản:

- Authentication: xác minh “bạn là ai”.
- Authorization: xác định “bạn được làm gì”.
- Encryption: mã hóa dữ liệu để người không có quyền không đọc được.
- Secret management: lưu password, API key, token ở nơi an toàn thay vì viết thẳng trong code.

## 3. Kiến thức thi cần nhớ

Các dịch vụ cần nắm trong chương này:

- Cognito: đăng ký, đăng nhập, quản lý user cho web/mobile app.
- API Gateway Authorizer: bảo vệ API.
- KMS: quản lý key mã hóa.
- Secrets Manager: lưu secret và hỗ trợ rotation.
- Parameter Store: lưu config và secret đơn giản.
- IAM Role: cấp quyền cho app/Lambda/EC2 truy cập AWS service.

Trong đề thi, các câu security thường hỏi “giải pháp an toàn nhất”, “không hard-code credential”, “least privilege”, “temporary credentials”, “encrypt at rest”, “rotate secret”.

## 4. Lab thực hành

- Vẽ sơ đồ security cho một app serverless đơn giản.
- Xác định app cần authentication, authorization, encryption và secret management ở đâu.
- Tạo bảng mapping giữa yêu cầu bảo mật và dịch vụ AWS phù hợp.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| authentication | Cognito User Pool |
| authorization | IAM / Authorizer / Policy |
| encrypt at rest | KMS |
| hard-coded credentials | Secrets Manager / IAM Role |
| temporary credentials | STS / Cognito Identity Pool |
| least privilege | IAM Policy |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Nhầm authentication với authorization.
- Nghĩ Cognito luôn dùng để cấp quyền AWS, trong khi User Pool chủ yếu dùng để login user.
- Dùng access key hard-code trong code thay vì IAM Role.
- Chọn Parameter Store cho yêu cầu tự động rotate secret phức tạp.

## 8. Bài tập về nhà

- Viết lại định nghĩa authentication, authorization, encryption bằng lời của bạn.
- Liệt kê 5 keyword security thường gặp trong đề AWS.
- Vẽ kiến trúc API Gateway + Lambda + DynamoDB + Cognito + KMS.
