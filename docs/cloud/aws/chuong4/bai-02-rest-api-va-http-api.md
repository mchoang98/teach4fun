# Bài 2. REST API và HTTP API

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu REST API và HTTP API trong API Gateway.
- Biết các khái niệm Resource, Method và Integration.
- Biết khi nào chọn REST API, khi nào chọn HTTP API.
- Nhận diện được các keyword liên quan trong đề thi.

---

## 2. Giải thích dễ hiểu

API Gateway có nhiều loại API. Với Developer Associate, hai loại hay gặp nhất là:

- REST API
- HTTP API

Cả hai đều giúp client gọi backend qua HTTP.

Điểm khác nhau chính là REST API nhiều tính năng hơn, còn HTTP API đơn giản hơn, chi phí thấp hơn và độ trễ thường thấp hơn.

---

## 3. REST API là gì?

REST API trong API Gateway là loại API truyền thống, đầy đủ tính năng.

REST API phù hợp khi cần:

- API Key
- Usage Plan
- Request validation
- Caching
- Mapping template
- Stage variables
- Tích hợp nhiều tính năng nâng cao

Ví dụ route:

```text
GET /products
POST /orders
GET /orders/{id}
DELETE /orders/{id}
```

---

## 4. HTTP API là gì?

HTTP API là loại API đơn giản hơn REST API.

HTTP API phù hợp khi cần:

- Tạo API nhanh
- Dùng Lambda làm backend
- Dùng JWT authorizer
- Muốn chi phí thấp hơn
- Muốn latency thấp hơn

HTTP API thường phù hợp với app serverless đơn giản.

---

## 5. Resource là gì?

Resource là đường dẫn API.

Ví dụ:

```text
/users
/orders
/orders/{orderId}
```

Trong REST API, resource đại diện cho một phần tài nguyên trong hệ thống.

---

## 6. Method là gì?

Method là hành động HTTP trên resource.

Các method phổ biến:

| Method | Ý nghĩa |
|---|---|
| GET | Lấy dữ liệu |
| POST | Tạo dữ liệu |
| PUT | Cập nhật toàn bộ dữ liệu |
| PATCH | Cập nhật một phần dữ liệu |
| DELETE | Xóa dữ liệu |

Ví dụ:

```text
GET /orders
POST /orders
GET /orders/{id}
DELETE /orders/{id}
```

---

## 7. Integration là gì?

Integration là backend mà API Gateway sẽ gọi sau khi nhận request.

Backend có thể là:

- Lambda
- HTTP endpoint
- AWS service
- VPC Link
- Mock response

Trong khóa Developer Associate, quan trọng nhất là:

```text
API Gateway -> Lambda
```

---

## 8. So sánh REST API và HTTP API

| Tiêu chí | REST API | HTTP API |
|---|---|---|
| Tính năng | Nhiều hơn | Ít hơn |
| Chi phí | Cao hơn | Thấp hơn |
| Latency | Cao hơn | Thấp hơn |
| API Key / Usage Plan | Hỗ trợ tốt | Hạn chế hơn |
| Caching | Có | Không phải trọng tâm |
| JWT Authorizer | Có thể dùng | Hỗ trợ tốt |
| Phù hợp | API cần nhiều tính năng | Serverless API đơn giản |

---

## 9. Kiến thức thi cần nhớ

Nếu đề yêu cầu API có nhiều tính năng quản lý như API key, usage plan, caching, request validation, REST API thường là lựa chọn phù hợp.

Nếu đề yêu cầu API đơn giản, chi phí thấp, latency thấp và tích hợp Lambda, HTTP API có thể là lựa chọn phù hợp.

Tuy nhiên, trong nhiều câu hỏi DVA, đáp án chỉ cần là:

```text
Amazon API Gateway
```

---

## 10. Bẫy thường gặp

### Bẫy 1. Chọn HTTP API khi đề yêu cầu Usage Plan

Nếu đề nhấn mạnh quota per client hoặc API key usage plan, REST API thường phù hợp hơn.

### Bẫy 2. Nhầm resource với method

Resource là đường dẫn như `/orders`.

Method là hành động như `GET`, `POST`, `DELETE`.

### Bẫy 3. Nghĩ API Gateway tự xử lý business logic

API Gateway quản lý API, nhưng business logic thường nằm trong Lambda hoặc backend service.

---

## 11. Lab thực hành

### Lab: Thiết kế route cho Booking API

Tạo danh sách route cho hệ thống booking:

```text
GET /health
POST /bookings
GET /bookings
GET /bookings/{bookingId}
PATCH /bookings/{bookingId}
DELETE /bookings/{bookingId}
```

Với mỗi route, xác định:

- Resource
- Method
- Backend integration

Ví dụ:

| Route | Method | Integration |
|---|---|---|
| /health | GET | Lambda healthFunction |
| /bookings | POST | Lambda createBookingFunction |

---

## 12. Bài tập về nhà

1. REST API phù hợp trong trường hợp nào?
2. HTTP API phù hợp trong trường hợp nào?
3. Resource là gì?
4. Method là gì?
5. Integration là gì?
6. Hãy thiết kế 5 route API cho một ứng dụng bán hàng.
7. Với route `POST /orders`, resource là gì và method là gì?
