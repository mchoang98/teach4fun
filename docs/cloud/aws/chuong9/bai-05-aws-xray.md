# Bài 5. AWS X-Ray

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS X-Ray dùng để làm gì.
- Biết trace, segment, subsegment và service map.
- Biết khi nào dùng X-Ray thay vì chỉ xem log.
- Biết nhận diện keyword distributed tracing trong đề thi.

---

## 2. AWS X-Ray là gì?

AWS X-Ray là dịch vụ giúp trace request qua nhiều service.

Ví dụ request đi qua:

```text
Client -> API Gateway -> Lambda -> DynamoDB -> SNS
```

CloudWatch Logs cho ta biết từng service ghi log gì.

X-Ray cho ta thấy toàn bộ hành trình request:

```text
Request đi qua service nào?
Service nào chậm?
Service nào lỗi?
Lỗi xảy ra ở bước nào?
```

---

## 3. Khi nào cần X-Ray?

Dùng X-Ray khi:

- Ứng dụng có nhiều microservice.
- Request đi qua nhiều AWS service.
- User báo request chậm nhưng log không đủ rõ.
- Cần tìm bottleneck.
- Cần distributed tracing.

---

## 4. Khái niệm quan trọng

## Trace

Trace là toàn bộ hành trình của một request.

Ví dụ:

```text
Trace ID: 1-abc
API Gateway -> Lambda -> DynamoDB
```

## Segment

Segment là dữ liệu trace của một service.

Ví dụ:

```text
Lambda segment
API Gateway segment
```

## Subsegment

Subsegment là phần nhỏ bên trong segment.

Ví dụ Lambda gọi DynamoDB:

```text
Lambda segment
  -> DynamoDB subsegment
```

## Service Map

Service map là sơ đồ các service trong request.

Nó giúp nhìn nhanh service nào đang lỗi hoặc chậm.

---

## 5. X-Ray với Lambda

Lambda có thể bật X-Ray tracing.

Có 2 chế độ thường gặp:

```text
PassThrough
Active
```

Với `Active`, Lambda sẽ ghi trace vào X-Ray.

Lambda execution role cần có quyền ghi trace.

Policy thường dùng:

```text
AWSXRayDaemonWriteAccess
```

---

## 6. X-Ray với API Gateway

API Gateway cũng có thể bật X-Ray tracing.

Khi bật X-Ray cho cả API Gateway và Lambda, ta có thể nhìn request từ API Gateway đến Lambda và các service phía sau.

---

## 7. X-Ray giúp debug lỗi gì?

| Tình huống | X-Ray giúp gì? |
|---|---|
| Request chậm | Xem service nào tốn nhiều thời gian |
| Nhiều service gọi nhau | Xem flow request |
| Lỗi không rõ nằm ở đâu | Xem segment nào lỗi |
| Microservices phức tạp | Xem service map |
| Lambda gọi DynamoDB chậm | Xem subsegment DynamoDB |

---

## 8. CloudWatch Logs vs X-Ray

| Nhu cầu | Dùng gì? |
|---|---|
| Xem nội dung lỗi chi tiết | CloudWatch Logs |
| Tìm stack trace | CloudWatch Logs |
| Query log theo keyword | Logs Insights |
| Trace request qua nhiều service | X-Ray |
| Xem bottleneck latency | X-Ray |
| Xem service map | X-Ray |

---

## 9. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| distributed tracing | AWS X-Ray |
| trace request across services | AWS X-Ray |
| service map | AWS X-Ray |
| segment | AWS X-Ray |
| subsegment | AWS X-Ray |
| latency analysis | AWS X-Ray |
| identify bottleneck | AWS X-Ray |
| root cause across microservices | AWS X-Ray |

---

## 10. Dạng câu hỏi exam thường gặp

1. Request đi qua nhiều service và bị chậm.
2. Developer cần tìm service nào gây latency cao.
3. Cần trace request từ API Gateway đến Lambda và DynamoDB.
4. Cần service map của ứng dụng.
5. Cần phân tích hiệu năng distributed application.

---

## 11. Bẫy thường gặp

## Bẫy 1: Chỉ dùng CloudWatch Logs cho distributed tracing

CloudWatch Logs có thể xem lỗi, nhưng không trực quan bằng X-Ray khi request đi qua nhiều service.

Nếu đề nhấn mạnh:

```text
across multiple services
```

hoặc:

```text
distributed tracing
```

thường chọn X-Ray.

---

## Bẫy 2: Quên IAM permission cho X-Ray

Lambda muốn gửi trace vào X-Ray cần quyền phù hợp.

Nếu bật X-Ray nhưng không thấy trace, kiểm tra:

- Lambda tracing đã bật chưa?
- Execution role có quyền X-Ray chưa?
- Service có hỗ trợ X-Ray không?

---

## 12. Lab thực hành

### Yêu cầu

1. Bật X-Ray tracing cho API Gateway.
2. Bật X-Ray tracing cho Lambda.
3. Cho Lambda gọi DynamoDB.
4. Gọi API vài lần.
5. Mở X-Ray service map.
6. Xem trace của một request cụ thể.

### Câu hỏi sau lab

- Request đi qua những service nào?
- Service nào tốn nhiều thời gian nhất?
- Có segment nào báo lỗi không?

---

## 13. Bài tập về nhà

1. X-Ray dùng để làm gì?
2. Trace là gì?
3. Segment là gì?
4. Subsegment là gì?
5. Khi đề nói distributed tracing, nên nghĩ tới service nào?
