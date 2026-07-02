# Chương 4. API Gateway và Serverless API

## Danh sách bài học

1. Bài 1. Tổng quan API Gateway
2. Bài 2. REST API và HTTP API
3. Bài 3. Lambda Proxy Integration
4. Bài 4. Stage và Deployment
5. Bài 5. CORS trong API Gateway
6. Bài 6. API Key, Usage Plan và Throttling
7. Bài 7. Authentication cho API Gateway
8. Bài 8. Debug lỗi API Gateway
9. Bài 9. Kiểm tra Chương 4 - API Gateway và Serverless API

## Mục tiêu chương

Sau chương này, học viên cần:

- Tự tạo được API Gateway kết nối Lambda.
- Hiểu REST API, HTTP API, route, method, stage và deployment.
- Biết xử lý CORS.
- Biết cấu hình API Key, Usage Plan và Throttling.
- Biết chọn Cognito Authorizer, Lambda Authorizer hoặc IAM Authorization đúng tình huống.
- Biết debug lỗi API Gateway thường gặp như 401, 403, 404, 429, 502 và 504.

## Mini project trong chương

Xây dựng phần API cho project Serverless Booking API:

```text
Client -> API Gateway -> Lambda -> DynamoDB
```

Các endpoint đề xuất:

```text
GET /health
POST /bookings
GET /bookings
GET /bookings/{bookingId}
PATCH /bookings/{bookingId}
DELETE /bookings/{bookingId}
```
