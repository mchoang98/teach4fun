# Bài 9. Bài kiểm tra cuối Chương 6

## Thông tin bài kiểm tra

- Chương: Messaging và Event-driven Architecture
- Hình thức: Trắc nghiệm
- Số câu: 30 câu
- Thời gian đề xuất: 35–45 phút
- Mục tiêu: Đánh giá khả năng phân biệt SQS, SNS, EventBridge và xử lý các tình huống exam DVA-C02.

---

## Phần A. Câu hỏi trắc nghiệm

### Câu 1

Một API xử lý request quá lâu vì phải gửi email và tạo báo cáo. Giải pháp nào phù hợp nhất để giảm thời gian phản hồi cho user?

A. Tăng timeout của API Gateway  
B. Đưa tác vụ xử lý sau vào SQS và dùng worker xử lý bất đồng bộ  
C. Dùng S3 để lưu request  
D. Dùng CloudFront để cache toàn bộ request  

---

### Câu 2

Keyword nào trong đề thi thường gợi ý dùng Amazon SQS?

A. Pub/Sub  
B. Event bus  
C. Decouple application components  
D. Hosted UI  

---

### Câu 3

Một hệ thống cần xử lý message theo đúng thứ tự tạo ra. Nên chọn loại queue nào?

A. SQS Standard Queue  
B. SQS FIFO Queue  
C. SNS Topic  
D. EventBridge Bus  

---

### Câu 4

SQS Standard Queue có đặc điểm nào?

A. Đảm bảo strict ordering tuyệt đối  
B. Chỉ xử lý message đúng một lần  
C. Có throughput cao và message có thể được xử lý nhiều hơn một lần  
D. Chỉ dùng được với Lambda  

---

### Câu 5

Một consumer nhận message từ SQS nhưng chưa xử lý xong. Trong thời gian đó message bị ẩn khỏi consumer khác. Cơ chế này gọi là gì?

A. Message filtering  
B. Visibility Timeout  
C. Event pattern  
D. Usage Plan  

---

### Câu 6

Nếu worker xử lý message mất 2 phút nhưng Visibility Timeout chỉ 30 giây, điều gì có thể xảy ra?

A. Message có thể hiện lại và bị xử lý trùng  
B. Message sẽ tự động chuyển sang SNS  
C. Message bị mã hóa bằng KMS  
D. Message không bao giờ được xử lý  

---

### Câu 7

Message trong SQS được xóa khỏi queue khi nào?

A. Ngay khi producer gửi vào queue  
B. Ngay khi consumer receive message  
C. Khi consumer xử lý xong và gọi DeleteMessage  
D. Khi Lambda được tạo  

---

### Câu 8

Một message xử lý lỗi nhiều lần và cần được tách ra để debug. Nên dùng gì?

A. DLQ  
B. GSI  
C. CloudFront  
D. Cognito  

---

### Câu 9

Max Receive Count trong DLQ dùng để làm gì?

A. Giới hạn số user đăng nhập  
B. Xác định số lần message được nhận trước khi chuyển sang DLQ  
C. Giới hạn số Lambda version  
D. Tăng tốc DynamoDB Query  

---

### Câu 10

Một Lambda consume SQS message theo batch. Trong batch có 10 message, chỉ 1 message lỗi. Cần tránh retry lại 9 message đã thành công. Nên dùng gì?

A. Partial batch failure  
B. S3 lifecycle  
C. API Gateway caching  
D. Cognito Identity Pool  

---

### Câu 11

Lambda tự động đọc message từ SQS thông qua cấu hình nào?

A. Event source mapping  
B. Hosted UI  
C. Buildspec  
D. CloudFormation Output  

---

### Câu 12

SQS body trong event Lambda thường có dạng gì?

A. Luôn là binary file  
B. Thường là string, có thể chứa JSON cần parse  
C. Luôn là DynamoDB item  
D. Luôn là IAM policy  

---

### Câu 13

Một event cần gửi đến nhiều hệ thống độc lập như email, invoice, analytics. Pattern phù hợp nhất là gì?

A. Một SQS queue cho tất cả worker cùng đọc  
B. SNS topic fanout tới nhiều SQS queue  
C. Một Lambda gọi tuần tự từng service  
D. S3 static website hosting  

---

### Câu 14

Keyword nào thường gợi ý dùng SNS?

A. Fanout  
B. Query by partition key  
C. Cold start  
D. Drift detection  

---

### Câu 15

Trong pattern SNS + SQS, vì sao mỗi consumer nên có queue riêng?

A. Để mỗi consumer nhận cùng event và retry độc lập  
B. Để giảm số lượng message xuống 0  
C. Để thay thế IAM role  
D. Để bắt buộc dùng FIFO  

---

### Câu 16

SNS message filtering dùng để làm gì?

A. Lọc message subscriber được nhận dựa trên attribute/policy  
B. Tăng memory cho Lambda  
C. Xóa object trong S3  
D. Tạo JWT token  

---

### Câu 17

Một subscriber chỉ muốn nhận event có `eventType = PAYMENT_SUCCESS`. Nên dùng gì?

A. SNS filter policy  
B. SQS delay queue  
C. Lambda layer  
D. DynamoDB TTL  

---

### Câu 18

Điểm khác biệt chính giữa SNS và SQS là gì?

A. SNS là pub/sub push message, SQS là queue để consumer pull message  
B. SNS chỉ dùng cho database, SQS chỉ dùng cho file  
C. SNS thay thế IAM, SQS thay thế KMS  
D. SNS không hỗ trợ subscriber  

---

### Câu 19

Một hệ thống cần chạy Lambda mỗi ngày lúc 1 giờ sáng. Nên dùng dịch vụ nào?

A. EventBridge Scheduled Rule  
B. SQS FIFO Queue  
C. SNS SMS  
D. S3 Versioning  

---

### Câu 20

Keyword nào thường gợi ý EventBridge?

A. Event bus  
B. Pre-signed URL  
C. Multipart upload  
D. Build artifact  

---

### Câu 21

EventBridge Rule có thể route event dựa trên gì?

A. Event pattern  
B. CSS selector  
C. SQL index  
D. IAM username duy nhất  

---

### Câu 22

EventBridge phù hợp hơn SNS trong tình huống nào?

A. Cần scheduled event hoặc event routing theo pattern phức tạp  
B. Cần lưu file lớn  
C. Cần tạo EC2 AMI  
D. Cần cấp quyền root user  

---

### Câu 23

Nếu consumer gọi SQS nhiều lần nhưng thường không có message, nên bật gì để giảm empty responses?

A. Long polling  
B. S3 versioning  
C. Cognito Hosted UI  
D. Lambda alias  

---

### Câu 24

Delay Queue dùng để làm gì?

A. Trì hoãn thời điểm message có thể được consumer nhận  
B. Mã hóa message bằng KMS  
C. Tự động tạo user  
D. Deploy Lambda version mới  

---

### Câu 25

Worker xử lý SQS Standard Queue nên được thiết kế idempotent vì sao?

A. Vì message có thể được xử lý nhiều hơn một lần  
B. Vì SQS không hỗ trợ IAM  
C. Vì Lambda không thể ghi log  
D. Vì SNS bắt buộc dùng FIFO  

---

### Câu 26

Một message lỗi liên tục được gọi là gì trong ngữ cảnh queue?

A. Poison message  
B. Static object  
C. Root user  
D. Build artifact  

---

### Câu 27

Sau khi sửa bug worker, team muốn đưa message từ DLQ về main queue để xử lý lại. Hành động này gọi là gì?

A. Redrive  
B. AssumeRole  
C. Invalidate cache  
D. Rotate key  

---

### Câu 28

Trong kiến trúc SNS + SQS, nếu Email Worker lỗi, Invoice Worker có bị ảnh hưởng không nếu mỗi worker có queue riêng?

A. Không, vì mỗi consumer xử lý độc lập qua queue riêng  
B. Có, vì SNS luôn dừng toàn bộ topic  
C. Có, vì SQS không thể retry  
D. Không thể biết vì SNS không có subscriber  

---

### Câu 29

Một app cần nhận event từ SaaS application và route vào AWS service. Dịch vụ nào phù hợp nhất?

A. EventBridge  
B. S3 Glacier  
C. EC2 User Data  
D. CloudFormation Drift Detection  

---

### Câu 30

Chọn cặp đúng nhất:

A. SQS = Pub/Sub, SNS = Queue, EventBridge = Database  
B. SQS = Queue, SNS = Pub/Sub, EventBridge = Event Bus  
C. SQS = Object Storage, SNS = CDN, EventBridge = IAM  
D. SQS = SQL Database, SNS = NoSQL, EventBridge = File System  

---

## Phần B. Đáp án

| Câu | Đáp án |
|---|---|
| 1 | B |
| 2 | C |
| 3 | B |
| 4 | C |
| 5 | B |
| 6 | A |
| 7 | C |
| 8 | A |
| 9 | B |
| 10 | A |
| 11 | A |
| 12 | B |
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
| 30 | B |

---

## Phần C. Gợi ý chấm điểm

| Số câu đúng | Đánh giá |
|---|---|
| 0–17 | Chưa đạt, cần học lại chương |
| 18–21 | Nắm cơ bản, cần luyện thêm tình huống |
| 22–25 | Khá, có thể chuyển chương tiếp theo |
| 26–28 | Tốt, nắm chắc chương |
| 29–30 | Rất tốt, sẵn sàng làm câu hỏi exam dạng messaging |

---

## Phần D. Review sau kiểm tra

Sau khi làm bài, học viên cần tự trả lời:

1. Tôi có phân biệt được SQS, SNS và EventBridge chưa?
2. Tôi có nhớ keyword `decouple`, `fanout`, `event bus`, `scheduled event` không?
3. Tôi có hiểu visibility timeout và DLQ không?
4. Tôi có biết khi nào dùng SNS + SQS không?
5. Tôi có giải thích được vì sao đáp án đúng tốt hơn đáp án sai không?
