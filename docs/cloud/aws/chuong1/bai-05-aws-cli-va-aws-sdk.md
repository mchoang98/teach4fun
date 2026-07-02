# Bài 5. AWS CLI và AWS SDK

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS CLI là gì.
- Hiểu AWS SDK là gì.
- Biết programmatic access là gì.
- Biết cách cấu hình AWS CLI profile cơ bản.
- Biết khi nào dùng CLI, khi nào dùng SDK.

---

## 2. AWS Console, CLI và SDK khác nhau thế nào?

Có nhiều cách làm việc với AWS.

| Cách dùng | Mục đích |
|---|---|
| AWS Console | Thao tác bằng giao diện web |
| AWS CLI | Thao tác bằng dòng lệnh |
| AWS SDK | Viết code gọi AWS service |

Ví dụ:

- Người mới học thường bắt đầu bằng AWS Console.
- Developer/DevOps thường dùng AWS CLI để script hoặc kiểm tra nhanh.
- Ứng dụng thật thường dùng AWS SDK để gọi service từ code.

---

## 3. AWS CLI là gì?

AWS CLI là công cụ dòng lệnh để tương tác với AWS.

CLI là viết tắt của **Command Line Interface**.

Ví dụ command:

```bash
aws s3 ls
```

Lệnh trên dùng để liệt kê bucket S3 mà credentials hiện tại có quyền xem.

Ví dụ gọi Lambda:

```bash
aws lambda list-functions
```

---

## 4. AWS SDK là gì?

AWS SDK là thư viện lập trình giúp code gọi AWS service.

SDK là viết tắt của **Software Development Kit**.

AWS có SDK cho nhiều ngôn ngữ:

- JavaScript / TypeScript
- Python
- Java
- .NET
- Go
- PHP
- Ruby

Ví dụ với JavaScript, app có thể dùng SDK để:

- Ghi item vào DynamoDB.
- Upload file lên S3.
- Gửi message vào SQS.
- Lấy secret từ Secrets Manager.

---

## 5. Programmatic Access là gì?

Programmatic access nghĩa là truy cập AWS bằng chương trình, script hoặc command line thay vì thao tác tay trên Console.

Ví dụ:

- Dùng AWS CLI để deploy.
- Dùng SDK trong Lambda để ghi DynamoDB.
- Dùng script để upload file lên S3.
- Dùng CI/CD pipeline để deploy app.

Keyword **programmatic access** trong đề thường liên quan đến:

- AWS CLI
- AWS SDK
- Access key
- IAM role
- Temporary credentials

---

## 6. Credentials là gì?

Credentials là thông tin xác thực để gọi AWS.

Có thể gồm:

- Access key ID
- Secret access key
- Session token

Tuy nhiên, trong môi trường AWS production, nên ưu tiên IAM Role thay vì access key lâu dài.

Ví dụ:

- Lambda dùng execution role.
- EC2 dùng instance role.
- CodeBuild dùng service role.

---

## 7. AWS Profile là gì?

AWS profile là cấu hình credentials và region trên máy local.

Một máy có thể có nhiều profile.

Ví dụ:

```bash
aws configure --profile dev
aws configure --profile staging
aws configure --profile production
```

Khi dùng command, có thể chỉ định profile:

```bash
aws s3 ls --profile dev
```

---

## 8. Cài AWS CLI

### Windows

Có thể tải AWS CLI installer từ trang chính thức của AWS.

Sau khi cài, kiểm tra:

```bash
aws --version
```

### macOS

Có thể cài bằng package installer hoặc Homebrew.

```bash
aws --version
```

### Linux

Cài theo hướng dẫn chính thức của AWS.

```bash
aws --version
```

---

## 9. Cấu hình AWS CLI cơ bản

Chạy lệnh:

```bash
aws configure
```

CLI sẽ hỏi:

```text
AWS Access Key ID
AWS Secret Access Key
Default region name
Default output format
```

Ví dụ region:

```text
ap-southeast-1
```

Ví dụ output:

```text
json
```

---

## 10. Một số lệnh CLI cơ bản

Kiểm tra danh tính hiện tại:

```bash
aws sts get-caller-identity
```

Liệt kê S3 bucket:

```bash
aws s3 ls
```

Liệt kê Lambda functions:

```bash
aws lambda list-functions
```

Liệt kê DynamoDB tables:

```bash
aws dynamodb list-tables
```

---

## 11. Khi nào dùng CLI?

Dùng CLI khi:

- Muốn kiểm tra nhanh resource.
- Muốn viết script tự động.
- Muốn deploy bằng command.
- Muốn debug quyền IAM.
- Muốn dùng trong CI/CD.

---

## 12. Khi nào dùng SDK?

Dùng SDK khi code ứng dụng cần gọi AWS service.

Ví dụ:

- Lambda dùng SDK ghi DynamoDB.
- Backend dùng SDK tạo pre-signed URL S3.
- Worker dùng SDK gửi message vào SQS.
- App dùng SDK đọc secret từ Secrets Manager.

---

## 13. Kiến thức thi cần nhớ

| Tình huống | Nên nghĩ tới |
|---|---|
| Dùng terminal gọi AWS | AWS CLI |
| Code gọi AWS service | AWS SDK |
| App trên EC2 cần gọi S3 | IAM Role |
| Lambda cần gọi DynamoDB | Execution Role |
| Script local cần gọi AWS | Access key hoặc profile |
| Tránh credentials lâu dài | IAM Role / temporary credentials |

---

## 14. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| programmatic access | CLI / SDK / access key / role |
| AWS CLI | Command line |
| AWS SDK | Code gọi AWS service |
| access key | Credentials dạng key |
| secret access key | Secret đi kèm access key |
| profile | Cấu hình credentials local |
| temporary credentials | Credentials tạm thời |
| get-caller-identity | Kiểm tra identity hiện tại |

---

## 15. Bẫy thường gặp

### Bẫy 1: Commit access key lên GitHub

Đây là lỗi nghiêm trọng. Không bao giờ commit credentials lên repository.

### Bẫy 2: Dùng access key lâu dài trong production

Nếu app chạy trên AWS, nên dùng IAM role.

### Bẫy 3: Cấu hình sai Region

Nhiều lỗi xảy ra vì tạo resource ở Region này nhưng CLI đang gọi Region khác.

---

## 16. Lab thực hành

### Lab 1. Cài AWS CLI

1. Cài AWS CLI.
2. Chạy:

```bash
aws --version
```

### Lab 2. Cấu hình profile

1. Chạy:

```bash
aws configure --profile learning
```

2. Kiểm tra identity:

```bash
aws sts get-caller-identity --profile learning
```

### Lab 3. Gọi thử service

```bash
aws s3 ls --profile learning
aws dynamodb list-tables --profile learning
```

---

## 17. Câu hỏi ôn tập

1. AWS CLI là gì?
2. AWS SDK là gì?
3. Programmatic access nghĩa là gì?
4. AWS profile dùng để làm gì?
5. Lệnh nào dùng để kiểm tra identity hiện tại?
6. Vì sao không nên commit access key lên GitHub?
7. Lambda nên dùng access key hay execution role?
8. EC2 nên dùng access key hay instance role?
9. CLI khác SDK thế nào?
10. Vì sao cần chú ý Region khi dùng CLI?

---

## 18. Tóm tắt bài học

AWS CLI dùng để thao tác AWS bằng dòng lệnh. AWS SDK dùng để viết code gọi AWS service.

Cần nhớ:

```text
Console = thao tác web
CLI = thao tác dòng lệnh
SDK = code gọi AWS service
Programmatic access = truy cập AWS bằng code/script/CLI
Production app = ưu tiên IAM Role thay vì hard-code credentials
```
