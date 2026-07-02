# Amazon Cognito User Pool

## 1. Mục tiêu bài học

- Hiểu Cognito User Pool dùng để làm gì.
- Biết User Pool phù hợp cho web/mobile app sign-up/sign-in.
- Hiểu JWT token trong luồng authentication.
- Biết các thành phần App client và Hosted UI.

## 2. Giải thích dễ hiểu

Cognito User Pool giống như một hệ thống quản lý tài khoản người dùng có sẵn của AWS. Thay vì tự viết chức năng đăng ký, đăng nhập, quên mật khẩu, xác thực email, bạn có thể dùng Cognito.

Ví dụ: Bạn làm app booking. User cần tạo tài khoản, đăng nhập, nhận token, sau đó dùng token gọi API. Cognito User Pool sẽ quản lý user và phát hành JWT token.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- User Pool dùng cho user sign-up/sign-in.
- Sau khi login thành công, Cognito trả về JWT token.
- JWT token có thể được API Gateway Cognito Authorizer kiểm tra.
- App client đại diện cho ứng dụng web/mobile dùng User Pool.
- Hosted UI là giao diện login có sẵn của Cognito.

Trong đề thi, keyword “user sign-up”, “user sign-in”, “JWT token”, “web/mobile authentication” thường nghĩ tới Cognito User Pool.

## 4. Lab thực hành

- Tạo Cognito User Pool.
- Tạo App client.
- Tạo user test.
- Đăng nhập và lấy token.
- Quan sát ID token và access token.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| user sign-up | Cognito User Pool |
| user sign-in | Cognito User Pool |
| JWT token | Cognito |
| hosted login page | Cognito Hosted UI |
| web/mobile authentication | Cognito User Pool |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Nhầm User Pool với Identity Pool.
- Nghĩ User Pool tự cấp quyền truy cập S3/DynamoDB cho user.
- Không phân biệt ID token và access token ở mức cơ bản.
- Chọn IAM User cho người dùng cuối của app.

## 8. Bài tập về nhà

- Giải thích User Pool dùng để giải quyết vấn đề gì.
- Tạo bảng so sánh User Pool với hệ thống login tự viết.
- Làm 10 câu trắc nghiệm về Cognito User Pool.
