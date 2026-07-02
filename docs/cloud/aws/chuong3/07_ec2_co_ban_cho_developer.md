# Bài 7. EC2 cơ bản cho Developer

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu EC2 là gì.
- Biết các khái niệm EC2 quan trọng cho Developer Associate.
- Hiểu AMI, instance, security group, user data, IAM instance profile.
- Biết khi nào nên chọn EC2 thay vì Lambda.

---

## 2. EC2 là gì?

EC2 là dịch vụ máy chủ ảo của AWS.

Bạn có thể hiểu EC2 giống như thuê một máy tính/server trên cloud.

Bạn có thể:

- Chọn hệ điều hành.
- Cài web server.
- Deploy backend app.
- Cài package riêng.
- Mở port cần thiết.
- Gắn IAM role cho server.

---

## 3. EC2 Instance

Instance là một máy chủ ảo EC2 đang chạy.

Khi tạo instance, bạn cần chọn:

- AMI
- Instance type
- Key pair
- Network
- Security Group
- Storage
- IAM Role nếu cần

Ví dụ:

```text
EC2 instance chạy Ubuntu + Node.js backend
```

---

## 4. AMI

AMI là image dùng để tạo EC2 instance.

AMI có thể chứa:

- Hệ điều hành
- Software đã cài sẵn
- Cấu hình ban đầu

Ví dụ:

- Amazon Linux AMI
- Ubuntu AMI
- Windows Server AMI
- Custom AMI của công ty

---

## 5. Security Group

Security Group giống như firewall cho EC2.

Nó kiểm soát traffic vào/ra instance.

Ví dụ:

| Mục đích | Port |
|---|---|
| SSH | 22 |
| HTTP | 80 |
| HTTPS | 443 |
| Custom backend | 3000 / 8080 |

Trong đề thi, nếu không truy cập được app trên EC2, hãy kiểm tra:

- Security Group
- Network ACL
- Route table
- App có listen đúng port không

Ở mức Developer Associate, thường chỉ cần nhớ Security Group.

---

## 6. User Data

User Data là script chạy khi EC2 khởi tạo.

Dùng để tự động setup server ban đầu.

Ví dụ:

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
```

User Data phù hợp để:

- Cài package
- Start service
- Pull code
- Tạo file config đơn giản

---

## 7. IAM Instance Profile

EC2 muốn gọi AWS service khác thì không nên hard-code access key trong server.

Cách đúng là gắn IAM Role cho EC2 thông qua instance profile.

Ví dụ:

```text
EC2 cần đọc file từ S3
=> Gắn IAM Role có quyền s3:GetObject
```

Đây là keyword rất quan trọng trong đề thi.

---

## 8. Khi nào chọn EC2?

Chọn EC2 khi:

- Cần kiểm soát hệ điều hành.
- Cần chạy process lâu dài.
- Cần cài phần mềm đặc biệt.
- Ứng dụng chưa phù hợp serverless.
- Cần migrate app truyền thống lên AWS.

Không nên chọn EC2 nếu đề yêu cầu:

- Không quản lý server.
- Chạy code theo event ngắn.
- Serverless architecture.

Khi đó thường nên chọn Lambda.

---

## 9. Kiến thức thi cần nhớ

- EC2 là virtual server.
- AMI dùng để tạo instance.
- Security Group kiểm soát traffic.
- User Data chạy khi instance khởi tạo.
- EC2 nên dùng IAM Role/Instance Profile để gọi AWS service.
- Không nên lưu access key trong EC2 app code.

---

## 10. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| virtual server | EC2 |
| full control of OS | EC2 |
| machine image | AMI |
| firewall for instance | Security Group |
| bootstrap script | User Data |
| application on EC2 access S3 | EC2 instance role |
| avoid hard-coded credentials | IAM Role |

---

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

App chạy trên EC2 cần đọc S3 an toàn, không hard-code access key.

Đáp án nên nghĩ tới: **gắn IAM Role cho EC2**.

### Tình huống 2

EC2 web server không truy cập được từ Internet.

Đáp án nên kiểm tra: **Security Group có mở port cần thiết không**.

### Tình huống 3

Cần tự động cài web server khi EC2 khởi tạo.

Đáp án nên nghĩ tới: **User Data**.

---

## 12. Bẫy thường gặp

- Không nên dùng access key hard-code trong EC2.
- Security Group là stateful firewall.
- User Data thường chạy lúc khởi tạo instance.
- EC2 không tự động serverless, bạn vẫn phải quản lý server.

---

## 13. Bài tập về nhà

### Lý thuyết

1. EC2 là gì?
2. AMI dùng để làm gì?
3. Security Group là gì?
4. User Data dùng để làm gì?
5. EC2 gọi S3 an toàn bằng cách nào?

### Lab đề xuất

- Tạo EC2 Amazon Linux.
- Mở port HTTP trong Security Group.
- Dùng User Data cài web server đơn giản.
- Gắn IAM Role cho EC2.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
