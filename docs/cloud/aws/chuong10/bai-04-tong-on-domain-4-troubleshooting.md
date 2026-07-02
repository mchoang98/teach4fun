# Bài 4. Tổng ôn Domain 4: Troubleshooting and Optimization

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết các công cụ monitor/debug trong AWS.
- Phân biệt CloudWatch và X-Ray.
- Biết xử lý lỗi thường gặp của Lambda, API Gateway, DynamoDB, SQS.
- Biết chọn giải pháp tối ưu performance/cost phù hợp.

## 2. Domain 4 gồm những gì?

Domain 4 tập trung vào tìm lỗi và tối ưu ứng dụng.

Các nội dung thường gặp:

- Root cause analysis.
- CloudWatch Logs.
- CloudWatch Metrics.
- CloudWatch Alarms.
- Logs Insights.
- X-Ray.
- Lambda timeout.
- API Gateway lỗi 4xx/5xx.
- DynamoDB throttling.
- SQS DLQ.
- Retry, timeout, backoff.
- Cost/performance optimization.

## 3. CloudWatch Logs

Dùng để xem log ứng dụng.

Cần nhớ:

- Log group.
- Log stream.
- Lambda logs.
- API Gateway access logs.
- Logs Insights.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| application logs | CloudWatch Logs |
| search logs | CloudWatch Logs Insights |
| Lambda log output | CloudWatch Logs |

## 4. CloudWatch Metrics và Alarms

Dùng để theo dõi số liệu và cảnh báo.

Cần nhớ:

- Metrics.
- Alarms.
- Dashboards.
- Custom metrics.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| metric alarm | CloudWatch Alarm |
| error rate increased | CloudWatch Metric + Alarm |
| dashboard | CloudWatch Dashboard |
| custom business metric | Custom Metrics |

## 5. AWS X-Ray

X-Ray dùng để trace request qua nhiều service.

Cần nhớ:

- Trace.
- Segment.
- Subsegment.
- Service map.
- Latency analysis.
- Distributed tracing.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| distributed tracing | X-Ray |
| trace request across services | X-Ray |
| service map | X-Ray |
| find latency bottleneck | X-Ray |

## 6. Troubleshooting Lambda

Lỗi thường gặp:

- Timeout.
- Memory không đủ.
- AccessDenied.
- Cold start.
- Retry quá nhiều.
- DLQ có message lỗi.

Cách nghĩ trong đề:

| Triệu chứng | Hướng xử lý |
|---|---|
| Lambda timeout | Tăng timeout, tối ưu code, xử lý async |
| Memory cao | Tăng memory hoặc tối ưu code |
| AccessDenied | Sửa IAM execution role |
| Cold start | Provisioned concurrency |
| Async invoke fail | Retry / DLQ |

## 7. Troubleshooting API Gateway

Lỗi thường gặp:

- 4xx: lỗi từ client, auth, request sai.
- 5xx: lỗi server/integration.
- 502: Lambda response format sai hoặc integration error.
- 429: throttling.

Cách nghĩ trong đề:

| Lỗi | Nghĩ tới |
|---|---|
| 401/403 | Authorizer/IAM permission |
| 404 | Resource/method/stage sai |
| 429 | Throttling / Usage Plan |
| 502 | Lambda integration error |
| CORS error | Cấu hình CORS |

## 8. Troubleshooting DynamoDB

Lỗi thường gặp:

- Throttling.
- Hot partition.
- Scan quá nhiều.
- GSI thiếu hoặc thiết kế key chưa đúng.

Cách xử lý:

- Dùng Query thay vì Scan.
- Thiết kế partition key phân tán tốt.
- Dùng on-demand nếu traffic khó dự đoán.
- Tăng capacity nếu dùng provisioned.
- Dùng exponential backoff.
- Cân nhắc DAX cho read-heavy workload.

## 9. Troubleshooting SQS

Lỗi thường gặp:

- Message bị xử lý nhiều lần.
- Visibility timeout quá ngắn.
- Message lỗi retry mãi.
- Message vào DLQ.

Cách xử lý:

- Tăng visibility timeout phù hợp thời gian xử lý.
- Thiết kế idempotent worker.
- Cấu hình DLQ.
- Kiểm tra lỗi trong worker Lambda.

## 10. Optimization

| Nhu cầu | Giải pháp |
|---|---|
| Giảm cold start | Provisioned concurrency |
| Tối ưu Lambda performance | Memory tuning |
| Giảm DynamoDB throttling | Capacity/backoff/key design |
| Tăng tốc read DynamoDB | DAX |
| Giảm tải backend API | API Gateway caching |
| Giảm chi phí file cũ | S3 Lifecycle |
| Xử lý nhiều message hiệu quả | Batch processing |

## 11. Các bẫy thường gặp

### Bẫy 1. CloudWatch không thay thế X-Ray

CloudWatch xem log/metric. X-Ray trace request qua nhiều service.

### Bẫy 2. API Gateway 502 thường do Lambda integration

Nếu Lambda proxy integration trả sai format response, API Gateway có thể trả 502.

### Bẫy 3. SQS Standard có thể nhận message trùng

Worker phải xử lý idempotent.

### Bẫy 4. DynamoDB throttling không chỉ do thiếu capacity

Có thể do hot partition hoặc access pattern sai.

## 12. Bài tập về nhà

- Làm bảng lỗi phổ biến và cách xử lý.
- Làm 25 câu Troubleshooting.
- Ghi lại các câu sai liên quan đến CloudWatch/X-Ray/API Gateway 502.
- Tự mô tả flow debug khi Lambda bị timeout.
