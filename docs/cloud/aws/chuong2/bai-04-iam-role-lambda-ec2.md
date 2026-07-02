# Bài 4. IAM Role cho Lambda và EC2

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu IAM Role dùng trong Lambda và EC2 như thế nào.
- Biết Lambda Execution Role là gì.
- Biết EC2 Instance Profile là gì.
- Biết cách tránh hard-code credentials trong ứng dụng.

---

## 2. Vì sao service AWS cần IAM Role?

Ứng dụng thường cần gọi các AWS service khác.

Ví dụ:

- Lambda cần ghi DynamoDB.
- Lambda cần đọc secret từ Secrets Manager.
- EC2 cần lấy file từ S3.
- EC2 cần gửi log lên CloudWatch.

Nếu không dùng IAM Role, developer có thể nghĩ tới cách lưu access key trong code hoặc file `.env`.

Đây là cách không an toàn.

Cách đúng là:

```text
Gán IAM Role cho service AWS.
Service sẽ nhận temporary credentials tự động.
```

---

## 3. Lambda Execution Role

Lambda Execution Role là IAM Role được gán cho Lambda function.

Role này quyết định Lambda được phép làm gì.

Ví dụ:

```text
Lambda createBooking
  -> Execution Role
    -> Cho phép ghi log CloudWatch
    -> Cho phép PutItem vào DynamoDB table Orders
```

Nếu Lambda thiếu quyền, bạn sẽ thấy lỗi:

```text
AccessDeniedException
```

---

## 4. Quyền ghi log cho Lambda

Lambda thường cần quyền ghi log ra CloudWatch Logs.

Policy phổ biến:

```json
{
  "Effect": "Allow",
  "Action": [
    "logs:CreateLogGroup",
    "logs:CreateLogStream",
    "logs:PutLogEvents"
  ],
  "Resource": "*"
}
```

Nếu thiếu quyền này, Lambda có thể chạy nhưng không ghi log được.

---

## 5. Lambda gọi DynamoDB

Tình huống:

```text
Lambda cần ghi booking vào DynamoDB table Orders.
```

Policy nên có:

```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:PutItem"
  ],
  "Resource": "arn:aws:dynamodb:ap-southeast-1:123456789012:table/Orders"
}
```

Sau đó attach policy vào Lambda Execution Role.

---

## 6. EC2 Instance Role và Instance Profile

EC2 không attach role trực tiếp theo cách giống Lambda.

Với EC2, role được gắn thông qua **Instance Profile**.

Trong đề thi, nếu thấy:

```text
Application running on EC2 needs access to S3 securely
```

Đáp án thường là:

```text
Attach IAM Role to EC2 instance using an instance profile.
```

---

## 7. EC2 truy cập S3 an toàn

Tình huống:

```text
Ứng dụng chạy trên EC2 cần đọc file từ S3 bucket private.
```

Cách đúng:

1. Tạo IAM Role cho EC2.
2. Gán policy `s3:GetObject` cho bucket cần đọc.
3. Attach role vào EC2 instance profile.
4. App dùng AWS SDK, không cần hard-code credentials.

---

## 8. Vì sao không hard-code credentials?

Không nên lưu credentials trong:

- Source code
- GitHub repository
- File `.env` production
- Docker image
- Frontend JavaScript
- Mobile app

Vì nếu credentials bị lộ, người khác có thể truy cập tài nguyên AWS của bạn.

---

## 9. Temporary Credentials

Khi dùng IAM Role, AWS cấp temporary credentials tự động cho service.

Đặc điểm:

- Có thời hạn.
- Được rotate tự động.
- Không cần lưu access key lâu dài.
- An toàn hơn hard-code credentials.

---

## 10. Kiến thức thi cần nhớ

| Tình huống | Đáp án nên nghĩ tới |
|---|---|
| Lambda cần gọi DynamoDB | Lambda Execution Role |
| Lambda cần đọc Secrets Manager | Lambda Execution Role |
| Lambda cần ghi log | CloudWatch Logs permission |
| EC2 cần truy cập S3 | EC2 IAM Role / Instance Profile |
| Tránh hard-coded credentials | IAM Role |
| Credentials cần tự động rotate | IAM Role / Temporary Credentials |

---

## 11. Bẫy thường gặp

### Bẫy 1. Tạo IAM User cho Lambda

Không nên tạo IAM User và lưu access key cho Lambda.

Lambda nên dùng Execution Role.

### Bẫy 2. Lưu access key trong EC2

Không nên lưu access key trong file config trên EC2.

EC2 nên dùng Instance Profile.

### Bẫy 3. Lambda có role nhưng role thiếu policy

Có role không có nghĩa là đủ quyền.

Role phải được gán policy phù hợp.

---

## 12. Lab thực hành

### Lab 1. Lambda ghi log

Yêu cầu:

- Tạo Lambda function.
- Gán execution role có quyền ghi CloudWatch Logs.
- In ra log test.

### Lab 2. Lambda ghi DynamoDB

Yêu cầu:

- Tạo DynamoDB table `Orders`.
- Gán quyền `dynamodb:PutItem` cho Lambda role.
- Lambda ghi một item test.

### Lab 3. EC2 đọc S3

Yêu cầu:

- Tạo S3 bucket private.
- Tạo IAM Role cho EC2.
- Cho phép `s3:GetObject`.
- SSH vào EC2 và test AWS CLI đọc object.

---

## 13. Câu hỏi ôn tập

1. Lambda Execution Role là gì?
2. EC2 Instance Profile là gì?
3. Vì sao Lambda không nên dùng access key hard-code?
4. EC2 cần đọc S3 thì nên cấu hình gì?
5. Lambda cần ghi log cần quyền nào?
6. Lambda bị AccessDenied khi gọi DynamoDB thì kiểm tra gì đầu tiên?
7. Temporary credentials có lợi ích gì?
8. Có nên lưu AWS credentials trong frontend không?
9. IAM Role khác IAM User như thế nào trong ngữ cảnh service AWS?
10. Trong đề thi, keyword “avoid hard-coded credentials” thường gợi ý đáp án gì?

---

## 14. Bài tập về nhà

- Vẽ sơ đồ Lambda -> IAM Role -> DynamoDB.
- Vẽ sơ đồ EC2 -> Instance Profile -> S3.
- Viết policy tối thiểu cho Lambda đọc secret từ Secrets Manager.
