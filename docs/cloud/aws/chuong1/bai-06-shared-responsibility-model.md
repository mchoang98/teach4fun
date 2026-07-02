# Bài 6. Shared Responsibility Model

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu Shared Responsibility Model là gì.
- Biết phần nào AWS chịu trách nhiệm.
- Biết phần nào người dùng chịu trách nhiệm.
- Phân biệt trách nhiệm theo loại dịch vụ.
- Nhận diện bẫy trong đề thi về security và responsibility.

---

## 2. Shared Responsibility Model là gì?

Shared Responsibility Model là mô hình chia sẻ trách nhiệm giữa AWS và khách hàng.

Nói đơn giản:

```text
AWS chịu trách nhiệm bảo mật của cloud.
Khách hàng chịu trách nhiệm bảo mật trong cloud.
```

Tiếng Anh thường gặp:

```text
Security of the cloud = AWS responsibility
Security in the cloud = Customer responsibility
```

---

## 3. AWS chịu trách nhiệm phần nào?

AWS chịu trách nhiệm cho hạ tầng vật lý và nền tảng cloud.

Ví dụ:

- Data center
- Phần cứng server
- Network vật lý
- Storage vật lý
- Power
- Cooling
- Physical security
- Hạ tầng global infrastructure

Người dùng AWS không cần tự bảo vệ phòng máy của AWS.

---

## 4. Khách hàng chịu trách nhiệm phần nào?

Khách hàng chịu trách nhiệm cấu hình và dữ liệu của mình trên AWS.

Ví dụ:

- Quản lý IAM user/role/policy
- Bật MFA
- Bảo vệ access key
- Cấu hình security group
- Mã hóa dữ liệu nếu cần
- Cấu hình S3 bucket policy
- Không public dữ liệu nhạy cảm
- Patch hệ điều hành nếu tự quản lý EC2
- Bảo mật application code
- Quản lý secret

---

## 5. Trách nhiệm thay đổi theo loại dịch vụ

Không phải dịch vụ nào cũng chia trách nhiệm giống nhau.

### EC2

EC2 là dịch vụ gần với server truyền thống hơn.

AWS chịu trách nhiệm:

- Phần cứng
- Data center
- Virtualization layer

Khách hàng chịu trách nhiệm:

- Hệ điều hành
- Patch OS
- Application
- Firewall/Security Group
- Dữ liệu

### Lambda

Lambda là serverless compute.

AWS chịu trách nhiệm nhiều hơn:

- Server
- Runtime infrastructure
- Scaling
- Availability của dịch vụ Lambda

Khách hàng chịu trách nhiệm:

- Code Lambda
- IAM role
- Environment variables
- Secret handling
- Logic xử lý dữ liệu

### S3

S3 là managed storage.

AWS chịu trách nhiệm:

- Hạ tầng storage
- Durability của service

Khách hàng chịu trách nhiệm:

- Bucket policy
- Object permission
- Encryption setting
- Lifecycle rule
- Không public nhầm dữ liệu

---

## 6. Ví dụ dễ hiểu

Hãy tưởng tượng AWS giống như một tòa nhà văn phòng.

AWS chịu trách nhiệm:

- Xây tòa nhà
- Bảo vệ cổng
- Điện, nước, thang máy
- Camera hành lang

Bạn chịu trách nhiệm:

- Khóa cửa phòng của mình
- Không đưa chìa khóa cho người lạ
- Không để tài liệu mật ngoài bàn
- Phân quyền nhân viên trong phòng

---

## 7. Kiến thức thi cần nhớ

| Tình huống | Ai chịu trách nhiệm? |
|---|---|
| Bảo vệ data center vật lý | AWS |
| Bảo trì phần cứng server | AWS |
| Bật MFA cho account | Khách hàng |
| Quản lý IAM policy | Khách hàng |
| Cấu hình S3 bucket public/private | Khách hàng |
| Patch OS trên EC2 | Khách hàng |
| Patch hạ tầng Lambda | AWS |
| Bảo mật code ứng dụng | Khách hàng |
| Mã hóa dữ liệu app | Khách hàng cấu hình |
| Bảo vệ access key | Khách hàng |

---

## 8. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| shared responsibility | Chia sẻ trách nhiệm |
| security of the cloud | AWS chịu trách nhiệm |
| security in the cloud | Khách hàng chịu trách nhiệm |
| physical security | AWS |
| data center | AWS |
| IAM configuration | Khách hàng |
| customer data | Khách hàng |
| patch guest OS | Khách hàng với EC2 |
| managed service | AWS quản lý nhiều phần hạ tầng hơn |

---

## 9. Bẫy thường gặp

### Bẫy 1: Nghĩ AWS chịu trách nhiệm mọi thứ

AWS chịu trách nhiệm hạ tầng cloud, nhưng người dùng vẫn phải cấu hình bảo mật đúng.

Ví dụ S3 bucket bị public nhầm thường là lỗi cấu hình của khách hàng.

### Bẫy 2: Nhầm EC2 và Lambda

Với EC2, bạn chịu trách nhiệm nhiều hơn, bao gồm hệ điều hành.

Với Lambda, AWS quản lý server và runtime infrastructure nhiều hơn.

### Bẫy 3: Không phân biệt “of the cloud” và “in the cloud”

```text
Security of the cloud = AWS
Security in the cloud = Customer
```

---

## 10. Lab/thực hành tư duy

Hãy phân loại các trách nhiệm sau:

1. Bật MFA cho Root user.
2. Bảo vệ data center AWS.
3. Cấu hình IAM policy cho Lambda.
4. Patch hệ điều hành EC2.
5. Bảo trì phần cứng server.
6. Cấu hình S3 bucket không public.
7. Bảo mật source code.
8. Cung cấp nhiều Availability Zone.

Đáp án:

| Công việc | Trách nhiệm |
|---|---|
| Bật MFA cho Root user | Khách hàng |
| Bảo vệ data center AWS | AWS |
| Cấu hình IAM policy cho Lambda | Khách hàng |
| Patch hệ điều hành EC2 | Khách hàng |
| Bảo trì phần cứng server | AWS |
| Cấu hình S3 bucket không public | Khách hàng |
| Bảo mật source code | Khách hàng |
| Cung cấp nhiều Availability Zone | AWS |

---

## 11. Câu hỏi ôn tập

1. Shared Responsibility Model là gì?
2. Security of the cloud nghĩa là gì?
3. Security in the cloud nghĩa là gì?
4. AWS chịu trách nhiệm data center không?
5. Khách hàng có chịu trách nhiệm IAM policy không?
6. Ai chịu trách nhiệm patch OS trên EC2?
7. Ai chịu trách nhiệm hạ tầng vật lý của Lambda?
8. Ai chịu trách nhiệm bảo mật code ứng dụng?
9. Nếu S3 bucket bị public nhầm, thường là trách nhiệm của ai?
10. Vì sao dịch vụ managed giúp giảm trách nhiệm vận hành?

---

## 12. Tóm tắt bài học

Shared Responsibility Model là phần nền tảng cần nhớ khi học AWS security.

Công thức quan trọng:

```text
AWS = Security of the cloud
Customer = Security in the cloud
```

Với dịch vụ càng managed/serverless, AWS càng quản lý nhiều hạ tầng hơn. Tuy nhiên, khách hàng vẫn phải chịu trách nhiệm về dữ liệu, quyền truy cập, cấu hình bảo mật và code ứng dụng.
