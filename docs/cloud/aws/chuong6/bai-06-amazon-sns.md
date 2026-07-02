# Bài 6. Amazon SNS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Amazon SNS là gì.
- Biết khái niệm topic, subscriber, publisher.
- Hiểu pub/sub và fanout.
- Biết message filtering trong SNS.
- Nhận diện khi nào đề thi gợi ý SNS.

---

## 2. Amazon SNS là gì?

Amazon SNS là dịch vụ publish/subscribe.

SNS cho phép một service publish message vào topic, sau đó SNS gửi message đến các subscriber.

Kiến trúc:

```text
Publisher -> SNS Topic -> Subscribers
```

Ví dụ:

```text
Booking Service -> SNS Topic booking-events
                -> Email subscriber
                -> SMS subscriber
                -> Analytics subscriber
```

---

## 3. Topic là gì?

Topic là kênh trung tâm để publish message.

Ví dụ:

```text
booking-created-topic
payment-success-topic
user-registered-topic
```

Producer chỉ cần gửi message vào topic.

SNS sẽ gửi message đến subscriber đã đăng ký.

---

## 4. Subscriber là gì?

Subscriber là nơi nhận message từ SNS topic.

Một SNS topic có thể gửi message đến nhiều loại subscriber, ví dụ:

- Email
- SMS
- SQS Queue
- Lambda
- HTTP/HTTPS endpoint

Trong đề thi DVA, SNS thường xuất hiện với:

- Gửi notification.
- Fanout đến nhiều SQS queue.
- Pub/sub architecture.

---

## 5. Pub/Sub là gì?

Pub/Sub là mô hình publish-subscribe.

Publisher không cần biết ai nhận message.

Subscriber cũng không cần gọi trực tiếp publisher.

```text
Publisher publish event
Subscriber nào quan tâm thì nhận event
```

Ưu điểm:

- Giảm coupling.
- Dễ thêm subscriber mới.
- Một message có thể gửi đến nhiều nơi.

---

## 6. Fanout là gì?

Fanout là pattern gửi một message đến nhiều hệ thống.

Ví dụ:

```text
OrderCreated -> SNS Topic
             -> SQS Queue for Email
             -> SQS Queue for Inventory
             -> SQS Queue for Analytics
```

Đây là pattern rất hay ra đề.

Nếu đề nói:

```text
Một message cần được xử lý bởi nhiều independent systems
```

Hãy nghĩ tới:

```text
SNS topic fanout tới nhiều SQS queue
```

---

## 7. SNS gửi trực tiếp Lambda hay qua SQS?

SNS có thể gọi Lambda trực tiếp.

```text
SNS -> Lambda
```

Nhưng trong nhiều hệ thống production, SNS thường gửi tới SQS trước:

```text
SNS -> SQS -> Lambda worker
```

Lý do:

- SQS lưu message bền hơn cho từng consumer.
- Mỗi consumer có queue riêng.
- Có thể retry và DLQ riêng.
- Consumer xử lý độc lập.

---

## 8. Message Filtering

SNS message filtering cho phép subscriber chỉ nhận message phù hợp với filter policy.

Ví dụ SNS topic nhận nhiều event:

```json
{
  "eventType": "BOOKING_CREATED",
  "priority": "HIGH"
}
```

Subscriber A chỉ muốn nhận booking event:

```json
{
  "eventType": ["BOOKING_CREATED"]
}
```

Subscriber B chỉ muốn nhận priority cao:

```json
{
  "priority": ["HIGH"]
}
```

Message filtering giúp tránh gửi message không cần thiết cho subscriber.

---

## 9. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| pub/sub | SNS |
| fanout | SNS + SQS |
| one message to many subscribers | SNS |
| send notification | SNS |
| topic | SNS |
| subscriber | SNS |
| message filtering | SNS filter policy |
| independent consumers | SNS fanout to SQS |

---

## 10. Dạng câu hỏi exam

### Tình huống 1

Một event tạo đơn hàng cần gửi đến nhiều hệ thống xử lý độc lập.

Đáp án:

```text
Publish event vào SNS topic, subscribe nhiều SQS queue.
```

### Tình huống 2

Một ứng dụng cần gửi email notification đơn giản.

Đáp án:

```text
Dùng SNS notification.
```

### Tình huống 3

Một subscriber chỉ muốn nhận event có type là PAYMENT_SUCCESS.

Đáp án:

```text
Dùng SNS message filtering.
```

---

## 11. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Dùng SQS đơn lẻ cho fanout | Một queue không tự fanout đến nhiều consumer độc lập |
| Gửi SNS trực tiếp tới Lambda cho mọi case | Nếu cần buffer/retry riêng, nên SNS -> SQS -> Lambda |
| Quên message filtering | Subscriber có thể nhận quá nhiều message không cần thiết |
| Nhầm SNS với EventBridge | SNS thiên về pub/sub notification, EventBridge thiên về event bus và rule |
| Nhầm SNS với SQS | SNS push message, SQS lưu message để consumer pull |

---

## 12. Bài tập về nhà

### Lý thuyết

1. SNS là gì?
2. Topic là gì?
3. Subscriber là gì?
4. Pub/Sub là gì?
5. Fanout là gì?
6. Khi nào dùng SNS + SQS?
7. SNS có thể gửi đến những loại endpoint nào?
8. Message filtering dùng để làm gì?
9. Vì sao SNS giúp giảm coupling?
10. SNS khác SQS như thế nào?

### Lab nhỏ

Thiết kế notification flow cho booking:

```text
BookingCreated -> SNS Topic
```

Yêu cầu:

- Có subscriber gửi email.
- Có subscriber gửi analytics.
- Có subscriber xử lý invoice.
- Đề xuất nên dùng SNS -> Lambda trực tiếp hay SNS -> SQS -> Lambda.
