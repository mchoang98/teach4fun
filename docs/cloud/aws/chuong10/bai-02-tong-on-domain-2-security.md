# Bài 2. Tổng ôn Domain 2: Security

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Nắm các service bảo mật quan trọng trong DVA-C02.
- Phân biệt IAM, Cognito, KMS, Secrets Manager, Parameter Store.
- Biết chọn giải pháp bảo mật đúng theo tình huống.
- Tránh các bẫy thường gặp trong đề thi Security.

## 2. Domain 2 gồm những gì?

Domain 2 tập trung vào bảo mật ứng dụng trên AWS.

Các nội dung thường gặp:

- IAM user, role, policy.
- Least privilege.
- STS và AssumeRole.
- Cognito.
- KMS.
- Secrets Manager.
- Parameter Store.
- Encryption.
- Authentication và authorization.
- Secure API.

## 3. IAM cần nhớ gì?

IAM là dịch vụ quản lý danh tính và quyền truy cập.

Cần nhớ:

- IAM User: danh tính người dùng hoặc access key.
- IAM Group: nhóm user.
- IAM Role: quyền tạm thời cho service hoặc account khác assume.
- IAM Policy: tài liệu JSON mô tả quyền.
- Least privilege: cấp quyền tối thiểu cần thiết.
- Explicit Deny thắng Allow.

## 4. STS và AssumeRole

STS cấp temporary credentials.

Dùng khi:

- Cross-account access.
- App cần quyền tạm thời.
- User/service cần assume role.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| temporary credentials | STS |
| assume role | IAM Role / STS |
| cross-account access | IAM Role |
| avoid long-term credentials | Temporary credentials |

## 5. Cognito

Cognito dùng cho authentication của user trong web/mobile app.

### User Pool

Dùng cho:

- User sign-up.
- User sign-in.
- JWT token.
- Hosted UI.
- API Gateway Cognito Authorizer.

### Identity Pool

Dùng cho:

- Cấp temporary AWS credentials cho user.
- Cho phép user truy cập trực tiếp một số AWS service theo role.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| user sign-up/sign-in | Cognito User Pool |
| JWT token | Cognito User Pool |
| temporary AWS credentials for users | Cognito Identity Pool |
| protect API with JWT | Cognito Authorizer |

## 6. KMS

KMS dùng để quản lý encryption key.

Cần nhớ:

- AWS managed key.
- Customer managed key.
- Key policy.
- Envelope encryption.
- Rotation.
- Encryption at rest.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| encryption key | KMS |
| customer managed key | KMS CMK |
| encrypt at rest | KMS |
| key rotation | KMS |

## 7. Secrets Manager

Secrets Manager dùng để lưu secret an toàn.

Dùng khi:

- Lưu database password.
- Lưu API key.
- Cần rotate secret tự động.
- Lambda cần đọc secret an toàn bằng IAM Role.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| rotate database password | Secrets Manager |
| store secret securely | Secrets Manager |
| avoid hard-coded password | Secrets Manager |
| RDS credential rotation | Secrets Manager |

## 8. Parameter Store

Parameter Store dùng để lưu config hoặc secret đơn giản.

Cần nhớ:

- Standard parameter.
- SecureString.
- Config storage.
- Có thể dùng KMS để mã hóa SecureString.

So sánh nhanh:

| Nhu cầu | Dịch vụ phù hợp |
|---|---|
| Config thường | Parameter Store |
| Secret cần rotation | Secrets Manager |
| Database password rotation | Secrets Manager |
| Secure config đơn giản | Parameter Store SecureString |

## 9. Các bẫy thường gặp

### Bẫy 1. Hard-code access key trong code

Không chọn đáp án hard-code credentials.

Chọn IAM Role, STS hoặc Secrets Manager tùy tình huống.

### Bẫy 2. Cognito User Pool và Identity Pool

- User Pool: login user.
- Identity Pool: cấp temporary AWS credentials.

### Bẫy 3. KMS không phải nơi lưu secret

KMS quản lý key mã hóa, không phải dịch vụ chính để lưu password.

### Bẫy 4. API Key không thay thế Cognito

API Key dùng cho quota/throttling. Login user nên dùng Cognito hoặc authorizer.

## 10. Câu hỏi ôn tập nhanh

1. App cần login user bằng email/password nên dùng gì?
2. Lambda cần đọc database password an toàn nên dùng gì?
3. Cần tự động rotate RDS password nên dùng service nào?
4. App trên EC2 cần đọc S3 mà không hard-code credentials nên dùng gì?
5. Cross-account access nên dùng cơ chế nào?

## 11. Bài tập về nhà

- Vẽ sơ đồ phân biệt IAM, Cognito, KMS, Secrets Manager.
- Làm 25 câu Security.
- Ghi lại các câu sai liên quan đến User Pool và Identity Pool.
- Viết 10 keyword Security thường gặp.
