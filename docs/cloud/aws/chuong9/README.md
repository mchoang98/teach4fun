# Chương 9. Monitoring, Troubleshooting và Optimization

Chương này tập trung vào domain **Troubleshooting and Optimization** trong kỳ thi AWS Certified Developer - Associate DVA-C02.

## Mục tiêu chương

Sau chương này, học viên cần:

- Hiểu vai trò của monitoring trong ứng dụng cloud.
- Biết phân biệt log, metric, alarm và trace.
- Biết dùng CloudWatch Logs, Metrics, Alarms, Dashboards và Logs Insights.
- Biết dùng AWS X-Ray để trace request qua nhiều service.
- Biết debug các lỗi thường gặp của Lambda, API Gateway, DynamoDB và SQS.
- Biết các hướng tối ưu cơ bản về performance và cost.
- Nhận diện được keyword thường gặp trong đề thi DVA-C02.

## Danh sách bài học

1. [Bài 1. Tổng quan Monitoring và Troubleshooting](./bai-01-tong-quan-monitoring-troubleshooting.md)
2. [Bài 2. CloudWatch Logs](./bai-02-cloudwatch-logs.md)
3. [Bài 3. CloudWatch Metrics và Alarms](./bai-03-cloudwatch-metrics-alarms.md)
4. [Bài 4. CloudWatch Logs Insights](./bai-04-cloudwatch-logs-insights.md)
5. [Bài 5. AWS X-Ray](./bai-05-aws-xray.md)
6. [Bài 6. Troubleshooting Lambda](./bai-06-troubleshooting-lambda.md)
7. [Bài 7. Troubleshooting API Gateway](./bai-07-troubleshooting-api-gateway.md)
8. [Bài 8. Troubleshooting DynamoDB và SQS](./bai-08-troubleshooting-dynamodb-sqs.md)
9. [Bài 9. Optimization cho Developer](./bai-09-optimization-cho-developer.md)
10. [Bài kiểm tra cuối chương 9](./bai-kiem-tra-chuong-09.md)

## Mini project trong chương

Tiếp tục project **Serverless Booking API**:

- Bật CloudWatch Logs cho Lambda.
- Bật access log cho API Gateway.
- Bật X-Ray tracing.
- Tạo CloudWatch Alarm khi Lambda error tăng.
- Giả lập lỗi API Gateway 502.
- Giả lập DynamoDB throttling.
- Đưa message lỗi vào SQS DLQ.
- Tối ưu Lambda memory và timeout.
