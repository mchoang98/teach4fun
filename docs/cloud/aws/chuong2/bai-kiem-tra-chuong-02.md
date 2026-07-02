# Bài kiểm tra cuối Chương 2. IAM và Security nền tảng

## Thông tin bài kiểm tra

- Hình thức: Trắc nghiệm
- Số câu: 25 câu
- Thời gian đề xuất: 35 phút
- Mục tiêu: Đánh giá kiến thức IAM nền tảng cho AWS Developer Associate DVA-C02

---

## Câu 1

IAM trong AWS dùng để làm gì?

A. Quản lý database trong AWS  
B. Quản lý danh tính và quyền truy cập  
C. Quản lý chi phí billing  
D. Quản lý vùng Region  

**Đáp án: B**

---

## Câu 2

Thành phần nào thường đại diện cho một người dùng đăng nhập AWS Console?

A. IAM User  
B. IAM Role  
C. IAM Policy  
D. Security Group  

**Đáp án: A**

---

## Câu 3

IAM Group dùng để làm gì?

A. Chứa nhiều IAM User và gán quyền chung  
B. Chứa nhiều AWS Region  
C. Chứa nhiều EC2 instance  
D. Chứa nhiều S3 bucket  

**Đáp án: A**

---

## Câu 4

IAM Policy thường được viết dưới định dạng nào?

A. XML  
B. YAML only  
C. JSON  
D. CSV  

**Đáp án: C**

---

## Câu 5

Trong IAM Policy, `Effect` có thể có giá trị nào?

A. Read hoặc Write  
B. Allow hoặc Deny  
C. Public hoặc Private  
D. Enable hoặc Disable  

**Đáp án: B**

---

## Câu 6

Trong IAM Policy, `Action` dùng để chỉ điều gì?

A. Tài nguyên AWS áp dụng policy  
B. Hành động được phép hoặc bị từ chối  
C. Người dùng tạo policy  
D. Region triển khai service  

**Đáp án: B**

---

## Câu 7

Trong IAM Policy, `Resource` dùng để chỉ điều gì?

A. Tài nguyên AWS mà policy áp dụng  
B. Tên người dùng  
C. Mật khẩu đăng nhập  
D. Thời gian tạo policy  

**Đáp án: A**

---

## Câu 8

Nguyên tắc Least Privilege có nghĩa là gì?

A. Cấp quyền admin cho tất cả user  
B. Không cấp quyền cho bất kỳ ai  
C. Chỉ cấp đúng quyền cần thiết  
D. Chỉ dùng root user để thao tác  

**Đáp án: C**

---

## Câu 9

Một Lambda function cần ghi dữ liệu vào DynamoDB. Cách bảo mật phù hợp nhất là gì?

A. Lưu access key trong source code Lambda  
B. Gửi username/password qua request  
C. Gán IAM Role có quyền DynamoDB cho Lambda  
D. Dùng root access key  

**Đáp án: C**

---

## Câu 10

Ứng dụng chạy trên EC2 cần đọc file từ S3. Cách tốt nhất là gì?

A. Lưu access key trong file `.env` trên EC2  
B. Gán IAM Role cho EC2 thông qua instance profile  
C. Dùng root account trong ứng dụng  
D. Public toàn bộ S3 bucket  

**Đáp án: B**

---

## Câu 11

Keyword `avoid hard-coded credentials` trong đề thi thường gợi ý giải pháp nào?

A. IAM Role  
B. Root user  
C. Public bucket  
D. Manual password  

**Đáp án: A**

---

## Câu 12

Explicit Deny trong IAM có đặc điểm nào?

A. Bị Allow ghi đè  
B. Luôn thắng Allow  
C. Chỉ áp dụng cho S3  
D. Không ảnh hưởng đến policy  

**Đáp án: B**

---

## Câu 13

Nếu không có policy Allow nào áp dụng cho request, kết quả mặc định là gì?

A. Allow  
B. Warning  
C. Default Deny  
D. Retry  

**Đáp án: C**

---

## Câu 14

STS dùng để làm gì?

A. Cấp temporary credentials  
B. Tạo database  
C. Lưu file object  
D. Tạo API Gateway  

**Đáp án: A**

---

## Câu 15

AssumeRole thường dùng trong tình huống nào?

A. Cross-account access  
B. Tăng dung lượng S3  
C. Tạo CloudWatch dashboard  
D. Tạo DynamoDB index  

**Đáp án: A**

---

## Câu 16

Trust Policy của IAM Role trả lời câu hỏi nào?

A. Role được phép làm gì?  
B. Ai được phép assume role này?  
C. Role dùng Region nào?  
D. Role có giá bao nhiêu?  

**Đáp án: B**

---

## Câu 17

Permission Policy của IAM Role trả lời câu hỏi nào?

A. Ai được phép assume role này?  
B. Role được phép làm gì?  
C. Role tạo lúc nào?  
D. Role nằm trong AZ nào?  

**Đáp án: B**

---

## Câu 18

Mobile user cần temporary AWS credentials để truy cập S3. Service nào phù hợp?

A. Cognito Identity Pool  
B. CloudFormation  
C. CodeBuild  
D. Elastic Beanstalk  

**Đáp án: A**

---

## Câu 19

Cognito User Pool chủ yếu dùng để làm gì?

A. User sign-up và sign-in  
B. Build source code  
C. Lưu object  
D. Gửi message queue  

**Đáp án: A**

---

## Câu 20

Permission Boundary dùng để làm gì?

A. Tăng quyền admin cho mọi user  
B. Giới hạn quyền tối đa của user hoặc role  
C. Tạo S3 bucket  
D. Tăng tốc Lambda  

**Đáp án: B**

---

## Câu 21

Một user có policy Allow `s3:DeleteObject`, nhưng một policy khác Explicit Deny `s3:DeleteObject`. Kết quả là gì?

A. Được phép xóa object  
B. Bị từ chối xóa object  
C. AWS hỏi xác nhận  
D. Chỉ được xóa object nhỏ  

**Đáp án: B**

---

## Câu 22

Lambda gọi DynamoDB bị lỗi `AccessDeniedException`. Nên kiểm tra gì trước?

A. Lambda execution role có quyền DynamoDB chưa  
B. S3 bucket có public không  
C. API Gateway có cache không  
D. EC2 có đủ CPU không  

**Đáp án: A**

---

## Câu 23

Policy nào dưới đây thường là không tốt theo Least Privilege?

A. Chỉ cho phép `dynamodb:PutItem` trên table cụ thể  
B. Chỉ cho phép `s3:GetObject` trên bucket cụ thể  
C. Cho phép `Action: *` và `Resource: *`  
D. Chỉ cho phép `lambda:InvokeFunction` trên function cụ thể  

**Đáp án: C**

---

## Câu 24

S3 Bucket Policy là loại policy nào?

A. Identity-based policy  
B. Resource-based policy  
C. Password policy  
D. Billing policy  

**Đáp án: B**

---

## Câu 25

Keyword `least privilege` trong đề thi nên nghĩ tới điều gì?

A. Cấp quyền rộng nhất để tránh lỗi  
B. Cấp quyền tối thiểu cần thiết  
C. Dùng root user cho nhanh  
D. Public tất cả tài nguyên  

**Đáp án: B**

---

# Bảng chấm điểm

| Số câu đúng | Đánh giá |
|---:|---|
| 0 - 14 | Chưa đạt, cần học lại chương |
| 15 - 17 | Nắm cơ bản, cần luyện thêm tình huống |
| 18 - 20 | Khá, có thể học chương tiếp theo |
| 21 - 23 | Tốt |
| 24 - 25 | Rất tốt |

---

# Gợi ý ôn lại nếu làm sai nhiều

Nếu sai nhiều câu về User/Role/Policy:

- Ôn lại Bài 1 và Bài 2.

Nếu sai nhiều câu về Least Privilege:

- Ôn lại Bài 3.

Nếu sai nhiều câu về Lambda/EC2 Role:

- Ôn lại Bài 4.

Nếu sai nhiều câu về STS/AssumeRole:

- Ôn lại Bài 5.

Nếu sai nhiều câu về Deny/Allow:

- Ôn lại Bài 6.
