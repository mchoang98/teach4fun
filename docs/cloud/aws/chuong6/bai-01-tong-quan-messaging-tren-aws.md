# Bài 1. Tổng quan Messaging trên AWS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu messaging là gì.
- Hiểu vì sao hệ thống lớn cần xử lý bất đồng bộ.
- Phân biệt xử lý đồng bộ và bất đồng bộ.
- Biết khái niệm decoupling trong kiến trúc cloud.
- Nhận diện được khi nào đề thi đang gợi ý SQS, SNS hoặc EventBridge.

---

## 2. Giải thích dễ hiểu

Giả sử bạn có một website booking phòng.

Khi user bấm đặt phòng, hệ thống có thể cần làm nhiều việc:

- Lưu booking vào database.
- Gửi email xác nhận.
- Gửi thông báo cho chủ nhà.
- Tạo hóa đơn.
- Ghi log sự kiện.
- Cập nhật báo cáo.

Nếu tất cả việc này chạy ngay trong một request API, user phải chờ lâu. Nếu một bước bị lỗi, toàn bộ request có thể thất bại.

Cách tốt hơn là:

```text
API chỉ nhận booking nhanh
Sau đó đẩy công việc nặng vào queue hoặc event
Worker xử lý phía sau
```

Đây là tư duy messaging và event-driven architecture.

---

## 3. Synchronous vs Asynchronous

### Synchronous processing

Client gọi API và chờ kết quả ngay.

```text
Client -> API -> xử lý xong -> trả kết quả
```

Phù hợp với:

- Đăng nhập.
- Lấy thông tin user.
- Kiểm tra trạng thái đơn hàng.
- Các tác vụ cần phản hồi ngay.

Nhược điểm:

- Request dễ timeout nếu xử lý lâu.
- Các service phụ thuộc chặt vào nhau.
- Một service lỗi có thể làm cả flow lỗi.

### Asynchronous processing

Client gọi API, API nhận yêu cầu rồi đưa công việc vào queue/event để xử lý sau.

```text
Client -> API -> Queue/Event -> Worker xử lý sau
```

Phù hợp với:

- Gửi email.
- Xử lý ảnh/video.
- Tạo báo cáo.
- Thanh toán cần callback.
- Xử lý đơn hàng nhiều bước.

Ưu điểm:

- API trả kết quả nhanh hơn.
- Dễ scale worker riêng.
- Hệ thống ít phụ thuộc chặt vào nhau.
- Lỗi có thể retry hoặc đưa vào DLQ.

---

## 4. Decoupling là gì?

Decoupling nghĩa là tách các thành phần để chúng không phụ thuộc trực tiếp vào nhau.

Ví dụ chưa decouple:

```text
Order API gọi trực tiếp Email Service
Order API gọi trực tiếp Invoice Service
Order API gọi trực tiếp Report Service
```

Nếu Email Service lỗi, Order API cũng có thể lỗi.

Ví dụ đã decouple:

```text
Order API -> SQS Queue -> Email Worker
                    -> Invoice Worker
                    -> Report Worker
```

Order API không cần biết worker đang chạy thế nào. Nó chỉ cần gửi message.

---

## 5. Ba dịch vụ chính trong chương

## Amazon SQS

SQS là hàng đợi message.

Dùng khi bạn cần:

- Tách API khỏi worker.
- Xử lý bất đồng bộ.
- Retry khi job lỗi.
- Lưu message tạm thời.
- Worker lấy message ra xử lý.

Ví dụ:

```text
Lambda tạo booking -> SQS -> Worker Lambda xử lý booking
```

Keyword trong đề:

- decouple
- queue
- asynchronous processing
- background job
- worker
- failed messages
- visibility timeout
- DLQ

---

## Amazon SNS

SNS là dịch vụ publish/subscribe.

Dùng khi một sự kiện cần gửi tới nhiều nơi cùng lúc.

Ví dụ:

```text
BookingCreated Event -> SNS Topic
                     -> Email Service
                     -> SMS Service
                     -> Analytics Queue
```

Keyword trong đề:

- pub/sub
- fanout
- send notification
- one message to multiple subscribers
- topic

---

## Amazon EventBridge

EventBridge là event bus.

Dùng khi bạn cần route event theo rule hoặc chạy job định kỳ.

Ví dụ:

```text
EventBridge Rule: mỗi ngày 1 giờ sáng -> Lambda cleanup booking tạm
```

Keyword trong đề:

- event bus
- event pattern
- scheduled event
- SaaS events
- route events

---

## 6. So sánh nhanh SQS, SNS, EventBridge

| Nhu cầu | Dịch vụ phù hợp |
|---|---|
| Cần queue để worker xử lý sau | SQS |
| Cần tách API khỏi xử lý nặng | SQS |
| Cần retry message lỗi | SQS |
| Cần gửi một event tới nhiều subscriber | SNS |
| Cần fanout tới nhiều queue | SNS + SQS |
| Cần gửi email/SMS notification đơn giản | SNS |
| Cần event bus và rule matching | EventBridge |
| Cần chạy Lambda theo lịch | EventBridge |
| Cần nhận event từ AWS service/SaaS | EventBridge |

---

## 7. Kiến thức thi cần nhớ

- SQS giúp decouple application components.
- SNS dùng cho pub/sub và fanout.
- EventBridge dùng cho event bus, event pattern và scheduled event.
- Nếu đề nói worker xử lý chậm làm API timeout, thường nghĩ tới SQS.
- Nếu đề nói một message cần gửi tới nhiều hệ thống, thường nghĩ tới SNS fanout.
- Nếu đề nói chạy tác vụ theo lịch, thường nghĩ tới EventBridge scheduled rule.

---

## 8. Dạng câu hỏi exam

### Tình huống 1

API xử lý đơn hàng thường bị timeout vì phải gửi email và tạo hóa đơn.

Đáp án nên nghĩ tới:

```text
Đẩy công việc vào SQS và dùng worker xử lý bất đồng bộ.
```

### Tình huống 2

Một sự kiện tạo đơn hàng cần gửi đến email service, inventory service và analytics service.

Đáp án nên nghĩ tới:

```text
SNS topic fanout đến nhiều SQS queue.
```

### Tình huống 3

Cần chạy Lambda mỗi ngày lúc 1 giờ sáng.

Đáp án nên nghĩ tới:

```text
EventBridge scheduled rule.
```

---

## 9. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Dùng SNS thay SQS cho worker queue | SNS không phải hàng đợi chính cho worker xử lý tuần tự |
| Dùng SQS cho fanout nhiều hệ thống | SQS chỉ là queue, fanout nên dùng SNS + SQS |
| Dùng Lambda tự chạy cron | Nên dùng EventBridge scheduled rule |
| Nghĩ Standard SQS đảm bảo xử lý đúng một lần | Standard SQS có thể deliver message nhiều lần |
| Quên DLQ | Message lỗi nhiều lần nên đưa vào DLQ để điều tra |

---

## 10. Bài tập về nhà

### Lý thuyết

1. Messaging là gì?
2. Vì sao xử lý bất đồng bộ giúp API nhanh hơn?
3. Decoupling nghĩa là gì?
4. Khi nào dùng SQS?
5. Khi nào dùng SNS?
6. Khi nào dùng EventBridge?
7. Fanout là gì?
8. Scheduled event là gì?
9. Vì sao worker nên xử lý qua queue?
10. SQS, SNS và EventBridge khác nhau thế nào?

### Tình huống

1. API gửi email chậm làm user chờ lâu. Hãy chọn service phù hợp.
2. Một event cần gửi tới 3 hệ thống khác nhau. Hãy chọn kiến trúc phù hợp.
3. Cần chạy job dọn dữ liệu mỗi đêm. Hãy chọn service phù hợp.
4. Worker xử lý ảnh bị lỗi nhiều lần. Cần cơ chế nào để lưu message lỗi?
5. Hệ thống cần tách frontend API khỏi backend processing. Nên dùng service nào?

### Lab nhỏ

Vẽ kiến trúc cho flow:

```text
CreateOrder API -> Queue -> Worker -> Notification
```

Ghi rõ service AWS tương ứng cho từng bước.
