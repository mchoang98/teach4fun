# Bài kiểm tra cuối Chương 9
# Monitoring, Troubleshooting và Optimization

## Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 35 câu
- Thời gian đề xuất: 45 phút
- Mục tiêu: Đánh giá khả năng nhận diện lỗi, chọn dịch vụ monitoring phù hợp và đưa ra hướng tối ưu trong AWS.

## Thang điểm đề xuất

| Số câu đúng | Đánh giá |
|---:|---|
| 0 - 20 | Chưa đạt, cần học lại chương |
| 21 - 24 | Nắm cơ bản, cần luyện thêm câu tình huống |
| 25 - 28 | Khá, có thể học chương tiếp theo |
| 29 - 32 | Tốt, nắm chắc phần troubleshooting |
| 33 - 35 | Rất tốt, sẵn sàng luyện đề domain này |

---

# Phần A. Câu hỏi trắc nghiệm

## Câu 1

Developer cần xem log chi tiết của Lambda function. Dịch vụ nào phù hợp nhất?

A. AWS X-Ray  
B. CloudWatch Logs  
C. CloudTrail  
D. AWS Config  

**Đáp án: B**

---

## Câu 2

Một request đi qua API Gateway, Lambda và DynamoDB. Developer cần biết service nào gây latency cao nhất. Nên dùng dịch vụ nào?

A. CloudWatch Logs  
B. AWS X-Ray  
C. IAM Access Analyzer  
D. AWS Config  

**Đáp án: B**

---

## Câu 3

Cần cảnh báo khi Lambda `Errors` lớn hơn 5 trong 5 phút. Nên dùng gì?

A. CloudWatch Alarm  
B. CloudFormation Drift Detection  
C. AWS X-Ray Segment  
D. S3 Event Notification  

**Đáp án: A**

---

## Câu 4

CloudWatch Logs Insights phù hợp nhất cho trường hợp nào?

A. Query và phân tích log  
B. Tạo IAM Role  
C. Deploy Lambda version mới  
D. Mã hóa object S3  

**Đáp án: A**

---

## Câu 5

Lambda báo lỗi `Task timed out after 3.00 seconds`. Nguyên nhân nào hợp lý nhất?

A. Lambda chạy quá thời gian timeout cấu hình  
B. S3 bucket không bật versioning  
C. API Gateway không có API key  
D. DynamoDB table không có GSI  

**Đáp án: A**

---

## Câu 6

Lambda không ghi được item vào DynamoDB và log báo `AccessDeniedException`. Cần kiểm tra gì trước tiên?

A. Lambda execution role  
B. API Gateway stage name  
C. S3 lifecycle policy  
D. CloudFront distribution  

**Đáp án: A**

---

## Câu 7

API Gateway trả lỗi 502 khi tích hợp Lambda proxy. Nguyên nhân nào thường gặp?

A. Lambda response sai format  
B. S3 bucket public  
C. DynamoDB bật TTL  
D. SNS topic có nhiều subscriber  

**Đáp án: A**

---

## Câu 8

Browser gọi API Gateway bị lỗi CORS. Header nào thường cần có trong response?

A. Access-Control-Allow-Origin  
B. X-Amz-Date  
C. Authorization  
D. Content-MD5  

**Đáp án: A**

---

## Câu 9

API Gateway trả 429 Too Many Requests. Điều này thường liên quan đến gì?

A. Throttling  
B. Encryption  
C. DNS routing  
D. Object versioning  

**Đáp án: A**

---

## Câu 10

Metric nào của Lambda cho biết số lần function bị giới hạn do vượt concurrency?

A. Throttles  
B. Duration  
C. Invocations  
D. IteratorAge  

**Đáp án: A**

---

## Câu 11

Metric nào của Lambda cho biết thời gian chạy function?

A. Duration  
B. Errors  
C. Invocations  
D. DeadLetterErrors  

**Đáp án: A**

---

## Câu 12

Metric nào của API Gateway cho biết lỗi phía backend/server?

A. 5XXError  
B. 4XXError  
C. CacheHitCount  
D. Count  

**Đáp án: A**

---

## Câu 13

DynamoDB bị `ThrottledRequests` tăng cao. Giải pháp nào hợp lý?

A. Dùng on-demand capacity hoặc auto scaling/backoff  
B. Bật S3 versioning  
C. Tạo Lambda alias  
D. Dùng CloudTrail Lake  

**Đáp án: A**

---

## Câu 14

Ứng dụng DynamoDB đang dùng Scan nhiều và bị chậm. Cách cải thiện tốt hơn là gì?

A. Thiết kế Query theo key hoặc thêm GSI  
B. Tăng API Gateway timeout  
C. Tạo thêm SNS topic  
D. Tắt CloudWatch Logs  

**Đáp án: A**

---

## Câu 15

Cần query DynamoDB theo một attribute không phải partition key hiện tại. Nên dùng gì?

A. GSI  
B. DLQ  
C. X-Ray  
D. CloudTrail  

**Đáp án: A**

---

## Câu 16

SQS message đang được worker xử lý nhưng xuất hiện lại quá sớm và bị xử lý lặp. Cần kiểm tra gì?

A. Visibility timeout  
B. S3 lifecycle  
C. Cognito User Pool  
D. Lambda layer  

**Đáp án: A**

---

## Câu 17

Message SQS xử lý lỗi nhiều lần và cần lưu lại để phân tích sau. Nên dùng gì?

A. Dead-letter Queue  
B. API Gateway Cache  
C. DynamoDB TTL  
D. CloudFront Function  

**Đáp án: A**

---

## Câu 18

SQS Standard Queue có thể xảy ra điều gì?

A. Message có thể được xử lý nhiều hơn một lần  
B. Không thể dùng với Lambda  
C. Luôn đảm bảo strict ordering  
D. Không hỗ trợ DLQ  

**Đáp án: A**

---

## Câu 19

Cần đảm bảo thứ tự xử lý message trong SQS. Nên chọn gì?

A. FIFO Queue  
B. Standard Queue  
C. SNS Topic  
D. EventBridge Bus  

**Đáp án: A**

---

## Câu 20

Metric nào của SQS cho biết số message đang chờ xử lý?

A. ApproximateNumberOfMessagesVisible  
B. NumberOfMessagesDeleted  
C. ConsumedReadCapacityUnits  
D. IteratorAge  

**Đáp án: A**

---

## Câu 21

Metric nào của SQS cho biết message cũ nhất trong queue đã chờ bao lâu?

A. ApproximateAgeOfOldestMessage  
B. Duration  
C. 5XXError  
D. CacheMissCount  

**Đáp án: A**

---

## Câu 22

Lambda bị cold start và API cần latency ổn định. Giải pháp nào phù hợp?

A. Provisioned concurrency  
B. S3 lifecycle  
C. DynamoDB TTL  
D. CloudTrail  

**Đáp án: A**

---

## Câu 23

Tăng memory Lambda có thể giúp gì?

A. Tăng CPU tương ứng và có thể giảm thời gian chạy  
B. Tự động tạo IAM policy  
C. Tự động bật CORS  
D. Tự động tạo DynamoDB GSI  

**Đáp án: A**

---

## Câu 24

DynamoDB workload đọc nhiều, cần latency rất thấp và có thể cache dữ liệu. Nên cân nhắc gì?

A. DAX  
B. SQS FIFO  
C. CodeDeploy  
D. CloudFormation Change Set  

**Đáp án: A**

---

## Câu 25

API response lặp lại và không cần real-time tuyệt đối. Muốn giảm tải backend. Nên dùng gì?

A. API Gateway caching  
B. KMS key rotation  
C. IAM permission boundary  
D. CloudTrail  

**Đáp án: A**

---

## Câu 26

User cần upload file lớn lên S3 ổn định hơn. Tính năng nào phù hợp?

A. Multipart upload  
B. DynamoDB Streams  
C. Lambda alias  
D. EventBridge rule  

**Đáp án: A**

---

## Câu 27

Muốn cho client upload file trực tiếp lên S3 mà không đi qua backend, nhưng vẫn private và có thời hạn. Nên dùng gì?

A. S3 pre-signed URL  
B. Public bucket  
C. CloudTrail  
D. API Gateway usage plan  

**Đáp án: A**

---

## Câu 28

Muốn giảm chi phí lưu trữ file cũ trong S3. Nên dùng gì?

A. S3 Lifecycle policy  
B. Lambda provisioned concurrency  
C. SQS visibility timeout  
D. API Gateway CORS  

**Đáp án: A**

---

## Câu 29

Khi gặp lỗi throttling tạm thời, client nên retry theo cách nào?

A. Exponential backoff  
B. Retry liên tục không chờ  
C. Tắt logging  
D. Xóa IAM role  

**Đáp án: A**

---

## Câu 30

Lambda consume SQS theo batch. Một message lỗi làm cả batch bị retry. Tính năng nào giúp chỉ retry message lỗi?

A. Partial batch failure  
B. API Gateway cache  
C. S3 versioning  
D. Cognito Hosted UI  

**Đáp án: A**

---

## Câu 31

Cần biết ai đã xóa một resource trong AWS account. Dịch vụ nào phù hợp nhất?

A. CloudTrail  
B. CloudWatch Logs Insights  
C. X-Ray  
D. SQS  

**Đáp án: A**

---

## Câu 32

CloudWatch Alarm thường được kích hoạt dựa trên gì?

A. Metric vượt ngưỡng  
B. User đăng nhập Cognito  
C. S3 object được mã hóa  
D. Lambda layer được publish  

**Đáp án: A**

---

## Câu 33

X-Ray service map giúp gì?

A. Hiển thị quan hệ giữa các service và vị trí lỗi/chậm  
B. Tạo S3 bucket  
C. Deploy CloudFormation stack  
D. Tạo IAM user  

**Đáp án: A**

---

## Câu 34

Lambda không thấy log trong CloudWatch. Nguyên nhân nào có thể xảy ra?

A. Execution role thiếu quyền ghi CloudWatch Logs  
B. DynamoDB thiếu GSI  
C. S3 chưa bật lifecycle  
D. API Gateway chưa bật cache  

**Đáp án: A**

---

## Câu 35

Ứng dụng cần xử lý job lâu, nếu xử lý trực tiếp trong API thì dễ timeout. Kiến trúc nào phù hợp hơn?

A. API Gateway -> Lambda -> SQS -> Worker Lambda  
B. API Gateway -> Lambda chạy lâu trong cùng request  
C. Client -> DynamoDB trực tiếp không auth  
D. Public S3 bucket cho mọi dữ liệu  

**Đáp án: A**

---

# Phần B. Bảng tự chấm

| Câu | Đáp án |
|---:|---|
| 1 | B |
| 2 | B |
| 3 | A |
| 4 | A |
| 5 | A |
| 6 | A |
| 7 | A |
| 8 | A |
| 9 | A |
| 10 | A |
| 11 | A |
| 12 | A |
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

---

# Phần C. Gợi ý ôn lại nếu làm sai

| Sai nhóm câu | Cần ôn lại |
|---|---|
| Câu 1 - 5 | CloudWatch Logs, Metrics, Alarm, Logs Insights, X-Ray |
| Câu 6 - 12 | Troubleshooting Lambda và API Gateway |
| Câu 13 - 21 | DynamoDB và SQS troubleshooting |
| Câu 22 - 30 | Optimization |
| Câu 31 - 35 | Phân biệt service và chọn kiến trúc phù hợp |
