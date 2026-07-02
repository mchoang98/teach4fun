# Bài 4. Dead-letter Queue

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Dead-letter Queue là gì.
- Biết khi nào message được chuyển vào DLQ.
- Hiểu max receive count.
- Biết dùng DLQ để debug message lỗi.
- Nhận diện keyword failed messages trong đề thi.

---

## 2. Vấn đề cần giải quyết

Không phải message nào cũng xử lý thành công.

Một message có thể lỗi vì:

- Dữ liệu sai format.
- Thiếu field bắt buộc.
- Worker code bị bug.
- Gọi service ngoài bị lỗi.
- Permission bị thiếu.
- Message không còn hợp lệ.

Nếu message lỗi liên tục và cứ quay lại queue, worker sẽ retry mãi.

Điều này gây:

- Tốn chi phí.
- Làm nghẽn queue.
- Khó debug.
- Có thể ảnh hưởng message khác.

DLQ giúp tách message lỗi ra nơi riêng để điều tra.

---

## 3. Dead-letter Queue là gì?

Dead-letter Queue là queue phụ dùng để chứa message xử lý thất bại quá nhiều lần.

Flow:

```text
Main Queue -> Consumer xử lý lỗi
           -> Retry nhiều lần
           -> Vượt max receive count
           -> Chuyển sang DLQ
```

Ví dụ:

```text
Main Queue: booking-processing-queue
DLQ: booking-processing-dlq
```

Nếu message xử lý lỗi 5 lần, nó được chuyển sang DLQ.

---

## 4. Max Receive Count

Max Receive Count là số lần message được nhận từ main queue trước khi chuyển sang DLQ.

Ví dụ:

```text
maxReceiveCount = 3
```

Flow:

```text
Lần 1: worker nhận message -> lỗi
Lần 2: worker nhận lại -> lỗi
Lần 3: worker nhận lại -> lỗi
Sau đó message được chuyển sang DLQ
```

---

## 5. DLQ dùng để làm gì?

DLQ dùng để:

- Lưu message lỗi để phân tích.
- Tránh retry vô hạn.
- Không làm nghẽn main queue.
- Cho phép sửa code rồi reprocess message.
- Giám sát số lượng message lỗi.

Trong production, DLQ rất quan trọng.

Nếu không có DLQ, message lỗi có thể bị retry mãi và làm hệ thống khó kiểm soát.

---

## 6. Debug message trong DLQ

Khi có message vào DLQ, cần kiểm tra:

1. Message body có đúng format không?
2. Message có thiếu field không?
3. Worker có log lỗi gì?
4. IAM role có đủ quyền không?
5. Service downstream có lỗi không?
6. Timeout có quá ngắn không?
7. Có lỗi parse JSON không?

Ví dụ message lỗi:

```json
{
  "bookingId": "B001",
  "userId": null,
  "status": "pending"
}
```

Nếu `userId` là bắt buộc, worker có thể lỗi khi xử lý message này.

---

## 7. Redrive message

Sau khi sửa lỗi, bạn có thể đưa message từ DLQ về main queue để xử lý lại.

Quy trình:

```text
1. Phân tích message lỗi trong DLQ
2. Sửa nguyên nhân lỗi
3. Redrive message về main queue
4. Worker xử lý lại
```

Lưu ý:

- Không redrive khi chưa sửa lỗi.
- Nếu chưa sửa lỗi, message sẽ tiếp tục quay lại DLQ.

---

## 8. CloudWatch Alarm cho DLQ

Nên tạo alarm khi DLQ có message.

Ví dụ:

```text
Nếu ApproximateNumberOfMessagesVisible > 0
=> Gửi cảnh báo cho developer/devops
```

Trong đề thi, nếu cần phát hiện message lỗi, hãy nghĩ tới CloudWatch Alarm trên DLQ.

---

## 9. Kiến thức thi cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| failed messages | DLQ |
| poison message | DLQ |
| message retried many times | DLQ |
| isolate bad messages | DLQ |
| debug failed processing | DLQ + CloudWatch Logs |
| alert when failures occur | CloudWatch Alarm on DLQ |
| move messages back after fix | Redrive |

---

## 10. Dạng câu hỏi exam

### Tình huống 1

Một số message luôn xử lý lỗi và bị retry liên tục.

Đáp án:

```text
Cấu hình Dead-letter Queue cho main SQS queue.
```

### Tình huống 2

Team muốn biết khi nào có message xử lý thất bại.

Đáp án:

```text
Tạo CloudWatch Alarm theo số message visible trong DLQ.
```

### Tình huống 3

Sau khi sửa bug worker, team muốn xử lý lại message lỗi.

Đáp án:

```text
Redrive message từ DLQ về source queue.
```

---

## 11. Bẫy thường gặp

| Bẫy | Giải thích |
|---|---|
| Không cấu hình DLQ | Message lỗi retry mãi |
| Max receive count quá thấp | Message có thể vào DLQ quá sớm |
| Max receive count quá cao | Message lỗi bị retry quá lâu |
| Không kiểm tra log worker | DLQ chỉ lưu message, không tự nói nguyên nhân lỗi |
| Redrive khi chưa sửa lỗi | Message lại quay về DLQ |

---

## 12. Bài tập về nhà

### Lý thuyết

1. DLQ là gì?
2. Vì sao cần DLQ?
3. Max Receive Count là gì?
4. Khi nào message được chuyển vào DLQ?
5. Poison message là gì?
6. DLQ giúp debug như thế nào?
7. Redrive message là gì?
8. Vì sao cần CloudWatch Alarm cho DLQ?
9. Nếu DLQ có nhiều message, cần kiểm tra gì trước?
10. Vì sao không nên redrive khi chưa sửa lỗi?

### Tình huống

Worker xử lý booking lỗi vì message thiếu `bookingId`. Message bị retry liên tục. Hãy đề xuất cấu hình để tránh retry vô hạn và cách debug.

### Lab nhỏ

Thiết kế queue:

```text
booking-main-queue
booking-dlq
```

Ghi rõ:

- maxReceiveCount nên đặt bao nhiêu.
- Khi nào message sang DLQ.
- Alarm nào cần tạo.
