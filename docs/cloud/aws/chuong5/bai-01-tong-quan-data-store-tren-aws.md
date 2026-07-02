# Bài 1. Tổng quan Data Store trên AWS

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu data store là gì.
- Biết AWS có nhiều loại dịch vụ lưu trữ dữ liệu khác nhau.
- Phân biệt sơ bộ DynamoDB, S3 và RDS.
- Biết chọn data store phù hợp theo tình huống đề thi.

## 2. Giải thích dễ hiểu

Trong ứng dụng thực tế, dữ liệu có thể ở nhiều dạng khác nhau:

- Thông tin đơn hàng.
- Thông tin người dùng.
- File ảnh.
- File hóa đơn PDF.
- Dữ liệu quan hệ như sản phẩm, khách hàng, đơn hàng.
- Dữ liệu cần truy vấn rất nhanh.

AWS cung cấp nhiều dịch vụ lưu trữ khác nhau. Developer cần biết chọn đúng dịch vụ thay vì dùng một loại database cho mọi thứ.

## 3. Ba nhóm data store chính trong chương này

### DynamoDB

DynamoDB là NoSQL database dạng key-value/document.

Phù hợp khi:

- Cần tốc độ cao.
- Cần scale tự động.
- Dữ liệu truy vấn theo key rõ ràng.
- Ứng dụng serverless.
- Không muốn quản lý server database.

Ví dụ:

- Lưu đơn booking.
- Lưu session.
- Lưu cart.
- Lưu trạng thái đơn hàng.

### S3

S3 là object storage.

Phù hợp khi:

- Lưu file.
- Lưu ảnh.
- Lưu video.
- Lưu log.
- Lưu backup.
- Cho user upload/download file.

Ví dụ:

- Ảnh sản phẩm.
- File avatar.
- File hóa đơn PDF.
- File backup database.

### RDS

RDS là relational database managed service.

Phù hợp khi:

- Cần SQL.
- Dữ liệu có quan hệ rõ ràng.
- Cần transaction phức tạp.
- Đã có app dùng MySQL/PostgreSQL.

Ví dụ:

- Hệ thống bán hàng truyền thống.
- CRM.
- ERP.
- Website có quan hệ bảng phức tạp.

## 4. Bảng so sánh nhanh

| Nhu cầu | Dịch vụ phù hợp |
|---|---|
| Lưu dữ liệu NoSQL tốc độ cao | DynamoDB |
| Lưu file ảnh/video/PDF | S3 |
| Lưu dữ liệu SQL quan hệ | RDS |
| User upload file tạm thời | S3 pre-signed URL |
| Query bằng partition key | DynamoDB Query |
| Query bằng SQL JOIN | RDS |
| Tự xóa item sau thời gian nhất định | DynamoDB TTL |
| Lưu nhiều phiên bản file | S3 Versioning |

## 5. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| NoSQL key-value | DynamoDB |
| Single-digit millisecond latency | DynamoDB |
| Object storage | S3 |
| File upload | S3 |
| Pre-signed URL | S3 |
| Relational database | RDS |
| SQL | RDS |
| Managed database | RDS |

## 6. Dạng câu hỏi exam thường gặp

### Tình huống 1

Ứng dụng cần lưu session của user và truy xuất cực nhanh theo user id.

Đáp án thường là: DynamoDB.

### Tình huống 2

User cần upload file ảnh riêng tư lên hệ thống mà không public bucket.

Đáp án thường là: S3 pre-signed URL.

### Tình huống 3

Ứng dụng đang dùng MySQL và cần chuyển lên AWS với ít thay đổi code nhất.

Đáp án thường là: RDS MySQL.

## 7. Bẫy thường gặp

- Không phải dữ liệu nào cũng dùng RDS.
- Không dùng DynamoDB nếu cần JOIN phức tạp như SQL.
- Không lưu file lớn trực tiếp trong database.
- Không public S3 bucket chỉ để user upload file.

## 8. Lab gợi ý

Trong chương này, project sẽ xây phần lưu dữ liệu cho Serverless Booking API:

```text
Client
  -> API Gateway
  -> Lambda
  -> DynamoDB

Client
  -> S3 pre-signed URL
  -> S3 Bucket
```

Yêu cầu lab:

- Tạo DynamoDB table `Bookings`.
- Tạo S3 bucket lưu ảnh booking.
- Tạo Lambda để ghi booking vào DynamoDB.
- Tạo pre-signed URL để upload ảnh.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
