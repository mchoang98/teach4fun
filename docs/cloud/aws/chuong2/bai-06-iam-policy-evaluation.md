# Bài 6. IAM Policy Evaluation

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS đánh giá quyền IAM như thế nào.
- Hiểu Default Deny, Explicit Allow và Explicit Deny.
- Biết vì sao Deny luôn thắng Allow.
- Biết phân tích lỗi AccessDenied trong đề thi.

---

## 2. IAM Policy Evaluation là gì?

Policy Evaluation là quá trình AWS kiểm tra một request có được phép hay không.

Ví dụ request:

```text
User A muốn gọi s3:GetObject trên bucket my-bucket.
```

AWS sẽ kiểm tra:

- User/Role có policy nào không?
- Policy có Allow action đó không?
- Có policy nào Deny không?
- Resource có đúng không?
- Condition có thỏa không?

---

## 3. Default Deny

Mặc định, mọi request đều bị từ chối nếu không có policy Allow.

Nghĩa là:

```text
Không được cấp quyền = Không được làm
```

Ví dụ:

User không có policy nào cho DynamoDB.

Khi gọi:

```text
dynamodb:PutItem
```

Kết quả:

```text
AccessDenied
```

---

## 4. Explicit Allow

Explicit Allow là khi policy cho phép rõ ràng một action.

Ví dụ:

```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

Policy này cho phép đọc object trong bucket `my-bucket`.

---

## 5. Explicit Deny

Explicit Deny là khi policy từ chối rõ ràng một action.

Ví dụ:

```json
{
  "Effect": "Deny",
  "Action": "s3:DeleteObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

Điểm quan trọng:

```text
Explicit Deny luôn thắng Explicit Allow.
```

---

## 6. Thứ tự hiểu đơn giản

Có thể nhớ theo quy tắc:

```text
1. Mặc định là Deny.
2. Nếu có Allow phù hợp thì được phép.
3. Nếu có Explicit Deny phù hợp thì bị từ chối, dù có Allow.
```

Ví dụ:

| Tình huống | Kết quả |
|---|---|
| Không có policy | Deny |
| Có Allow | Allow |
| Có Allow và có Deny | Deny |
| Có Allow nhưng Resource sai | Deny |
| Có Allow nhưng Condition không thỏa | Deny |

---

## 7. Ví dụ Allow và Deny cùng tồn tại

Policy 1 cho phép xóa object:

```json
{
  "Effect": "Allow",
  "Action": "s3:DeleteObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

Policy 2 từ chối xóa object:

```json
{
  "Effect": "Deny",
  "Action": "s3:DeleteObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

Kết quả cuối cùng:

```text
Deny
```

Vì Explicit Deny thắng Allow.

---

## 8. Identity-based policy và Resource-based policy

### Identity-based policy

Gắn vào IAM User, Group hoặc Role.

Ví dụ:

```text
Role Lambda được phép PutItem vào DynamoDB.
```

### Resource-based policy

Gắn trực tiếp vào resource.

Ví dụ:

```text
S3 bucket policy cho phép một account khác đọc object.
```

Trong đề thi, S3 bucket policy là resource-based policy rất hay gặp.

---

## 9. Service Control Policy cần biết vừa đủ

Service Control Policy, viết tắt là SCP, dùng trong AWS Organizations.

DVA-C02 không yêu cầu học quá sâu SCP, nhưng cần biết:

```text
SCP có thể giới hạn quyền tối đa trong account.
```

Nếu SCP Deny một action, IAM policy trong account Allow cũng không vượt qua được.

---

## 10. Permission Boundary và Evaluation

Permission Boundary giới hạn quyền tối đa của user hoặc role.

Kết quả quyền thực tế là phần giao giữa:

```text
Identity policy
và
Permission boundary
```

Nếu policy Allow nhưng boundary không cho, request vẫn bị Deny.

---

## 11. Khi gặp lỗi AccessDenied nên kiểm tra gì?

Checklist:

1. Principal là ai? User hay Role?
2. Action cần gọi là gì?
3. Resource ARN có đúng không?
4. Có policy Allow chưa?
5. Có Explicit Deny không?
6. Có Permission Boundary không?
7. Có SCP không?
8. Có resource-based policy liên quan không?
9. Condition có thỏa không?

---

## 12. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| AccessDenied | IAM permission |
| Explicit deny | Deny thắng Allow |
| No permissions attached | Default Deny |
| Resource policy | S3 bucket policy / Lambda resource policy |
| Maximum permissions | Permission Boundary |
| Organization restriction | SCP |
| Condition not met | Request bị Deny |

---

## 13. Bẫy thường gặp

### Bẫy 1. Nghĩ có Allow là chắc chắn được phép

Sai. Nếu có Explicit Deny thì vẫn bị từ chối.

### Bẫy 2. Resource ARN sai

Policy Allow nhưng Resource không khớp thì vẫn bị Deny.

### Bẫy 3. Quên Condition

Nếu policy có Condition, request phải thỏa điều kiện mới được phép.

---

## 14. Lab thực hành

### Lab 1. Test Default Deny

Yêu cầu:

- Tạo user không có quyền S3.
- Gọi lệnh list bucket.
- Quan sát AccessDenied.

### Lab 2. Test Explicit Allow

Yêu cầu:

- Gán quyền `s3:ListBucket`.
- Gọi lại lệnh list bucket.
- Quan sát kết quả thành công.

### Lab 3. Test Explicit Deny

Yêu cầu:

- Gán thêm policy Deny `s3:ListBucket`.
- Gọi lại lệnh list bucket.
- Quan sát Deny thắng Allow.

---

## 15. Câu hỏi ôn tập

1. Default Deny là gì?
2. Explicit Allow là gì?
3. Explicit Deny là gì?
4. Deny có thắng Allow không?
5. Nếu policy Allow nhưng Resource sai thì kết quả là gì?
6. Identity-based policy gắn vào đâu?
7. Resource-based policy gắn vào đâu?
8. S3 bucket policy là loại policy nào?
9. Permission Boundary dùng để làm gì?
10. Khi gặp AccessDenied nên kiểm tra những gì?

---

## 16. Bài tập về nhà

- Vẽ sơ đồ thứ tự đánh giá quyền IAM.
- Tạo 3 ví dụ: Default Deny, Explicit Allow, Explicit Deny.
- Viết checklist debug lỗi AccessDenied cho Lambda gọi DynamoDB.
