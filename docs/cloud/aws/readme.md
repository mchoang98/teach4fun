# PHỤ LỤC BÀI GIẢNG

# Khóa học AWS Certified Developer – Associate DVA-C02

---

# MỤC LỤC TỔNG QUÁT

## Chương 1. AWS Foundation cho Developer

### Bài 1. Tổng quan về AWS và Cloud Computing

* AWS là gì?
* Vì sao developer cần học AWS?
* Cloud computing và mô hình triển khai ứng dụng hiện đại

### Bài 2. AWS Global Infrastructure

* Region
* Availability Zone
* Data Center
* Cách chọn Region khi triển khai ứng dụng

### Bài 3. AWS Account và Root User

* AWS Account
* Root user
* MFA
* Nguyên tắc bảo vệ tài khoản AWS

### Bài 4. IAM cơ bản cho Developer

* IAM User
* IAM Group
* IAM Role
* IAM Policy
* Quyền truy cập cơ bản

### Bài 5. AWS CLI và AWS SDK

* AWS CLI là gì?
* AWS SDK là gì?
* Programmatic access
* Access key và secret key
* Cấu hình AWS profile local

### Bài 6. Shared Responsibility Model

* AWS chịu trách nhiệm phần nào?
* Người dùng chịu trách nhiệm phần nào?
* Các tình huống thường gặp trong đề thi

### Bài kiểm tra Chương 1

* Hình thức: Trắc nghiệm
* Số câu: 20 câu
* Nội dung đánh giá:

  * AWS account
  * Region và Availability Zone
  * Root user và MFA
  * IAM cơ bản
  * AWS CLI / SDK
  * Shared Responsibility Model

---

## Chương 2. IAM và Security nền tảng

### Bài 1. IAM User, Group, Role và Policy

* Phân biệt user, group, role, policy
* Khi nào dùng user?
* Khi nào dùng role?
* Khi nào dùng policy?

### Bài 2. IAM Policy JSON

* Cấu trúc policy
* Effect
* Action
* Resource
* Condition
* Allow và Deny

### Bài 3. Least Privilege

* Nguyên tắc cấp quyền tối thiểu
* Vì sao không nên cấp quyền quá rộng?
* Các lỗi thường gặp khi cấp quyền

### Bài 4. IAM Role cho Lambda và EC2

* Lambda execution role
* EC2 instance role
* Tránh hard-code credentials trong code

### Bài 5. STS và AssumeRole

* Temporary credentials
* AssumeRole
* Cross-account access
* Tình huống thường gặp trong đề thi

### Bài 6. IAM Policy Evaluation

* Explicit Deny
* Allow
* Default Deny
* Thứ tự đánh giá quyền

### Bài kiểm tra Chương 2

* Hình thức: Trắc nghiệm
* Số câu: 25 câu
* Nội dung đánh giá:

  * IAM user, role, policy
  * Least privilege
  * STS / AssumeRole
  * Cross-account access
  * Lambda execution role
  * EC2 instance role
  * Explicit Deny

---

## Chương 3. Compute cho Developer: Lambda, EC2, Elastic Beanstalk

### Bài 1. Tổng quan Compute trên AWS

* Compute là gì?
* So sánh Lambda, EC2, Elastic Beanstalk
* Developer cần học Compute ở mức nào?

### Bài 2. AWS Lambda cơ bản

* Lambda function
* Runtime
* Handler
* Event object
* Context object

### Bài 3. Lambda Configuration

* Timeout
* Memory
* Environment variables
* Execution role
* CloudWatch Logs

### Bài 4. Lambda Version và Alias

* Version
* Alias
* Production version
* Traffic shifting

### Bài 5. Lambda Concurrency

* Concurrency
* Reserved concurrency
* Provisioned concurrency
* Cold start

### Bài 6. Lambda Invocation và Retry

* Synchronous invocation
* Asynchronous invocation
* Retry behavior
* Dead-letter queue

### Bài 7. EC2 cơ bản cho Developer

* Instance
* AMI
* Security Group
* User Data
* IAM instance profile

### Bài 8. Elastic Beanstalk

* Application
* Environment
* Platform
* Deployment policy
* Rolling deployment
* Immutable deployment

### Bài kiểm tra Chương 3

* Hình thức: Trắc nghiệm
* Số câu: 30 câu
* Nội dung đánh giá:

  * Lambda function
  * Runtime, handler, event, context
  * Timeout, memory, environment variables
  * Execution role
  * Version và alias
  * Concurrency
  * Cold start
  * EC2 cơ bản
  * Elastic Beanstalk

---

## Chương 4. API Gateway và Serverless API

### Bài 1. Tổng quan API Gateway

* API Gateway là gì?
* Khi nào dùng API Gateway?
* API Gateway kết hợp Lambda như thế nào?

### Bài 2. REST API và HTTP API

* REST API
* HTTP API
* Resource
* Method
* Integration

### Bài 3. Lambda Proxy Integration

* Proxy integration
* Request event
* Response format
* Lỗi thường gặp khi tích hợp Lambda

### Bài 4. Stage và Deployment

* Stage
* Stage variables
* Dev / Staging / Production
* Deploy API

### Bài 5. CORS trong API Gateway

* CORS là gì?
* Vì sao browser bị lỗi CORS?
* Cách bật CORS cho API

### Bài 6. API Key, Usage Plan và Throttling

* API Key
* Usage Plan
* Quota
* Rate limit
* 429 Too Many Requests

### Bài 7. Authentication cho API Gateway

* IAM Authorization
* Lambda Authorizer
* Cognito Authorizer
* Khi nào chọn loại authorizer nào?

### Bài 8. Debug lỗi API Gateway

* Lỗi 4xx
* Lỗi 5xx
* Lỗi 502
* Access log
* CloudWatch Logs

### Bài kiểm tra Chương 4

* Hình thức: Trắc nghiệm
* Số câu: 30 câu
* Nội dung đánh giá:

  * API Gateway
  * REST API / HTTP API
  * Lambda proxy integration
  * Stage / deployment
  * CORS
  * API Key / Usage Plan
  * Throttling
  * Cognito Authorizer
  * Lambda Authorizer
  * Lỗi 4xx / 5xx

---

## Chương 5. Data Store cho Developer: DynamoDB, S3, RDS

### Bài 1. Tổng quan Data Store trên AWS

* Data store là gì?
* Khi nào dùng DynamoDB?
* Khi nào dùng S3?
* Khi nào dùng RDS?

### Bài 2. DynamoDB cơ bản

* Table
* Item
* Attribute
* Partition key
* Sort key

### Bài 3. Query và Scan trong DynamoDB

* Query
* Scan
* Vì sao nên tránh Scan?
* Tình huống đề thi thường gặp

### Bài 4. Index trong DynamoDB

* GSI
* LSI
* Query theo field khác
* Thiết kế key cơ bản

### Bài 5. Capacity và Performance trong DynamoDB

* On-demand
* Provisioned
* RCU / WCU
* Throttling
* Hot partition

### Bài 6. DynamoDB Advanced Features

* Conditional write
* Atomic counter
* TTL
* DynamoDB Streams
* Transactions
* DAX

### Bài 7. Amazon S3 cơ bản

* Bucket
* Object
* Storage class
* Versioning
* Lifecycle

### Bài 8. S3 Security và Upload File

* Bucket policy
* ACL cơ bản
* Pre-signed URL
* Multipart upload
* Encryption

### Bài 9. RDS cơ bản cho Developer

* Relational database
* Connection string
* Secrets Manager
* Multi-AZ
* Read replica
* Connection pooling cơ bản

### Bài kiểm tra Chương 5

* Hình thức: Trắc nghiệm
* Số câu: 35 câu
* Nội dung đánh giá:

  * DynamoDB table, item, key
  * Query và Scan
  * GSI / LSI
  * RCU / WCU
  * Throttling
  * TTL
  * DynamoDB Streams
  * S3 pre-signed URL
  * Multipart upload
  * Versioning
  * Lifecycle
  * RDS cơ bản

---

## Chương 6. Messaging và Event-driven Architecture

### Bài 1. Tổng quan Messaging trên AWS

* Vì sao cần messaging?
* Sync vs Async processing
* Decoupling application components

### Bài 2. Amazon SQS cơ bản

* Standard Queue
* FIFO Queue
* Message retention
* Delay queue
* Long polling

### Bài 3. Visibility Timeout và Retry trong SQS

* Visibility timeout
* Retry
* Message bị xử lý nhiều lần
* Idempotency cơ bản

### Bài 4. Dead-letter Queue

* DLQ là gì?
* Khi nào message đi vào DLQ?
* Cách debug message lỗi

### Bài 5. SQS với Lambda

* Lambda event source mapping
* Batch size
* Partial batch failure
* Worker Lambda

### Bài 6. Amazon SNS

* Topic
* Subscriber
* Pub/Sub
* Fanout
* Message filtering

### Bài 7. SNS kết hợp SQS

* Fanout pattern
* Một event gửi đến nhiều queue
* Tình huống đề thi thường gặp

### Bài 8. Amazon EventBridge

* Event bus
* Rule
* Event pattern
* Scheduled rule
* Event-driven design

### Bài kiểm tra Chương 6

* Hình thức: Trắc nghiệm
* Số câu: 30 câu
* Nội dung đánh giá:

  * SQS Standard / FIFO
  * Visibility Timeout
  * Retry
  * DLQ
  * Lambda consume SQS
  * SNS Topic
  * Pub/Sub
  * Fanout
  * EventBridge Rule
  * Scheduled event

---

## Chương 7. Security nâng cao cho Developer

### Bài 1. Tổng quan Security nâng cao

* Authentication
* Authorization
* Encryption
* Secret management

### Bài 2. Amazon Cognito User Pool

* User sign-up
* User sign-in
* JWT token
* App client
* Hosted UI

### Bài 3. Cognito Identity Pool

* Temporary AWS credentials
* Identity Pool
* Khi nào dùng Identity Pool?

### Bài 4. API Gateway với Cognito Authorizer

* Bảo vệ API bằng Cognito
* JWT validation
* User-based access

### Bài 5. AWS KMS

* AWS managed key
* Customer managed key
* Key policy
* Envelope encryption
* Key rotation

### Bài 6. Secrets Manager

* Secret
* Database password
* Secret rotation
* Lambda đọc secret an toàn

### Bài 7. Systems Manager Parameter Store

* Parameter
* SecureString
* Config storage
* So sánh Parameter Store và Secrets Manager

### Bài 8. Security Best Practices cho Developer

* Không hard-code secret
* Dùng IAM Role
* Encrypt at rest
* Encrypt in transit
* Least privilege
* Secure environment variables

### Bài kiểm tra Chương 7

* Hình thức: Trắc nghiệm
* Số câu: 35 câu
* Nội dung đánh giá:

  * Cognito User Pool
  * Cognito Identity Pool
  * JWT token
  * API Gateway Authorizer
  * KMS
  * Customer managed key
  * Secrets Manager
  * Secret rotation
  * Parameter Store
  * SecureString
  * Security best practices

---

## Chương 8. Deployment, CI/CD và Infrastructure as Code

### Bài 1. Tổng quan Deployment trên AWS

* Deployment là gì?
* Artifact là gì?
* CI/CD là gì?
* Vì sao developer cần hiểu deployment?

### Bài 2. CloudFormation cơ bản

* Template
* Stack
* Resource
* Parameter
* Output

### Bài 3. CloudFormation nâng cao

* Change set
* Drift detection
* Rollback
* Manual change detection

### Bài 4. AWS SAM

* Serverless template
* sam build
* sam deploy
* Local invoke
* Lambda + API Gateway deployment

### Bài 5. CodeBuild

* Build project
* buildspec.yml
* Artifact
* Environment
* Logs

### Bài 6. CodePipeline

* Source stage
* Build stage
* Deploy stage
* Pipeline automation

### Bài 7. CodeDeploy

* Deployment group
* AppSpec
* Rollback
* Lambda deployment

### Bài 8. Deployment Strategies

* All-at-once
* Rolling
* Immutable
* Blue/green
* Canary
* Linear

### Bài 9. Deploy Lambda an toàn

* Lambda version
* Lambda alias
* Traffic shifting
* CodeDeploy canary deployment

### Bài kiểm tra Chương 8

* Hình thức: Trắc nghiệm
* Số câu: 35 câu
* Nội dung đánh giá:

  * CloudFormation
  * Stack / Template / Resource
  * Change set
  * Drift detection
  * SAM
  * CodeBuild
  * buildspec.yml
  * CodePipeline
  * CodeDeploy
  * Blue/green
  * Canary
  * Lambda alias

---

## Chương 9. Monitoring, Troubleshooting và Optimization

### Bài 1. Tổng quan Monitoring và Troubleshooting

* Vì sao cần monitoring?
* Log, metric, alarm, trace khác nhau thế nào?
* Quy trình tìm lỗi cơ bản

### Bài 2. CloudWatch Logs

* Log group
* Log stream
* Lambda logs
* API Gateway logs

### Bài 3. CloudWatch Metrics và Alarms

* Metrics
* Alarms
* Dashboards
* Custom metrics

### Bài 4. CloudWatch Logs Insights

* Search logs
* Query logs
* Tìm lỗi nhanh trong production

### Bài 5. AWS X-Ray

* Trace
* Segment
* Subsegment
* Service map
* Distributed tracing

### Bài 6. Troubleshooting Lambda

* Timeout
* Memory
* Permission error
* Cold start
* Retry
* DLQ

### Bài 7. Troubleshooting API Gateway

* 4xx error
* 5xx error
* 502 Bad Gateway
* Integration error
* Access log

### Bài 8. Troubleshooting DynamoDB và SQS

* DynamoDB throttling
* Hot partition
* Retry/backoff
* SQS retry loop
* Message vào DLQ

### Bài 9. Optimization cho Developer

* Lambda memory tuning
* Provisioned concurrency
* DynamoDB on-demand vs provisioned
* DAX
* API Gateway caching
* S3 lifecycle
* Batch processing

### Bài kiểm tra Chương 9

* Hình thức: Trắc nghiệm
* Số câu: 35 câu
* Nội dung đánh giá:

  * CloudWatch Logs
  * CloudWatch Metrics
  * CloudWatch Alarms
  * Logs Insights
  * X-Ray
  * Lambda timeout
  * API Gateway 502
  * DynamoDB throttling
  * SQS DLQ
  * Retry / backoff
  * Performance optimization

---

## Chương 10. Tổng ôn và luyện đề DVA-C02

### Bài 1. Tổng ôn Domain 1: Development with AWS Services

* Lambda
* API Gateway
* DynamoDB
* S3
* SQS
* SNS
* EventBridge
* AWS SDK

### Bài 2. Tổng ôn Domain 2: Security

* IAM
* STS
* Cognito
* KMS
* Secrets Manager
* Parameter Store
* Authorizer
* Encryption

### Bài 3. Tổng ôn Domain 3: Deployment

* SAM
* CloudFormation
* CodeBuild
* CodePipeline
* CodeDeploy
* Elastic Beanstalk
* Deployment strategy

### Bài 4. Tổng ôn Domain 4: Troubleshooting and Optimization

* CloudWatch
* X-Ray
* Lambda troubleshooting
* API Gateway troubleshooting
* DynamoDB throttling
* SQS DLQ
* Cost/performance optimization

### Bài 5. Kỹ năng đọc đề tiếng Anh

* Nhận diện keyword
* Dịch câu hỏi theo ý chính
* Loại đáp án sai
* Tránh bẫy từ khóa

### Bài 6. Bảng keyword AWS bắt buộc nhớ

* Decouple → SQS
* Fanout → SNS + SQS
* Event bus → EventBridge
* Serverless compute → Lambda
* Expose REST API → API Gateway
* Least privilege → IAM Policy
* Hard-coded credentials → Secrets Manager / IAM Role
* Encrypt at rest → KMS
* Distributed tracing → X-Ray

### Bài 7. Luyện đề theo từng domain

* Mini test Domain 1
* Mini test Domain 2
* Mini test Domain 3
* Mini test Domain 4

### Bài 8. Full Mock Exam

* Làm đề 65 câu
* Canh thời gian như thi thật
* Ghi lại câu sai
* Phân tích nguyên nhân sai

### Bài 9. Chiến thuật trước ngày thi

* Ôn keyword
* Ôn service dễ nhầm
* Ôn câu sai
* Không học lan man
* Giữ tâm lý ổn định

### Bài kiểm tra Chương 10

* Hình thức: Trắc nghiệm tổng hợp
* Số câu: 65 câu
* Nội dung đánh giá:

  * Domain 1: Development with AWS Services
  * Domain 2: Security
  * Domain 3: Deployment
  * Domain 4: Troubleshooting and Optimization
  * Kỹ năng phân tích tình huống đề thi
  * Kỹ năng nhận diện keyword tiếng Anh

---

# PHỤ LỤC MINI PROJECT XUYÊN SUỐT KHÓA HỌC

## Project: Serverless Booking API

### Giai đoạn 1. API cơ bản

* Tạo API health check
* Tạo API tạo booking
* Lưu booking vào DynamoDB

### Giai đoạn 2. Query dữ liệu

* Lấy danh sách booking theo user
* Thêm GSI để query theo status
* Thêm TTL cho booking tạm

### Giai đoạn 3. Async Processing

* Đẩy booking event vào SQS
* Worker Lambda xử lý booking
* Message lỗi đi vào DLQ

### Giai đoạn 4. Notification

* Gửi notification bằng SNS
* Tạo EventBridge scheduled job

### Giai đoạn 5. File Upload

* Upload ảnh booking bằng S3 pre-signed URL
* Bật S3 encryption
* Cấu hình lifecycle

### Giai đoạn 6. Authentication

* Thêm Cognito login
* Bảo vệ API bằng Cognito Authorizer

### Giai đoạn 7. Secret và Encryption

* Lưu secret bằng Secrets Manager
* Lambda đọc secret bằng IAM Role
* Dùng KMS mã hóa dữ liệu

### Giai đoạn 8. Deployment

* Deploy bằng SAM
* Tạo CI/CD pipeline
* Thêm canary deployment

### Giai đoạn 9. Monitoring và Debug

* Bật CloudWatch Logs
* Bật X-Ray
* Tạo alarm khi Lambda error
* Debug lỗi cố ý tạo ra

---

# PHỤ LỤC BÀI KIỂM TRA CUỐI CHƯƠNG

## Cấu trúc bài kiểm tra mỗi chương

Mỗi bài kiểm tra cuối chương gồm:

1. Câu hỏi lý thuyết cơ bản
2. Câu hỏi nhận diện keyword tiếng Anh
3. Câu hỏi tình huống thực tế
4. Câu hỏi phân biệt service dễ nhầm
5. Câu hỏi chọn giải pháp tốt nhất theo AWS best practices

## Số câu đề xuất

| Chương    | Chủ đề                         | Số câu |
| --------- | ------------------------------ | -----: |
| Chương 1  | AWS Foundation                 |     20 |
| Chương 2  | IAM và Security nền tảng       |     25 |
| Chương 3  | Lambda, EC2, Elastic Beanstalk |     30 |
| Chương 4  | API Gateway và Serverless API  |     30 |
| Chương 5  | DynamoDB, S3, RDS              |     35 |
| Chương 6  | SQS, SNS, EventBridge          |     30 |
| Chương 7  | Security nâng cao              |     35 |
| Chương 8  | Deployment và CI/CD            |     35 |
| Chương 9  | Monitoring và Troubleshooting  |     35 |
| Chương 10 | Tổng ôn DVA-C02                |     65 |

## Thang đánh giá

| Mức điểm  | Đánh giá                                  |
| --------- | ----------------------------------------- |
| Dưới 60%  | Chưa đạt, cần học lại chương              |
| 60% – 70% | Nắm cơ bản, cần luyện thêm câu tình huống |
| 70% – 80% | Khá, có thể chuyển chương tiếp theo       |
| Trên 80%  | Tốt, đạt mức sẵn sàng cho phần này        |
| Trên 90%  | Rất tốt, có thể dùng để ôn thi thật       |

---

# PHỤ LỤC KEYWORD ÔN THI NHANH

| Keyword trong đề              | Nên nghĩ tới                |
| ----------------------------- | --------------------------- |
| Serverless compute            | Lambda                      |
| Expose REST API               | API Gateway                 |
| Decouple                      | SQS                         |
| Asynchronous processing       | SQS / Lambda                |
| Fanout                        | SNS + SQS                   |
| Pub/Sub                       | SNS                         |
| Event bus                     | EventBridge                 |
| Scheduled event               | EventBridge                 |
| User sign-in                  | Cognito User Pool           |
| Temporary AWS credentials     | STS / Cognito Identity Pool |
| Least privilege               | IAM Policy                  |
| Assume role                   | STS / IAM Role              |
| Hard-coded credentials        | Secrets Manager / IAM Role  |
| Encrypt at rest               | KMS                         |
| Rotate database password      | Secrets Manager             |
| NoSQL key-value               | DynamoDB                    |
| Query by non-key attribute    | GSI                         |
| Full table read               | Scan                        |
| Item expiration               | TTL                         |
| Table change event            | DynamoDB Streams            |
| Private file temporary access | S3 pre-signed URL           |
| Large file upload             | S3 multipart upload         |
| Application logs              | CloudWatch Logs             |
| Metrics and alarms            | CloudWatch                  |
| Distributed tracing           | X-Ray                       |
| Build artifact                | CodeBuild                   |
| Deployment pipeline           | CodePipeline                |
| Serverless deployment         | SAM                         |
| Infrastructure as Code        | CloudFormation              |
| Traffic shifting              | CodeDeploy / Lambda Alias   |
| Failed messages               | DLQ                         |
| Throttling                    | Retry / Backoff / Capacity  |
| AccessDenied                  | IAM Permission              |

---

# KẾT LUẬN PHỤ LỤC

Phụ lục này chia khóa học AWS Certified Developer – Associate DVA-C02 thành 10 chương chính.

Mỗi chương gồm:

* Các bài học nhỏ theo từng chủ đề
* Nội dung trọng tâm cần học
* Một bài kiểm tra trắc nghiệm cuối chương
* Định hướng đánh giá năng lực học viên

Mục tiêu cuối cùng là giúp học viên:

* Hiểu đúng service AWS
* Làm được lab thực tế
* Nhận diện keyword tiếng Anh trong đề thi
* Giải được câu hỏi tình huống
* Đạt mức sẵn sàng thi chứng chỉ AWS Developer Associate
