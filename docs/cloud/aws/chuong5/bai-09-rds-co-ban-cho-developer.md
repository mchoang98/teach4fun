# Bài 9. RDS cơ bản cho Developer

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu RDS là gì.
- Biết khi nào chọn RDS thay vì DynamoDB.
- Hiểu connection string, Secrets Manager, Multi-AZ, Read Replica.
- Biết các vấn đề developer hay gặp khi app kết nối RDS.

## 2. RDS là gì?

RDS là dịch vụ managed relational database của AWS.

RDS hỗ trợ các engine như:

- MySQL
- PostgreSQL
- MariaDB
- Oracle
- SQL Server
- Amazon Aurora

AWS quản lý nhiều phần vận hành như:

- Provision database.
- Backup.
- Patch.
- Monitoring.
- High availability options.

## 3. Khi nào dùng RDS?

Dùng RDS khi:

- Ứng dụng cần SQL.
- Dữ liệu có quan hệ phức tạp.
- Cần JOIN.
- Cần transaction.
- App cũ đang dùng MySQL/PostgreSQL.
- Muốn migrate lên AWS với ít thay đổi.

## 4. Khi nào không nên dùng RDS?

Không nên dùng RDS nếu:

- Chỉ cần key-value đơn giản.
- Muốn serverless NoSQL scale nhanh.
- Không cần JOIN.
- Workload phù hợp DynamoDB hơn.
- Chỉ lưu file ảnh/video/PDF.

## 5. Connection String

Ứng dụng kết nối RDS thông qua connection string.

Ví dụ dạng tổng quát:

```text
postgresql://username:password@host:5432/database
mysql://username:password@host:3306/database
```

Không nên hard-code username/password trong code.

## 6. Secrets Manager với RDS

Secrets Manager dùng để lưu database credentials an toàn.

Use case:

- Lưu DB username/password.
- Lambda hoặc app đọc secret qua IAM Role.
- Rotation password tự động.

Keyword:

```text
rotate database password
store database credentials securely
avoid hard-coded password
```

## 7. Multi-AZ

Multi-AZ dùng để tăng high availability.

Ý chính:

- Có standby database ở AZ khác.
- Tự động failover khi primary gặp lỗi.
- Dùng cho availability, không phải để scale read chính.

Keyword:

```text
high availability
automatic failover
```

## 8. Read Replica

Read Replica dùng để scale read workload.

Ý chính:

- Tạo bản sao để đọc.
- Giảm tải database chính.
- Phù hợp ứng dụng đọc nhiều.

Keyword:

```text
read scaling
read-heavy workload
reduce load on primary database
```

## 9. Connection Pooling

Ứng dụng backend thường cần connection pooling để tránh mở quá nhiều connection database.

Đặc biệt với Lambda + RDS, cần cẩn thận vì nhiều Lambda chạy đồng thời có thể tạo quá nhiều connection.

Các hướng thường gặp:

- Dùng connection pooling.
- Dùng RDS Proxy nếu phù hợp.
- Tái sử dụng connection ngoài handler Lambda.

## 10. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Relational database | RDS |
| SQL | RDS |
| JOIN | RDS |
| Transaction | RDS |
| High availability | Multi-AZ |
| Automatic failover | Multi-AZ |
| Read scaling | Read Replica |
| Rotate database password | Secrets Manager |
| Too many DB connections from Lambda | RDS Proxy / connection pooling |

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

Ứng dụng MySQL hiện tại cần migrate lên AWS với ít thay đổi.

Đáp án: RDS MySQL hoặc Aurora MySQL-compatible.

### Tình huống 2

Database cần tự động failover khi AZ lỗi.

Đáp án: Multi-AZ.

### Tình huống 3

Database bị quá tải do nhiều truy vấn đọc.

Đáp án: Read Replica.

### Tình huống 4

Password database đang hard-code trong code.

Đáp án: Secrets Manager.

## 12. Bẫy thường gặp

- Multi-AZ dùng cho high availability, không phải chủ yếu để scale read.
- Read Replica dùng cho read scaling, không phải automatic failover chính như Multi-AZ.
- Không lưu file lớn trong RDS nếu S3 phù hợp hơn.
- Lambda kết nối RDS cần lưu ý connection limit.

## 13. Lab thực hành gợi ý

Nếu có điều kiện thực hành:

1. Tạo RDS PostgreSQL hoặc MySQL nhỏ.
2. Tạo secret trong Secrets Manager chứa username/password.
3. Viết Lambda đọc secret.
4. Kết nối database bằng connection string.
5. Thử query đơn giản.

Nếu muốn tiết kiệm chi phí, chỉ cần xem demo hoặc thực hành bằng local database trước.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
