# Bài 4. IAM cơ bản cho Developer

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu IAM là gì.
- Phân biệt IAM User, Group, Role và Policy.
- Biết khi nào dùng IAM user.
- Biết khi nào dùng IAM role.
- Hiểu nguyên tắc cấp quyền cơ bản cho developer.

---

## 2. IAM là gì?

IAM là viết tắt của **Identity and Access Management**.

IAM dùng để quản lý:

- Ai được truy cập AWS?
- Được làm hành động gì?
- Được làm trên tài nguyên nào?
- Trong điều kiện nào?

IAM là một trong những phần quan trọng nhất của AWS Developer Associate.

---

## 3. IAM User là gì?

IAM User đại diện cho một người dùng hoặc một ứng dụng cần truy cập AWS.

Ví dụ:

- Developer A cần đăng nhập AWS Console.
- Developer B cần dùng AWS CLI.
- Một script local cần gọi AWS API.

IAM User có thể có:

- Console password
- Access key
- Secret access key
- MFA
- Policy được gán trực tiếp hoặc qua group

---

## 4. IAM Group là gì?

IAM Group là nhóm IAM User.

Thay vì gán quyền cho từng user, ta có thể gán quyền cho group.

Ví dụ:

- Group `Developers` có quyền đọc log và deploy dev.
- Group `Admins` có quyền quản trị.
- Group `ReadOnly` chỉ có quyền xem.

Nếu user nằm trong group, user nhận quyền từ group đó.

---

## 5. IAM Role là gì?

IAM Role là danh tính AWS có quyền, nhưng không gắn cố định với một người dùng.

Role thường được sử dụng bởi:

- Lambda function
- EC2 instance
- ECS task
- AWS service
- User ở account khác thông qua AssumeRole

Ví dụ:

Lambda cần ghi dữ liệu vào DynamoDB. Thay vì hard-code access key trong code, ta gán cho Lambda một execution role có quyền DynamoDB.

---

## 6. IAM Policy là gì?

IAM Policy là tài liệu JSON định nghĩa quyền.

Policy trả lời các câu hỏi:

- Allow hay Deny?
- Cho phép hành động nào?
- Trên resource nào?
- Có điều kiện gì không?

Ví dụ policy đơn giản cho phép đọc object trong S3:

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

---

## 7. Phân biệt User, Group, Role, Policy

| Thành phần | Dùng để làm gì? | Ví dụ |
|---|---|---|
| IAM User | Đại diện cho người dùng/app | Developer login AWS Console |
| IAM Group | Gom nhiều user | Developers group |
| IAM Role | Quyền tạm thời cho service/user assume | Lambda role, EC2 role |
| IAM Policy | Tài liệu định nghĩa quyền | Allow S3 ReadOnly |

---

## 8. Khi nào dùng IAM User?

Dùng IAM User khi cần đại diện cho một người dùng cụ thể.

Ví dụ:

- Developer cần login AWS Console.
- Người học cần dùng AWS CLI ở máy local.

Tuy nhiên, trong production, hạn chế dùng access key lâu dài nếu có thể thay bằng role.

---

## 9. Khi nào dùng IAM Role?

Dùng IAM Role khi AWS service cần truy cập AWS service khác.

Ví dụ:

- Lambda cần đọc DynamoDB.
- EC2 cần đọc S3.
- CodeBuild cần push image lên ECR.
- API cần gọi Secrets Manager.

Role an toàn hơn hard-code credentials.

---

## 10. Least Privilege

Least privilege nghĩa là cấp quyền tối thiểu cần thiết.

Ví dụ:

Nếu Lambda chỉ cần đọc DynamoDB, không nên cấp quyền `dynamodb:*`.

Nên cấp quyền cụ thể như:

- `dynamodb:GetItem`
- `dynamodb:Query`

Least privilege là keyword rất quan trọng trong đề thi.

---

## 11. Kiến thức thi cần nhớ

| Tình huống | Nên nghĩ tới |
|---|---|
| Lambda cần truy cập DynamoDB | Lambda execution role |
| EC2 cần truy cập S3 | EC2 instance role |
| Developer cần login Console | IAM user |
| Nhiều developer cùng quyền | IAM group |
| Cần cấp quyền tối thiểu | IAM policy least privilege |
| Tránh hard-code credentials | IAM role |

---

## 12. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| IAM | Quản lý danh tính và quyền |
| user | Người dùng cụ thể |
| group | Nhóm user |
| role | Quyền cho service hoặc assume |
| policy | JSON định nghĩa quyền |
| least privilege | Cấp quyền tối thiểu |
| execution role | Role của Lambda |
| instance profile | Role gắn cho EC2 |
| hard-coded credentials | Access key viết cứng trong code |

---

## 13. Bẫy thường gặp

### Bẫy 1: Lambda dùng access key trong code

Sai best practice. Lambda nên dùng execution role.

### Bẫy 2: EC2 lưu credentials trong file `.env`

Nếu EC2 cần gọi AWS service, nên dùng IAM instance role.

### Bẫy 3: Cấp quyền quá rộng

Ví dụ cấp `AdministratorAccess` cho Lambda production là không phù hợp.

---

## 14. Lab thực hành

### Lab 1. Tạo IAM policy đọc S3

1. Vào IAM.
2. Tạo policy mới.
3. Chỉ cho phép `s3:GetObject`.
4. Gán policy cho user test.

### Lab 2. Tạo IAM role cho Lambda

1. Vào IAM → Roles.
2. Chọn trusted entity là Lambda.
3. Gán quyền CloudWatch Logs.
4. Tạo Lambda function dùng role đó.
5. Kiểm tra Lambda ghi log được không.

---

## 15. Câu hỏi ôn tập

1. IAM dùng để làm gì?
2. IAM User khác IAM Role thế nào?
3. IAM Group dùng để làm gì?
4. IAM Policy có định dạng gì?
5. Least privilege là gì?
6. Lambda cần quyền gọi DynamoDB thì dùng gì?
7. EC2 cần đọc S3 thì dùng gì?
8. Vì sao không nên hard-code access key?
9. Execution role là gì?
10. Instance profile liên quan đến service nào?

---

## 16. Tóm tắt bài học

IAM là nền tảng bảo mật rất quan trọng trong AWS.

Cần nhớ:

```text
User = người dùng cụ thể
Group = nhóm user
Role = quyền cho service hoặc assume
Policy = JSON định nghĩa quyền
Least privilege = cấp quyền tối thiểu
```

Trong production, ưu tiên dùng IAM Role thay vì hard-code credentials.
