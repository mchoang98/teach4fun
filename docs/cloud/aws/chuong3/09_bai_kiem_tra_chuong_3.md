# Bài kiểm tra Chương 3. Compute cho Developer

## Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 30 câu
- Mục tiêu: Đánh giá kiến thức về Lambda, EC2 và Elastic Beanstalk
- Mức đạt đề xuất: từ 70% trở lên

---

## Câu hỏi trắc nghiệm

### Câu 1

Dịch vụ nào phù hợp nhất khi cần chạy code mà không quản lý server?

A. EC2  
B. Lambda  
C. RDS  
D. CloudFormation  

Đáp án: B

---

### Câu 2

Trong Lambda, `handler` là gì?

A. File log của Lambda  
B. Điểm bắt đầu Lambda gọi khi function chạy  
C. IAM policy của Lambda  
D. Tên của CloudWatch metric  

Đáp án: B

---

### Câu 3

Dữ liệu đầu vào của Lambda thường nằm trong đối tượng nào?

A. event  
B. context  
C. policy  
D. runtime  

Đáp án: A

---

### Câu 4

Thông tin như function name, request ID, remaining time thường nằm trong đối tượng nào?

A. event  
B. context  
C. alias  
D. trigger  

Đáp án: B

---

### Câu 5

Lambda muốn ghi dữ liệu vào DynamoDB thì cần cấu hình gì quan trọng nhất?

A. Security Group  
B. Execution role có quyền DynamoDB  
C. Elastic IP  
D. AMI  

Đáp án: B

---

### Câu 6

Lambda bị dừng vì chạy quá lâu. Cấu hình nào cần kiểm tra đầu tiên?

A. Timeout  
B. Alias  
C. AMI  
D. Bucket policy  

Đáp án: A

---

### Câu 7

Tăng memory cho Lambda có thể giúp cải thiện performance vì:

A. Lambda được cấp thêm CPU tương ứng  
B. Lambda tự chuyển sang EC2  
C. Lambda bỏ qua IAM permission  
D. Lambda không còn timeout  

Đáp án: A

---

### Câu 8

Nơi phù hợp để lưu tên DynamoDB table khác nhau giữa dev và prod là:

A. Environment variables  
B. AMI  
C. Security Group  
D. Route Table  

Đáp án: A

---

### Câu 9

Secret như database password nên được lưu ở đâu là phù hợp nhất?

A. Hard-code trong source code  
B. Comment trong code  
C. Secrets Manager  
D. Tên Lambda function  

Đáp án: C

---

### Câu 10

Log mặc định của Lambda thường được xem ở đâu?

A. CloudWatch Logs  
B. S3 Glacier  
C. Route 53  
D. CodeCommit  

Đáp án: A

---

### Câu 11

Lambda version có đặc điểm nào?

A. Có thể thay đổi trực tiếp sau khi publish  
B. Là bản cố định của function  
C. Chỉ dùng cho EC2  
D. Không thể dùng với production  

Đáp án: B

---

### Câu 12

Lambda alias dùng để làm gì?

A. Trỏ tới một Lambda version  
B. Tạo IAM User  
C. Tạo S3 bucket  
D. Tăng dung lượng EBS  

Đáp án: A

---

### Câu 13

Để production không phụ thuộc trực tiếp vào `$LATEST`, nên dùng:

A. Lambda version và alias  
B. S3 lifecycle  
C. EC2 User Data  
D. RDS Read Replica  

Đáp án: A

---

### Câu 14

Chuyển 10% traffic sang Lambda version mới là ví dụ của:

A. Traffic shifting  
B. Full table scan  
C. Object versioning  
D. Static hosting  

Đáp án: A

---

### Câu 15

Dịch vụ thường dùng với Lambda alias để canary deployment là:

A. CodeDeploy  
B. CloudTrail  
C. Route 53 Resolver  
D. Amazon Macie  

Đáp án: A

---

### Câu 16

Concurrency trong Lambda nghĩa là:

A. Số Lambda function đang chạy đồng thời  
B. Số S3 bucket trong account  
C. Số IAM user đang đăng nhập  
D. Số file trong deployment package  

Đáp án: A

---

### Câu 17

Muốn giới hạn số Lambda chạy đồng thời để bảo vệ database phía sau, nên dùng:

A. Reserved concurrency  
B. S3 Versioning  
C. API Key  
D. AMI  

Đáp án: A

---

### Câu 18

Muốn giảm cold start cho Lambda production API, nên dùng:

A. Provisioned concurrency  
B. Security Group  
C. Access key hard-code  
D. S3 ACL  

Đáp án: A

---

### Câu 19

Cold start là gì?

A. Lambda cần khởi tạo môi trường chạy mới trước khi xử lý request  
B. EC2 bị tắt  
C. S3 object bị xóa  
D. DynamoDB table bị khóa  

Đáp án: A

---

### Câu 20

API Gateway gọi Lambda và chờ response là kiểu invocation nào?

A. Synchronous invocation  
B. Asynchronous invocation  
C. Batch replication  
D. Cross-region copy  

Đáp án: A

---

### Câu 21

S3 event gọi Lambda xử lý file upload thường là kiểu:

A. Asynchronous invocation  
B. Manual deployment only  
C. DNS routing  
D. SQL transaction  

Đáp án: A

---

### Câu 22

Message xử lý lỗi nhiều lần cần được lưu lại để debug. Dịch vụ/tính năng nào phù hợp?

A. Dead-letter Queue  
B. CloudFront  
C. Route 53  
D. EBS Snapshot  

Đáp án: A

---

### Câu 23

Vì sao code xử lý message nên idempotent?

A. Vì cùng một message/event có thể bị xử lý nhiều lần  
B. Vì IAM không cần role  
C. Vì Lambda không có log  
D. Vì S3 không lưu file  

Đáp án: A

---

### Câu 24

EC2 là dịch vụ gì?

A. Máy chủ ảo trên AWS  
B. Database NoSQL  
C. Hệ thống queue  
D. Dịch vụ DNS  

Đáp án: A

---

### Câu 25

AMI dùng để làm gì?

A. Là image dùng để tạo EC2 instance  
B. Là queue message  
C. Là API endpoint  
D. Là log group  

Đáp án: A

---

### Câu 26

Security Group trong EC2 giống như:

A. Firewall kiểm soát traffic vào/ra instance  
B. Database index  
C. Lambda alias  
D. S3 lifecycle rule  

Đáp án: A

---

### Câu 27

EC2 cần đọc file từ S3 an toàn, không hard-code access key. Cách tốt nhất là:

A. Gắn IAM Role cho EC2  
B. Ghi access key vào source code  
C. Gửi password qua email  
D. Tắt Security Group  

Đáp án: A

---

### Câu 28

User Data trong EC2 thường dùng để:

A. Chạy script khởi tạo server  
B. Tạo DynamoDB table  
C. Gửi email marketing  
D. Xóa CloudWatch Logs  

Đáp án: A

---

### Câu 29

Elastic Beanstalk phù hợp nhất cho tình huống nào?

A. Deploy web app nhanh, ít quản lý hạ tầng  
B. Lưu object file private  
C. Làm message queue FIFO  
D. Quản lý DNS domain  

Đáp án: A

---

### Câu 30

Deployment policy nào của Elastic Beanstalk an toàn hơn vì tạo instance mới trước khi thay thế?

A. Immutable  
B. All at once  
C. Manual SSH  
D. Delete stack  

Đáp án: A

---

## Bảng đánh giá

| Số câu đúng | Tỷ lệ | Đánh giá |
|---:|---:|---|
| 0 - 17 | Dưới 60% | Chưa đạt, cần học lại chương |
| 18 - 20 | 60% - 69% | Nắm cơ bản, cần luyện thêm |
| 21 - 23 | 70% - 79% | Đạt, có thể học chương tiếp theo |
| 24 - 27 | 80% - 89% | Tốt |
| 28 - 30 | 90% - 100% | Rất tốt |

---

## Gợi ý ôn lại nếu làm sai nhiều

- Sai câu 1 - 10: Ôn Lambda cơ bản và configuration.
- Sai câu 11 - 15: Ôn Lambda version, alias và deployment.
- Sai câu 16 - 19: Ôn concurrency và cold start.
- Sai câu 20 - 23: Ôn invocation, retry và DLQ.
- Sai câu 24 - 28: Ôn EC2 cơ bản.
- Sai câu 29 - 30: Ôn Elastic Beanstalk.
