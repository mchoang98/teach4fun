# Bài 3. Query và Scan trong DynamoDB

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Phân biệt được Query và Scan.
- Hiểu vì sao Query tốt hơn Scan.
- Biết nhận diện keyword đề thi liên quan đến Query/Scan.
- Biết tránh thiết kế làm hệ thống chậm.

## 2. Query là gì?

Query dùng để tìm dữ liệu dựa trên key.

Query yêu cầu phải có Partition Key.

Ví dụ:

```text
Lấy tất cả booking của user U001
```

Nếu table có:

```text
Partition Key: userId
Sort Key: bookingId
```

Ta có thể Query:

```text
userId = U001
```

Kết quả trả về tất cả booking của user đó.

## 3. Scan là gì?

Scan đọc toàn bộ table rồi lọc kết quả.

Ví dụ:

```text
Tìm tất cả booking có status = PENDING
```

Nếu `status` không phải key hoặc index, DynamoDB phải scan toàn bảng.

## 4. Vì sao Scan nguy hiểm?

Scan có thể gây:

- Chậm.
- Tốn chi phí.
- Tốn RCU.
- Dễ bị throttling khi table lớn.
- Không phù hợp với production traffic cao.

Trong đề thi, nếu có lựa chọn tránh full table scan thì thường nên chọn Query hoặc GSI.

## 5. Bảng so sánh Query và Scan

| Tiêu chí | Query | Scan |
|---|---|---|
| Cách hoạt động | Tìm theo key | Đọc toàn table |
| Hiệu năng | Tốt | Kém nếu table lớn |
| Chi phí | Thấp hơn | Cao hơn |
| Dùng khi | Biết partition key | Không có key phù hợp |
| Exam keyword | query by partition key | full table read |

## 6. Ví dụ thực tế

### Thiết kế chưa tốt

Table:

```text
Partition Key: bookingId
```

Yêu cầu:

```text
Lấy tất cả booking của user U001
```

Nếu `userId` không phải index, phải Scan.

### Thiết kế tốt hơn

Table:

```text
Partition Key: userId
Sort Key: bookingId
```

Yêu cầu lấy booking của user sẽ dùng Query.

## 7. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Query by partition key | DynamoDB Query |
| Avoid full table read | Query hoặc GSI |
| Full table scan | Scan |
| Improve read performance | Query/index design |
| Table is large and scan is slow | GSI hoặc đổi access pattern |

## 8. Dạng câu hỏi exam thường gặp

### Tình huống 1

Ứng dụng đang dùng Scan để tìm order theo customerId, table ngày càng lớn và truy vấn chậm.

Đáp án thường là: tạo GSI với customerId hoặc thiết kế key phù hợp.

### Tình huống 2

Cần lấy tất cả item có cùng partition key.

Đáp án thường là: Query.

### Tình huống 3

Cần giảm RCU khi đọc dữ liệu.

Đáp án có thể là: tránh Scan, dùng Query/index.

## 9. Bẫy thường gặp

- FilterExpression không làm Scan rẻ hơn nhiều, vì DynamoDB vẫn đọc dữ liệu trước rồi mới filter.
- Scan phù hợp cho tác vụ nhỏ hoặc admin job, không phù hợp cho request chính của user.
- Query không thể chạy nếu không có partition key hoặc index phù hợp.

## 10. Lab thực hành

Với table `Bookings`:

```text
Partition Key: userId
Sort Key: bookingId
```

Thực hành:

1. Thêm 5 booking cho user `U001`.
2. Thêm 5 booking cho user `U002`.
3. Query tất cả booking của `U001`.
4. Thử Scan toàn table và so sánh cách hoạt động.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
