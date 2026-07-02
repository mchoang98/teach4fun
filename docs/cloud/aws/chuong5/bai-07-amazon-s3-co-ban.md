# Bài 7. Amazon S3 cơ bản

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu Amazon S3 là gì.
- Biết Bucket và Object.
- Hiểu storage class, versioning, lifecycle.
- Biết khi nào dùng S3 trong ứng dụng.

## 2. Amazon S3 là gì?

S3 là dịch vụ object storage của AWS.

S3 dùng để lưu:

- Ảnh.
- Video.
- File PDF.
- File log.
- Backup.
- Static website files.
- File upload từ user.

## 3. Bucket và Object

### Bucket

Bucket là nơi chứa object.

Ví dụ:

```text
booking-images-prod
user-avatar-staging
invoice-pdf-storage
```

### Object

Object là file được lưu trong bucket.

Ví dụ:

```text
avatars/user-001.png
bookings/B001/photo.jpg
invoices/INV-001.pdf
```

## 4. Object Key

Object key là đường dẫn/tên file trong bucket.

Ví dụ:

```text
bookings/2026/07/B001.jpg
```

S3 không thật sự có folder như file system truyền thống, nhưng dùng dấu `/` trong key để tổ chức giống thư mục.

## 5. Storage Class

S3 có nhiều storage class để tối ưu chi phí.

Một số loại phổ biến:

- S3 Standard
- S3 Intelligent-Tiering
- S3 Standard-IA
- S3 Glacier

Developer Associate thường cần hiểu cơ bản:

| Nhu cầu | Storage class |
|---|---|
| Truy cập thường xuyên | S3 Standard |
| Không biết pattern truy cập | Intelligent-Tiering |
| Ít truy cập | Standard-IA |
| Lưu trữ lâu dài, hiếm truy cập | Glacier |

## 6. Versioning

Versioning giúp lưu nhiều phiên bản của cùng một object.

Use case:

- Khôi phục file bị ghi đè.
- Khôi phục file bị xóa nhầm.
- Audit thay đổi file.

Keyword:

```text
recover from accidental delete
overwritten object
object version recovery
```

## 7. Lifecycle

Lifecycle dùng để tự động chuyển hoặc xóa object theo thời gian.

Ví dụ:

```text
Sau 30 ngày chuyển log sang Standard-IA.
Sau 365 ngày chuyển sang Glacier.
Sau 7 năm xóa file.
```

## 8. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Object storage | S3 |
| Store files | S3 |
| Bucket | Nơi chứa object |
| Object version recovery | S3 Versioning |
| Move old files to cheaper storage | Lifecycle |
| Archive data | Glacier |
| Static files | S3 |

## 9. Dạng câu hỏi exam thường gặp

### Tình huống 1

Cần lưu ảnh sản phẩm cho website.

Đáp án: S3.

### Tình huống 2

File bị ghi đè và cần khôi phục bản cũ.

Đáp án: S3 Versioning.

### Tình huống 3

Log cũ ít truy cập cần giảm chi phí lưu trữ.

Đáp án: S3 Lifecycle chuyển sang storage class rẻ hơn.

## 10. Bẫy thường gặp

- S3 không phải relational database.
- Không nên lưu file lớn trong DynamoDB/RDS nếu S3 phù hợp hơn.
- Không public bucket nếu file là private.
- Versioning cần bật trước khi cần khôi phục version.

## 11. Lab thực hành

1. Tạo bucket `serverless-booking-images`.
2. Upload một file ảnh.
3. Bật versioning.
4. Upload lại file cùng key.
5. Kiểm tra các version của object.
6. Tạo lifecycle rule chuyển object cũ sang storage class khác.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
