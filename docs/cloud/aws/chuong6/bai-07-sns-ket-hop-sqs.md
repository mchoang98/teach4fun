# Bài 7. SNS kết hợp SQS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu pattern SNS + SQS.
- Biết vì sao mỗi consumer nên có queue riêng.
- Hiểu fanout architecture trong AWS.
- Biết cách thiết kế hệ thống nhiều worker độc lập.
- Nhận diện dạng câu hỏi fanout trong DVA-C02.

---

## 2. Vấn đề thực tế

Một sự kiện xảy ra trong hệ thống có thể cần nhiều service xử lý.

Ví dụ khi booking được tạo:

- Gửi email cho khách hàng.
- Thông báo cho chủ nhà.
- Cập nhật analytics.
- Tạo invoice.
- Cập nhật hệ thống CRM.

Nếu Booking Service gọi trực tiếp từng service:

```text
Booking Service -> Email Service
Booking Service -> Invoice Service
Booking Service -> Analytics Service
Booking Service -> CRM Service
```

Hệ thống bị coupling mạnh.

Nếu một service lỗi, Booking Service có thể bị ảnh hưởng.

---

## 3. Pattern SNS + SQS

Kiến trúc tốt hơn:

```text
Booking Service
  -> SNS Topic: booking-events
      -> SQS Queue: email-queue
      -> SQS Queue: invoice-queue
      -> SQS Queue: analytics-queue
      -> SQS Queue: crm-queue
```

Mỗi service có queue riêng.

Mỗi worker xử lý queue của mình.

```text
email-queue -> Email Worker
invoice-queue -> Invoice Worker
analytics-queue -> Analytics Worker
crm-queue -> CRM Worker
```

---

## 4. Vì sao không cho nhiều worker dùng chung một queue?

Nếu nhiều worker dùng chung một SQS queue, mỗi message thường chỉ được một consumer xử lý.

Ví dụ:

```text
SNS không dùng
Một SQS queue chung
Email Worker, Invoice Worker, Analytics Worker cùng đọc queue
```

Kết quả:

- Message có thể bị Email Worker lấy mất.
- Invoice Worker không nhận được message đó.
- Analytics Worker cũng không nhận được message đó.

Điều này không phải fanout.

Nếu mỗi hệ thống đều cần nhận cùng một event, hãy dùng SNS topic fanout tới nhiều SQS queue.

---

## 5. Lợi ích của SNS + SQS

Pattern này giúp:

- Một event gửi đến nhiều hệ thống.
- Mỗi hệ thống có queue riêng.
- Mỗi hệ thống retry độc lập.
- Mỗi hệ thống có DLQ riêng.
- Một consumer lỗi không ảnh hưởng consumer khác.
- Dễ thêm subscriber mới.

Ví dụ:

```text
Email Worker lỗi
=> Chỉ email-queue bị ảnh hưởng
=> invoice-queue và analytics-queue vẫn xử lý bình thường
```

---

## 6. Message Filtering với SNS + SQS

Không phải queue nào cũng cần nhận tất cả message.

Ví dụ topic có nhiều event:

- BOOKING_CREATED
- BOOKING_CANCELLED
- PAYMENT_SUCCESS
- PAYMENT_FAILED

Email queue chỉ muốn nhận:

```text
BOOKING_CREATED
BOOKING_CANCELLED
PAYMENT_SUCCESS
```

Analytics queue muốn nhận tất cả event.

Payment queue chỉ muốn nhận:

```text
PAYMENT_SUCCESS
PAYMENT_FAILED
```

Giải pháp:

```text
SNS filter policy
```

---

## 7. Ví dụ kiến trúc booking

```text
API Gateway
  -> Booking Lambda
  -> DynamoDB
  -> SNS Topic: booking-events
      -> SQS: email-notification-queue
      -> SQS: owner-notification-queue
      -> SQS: analytics-queue
      -> SQS: invoice-queue
```

Worker:

```text
Email Lambda consumes email-notification-queue
Owner Notification Lambda consumes owner-notification-queue
Analytics Lambda consumes analytics-queue
Invoice Lambda consumes invoice-queue
```

Mỗi queue có DLQ riêng:

```text
email-notification-dlq
owner-notification-dlq
analytics-dlq
invoice-dlq
```

---

## 8. Khi nào chọn SNS + SQS trong đề thi?

Chọn SNS + SQS khi đề có các ý:

- Một event cần gửi tới nhiều hệ thống.
- Các hệ thống xử lý độc lập.
- Cần fanout.
- Cần queue riêng cho mỗi consumer.
- Cần retry/DLQ riêng cho từng consumer.
- Cần giảm coupling giữa producer và consumer.

---

## 9. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| fanout | SNS + SQS |
| one event to multiple systems | SNS topic with multiple SQS subscriptions |
| independent consumers | Separate SQS queues |
| each consumer needs retry | SQS per subscriber |
| one consumer failure should not affect others | SNS + SQS + DLQ |
| filter event by attributes | SNS filter policy |

---

## 10. Dạng câu hỏi exam

### Tình huống 1

Một order event cần được xử lý bởi inventory, billing và analytics. Mỗi hệ thống phải nhận cùng event.

Đáp án:

```text
Publish order event to SNS topic and subscribe separate SQS queues for each system.
```

### Tình huống 2

Billing worker lỗi không được làm ảnh hưởng analytics worker.

Đáp án:

```text
Mỗi worker có SQS queue và DLQ riêng subscribe từ SNS topic.
```

### Tình huống 3

Một subscriber chỉ muốn nhận PAYMENT_SUCCESS event.

Đáp án:

```text
Dùng SNS filter policy trên subscription.
```

---

## 11. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Cho nhiều consumer đọc chung một queue để fanout | Sai, một message thường chỉ được một consumer xử lý |
| Dùng SNS trực tiếp cho tất cả consumer quan trọng | Thiếu buffer riêng nếu consumer lỗi |
| Không có DLQ riêng | Khó debug từng consumer |
| Không dùng filter policy | Queue nhận quá nhiều message không cần thiết |
| Producer biết quá nhiều consumer | Làm hệ thống coupling mạnh |

---

## 12. Bài tập về nhà

### Lý thuyết

1. SNS + SQS giải quyết bài toán gì?
2. Fanout pattern là gì?
3. Vì sao mỗi consumer nên có queue riêng?
4. Nếu nhiều worker đọc chung một queue thì có phải fanout không?
5. DLQ riêng cho từng queue có lợi gì?
6. SNS filter policy dùng khi nào?
7. Pattern SNS + SQS giúp giảm coupling như thế nào?
8. Một consumer lỗi có ảnh hưởng consumer khác không?
9. Khi nào dùng SNS -> Lambda trực tiếp?
10. Khi nào nên dùng SNS -> SQS -> Lambda?

### Lab nhỏ

Thiết kế kiến trúc cho event `PaymentSuccess`.

Yêu cầu:

- Gửi email receipt.
- Cập nhật analytics.
- Cập nhật accounting.
- Mỗi hệ thống có retry và DLQ riêng.
- Vẽ bằng text architecture.
