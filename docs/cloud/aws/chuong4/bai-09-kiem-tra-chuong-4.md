# Bài 9. Kiểm tra Chương 4 - API Gateway và Serverless API

## 1. Mục tiêu kiểm tra

Bài kiểm tra này giúp đánh giá mức độ nắm kiến thức của học viên về:

- API Gateway
- REST API và HTTP API
- Lambda proxy integration
- Stage và deployment
- CORS
- API Key, Usage Plan và Throttling
- Authentication cho API Gateway
- Debug lỗi API Gateway

---

## 2. Hình thức

- Dạng bài: Trắc nghiệm
- Số câu: 30 câu
- Mỗi câu có 4 đáp án A, B, C, D
- Chỉ có 1 đáp án đúng nhất

---

## 3. Câu hỏi trắc nghiệm

### Câu 1

Dịch vụ nào thường dùng để expose Lambda function thành HTTP API?

A. Amazon S3  
B. Amazon API Gateway  
C. Amazon CloudWatch  
D. Amazon SNS  

### Câu 2

Trong kiến trúc serverless API phổ biến, luồng nào đúng nhất?

A. Client -> S3 -> Lambda -> IAM  
B. Client -> API Gateway -> Lambda -> DynamoDB  
C. Client -> CloudWatch -> Lambda -> SQS  
D. Client -> IAM -> API Gateway -> CloudTrail  

### Câu 3

REST API trong API Gateway thường phù hợp khi cần tính năng nào?

A. API Key và Usage Plan  
B. Chỉ lưu file tĩnh  
C. Chạy container  
D. Quản lý DNS  

### Câu 4

HTTP API thường có đặc điểm nào?

A. Phức tạp hơn REST API  
B. Đơn giản hơn và thường có chi phí thấp hơn REST API  
C. Chỉ dùng cho database  
D. Không thể tích hợp Lambda  

### Câu 5

Trong route `POST /orders`, `POST` là gì?

A. Resource  
B. Method  
C. Stage  
D. Region  

### Câu 6

Trong route `GET /bookings/{bookingId}`, `/bookings/{bookingId}` là gì?

A. Resource  
B. Method  
C. API Key  
D. Authorizer  

### Câu 7

Integration trong API Gateway có nghĩa là gì?

A. Môi trường deploy API  
B. Backend mà API Gateway gọi sau khi nhận request  
C. Tên tài khoản AWS  
D. Công cụ monitor log  

### Câu 8

Lambda proxy integration truyền request vào Lambda thông qua biến nào?

A. context only  
B. event  
C. policy  
D. role  

### Câu 9

Khi dùng Lambda proxy integration, field `body` trong response nên là gì?

A. Object trực tiếp  
B. String  
C. IAM Role  
D. Stage variable  

### Câu 10

Lỗi 502 Bad Gateway trong API Gateway + Lambda thường do nguyên nhân nào?

A. Lambda trả response sai format  
B. User nhập sai password AWS  
C. S3 bucket chưa bật versioning  
D. DynamoDB chưa có GSI  

### Câu 11

Stage trong API Gateway dùng để làm gì?

A. Đại diện cho môi trường deploy API  
B. Lưu file upload  
C. Tạo IAM user  
D. Mã hóa dữ liệu  

### Câu 12

Ví dụ nào là stage hợp lý?

A. dev, staging, prod  
B. jpg, png, pdf  
C. user, group, role  
D. read, write, delete  

### Câu 13

Sau khi thay đổi cấu hình REST API nhưng client chưa thấy thay đổi, bước nào cần kiểm tra?

A. Đã deploy API ra stage chưa  
B. Đã tạo S3 bucket chưa  
C. Đã bật MFA chưa  
D. Đã tạo SNS topic chưa  

### Câu 14

Stage variables dùng để làm gì?

A. Lưu biến cấu hình riêng cho từng stage  
B. Lưu password root account  
C. Tự động scale DynamoDB  
D. Tạo SSL certificate  

### Câu 15

CORS là viết tắt của gì?

A. Cloud Object Runtime Service  
B. Cross-Origin Resource Sharing  
C. Compute Operation Retry System  
D. Code Output Routing Service  

### Câu 16

Khi browser chặn frontend gọi API khác domain, keyword nên nghĩ tới là gì?

A. CORS  
B. DLQ  
C. GSI  
D. KMS  

### Câu 17

Header nào thường dùng để cho phép origin gọi API?

A. Access-Control-Allow-Origin  
B. Content-Length  
C. X-Amz-Date  
D. Cache-Control-Max-Age  

### Câu 18

Preflight request thường dùng HTTP method nào?

A. GET  
B. POST  
C. OPTIONS  
D. DELETE  

### Câu 19

API Key trong API Gateway chủ yếu dùng để làm gì?

A. Định danh client và áp dụng Usage Plan  
B. Đăng nhập user bằng email/password  
C. Mã hóa dữ liệu DynamoDB  
D. Tạo Lambda version  

### Câu 20

API Key có thay thế Cognito để authentication user không?

A. Có, API Key là authentication mạnh nhất  
B. Không, API Key không thay thế authentication user  
C. Có, nếu API chạy với Lambda  
D. Chỉ có trong S3  

### Câu 21

Usage Plan trong API Gateway dùng để cấu hình gì?

A. Rate limit và quota  
B. Lambda memory  
C. DynamoDB partition key  
D. S3 lifecycle  

### Câu 22

Lỗi 429 Too Many Requests thường liên quan đến gì?

A. Throttling  
B. CORS  
C. Lambda layer  
D. CloudFormation drift  

### Câu 23

Nếu đề nói “quota per client”, nên nghĩ tới dịch vụ/tính năng nào?

A. API Gateway Usage Plan  
B. S3 Versioning  
C. X-Ray  
D. DynamoDB TTL  

### Câu 24

Nếu API cần xác thực user bằng JWT token từ Cognito, nên dùng gì?

A. Cognito Authorizer  
B. API Key  
C. S3 Bucket Policy  
D. CloudWatch Alarm  

### Câu 25

Nếu API cần custom authentication logic, nên dùng gì?

A. Lambda Authorizer  
B. S3 Lifecycle  
C. DynamoDB Stream  
D. CloudTrail  

### Câu 26

IAM Authorization trong API Gateway phù hợp nhất khi client dùng gì?

A. AWS credentials và SigV4  
B. File ảnh JPEG  
C. S3 pre-signed URL  
D. DynamoDB TTL  

### Câu 27

Lỗi 401 Unauthorized thường liên quan đến gì?

A. Token hoặc authorizer  
B. File quá lớn  
C. DynamoDB hot partition  
D. S3 storage class  

### Câu 28

Lỗi 404 Not Found trong API Gateway có thể do nguyên nhân nào?

A. Sai path hoặc sai stage  
B. KMS key rotation  
C. Lambda memory quá cao  
D. SNS topic có nhiều subscriber  

### Câu 29

Nếu API xử lý lâu gây timeout, kiến trúc nào thường phù hợp hơn?

A. Chuyển xử lý lâu sang async bằng SQS  
B. Thêm API Key  
C. Tắt CloudWatch Logs  
D. Xóa stage prod  

### Câu 30

Công cụ nào nên dùng để xem log khi debug API Gateway và Lambda?

A. CloudWatch Logs  
B. IAM Group  
C. S3 ACL  
D. Route 53  

---

## 4. Đáp án

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | B |
| 3 | A |
| 4 | B |
| 5 | B |
| 6 | A |
| 7 | B |
| 8 | B |
| 9 | B |
| 10 | A |
| 11 | A |
| 12 | A |
| 13 | A |
| 14 | A |
| 15 | B |
| 16 | A |
| 17 | A |
| 18 | C |
| 19 | A |
| 20 | B |
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

---

## 5. Thang đánh giá

| Số câu đúng | Đánh giá |
|---:|---|
| 0 - 17 | Chưa đạt, cần học lại chương |
| 18 - 21 | Nắm cơ bản, cần luyện thêm tình huống |
| 22 - 25 | Khá, có thể chuyển chương tiếp theo |
| 26 - 30 | Tốt, nắm chắc Chương 4 |
