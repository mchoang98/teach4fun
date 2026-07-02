# Bài 7. Luyện đề theo từng Domain

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết cách luyện đề theo từng domain thay vì làm đề ngẫu nhiên.
- Biết đo điểm yếu của bản thân theo từng nhóm kiến thức.
- Biết review câu sai đúng cách.
- Biết tạo notebook câu sai để tăng điểm nhanh.

## 2. Vì sao nên luyện đề theo domain?

Nếu làm full mock quá sớm, học viên dễ bị rối vì câu hỏi trộn nhiều chủ đề.

Luyện theo domain giúp:

- Biết mình yếu phần nào.
- Ôn đúng service liên quan.
- Nhận diện keyword nhanh hơn.
- Không học lan man.

## 3. Cấu trúc luyện đề đề xuất

### Vòng 1. Mini test theo từng domain

| Domain | Số câu đề xuất | Mục tiêu điểm |
|---|---:|---:|
| Domain 1: Development | 20 câu | 70% trở lên |
| Domain 2: Security | 20 câu | 70% trở lên |
| Domain 3: Deployment | 20 câu | 70% trở lên |
| Domain 4: Troubleshooting | 20 câu | 70% trở lên |

### Vòng 2. Review câu sai

Với mỗi câu sai, ghi lại:

```text
Câu số:
Domain:
Service chính:
Keyword trong đề:
Đáp án đã chọn:
Đáp án đúng:
Vì sao mình sai:
Ghi nhớ lần sau:
```

### Vòng 3. Làm lại câu sai

Sau 2–3 ngày, làm lại toàn bộ câu sai.

Nếu vẫn sai, nghĩa là chưa hiểu service hoặc chưa nhận diện được keyword.

## 4. Checklist luyện Domain 1

Cần chắc:

- Lambda.
- API Gateway.
- DynamoDB.
- S3.
- SQS.
- SNS.
- EventBridge.
- AWS SDK.

Dạng câu hỏi thường gặp:

- Lambda gọi DynamoDB bị AccessDenied.
- API Gateway bị CORS.
- DynamoDB dùng Scan nên chậm.
- Cần xử lý async job.
- Cần gửi một event đến nhiều hệ thống.

## 5. Checklist luyện Domain 2

Cần chắc:

- IAM Role.
- IAM Policy.
- STS.
- Cognito.
- KMS.
- Secrets Manager.
- Parameter Store.

Dạng câu hỏi thường gặp:

- Tránh hard-code credentials.
- Cấp quyền tối thiểu.
- User login cho web/mobile app.
- Secret rotation.
- Cross-account access.

## 6. Checklist luyện Domain 3

Cần chắc:

- CloudFormation.
- SAM.
- CodeBuild.
- CodeDeploy.
- CodePipeline.
- Deployment strategies.
- Lambda alias/version.

Dạng câu hỏi thường gặp:

- Deploy serverless app.
- Build artifact.
- Pipeline tự động.
- Canary deployment.
- Blue/green deployment.
- Drift detection.

## 7. Checklist luyện Domain 4

Cần chắc:

- CloudWatch Logs.
- CloudWatch Metrics.
- CloudWatch Alarms.
- Logs Insights.
- X-Ray.
- Lambda timeout.
- API Gateway 502.
- DynamoDB throttling.
- SQS DLQ.

Dạng câu hỏi thường gặp:

- Tìm root cause.
- Trace request qua nhiều service.
- Debug Lambda timeout.
- Debug API Gateway 5xx.
- Xử lý DynamoDB throttling.
- Message vào DLQ.

## 8. Cách tính điểm sau mỗi mini test

| Điểm | Đánh giá |
|---:|---|
| Dưới 60% | Cần học lại domain này |
| 60–70% | Hiểu cơ bản nhưng chưa chắc |
| 70–80% | Có thể chuyển sang domain tiếp theo |
| Trên 80% | Tốt, tiếp tục luyện câu tình huống |
| Trên 90% | Rất tốt, chỉ cần giữ phong độ |

## 9. Nguyên tắc review câu sai

Không chỉ ghi đáp án đúng.

Phải trả lời được:

- Vì sao đáp án đúng là đúng?
- Vì sao đáp án mình chọn là sai?
- Keyword nào trong đề dẫn đến service đúng?
- Có service nào dễ nhầm không?

## 10. Bài tập về nhà

- Làm 4 mini test, mỗi test 20 câu.
- Tạo file `notebook-cau-sai.md`.
- Ghi ít nhất 20 câu sai đầu tiên.
- Sau 3 ngày làm lại toàn bộ câu sai.
