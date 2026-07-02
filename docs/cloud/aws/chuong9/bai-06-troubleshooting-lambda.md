# Bài 6. Troubleshooting Lambda

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết các lỗi Lambda thường gặp.
- Biết cách debug Lambda timeout, memory, permission, cold start.
- Biết các metric quan trọng khi kiểm tra Lambda.
- Biết hướng xử lý lỗi Lambda trong đề thi.

---

## 2. Các lỗi Lambda thường gặp

| Hiện tượng | Nguyên nhân có thể |
|---|---|
| Lambda timeout | Code chạy lâu, gọi API ngoài chậm, timeout quá thấp |
| AccessDenied | Execution role thiếu quyền |
| Memory exceeded | Memory cấu hình thấp |
| Throttling | Vượt concurrency limit |
| Cold start chậm | Runtime/package lớn, VPC, init code nặng |
| Không thấy log | Role thiếu quyền CloudWatch Logs |
| Retry nhiều lần | Async invocation hoặc event source retry |
| Message vào DLQ | Xử lý lỗi vượt số lần retry |

---

## 3. Troubleshooting Lambda timeout

Thông báo thường gặp:

```text
Task timed out after 3.00 seconds
```

Cần kiểm tra:

1. Timeout setting của Lambda.
2. Code có vòng lặp lâu không.
3. Có gọi service ngoài không.
4. Có truy vấn database chậm không.
5. Memory có quá thấp không.
6. Có cần xử lý async bằng SQS không.

## Hướng xử lý

- Tăng timeout nếu hợp lý.
- Tăng memory để tăng CPU tương ứng.
- Tối ưu code.
- Tối ưu truy vấn database.
- Chuyển job lâu sang SQS worker.

---

## 4. Troubleshooting AccessDenied

Lỗi thường gặp:

```text
AccessDeniedException: User is not authorized to perform dynamodb:PutItem
```

Cần kiểm tra:

- Lambda execution role.
- IAM policy có action cần thiết không.
- Resource ARN có đúng không.
- Có explicit deny không.
- Service có dùng đúng role không.

Ví dụ Lambda ghi DynamoDB cần quyền:

```text
dynamodb:PutItem
```

---

## 5. Troubleshooting memory

Lambda report log có thể có:

```text
Memory Size: 128 MB
Max Memory Used: 126 MB
```

Nếu `Max Memory Used` gần bằng `Memory Size`, có thể cần tăng memory.

Lưu ý: tăng memory cũng tăng CPU tương ứng, đôi khi giúp Lambda chạy nhanh hơn.

---

## 6. Troubleshooting throttling

Lambda bị throttle khi số lượng concurrent executions vượt giới hạn.

Cần kiểm tra metric:

```text
Throttles
ConcurrentExecutions
```

Hướng xử lý:

- Tăng account concurrency limit nếu cần.
- Cấu hình reserved concurrency phù hợp.
- Dùng SQS để buffer request.
- Giảm tốc độ gọi Lambda.

---

## 7. Cold start

Cold start là thời gian Lambda khởi tạo môi trường mới trước khi chạy handler.

Cold start có thể tăng khi:

- Package quá lớn.
- Runtime khởi động chậm.
- Init code nặng.
- Lambda trong VPC cần ENI.
- Dependency quá nhiều.

Hướng giảm cold start:

- Giảm package size.
- Tối ưu init code.
- Dùng provisioned concurrency nếu cần latency ổn định.
- Reuse connection bên ngoài handler.

---

## 8. Retry và DLQ

Lambda async invocation có retry khi lỗi.

Event source như SQS cũng có cơ chế retry riêng.

Nếu message lỗi nhiều lần, có thể đưa vào DLQ.

Cần nhớ:

- Retry giúp xử lý lỗi tạm thời.
- DLQ giúp lưu message lỗi để phân tích sau.
- Code xử lý message nên idempotent.

---

## 9. Metric Lambda cần nhớ

| Metric | Ý nghĩa |
|---|---|
| Invocations | Số lần gọi |
| Errors | Số lỗi |
| Duration | Thời gian chạy |
| Throttles | Số lần bị throttle |
| ConcurrentExecutions | Số execution đồng thời |
| IteratorAge | Độ trễ khi xử lý stream |

---

## 10. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| Task timed out | Lambda timeout |
| AccessDeniedException | IAM execution role |
| reduce cold start | Provisioned concurrency / optimize package |
| stable low latency | Provisioned concurrency |
| throttle Lambda | Concurrency limit |
| memory tuning | Lambda memory setting |
| async retry | Lambda async invocation retry |
| failed events | DLQ / destinations |

---

## 11. Dạng câu hỏi exam thường gặp

1. Lambda bị timeout khi xử lý file lớn.
2. Lambda không ghi được DynamoDB do AccessDenied.
3. Lambda bị cold start làm API chậm.
4. Lambda bị gọi quá nhiều và bị throttled.
5. Lambda xử lý async bị lỗi và cần lưu event lỗi.
6. Lambda chạy chậm và cần tối ưu CPU/memory.

---

## 12. Bẫy thường gặp

## Bẫy 1: Tăng timeout không phải lúc nào cũng đúng

Nếu Lambda xử lý job rất lâu, giải pháp tốt hơn có thể là:

```text
API Gateway -> Lambda -> SQS -> Worker Lambda
```

## Bẫy 2: Hard-code credentials trong Lambda

Lambda cần truy cập AWS service thì nên dùng execution role, không hard-code access key.

## Bẫy 3: Chỉ tăng memory mà không xem log

Cần xem `Max Memory Used`, `Duration`, error log trước khi quyết định.

---

## 13. Lab thực hành

### Lab 1: Tạo lỗi timeout

1. Tạo Lambda timeout 3 giây.
2. Cho code sleep 5 giây.
3. Gọi Lambda.
4. Xem log `Task timed out`.
5. Tăng timeout lên 10 giây và test lại.

### Lab 2: Tạo lỗi AccessDenied

1. Lambda gọi DynamoDB `PutItem`.
2. Gỡ quyền `dynamodb:PutItem` khỏi role.
3. Gọi Lambda.
4. Xem lỗi AccessDenied.
5. Thêm quyền đúng và test lại.

---

## 14. Bài tập về nhà

1. Lambda timeout thường do những nguyên nhân nào?
2. Khi Lambda bị AccessDenied, cần kiểm tra gì?
3. Cold start là gì?
4. Provisioned concurrency dùng khi nào?
5. Lambda metric `Throttles` có ý nghĩa gì?
