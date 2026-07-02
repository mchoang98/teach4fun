# Bài 2. IAM Policy JSON

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Đọc hiểu cấu trúc IAM Policy JSON.
- Hiểu các thành phần: Version, Statement, Effect, Action, Resource, Condition.
- Biết phân biệt Allow và Deny.
- Biết viết policy đơn giản cho S3, Lambda, DynamoDB.

---

## 2. IAM Policy JSON là gì?

IAM Policy là một file JSON mô tả quyền truy cập trong AWS.

Ví dụ:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

Policy này có nghĩa là:

```text
Cho phép lấy object từ bucket my-bucket.
```

---

## 3. Thành phần Version

```json
"Version": "2012-10-17"
```

Đây là version của ngôn ngữ policy AWS.

Trong hầu hết trường hợp, dùng:

```text
2012-10-17
```

Đừng nhầm đây là ngày tạo policy.

---

## 4. Thành phần Statement

`Statement` là danh sách các luật quyền.

Một policy có thể có một hoặc nhiều statement.

Ví dụ:

```json
"Statement": [
  {
    "Effect": "Allow",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket/*"
  },
  {
    "Effect": "Allow",
    "Action": "s3:ListBucket",
    "Resource": "arn:aws:s3:::my-bucket"
  }
]
```

---

## 5. Thành phần Effect

Effect có 2 giá trị chính:

```text
Allow
Deny
```

Ví dụ Allow:

```json
"Effect": "Allow"
```

Ví dụ Deny:

```json
"Effect": "Deny"
```

Điểm rất quan trọng trong đề thi:

```text
Explicit Deny luôn thắng Allow.
```

---

## 6. Thành phần Action

Action mô tả hành động được phép hoặc bị từ chối.

Ví dụ:

```json
"Action": "s3:GetObject"
```

Một số action thường gặp:

| Service | Action ví dụ |
|---|---|
| S3 | s3:GetObject, s3:PutObject, s3:ListBucket |
| DynamoDB | dynamodb:GetItem, dynamodb:PutItem, dynamodb:Query |
| Lambda | lambda:InvokeFunction |
| CloudWatch Logs | logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents |

Có thể dùng danh sách action:

```json
"Action": [
  "dynamodb:GetItem",
  "dynamodb:PutItem",
  "dynamodb:Query"
]
```

---

## 7. Thành phần Resource

Resource chỉ định tài nguyên AWS mà policy áp dụng.

Ví dụ S3 bucket:

```json
"Resource": "arn:aws:s3:::my-bucket"
```

Ví dụ object trong bucket:

```json
"Resource": "arn:aws:s3:::my-bucket/*"
```

Ví dụ DynamoDB table:

```json
"Resource": "arn:aws:dynamodb:ap-southeast-1:123456789012:table/Orders"
```

---

## 8. ARN là gì?

ARN là viết tắt của **Amazon Resource Name**.

ARN dùng để định danh tài nguyên AWS.

Cấu trúc tổng quát:

```text
arn:partition:service:region:account-id:resource
```

Ví dụ:

```text
arn:aws:lambda:ap-southeast-1:123456789012:function:booking-api
```

---

## 9. Thành phần Condition

Condition dùng để giới hạn quyền theo điều kiện.

Ví dụ chỉ cho phép truy cập nếu dùng HTTPS:

```json
{
  "Effect": "Deny",
  "Action": "s3:*",
  "Resource": [
    "arn:aws:s3:::my-bucket",
    "arn:aws:s3:::my-bucket/*"
  ],
  "Condition": {
    "Bool": {
      "aws:SecureTransport": "false"
    }
  }
}
```

Policy này có nghĩa là:

```text
Từ chối mọi truy cập S3 nếu request không dùng HTTPS.
```

---

## 10. Ví dụ policy cho Lambda ghi DynamoDB

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:Query"
      ],
      "Resource": "arn:aws:dynamodb:ap-southeast-1:123456789012:table/Orders"
    }
  ]
}
```

Policy này phù hợp khi Lambda cần ghi và đọc dữ liệu trong bảng `Orders`.

---

## 11. Ví dụ policy cho Lambda ghi log CloudWatch

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
```

Đây là quyền thường cần cho Lambda ghi log.

---

## 12. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| JSON permission document | IAM Policy |
| Allow access to specific resource | Resource ARN |
| Explicit deny | Deny thắng Allow |
| Restrict by condition | Condition |
| Read only access | Action Get/List |
| Write access | Action Put/Update/Delete |

---

## 13. Bẫy thường gặp

### Bẫy 1. Resource sai ARN

Nếu ARN sai, policy nhìn có vẻ đúng nhưng thực tế không hoạt động.

### Bẫy 2. Thiếu quyền ListBucket với S3

Muốn list object trong bucket cần:

```text
s3:ListBucket trên bucket ARN
```

Muốn get object cần:

```text
s3:GetObject trên object ARN /*
```

### Bẫy 3. Dùng Resource `*` quá rộng

Trong đề thi, nếu yêu cầu bảo mật tốt nhất, nên giới hạn Resource cụ thể.

---

## 14. Lab thực hành

### Lab 1. Tạo policy chỉ đọc S3

Yêu cầu:

- Cho phép `s3:ListBucket`.
- Cho phép `s3:GetObject`.
- Chỉ áp dụng cho một bucket cụ thể.

### Lab 2. Tạo policy cho Lambda gọi DynamoDB

Yêu cầu:

- Cho phép `dynamodb:PutItem`.
- Cho phép `dynamodb:GetItem`.
- Chỉ áp dụng cho table `Orders`.

### Lab 3. Test lỗi AccessDenied

Yêu cầu:

- Gọi một action chưa được cấp quyền.
- Quan sát lỗi `AccessDenied`.
- Thêm quyền đúng và test lại.

---

## 15. Câu hỏi ôn tập

1. IAM Policy dùng định dạng gì?
2. `Effect` có những giá trị nào?
3. `Action` dùng để làm gì?
4. `Resource` dùng để làm gì?
5. ARN là gì?
6. `Condition` dùng khi nào?
7. Explicit Deny có thắng Allow không?
8. Muốn Lambda ghi DynamoDB cần action nào?
9. Muốn Lambda ghi log cần quyền nào?
10. Vì sao không nên dùng Resource `*` quá nhiều?

---

## 16. Bài tập về nhà

- Viết policy cho phép đọc một DynamoDB table.
- Viết policy cho phép upload object vào một S3 bucket.
- Ghi lại 10 action AWS thường gặp trong DVA-C02.
