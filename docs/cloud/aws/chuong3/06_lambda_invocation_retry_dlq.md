# Bài 6. Lambda Invocation, Retry và Dead-letter Queue

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Phân biệt synchronous và asynchronous invocation.
- Hiểu retry behavior của Lambda.
- Hiểu Dead-letter Queue dùng để làm gì.
- Biết cách xử lý lỗi trong kiến trúc event-driven.

---

## 2. Lambda Invocation là gì?

Invocation là một lần Lambda được gọi chạy.

Lambda có thể được gọi theo nhiều cách:

- API Gateway gọi Lambda.
- S3 event gọi Lambda.
- SQS gọi Lambda.
- EventBridge gọi Lambda.
- Một Lambda khác gọi Lambda.

Cách Lambda được gọi ảnh hưởng đến retry và xử lý lỗi.

---

## 3. Synchronous Invocation

Synchronous invocation nghĩa là service gọi Lambda và chờ kết quả trả về.

Ví dụ:

```text
Client -> API Gateway -> Lambda -> Response
```

Trong trường hợp này:

- Client thường chờ response.
- Nếu Lambda lỗi, lỗi được trả về cho caller.
- Caller có thể tự quyết định retry.

Dịch vụ thường dùng synchronous invocation:

- API Gateway
- Application Load Balancer
- SDK gọi trực tiếp Lambda với RequestResponse

---

## 4. Asynchronous Invocation

Asynchronous invocation nghĩa là event được gửi tới Lambda, nhưng caller không chờ kết quả xử lý.

Ví dụ:

```text
S3 upload file -> Lambda xử lý file
```

Trong trường hợp này:

- Event được đưa vào hàng đợi nội bộ của Lambda.
- Lambda xử lý sau.
- Nếu lỗi, Lambda có thể retry tự động.

Dịch vụ thường dùng async invocation:

- S3
- SNS
- EventBridge

---

## 5. Retry Behavior

Retry là việc Lambda thử xử lý lại khi có lỗi.

Tùy nguồn gọi, retry behavior khác nhau.

Ví dụ:

| Nguồn gọi | Retry thường gặp |
|---|---|
| API Gateway | Caller/client thường quyết định retry |
| S3 async event | Lambda có thể retry |
| SNS | Có retry theo chính sách dịch vụ |
| SQS | Message quay lại queue sau visibility timeout |

Điểm quan trọng: Với SQS, Lambda không xóa message nếu xử lý thất bại. Message sẽ xuất hiện lại sau visibility timeout.

---

## 6. Dead-letter Queue là gì?

Dead-letter Queue, viết tắt là DLQ, là nơi chứa message/event xử lý thất bại sau nhiều lần retry.

DLQ giúp:

- Không mất message lỗi.
- Tránh retry vô hạn.
- Cho phép developer debug sau.
- Tách lỗi ra khỏi flow chính.

Ví dụ:

```text
SQS Main Queue -> Worker Lambda
Nếu lỗi nhiều lần -> Message vào DLQ
```

---

## 7. Khi nào cần DLQ?

Nên dùng DLQ khi:

- Xử lý async job.
- Message quan trọng không được mất.
- Có khả năng lỗi do data sai.
- Cần debug message lỗi sau.
- Cần tránh retry mãi làm tốn chi phí.

---

## 8. Idempotency cơ bản

Vì Lambda hoặc queue có thể retry, cùng một event có thể bị xử lý nhiều lần.

Do đó, code nên idempotent.

Idempotent nghĩa là xử lý nhiều lần nhưng kết quả không bị sai.

Ví dụ:

```text
Nếu booking_id đã xử lý rồi -> không tạo lại booking mới
```

---

## 9. Kiến thức thi cần nhớ

- API Gateway gọi Lambda thường là synchronous.
- S3, SNS, EventBridge thường có thể gọi Lambda async.
- SQS retry dựa vào visibility timeout và message không bị xóa nếu Lambda lỗi.
- DLQ dùng để lưu message/event xử lý thất bại.
- Async architecture cần chú ý retry và idempotency.

---

## 10. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| synchronous invocation | Caller chờ response |
| asynchronous invocation | Event xử lý sau |
| failed event | Retry / DLQ |
| message processed multiple times | Idempotency |
| failed messages | Dead-letter Queue |
| retry loop | DLQ / max receive count |
| event lost | Destination / DLQ |

---

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

API Gateway gọi Lambda, Lambda lỗi. Ai nhận lỗi?

Đáp án: **caller/client thông qua API Gateway**.

### Tình huống 2

Message trong SQS xử lý lỗi nhiều lần, cần lưu lại để debug.

Đáp án nên nghĩ tới: **Dead-letter Queue**.

### Tình huống 3

Một event có thể bị xử lý nhiều lần, cần tránh tạo dữ liệu trùng.

Đáp án nên nghĩ tới: **idempotency**.

---

## 12. Bẫy thường gặp

- Không phải mọi Lambda error đều retry giống nhau.
- DLQ không sửa lỗi tự động, nó chỉ lưu message lỗi.
- Với SQS, nếu Lambda xử lý lỗi, message có thể quay lại queue.
- Code không idempotent có thể tạo dữ liệu trùng khi retry.

---

## 13. Bài tập về nhà

### Lý thuyết

1. Synchronous invocation là gì?
2. Asynchronous invocation là gì?
3. DLQ dùng để làm gì?
4. Vì sao cần idempotency?
5. SQS message xử lý lỗi thì chuyện gì xảy ra?

### Lab đề xuất

- Tạo SQS queue.
- Tạo Lambda consume message.
- Cố ý throw error trong Lambda.
- Cấu hình DLQ.
- Quan sát message lỗi chuyển vào DLQ.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
