# Bài 1. Tổng ôn Domain 1: Development with AWS Services

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu trọng tâm Domain 1 trong đề thi DVA-C02.
- Nhớ các service quan trọng dành cho developer.
- Biết nhận diện tình huống nên dùng Lambda, API Gateway, DynamoDB, S3, SQS, SNS, EventBridge.
- Biết phân tích câu hỏi dạng phát triển ứng dụng trên AWS.

## 2. Domain 1 gồm những gì?

Domain 1 tập trung vào việc phát triển ứng dụng chạy trên AWS.

Các nội dung thường gặp:

- Viết code dùng AWS SDK.
- Xây dựng Lambda function.
- Tích hợp Lambda với API Gateway.
- Lưu dữ liệu với DynamoDB, S3, RDS.
- Xử lý event-driven architecture.
- Tách hệ thống bằng SQS.
- Gửi thông báo bằng SNS.
- Điều phối event bằng EventBridge.

## 3. Dịch vụ cần nắm chắc

### Lambda

Lambda dùng để chạy code mà không cần quản lý server.

Cần nhớ:

- Runtime
- Handler
- Event object
- Context object
- Timeout
- Memory
- Environment variables
- Execution role
- Version
- Alias
- Concurrency
- Retry
- DLQ

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| serverless compute | Lambda |
| run code without managing servers | Lambda |
| function timeout | Lambda timeout |
| cold start | Lambda initialization |
| stable production version | Lambda version / alias |
| traffic shifting | Lambda alias / CodeDeploy |

### API Gateway

API Gateway dùng để expose Lambda thành REST API hoặc HTTP API.

Cần nhớ:

- REST API
- HTTP API
- Resource
- Method
- Integration
- Lambda proxy integration
- Stage
- CORS
- Throttling
- API Key
- Usage Plan
- Authorizer

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| expose REST API | API Gateway |
| serverless API | API Gateway + Lambda |
| rate limit | Throttling |
| quota per client | Usage Plan |
| browser CORS error | CORS |
| authenticate API users | Cognito Authorizer |

### DynamoDB

DynamoDB là NoSQL database có latency thấp, thường dùng với serverless app.

Cần nhớ:

- Partition key
- Sort key
- Query
- Scan
- GSI
- LSI
- On-demand
- Provisioned
- RCU/WCU
- TTL
- Streams
- Transactions
- DAX

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| NoSQL key-value | DynamoDB |
| single-digit millisecond latency | DynamoDB |
| query by partition key | Query |
| avoid full table read | Query, không phải Scan |
| query by another attribute | GSI |
| item expiration | TTL |
| table change event | DynamoDB Streams |

### S3

S3 dùng để lưu object như file, ảnh, tài liệu, backup.

Cần nhớ:

- Bucket
- Object
- Versioning
- Lifecycle
- Pre-signed URL
- Multipart upload
- Encryption
- Bucket policy

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| object storage | S3 |
| temporary file access | Pre-signed URL |
| large file upload | Multipart upload |
| recover deleted object | Versioning |
| move old files cheaper | Lifecycle |

### SQS

SQS dùng để tách hệ thống và xử lý bất đồng bộ.

Cần nhớ:

- Standard Queue
- FIFO Queue
- Visibility Timeout
- DLQ
- Long polling
- Delay queue
- Lambda event source mapping

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| decouple components | SQS |
| async worker | SQS |
| failed messages | DLQ |
| strict ordering | FIFO Queue |
| message invisible while processing | Visibility Timeout |

### SNS

SNS dùng cho pub/sub và fanout.

Cần nhớ:

- Topic
- Subscriber
- Fanout
- Message filtering
- SNS to SQS
- SNS to Lambda

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| pub/sub | SNS |
| fanout | SNS + SQS |
| send one event to many systems | SNS |
| filter notification | SNS message filtering |

### EventBridge

EventBridge dùng để route event giữa các service hoặc chạy lịch tự động.

Cần nhớ:

- Event bus
- Rule
- Event pattern
- Scheduled rule
- SaaS/service events

Keyword thường gặp:

| Keyword | Nghĩ tới |
|---|---|
| event bus | EventBridge |
| scheduled event | EventBridge |
| route event by pattern | EventBridge Rule |
| trigger Lambda every day | EventBridge scheduled rule |

## 4. Các bẫy thường gặp trong Domain 1

### Bẫy 1. Query và Scan trong DynamoDB

Nếu đề hỏi cần đọc dữ liệu hiệu quả theo key, chọn Query.

Không chọn Scan nếu đề nói dữ liệu lớn hoặc cần tối ưu performance.

### Bẫy 2. SNS và SQS

- SQS: hàng đợi, xử lý async, decouple.
- SNS: publish/subscribe, fanout, gửi một message tới nhiều nơi.

### Bẫy 3. API Key không phải authentication mạnh

API Key thường dùng với Usage Plan để quota/throttling, không phải cơ chế login user an toàn.

### Bẫy 4. Lambda cần quyền qua execution role

Lambda gọi DynamoDB, S3, SQS thì phải cấp quyền cho Lambda execution role.

Không nên dùng access key hard-code trong code.

## 5. Câu hỏi ôn tập nhanh

1. Khi app cần xử lý job lâu mà không làm API timeout, nên dùng service nào?
2. Khi cần user upload file private lên S3, nên dùng cơ chế nào?
3. Khi cần query DynamoDB theo field không phải partition key, nên dùng gì?
4. Khi cần gửi một event đến nhiều queue, nên dùng pattern nào?
5. Khi cần chạy Lambda mỗi ngày lúc 1 giờ sáng, nên dùng service nào?

## 6. Bài tập về nhà

- Tạo bảng keyword Domain 1 của riêng bạn.
- Viết lại 10 tình huống và service tương ứng.
- Làm 20 câu trắc nghiệm Domain 1.
- Review toàn bộ câu sai và ghi lý do sai.
