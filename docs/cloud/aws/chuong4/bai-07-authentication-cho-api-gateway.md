# Bài 7. Authentication cho API Gateway

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu các cách bảo vệ API Gateway.
- Phân biệt IAM Authorization, Lambda Authorizer và Cognito Authorizer.
- Biết khi nào dùng Cognito để xác thực user.
- Biết khi nào cần custom auth logic bằng Lambda Authorizer.

---

## 2. Giải thích dễ hiểu

Không phải API nào cũng được public cho mọi người gọi.

Một số API cần yêu cầu user đăng nhập trước.

Ví dụ:

```text
GET /me
POST /orders
GET /bookings
```

Các API này cần authentication và authorization.

API Gateway hỗ trợ nhiều cách bảo vệ API.

---

## 3. Authentication và Authorization

### Authentication

Authentication trả lời câu hỏi:

```text
Bạn là ai?
```

Ví dụ:

- User đăng nhập bằng email/password.
- User có JWT token.

### Authorization

Authorization trả lời câu hỏi:

```text
Bạn được phép làm gì?
```

Ví dụ:

- User thường chỉ xem booking của mình.
- Admin được xem toàn bộ booking.

---

## 4. IAM Authorization

IAM Authorization dùng AWS IAM để kiểm soát ai được gọi API.

Phù hợp khi client là:

- AWS service
- Backend service có IAM role
- Internal system
- User có AWS credentials

Không phù hợp cho login user phổ thông của web/mobile app.

Keyword:

```text
AWS credentials, IAM user, IAM role, SigV4
```

---

## 5. Cognito Authorizer

Cognito Authorizer dùng để bảo vệ API bằng user đăng nhập qua Amazon Cognito.

Phù hợp với:

- Web app
- Mobile app
- User sign-up / sign-in
- JWT token

Flow đơn giản:

```text
User login -> Cognito trả JWT -> Client gọi API Gateway kèm token -> API Gateway validate token
```

Keyword:

```text
user sign-in, JWT token, Cognito User Pool
```

---

## 6. Lambda Authorizer

Lambda Authorizer dùng khi cần logic xác thực tùy chỉnh.

Phù hợp khi:

- Token không đến từ Cognito.
- Cần kiểm tra token với hệ thống riêng.
- Cần custom authorization logic.
- Cần kiểm tra quyền phức tạp.

Flow:

```text
Client -> API Gateway -> Lambda Authorizer -> Allow/Deny -> Backend Lambda
```

---

## 7. So sánh các loại Authorizer

| Loại | Phù hợp khi |
|---|---|
| IAM Authorization | Client dùng AWS IAM credentials |
| Cognito Authorizer | User login bằng Cognito, JWT token |
| Lambda Authorizer | Custom auth logic |

---

## 8. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| authenticate users | Cognito Authorizer |
| user sign-in | Cognito User Pool |
| JWT token | Cognito Authorizer |
| custom auth logic | Lambda Authorizer |
| validate custom token | Lambda Authorizer |
| AWS credentials | IAM Authorization |
| SigV4 | IAM Authorization |

---

## 9. Bẫy thường gặp

### Bẫy 1. Dùng API Key thay cho authentication

API Key không phải cơ chế đăng nhập user.

### Bẫy 2. Chọn IAM Authorization cho web user thông thường

Web user thông thường nên dùng Cognito hoặc hệ thống auth riêng.

### Bẫy 3. Chọn Cognito khi đề yêu cầu custom token

Nếu đề nói token từ external identity provider hoặc cần logic tùy chỉnh, Lambda Authorizer có thể phù hợp hơn.

---

## 10. Lab thực hành

### Lab: Bảo vệ API bằng Cognito Authorizer

Yêu cầu:

1. Tạo Cognito User Pool.
2. Tạo user test.
3. Tạo API Gateway route `GET /profile`.
4. Tạo Cognito Authorizer.
5. Gắn authorizer vào route.
6. Gọi API không có token và kiểm tra lỗi Unauthorized.
7. Login lấy JWT token.
8. Gọi API có token và kiểm tra thành công.

---

## 11. Bài tập về nhà

1. Authentication là gì?
2. Authorization là gì?
3. Khi nào dùng Cognito Authorizer?
4. Khi nào dùng Lambda Authorizer?
5. Khi nào dùng IAM Authorization?
6. API Key có phải authentication không?
7. JWT token thường liên quan đến dịch vụ nào trong AWS?
