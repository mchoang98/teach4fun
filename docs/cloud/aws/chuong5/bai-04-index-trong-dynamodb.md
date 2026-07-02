# Bài 4. Index trong DynamoDB

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu GSI và LSI là gì.
- Biết khi nào cần dùng GSI.
- Biết access pattern ảnh hưởng đến thiết kế index.
- Nhận diện câu hỏi exam về query theo attribute khác.

## 2. Vì sao cần index?

Trong DynamoDB, muốn Query nhanh thì attribute cần nằm trong key hoặc index.

Ví dụ table `Bookings`:

```text
Partition Key: userId
Sort Key: bookingId
```

Truy vấn tốt:

```text
Lấy booking theo userId
```

Nhưng nếu cần:

```text
Lấy tất cả booking có status = PENDING
```

Nếu `status` không phải key/index, bạn có thể phải Scan.

Giải pháp: tạo GSI.

## 3. GSI là gì?

GSI là Global Secondary Index.

GSI cho phép Query dữ liệu bằng một key khác với primary key của table.

Ví dụ:

```text
GSI name: StatusIndex
Partition Key: status
Sort Key: createdAt
```

Khi đó có thể Query:

```text
status = PENDING
```

## 4. LSI là gì?

LSI là Local Secondary Index.

LSI dùng cùng Partition Key với table chính nhưng khác Sort Key.

Ví dụ table chính:

```text
Partition Key: userId
Sort Key: bookingId
```

LSI:

```text
Partition Key: userId
Sort Key: createdAt
```

Có thể query booking của user và sắp xếp theo thời gian tạo.

## 5. So sánh GSI và LSI

| Tiêu chí | GSI | LSI |
|---|---|---|
| Partition Key | Có thể khác table chính | Giống table chính |
| Sort Key | Có thể khác | Khác table chính |
| Tạo sau khi có table | Có thể | Thường phải tạo cùng table |
| Use case | Query theo attribute khác | Query cùng partition nhưng sort khác |

## 6. Ví dụ access pattern

Ứng dụng booking cần các truy vấn:

1. Lấy booking theo user.
2. Lấy booking theo status.
3. Lấy booking mới nhất theo thời gian.

Thiết kế có thể là:

```text
Table Bookings:
PK: userId
SK: bookingId

GSI StatusIndex:
PK: status
SK: createdAt
```

## 7. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Query by another attribute | GSI |
| Query by non-key attribute | GSI |
| Avoid scan | GSI hoặc key redesign |
| Same partition key, different sort key | LSI |
| Access pattern | Thiết kế key/index |

## 8. Dạng câu hỏi exam thường gặp

### Tình huống 1

Table có partition key là `orderId`, nhưng app cần query theo `customerId`.

Đáp án thường là: tạo GSI với `customerId`.

### Tình huống 2

Cần query order của cùng một customer nhưng sort theo ngày tạo.

Đáp án có thể là: dùng sort key hoặc LSI.

### Tình huống 3

Ứng dụng đang Scan theo status và bị chậm.

Đáp án thường là: tạo GSI cho status.

## 9. Bẫy thường gặp

- GSI không tự động có tất cả field nếu projection không phù hợp.
- GSI cũng có capacity và có thể bị throttling.
- Không nên tạo index bừa bãi nếu không có access pattern rõ ràng.
- Scan + filter không phải giải pháp tối ưu cho table lớn.

## 10. Lab thực hành

Với table `Bookings`:

```text
PK: userId
SK: bookingId
```

Tạo GSI:

```text
Index name: StatusIndex
Partition Key: status
Sort Key: createdAt
```

Thực hành:

1. Thêm booking với nhiều status khác nhau.
2. Query booking có status `PENDING`.
3. So sánh với Scan theo status.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
