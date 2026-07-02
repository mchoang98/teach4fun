# Bài 6. Bảng keyword AWS bắt buộc nhớ

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Nhớ các keyword AWS thường xuất hiện trong đề DVA-C02.
- Gặp keyword là nghĩ ngay đến service phù hợp.
- Biết phân biệt các service dễ nhầm.

## 2. Keyword nhóm Compute và API

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| serverless compute | Lambda |
| run code without managing servers | Lambda |
| function timeout | Lambda timeout |
| cold start | Lambda initialization |
| provisioned concurrency | Giảm cold start |
| stable version for production | Lambda version / alias |
| traffic shifting | Lambda alias / CodeDeploy |
| expose REST API | API Gateway |
| serverless REST API | API Gateway + Lambda |
| rate limiting | API Gateway throttling |
| API quota | Usage Plan |
| API key | Usage Plan |
| browser CORS error | CORS |
| custom auth logic | Lambda Authorizer |
| JWT authentication | Cognito Authorizer |

## 3. Keyword nhóm Data Store

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| NoSQL key-value | DynamoDB |
| single-digit millisecond latency | DynamoDB |
| query by partition key | DynamoDB Query |
| avoid full table read | Query, không phải Scan |
| query by another attribute | GSI |
| item expiration | TTL |
| table change event | DynamoDB Streams |
| read-heavy workload | DAX |
| object storage | S3 |
| private temporary file access | S3 pre-signed URL |
| large file upload | Multipart upload |
| object recovery | S3 Versioning |
| archive old files | S3 Lifecycle |
| relational SQL | RDS |
| database password | Secrets Manager |

## 4. Keyword nhóm Messaging và Event

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| decouple | SQS |
| asynchronous processing | SQS / Lambda |
| async worker | SQS |
| message processed multiple times | Standard SQS |
| strict ordering | FIFO Queue |
| failed messages | DLQ |
| message invisible while processing | Visibility Timeout |
| pub/sub | SNS |
| fanout | SNS + SQS |
| send notification to many subscribers | SNS |
| event bus | EventBridge |
| scheduled event | EventBridge |
| route event by pattern | EventBridge Rule |

## 5. Keyword nhóm Security

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| least privilege | IAM Policy |
| assume role | STS / IAM Role |
| temporary credentials | STS |
| cross-account access | IAM Role |
| application on EC2 access S3 | EC2 instance role |
| Lambda access DynamoDB | Lambda execution role |
| avoid hard-coded credentials | IAM Role / Secrets Manager |
| explicit deny | Deny thắng Allow |
| user sign-up/sign-in | Cognito User Pool |
| temporary AWS credentials for users | Cognito Identity Pool |
| JWT token | Cognito |
| encryption key | KMS |
| customer managed key | KMS CMK |
| encrypt at rest | KMS |
| rotate database password | Secrets Manager |
| secure string | Parameter Store SecureString |

## 6. Keyword nhóm Deployment

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| infrastructure as code | CloudFormation |
| serverless deployment | SAM |
| build artifact | CodeBuild |
| buildspec.yml | CodeBuild |
| automate release pipeline | CodePipeline |
| deploy application | CodeDeploy |
| rollback deployment | CodeDeploy |
| gradual deployment | Canary / Linear |
| separate old and new environment | Blue/green |
| detect manual changes | CloudFormation drift detection |
| preview stack changes | Change set |

## 7. Keyword nhóm Monitoring và Troubleshooting

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| application logs | CloudWatch Logs |
| metrics and alarms | CloudWatch |
| search logs | CloudWatch Logs Insights |
| distributed tracing | X-Ray |
| service map | X-Ray |
| root cause analysis | CloudWatch + X-Ray |
| Lambda timeout | Timeout / memory / code |
| AccessDenied | IAM permission |
| DynamoDB throttling | Capacity / backoff / hot partition |
| API Gateway 502 | Lambda integration error |
| reduce cold start | Provisioned concurrency |
| cache API response | API Gateway caching |

## 8. Service dễ nhầm

### SQS vs SNS vs EventBridge

| Nhu cầu | Chọn |
|---|---|
| Tách hệ thống, queue worker | SQS |
| Gửi một message tới nhiều subscriber | SNS |
| Route event theo rule/pattern | EventBridge |
| Chạy lịch gọi Lambda | EventBridge |
| Fanout tới nhiều queue | SNS + SQS |

### Cognito User Pool vs Identity Pool

| Nhu cầu | Chọn |
|---|---|
| User login | User Pool |
| Nhận JWT token | User Pool |
| User nhận temporary AWS credentials | Identity Pool |

### CloudWatch vs X-Ray

| Nhu cầu | Chọn |
|---|---|
| Xem log | CloudWatch Logs |
| Tạo alarm | CloudWatch Alarms |
| Tìm request chậm qua nhiều service | X-Ray |
| Xem service map | X-Ray |

### CodeBuild vs CodeDeploy vs CodePipeline

| Nhu cầu | Chọn |
|---|---|
| Build/test code | CodeBuild |
| Deploy application | CodeDeploy |
| Tự động hóa toàn bộ flow | CodePipeline |

## 9. Bài tập về nhà

- Học thuộc bảng keyword theo nhóm.
- Tự tạo flashcard Anh → Việt → Service.
- Mỗi ngày ôn 30 keyword.
- Khi làm đề sai, thêm keyword mới vào bảng cá nhân.
