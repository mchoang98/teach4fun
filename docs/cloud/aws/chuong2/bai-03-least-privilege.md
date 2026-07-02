# Bài 3. Least Privilege

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu nguyên tắc Least Privilege.
- Biết vì sao không nên cấp quyền quá rộng.
- Biết cách thiết kế quyền tối thiểu cho application.
- Nhận diện câu hỏi thi liên quan đến security best practices.

---

## 2. Least Privilege là gì?

Least Privilege nghĩa là:

```text
Chỉ cấp đúng quyền cần thiết, không cấp dư.
```

Ví dụ:

Lambda chỉ cần ghi dữ liệu vào bảng `Orders`.

Không nên cấp:

```text
AdministratorAccess
```

Nên cấp:

```text
dynamodb:PutItem trên table Orders
```

---

## 3. Vì sao Least Privilege quan trọng?

Nếu app bị lỗi hoặc bị tấn công, quyền quá rộng có thể gây thiệt hại lớn.

Ví dụ sai:

```text
Lambda bị lộ lỗi bảo mật
Lambda có quyền xóa toàn bộ DynamoDB
Kẻ tấn công có thể xóa dữ liệu production
```

Ví dụ đúng:

```text
Lambda chỉ có quyền PutItem vào table Orders
Nếu bị tấn công, phạm vi thiệt hại nhỏ hơn
```

---

## 4. Ví dụ cấp quyền quá rộng

Không nên:

```json
{
  "Effect": "Allow",
  "Action": "*",
  "Resource": "*"
}
```

Policy này gần như cho phép làm mọi thứ.

Trong đề thi, nếu câu hỏi hỏi về giải pháp an toàn nhất, đáp án kiểu này thường sai.

---

## 5. Ví dụ cấp quyền tốt hơn

Nên giới hạn theo action:

```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:PutItem"
  ],
  "Resource": "arn:aws:dynamodb:ap-southeast-1:123456789012:table/Orders"
}
```

Policy này chỉ cho phép ghi item vào bảng `Orders`.

---

## 6. Các mức giới hạn quyền

Khi thiết kế quyền, nên giới hạn theo:

1. Service
2. Action
3. Resource
4. Condition
5. Environment
6. Account

Ví dụ:

```text
Chỉ cho phép Lambda production đọc secret production.
Không cho Lambda dev đọc secret production.
```

---

## 7. Least Privilege trong Developer Associate

Trong DVA-C02, Least Privilege thường xuất hiện trong các tình huống:

- Lambda cần truy cập DynamoDB.
- EC2 cần đọc file từ S3.
- CodeBuild cần push image lên ECR.
- Developer cần deploy nhưng không được xóa resource.
- App cần đọc secret từ Secrets Manager.
- Cross-account access.

---

## 8. Thiết kế quyền cho Lambda

Tình huống:

```text
Lambda createBooking cần ghi dữ liệu vào DynamoDB table Orders.
```

Quyền nên cấp:

```text
dynamodb:PutItem
```

Resource:

```text
Orders table ARN
```

Không nên cấp:

```text
dynamodb:*
Resource: *
```

---

## 9. Thiết kế quyền cho EC2

Tình huống:

```text
Ứng dụng chạy trên EC2 cần đọc file config từ S3.
```

Cách đúng:

```text
Tạo IAM Role cho EC2
Gán policy s3:GetObject trên bucket cụ thể
Attach role vào EC2 instance profile
```

Không nên:

```text
Lưu access key trong file .env trên EC2
```

---

## 10. Thiết kế quyền cho Developer

Tình huống:

```text
Developer cần deploy Lambda nhưng không được xóa Lambda.
```

Có thể cấp:

```text
lambda:UpdateFunctionCode
lambda:UpdateFunctionConfiguration
lambda:GetFunction
```

Không cấp:

```text
lambda:DeleteFunction
```

---

## 11. Permission Boundary

Permission Boundary dùng để giới hạn quyền tối đa mà một IAM User hoặc Role có thể có.

Hiểu đơn giản:

```text
Policy cho phép làm A, B, C.
Boundary chỉ cho tối đa A, B.
Kết quả cuối cùng: chỉ làm được A, B.
```

Permission Boundary thường dùng trong môi trường có nhiều team tự tạo role/user.

---

## 12. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Minimum permissions | Least Privilege |
| Most secure | Least Privilege + IAM Role |
| Avoid excessive permissions | Specific Action + Specific Resource |
| Developer should deploy but not delete | Custom IAM Policy |
| Limit maximum permissions | Permission Boundary |
| Avoid long-term credentials | IAM Role |

---

## 13. Bẫy thường gặp

### Bẫy 1. Chọn AdministratorAccess cho nhanh

Trong thực tế học lab có thể dùng admin, nhưng trong đề thi, nếu hỏi best practice thì không chọn quyền quá rộng.

### Bẫy 2. Dùng access key cho service AWS

Service AWS như Lambda, EC2 nên dùng IAM Role.

### Bẫy 3. Chỉ giới hạn Action nhưng Resource vẫn là `*`

Tốt hơn là giới hạn cả Action và Resource nếu có thể.

---

## 14. Lab thực hành

### Lab 1. Tạo policy tối thiểu cho Lambda ghi DynamoDB

Yêu cầu:

- Chỉ cho phép `dynamodb:PutItem`.
- Chỉ áp dụng cho table `Orders`.
- Gán policy vào Lambda execution role.

### Lab 2. Test quyền bị thiếu

Yêu cầu:

- Lambda thử gọi `dynamodb:Query`.
- Quan sát lỗi AccessDenied.
- Thêm quyền `dynamodb:Query` và test lại.

### Lab 3. Tạo policy cho developer deploy Lambda

Yêu cầu:

- Cho phép update function code.
- Không cho phép delete function.

---

## 15. Câu hỏi ôn tập

1. Least Privilege là gì?
2. Vì sao không nên cấp `Action: *` và `Resource: *`?
3. Lambda cần ghi DynamoDB thì nên cấp quyền gì?
4. EC2 cần truy cập S3 thì nên dùng access key hay IAM Role?
5. Permission Boundary dùng để làm gì?
6. Vì sao AdministratorAccess thường không phải đáp án tốt nhất?
7. Làm sao giới hạn quyền theo tài nguyên cụ thể?
8. Developer cần deploy nhưng không được xóa resource thì nên làm gì?
9. Least Privilege giúp giảm rủi ro như thế nào?
10. Trong đề thi, keyword “minimum permissions” thường gợi ý gì?

---

## 16. Bài tập về nhà

- Viết policy tối thiểu cho Lambda đọc secret từ Secrets Manager.
- Viết policy tối thiểu cho EC2 đọc object từ S3.
- Tìm 5 ví dụ quyền quá rộng và sửa lại theo Least Privilege.
