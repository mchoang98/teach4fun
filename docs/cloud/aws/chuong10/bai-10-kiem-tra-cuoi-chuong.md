# Bài kiểm tra cuối Chương 10: Tổng ôn DVA-C02

## 1. Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 65 câu
- Thời gian đề xuất: 130 phút
- Mục tiêu đạt: 75–80% trở lên
- Nội dung: Tổng hợp 4 domain của AWS Certified Developer - Associate DVA-C02

## 2. Ma trận đề

| Domain | Chủ đề | Số câu đề xuất |
|---|---|---:|
| Domain 1 | Development with AWS Services | 21 |
| Domain 2 | Security | 17 |
| Domain 3 | Deployment | 16 |
| Domain 4 | Troubleshooting and Optimization | 11 |
| Tổng |  | 65 |

---

# Phần A. Câu hỏi trắc nghiệm

## Câu 1
Một ứng dụng cần chạy code mà không quản lý server. Service nào phù hợp nhất?

A. EC2  
B. Lambda  
C. RDS  
D. CloudFormation  

## Câu 2
Một Lambda function cần đọc dữ liệu từ DynamoDB. Cách cấp quyền phù hợp nhất là gì?

A. Hard-code access key trong code  
B. Gắn quyền vào Lambda execution role  
C. Dùng root account access key  
D. Tạo IAM user rồi lưu password trong Lambda  

## Câu 3
Một API serverless cần expose Lambda ra internet theo dạng REST API. Service nào nên dùng?

A. API Gateway  
B. SQS  
C. SNS  
D. KMS  

## Câu 4
Browser gọi API Gateway bị lỗi CORS. Cần kiểm tra cấu hình nào?

A. CORS headers/methods  
B. DynamoDB partition key  
C. SQS visibility timeout  
D. KMS key policy  

## Câu 5
Ứng dụng cần giới hạn số request theo từng client. Nên dùng gì trong API Gateway?

A. Usage Plan và API Key  
B. DynamoDB TTL  
C. Lambda Layer  
D. CloudFormation Output  

## Câu 6
DynamoDB cần query dữ liệu theo một thuộc tính không phải partition key chính. Nên dùng gì?

A. Scan toàn bảng  
B. GSI  
C. S3 Lifecycle  
D. SNS Topic  

## Câu 7
DynamoDB cần tự động xóa item sau một thời gian. Nên dùng gì?

A. TTL  
B. DAX  
C. LSI  
D. CloudTrail  

## Câu 8
User cần upload file lớn lên S3. Cơ chế nào phù hợp?

A. Multipart upload  
B. DynamoDB Streams  
C. Lambda Alias  
D. CodeDeploy  

## Câu 9
User cần truy cập tạm thời một file private trong S3. Nên dùng gì?

A. Public bucket  
B. Pre-signed URL  
C. Root access key  
D. Security Group  

## Câu 10
Ứng dụng cần tách API khỏi worker xử lý job lâu. Nên dùng service nào?

A. SQS  
B. KMS  
C. Route 53  
D. CloudFront  

## Câu 11
Message trong SQS bị xử lý thất bại nhiều lần. Nên chuyển message lỗi vào đâu?

A. DLQ  
B. KMS  
C. IAM Group  
D. S3 Versioning  

## Câu 12
Cần đảm bảo thứ tự xử lý message trong queue. Nên chọn loại queue nào?

A. Standard Queue  
B. FIFO Queue  
C. SNS Topic  
D. EventBridge Bus  

## Câu 13
Một event cần gửi đến nhiều queue khác nhau. Pattern nào phù hợp?

A. SNS fanout tới nhiều SQS  
B. Một Lambda gọi trực tiếp từng queue bằng hard-code  
C. Dùng KMS encrypt message  
D. Dùng CloudWatch Alarm  

## Câu 14
Cần trigger Lambda mỗi ngày lúc 1 giờ sáng. Nên dùng gì?

A. EventBridge scheduled rule  
B. S3 versioning  
C. CodeBuild artifact  
D. Cognito Identity Pool  

## Câu 15
Ứng dụng web/mobile cần chức năng user sign-up và sign-in. Nên dùng gì?

A. Cognito User Pool  
B. Cognito Identity Pool  
C. KMS  
D. CodeDeploy  

## Câu 16
User đã login cần lấy temporary AWS credentials để truy cập AWS service. Nên dùng gì?

A. Cognito Identity Pool  
B. Cognito User Pool only  
C. API Gateway Stage  
D. S3 Lifecycle  

## Câu 17
Database password cần lưu an toàn và tự động rotate. Nên dùng gì?

A. Secrets Manager  
B. Parameter Store Standard  
C. CloudWatch Logs  
D. Lambda environment variable plain text  

## Câu 18
Cần mã hóa dữ liệu at rest bằng key do customer quản lý. Nên dùng gì?

A. KMS customer managed key  
B. SNS Topic  
C. SQS Standard Queue  
D. API Gateway Cache  

## Câu 19
Cross-account access nên dùng cơ chế nào?

A. IAM Role và STS AssumeRole  
B. Root user password  
C. Public S3 bucket  
D. Hard-code credentials  

## Câu 20
Nguyên tắc least privilege nghĩa là gì?

A. Cấp quyền tối thiểu cần thiết  
B. Cấp AdministratorAccess cho mọi user  
C. Không cần IAM policy  
D. Chỉ dùng root user  

## Câu 21
Cần deploy serverless app Lambda + API Gateway bằng template. Nên dùng gì?

A. SAM  
B. SQS  
C. Cognito  
D. X-Ray  

## Câu 22
Cần định nghĩa infrastructure bằng code. Nên dùng gì?

A. CloudFormation  
B. CloudWatch Logs  
C. SNS  
D. DynamoDB TTL  

## Câu 23
Cần build source code thành artifact. Nên dùng gì?

A. CodeBuild  
B. CodeDeploy  
C. CodePipeline only  
D. KMS  

## Câu 24
File `buildspec.yml` liên quan trực tiếp đến service nào?

A. CodeBuild  
B. Cognito  
C. S3 Lifecycle  
D. X-Ray  

## Câu 25
Cần tự động hóa source → build → deploy. Nên dùng gì?

A. CodePipeline  
B. Parameter Store  
C. API Key  
D. DAX  

## Câu 26
Cần chuyển 10% traffic sang Lambda version mới rồi tăng dần. Nên dùng gì?

A. CodeDeploy với Lambda alias  
B. S3 Versioning  
C. DynamoDB Scan  
D. IAM Group  

## Câu 27
Cần phát hiện resource bị thay đổi thủ công ngoài template. Nên dùng gì?

A. CloudFormation Drift Detection  
B. CloudWatch Logs  
C. SNS Filtering  
D. SQS Long Polling  

## Câu 28
Cần xem log Lambda. Nên dùng gì?

A. CloudWatch Logs  
B. X-Ray only  
C. KMS  
D. CodeCommit  

## Câu 29
Cần trace request đi qua API Gateway, Lambda và DynamoDB. Nên dùng gì?

A. X-Ray  
B. S3 Lifecycle  
C. IAM Group  
D. Lambda Layer only  

## Câu 30
Cần tạo cảnh báo khi Lambda error tăng cao. Nên dùng gì?

A. CloudWatch Alarm  
B. Cognito User Pool  
C. SQS FIFO  
D. SAM local invoke  

## Câu 31
API Gateway trả lỗi 502 khi tích hợp Lambda proxy. Nguyên nhân có thể là gì?

A. Lambda trả response sai format  
B. S3 bật versioning  
C. DynamoDB có TTL  
D. User dùng MFA  

## Câu 32
Lambda bị AccessDenied khi gọi S3. Cần kiểm tra gì đầu tiên?

A. Lambda execution role policy  
B. API Gateway CORS  
C. CloudFormation Output  
D. Cognito Hosted UI  

## Câu 33
Lambda có cold start ảnh hưởng request quan trọng. Nên dùng gì?

A. Provisioned concurrency  
B. S3 pre-signed URL  
C. DynamoDB Scan  
D. SNS filter policy  

## Câu 34
DynamoDB bị throttling. Giải pháp nào hợp lý?

A. Kiểm tra capacity, hot partition và dùng retry/backoff  
B. Chuyển sang API Key  
C. Tắt IAM  
D. Dùng root user  

## Câu 35
SQS message bị xử lý lại trước khi worker hoàn tất. Cần kiểm tra gì?

A. Visibility Timeout  
B. Lambda Alias  
C. Cognito App Client  
D. S3 ACL  

## Câu 36
Cần giảm tải backend bằng cách cache response API. Nên dùng gì?

A. API Gateway caching  
B. KMS rotation  
C. IAM boundary  
D. CodeDeploy rollback  

## Câu 37
Cần tăng tốc workload đọc nhiều từ DynamoDB. Có thể cân nhắc gì?

A. DAX  
B. SNS  
C. CloudFormation Drift  
D. Cognito Hosted UI  

## Câu 38
Cần lưu config đơn giản dạng secure string. Service nào phù hợp?

A. Systems Manager Parameter Store SecureString  
B. CodePipeline  
C. API Gateway Usage Plan  
D. EventBridge Schema only  

## Câu 39
Cần route event dựa trên nội dung event. Nên dùng gì?

A. EventBridge Rule/Event Pattern  
B. S3 Multipart Upload  
C. IAM Password Policy  
D. Lambda Layer  

## Câu 40
Cần publish message đến nhiều subscriber như email, Lambda hoặc SQS. Nên dùng gì?

A. SNS  
B. SQS only  
C. KMS only  
D. CloudWatch Logs  

## Câu 41
Một Lambda async invocation thất bại nhiều lần. Nên cấu hình gì để lưu event lỗi?

A. DLQ hoặc destination  
B. S3 website hosting  
C. API Gateway Stage Variable  
D. IAM Group  

## Câu 42
Cần kiểm tra thay đổi dự kiến trước khi update CloudFormation stack. Nên dùng gì?

A. Change set  
B. X-Ray Segment  
C. SQS Delay Queue  
D. Cognito Identity Pool  

## Câu 43
API cần xác thực user bằng JWT từ Cognito. Nên dùng gì?

A. API Gateway Cognito Authorizer  
B. API Key only  
C. S3 Versioning  
D. CodeBuild Report  

## Câu 44
Ứng dụng cần tránh lưu secret trong environment variable dạng plain text. Nên dùng gì?

A. Secrets Manager hoặc Parameter Store SecureString  
B. Public GitHub repository  
C. Hard-code vào source code  
D. Gửi qua email  

## Câu 45
Cần phục hồi object S3 bị ghi đè hoặc xóa nhầm. Nên bật gì trước đó?

A. Versioning  
B. SQS FIFO  
C. Lambda Alias  
D. CloudWatch Alarm  

## Câu 46
Cần tự động chuyển object S3 cũ sang storage class rẻ hơn. Nên dùng gì?

A. Lifecycle rule  
B. Cognito User Pool  
C. DynamoDB Streams  
D. X-Ray Trace  

## Câu 47
DynamoDB cần chạy Lambda khi item thay đổi. Nên dùng gì?

A. DynamoDB Streams  
B. S3 Pre-signed URL  
C. CodeBuild  
D. IAM Password Policy  

## Câu 48
Một ứng dụng cần đảm bảo worker xử lý message không bị duplicate side effect. Nên thiết kế worker như thế nào?

A. Idempotent  
B. Không cần xử lý lỗi  
C. Dùng root credentials  
D. Tắt retry  

## Câu 49
Cần deploy app ít rủi ro bằng cách có môi trường cũ và mới song song. Strategy nào phù hợp?

A. Blue/green  
B. All-at-once  
C. Scan  
D. Long polling  

## Câu 50
Cần phát hành phiên bản mới cho một phần nhỏ user trước. Strategy nào phù hợp?

A. Canary  
B. Immutable only  
C. TTL  
D. DAX  

## Câu 51
Lambda cần dùng thư viện chung cho nhiều function. Nên dùng gì?

A. Lambda Layer  
B. S3 Lifecycle  
C. KMS Key Policy only  
D. Cognito Identity Pool  

## Câu 52
Cần lưu biến cấu hình cho Lambda như tên bảng DynamoDB. Có thể dùng gì?

A. Environment variables  
B. SQS Visibility Timeout  
C. CodeDeploy AppSpec only  
D. X-Ray Service Map  

## Câu 53
Đề nói “least operational overhead” cho serverless API. Hướng chọn thường là gì?

A. Dịch vụ managed/serverless như API Gateway + Lambda  
B. Tự quản lý nhiều EC2 thủ công  
C. Dùng root account  
D. Tắt monitoring  

## Câu 54
Đề nói “most secure” khi app cần truy cập AWS service từ EC2. Đáp án nào thường đúng?

A. EC2 instance role  
B. Hard-code access key trong app  
C. Lưu root key trên server  
D. Share credentials qua email  

## Câu 55
Cần kiểm tra log bằng query để tìm lỗi nhanh. Nên dùng gì?

A. CloudWatch Logs Insights  
B. S3 Inventory  
C. IAM Access Analyzer only  
D. SNS Topic  

## Câu 56
Cần phân tích latency trong kiến trúc microservices. Nên dùng gì?

A. X-Ray  
B. SQS DLQ  
C. CloudFormation Output  
D. S3 ACL  

## Câu 57
Một DynamoDB table có traffic khó dự đoán. Capacity mode nào dễ vận hành hơn?

A. On-demand  
B. Provisioned cố định rất thấp  
C. Không dùng capacity mode  
D. S3 Standard  

## Câu 58
Cần kiểm soát quyền đọc secret của Lambda. Nên cấu hình ở đâu?

A. IAM policy của Lambda execution role  
B. API Gateway Usage Plan  
C. SQS FIFO settings  
D. CloudWatch Dashboard  

## Câu 59
Cần giảm số lần polling rỗng từ SQS. Nên dùng gì?

A. Long polling  
B. Short timeout Lambda  
C. S3 Lifecycle  
D. Cognito Hosted UI  

## Câu 60
Cần trì hoãn message trong SQS trước khi worker xử lý. Nên dùng gì?

A. Delay queue hoặc message timer  
B. KMS key rotation  
C. CloudFormation Drift  
D. Lambda Layer  

## Câu 61
Cần lưu lịch sử thay đổi hạ tầng và triển khai lại giống nhau ở nhiều môi trường. Nên dùng gì?

A. Infrastructure as Code  
B. Manual Console only  
C. Root user only  
D. Public bucket  

## Câu 62
Nếu câu hỏi có keyword “programmatic access”, thường liên quan đến gì?

A. AWS CLI / SDK / IAM credentials hoặc role  
B. S3 Lifecycle only  
C. X-Ray only  
D. CloudFront only  

## Câu 63
Nếu câu hỏi có keyword “AccessDenied”, nên nghĩ đầu tiên đến gì?

A. IAM permission  
B. S3 multipart size  
C. API response cache  
D. Lambda memory only  

## Câu 64
Nếu câu hỏi có keyword “fanout”, nên nghĩ tới gì?

A. SNS + SQS  
B. KMS + Secrets Manager  
C. CodeBuild + buildspec  
D. CloudWatch + X-Ray only  

## Câu 65
Nếu câu hỏi có keyword “full table read” trong DynamoDB, hành động nào thường nên tránh?

A. Scan  
B. Query theo partition key  
C. Dùng GSI phù hợp  
D. Thiết kế key tốt  

---

# Phần B. Đáp án

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | A |
| 4 | A |
| 5 | A |
| 6 | B |
| 7 | A |
| 8 | A |
| 9 | B |
| 10 | A |
| 11 | A |
| 12 | B |
| 13 | A |
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
| 36 | A |
| 37 | A |
| 38 | A |
| 39 | A |
| 40 | A |
| 41 | A |
| 42 | A |
| 43 | A |
| 44 | A |
| 45 | A |
| 46 | A |
| 47 | A |
| 48 | A |
| 49 | A |
| 50 | A |
| 51 | A |
| 52 | A |
| 53 | A |
| 54 | A |
| 55 | A |
| 56 | A |
| 57 | A |
| 58 | A |
| 59 | A |
| 60 | A |
| 61 | A |
| 62 | A |
| 63 | A |
| 64 | A |
| 65 | A |

---

# Phần C. Hướng dẫn tự chấm

| Tỷ lệ đúng | Đánh giá |
|---:|---|
| Dưới 60% | Chưa đạt, cần học lại các domain yếu |
| 60–70% | Nắm cơ bản, cần luyện thêm câu tình huống |
| 70–80% | Khá, có thể tiếp tục mock exam |
| Trên 80% | Tốt, gần sẵn sàng thi thật |
| Trên 90% | Rất tốt, giữ phong độ và ôn câu sai |

## Gợi ý review

Sau khi làm xong, hãy ghi lại:

```text
Tổng số câu đúng:
Tỷ lệ đúng:
Domain sai nhiều nhất:
Service sai nhiều nhất:
5 keyword chưa nhớ:
5 câu cần học lại:
```
