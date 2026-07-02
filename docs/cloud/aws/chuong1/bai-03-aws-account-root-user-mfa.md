# Bài 3. AWS Account, Root User và MFA

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS Account là gì.
- Hiểu Root user là gì.
- Biết vì sao không dùng Root user hằng ngày.
- Biết MFA là gì.
- Biết nguyên tắc bảo vệ tài khoản AWS.

---

## 2. AWS Account là gì?

AWS Account là tài khoản chính để sử dụng dịch vụ AWS.

Bên trong một AWS Account, bạn có thể tạo:

- IAM user
- IAM role
- S3 bucket
- Lambda function
- DynamoDB table
- API Gateway
- CloudWatch log
- Và nhiều resource khác

Có thể hiểu AWS Account giống như “ngôi nhà chính” chứa toàn bộ tài nguyên AWS của bạn.

---

## 3. Root User là gì?

Root user là tài khoản quyền cao nhất trong AWS Account.

Root user được tạo bằng email khi đăng ký AWS.

Root user có toàn quyền với tài khoản, bao gồm các quyền rất nhạy cảm như:

- Thay đổi thông tin thanh toán
- Đóng tài khoản AWS
- Thay đổi support plan
- Quản lý một số thiết lập bảo mật cấp account
- Tạo hoặc xóa tài nguyên quan trọng

---

## 4. Vì sao không dùng Root User hằng ngày?

Root user quá mạnh.

Nếu Root user bị lộ, người khác có thể kiểm soát toàn bộ AWS Account.

Vì vậy, best practice là:

```text
Không dùng Root user cho công việc hằng ngày.
```

Thay vào đó:

1. Dùng Root user để thiết lập ban đầu.
2. Bật MFA cho Root user.
3. Tạo IAM admin user hoặc IAM Identity Center để làm việc.
4. Cất thông tin Root user an toàn.

---

## 5. MFA là gì?

MFA là viết tắt của **Multi-Factor Authentication**.

MFA yêu cầu thêm một lớp xác thực ngoài mật khẩu.

Ví dụ:

- Mật khẩu AWS
- Mã xác thực từ app như Google Authenticator, Microsoft Authenticator, Authy

Nếu chỉ có mật khẩu mà không có mã MFA, attacker khó đăng nhập hơn.

---

## 6. Vì sao MFA rất quan trọng?

Mật khẩu có thể bị lộ do:

- Dùng lại mật khẩu ở nhiều nơi
- Bị phishing
- Lưu trong máy không an toàn
- Chia sẻ nhầm
- Máy bị malware

MFA giúp giảm rủi ro khi mật khẩu bị lộ.

Trong đề thi, keyword **MFA** thường liên quan đến bảo vệ account, đặc biệt là Root user.

---

## 7. Best Practices khi tạo AWS Account

Nên làm:

- Bật MFA cho Root user.
- Không dùng Root user hằng ngày.
- Tạo IAM admin user để học.
- Dùng mật khẩu mạnh.
- Không chia sẻ access key.
- Không commit secret lên GitHub.
- Theo dõi billing để tránh phát sinh chi phí bất thường.
- Thiết lập budget alert nếu học bằng tài khoản thật.

Không nên làm:

- Dùng Root user để deploy app.
- Tạo access key cho Root user.
- Lưu password trong file text đơn giản.
- Commit `.env` có secret lên repository.

---

## 8. Kiến thức thi cần nhớ

| Tình huống | Đáp án nên nghĩ tới |
|---|---|
| Bảo vệ Root account | Bật MFA |
| Làm việc hằng ngày trên AWS | Dùng IAM user/role, không dùng Root |
| Cấp quyền theo công việc | IAM policy |
| Tránh dùng access key root | Không tạo access key cho Root user |
| Bảo vệ account khỏi login trái phép | MFA + password mạnh |

---

## 9. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| root account | Tài khoản quyền cao nhất |
| root user | Không dùng hằng ngày |
| MFA | Bảo vệ tài khoản |
| multi-factor authentication | Xác thực nhiều lớp |
| billing | Thanh toán |
| account security | Bảo mật tài khoản |
| credentials | Thông tin đăng nhập / access key |
| compromised credentials | Credentials bị lộ |

---

## 10. Bẫy thường gặp

### Bẫy 1: Tạo access key cho Root user

Đây là hành động rất nguy hiểm. Hầu hết tình huống production nên dùng IAM role hoặc IAM user có quyền giới hạn.

### Bẫy 2: Dùng Root user để học hằng ngày

Học AWS nên tạo IAM admin user riêng. Root user chỉ dùng cho tác vụ đặc biệt.

### Bẫy 3: Nghĩ MFA chỉ cần cho user thường

Root user là tài khoản cần bật MFA đầu tiên.

---

## 11. Lab thực hành

### Lab 1. Kiểm tra Root user

1. Đăng nhập AWS bằng Root user.
2. Vào phần Security credentials.
3. Kiểm tra trạng thái MFA.
4. Nếu chưa bật, bật MFA.

### Lab 2. Tạo IAM admin user để học

1. Vào IAM.
2. Tạo user mới.
3. Cấp quyền AdministratorAccess để học trong môi trường cá nhân.
4. Đăng xuất Root user.
5. Đăng nhập lại bằng IAM user.

Lưu ý: Trong production, không nên cấp quyền admin rộng nếu không cần thiết. Đây chỉ là môi trường học.

---

## 12. Câu hỏi ôn tập

1. AWS Account là gì?
2. Root user có quyền như thế nào?
3. Vì sao không nên dùng Root user hằng ngày?
4. MFA là gì?
5. Root user có nên bật MFA không?
6. Có nên tạo access key cho Root user không?
7. IAM user dùng để làm gì?
8. Nếu password bị lộ, MFA giúp gì?
9. Billing thuộc cấp tài khoản hay cấp service riêng lẻ?
10. Best practice sau khi tạo account AWS là gì?

---

## 13. Tóm tắt bài học

Root user là tài khoản quyền cao nhất trong AWS Account. Không nên dùng Root user để làm việc hằng ngày.

Việc cần làm ngay khi tạo account:

```text
Bật MFA cho Root user
Tạo IAM user/role để làm việc
Không tạo access key cho Root user
Theo dõi billing và bảo vệ credentials
```
