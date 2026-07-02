# Bài 6. API Key, Usage Plan và Throttling

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu API Key trong API Gateway.
- Biết Usage Plan dùng để làm gì.
- Hiểu throttling, rate limit và quota.
- Biết ý nghĩa lỗi 429 Too Many Requests.

---

## 2. Giải thích dễ hiểu

Khi publish API cho nhiều client dùng, ta có thể cần giới hạn số request để tránh abuse hoặc quá tải hệ thống.

Ví dụ:

- Mỗi client chỉ được gọi 1000 request/ngày.
- Mỗi giây chỉ được gọi tối đa 10 request.
- Client trả phí cao hơn được quota cao hơn.

API Gateway hỗ trợ các nhu cầu này bằng:

```text
API Key + Usage Plan + Throttling
```

---

## 3. API Key là gì?

API Key là một chuỗi định danh client gọi API.

Client gửi API Key trong request header:

```text
x-api-key: abc123
```

API Gateway dùng API Key để áp dụng usage plan.

Lưu ý quan trọng:

```text
API Key không phải là cơ chế authentication mạnh cho user.
```

API Key không thay thế Cognito, IAM hoặc Lambda Authorizer.

---

## 4. Usage Plan là gì?

Usage Plan cho phép cấu hình:

- Client nào được dùng API.
- API Key nào thuộc plan nào.
- Rate limit.
- Burst limit.
- Quota theo ngày, tuần hoặc tháng.

Ví dụ:

| Plan | Rate limit | Quota |
|---|---:|---:|
| Free | 5 req/s | 1,000 req/day |
| Pro | 50 req/s | 100,000 req/day |

---

## 5. Throttling là gì?

Throttling là cơ chế giới hạn tốc độ request.

Nếu client gọi quá nhanh, API Gateway có thể trả lỗi:

```text
429 Too Many Requests
```

Các khái niệm liên quan:

| Khái niệm | Ý nghĩa |
|---|---|
| Rate limit | Số request trung bình cho phép mỗi giây |
| Burst limit | Số request tăng đột biến cho phép trong thời gian ngắn |
| Quota | Tổng số request cho phép trong một khoảng thời gian |

---

## 6. Khi nào dùng API Key và Usage Plan?

Dùng khi cần:

- Quản lý usage theo client.
- Giới hạn số request của từng client.
- Bán API theo gói Free / Pro.
- Theo dõi client nào gọi API nhiều.
- Bảo vệ backend khỏi traffic quá lớn.

---

## 7. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| rate limit API | Throttling |
| quota per client | Usage Plan |
| API key | API Gateway API Key |
| 429 Too Many Requests | Throttling |
| burst traffic | Burst limit |
| client usage tracking | API Key + Usage Plan |

---

## 8. Bẫy thường gặp

### Bẫy 1. Dùng API Key để xác thực user

API Key không phải login user.

Nếu đề nói user sign-in, JWT token, authentication, hãy nghĩ đến Cognito.

### Bẫy 2. Nhầm quota và throttling

Quota là tổng số request trong một khoảng thời gian.

Throttling là giới hạn tốc độ request.

### Bẫy 3. Không xử lý lỗi 429 ở client

Client nên có retry/backoff khi gặp throttling.

---

## 9. Lab thực hành

### Lab: Tạo API Key và Usage Plan

Yêu cầu:

1. Tạo API Gateway route `GET /health`.
2. Bật yêu cầu API Key cho method.
3. Tạo API Key.
4. Tạo Usage Plan.
5. Gắn API Key vào Usage Plan.
6. Gọi API không có API Key và kiểm tra lỗi.
7. Gọi API có `x-api-key` và kiểm tra thành công.
8. Cấu hình throttling thấp và test lỗi 429.

---

## 10. Bài tập về nhà

1. API Key dùng để làm gì?
2. API Key có thay thế Cognito được không?
3. Usage Plan gồm những cấu hình nào?
4. Throttling là gì?
5. Lỗi 429 Too Many Requests nghĩa là gì?
6. Phân biệt rate limit, burst limit và quota.
