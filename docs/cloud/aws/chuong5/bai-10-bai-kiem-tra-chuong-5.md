# Bài 10. Bài kiểm tra Chương 5 - Data Store cho Developer

## 1. Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 35 câu
- Thời gian gợi ý: 45 phút
- Mục tiêu: Đánh giá kiến thức DynamoDB, S3 và RDS trong phạm vi AWS Certified Developer - Associate

## 2. Hướng dẫn làm bài

Chọn đáp án đúng nhất cho mỗi câu.

Một số câu có nhiều đáp án nghe có vẻ đúng, nhưng cần chọn giải pháp phù hợp nhất theo AWS best practices.

---

## 3. Câu hỏi trắc nghiệm

### Câu 1

Dịch vụ nào phù hợp nhất để lưu dữ liệu NoSQL key-value với latency thấp?

A. Amazon RDS  
B. Amazon DynamoDB  
C. Amazon S3  
D. Amazon EFS  

### Câu 2

Dịch vụ nào phù hợp nhất để lưu file ảnh, video, PDF?

A. DynamoDB  
B. S3  
C. IAM  
D. CloudWatch  

### Câu 3

Ứng dụng cần database SQL có hỗ trợ JOIN và transaction. Dịch vụ nào phù hợp nhất?

A. S3  
B. DynamoDB  
C. RDS  
D. SNS  

### Câu 4

Trong DynamoDB, một dòng dữ liệu được gọi là gì?

A. Object  
B. Item  
C. Bucket  
D. Topic  

### Câu 5

Trong DynamoDB, field trong một item được gọi là gì?

A. Attribute  
B. Instance  
C. Queue  
D. Stage  

### Câu 6

Query trong DynamoDB thường yêu cầu điều kiện nào?

A. Có Partition Key hoặc index phù hợp  
B. Bucket phải public  
C. Có Lambda Authorizer  
D. Có CloudFront  

### Câu 7

Thao tác nào đọc toàn bộ table DynamoDB rồi mới lọc dữ liệu?

A. Query  
B. Scan  
C. PutItem  
D. UpdateItem  

### Câu 8

Ứng dụng đang dùng Scan để tìm item theo `customerId`, table ngày càng lớn và truy vấn chậm. Giải pháp phù hợp nhất là gì?

A. Tạo GSI với `customerId`  
B. Public table  
C. Tăng timeout Lambda lên 15 phút  
D. Lưu dữ liệu sang SNS  

### Câu 9

GSI trong DynamoDB dùng để làm gì?

A. Query dữ liệu bằng key khác với primary key của table  
B. Mã hóa object trong S3  
C. Deploy Lambda  
D. Tạo alarm  

### Câu 10

LSI khác GSI ở điểm nào?

A. LSI dùng cùng Partition Key với table chính  
B. LSI chỉ dùng cho S3  
C. LSI dùng để gửi notification  
D. LSI là dịch vụ SQL  

### Câu 11

Traffic DynamoDB khó dự đoán, app mới triển khai. Capacity mode nào thường phù hợp?

A. On-demand  
B. Manual EC2  
C. Glacier  
D. Multi-AZ  

### Câu 12

RCU trong DynamoDB liên quan đến điều gì?

A. Read capacity  
B. Write capacity  
C. File storage  
D. User authentication  

### Câu 13

WCU trong DynamoDB liên quan đến điều gì?

A. Read capacity  
B. Write capacity  
C. DNS routing  
D. API caching  

### Câu 14

DynamoDB bị throttling có thể do nguyên nhân nào?

A. Capacity không đủ hoặc hot partition  
B. Bucket S3 bật versioning  
C. CloudWatch log quá dài  
D. Cognito user chưa xác thực  

### Câu 15

Hot partition thường do nguyên nhân nào?

A. Quá nhiều request tập trung vào cùng một partition key  
B. File quá lớn trong S3  
C. User quên password  
D. API Gateway chưa bật CORS  

### Câu 16

Tính năng nào giúp DynamoDB tự động xóa item sau một thời điểm?

A. TTL  
B. GSI  
C. S3 Versioning  
D. CloudFormation  

### Câu 17

Cần trigger Lambda khi item trong DynamoDB thay đổi. Nên dùng gì?

A. DynamoDB Streams  
B. S3 Glacier  
C. RDS Multi-AZ  
D. API Key  

### Câu 18

Cần tăng số lượt xem sản phẩm an toàn khi có nhiều request cùng lúc. Nên dùng gì?

A. Atomic Counter  
B. Bucket Policy  
C. Read Replica  
D. Usage Plan  

### Câu 19

Cần nhiều thao tác ghi trong DynamoDB cùng thành công hoặc cùng thất bại. Nên dùng gì?

A. DynamoDB Transactions  
B. S3 Lifecycle  
C. SNS Topic  
D. CloudWatch Alarm  

### Câu 20

DAX phù hợp nhất cho tình huống nào?

A. Workload đọc nhiều cần giảm latency  
B. Upload file lớn  
C. Tạo user đăng nhập  
D. Mã hóa password database  

### Câu 21

Trong S3, nơi chứa object được gọi là gì?

A. Bucket  
B. Table  
C. Queue  
D. Function  

### Câu 22

Trong S3, file được lưu gọi là gì?

A. Object  
B. Item  
C. Role  
D. Stream  

### Câu 23

Cần khôi phục file S3 bị ghi đè nhầm. Tính năng nào cần được bật trước đó?

A. Versioning  
B. Throttling  
C. Query  
D. STS  

### Câu 24

Cần tự động chuyển file log cũ sang storage class rẻ hơn. Nên dùng gì?

A. S3 Lifecycle  
B. DynamoDB TTL  
C. Lambda Alias  
D. CodeBuild  

### Câu 25

User cần upload file private lên S3 mà không public bucket và không lộ AWS credentials. Nên dùng gì?

A. S3 pre-signed URL  
B. Public bucket  
C. Access key trong frontend  
D. Scan DynamoDB  

### Câu 26

File lớn upload lên S3 thường thất bại. Giải pháp phù hợp là gì?

A. Multipart upload  
B. DynamoDB Query  
C. RDS Multi-AZ  
D. Cognito User Pool  

### Câu 27

Cần mã hóa S3 object bằng customer managed key. Nên dùng gì?

A. SSE-KMS  
B. Scan  
C. Read Replica  
D. SNS filtering  

### Câu 28

Bucket policy thuộc loại policy nào?

A. Resource-based policy  
B. Identity provider  
C. Buildspec file  
D. Lambda runtime  

### Câu 29

Ứng dụng đang dùng MySQL và muốn migrate lên AWS với ít thay đổi. Dịch vụ phù hợp là gì?

A. RDS MySQL  
B. SQS  
C. S3 Glacier  
D. EventBridge  

### Câu 30

RDS Multi-AZ chủ yếu dùng để làm gì?

A. High availability và automatic failover  
B. Lưu file ảnh  
C. Gửi email notification  
D. Tạo API key  

### Câu 31

RDS Read Replica chủ yếu dùng để làm gì?

A. Scale read workload  
B. Mã hóa file S3  
C. Tạo Lambda version  
D. Xóa item hết hạn  

### Câu 32

Database password không nên hard-code trong code. Dịch vụ nào phù hợp để lưu và rotate password?

A. Secrets Manager  
B. S3 Versioning  
C. API Gateway Stage  
D. CloudWatch Dashboard  

### Câu 33

Lambda kết nối RDS với concurrency cao có thể gặp vấn đề gì?

A. Quá nhiều database connections  
B. S3 object bị public  
C. DynamoDB TTL không chạy  
D. SNS không có subscriber  

### Câu 34

Giải pháp nào có thể hỗ trợ vấn đề quá nhiều connection từ Lambda đến RDS?

A. RDS Proxy hoặc connection pooling  
B. S3 Multipart Upload  
C. DynamoDB TTL  
D. CloudFormation Drift Detection  

### Câu 35

Chọn cặp dịch vụ đúng nhất theo nhu cầu:

A. File upload -> S3, NoSQL low latency -> DynamoDB, SQL relational -> RDS  
B. File upload -> IAM, NoSQL -> CloudWatch, SQL -> SNS  
C. File upload -> CodeBuild, NoSQL -> S3, SQL -> Lambda  
D. File upload -> X-Ray, NoSQL -> API Gateway, SQL -> EventBridge  

---

## 4. Đáp án

| Câu | Đáp án |
|---|---|
| 1 | B |
| 2 | B |
| 3 | C |
| 4 | B |
| 5 | A |
| 6 | A |
| 7 | B |
| 8 | A |
| 9 | A |
| 10 | A |
| 11 | A |
| 12 | A |
| 13 | B |
| 14 | A |
| 15 | A |
| 16 | A |
| 17 | A |
| 18 | A |
| 19 | A |
| 20 | A |
| 21 | A |
| 22 | A |
| 23 | A |
| 24 | A |
| 25 | A |
| 26 | A |
| 27 | A |
| 28 | A |
| 29 | A |
| 30 | A |
| 31 | A |
| 32 | A |
| 33 | A |
| 34 | A |
| 35 | A |

---

## 5. Tự đánh giá

| Số câu đúng | Đánh giá |
|---|---|
| Dưới 21 câu | Chưa đạt, cần học lại chương |
| 21 - 24 câu | Nắm cơ bản nhưng cần luyện thêm |
| 25 - 28 câu | Khá, có thể chuyển chương tiếp theo |
| 29 - 32 câu | Tốt |
| 33 - 35 câu | Rất tốt, nắm chắc chương 5 |

---

## 6. Nội dung cần ôn lại nếu sai nhiều

Nếu sai nhiều câu 1-10:

- Ôn lại DynamoDB cơ bản, Query, Scan, GSI, LSI.

Nếu sai nhiều câu 11-20:

- Ôn lại Capacity, throttling, TTL, Streams, Transactions, DAX.

Nếu sai nhiều câu 21-28:

- Ôn lại S3, Versioning, Lifecycle, pre-signed URL, multipart upload, encryption.

Nếu sai nhiều câu 29-35:

- Ôn lại RDS, Multi-AZ, Read Replica, Secrets Manager, connection pooling.
