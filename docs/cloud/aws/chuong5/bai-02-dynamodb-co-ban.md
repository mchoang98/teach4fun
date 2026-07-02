# Bài 2. DynamoDB cơ bản

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu DynamoDB là gì.
- Biết các khái niệm Table, Item, Attribute.
- Hiểu Partition Key và Sort Key.
- Biết thiết kế bảng đơn giản cho ứng dụng booking.

## 2. DynamoDB là gì?

DynamoDB là dịch vụ NoSQL database được quản lý bởi AWS.

Đặc điểm chính:

- Không cần quản lý server.
- Scale tốt.
- Truy xuất nhanh.
- Phù hợp với serverless application.
- Tích hợp tốt với Lambda, API Gateway, Streams.

## 3. Các khái niệm quan trọng

### Table

Table là bảng lưu dữ liệu.

Ví dụ:

```text
Bookings
Users
Products
Orders
Sessions
```

### Item

Item là một dòng dữ liệu trong table.

Ví dụ một booking:

```json
{
  "bookingId": "B001",
  "userId": "U001",
  "status": "PENDING",
  "amount": 500000,
  "createdAt": "2026-07-02T10:00:00Z"
}
```

### Attribute

Attribute là từng field trong item.

Ví dụ:

- bookingId
- userId
- status
- amount
- createdAt

## 4. Primary Key trong DynamoDB

DynamoDB cần primary key để xác định item.

Có 2 kiểu primary key:

### Partition Key

Chỉ dùng một key chính.

Ví dụ:

```text
bookingId
```

Phù hợp khi mỗi item có ID duy nhất.

### Partition Key + Sort Key

Dùng 2 key kết hợp.

Ví dụ:

```text
Partition Key: userId
Sort Key: bookingId
```

Phù hợp khi muốn lấy danh sách booking theo user.

## 5. Ví dụ thiết kế table Bookings

### Cách 1: Dùng bookingId làm Partition Key

```text
Table: Bookings
Partition Key: bookingId
```

Ưu điểm:

- Lấy booking theo ID rất nhanh.

Nhược điểm:

- Muốn lấy booking theo userId cần thêm GSI hoặc Scan.

### Cách 2: Dùng userId + bookingId

```text
Table: Bookings
Partition Key: userId
Sort Key: bookingId
```

Ưu điểm:

- Lấy tất cả booking của một user rất nhanh.

Nhược điểm:

- Nếu muốn lấy booking theo bookingId riêng, cần thiết kế thêm index.

## 6. Keyword tiếng Anh cần nhớ

| Keyword | Ý nghĩa |
|---|---|
| Table | Bảng dữ liệu |
| Item | Một record/dòng dữ liệu |
| Attribute | Field trong item |
| Partition key | Key chính để phân vùng dữ liệu |
| Sort key | Key phụ để sắp xếp/truy vấn trong partition |
| Primary key | Khóa chính của table |

## 7. Dạng câu hỏi exam thường gặp

### Tình huống 1

Ứng dụng cần truy xuất item bằng ID duy nhất.

Nghĩ tới: Partition Key.

### Tình huống 2

Ứng dụng cần lấy tất cả order của một user.

Nghĩ tới: Partition Key là userId, Sort Key là orderId hoặc createdAt.

### Tình huống 3

Ứng dụng cần database NoSQL, serverless, latency thấp.

Nghĩ tới: DynamoDB.

## 8. Bẫy thường gặp

- Thiết kế sai key sẽ dẫn tới phải dùng Scan.
- DynamoDB không giống SQL database.
- Không nên nghĩ DynamoDB có JOIN như RDS.
- Muốn query hiệu quả phải biết access pattern trước.

## 9. Lab thực hành

Tạo table `Bookings`:

```text
Table name: Bookings
Partition key: userId
Sort key: bookingId
```

Thêm item mẫu:

```json
{
  "userId": "U001",
  "bookingId": "B001",
  "status": "PENDING",
  "amount": 500000
}
```

Thử lấy item theo `userId` và `bookingId`.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
