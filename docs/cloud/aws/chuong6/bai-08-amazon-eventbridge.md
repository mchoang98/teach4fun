# Bài 8. Amazon EventBridge

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Amazon EventBridge là gì.
- Biết event bus, rule, event pattern.
- Biết scheduled rule dùng để chạy tác vụ định kỳ.
- Phân biệt EventBridge với SNS và SQS.
- Nhận diện keyword event bus và scheduled event trong đề thi.

---

## 2. Amazon EventBridge là gì?

Amazon EventBridge là dịch vụ event bus giúp nhận, route và xử lý event từ nhiều nguồn khác nhau.

EventBridge có thể nhận event từ:

- AWS services.
- Ứng dụng của bạn.
- SaaS applications.
- Scheduled rule.

Kiến trúc:

```text
Event Source -> EventBridge Event Bus -> Rule -> Target
```

Target có thể là:

- Lambda
- SQS
- SNS
- Step Functions
- ECS task
- Nhiều AWS services khác

---

## 3. Event Bus là gì?

Event bus là nơi nhận và phân phối event.

Có thể hiểu event bus như một trạm trung chuyển sự kiện.

```text
Ứng dụng gửi event vào event bus
Rule kiểm tra event
Nếu match rule thì gửi đến target
```

Ví dụ event:

```json
{
  "source": "booking.app",
  "detail-type": "BookingCreated",
  "detail": {
    "bookingId": "B001",
    "userId": "U001"
  }
}
```

---

## 4. Rule là gì?

Rule xác định event nào sẽ được gửi đến target nào.

Rule có thể dựa trên:

- Event pattern.
- Schedule.

Ví dụ event pattern:

```json
{
  "source": ["booking.app"],
  "detail-type": ["BookingCreated"]
}
```

Nếu event match pattern này, EventBridge gửi event đến target.

---

## 5. Scheduled Rule

Scheduled rule dùng để chạy tác vụ theo lịch.

Ví dụ:

```text
Mỗi ngày lúc 1 giờ sáng -> gọi Lambda cleanup expired bookings
```

Use case phổ biến:

- Chạy job mỗi ngày.
- Dọn dữ liệu hết hạn.
- Gửi báo cáo định kỳ.
- Kiểm tra trạng thái hệ thống.
- Trigger Lambda theo cron.

Keyword exam:

```text
scheduled event
run every day
cron expression
trigger Lambda at a specific time
```

Đáp án thường là:

```text
EventBridge scheduled rule
```

---

## 6. Event Pattern

Event pattern giúp route event dựa vào nội dung.

Ví dụ chỉ route event payment success:

```json
{
  "source": ["payment.app"],
  "detail-type": ["PaymentSucceeded"]
}
```

Hoặc route event theo trạng thái:

```json
{
  "source": ["booking.app"],
  "detail": {
    "status": ["CONFIRMED"]
  }
}
```

---

## 7. EventBridge khác SNS thế nào?

| Tiêu chí | SNS | EventBridge |
|---|---|---|
| Mục tiêu chính | Pub/Sub, notification, fanout | Event bus, event routing |
| Filtering | Filter policy | Event pattern mạnh hơn |
| Scheduled event | Không phải use case chính | Rất phù hợp |
| SaaS integration | Hạn chế hơn | Mạnh hơn |
| Dạng đề thường gặp | Fanout, pub/sub | Event bus, scheduled rule, event pattern |

---

## 8. EventBridge khác SQS thế nào?

| Tiêu chí | SQS | EventBridge |
|---|---|---|
| Bản chất | Queue | Event bus |
| Consumer | Pull message | Rule route đến target |
| Lưu message cho worker xử lý | Phù hợp | Không phải queue worker chính |
| Retry worker job | SQS + DLQ phù hợp hơn | Có retry target nhưng không thay thế queue |
| Keyword | decouple, queue, worker | event bus, rule, schedule |

---

## 9. Ví dụ trong mini project

Booking API cần dọn các booking tạm quá hạn mỗi ngày.

Kiến trúc:

```text
EventBridge Scheduled Rule
  -> Lambda cleanupExpiredBookings
  -> DynamoDB update/delete expired bookings
```

Booking app muốn route event:

```text
BookingCreated Event -> EventBridge Bus
Rule BookingCreated -> Lambda sendWelcomeNotification
Rule BookingCancelled -> Lambda refundHandler
```

---

## 10. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| event bus | EventBridge |
| event pattern | EventBridge Rule |
| scheduled event | EventBridge Scheduled Rule |
| run Lambda every day | EventBridge Schedule |
| SaaS event integration | EventBridge |
| route events based on content | EventBridge |
| cron-like trigger | EventBridge |

---

## 11. Dạng câu hỏi exam

### Tình huống 1

Cần trigger Lambda mỗi ngày lúc 1 giờ sáng.

Đáp án:

```text
Create an EventBridge scheduled rule to invoke Lambda.
```

### Tình huống 2

Một ứng dụng cần route event đến target khác nhau dựa trên `detail-type`.

Đáp án:

```text
Use EventBridge event pattern rules.
```

### Tình huống 3

Cần tích hợp event từ một SaaS application vào AWS.

Đáp án:

```text
Use Amazon EventBridge.
```

---

## 12. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Dùng SQS để chạy cron | Scheduled job nên dùng EventBridge |
| Dùng SNS cho event routing phức tạp | EventBridge event pattern phù hợp hơn |
| Nhầm EventBridge là queue | EventBridge là event bus, không phải worker queue chính |
| Không phân biệt fanout và routing | Fanout đơn giản: SNS, routing theo rule: EventBridge |
| Không biết target | EventBridge cần rule và target |

---

## 13. Bài tập về nhà

### Lý thuyết

1. EventBridge là gì?
2. Event bus là gì?
3. Rule là gì?
4. Event pattern dùng để làm gì?
5. Scheduled rule dùng khi nào?
6. EventBridge target có thể là gì?
7. EventBridge khác SNS thế nào?
8. EventBridge khác SQS thế nào?
9. Khi nào dùng EventBridge thay vì SNS?
10. Keyword nào trong đề thường gợi ý EventBridge?

### Lab nhỏ

Thiết kế 2 flow:

Flow 1:

```text
Mỗi ngày lúc 1 giờ sáng -> Lambda cleanup booking tạm
```

Flow 2:

```text
BookingCreated event -> route đến Lambda gửi notification
BookingCancelled event -> route đến Lambda xử lý refund
```

Ghi rõ event pattern cho từng rule.
