# Bài 6. DynamoDB Advanced Features

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Biết các tính năng nâng cao quan trọng của DynamoDB.
- Hiểu TTL, Streams, Conditional Write, Atomic Counter.
- Biết Transactions và DAX dùng khi nào.
- Nhận diện keyword thường xuất hiện trong đề thi.

## 2. Conditional Write

Conditional Write cho phép ghi dữ liệu chỉ khi điều kiện đúng.

Ví dụ:

```text
Chỉ tạo booking nếu bookingId chưa tồn tại.
```

Use case:

- Tránh ghi đè dữ liệu.
- Kiểm tra trạng thái trước khi update.
- Xử lý concurrency.

## 3. Atomic Counter

Atomic Counter dùng để tăng/giảm số một cách an toàn.

Ví dụ:

```text
Tăng số lượt xem sản phẩm.
Tăng số lượng booking.
Giảm số ghế còn lại.
```

## 4. TTL

TTL là Time To Live.

TTL cho phép DynamoDB tự động xóa item sau một thời điểm.

Use case:

- Session hết hạn.
- Booking tạm.
- Token tạm.
- Cart chưa thanh toán.

Keyword:

```text
item expiration
automatically delete old items
expire session after 24 hours
```

## 5. DynamoDB Streams

DynamoDB Streams ghi lại thay đổi của table.

Các event thường gặp:

- INSERT
- MODIFY
- REMOVE

Use case:

- Trigger Lambda khi item thay đổi.
- Gửi notification khi có order mới.
- Đồng bộ dữ liệu sang hệ thống khác.
- Event-driven architecture.

## 6. Transactions

Transactions dùng khi cần nhiều thao tác cùng thành công hoặc cùng thất bại.

Use case:

- Chuyển tiền.
- Đặt hàng và trừ tồn kho cùng lúc.
- Ghi nhiều item cần đảm bảo consistency.

## 7. DAX

DAX là DynamoDB Accelerator.

DAX là cache cho DynamoDB, phù hợp với workload đọc nhiều.

Use case:

- Read-heavy workload.
- Cần giảm latency đọc.
- Dữ liệu đọc lặp lại nhiều.

## 8. Bảng keyword

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Item expiration | TTL |
| Automatically delete item | TTL |
| Trigger Lambda on table changes | DynamoDB Streams |
| Table change event | DynamoDB Streams |
| Increment counter safely | Atomic Counter |
| Update only if condition matches | Conditional Write |
| All-or-nothing writes | Transactions |
| Read-heavy cache | DAX |

## 9. Dạng câu hỏi exam thường gặp

### Tình huống 1

Cần tự động xóa session sau 24 giờ.

Đáp án: DynamoDB TTL.

### Tình huống 2

Cần chạy Lambda khi item trong table thay đổi.

Đáp án: DynamoDB Streams + Lambda.

### Tình huống 3

Cần tăng số lượt xem an toàn khi có nhiều request cùng lúc.

Đáp án: Atomic Counter.

### Tình huống 4

Cần nhiều thao tác ghi cùng thành công hoặc cùng rollback.

Đáp án: DynamoDB Transactions.

## 10. Bẫy thường gặp

- TTL không xóa ngay lập tức đúng từng giây, AWS xóa sau đó theo cơ chế nền.
- Streams không phải queue thay thế hoàn toàn SQS.
- DAX chỉ hỗ trợ tăng tốc đọc, không giải quyết mọi vấn đề thiết kế dữ liệu.
- Transactions có chi phí và độ phức tạp cao hơn thao tác đơn giản.

## 11. Lab thực hành

1. Bật TTL cho table `Bookings`.
2. Thêm field `expiresAt` cho booking tạm.
3. Bật DynamoDB Streams.
4. Tạo Lambda trigger khi có booking mới.
5. Ghi log event từ Streams ra CloudWatch.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
