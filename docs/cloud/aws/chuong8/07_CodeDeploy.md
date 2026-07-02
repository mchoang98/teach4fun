# Bài 7. CodeDeploy

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS CodeDeploy là gì.
- Biết CodeDeploy dùng để deploy ứng dụng.
- Hiểu deployment group, AppSpec và rollback.
- Biết CodeDeploy hỗ trợ Lambda traffic shifting.
- Nhận diện các keyword trong đề thi.

---

## 2. CodeDeploy là gì?

AWS CodeDeploy là dịch vụ tự động hóa việc triển khai ứng dụng lên môi trường chạy.

CodeDeploy có thể deploy đến:

- EC2
- On-premises server
- Lambda
- ECS

Trong DVA-C02, phần quan trọng với developer là:

- Deploy Lambda.
- Traffic shifting.
- Canary deployment.
- Linear deployment.
- Rollback khi lỗi.

---

## 3. CodeDeploy khác CodeBuild thế nào?

| Dịch vụ | Vai trò |
|---|---|
| CodeBuild | Build source code thành artifact |
| CodeDeploy | Deploy artifact/app lên môi trường chạy |

Cách nhớ:

```text
CodeBuild = đóng gói
CodeDeploy = triển khai
```

---

## 4. Deployment Group là gì?

Deployment Group là nhóm tài nguyên mà CodeDeploy sẽ deploy vào.

Ví dụ:

- Nhóm EC2 instance.
- Lambda function alias.
- ECS service.

Với Lambda, deployment group thường liên quan đến alias và traffic shifting.

---

## 5. AppSpec là gì?

AppSpec file mô tả cách CodeDeploy triển khai ứng dụng.

Với Lambda, AppSpec có thể mô tả:

- Lambda function name.
- Current version.
- Target version.
- Hooks trước/sau khi traffic shifting.

Trong đề thi, không cần nhớ chi tiết syntax, nhưng cần biết AppSpec liên quan đến CodeDeploy.

---

## 6. Rollback trong CodeDeploy

Rollback là quay lại version ổn định trước đó khi deployment lỗi.

CodeDeploy có thể rollback khi:

- Deployment fail.
- CloudWatch Alarm bị kích hoạt.
- Health check không đạt.

Ví dụ:

```text
Deploy Lambda version 2
-> Error tăng cao
-> Alarm kích hoạt
-> CodeDeploy rollback về version 1
```

---

## 7. CodeDeploy với Lambda

Lambda thường dùng version và alias để deploy an toàn.

Ví dụ:

```text
Alias production đang trỏ tới version 1
Deploy version 2
CodeDeploy chuyển 10% traffic sang version 2
Nếu ổn, tăng dần đến 100%
Nếu lỗi, rollback về version 1
```

---

## 8. Traffic shifting

Traffic shifting là chuyển dần traffic từ version cũ sang version mới.

Các kiểu phổ biến:

- Canary
- Linear
- All-at-once

Trong đề thi, nếu thấy keyword:

```text
gradually shift traffic
```

hãy nghĩ đến:

```text
CodeDeploy + Lambda Alias
```

---

## 9. Deployment hooks

Hooks là các bước kiểm tra trước hoặc sau khi deploy.

Ví dụ:

- BeforeAllowTraffic
- AfterAllowTraffic

Có thể dùng Lambda hook để kiểm tra bản mới trước khi nhận traffic thật.

---

## 10. CodeDeploy trong mini project

Với Serverless Booking API:

```text
Lambda createBooking version 1 đang chạy production
-> Deploy version 2
-> CodeDeploy canary 10% trong 10 phút
-> Nếu không lỗi, chuyển 100%
-> Nếu lỗi, rollback
```

---

## 11. Kiến thức thi cần nhớ

- CodeDeploy dùng để deploy application.
- CodeDeploy hỗ trợ rollback.
- CodeDeploy hỗ trợ Lambda traffic shifting.
- Lambda deployment an toàn cần version và alias.
- Canary/Linear deployment thường liên quan đến CodeDeploy.
- CloudWatch Alarm có thể kích hoạt rollback.
- AppSpec liên quan đến cấu hình deploy.

---

## 12. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| deploy application | CodeDeploy |
| rollback deployment | CodeDeploy |
| traffic shifting | CodeDeploy + Lambda Alias |
| canary deployment | CodeDeploy |
| linear deployment | CodeDeploy |
| deployment group | CodeDeploy |
| AppSpec file | CodeDeploy |
| alarm triggered rollback | CodeDeploy + CloudWatch Alarm |

---

## 13. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn deploy Lambda version mới cho một phần nhỏ traffic trước.

Đáp án: **CodeDeploy canary deployment với Lambda alias**.

### Tình huống 2

Deployment version mới làm error tăng, cần tự động quay lại version cũ.

Đáp án: **CodeDeploy rollback kết hợp CloudWatch Alarm**.

### Tình huống 3

Team cần cấu hình cách ứng dụng được deploy.

Đáp án: **AppSpec file**.

### Tình huống 4

Team cần deploy application chứ không phải build code.

Đáp án: **CodeDeploy**.

---

## 14. Bẫy thường gặp

- CodeDeploy không dùng để build code.
  - Build là CodeBuild.

- CodeDeploy không tự tạo toàn bộ pipeline.
  - Pipeline là CodePipeline.

- Traffic shifting Lambda cần version/alias.
  - Không chỉ deploy code trực tiếp lên `$LATEST`.

- Canary deployment không phải chia traffic 50/50 ngay lập tức.
  - Canary thường đưa một phần nhỏ traffic trước.

---

## 15. Bài tập về nhà

### Lý thuyết

1. CodeDeploy là gì?
2. CodeDeploy dùng để làm gì?
3. CodeDeploy khác CodeBuild thế nào?
4. Deployment Group là gì?
5. AppSpec là gì?
6. Rollback là gì?
7. Traffic shifting là gì?
8. Lambda alias có vai trò gì trong deployment?
9. Canary deployment là gì?
10. CloudWatch Alarm liên quan gì đến rollback?

### Tình huống

1. Cần deploy Lambda version mới cho 10% user trước. Chọn gì?
2. Cần rollback khi error tăng. Dùng gì?
3. Cần build source code. Có dùng CodeDeploy không?
4. Cần điều phối source -> build -> deploy. Chọn gì?
5. Cần cấu hình deployment hooks. File nào liên quan?

### Lab nhỏ

Mô phỏng flow deploy Lambda:

```text
Version 1: stable
Version 2: new release
Alias production: ban đầu trỏ version 1
Canary: chuyển 10% traffic sang version 2
Nếu OK: chuyển 100%
Nếu lỗi: rollback về version 1
```

Viết lại flow này bằng sơ đồ text.
