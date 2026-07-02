# Bài 9. Chiến thuật trước ngày thi

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết nên ôn gì trong những ngày cuối.
- Biết tránh học lan man.
- Biết chuẩn bị tâm lý khi thi.
- Biết kiểm tra mức sẵn sàng trước khi đăng ký thi.

## 2. 7 ngày cuối nên làm gì?

Không học service mới quá sâu trong tuần cuối.

Nên tập trung:

- Review keyword.
- Review câu sai.
- Làm lại mini test domain yếu.
- Làm 1–2 full mock exam.
- Ôn service dễ nhầm.

## 3. Checklist kiến thức bắt buộc

Trước khi thi, cần tự tin với các phần sau:

- IAM role/policy.
- Lambda timeout, memory, concurrency.
- API Gateway throttling, CORS, authorizer.
- DynamoDB key, GSI, TTL, Streams.
- SQS visibility timeout, DLQ.
- SNS fanout.
- EventBridge rule.
- S3 pre-signed URL, versioning, lifecycle.
- Cognito User Pool.
- KMS và Secrets Manager.
- SAM, CloudFormation, CodePipeline.
- CloudWatch và X-Ray.

## 4. Checklist kỹ năng làm đề

Cần đạt:

- Đọc được keyword tiếng Anh.
- Biết loại đáp án sai.
- Biết service nào phù hợp nhất theo yêu cầu.
- Biết phân biệt service dễ nhầm.
- Mock exam đạt 75–80% ổn định.

## 5. Các cặp service dễ nhầm cần ôn lại

| Cặp dễ nhầm | Cách nhớ |
|---|---|
| SQS vs SNS | Queue worker vs Pub/Sub |
| SNS vs EventBridge | Fanout notification vs event routing |
| Cognito User Pool vs Identity Pool | Login user vs temporary AWS credentials |
| Secrets Manager vs Parameter Store | Secret rotation vs config/secure string |
| CloudWatch vs X-Ray | Logs/metrics/alarms vs tracing |
| CodeBuild vs CodeDeploy vs CodePipeline | Build vs deploy vs pipeline |
| Query vs Scan | Đọc theo key vs quét toàn bảng |
| Lambda version vs alias | Bản cố định vs tên trỏ đến version |

## 6. Ngày trước khi thi

Nên làm:

- Ôn bảng keyword.
- Đọc notebook câu sai.
- Làm một mini test nhẹ.
- Ngủ đủ.
- Chuẩn bị giấy tờ/tài khoản thi nếu thi online.

Không nên làm:

- Học service mới quá khó.
- Làm quá nhiều đề đến kiệt sức.
- Học thuộc dump mà không hiểu.
- Thức khuya.

## 7. Trong lúc thi

Hãy nhớ:

- Không cần hiểu 100% từng từ tiếng Anh.
- Tập trung vào keyword và yêu cầu cuối câu.
- Câu dài chưa chắc khó.
- Câu ngắn chưa chắc dễ.
- Nếu phân vân, loại đáp án sai trước.
- Nếu chưa chắc, đánh dấu và quay lại sau.

## 8. Chiến thuật xử lý câu khó

Khi gặp câu khó:

```text
1. Tìm service chính trong đề.
2. Tìm vấn đề đang xảy ra.
3. Tìm ràng buộc: secure, cost-effective, least overhead, scalable.
4. Loại đáp án sai rõ ràng.
5. Chọn đáp án phù hợp nhất với ràng buộc.
```

## 9. Dấu hiệu đã sẵn sàng thi

Bạn có thể đăng ký thi khi:

- Làm mock exam đạt 75–80% ổn định.
- Biết giải thích vì sao đáp án đúng.
- Biết loại 2–3 đáp án sai.
- Không bị hoảng khi đọc câu hỏi tiếng Anh dài.
- Gặp keyword là nghĩ được service tương ứng.

## 10. Bài tập cuối cùng

- Đọc lại bảng keyword 3 lần.
- Làm lại 30 câu sai gần nhất.
- Viết ra 10 service mình hay nhầm.
- Tự giải thích mỗi service trong 2–3 câu.
- Nghỉ ngơi trước ngày thi.
