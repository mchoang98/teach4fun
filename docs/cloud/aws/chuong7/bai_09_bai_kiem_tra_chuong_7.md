# Bài kiểm tra Chương 7. Security nâng cao cho Developer

## Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 35 câu
- Thời gian đề xuất: 45 phút
- Mục tiêu: Đánh giá khả năng nhận diện service security phù hợp trong tình huống DVA-C02

## Thang đánh giá

| Điểm | Đánh giá |
|---:|---|
| Dưới 60% | Chưa đạt, cần học lại chương |
| 60% - 70% | Nắm cơ bản, cần luyện thêm câu tình huống |
| 70% - 80% | Khá, có thể học chương tiếp theo |
| Trên 80% | Tốt |
| Trên 90% | Rất tốt, sẵn sàng phần Security |

---

# Câu hỏi trắc nghiệm

## Câu 1
Một web app cần chức năng đăng ký và đăng nhập người dùng. Dịch vụ AWS nào phù hợp nhất?

A. AWS KMS  
B. Amazon Cognito User Pool  
C. Amazon SQS  
D. AWS CodeBuild  

## Câu 2
Keyword “user sign-in” trong đề thi thường gợi ý service nào?

A. Cognito User Pool  
B. DynamoDB Streams  
C. EventBridge  
D. CloudFormation  

## Câu 3
Một mobile app cần upload file trực tiếp lên S3 nhưng không được hard-code access key trong app. Giải pháp phù hợp nhất là gì?

A. Nhúng access key vào app  
B. Dùng Cognito Identity Pool cấp temporary credentials  
C. Dùng root account credential  
D. Public toàn bộ S3 bucket  

## Câu 4
Cognito Identity Pool chủ yếu dùng để làm gì?

A. Lưu username và password  
B. Cấp temporary AWS credentials cho user  
C. Build source code  
D. Gửi email marketing  

## Câu 5
API Gateway cần xác thực JWT token từ Cognito User Pool trước khi gọi Lambda. Nên dùng gì?

A. API Key  
B. Cognito Authorizer  
C. SQS Visibility Timeout  
D. CloudWatch Dashboard  

## Câu 6
Khi cần logic xác thực tùy chỉnh cho API Gateway, nên dùng gì?

A. Lambda Authorizer  
B. S3 Lifecycle  
C. DynamoDB TTL  
D. CodeBuild  

## Câu 7
API Key trong API Gateway phù hợp nhất cho mục đích nào?

A. Đăng nhập người dùng cuối  
B. Quản lý quota/usage plan cơ bản  
C. Mã hóa dữ liệu  
D. Rotate database password  

## Câu 8
Dịch vụ nào dùng để quản lý encryption key trên AWS?

A. AWS KMS  
B. Amazon SNS  
C. Amazon SQS  
D. AWS X-Ray  

## Câu 9
Keyword “encrypt at rest” thường gợi ý dịch vụ nào?

A. KMS  
B. CodePipeline  
C. CloudWatch Logs  
D. API Gateway Stage  

## Câu 10
Customer managed key trong KMS có ưu điểm gì?

A. Không thể kiểm soát policy  
B. Cho phép khách hàng kiểm soát key policy và rotation  
C. Chỉ dùng cho CloudWatch  
D. Không liên quan đến encryption  

## Câu 11
Lambda cần đọc dữ liệu đã mã hóa bằng KMS. Ngoài quyền đọc service nguồn, Lambda thường cần quyền nào?

A. kms:Decrypt  
B. sqs:SendMessage  
C. codebuild:StartBuild  
D. cloudformation:DeleteStack  

## Câu 12
Dịch vụ nào phù hợp nhất để lưu database password và hỗ trợ rotation?

A. Secrets Manager  
B. CloudWatch Metrics  
C. API Gateway Cache  
D. Elastic Beanstalk  

## Câu 13
Keyword “rotate database password” thường nghĩ tới service nào?

A. Secrets Manager  
B. SNS  
C. Lambda Layer  
D. X-Ray  

## Câu 14
Lambda cần đọc secret trong Secrets Manager. Quyền IAM nào thường cần thiết?

A. secretsmanager:GetSecretValue  
B. dynamodb:Scan  
C. s3:PutBucketPolicy  
D. events:PutRule  

## Câu 15
Điều nào sau đây là best practice?

A. Hard-code database password trong source code  
B. Lưu secret trong Git public repository  
C. Lưu secret trong Secrets Manager và cấp quyền bằng IAM Role  
D. Dùng root account để chạy app production  

## Câu 16
Parameter Store thuộc dịch vụ nào?

A. AWS Systems Manager  
B. Amazon S3  
C. Amazon RDS  
D. AWS CodeDeploy  

## Câu 17
Parameter Store phù hợp nhất để lưu gì?

A. Config value và parameter đơn giản  
B. Video livestream  
C. Source code repository  
D. Full-text search index  

## Câu 18
SecureString trong Parameter Store dùng để làm gì?

A. Lưu giá trị có mã hóa  
B. Tạo SQS FIFO queue  
C. Tạo Lambda alias  
D. Gửi notification  

## Câu 19
Nếu yêu cầu bắt buộc automatic rotation cho database password, nên chọn gì?

A. Secrets Manager  
B. Parameter Store String  
C. CloudWatch Alarm  
D. S3 Multipart Upload  

## Câu 20
Nguyên tắc least privilege nghĩa là gì?

A. Cấp quyền cao nhất để tránh lỗi  
B. Chỉ cấp quyền tối thiểu cần thiết  
C. Luôn dùng root account  
D. Public tất cả resource  

## Câu 21
Ứng dụng chạy trên EC2 cần đọc file từ S3. Cách an toàn nhất là gì?

A. Lưu access key trong file .env trên EC2  
B. Gắn IAM Role phù hợp cho EC2 instance  
C. Dùng root access key  
D. Public toàn bộ bucket  

## Câu 22
Lambda cần ghi vào DynamoDB. Cách cấp quyền đúng nhất là gì?

A. Gắn Lambda execution role có quyền DynamoDB cần thiết  
B. Hard-code credential trong Lambda  
C. Dùng tài khoản root  
D. Tắt IAM permission  

## Câu 23
Dữ liệu truyền qua mạng cần được bảo vệ bằng gì?

A. Encryption in transit, ví dụ HTTPS/TLS  
B. SQS Delay Queue  
C. DynamoDB TTL  
D. CodeBuild Artifact  

## Câu 24
Dữ liệu lưu trong S3 cần mã hóa bằng key khách hàng tự quản lý. Nên dùng gì?

A. SSE-KMS với customer managed key  
B. API Gateway API Key  
C. CloudWatch Logs Insights  
D. EventBridge Schedule  

## Câu 25
Câu nào sau đây thường là đáp án sai trong đề security AWS?

A. Use IAM Role  
B. Use least privilege  
C. Store access key directly in application code  
D. Use Secrets Manager  

## Câu 26
Cognito User Pool trả về token loại nào thường dùng cho authentication?

A. JWT token  
B. SSH key  
C. Build artifact  
D. SQS message ID  

## Câu 27
Nếu API chỉ dành cho AWS principal đã được IAM cấp quyền, có thể dùng loại authorization nào?

A. IAM Authorization  
B. S3 Lifecycle  
C. DynamoDB GSI  
D. CloudFormation Output  

## Câu 28
Key policy liên quan đến dịch vụ nào?

A. KMS  
B. SQS  
C. SNS  
D. CodePipeline  

## Câu 29
Một developer lỡ commit access key lên GitHub. Hành động phù hợp nhất là gì?

A. Giữ nguyên nếu app vẫn chạy  
B. Rotate/revoke key ngay và chuyển sang IAM Role/Secrets Manager  
C. Public repository để dễ kiểm tra  
D. Tăng timeout Lambda  

## Câu 30
App cần lưu API endpoint, APP_ENV và feature flag. Dịch vụ nào phù hợp?

A. Parameter Store  
B. KMS key policy  
C. SQS DLQ  
D. X-Ray segment  

## Câu 31
Secrets Manager khác Parameter Store nổi bật ở điểm nào?

A. Hỗ trợ secret rotation tốt hơn  
B. Dùng để chạy container  
C. Dùng để trace request  
D. Dùng để tạo API REST  

## Câu 32
Một Lambda bị AccessDenied khi đọc secret. Nguyên nhân khả năng cao là gì?

A. Lambda thiếu quyền secretsmanager:GetSecretValue  
B. Lambda thiếu memory để chạy CPU  
C. API Gateway chưa bật cache  
D. DynamoDB thiếu sort key  

## Câu 33
Best practice cho root account là gì?

A. Dùng hằng ngày để deploy app  
B. Chia sẻ cho toàn team  
C. Bật MFA và hạn chế sử dụng  
D. Lưu password trong code  

## Câu 34
Một app cần mã hóa dữ liệu và kiểm soát ai được decrypt. Service trọng tâm là gì?

A. KMS  
B. SNS  
C. SQS  
D. CodeCommit  

## Câu 35
Một câu hỏi đề thi có keyword “avoid hard-coded credentials”. Đáp án có khả năng đúng nhất là gì?

A. IAM Role hoặc Secrets Manager  
B. Root access key trong source code  
C. Public S3 bucket  
D. Disable encryption  

---

# Đáp án

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | A |
| 7 | B |
| 8 | A |
| 9 | A |
| 10 | B |
| 11 | A |
| 12 | A |
| 13 | A |
| 14 | A |
| 15 | C |
| 16 | A |
| 17 | A |
| 18 | A |
| 19 | A |
| 20 | B |
| 21 | B |
| 22 | A |
| 23 | A |
| 24 | A |
| 25 | C |
| 26 | A |
| 27 | A |
| 28 | A |
| 29 | B |
| 30 | A |
| 31 | A |
| 32 | A |
| 33 | C |
| 34 | A |
| 35 | A |

---

# Gợi ý review sau khi làm bài

Nếu sai nhiều câu về Cognito:

- Ôn lại User Pool vs Identity Pool.
- Ghi nhớ User Pool = login user.
- Ghi nhớ Identity Pool = temporary AWS credentials.

Nếu sai nhiều câu về KMS:

- Ôn lại encryption at rest.
- Ôn customer managed key.
- Ôn key policy và quyền kms:Decrypt.

Nếu sai nhiều câu về Secrets Manager / Parameter Store:

- Secrets Manager = secret quan trọng, rotation.
- Parameter Store = config/parameter đơn giản, SecureString.

Nếu sai nhiều câu về best practices:

- Không hard-code credentials.
- Dùng IAM Role.
- Cấp least privilege.
- Bật MFA cho root account.
- Mã hóa dữ liệu nhạy cảm.
