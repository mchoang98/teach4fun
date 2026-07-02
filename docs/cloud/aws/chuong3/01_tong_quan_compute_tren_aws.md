# Bài 1. Tổng quan Compute trên AWS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu compute là gì trong AWS.
- Phân biệt được Lambda, EC2 và Elastic Beanstalk ở mức developer cần biết.
- Biết khi nào nên dùng serverless, khi nào cần server truyền thống.
- Nhận diện được keyword thường gặp trong đề thi DVA-C02 liên quan đến compute.

---

## 2. Giải thích dễ hiểu

Compute là phần dùng để **chạy code hoặc ứng dụng**.

Ví dụ:

- Bạn có một API backend cần chạy liên tục.
- Bạn có một hàm xử lý ảnh khi user upload file.
- Bạn có một web app cần deploy nhanh.
- Bạn có một worker xử lý job nền.

Trong AWS, developer thường gặp 3 lựa chọn compute chính:

| Dịch vụ | Hiểu đơn giản | Khi nào dùng |
|---|---|---|
| Lambda | Chạy function không cần quản lý server | Xử lý event, API serverless, job ngắn |
| EC2 | Máy chủ ảo | Cần kiểm soát server, OS, runtime |
| Elastic Beanstalk | Deploy app nhanh, AWS quản lý hạ tầng giúp | Web app truyền thống, muốn deploy nhanh |

---

## 3. AWS Lambda là gì?

Lambda là dịch vụ **serverless compute**.

Bạn chỉ cần viết code, AWS lo phần:

- Server
- Scaling
- Runtime environment
- Availability
- Infrastructure bên dưới

Lambda phù hợp cho:

- API backend với API Gateway
- Xử lý file upload từ S3
- Xử lý message từ SQS
- Scheduled job với EventBridge
- Xử lý event từ DynamoDB Streams

Ví dụ kiến trúc:

```text
Client -> API Gateway -> Lambda -> DynamoDB
```

---

## 4. EC2 là gì?

EC2 là máy chủ ảo trên AWS.

Bạn có quyền kiểm soát nhiều hơn:

- Chọn hệ điều hành
- Cài package
- Mở port
- Cấu hình web server
- Quản lý runtime
- Quản lý scaling nếu cần

EC2 phù hợp khi:

- App cần chạy lâu dài.
- Cần cấu hình OS đặc biệt.
- Cần cài phần mềm riêng.
- App chưa phù hợp để chuyển sang serverless.

Nhược điểm:

- Phải quản lý server.
- Phải cập nhật bảo mật.
- Phải tự lo scaling hoặc dùng Auto Scaling.

---

## 5. Elastic Beanstalk là gì?

Elastic Beanstalk là dịch vụ giúp deploy web app nhanh hơn EC2 thuần.

Bạn đưa code lên, AWS có thể tự tạo:

- EC2
- Load Balancer
- Auto Scaling Group
- Security Group
- Environment

Elastic Beanstalk phù hợp khi:

- Bạn có app Node.js, Python, Java, PHP, .NET, Ruby, Go.
- Bạn muốn deploy nhanh mà không tự cấu hình từng EC2.
- Bạn vẫn muốn dùng mô hình app truyền thống.

---

## 6. So sánh nhanh Lambda, EC2, Elastic Beanstalk

| Tiêu chí | Lambda | EC2 | Elastic Beanstalk |
|---|---|---|---|
| Quản lý server | Không | Có | Ít hơn EC2 |
| Phù hợp API serverless | Rất phù hợp | Có thể | Có thể |
| Chạy task ngắn | Rất phù hợp | Có thể | Không tối ưu |
| Kiểm soát OS | Không | Cao | Trung bình |
| Scaling | Tự động | Tự cấu hình | AWS hỗ trợ |
| Keyword đề thi | serverless compute | virtual server | simple web app deployment |

---

## 7. Kiến thức thi cần nhớ

Trong đề thi DVA-C02:

- Gặp **run code without managing servers** → nghĩ tới Lambda.
- Gặp **serverless compute** → nghĩ tới Lambda.
- Gặp **need full control over OS** → nghĩ tới EC2.
- Gặp **simple deploy web application** → nghĩ tới Elastic Beanstalk.
- Gặp **platform as a service** → nghĩ tới Elastic Beanstalk.

---

## 8. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| serverless compute | Lambda |
| run code without managing servers | Lambda |
| event-driven function | Lambda |
| virtual machine | EC2 |
| full control of operating system | EC2 |
| platform as a service | Elastic Beanstalk |
| simple web app deployment | Elastic Beanstalk |
| managed application environment | Elastic Beanstalk |

---

## 9. Dạng câu hỏi exam thường gặp

### Tình huống 1

Ứng dụng cần chạy code khi có file mới upload vào S3.

Đáp án nên nghĩ tới: **Lambda**.

### Tình huống 2

Developer cần deploy web app nhanh, không muốn tự tạo EC2, Load Balancer, Auto Scaling.

Đáp án nên nghĩ tới: **Elastic Beanstalk**.

### Tình huống 3

Ứng dụng cần cài phần mềm đặc biệt trên hệ điều hành và kiểm soát server.

Đáp án nên nghĩ tới: **EC2**.

---

## 10. Bẫy thường gặp

- Không phải lúc nào serverless cũng là đáp án đúng.
- Nếu app cần chạy quá lâu hoặc cần kiểm soát OS, Lambda có thể không phù hợp.
- Elastic Beanstalk không phải serverless hoàn toàn, bên dưới vẫn dùng tài nguyên như EC2.
- EC2 mạnh nhưng cần quản lý nhiều hơn, nên không phải lựa chọn tốt nhất nếu đề yêu cầu giảm vận hành.

---

## 11. Bài tập về nhà

### Phần lý thuyết

1. Compute trong AWS dùng để làm gì?
2. Lambda khác EC2 ở điểm nào?
3. Elastic Beanstalk giúp developer điều gì?
4. Vì sao Lambda được gọi là serverless?
5. Khi nào nên chọn EC2 thay vì Lambda?

### Phần tình huống

1. User upload ảnh lên S3, hệ thống cần tự động resize ảnh. Chọn compute nào?
2. Công ty cần deploy web app Node.js nhanh, ít quản lý hạ tầng. Chọn dịch vụ nào?
3. Ứng dụng cần cài phần mềm chạy nền trên Linux. Chọn compute nào?

### Lab đề xuất

- Truy cập AWS Console.
- Mở trang Lambda, EC2, Elastic Beanstalk.
- Ghi lại mỗi dịch vụ dùng để làm gì bằng 3 dòng ngắn.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
