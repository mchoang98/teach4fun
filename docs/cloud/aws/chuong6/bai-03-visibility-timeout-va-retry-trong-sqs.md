# Bài 3. Visibility Timeout và Retry trong SQS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Visibility Timeout trong SQS.
- Biết vì sao message có thể được xử lý nhiều lần.
- Hiểu retry behavior khi consumer xử lý lỗi.
- Biết cách chọn visibility timeout phù hợp.
- Nhận diện keyword đề thi liên quan tới message invisible, duplicate processing và retry.

---

## 2. Vấn đề cần giải quyết

Khi consumer lấy message từ SQS, message không bị xóa ngay.

Lý do:

- Consumer có thể xử lý thành công.
- Consumer cũng có thể bị lỗi giữa chừng.
- Nếu xóa message ngay, job có thể bị mất.

Vì vậy SQS dùng cơ chế Visibility Timeout.

---

## 3. Visibility Timeout là gì?

Visibility Timeout là khoảng thời gian message bị ẩn khỏi các consumer khác sau khi một consumer đã nhận message.

Flow cơ bản:

```text
1. Message nằm trong queue
2. Consumer A nhận message
3. Message bị ẩn trong thời gian visibility timeout
4. Consumer A xử lý xong và xóa message
5. Nếu Consumer A không xóa, message hiện lại sau timeout
```

Ví dụ:

```text
Visibility Timeout = 30 giây
Worker nhận message lúc 10:00:00
Từ 10:00:00 đến 10:00:30 message bị ẩn
Nếu worker không xóa message, sau 10:00:30 message xuất hiện lại
```

---

## 4. Vì sao cần Visibility Timeout?

Visibility Timeout giúp tránh hai consumer xử lý cùng một message cùng lúc.

Không có visibility timeout:

```text
Consumer A nhận message
Consumer B cũng nhận cùng message
Cả hai cùng xử lý trùng
```

Có visibility timeout:

```text
Consumer A nhận message
Message bị ẩn
Consumer B không thấy message đó trong thời gian timeout
```

---

## 5. Nếu xử lý lâu hơn Visibility Timeout thì sao?

Nếu worker xử lý lâu hơn visibility timeout, message có thể hiện lại và bị consumer khác xử lý lại.

Ví dụ:

```text
Visibility Timeout = 30 giây
Worker cần 2 phút để xử lý
Sau 30 giây, message hiện lại
Consumer khác nhận và xử lý trùng
```

Cách xử lý:

- Tăng visibility timeout lớn hơn thời gian xử lý trung bình.
- Worker cần idempotent.
- Có thể gia hạn visibility timeout nếu job xử lý lâu.

---

## 6. Retry trong SQS

Nếu consumer nhận message nhưng xử lý lỗi và không xóa message, message sẽ xuất hiện lại sau visibility timeout.

Đó là cơ chế retry tự nhiên của SQS.

Flow:

```text
Message -> Consumer xử lý lỗi -> không delete message
Message hiện lại -> Consumer khác xử lý lại
```

Nếu message lỗi mãi, nó có thể bị retry nhiều lần.

Khi đó nên dùng DLQ.

---

## 7. Delete Message

Message chỉ được xóa khỏi queue khi consumer gọi DeleteMessage thành công.

Điểm cần nhớ:

- Receive message không có nghĩa là message đã bị xóa.
- Xử lý xong phải delete message.
- Nếu không delete, message sẽ quay lại queue.

---

## 8. Idempotency

Idempotency nghĩa là xử lý lặp lại nhiều lần vẫn không gây sai dữ liệu.

Ví dụ không idempotent:

```text
Mỗi lần xử lý message thì trừ tiền user
Message bị xử lý 2 lần -> user bị trừ tiền 2 lần
```

Ví dụ idempotent:

```text
Kiểm tra transactionId đã xử lý chưa
Nếu đã xử lý rồi thì bỏ qua
```

Với SQS Standard Queue, worker nên được thiết kế idempotent.

---

## 9. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| message invisible while processing | Visibility Timeout |
| message appears again | Visibility Timeout expired |
| duplicate processing | Standard SQS / visibility timeout |
| consumer fails before deleting message | Message returns to queue |
| job takes longer than expected | Increase visibility timeout |
| avoid duplicate side effects | Idempotency |
| failed messages retried many times | DLQ |

---

## 10. Dạng câu hỏi exam

### Tình huống 1

Worker xử lý một message mất 2 phút, nhưng message bị xử lý trùng bởi nhiều worker.

Nguyên nhân có thể:

```text
Visibility Timeout quá ngắn.
```

Giải pháp:

```text
Tăng Visibility Timeout lớn hơn thời gian xử lý.
```

### Tình huống 2

Consumer nhận message, xử lý lỗi, sau đó message quay lại queue.

Giải thích:

```text
Consumer không delete message, nên message xuất hiện lại sau Visibility Timeout.
```

### Tình huống 3

Message có thể được xử lý nhiều lần, nhưng không được gây trừ tiền nhiều lần.

Giải pháp:

```text
Thiết kế consumer idempotent, dùng transactionId/orderId để kiểm tra đã xử lý chưa.
```

---

## 11. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Nghĩ receive message là xóa message | Sai, phải delete message |
| Visibility Timeout quá ngắn | Dễ gây xử lý trùng |
| Visibility Timeout quá dài | Message lỗi mất lâu mới retry |
| Không thiết kế idempotency | Message trùng có thể gây sai dữ liệu |
| Không dùng DLQ | Message lỗi bị retry mãi khó debug |

---

## 12. Bài tập về nhà

### Lý thuyết

1. Visibility Timeout là gì?
2. Vì sao message bị ẩn sau khi consumer nhận?
3. Khi nào message hiện lại queue?
4. DeleteMessage dùng để làm gì?
5. Vì sao Standard Queue có thể xử lý message nhiều lần?
6. Idempotency là gì?
7. Nếu worker xử lý lâu hơn Visibility Timeout thì sao?
8. Khi nào nên tăng Visibility Timeout?
9. Khi nào nên dùng DLQ?
10. Vì sao retry có thể gây lỗi nghiệp vụ nếu code không cẩn thận?

### Tình huống

Một worker xử lý resize ảnh mất khoảng 90 giây. Visibility Timeout đang để 30 giây. Hãy giải thích lỗi có thể xảy ra và cách sửa.

### Lab nhỏ

Viết pseudo-flow xử lý message:

```text
Receive message
Process message
If success -> Delete message
If fail -> Do not delete message
```

Giải thích điều gì xảy ra ở từng trường hợp.
