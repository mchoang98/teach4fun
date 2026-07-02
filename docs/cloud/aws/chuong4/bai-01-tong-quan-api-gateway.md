# Bài 1. Tổng quan API Gateway

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu API Gateway là gì.
- Biết vai trò của API Gateway trong kiến trúc serverless.
- Biết khi nào dùng API Gateway kết hợp Lambda.
- Nhận diện được keyword đề thi liên quan đến API Gateway.

---

## 2. Giải thích dễ hiểu

Trong một ứng dụng web thông thường, client như website hoặc mobile app sẽ gọi API để lấy dữ liệu hoặc gửi dữ liệu lên server.

Nếu dùng kiến trúc serverless, ta thường không có một server backend chạy liên tục. Thay vào đó:

```text
Client -> API Gateway -> Lambda -> Database / Service khác
```

API Gateway đóng vai trò như “cổng vào” của hệ thống API.

Nó nhận request từ client, kiểm tra cấu hình, xử lý một số phần như auth, throttling, CORS, logging, sau đó chuyển request đến backend như Lambda.

---

## 3. API Gateway là gì?

Amazon API Gateway là dịch vụ giúp tạo, publish, bảo vệ, theo dõi và quản lý API ở quy mô lớn.

API Gateway có thể dùng để tạo:

- REST API
- HTTP API
- WebSocket API

Trong kỳ thi AWS Developer Associate, API Gateway thường xuất hiện cùng với Lambda để xây dựng serverless REST API.

---

## 4. API Gateway giải quyết vấn đề gì?

API Gateway giúp developer:

- Expose Lambda ra ngoài internet dưới dạng API.
- Quản lý route, method và stage.
- Bật authentication / authorization.
- Giới hạn số lượng request.
- Bật cache để giảm tải backend.
- Xử lý CORS.
- Ghi log request.
- Theo dõi lỗi 4xx và 5xx.

---

## 5. Kiến trúc phổ biến

```text
Frontend / Mobile App
        |
        v
Amazon API Gateway
        |
        v
AWS Lambda
        |
        v
DynamoDB / S3 / SQS / SNS
```

Ví dụ:

- User bấm nút tạo booking.
- Website gửi request `POST /bookings`.
- API Gateway nhận request.
- API Gateway gọi Lambda.
- Lambda lưu dữ liệu vào DynamoDB.
- Lambda trả kết quả về API Gateway.
- API Gateway trả response về client.

---

## 6. Các loại API chính

### REST API

REST API là loại API đầy đủ tính năng hơn.

Thường dùng khi cần:

- API Key
- Usage Plan
- Request validation
- Caching
- Tính năng quản lý API chi tiết hơn

### HTTP API

HTTP API đơn giản hơn, rẻ hơn và độ trễ thấp hơn REST API.

Thường dùng khi cần:

- API serverless đơn giản
- Lambda integration
- JWT authorizer
- Không cần quá nhiều tính năng nâng cao

### WebSocket API

Dùng cho realtime communication.

Ví dụ:

- Chat app
- Live notification
- Realtime dashboard

---

## 7. Kiến thức thi cần nhớ

Trong đề thi, nếu thấy các keyword sau, hãy nghĩ đến API Gateway:

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| expose Lambda as API | API Gateway |
| serverless REST API | API Gateway + Lambda |
| rate limit API | API Gateway throttling |
| quota per client | Usage Plan |
| API key | API Gateway API Key |
| browser CORS error | CORS |
| authenticate users | Cognito Authorizer |
| custom auth logic | Lambda Authorizer |
| 429 Too Many Requests | Throttling |

---

## 8. Dạng câu hỏi exam thường gặp

### Tình huống 1

Một Lambda function cần được gọi từ frontend thông qua HTTP endpoint.

Dịch vụ phù hợp nhất là gì?

Đáp án thường là:

```text
Amazon API Gateway
```

### Tình huống 2

Ứng dụng cần giới hạn mỗi client chỉ được gọi API một số lần nhất định mỗi ngày.

Nên dùng:

```text
API Key + Usage Plan
```

### Tình huống 3

Trình duyệt gọi API bị lỗi CORS.

Nên kiểm tra:

```text
CORS configuration trong API Gateway
```

### Tình huống 4

API cần xác thực user bằng JWT token từ Cognito.

Nên dùng:

```text
Cognito Authorizer
```

---

## 9. Bẫy thường gặp

### Bẫy 1. Nhầm API Gateway với Application Load Balancer

API Gateway thường dùng cho serverless API, đặc biệt là Lambda.

Application Load Balancer thường dùng để phân phối traffic đến EC2, ECS hoặc target group.

### Bẫy 2. Nghĩ API Key là authentication mạnh

API Key chủ yếu dùng để định danh client, quota và usage plan.

API Key không thay thế authentication như Cognito hoặc IAM.

### Bẫy 3. API Gateway lỗi 502 nhưng nghĩ do API Gateway hỏng

Lỗi 502 thường liên quan đến Lambda integration, ví dụ Lambda trả response sai format.

---

## 10. Lab thực hành

### Lab: Tạo API Gateway gọi Lambda Hello World

Yêu cầu:

- Tạo Lambda function trả về JSON.
- Tạo API Gateway endpoint `GET /health`.
- Kết nối API Gateway với Lambda.
- Deploy API ra stage `dev`.
- Gọi thử API bằng browser hoặc Postman.

Kết quả mong muốn:

```json
{
  "status": "ok",
  "message": "API is running"
}
```

---

## 11. Bài tập về nhà

### Lý thuyết

1. API Gateway dùng để làm gì?
2. Vì sao API Gateway thường đi cùng Lambda?
3. REST API và HTTP API khác nhau thế nào?
4. API Key có phải là cơ chế đăng nhập user không?
5. Khi nào cần bật CORS?

### Tình huống

Một website React cần gọi Lambda thông qua HTTP endpoint để tạo đơn hàng. Hãy vẽ kiến trúc đơn giản gồm client, API Gateway, Lambda và DynamoDB.

### Keyword cần nhớ

- expose REST API
- serverless API
- API Gateway
- Lambda integration
- CORS
- throttling
- usage plan
