# API Gateway với Cognito Authorizer

## 1. Mục tiêu bài học

- Biết dùng Cognito Authorizer để bảo vệ API Gateway.
- Hiểu API Gateway kiểm tra JWT token như thế nào ở mức khái niệm.
- Biết luồng client login rồi gọi API.
- Nhận diện câu hỏi exam về secure API.

## 2. Giải thích dễ hiểu

Khi client gọi API, ta không muốn ai cũng gọi được endpoint quan trọng. Client cần đăng nhập qua Cognito trước, nhận JWT token, sau đó gửi token trong request đến API Gateway.

API Gateway dùng Cognito Authorizer để kiểm tra token. Nếu token hợp lệ, request được chuyển đến Lambda. Nếu token không hợp lệ hoặc thiếu token, API trả lỗi authorization.

## 3. Kiến thức thi cần nhớ

Cần nhớ:

- Cognito Authorizer bảo vệ API bằng JWT token từ User Pool.
- Client thường gửi token qua Authorization header.
- API Gateway kiểm tra token trước khi gọi backend.
- Nếu cần logic custom phức tạp, có thể dùng Lambda Authorizer.
- Nếu API chỉ dành cho AWS principal, có thể dùng IAM authorization.

Trong đề, “API Gateway needs to authenticate users with JWT” thường chọn Cognito Authorizer.

## 4. Lab thực hành

- Tạo endpoint API Gateway.
- Kết nối endpoint với Lambda.
- Tạo Cognito Authorizer.
- Gắn authorizer vào method.
- Test request không token và có token.

## 5. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| secure API with Cognito users | Cognito Authorizer |
| JWT validation | Cognito Authorizer |
| custom auth logic | Lambda Authorizer |
| AWS principal access | IAM Authorization |
| Authorization header | Bearer token |


## 6. Dạng câu hỏi exam thường gặp

- Ứng dụng cần đăng ký và đăng nhập user.
- API cần xác thực người dùng trước khi gọi Lambda.
- App cần lấy AWS credential tạm thời.
- Dữ liệu cần được mã hóa bằng key do khách hàng quản lý.
- Database password không được hard-code trong code.
- Secret cần tự động rotation.

## 7. Bẫy thường gặp

- Dùng API Key để authentication user. API Key không phải cơ chế login user.
- Chọn Lambda Authorizer khi chỉ cần validate JWT từ Cognito.
- Quên deploy lại API sau khi cấu hình authorizer.
- Không bật CORS phù hợp cho browser app.

## 8. Bài tập về nhà

- Vẽ flow login Cognito rồi gọi API Gateway.
- So sánh Cognito Authorizer, Lambda Authorizer và IAM Authorization.
- Tạo 5 câu tình huống chọn authorizer phù hợp.
