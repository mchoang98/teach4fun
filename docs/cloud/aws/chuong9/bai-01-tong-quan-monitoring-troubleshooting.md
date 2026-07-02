# Bài 1. Tổng quan Monitoring và Troubleshooting

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu monitoring là gì.
- Hiểu troubleshooting là gì.
- Phân biệt được log, metric, alarm và trace.
- Biết quy trình cơ bản khi tìm lỗi trong ứng dụng AWS.
- Nhận diện keyword thường gặp trong đề thi.

---

## 2. Giải thích dễ hiểu

Khi ứng dụng chạy trên AWS, ta không thể chỉ nhìn vào code để biết hệ thống đang hoạt động tốt hay không.

Ví dụ một API booking bị lỗi:

```text
User -> API Gateway -> Lambda -> DynamoDB
```

Nếu user báo lỗi, ta cần biết lỗi nằm ở đâu:

- API Gateway có nhận request không?
- Lambda có chạy không?
- Lambda có timeout không?
- Lambda có bị AccessDenied không?
- DynamoDB có bị throttling không?
- Có message nào bị đưa vào DLQ không?

Monitoring giúp ta quan sát hệ thống. Troubleshooting giúp ta tìm nguyên nhân lỗi.

---

## 3. Các khái niệm quan trọng

## Log

Log là thông tin chi tiết được ghi lại trong quá trình ứng dụng chạy.

Ví dụ:

```text
User created booking successfully
AccessDeniedException: User is not authorized
Task timed out after 3.00 seconds
```

Dùng để trả lời câu hỏi:

```text
Chuyện gì đã xảy ra?
```

---

## Metric

Metric là số liệu đo lường.

Ví dụ:

- Số lượng request.
- Số lượng lỗi.
- Thời gian xử lý trung bình.
- Số lần Lambda bị throttled.
- Số message trong queue.

Dùng để trả lời câu hỏi:

```text
Hệ thống đang hoạt động như thế nào?
```

---

## Alarm

Alarm là cảnh báo khi metric vượt ngưỡng.

Ví dụ:

```text
Nếu Lambda Error > 5 trong 5 phút -> gửi cảnh báo
```

Dùng để trả lời câu hỏi:

```text
Khi nào cần thông báo cho developer/devops?
```

---

## Trace

Trace giúp theo dõi một request đi qua nhiều service.

Ví dụ:

```text
API Gateway -> Lambda -> DynamoDB -> SNS
```

Dùng để trả lời câu hỏi:

```text
Request chậm ở service nào?
```

---

## 4. Dịch vụ AWS cần nhớ

| Nhu cầu | Dịch vụ nên nghĩ tới |
|---|---|
| Xem log ứng dụng | CloudWatch Logs |
| Xem số liệu hệ thống | CloudWatch Metrics |
| Tạo cảnh báo | CloudWatch Alarms |
| Tìm kiếm log bằng câu query | CloudWatch Logs Insights |
| Trace request qua nhiều service | AWS X-Ray |
| Xem message lỗi | SQS DLQ |
| Theo dõi thay đổi API call | CloudTrail |

---

## 5. Quy trình tìm lỗi cơ bản

Khi một API bị lỗi, có thể đi theo quy trình sau:

```text
Bước 1: Xác định lỗi là 4xx hay 5xx
Bước 2: Xem API Gateway logs
Bước 3: Xem Lambda logs
Bước 4: Xem CloudWatch Metrics
Bước 5: Nếu request đi qua nhiều service, xem X-Ray trace
Bước 6: Kiểm tra IAM permission nếu có AccessDenied
Bước 7: Kiểm tra timeout, throttling, retry, DLQ
```

---

## 6. Các lỗi phổ biến trong serverless app

| Hiện tượng | Nguyên nhân thường gặp |
|---|---|
| API Gateway trả 403 | Sai permission hoặc authorizer |
| API Gateway trả 429 | Bị throttling |
| API Gateway trả 502 | Lambda response sai format hoặc Lambda lỗi |
| Lambda timeout | Code chạy quá lâu hoặc gọi service ngoài chậm |
| Lambda AccessDenied | Thiếu IAM permission |
| DynamoDB throttling | Thiếu capacity hoặc hot partition |
| SQS message retry mãi | Worker xử lý lỗi nhưng không delete message |
| Message vào DLQ | Message vượt quá số lần retry |
| Request chậm không rõ lý do | Cần X-Ray trace |

---

## 7. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| application logs | CloudWatch Logs |
| metrics and alarms | CloudWatch Metrics / Alarms |
| search logs | CloudWatch Logs Insights |
| distributed tracing | AWS X-Ray |
| root cause analysis | CloudWatch + X-Ray |
| error rate | CloudWatch Metrics |
| latency | CloudWatch / X-Ray |
| 5xx errors | Backend / Lambda / integration error |
| AccessDenied | IAM permission |
| throttling | Limit / capacity / retry / backoff |

---

## 8. Dạng câu hỏi exam thường gặp

1. Ứng dụng bị lỗi nhưng developer cần xem log chi tiết.
2. Cần cảnh báo khi Lambda error tăng cao.
3. Request đi qua nhiều microservice và bị chậm.
4. API Gateway trả 502.
5. Lambda bị timeout.
6. DynamoDB bị throttling.
7. Message trong SQS bị retry liên tục.
8. Cần tìm nguyên nhân lỗi nhanh trong nhiều log.

---

## 9. Bẫy thường gặp

## Bẫy 1: Nhầm CloudWatch Logs với X-Ray

- CloudWatch Logs dùng để xem log text.
- X-Ray dùng để trace request qua nhiều service.

Nếu đề nói:

```text
Trace request across multiple services
```

Đáp án thường là:

```text
AWS X-Ray
```

---

## Bẫy 2: Nhầm CloudWatch Alarm với CloudTrail

- CloudWatch Alarm cảnh báo theo metric.
- CloudTrail ghi lại API call trong AWS account.

Nếu đề nói:

```text
Who deleted this resource?
```

Nghĩ tới:

```text
CloudTrail
```

Nếu đề nói:

```text
Notify when error rate exceeds threshold
```

Nghĩ tới:

```text
CloudWatch Alarm
```

---

## 10. Lab thực hành

### Yêu cầu

Với project Serverless Booking API:

1. Tạo Lambda `createBooking`.
2. Ghi log khi bắt đầu xử lý request.
3. Ghi log khi tạo booking thành công.
4. Cố ý tạo lỗi để xem log trong CloudWatch.
5. Xem metric `Errors` và `Duration` của Lambda.

### Gợi ý log trong Lambda

```javascript
console.log("Start create booking", event);
console.log("Booking created", bookingId);
console.error("Create booking failed", error);
```

---

## 11. Bài tập về nhà

1. Giải thích log, metric, alarm, trace khác nhau thế nào.
2. Khi API Gateway trả 502, cần kiểm tra những gì?
3. Khi Lambda bị AccessDenied, nên kiểm tra service nào?
4. Khi cần trace request qua nhiều service, dùng AWS service nào?
5. Tạo bảng keyword gồm ít nhất 10 keyword troubleshooting.
