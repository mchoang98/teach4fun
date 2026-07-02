# Cognito Identity Pool

## 1. Mục tiêu bài học

- Hiểu Identity Pool dùng để cấp temporary AWS credentials.
- Biết khi nào cần Identity Pool thay vì chỉ dùng User Pool.
- Hiểu liên hệ giữa user đã login và quyền truy cập AWS service.
- Nhận diện keyword temporary AWS credentials trong đề thi.

## 2. Giải thích dễ hiểu

Nếu User Pool trả lời câu hỏi “user là ai?”, thì Identity Pool giúp trả lời “user này có thể lấy AWS credentials tạm thời để truy cập AWS service nào?”.

Ví dụ: Mobile app cho phép user upload ảnh trực tiếp lên S3. Ta không nên nhúng access key vào app. Thay vào đó, user login, sau đó Identity Pool cấp temporary credentials với quyền giới hạn để upload vào S3.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- Identity Pool cấp temporary AWS credentials.
- Có thể liên kết với Cognito User Pool hoặc identity provider khác.
- Dùng IAM Role để quy định user được truy cập AWS service nào.
- Phù hợp khi client app cần gọi trực tiếp AWS service như S3.

Keyword “temporary AWS credentials for users” thường nghĩ tới Cognito Identity Pool.

## 4. Lab thực hành

- Tạo Identity Pool.
- Liên kết Identity Pool với User Pool.
- Tạo IAM Role cho authenticated users.
- Cấp quyền upload S3 giới hạn theo prefix.
- Test lấy temporary credentials.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| temporary AWS credentials for users | Cognito Identity Pool |
| federated identities | Cognito Identity Pool |
| mobile app access S3 directly | Cognito Identity Pool + IAM Role |
| authenticated role | IAM Role |
| unauthenticated role | IAM Role |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Dùng access key cố định trong mobile app.
- Nhầm Identity Pool là nơi lưu username/password.
- Cấp quyền S3 quá rộng cho authenticated role.
- Không giới hạn quyền theo least privilege.

## 8. Bài tập về nhà

- Giải thích khác nhau giữa User Pool và Identity Pool.
- Viết tình huống cần dùng Identity Pool.
- Thiết kế quyền S3 tối thiểu cho user upload file.
