# Bài 5. STS và AssumeRole

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS STS là gì.
- Hiểu Temporary Credentials.
- Hiểu AssumeRole.
- Biết cross-account access hoạt động như thế nào.
- Nhận diện tình huống STS trong đề thi DVA-C02.

---

## 2. AWS STS là gì?

STS là viết tắt của **Security Token Service**.

STS dùng để cấp temporary credentials cho user, role hoặc application.

Temporary credentials thường gồm:

- Access key ID
- Secret access key
- Session token
- Expiration time

Điểm quan trọng:

```text
Temporary credentials có thời hạn và an toàn hơn long-term credentials.
```

---

## 3. Vì sao cần Temporary Credentials?

Long-term credentials như access key/secret key nếu bị lộ sẽ rất nguy hiểm.

Temporary credentials an toàn hơn vì:

- Có thời hạn.
- Tự hết hạn.
- Có thể giới hạn quyền.
- Phù hợp cho app, service, cross-account access.

---

## 4. AssumeRole là gì?

AssumeRole nghĩa là một user hoặc service tạm thời nhận quyền của một IAM Role.

Ví dụ:

```text
Developer ở Account A cần deploy resource trong Account B.
Account B tạo IAM Role cho phép deploy.
Developer Account A gọi AssumeRole để nhận temporary credentials.
```

---

## 5. Cross-account access

Cross-account access là truy cập tài nguyên giữa hai AWS account.

Ví dụ:

```text
Account A: tài khoản developer
Account B: tài khoản production
```

Developer không nên có user trực tiếp trong account production.

Cách tốt hơn:

1. Tạo role trong Account B.
2. Cho Account A được assume role đó.
3. Developer Account A dùng STS AssumeRole.
4. Developer nhận temporary credentials.
5. Developer thực hiện hành động trong phạm vi role cho phép.

---

## 6. Trust Policy

Một IAM Role có trust policy để xác định ai được assume role.

Ví dụ trust policy cho account khác assume role:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111111111111:root"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

Trust policy trả lời câu hỏi:

```text
Ai được phép assume role này?
```

Permission policy trả lời câu hỏi:

```text
Role này được phép làm gì?
```

---

## 7. AssumeRole với AWS CLI

Ví dụ cấu hình profile:

```ini
[profile dev]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY

[profile prod-role]
role_arn = arn:aws:iam::222222222222:role/DeployRole
source_profile = dev
```

Khi dùng profile `prod-role`, AWS CLI sẽ assume role và lấy temporary credentials.

---

## 8. STS trong ứng dụng

Ứng dụng có thể dùng STS trong các tình huống:

- Cần truy cập tài nguyên account khác.
- Cần cấp quyền tạm thời.
- Cần federation với hệ thống identity bên ngoài.
- Cần temporary credentials cho user.

---

## 9. Cognito và Temporary Credentials

Trong DVA-C02, cần nhớ:

- Cognito User Pool dùng cho sign-up/sign-in.
- Cognito Identity Pool có thể cấp temporary AWS credentials.

Nếu đề hỏi:

```text
Mobile users need temporary AWS credentials to access S3.
```

Nên nghĩ tới:

```text
Cognito Identity Pool
```

---

## 10. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Temporary credentials | STS |
| Assume role | STS AssumeRole |
| Cross-account access | IAM Role + STS |
| Federated users | STS / Identity Federation |
| Mobile users need AWS credentials | Cognito Identity Pool |
| Avoid long-term credentials | Temporary credentials |

---

## 11. Bẫy thường gặp

### Bẫy 1. Tạo IAM User trong account khác

Với cross-account access, thường không nên tạo user trực tiếp ở account đích.

Cách tốt hơn là dùng IAM Role và AssumeRole.

### Bẫy 2. Nhầm Trust Policy và Permission Policy

- Trust Policy: ai được assume role.
- Permission Policy: role được làm gì.

### Bẫy 3. Nhầm User Pool và Identity Pool

- User Pool: login user.
- Identity Pool: cấp temporary AWS credentials.

---

## 12. Lab thực hành

### Lab 1. Quan sát STS caller identity

Chạy lệnh:

```bash
aws sts get-caller-identity
```

Ghi lại:

- Account
- UserId
- ARN

### Lab 2. Tạo role cho AssumeRole

Yêu cầu:

- Tạo IAM Role.
- Cho một IAM User được assume role.
- Gán policy read-only S3 cho role.

### Lab 3. Dùng AWS CLI assume role

Yêu cầu:

- Cấu hình profile source.
- Cấu hình profile role.
- Test gọi S3 bằng profile role.

---

## 13. Câu hỏi ôn tập

1. STS là gì?
2. Temporary credentials gồm những thành phần nào?
3. AssumeRole dùng để làm gì?
4. Cross-account access nên dùng IAM User hay IAM Role?
5. Trust Policy dùng để làm gì?
6. Permission Policy khác Trust Policy thế nào?
7. Khi mobile user cần temporary AWS credentials, nên dùng service nào?
8. Vì sao temporary credentials an toàn hơn long-term credentials?
9. Lệnh `aws sts get-caller-identity` dùng để làm gì?
10. Keyword “assume role” trong đề thi gợi ý service nào?

---

## 14. Bài tập về nhà

- Vẽ flow Account A assume role vào Account B.
- So sánh User Pool và Identity Pool.
- Viết lại bằng tiếng Việt dễ hiểu: `Temporary credentials`, `AssumeRole`, `Cross-account access`.
