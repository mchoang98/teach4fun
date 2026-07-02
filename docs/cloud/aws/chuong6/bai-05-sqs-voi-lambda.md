# Bài 5. SQS với Lambda

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu cách Lambda consume message từ SQS.
- Biết event source mapping là gì.
- Hiểu batch size và partial batch failure.
- Biết cách thiết kế worker Lambda xử lý message an toàn.
- Nhận diện tình huống API Gateway -> Lambda -> SQS -> Worker Lambda trong đề thi.

---

## 2. Kiến trúc phổ biến

Một kiến trúc serverless async rất thường gặp:

```text
API Gateway
  -> Lambda tạo request
  -> SQS Queue
  -> Worker Lambda
  -> DynamoDB / SNS / Service khác
```

Ví dụ booking:

```text
Client tạo booking
API Gateway nhận request
Lambda ghi booking vào DynamoDB và gửi message vào SQS
Worker Lambda lấy message từ SQS để gửi email xác nhận
```

Ưu điểm:

- API trả response nhanh.
- Worker xử lý phía sau.
- Nếu worker lỗi, message có thể retry.
- Có thể dùng DLQ để lưu message lỗi.

---

## 3. Lambda Event Source Mapping là gì?

Event source mapping là cấu hình để Lambda tự động đọc message từ SQS.

Bạn không cần tự viết vòng lặp poll SQS.

AWS sẽ:

```text
Poll SQS -> Lấy batch message -> Invoke Lambda -> Xử lý message
```

Developer chỉ cần viết Lambda handler để xử lý event.

---

## 4. Event từ SQS vào Lambda

Lambda nhận event chứa danh sách records.

Ví dụ đơn giản:

```json
{
  "Records": [
    {
      "messageId": "abc-123",
      "body": "{\"bookingId\":\"B001\"}"
    }
  ]
}
```

Điểm cần nhớ:

- `Records` là mảng.
- Một lần Lambda có thể nhận nhiều message.
- `body` thường là string JSON.
- Code cần parse JSON cẩn thận.

---

## 5. Batch Size

Batch size là số message tối đa Lambda nhận trong một lần invoke.

Ví dụ:

```text
Batch size = 10
Lambda có thể nhận tối đa 10 message một lần
```

Batch size lớn:

- Tăng throughput.
- Giảm số lần invoke.
- Nhưng nếu xử lý lỗi không tốt, nhiều message có thể bị retry.

Batch size nhỏ:

- Dễ kiểm soát lỗi.
- Nhưng throughput có thể thấp hơn.

---

## 6. Partial Batch Failure

Vấn đề:

Nếu Lambda nhận 10 message, 9 message thành công, 1 message lỗi, chuyện gì xảy ra?

Nếu không cấu hình partial batch failure tốt, cả batch có thể bị retry.

Partial batch failure cho phép Lambda báo message nào lỗi, để chỉ retry message lỗi.

Ý tưởng:

```text
Message 1: success
Message 2: success
Message 3: fail
=> Chỉ retry message 3
```

Điều này giúp tránh xử lý lại message đã thành công.

---

## 7. Xử lý lỗi trong Worker Lambda

Worker Lambda nên:

- Parse message body an toàn.
- Validate field bắt buộc.
- Log lỗi rõ ràng.
- Không swallow error một cách im lặng.
- Thiết kế idempotent.
- Dùng DLQ cho message lỗi.
- Cẩn thận với batch processing.

Pseudo-code:

```text
For each record in event.Records:
    parse body
    validate body
    process booking
    if success: done
    if fail: report failure / throw error tùy cấu hình
```

---

## 8. IAM Role cho Lambda

Worker Lambda cần quyền phù hợp.

Ví dụ:

- Đọc message từ SQS.
- Ghi log vào CloudWatch.
- Ghi dữ liệu vào DynamoDB.
- Publish message lên SNS nếu cần.

Nguyên tắc:

```text
Cấp quyền tối thiểu theo least privilege.
```

Không nên cấp quyền quá rộng như `*` nếu không cần.

---

## 9. Scale Lambda với SQS

Lambda có thể scale theo số lượng message trong queue.

Nếu queue nhiều message, AWS có thể invoke nhiều Lambda song song để xử lý.

Cần chú ý:

- Reserved concurrency nếu muốn giới hạn số Lambda chạy cùng lúc.
- DynamoDB hoặc service downstream có thể bị quá tải.
- Visibility timeout phải phù hợp với thời gian xử lý.
- DLQ cần được cấu hình.

---

## 10. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| Lambda consumes SQS messages | Event source mapping |
| process messages in batches | Batch size |
| only failed records should retry | Partial batch failure |
| worker scales with queue depth | Lambda + SQS scaling |
| Lambda needs permission to access queue | Execution role |
| failed messages after retries | DLQ |
| duplicate processing | Idempotent worker |

---

## 11. Dạng câu hỏi exam

### Tình huống 1

Một API cần xử lý đơn hàng bất đồng bộ bằng serverless.

Đáp án:

```text
API Gateway -> Lambda -> SQS -> Worker Lambda
```

### Tình huống 2

Lambda nhận batch 10 message, chỉ 1 message lỗi nhưng cả batch bị retry.

Đáp án:

```text
Cấu hình partial batch failure để chỉ retry message lỗi.
```

### Tình huống 3

Worker Lambda xử lý message chậm làm message bị xử lý lại.

Đáp án:

```text
Tăng visibility timeout và đảm bảo worker idempotent.
```

---

## 12. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Nghĩ Lambda chỉ nhận 1 message/lần | Lambda có thể nhận batch message |
| Không parse body JSON | SQS body thường là string |
| Không dùng partial batch failure | Cả batch có thể retry |
| Không cấu hình DLQ | Message lỗi khó điều tra |
| Không giới hạn concurrency | Downstream service có thể bị quá tải |
| Visibility timeout ngắn hơn thời gian xử lý | Dễ xử lý trùng message |

---

## 13. Bài tập về nhà

### Lý thuyết

1. Event source mapping là gì?
2. Lambda nhận message từ SQS qua field nào?
3. Batch size là gì?
4. Partial batch failure giải quyết vấn đề gì?
5. Vì sao worker Lambda cần idempotent?
6. Vì sao cần DLQ cho SQS worker?
7. Lambda execution role cần quyền gì?
8. Reserved concurrency giúp gì?
9. Visibility timeout liên quan gì tới Lambda worker?
10. Khi nào cả batch message bị retry?

### Lab nhỏ

Thiết kế worker Lambda xử lý booking từ SQS.

Message body mẫu:

```json
{
  "bookingId": "B001",
  "userId": "U001",
  "action": "CONFIRM_BOOKING"
}
```

Yêu cầu:

- Ghi các bước xử lý.
- Ghi lỗi nào cần đưa vào DLQ.
- Ghi log cần có để debug.
