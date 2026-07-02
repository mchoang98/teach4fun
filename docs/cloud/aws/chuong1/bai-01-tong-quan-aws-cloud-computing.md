# Bài 1. Tổng quan về AWS và Cloud Computing

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS là gì.
- Hiểu cloud computing là gì.
- Biết vì sao developer nên học AWS.
- Biết các nhóm dịch vụ AWS thường gặp trong chứng chỉ Developer Associate.
- Nhận diện được một số keyword tiếng Anh cơ bản trong đề thi.

---

## 2. AWS là gì?

AWS là viết tắt của **Amazon Web Services**.

Đây là nền tảng cloud của Amazon, cung cấp rất nhiều dịch vụ để xây dựng và vận hành ứng dụng.

Thay vì tự mua server, tự đặt trong phòng máy, tự lo điện, mạng, ổ cứng, bảo trì, ta có thể dùng dịch vụ cloud của AWS.

Ví dụ:

- Cần chạy code backend → dùng Lambda, EC2, Elastic Beanstalk.
- Cần lưu database → dùng DynamoDB, RDS.
- Cần lưu file ảnh/video → dùng S3.
- Cần tạo API → dùng API Gateway.
- Cần gửi message xử lý bất đồng bộ → dùng SQS, SNS, EventBridge.
- Cần log và giám sát hệ thống → dùng CloudWatch, X-Ray.

---

## 3. Cloud Computing là gì?

Cloud computing là mô hình sử dụng tài nguyên máy tính qua internet.

Các tài nguyên này có thể là:

- Server
- Database
- Storage
- Network
- Security
- Monitoring
- Deployment pipeline

Thay vì mua trước toàn bộ hạ tầng, ta có thể thuê theo nhu cầu.

Ví dụ dễ hiểu:

Trước đây muốn mở quán ăn, bạn phải tự mua bếp, bàn ghế, mặt bằng. Với cloud, giống như bạn thuê một căn bếp đã có sẵn điện, nước, thiết bị. Khi đông khách thì thuê thêm, khi ít khách thì giảm lại.

---

## 4. Vì sao Developer cần học AWS?

Developer không chỉ viết code. Khi làm ứng dụng thực tế, developer còn cần hiểu:

- Code sẽ chạy ở đâu?
- API deploy như thế nào?
- Database lưu ở đâu?
- Secret được bảo vệ ra sao?
- Log lỗi xem ở đâu?
- App bị chậm thì debug thế nào?
- Làm sao deploy version mới ít rủi ro?

AWS Certified Developer - Associate tập trung vào những năng lực này.

---

## 5. Các nhóm dịch vụ AWS quan trọng cho Developer

### Nhóm Compute

Dùng để chạy ứng dụng hoặc code.

- Lambda
- EC2
- Elastic Beanstalk

### Nhóm API

Dùng để public API cho client gọi.

- API Gateway

### Nhóm Data Store

Dùng để lưu dữ liệu.

- DynamoDB
- S3
- RDS

### Nhóm Messaging

Dùng để tách hệ thống và xử lý bất đồng bộ.

- SQS
- SNS
- EventBridge

### Nhóm Security

Dùng để quản lý quyền, xác thực, mã hóa và secret.

- IAM
- Cognito
- KMS
- Secrets Manager
- Parameter Store

### Nhóm Deployment

Dùng để build, deploy, quản lý hạ tầng bằng code.

- SAM
- CloudFormation
- CodeBuild
- CodeDeploy
- CodePipeline

### Nhóm Monitoring

Dùng để log, debug, trace và cảnh báo lỗi.

- CloudWatch
- X-Ray

---

## 6. Kiến thức thi cần nhớ

Trong đề thi Developer Associate, AWS thường không hỏi theo kiểu “dịch vụ này là gì?” đơn giản.

Đề thường hỏi theo tình huống:

- Ứng dụng cần chạy code mà không quản lý server → chọn Lambda.
- Ứng dụng cần REST API serverless → chọn API Gateway + Lambda.
- Ứng dụng cần NoSQL key-value database → chọn DynamoDB.
- Ứng dụng cần upload file tạm thời an toàn → chọn S3 pre-signed URL.
- Ứng dụng cần xử lý bất đồng bộ → chọn SQS.
- Ứng dụng cần gửi một event đến nhiều hệ thống → chọn SNS fanout.

---

## 7. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| cloud computing | Điện toán đám mây |
| serverless | Không quản lý server trực tiếp |
| managed service | AWS quản lý phần hạ tầng chính |
| compute | Dịch vụ chạy code/app |
| storage | Lưu file/object |
| database | Lưu dữ liệu có cấu trúc |
| scalable | Có thể mở rộng |
| highly available | Có tính sẵn sàng cao |
| fault tolerant | Chịu lỗi tốt |
| pay as you go | Dùng bao nhiêu trả bấy nhiêu |

---

## 8. Bẫy thường gặp

### Bẫy 1: Nghĩ AWS chỉ là server

AWS không chỉ có server EC2. Với Developer Associate, Lambda, API Gateway, DynamoDB, SQS, SNS, EventBridge rất quan trọng.

### Bẫy 2: Học thuộc tên dịch vụ nhưng không hiểu tình huống

Thi AWS cần hiểu service dùng cho vấn đề gì.

Ví dụ:

- SQS dùng để queue và decouple.
- SNS dùng để pub/sub và fanout.
- EventBridge dùng cho event bus và event routing.

### Bẫy 3: Chọn dịch vụ quá phức tạp

Nếu đề hỏi serverless, managed, ít vận hành, thường không nên chọn giải pháp tự quản lý quá nhiều.

---

## 9. Lab gợi ý

Nếu có tài khoản AWS, hãy thực hiện:

1. Đăng nhập AWS Console.
2. Tìm các dịch vụ sau trên thanh search:
   - Lambda
   - API Gateway
   - DynamoDB
   - S3
   - IAM
   - CloudWatch
3. Ghi chú mỗi dịch vụ dùng để làm gì.

Nếu chưa có tài khoản AWS, hãy xem giao diện AWS Console qua video hoặc tài liệu chính thức.

---

## 10. Câu hỏi ôn tập

1. AWS là gì?
2. Cloud computing khác gì với tự mua server?
3. Developer cần AWS để làm gì?
4. Dịch vụ nào dùng để chạy code serverless?
5. Dịch vụ nào dùng để tạo REST API serverless?
6. Dịch vụ nào dùng để lưu file object?
7. Dịch vụ nào dùng cho NoSQL database?
8. Dịch vụ nào dùng để xử lý queue?
9. Dịch vụ nào dùng để log và monitor?
10. Vì sao không nên học AWS theo kiểu chỉ nhớ tên dịch vụ?

---

## 11. Tóm tắt bài học

AWS là nền tảng cloud cung cấp nhiều dịch vụ để developer xây dựng, deploy, bảo mật và monitor ứng dụng.

Đối với chứng chỉ Developer Associate, cần học AWS theo tình huống thực tế:

```text
App cần chạy code -> Lambda
App cần API -> API Gateway
App cần NoSQL -> DynamoDB
App cần file storage -> S3
App cần queue -> SQS
App cần notification -> SNS
App cần event routing -> EventBridge
App cần log -> CloudWatch
```
