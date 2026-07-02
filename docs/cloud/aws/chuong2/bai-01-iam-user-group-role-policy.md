# Bài 1. IAM User, Group, Role và Policy

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu IAM là gì.
- Phân biệt được IAM User, IAM Group, IAM Role và IAM Policy.
- Biết khi nào nên dùng User, Group, Role hoặc Policy.
- Hiểu vì sao IAM rất quan trọng trong kỳ thi AWS Developer Associate.

---

## 2. Giải thích dễ hiểu

IAM là viết tắt của **Identity and Access Management**.

Hiểu đơn giản, IAM là hệ thống quản lý:

- Ai được đăng nhập?
- Ai được dùng dịch vụ nào?
- Ai được làm hành động gì?
- Ứng dụng nào được quyền truy cập tài nguyên AWS?

Ví dụ thực tế:

- Một developer cần quyền deploy Lambda.
- Một Lambda cần quyền đọc DynamoDB.
- Một EC2 cần quyền lấy file từ S3.
- Một nhân viên chỉ được xem log, không được xóa resource.

Tất cả các tình huống trên đều liên quan đến IAM.

---

## 3. IAM User

IAM User đại diện cho một người dùng hoặc một tài khoản kỹ thuật trong AWS.

Ví dụ:

- Developer A
- Tester B
- Admin C
- Một tài khoản dùng để chạy script local

IAM User có thể dùng:

- Username/password để đăng nhập AWS Console.
- Access key/secret key để gọi AWS CLI hoặc AWS SDK.

Tuy nhiên, trong production, không nên lạm dụng access key lâu dài.

---

## 4. IAM Group

IAM Group là nhóm chứa nhiều IAM User.

Ví dụ:

- Nhóm `Developers`
- Nhóm `Testers`
- Nhóm `ReadOnlyUsers`
- Nhóm `Admins`

Thay vì gán quyền cho từng user, ta gán policy cho group.

Ví dụ:

```text
Developers Group
  -> Có quyền deploy Lambda
  -> Có quyền đọc CloudWatch Logs
  -> Không có quyền xóa database
```

Khi thêm user vào group, user đó sẽ nhận quyền từ group.

---

## 5. IAM Policy

IAM Policy là tài liệu JSON mô tả quyền được phép hoặc bị từ chối.

Ví dụ policy cho phép đọc S3:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

Policy trả lời câu hỏi:

```text
Được phép làm gì?
Trên tài nguyên nào?
Trong điều kiện nào?
```

---

## 6. IAM Role

IAM Role là danh tính có quyền nhưng không gắn cố định với một người dùng cụ thể.

Role thường được dùng cho:

- Lambda function
- EC2 instance
- ECS task
- CodeBuild project
- Cross-account access
- Temporary credentials

Ví dụ:

```text
Lambda cần ghi dữ liệu vào DynamoDB
-> Tạo IAM Role
-> Gán policy cho phép dynamodb:PutItem
-> Gán role đó cho Lambda
```

Đây là cách an toàn hơn so với việc hard-code access key trong code.

---

## 7. So sánh nhanh

| Thành phần | Dùng cho ai/cái gì? | Ví dụ |
|---|---|---|
| IAM User | Người dùng hoặc script | Developer đăng nhập Console |
| IAM Group | Nhóm nhiều user | Developers, Admins |
| IAM Policy | Bộ quyền | Cho phép đọc S3 |
| IAM Role | Service hoặc truy cập tạm thời | Lambda gọi DynamoDB |

---

## 8. Kiến thức thi cần nhớ

Trong đề thi DVA-C02, nếu thấy các tình huống sau:

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Application running on EC2 needs access to S3 | EC2 IAM Role / Instance Profile |
| Lambda needs access to DynamoDB | Lambda Execution Role |
| Avoid hard-coded credentials | IAM Role |
| Least privilege | IAM Policy |
| Cross-account access | IAM Role + AssumeRole |
| Programmatic access | AWS CLI / SDK / Access Key hoặc Role |

---

## 9. Bẫy thường gặp

### Bẫy 1. Dùng access key trong code

Sai trong production vì dễ bị lộ credentials.

Cách đúng thường là dùng IAM Role.

### Bẫy 2. Cấp quyền AdministratorAccess cho app

Không nên cấp quyền quá rộng.

Cách đúng là cấp quyền tối thiểu cần thiết.

### Bẫy 3. Nhầm User và Role

- User thường dùng cho con người.
- Role thường dùng cho AWS service hoặc truy cập tạm thời.

---

## 10. Lab thực hành

### Lab 1. Tạo IAM User

Yêu cầu:

- Tạo user tên `developer-test`.
- Cho phép đăng nhập AWS Console.
- Không cấp quyền admin.

### Lab 2. Tạo IAM Group

Yêu cầu:

- Tạo group tên `Developers`.
- Gán policy `ReadOnlyAccess`.
- Thêm user `developer-test` vào group.

### Lab 3. Tạo IAM Role cho Lambda

Yêu cầu:

- Tạo role cho Lambda.
- Gán quyền ghi log ra CloudWatch.
- Gán role này cho một Lambda function test.

---

## 11. Câu hỏi ôn tập

1. IAM dùng để làm gì?
2. IAM User khác IAM Role ở điểm nào?
3. IAM Group có tác dụng gì?
4. IAM Policy có dạng gì?
5. Vì sao Lambda nên dùng IAM Role thay vì access key?
6. Khi app chạy trên EC2 cần truy cập S3, nên dùng gì?
7. Least privilege nghĩa là gì?
8. Vì sao không nên dùng root user hằng ngày?
9. Khi nào cần dùng IAM Group?
10. Khi nào cần dùng IAM Role?

---

## 12. Bài tập về nhà

- Tạo bảng so sánh User, Group, Role, Policy.
- Viết 5 tình huống thực tế cần dùng IAM Role.
- Ghi nhớ các keyword: `least privilege`, `execution role`, `instance profile`, `hard-coded credentials`, `cross-account access`.
