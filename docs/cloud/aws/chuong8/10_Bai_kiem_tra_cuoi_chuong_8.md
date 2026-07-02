# Bài 10. Bài kiểm tra cuối Chương 8

# Deployment, CI/CD và Infrastructure as Code

## 1. Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 35 câu
- Thời gian đề xuất: 45 phút
- Mục tiêu: Đánh giá khả năng hiểu và phân tích tình huống về Deployment, CI/CD và Infrastructure as Code trong AWS Developer Associate.

---

## 2. Hướng dẫn làm bài

Mỗi câu có 4 đáp án A, B, C, D. Chọn 1 đáp án đúng nhất.

Nên làm bài theo quy trình:

```text
Đọc keyword
-> Xác định service liên quan
-> Loại đáp án sai
-> Chọn giải pháp đúng nhất theo AWS best practices
```

---

# Phần A. Câu hỏi trắc nghiệm

## Câu 1

Dịch vụ AWS nào phù hợp nhất để quản lý infrastructure bằng code?

A. CodeBuild  
B. CloudFormation  
C. CodeDeploy  
D. CloudWatch  

## Câu 2

Trong CloudFormation, tập hợp các resource được tạo từ một template gọi là gì?

A. Artifact  
B. Stage  
C. Stack  
D. Build project  

## Câu 3

Thành phần nào trong CloudFormation dùng để truyền giá trị động vào template?

A. Output  
B. Parameter  
C. Event  
D. Alias  

## Câu 4

Team muốn xem trước resource nào sẽ bị thêm, sửa hoặc xóa trước khi update stack. Nên dùng gì?

A. Drift Detection  
B. Change Set  
C. CloudWatch Logs  
D. CodeBuild Report  

## Câu 5

Team muốn phát hiện resource đã bị sửa thủ công ngoài CloudFormation template. Nên dùng gì?

A. Change Set  
B. Drift Detection  
C. CodeDeploy  
D. SAM local invoke  

## Câu 6

AWS SAM phù hợp nhất với loại ứng dụng nào?

A. Big Data analytics  
B. Serverless application  
C. On-premises database  
D. Machine Learning training cluster  

## Câu 7

SAM được xây dựng dựa trên dịch vụ nào?

A. CloudFormation  
B. CloudTrail  
C. CodeCommit  
D. CloudFront  

## Câu 8

Lệnh nào dùng để build ứng dụng SAM?

A. sam deploy  
B. sam build  
C. sam rollback  
D. sam publish  

## Câu 9

Lệnh nào dùng để deploy ứng dụng SAM lên AWS?

A. sam build  
B. sam deploy  
C. sam test  
D. sam package-only  

## Câu 10

Developer muốn test Lambda local bằng SAM. Nên dùng lệnh nào?

A. sam local invoke  
B. sam cloud invoke  
C. sam deploy local  
D. sam build cloud  

## Câu 11

Dịch vụ nào dùng để build source code, chạy test và tạo artifact?

A. CodeBuild  
B. CodeDeploy  
C. CodePipeline  
D. CloudFormation  

## Câu 12

File nào định nghĩa các command build cho CodeBuild?

A. appspec.yml  
B. buildspec.yml  
C. template.yaml  
D. serverless.json  

## Câu 13

CodeBuild cần quyền ghi artifact vào S3. Thành phần nào cần được cấp quyền phù hợp?

A. Lambda alias  
B. CodeBuild service role  
C. API Gateway stage  
D. CloudWatch dashboard  

## Câu 14

Dịch vụ nào điều phối toàn bộ quy trình source -> build -> deploy?

A. CodeBuild  
B. CodePipeline  
C. CodeDeploy  
D. X-Ray  

## Câu 15

Một pipeline cần bước duyệt thủ công trước khi deploy production. Nên dùng gì?

A. Manual approval action  
B. Drift Detection  
C. Lambda Layer  
D. SQS Visibility Timeout  

## Câu 16

Trong CodePipeline, stage nào thường lấy source code từ GitHub hoặc CodeCommit?

A. Build stage  
B. Deploy stage  
C. Source stage  
D. Approval stage  

## Câu 17

Trong CodePipeline, build stage thường dùng dịch vụ nào?

A. CodeBuild  
B. CodeDeploy  
C. Cognito  
D. KMS  

## Câu 18

Dịch vụ nào phù hợp nhất để deploy application và hỗ trợ rollback?

A. CodeDeploy  
B. CodeBuild  
C. CodeCommit  
D. CloudTrail  

## Câu 19

File AppSpec liên quan nhiều nhất đến dịch vụ nào?

A. CodeBuild  
B. CodeDeploy  
C. CloudWatch  
D. Cognito  

## Câu 20

Muốn deploy Lambda version mới cho một phần nhỏ traffic trước, nên dùng gì?

A. CodeDeploy + Lambda Alias  
B. S3 Lifecycle  
C. DynamoDB TTL  
D. CloudTrail Event History  

## Câu 21

Lambda production nên gọi qua thành phần nào để dễ traffic shifting và rollback?

A. Lambda Layer  
B. Lambda Alias  
C. Lambda Environment Variable  
D. Lambda Event Object  

## Câu 22

Lambda version có đặc điểm nào đúng?

A. Luôn thay đổi khi update `$LATEST`  
B. Là snapshot cố định của function  
C. Chỉ dùng cho CloudWatch  
D. Không thể dùng với alias  

## Câu 23

Strategy nào deploy toàn bộ bản mới ngay lập tức?

A. Canary  
B. Linear  
C. All-at-once  
D. Blue/Green  

## Câu 24

Strategy nào dùng hai môi trường cũ và mới riêng biệt?

A. Blue/Green  
B. Rolling  
C. All-at-once  
D. Linear  

## Câu 25

Strategy nào đưa một phần nhỏ traffic sang version mới trước?

A. All-at-once  
B. Canary  
C. Rolling  
D. Immutable  

## Câu 26

Strategy nào tăng traffic theo từng bước đều nhau?

A. Linear  
B. Blue/Green  
C. All-at-once  
D. Drift Detection  

## Câu 27

Strategy nào cập nhật từng phần của fleet hiện tại?

A. Rolling  
B. Blue/Green  
C. Canary  
D. CloudFormation  

## Câu 28

Một deployment Lambda cần rollback tự động khi error tăng. Nên kết hợp gì?

A. CodeDeploy và CloudWatch Alarm  
B. S3 và CloudFront  
C. DynamoDB và DAX  
D. Cognito và IAM User  

## Câu 29

CloudWatch Alarm trong deployment Lambda thường dùng để làm gì?

A. Tự động tăng memory Lambda  
B. Kích hoạt rollback khi metric xấu  
C. Tạo artifact build  
D. Tạo IAM role mới  

## Câu 30

PreTraffic hook trong CodeDeploy dùng để làm gì?

A. Kiểm tra version mới trước khi nhận traffic  
B. Xóa toàn bộ stack  
C. Tạo DynamoDB GSI  
D. Gửi email marketing  

## Câu 31

Keyword “build artifact” thường gợi ý dịch vụ nào?

A. CodeBuild  
B. Cognito  
C. EventBridge  
D. X-Ray  

## Câu 32

Keyword “infrastructure as code” thường gợi ý dịch vụ nào?

A. CloudFormation  
B. CloudWatch Logs  
C. SQS  
D. SNS  

## Câu 33

Keyword “automate release pipeline” thường gợi ý dịch vụ nào?

A. CodePipeline  
B. CodeBuild  
C. IAM  
D. KMS  

## Câu 34

Keyword “serverless deployment” thường gợi ý công cụ nào?

A. AWS SAM  
B. AWS Cognito  
C. AWS X-Ray  
D. AWS Shield  

## Câu 35

Keyword “detect manual changes in stack resources” thường gợi ý tính năng nào?

A. Change Set  
B. Drift Detection  
C. CodeDeploy Hook  
D. Lambda Alias  

---

# Phần B. Đáp án

| Câu | Đáp án |
|---:|:---:|
| 1 | B |
| 2 | C |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | B |
| 7 | A |
| 8 | B |
| 9 | B |
| 10 | A |
| 11 | A |
| 12 | B |
| 13 | B |
| 14 | B |
| 15 | A |
| 16 | C |
| 17 | A |
| 18 | A |
| 19 | B |
| 20 | A |
| 21 | B |
| 22 | B |
| 23 | C |
| 24 | A |
| 25 | B |
| 26 | A |
| 27 | A |
| 28 | A |
| 29 | B |
| 30 | A |
| 31 | A |
| 32 | A |
| 33 | A |
| 34 | A |
| 35 | B |

---

# Phần C. Thang đánh giá

| Số câu đúng | Tỷ lệ | Đánh giá |
|---:|---:|---|
| 0 - 20 | Dưới 60% | Chưa đạt, cần học lại chương |
| 21 - 24 | 60% - 70% | Nắm cơ bản, cần luyện thêm câu tình huống |
| 25 - 28 | 70% - 80% | Khá, có thể chuyển chương tiếp theo |
| 29 - 32 | 80% - 90% | Tốt, đạt yêu cầu chương |
| 33 - 35 | Trên 90% | Rất tốt, sẵn sàng làm đề deployment trong DVA-C02 |

---

# Phần D. Gợi ý ôn lại nếu sai nhiều

Nếu sai nhiều câu 1-5:

- Ôn lại CloudFormation, template, stack, Change Set, Drift Detection.

Nếu sai nhiều câu 6-10:

- Ôn lại AWS SAM, `sam build`, `sam deploy`, `sam local invoke`.

Nếu sai nhiều câu 11-17:

- Ôn lại CodeBuild và CodePipeline.

Nếu sai nhiều câu 18-22:

- Ôn lại CodeDeploy, Lambda version, Lambda alias.

Nếu sai nhiều câu 23-30:

- Ôn lại deployment strategies: All-at-once, Rolling, Immutable, Blue/Green, Canary, Linear.

Nếu sai nhiều câu 31-35:

- Ôn lại bảng keyword tiếng Anh của chương.
