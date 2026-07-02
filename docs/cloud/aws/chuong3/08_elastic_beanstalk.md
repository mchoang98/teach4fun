# Bài 8. Elastic Beanstalk

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Elastic Beanstalk là gì.
- Biết các thành phần chính của Elastic Beanstalk.
- Hiểu deployment policy cơ bản.
- Biết khi nào chọn Elastic Beanstalk trong đề thi.

---

## 2. Elastic Beanstalk là gì?

Elastic Beanstalk là dịch vụ giúp deploy và quản lý ứng dụng web dễ hơn.

Bạn upload code, AWS có thể tự xử lý phần hạ tầng như:

- EC2
- Load Balancer
- Auto Scaling Group
- Security Group
- Monitoring
- Deployment

Bạn vẫn có thể cấu hình hạ tầng, nhưng không cần tự tạo từng resource từ đầu.

---

## 3. Khi nào dùng Elastic Beanstalk?

Elastic Beanstalk phù hợp khi:

- Có app web truyền thống.
- Muốn deploy nhanh.
- Không muốn tự cấu hình EC2, Load Balancer, Auto Scaling.
- Muốn AWS quản lý môi trường chạy app ở mức cao hơn EC2.

Ví dụ:

```text
Developer có app Node.js backend
Muốn deploy lên AWS nhanh
Không muốn tự tạo EC2 + Nginx + Load Balancer
=> Elastic Beanstalk
```

---

## 4. Application

Application là cấp cao nhất trong Elastic Beanstalk.

Nó đại diện cho một ứng dụng.

Ví dụ:

```text
Application: booking-api
```

Trong application có thể có nhiều environment.

---

## 5. Environment

Environment là môi trường chạy app.

Ví dụ:

```text
booking-api-dev
booking-api-staging
booking-api-prod
```

Mỗi environment có thể có:

- EC2 instance
- Load Balancer
- Auto Scaling
- Environment variables
- Deployment settings

---

## 6. Platform

Platform là môi trường runtime mà app sử dụng.

Ví dụ:

- Node.js
- Python
- Java
- PHP
- .NET
- Go
- Ruby
- Docker

Developer chọn platform phù hợp với app.

---

## 7. Deployment Policies

Elastic Beanstalk hỗ trợ nhiều cách deploy.

### All at once

Deploy toàn bộ cùng lúc.

Ưu điểm:

- Nhanh

Nhược điểm:

- Rủi ro downtime cao hơn

### Rolling

Deploy từng nhóm instance.

Ưu điểm:

- Ít rủi ro hơn all at once

Nhược điểm:

- Trong lúc deploy có thể giảm capacity

### Rolling with additional batch

Tạo thêm batch mới trong lúc deploy để giữ capacity.

Ưu điểm:

- Ít ảnh hưởng user hơn rolling thường

### Immutable

Tạo instance mới với version mới, kiểm tra ổn rồi thay thế.

Ưu điểm:

- An toàn hơn

Nhược điểm:

- Chậm hơn, có thể tốn chi phí hơn

---

## 8. Elastic Beanstalk không phải là gì?

Elastic Beanstalk không phải là serverless giống Lambda.

Bên dưới Elastic Beanstalk vẫn có tài nguyên như EC2.

Điểm khác biệt là AWS giúp bạn quản lý nhiều phần tự động hơn so với EC2 thuần.

---

## 9. Kiến thức thi cần nhớ

- Elastic Beanstalk là Platform as a Service.
- Phù hợp để deploy web app nhanh.
- Bên dưới có thể dùng EC2, Load Balancer, Auto Scaling.
- Application chứa nhiều environment.
- Platform là runtime như Node.js, Python, Java.
- Immutable deployment an toàn hơn rolling/all-at-once.

---

## 10. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| simple web app deployment | Elastic Beanstalk |
| platform as a service | Elastic Beanstalk |
| managed application environment | Elastic Beanstalk |
| application environment | Elastic Beanstalk Environment |
| deployment policy | Rolling / Immutable |
| safer deployment | Immutable |
| fastest deployment | All at once |

---

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

Developer muốn deploy app Python nhanh, không tự quản lý EC2 chi tiết.

Đáp án nên nghĩ tới: **Elastic Beanstalk**.

### Tình huống 2

Cần deploy version mới an toàn, tránh ảnh hưởng môi trường hiện tại.

Đáp án nên nghĩ tới: **Immutable deployment**.

### Tình huống 3

Cần deploy nhanh nhất, chấp nhận rủi ro downtime.

Đáp án có thể là: **All at once**.

---

## 12. Bẫy thường gặp

- Elastic Beanstalk không phải Lambda.
- Elastic Beanstalk giúp deploy app, nhưng không phải lúc nào cũng là kiến trúc serverless.
- All at once nhanh nhưng rủi ro cao.
- Immutable an toàn hơn nhưng có thể chậm và tốn tài nguyên hơn.

---

## 13. Bài tập về nhà

### Lý thuyết

1. Elastic Beanstalk là gì?
2. Application khác Environment như thế nào?
3. Platform là gì?
4. Rolling deployment là gì?
5. Immutable deployment có ưu điểm gì?

### Lab đề xuất

- Tạo ứng dụng Node.js hoặc Python đơn giản.
- Deploy lên Elastic Beanstalk.
- Tạo environment dev.
- Thử cập nhật version mới.
- Quan sát deployment event.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
