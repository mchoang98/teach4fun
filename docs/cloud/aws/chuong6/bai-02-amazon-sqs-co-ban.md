# Bài 2. Amazon SQS cơ bản

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Amazon SQS là gì.
- Biết Standard Queue và FIFO Queue khác nhau thế nào.
- Hiểu các khái niệm message retention, delay queue, long polling.
- Biết khi nào dùng SQS trong đề thi DVA-C02.

---

## 2. Amazon SQS là gì?

Amazon SQS là dịch vụ hàng đợi message được quản lý bởi AWS.

SQS giúp một service gửi message vào queue, service khác lấy message ra xử lý sau.

Kiến trúc đơn giản:

```text
Producer -> SQS Queue -> Consumer
```

Trong đó:

- Producer: service gửi message vào queue.
- Queue: nơi lưu message tạm thời.
- Consumer: service lấy message ra xử lý.

Ví dụ thực tế:

```text
API tạo booking -> SQS Queue -> Worker Lambda xác nhận booking
```

---

## 3. Vì sao cần SQS?

SQS giúp:

- Tách service gửi yêu cầu khỏi service xử lý.
- Xử lý job bất đồng bộ.
- Giảm timeout cho API.
- Cho phép retry khi xử lý lỗi.
- Scale worker độc lập.
- Tăng độ bền cho message.

Ví dụ nếu không dùng SQS:

```text
API -> xử lý booking -> gửi email -> tạo invoice -> trả response
```

API dễ chậm và dễ timeout.

Nếu dùng SQS:

```text
API -> gửi message vào SQS -> trả response nhanh
Worker -> lấy message xử lý sau
```

---

## 4. Standard Queue

Standard Queue là loại queue mặc định của SQS.

Đặc điểm:

- Throughput rất cao.
- Message có thể được xử lý nhiều hơn một lần.
- Thứ tự message không được đảm bảo tuyệt đối.
- Phù hợp với phần lớn use case async processing.

Dùng khi:

- Không cần thứ tự nghiêm ngặt.
- Chấp nhận thiết kế worker idempotent.
- Cần throughput cao.

Ví dụ:

- Gửi email.
- Xử lý ảnh.
- Tạo báo cáo.
- Xử lý log.

Keyword exam:

```text
high throughput
at-least-once delivery
best-effort ordering
message may be processed more than once
```

---

## 5. FIFO Queue

FIFO là First-In-First-Out.

Đặc điểm:

- Đảm bảo thứ tự message.
- Hỗ trợ exactly-once processing ở mức queue operation.
- Throughput thấp hơn Standard Queue.
- Tên queue phải kết thúc bằng `.fifo`.

Dùng khi:

- Cần xử lý đúng thứ tự.
- Cần tránh trùng lặp message ở mức queue.
- Các message có liên quan theo một chuỗi nghiệp vụ.

Ví dụ:

- Giao dịch tài chính.
- Cập nhật trạng thái đơn hàng theo thứ tự.
- Xử lý booking theo từng user/order.

Keyword exam:

```text
strict ordering
first in first out
exactly-once processing
message group id
message deduplication id
```

---

## 6. Message Retention

Message retention là thời gian SQS giữ message trong queue nếu chưa được xử lý.

Điểm cần nhớ:

- Message không được giữ mãi mãi.
- Nếu hết thời gian retention, message bị xóa.
- Dùng để tránh queue phình quá lâu.

Trong đề thi, nếu yêu cầu lưu message dài hạn hoặc audit lâu dài, SQS không phải lựa chọn tốt nhất. Khi đó có thể cần S3, DynamoDB hoặc database.

---

## 7. Delay Queue

Delay Queue cho phép message không xuất hiện ngay với consumer.

Ví dụ:

```text
Gửi message vào queue
Chờ 5 phút
Worker mới thấy message và xử lý
```

Dùng khi:

- Cần trì hoãn xử lý.
- Cần retry sau một khoảng thời gian.
- Cần xử lý booking sau vài phút.

---

## 8. Long Polling

Long polling giúp consumer chờ message trong một khoảng thời gian thay vì gọi queue liên tục.

Ưu điểm:

- Giảm số request rỗng.
- Tiết kiệm chi phí.
- Tăng hiệu quả khi queue ít message.

Nếu đề nói consumer gọi SQS quá nhiều nhưng thường không có message, hãy nghĩ tới long polling.

---

## 9. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| decouple components | SQS |
| asynchronous processing | SQS |
| worker queue | SQS |
| high throughput | Standard Queue |
| message may be delivered more than once | Standard Queue |
| strict ordering | FIFO Queue |
| first in first out | FIFO Queue |
| delay message processing | Delay Queue |
| reduce empty responses | Long Polling |

---

## 10. Dạng câu hỏi exam

### Câu hỏi 1

Một API xử lý request chậm vì phải gọi nhiều tác vụ phía sau. Cần giảm thời gian phản hồi cho user.

Đáp án:

```text
Gửi job vào SQS và xử lý bằng worker bất đồng bộ.
```

### Câu hỏi 2

Một hệ thống cần xử lý message theo đúng thứ tự tạo ra.

Đáp án:

```text
Dùng SQS FIFO Queue.
```

### Câu hỏi 3

Consumer gọi SQS liên tục nhưng nhiều lần không có message, gây tốn chi phí.

Đáp án:

```text
Bật long polling.
```

---

## 11. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Nghĩ Standard Queue chỉ xử lý message đúng một lần | Standard Queue là at-least-once, có thể nhận trùng |
| Chọn FIFO cho mọi trường hợp | FIFO chỉ cần khi yêu cầu strict ordering |
| Dùng SQS để gửi notification cho nhiều subscriber | Fanout nên dùng SNS + SQS |
| Quên long polling | Long polling giúp giảm empty receive |
| Quên worker idempotent | Vì message có thể được xử lý lại |

---

## 12. Bài tập về nhà

### Lý thuyết

1. SQS là gì?
2. Producer là gì?
3. Consumer là gì?
4. Standard Queue phù hợp khi nào?
5. FIFO Queue phù hợp khi nào?
6. Vì sao Standard Queue có thể xử lý message nhiều lần?
7. Delay Queue dùng để làm gì?
8. Long Polling giải quyết vấn đề gì?
9. Message retention là gì?
10. Vì sao SQS giúp decouple hệ thống?

### Lab nhỏ

Thiết kế flow xử lý đơn hàng:

```text
Order API -> SQS -> Worker xử lý đơn hàng
```

Yêu cầu:

- Chọn Standard Queue hay FIFO Queue.
- Giải thích lý do chọn.
- Ghi ra message body mẫu dạng JSON.
