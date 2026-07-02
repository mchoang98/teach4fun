# Bài 8. Troubleshooting DynamoDB và SQS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết các lỗi thường gặp của DynamoDB.
- Biết xử lý throttling, hot partition, Scan chậm.
- Biết các lỗi thường gặp của SQS.
- Biết xử lý retry loop, visibility timeout và DLQ.
- Biết nhận diện keyword exam liên quan DynamoDB/SQS troubleshooting.

---

# Phần 1. Troubleshooting DynamoDB

## 2. Lỗi DynamoDB thường gặp

| Hiện tượng | Nguyên nhân có thể |
|---|---|
| Throttling | Không đủ capacity hoặc hot partition |
| Query chậm | Thiết kế key chưa tốt hoặc dùng Scan |
| Không query được theo field mong muốn | Thiếu GSI |
| Chi phí cao | Scan nhiều, capacity cấu hình sai |
| AccessDenied | IAM role thiếu quyền DynamoDB |
| ConditionalCheckFailed | Điều kiện ghi dữ liệu không thỏa |

---

## 3. DynamoDB Throttling

Throttling xảy ra khi request vượt quá khả năng xử lý hiện tại.

Nguyên nhân:

- Provisioned capacity quá thấp.
- Traffic tăng đột biến.
- Hot partition.
- Một partition key nhận quá nhiều request.

Metric cần xem:

```text
ThrottledRequests
ConsumedReadCapacityUnits
ConsumedWriteCapacityUnits
```

---

## 4. Cách xử lý DynamoDB throttling

Tùy tình huống:

| Tình huống | Hướng xử lý |
|---|---|
| Traffic khó dự đoán | Dùng on-demand capacity |
| Traffic ổn định | Dùng provisioned + auto scaling |
| Request bị retry | Dùng exponential backoff |
| Hot partition | Thiết kế lại partition key |
| Đọc nhiều lặp lại | Cân nhắc DAX/cache |

---

## 5. Query vs Scan

Query dùng partition key và hiệu quả hơn.

Scan đọc toàn bộ table và thường chậm/tốn chi phí.

Nếu đề nói:

```text
Application performs full table scan and is slow/costly
```

Nghĩ tới:

```text
Use Query with proper partition key or create GSI
```

---

## 6. GSI để query theo field khác

Nếu table `Bookings` có partition key là `userId`, nhưng cần query theo `status`, có thể cần GSI.

Ví dụ:

```text
GSI: status-createdAt-index
Partition key: status
Sort key: createdAt
```

---

# Phần 2. Troubleshooting SQS

## 7. Lỗi SQS thường gặp

| Hiện tượng | Nguyên nhân có thể |
|---|---|
| Message xử lý nhiều lần | Standard Queue at-least-once delivery |
| Message retry liên tục | Worker xử lý lỗi hoặc không delete message |
| Message vào DLQ | Vượt maxReceiveCount |
| Worker xử lý chưa xong message đã hiện lại | Visibility timeout quá ngắn |
| Queue tồn đọng nhiều message | Worker không đủ nhanh hoặc lỗi |
| Thứ tự message không đúng | Dùng Standard Queue thay vì FIFO |

---

## 8. Visibility Timeout

Visibility timeout là thời gian message bị ẩn sau khi worker nhận message.

Ví dụ:

```text
Worker nhận message
Message bị ẩn trong 30 giây
Nếu worker xử lý xong và delete message -> message biến mất
Nếu worker không delete -> message hiện lại sau 30 giây
```

Nếu worker xử lý mất 2 phút nhưng visibility timeout chỉ 30 giây, message có thể bị xử lý lặp.

Hướng xử lý:

- Tăng visibility timeout.
- Tối ưu worker.
- Dùng ChangeMessageVisibility nếu cần gia hạn.

---

## 9. Dead-letter Queue

DLQ lưu message không xử lý thành công sau nhiều lần retry.

Cấu hình thường có:

```text
maxReceiveCount
```

Ví dụ:

```text
Nếu message nhận 5 lần vẫn lỗi -> chuyển sang DLQ
```

DLQ giúp:

- Không retry lỗi mãi mãi.
- Giữ message lỗi để phân tích.
- Tránh chặn queue chính.

---

## 10. Partial Batch Failure với Lambda SQS

Khi Lambda consume SQS theo batch, nếu một message lỗi, cần xử lý cẩn thận.

Nếu không cấu hình partial batch failure, cả batch có thể bị retry.

Partial batch failure cho phép báo message nào lỗi, message nào thành công.

Điều này giúp giảm retry không cần thiết.

---

## 11. Metric cần xem

## DynamoDB

| Metric | Ý nghĩa |
|---|---|
| ThrottledRequests | Request bị throttled |
| ConsumedReadCapacityUnits | Read capacity đã dùng |
| ConsumedWriteCapacityUnits | Write capacity đã dùng |
| SuccessfulRequestLatency | Độ trễ request thành công |

## SQS

| Metric | Ý nghĩa |
|---|---|
| ApproximateNumberOfMessagesVisible | Message đang chờ xử lý |
| ApproximateNumberOfMessagesNotVisible | Message đang được xử lý |
| ApproximateAgeOfOldestMessage | Tuổi message cũ nhất |
| NumberOfMessagesDeleted | Message đã xử lý xong |

---

## 12. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| DynamoDB throttling | Capacity / hot partition / backoff |
| hot partition | Partition key design |
| full table read | Scan |
| query by another attribute | GSI |
| exponential backoff | Retry throttled request |
| message processed multiple times | SQS Standard / visibility timeout |
| failed messages | DLQ |
| message invisible while processing | Visibility timeout |
| strict ordering | SQS FIFO |
| queue backlog | SQS messages visible |

---

## 13. Dạng câu hỏi exam thường gặp

1. DynamoDB bị throttling khi traffic tăng.
2. Query chậm vì app dùng Scan.
3. Cần query dữ liệu theo attribute không phải key.
4. SQS message bị xử lý nhiều lần.
5. Worker xử lý lỗi làm message retry mãi.
6. Cần lưu message lỗi để phân tích sau.
7. Cần đảm bảo thứ tự message.
8. Queue tồn đọng nhiều message.

---

## 14. Bẫy thường gặp

## Bẫy 1: Standard SQS không đảm bảo chỉ xử lý đúng một lần

Standard Queue hỗ trợ at-least-once delivery. Vì vậy app cần idempotent.

## Bẫy 2: Visibility timeout không phải message retention

- Visibility timeout: message bị ẩn trong lúc xử lý.
- Message retention: thời gian message tồn tại trong queue.

## Bẫy 3: DynamoDB Scan không phù hợp cho truy vấn thường xuyên

Nếu cần truy vấn thường xuyên theo một field, nên thiết kế key hoặc GSI phù hợp.

---

## 15. Lab thực hành

### Lab 1: DynamoDB throttling giả lập

1. Tạo DynamoDB table ở provisioned capacity thấp.
2. Gửi nhiều request ghi liên tục.
3. Xem metric `ThrottledRequests`.
4. Chuyển sang on-demand hoặc tăng capacity.
5. Test lại.

### Lab 2: SQS DLQ

1. Tạo SQS queue chính.
2. Tạo DLQ.
3. Cấu hình `maxReceiveCount = 3`.
4. Worker Lambda cố ý throw error.
5. Kiểm tra message vào DLQ.

---

## 16. Bài tập về nhà

1. DynamoDB throttling thường do nguyên nhân nào?
2. Hot partition là gì?
3. Khi cần query theo field khác partition key, dùng gì?
4. Visibility timeout là gì?
5. DLQ dùng để làm gì?
