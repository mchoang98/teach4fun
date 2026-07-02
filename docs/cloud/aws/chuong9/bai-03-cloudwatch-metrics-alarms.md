# Bài 3. CloudWatch Metrics và Alarms

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu CloudWatch Metrics là gì.
- Biết các metric quan trọng của Lambda, API Gateway, DynamoDB và SQS.
- Biết CloudWatch Alarm dùng để cảnh báo khi có sự cố.
- Biết nhận diện keyword liên quan đến metrics và alarms trong đề thi.

---

## 2. CloudWatch Metrics là gì?

Metric là số liệu đo lường hoạt động của service.

Ví dụ:

```text
Lambda Errors = 10
Lambda Duration = 250ms
API Gateway 5XXError = 3
DynamoDB ThrottledRequests = 20
SQS ApproximateNumberOfMessagesVisible = 100
```

CloudWatch Metrics giúp ta biết hệ thống đang ổn hay đang có vấn đề.

---

## 3. Metric quan trọng của Lambda

| Metric | Ý nghĩa |
|---|---|
| Invocations | Số lần Lambda được gọi |
| Errors | Số lần Lambda lỗi |
| Duration | Thời gian Lambda chạy |
| Throttles | Số lần Lambda bị giới hạn concurrency |
| ConcurrentExecutions | Số Lambda chạy đồng thời |
| IteratorAge | Độ trễ khi xử lý stream/event source |

## Khi nào dùng?

- Lambda chậm: xem `Duration`.
- Lambda lỗi: xem `Errors`.
- Lambda bị limit: xem `Throttles`.
- Lambda xử lý stream chậm: xem `IteratorAge`.

---

## 4. Metric quan trọng của API Gateway

| Metric | Ý nghĩa |
|---|---|
| Count | Số request |
| Latency | Tổng độ trễ |
| IntegrationLatency | Độ trễ backend integration |
| 4XXError | Lỗi phía client |
| 5XXError | Lỗi phía server/backend |

## Gợi ý đọc metric

Nếu `Latency` cao nhưng `IntegrationLatency` thấp, có thể vấn đề nằm ở API Gateway overhead hoặc cấu hình khác.

Nếu `IntegrationLatency` cao, backend như Lambda hoặc HTTP integration có thể đang chậm.

---

## 5. Metric quan trọng của DynamoDB

| Metric | Ý nghĩa |
|---|---|
| ConsumedReadCapacityUnits | Số read capacity đã dùng |
| ConsumedWriteCapacityUnits | Số write capacity đã dùng |
| ThrottledRequests | Số request bị throttled |
| SuccessfulRequestLatency | Độ trễ request thành công |
| SystemErrors | Lỗi hệ thống |
| UserErrors | Lỗi do request/user |

---

## 6. Metric quan trọng của SQS

| Metric | Ý nghĩa |
|---|---|
| ApproximateNumberOfMessagesVisible | Số message đang chờ xử lý |
| ApproximateNumberOfMessagesNotVisible | Số message đang được xử lý |
| ApproximateAgeOfOldestMessage | Tuổi của message cũ nhất |
| NumberOfMessagesSent | Số message gửi vào queue |
| NumberOfMessagesReceived | Số message được nhận |
| NumberOfMessagesDeleted | Số message được xóa sau xử lý |

Nếu `ApproximateAgeOfOldestMessage` tăng cao, worker có thể xử lý không kịp.

---

## 7. CloudWatch Alarm là gì?

CloudWatch Alarm dùng để cảnh báo khi metric vượt ngưỡng.

Ví dụ:

```text
Nếu Lambda Errors >= 5 trong 5 phút -> gửi thông báo qua SNS
```

Alarm thường dùng với:

- Lambda error rate.
- API Gateway 5xx.
- DynamoDB throttling.
- SQS queue backlog.
- Lambda duration quá cao.

---

## 8. Ví dụ alarm thực tế

## Alarm 1: Lambda Error

```text
Metric: AWS/Lambda Errors
Condition: Errors >= 5 trong 5 phút
Action: Gửi SNS notification
```

## Alarm 2: API Gateway 5xx

```text
Metric: AWS/ApiGateway 5XXError
Condition: 5XXError >= 10 trong 5 phút
Action: Gửi cảnh báo
```

## Alarm 3: SQS backlog

```text
Metric: ApproximateNumberOfMessagesVisible
Condition: MessagesVisible > 1000
Action: Cảnh báo worker xử lý chậm
```

---

## 9. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| metrics | CloudWatch Metrics |
| alarm | CloudWatch Alarm |
| notify when threshold exceeded | CloudWatch Alarm + SNS |
| error rate | Errors / 5XXError |
| latency | Duration / Latency |
| throttles | Lambda/DynamoDB throttling |
| queue backlog | SQS messages visible |
| oldest message age | SQS ApproximateAgeOfOldestMessage |

---

## 10. Dạng câu hỏi exam thường gặp

1. Cần cảnh báo khi Lambda error tăng.
2. Cần biết API Gateway đang trả nhiều lỗi 5xx.
3. Cần phát hiện SQS worker xử lý không kịp.
4. Cần theo dõi DynamoDB bị throttling.
5. Cần biết Lambda chạy chậm hơn bình thường.

---

## 11. Bẫy thường gặp

## Bẫy 1: CloudWatch Alarm không tự sửa lỗi

Alarm chỉ cảnh báo hoặc trigger action. Nó không tự động debug nguyên nhân lỗi.

## Bẫy 2: Metric không thay thế log

Metric cho biết có vấn đề. Log giúp biết chi tiết vấn đề là gì.

Ví dụ:

```text
Metric Errors tăng -> biết Lambda lỗi
CloudWatch Logs -> biết lỗi AccessDenied hoặc timeout
```

---

## 12. Lab thực hành

### Yêu cầu

1. Vào Lambda `createBooking`.
2. Xem metric:
   - Invocations
   - Errors
   - Duration
3. Cố ý tạo lỗi trong Lambda.
4. Tạo CloudWatch Alarm khi `Errors >= 1`.
5. Gửi alarm đến SNS topic.

---

## 13. Bài tập về nhà

1. CloudWatch Metrics dùng để làm gì?
2. CloudWatch Alarm dùng để làm gì?
3. Lambda metric `Duration` cho biết gì?
4. API Gateway metric `5XXError` thường liên quan đến lỗi nào?
5. SQS metric nào cho biết queue đang tồn đọng nhiều message?
