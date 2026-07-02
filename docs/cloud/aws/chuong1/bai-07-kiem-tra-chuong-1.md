# Bài 7. Kiểm tra cuối Chương 1 - AWS Foundation cho Developer

## 1. Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 20 câu
- Thời gian gợi ý: 25 phút
- Mục tiêu: Kiểm tra kiến thức nền tảng AWS cho Developer

## 2. Nội dung kiểm tra

Bài kiểm tra đánh giá các phần:

- AWS và Cloud Computing
- Region và Availability Zone
- AWS Account, Root user, MFA
- IAM cơ bản
- AWS CLI và AWS SDK
- Shared Responsibility Model
- Keyword tiếng Anh thường gặp

---

# Phần A. Câu hỏi trắc nghiệm

## Câu 1

AWS là viết tắt của cụm từ nào?

A. Amazon Web Server  
B. Amazon Web Services  
C. Advanced Web System  
D. Application Web Security  

---

## Câu 2

Cloud computing giúp developer chủ yếu ở điểm nào?

A. Không cần viết code nữa  
B. Có thể dùng tài nguyên máy tính qua internet theo nhu cầu  
C. Không cần bảo mật ứng dụng  
D. Không cần database  

---

## Câu 3

Dịch vụ nào thường được dùng để chạy code serverless trên AWS?

A. Amazon S3  
B. AWS Lambda  
C. Amazon RDS  
D. AWS CloudFormation  

---

## Câu 4

Dịch vụ nào thường được dùng để tạo REST API serverless kết hợp với Lambda?

A. Amazon CloudWatch  
B. Amazon DynamoDB  
C. Amazon API Gateway  
D. AWS KMS  

---

## Câu 5

Region trong AWS là gì?

A. Một người dùng AWS  
B. Một khu vực địa lý để triển khai dịch vụ AWS  
C. Một file cấu hình IAM  
D. Một loại database  

---

## Câu 6

Availability Zone là gì?

A. Một hoặc nhiều data center độc lập trong một Region  
B. Một tài khoản root  
C. Một loại IAM policy  
D. Một command của AWS CLI  

---

## Câu 7

Nếu người dùng chính ở Việt Nam, Region nào thường được cân nhắc để giảm độ trễ?

A. ap-southeast-1 Singapore  
B. us-east-1 North Virginia  
C. eu-west-1 Ireland  
D. sa-east-1 São Paulo  

---

## Câu 8

Root user trong AWS có đặc điểm nào đúng nhất?

A. Là user chỉ có quyền đọc  
B. Là user quyền cao nhất trong AWS Account  
C. Là role dùng cho Lambda  
D. Là user chỉ dùng cho billing  

---

## Câu 9

Best practice đối với Root user là gì?

A. Dùng Root user để deploy app hằng ngày  
B. Tạo access key cho Root user và lưu trong code  
C. Bật MFA và không dùng Root user hằng ngày  
D. Chia sẻ Root user cho toàn team  

---

## Câu 10

MFA giúp ích gì?

A. Tăng tốc độ API  
B. Thêm một lớp xác thực để bảo vệ tài khoản  
C. Tự động deploy Lambda  
D. Tăng dung lượng S3  

---

## Câu 11

IAM dùng để làm gì?

A. Quản lý danh tính và quyền truy cập AWS  
B. Lưu file object  
C. Tạo queue message  
D. Tạo dashboard monitoring  

---

## Câu 12

IAM Policy thường có định dạng nào?

A. HTML  
B. CSS  
C. JSON  
D. PNG  

---

## Câu 13

Lambda cần ghi dữ liệu vào DynamoDB. Cách an toàn nhất thường là gì?

A. Hard-code access key trong source code  
B. Gán Lambda execution role có quyền phù hợp  
C. Dùng Root user access key  
D. Public DynamoDB table  

---

## Câu 14

EC2 cần đọc file từ S3. Cách phù hợp nhất là gì?

A. Gán IAM role cho EC2 instance  
B. Lưu Root password vào EC2  
C. Cho S3 public toàn bộ  
D. Tắt IAM policy  

---

## Câu 15

AWS CLI dùng để làm gì?

A. Thiết kế giao diện web  
B. Tương tác với AWS bằng dòng lệnh  
C. Tạo ảnh minh họa  
D. Chạy SQL trong browser  

---

## Câu 16

AWS SDK dùng để làm gì?

A. Viết code gọi AWS service  
B. Tạo tài khoản AWS mới  
C. Thay thế hoàn toàn IAM  
D. Tự động trả phí AWS  

---

## Câu 17

Lệnh nào thường dùng để kiểm tra danh tính AWS CLI hiện tại?

A. aws s3 delete-all  
B. aws sts get-caller-identity  
C. aws iam root-login  
D. aws lambda reset-account  

---

## Câu 18

Theo Shared Responsibility Model, AWS chịu trách nhiệm phần nào?

A. Bảo mật source code của khách hàng  
B. Cấu hình IAM policy của khách hàng  
C. Bảo vệ hạ tầng vật lý và data center  
D. Bật MFA cho Root user của khách hàng  

---

## Câu 19

Theo Shared Responsibility Model, khách hàng chịu trách nhiệm phần nào?

A. Bảo trì phần cứng AWS  
B. Bảo vệ data center vật lý AWS  
C. Cấu hình quyền IAM và bảo vệ dữ liệu của mình  
D. Xây dựng Availability Zone  

---

## Câu 20

Keyword “programmatic access” trong đề thi thường liên quan đến gì?

A. AWS CLI / SDK / Access key / IAM Role  
B. Chỉ liên quan đến giao diện Console  
C. Chỉ liên quan đến billing  
D. Chỉ liên quan đến CloudFront  

---

# Phần B. Đáp án

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | B |
| 4 | C |
| 5 | B |
| 6 | A |
| 7 | A |
| 8 | B |
| 9 | C |
| 10 | B |
| 11 | A |
| 12 | C |
| 13 | B |
| 14 | A |
| 15 | B |
| 16 | A |
| 17 | B |
| 18 | C |
| 19 | C |
| 20 | A |

---

# Phần C. Giải thích nhanh

## Câu 3

Lambda là dịch vụ serverless compute. Khi đề nói “run code without managing servers”, thường nghĩ tới Lambda.

## Câu 4

API Gateway dùng để expose REST API/HTTP API, thường kết hợp với Lambda trong kiến trúc serverless.

## Câu 9

Root user có quyền rất cao. Best practice là bật MFA và không dùng Root user cho công việc hằng ngày.

## Câu 13

Lambda nên dùng execution role để truy cập AWS service khác, không hard-code credentials.

## Câu 18 và 19

AWS chịu trách nhiệm “security of the cloud”. Khách hàng chịu trách nhiệm “security in the cloud”.

---

# Phần D. Đánh giá kết quả

| Số câu đúng | Đánh giá |
|---:|---|
| 0 - 11 | Chưa đạt, cần học lại chương |
| 12 - 14 | Nắm cơ bản, cần ôn thêm keyword |
| 15 - 17 | Khá, có thể sang chương tiếp theo |
| 18 - 20 | Tốt, đã nắm vững nền tảng chương 1 |
