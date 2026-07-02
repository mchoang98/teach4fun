# Bài 1. Tổng quan Deployment trên AWS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Deployment là gì.
- Biết vì sao developer cần quan tâm đến deployment.
- Hiểu artifact, CI/CD và môi trường deploy.
- Biết các dịch vụ AWS thường dùng trong deployment.
- Nhận diện được keyword cơ bản trong đề thi.

---

## 2. Deployment là gì?

Deployment là quá trình đưa source code hoặc ứng dụng từ môi trường phát triển lên môi trường chạy thật.

Ví dụ:

```text
Developer viết code
-> Build ứng dụng
-> Tạo artifact
-> Deploy lên AWS
-> User sử dụng ứng dụng
```

Với developer, deployment không chỉ là "upload code". Trong AWS, deployment thường liên quan đến:

- Build source code.
- Đóng gói artifact.
- Tạo hoặc cập nhật infrastructure.
- Deploy Lambda, API Gateway, EC2 hoặc Elastic Beanstalk.
- Rollback nếu bản mới lỗi.
- Theo dõi logs và metrics sau khi deploy.

---

## 3. Artifact là gì?

Artifact là kết quả sau bước build, dùng để deploy.

Ví dụ:

| Loại app | Artifact có thể là |
|---|---|
| Node.js Lambda | File `.zip` chứa code và dependencies |
| Java app | File `.jar` |
| Frontend app | Thư mục `dist/` hoặc `build/` |
| Docker app | Docker image |
| Serverless app | Packaged template + source code |

Trong đề thi, keyword **build artifact** thường liên quan đến **CodeBuild**.

---

## 4. CI/CD là gì?

CI/CD là quy trình tự động hóa build, test và deploy ứng dụng.

CI là **Continuous Integration**:

- Developer push code.
- Hệ thống tự động build.
- Hệ thống tự động chạy test.
- Báo lỗi nếu code không ổn.

CD là **Continuous Delivery / Continuous Deployment**:

- Tự động chuẩn bị bản deploy.
- Tự động triển khai lên môi trường dev/staging/production.
- Có thể tự động rollback khi lỗi.

---

## 5. Các môi trường deploy thường gặp

Một dự án thực tế thường có nhiều môi trường:

| Môi trường | Ý nghĩa |
|---|---|
| local | Chạy trên máy developer |
| dev | Môi trường phát triển |
| staging | Môi trường kiểm thử gần giống production |
| production | Môi trường thật cho user |

Trong đề thi, nếu câu hỏi nói cần test trước khi production, hãy nghĩ đến staging, deployment strategy, CodePipeline hoặc CodeDeploy.

---

## 6. Các dịch vụ AWS liên quan đến Deployment

| Dịch vụ | Vai trò |
|---|---|
| CloudFormation | Tạo infrastructure bằng code |
| SAM | Deploy serverless app |
| CodeBuild | Build source code thành artifact |
| CodePipeline | Tự động hóa pipeline |
| CodeDeploy | Deploy app và hỗ trợ rollback/traffic shifting |
| Elastic Beanstalk | Deploy web app nhanh, ít quản lý infrastructure |
| S3 | Lưu artifact |
| ECR | Lưu Docker image |

---

## 7. Giải thích dễ hiểu

Hãy tưởng tượng deployment giống như quy trình giao hàng:

```text
Source code = nguyên liệu
Build = đóng gói sản phẩm
Artifact = thùng hàng đã đóng gói
Pipeline = dây chuyền giao hàng
Deploy = giao hàng đến server/cloud
Rollback = thu hồi hàng lỗi và quay lại bản cũ
```

AWS cung cấp nhiều dịch vụ để tự động hóa toàn bộ quy trình này.

---

## 8. Kiến thức thi cần nhớ

- Muốn quản lý infrastructure bằng code: **CloudFormation**.
- Muốn deploy serverless app: **SAM**.
- Muốn build source code: **CodeBuild**.
- Muốn tạo pipeline tự động: **CodePipeline**.
- Muốn deploy và rollback ứng dụng: **CodeDeploy**.
- Muốn traffic shifting cho Lambda: **CodeDeploy + Lambda Alias**.

---

## 9. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| build artifact | CodeBuild |
| automate deployment | CodePipeline |
| infrastructure as code | CloudFormation |
| serverless deployment | SAM |
| rollback deployment | CodeDeploy |
| traffic shifting | CodeDeploy / Lambda Alias |
| blue/green deployment | CodeDeploy |
| canary deployment | CodeDeploy |

---

## 10. Dạng câu hỏi exam thường gặp

### Tình huống 1

Một team muốn tự động build source code sau khi developer push code.

Đáp án nên nghĩ tới: **CodeBuild**.

### Tình huống 2

Một team muốn tự động hóa toàn bộ quy trình source -> build -> deploy.

Đáp án nên nghĩ tới: **CodePipeline**.

### Tình huống 3

Một app Lambda cần triển khai bản mới cho 10% user trước, sau đó tăng dần.

Đáp án nên nghĩ tới: **CodeDeploy + Lambda Alias + Canary/Linear**.

### Tình huống 4

Một team muốn tạo toàn bộ resource AWS bằng file template.

Đáp án nên nghĩ tới: **CloudFormation**.

---

## 11. Bẫy thường gặp

- Nhầm CodeBuild với CodePipeline.
  - CodeBuild chỉ build.
  - CodePipeline điều phối cả pipeline.

- Nhầm SAM với CloudFormation.
  - SAM dùng cho serverless.
  - SAM được xây trên CloudFormation.

- Nhầm CodeDeploy với CodeBuild.
  - CodeBuild tạo artifact.
  - CodeDeploy triển khai artifact.

---

## 12. Bài tập về nhà

### Lý thuyết

1. Deployment là gì?
2. Artifact là gì?
3. CI/CD là gì?
4. CodeBuild dùng để làm gì?
5. CodePipeline dùng để làm gì?
6. CodeDeploy dùng để làm gì?
7. CloudFormation dùng để làm gì?
8. SAM phù hợp với loại ứng dụng nào?
9. Rollback là gì?
10. Vì sao production cần deployment strategy an toàn?

### Tình huống

1. App cần build tự động sau khi push code. Chọn service nào?
2. App cần pipeline từ source đến deploy. Chọn service nào?
3. App Lambda cần traffic shifting. Chọn service nào?
4. Team muốn quản lý resource bằng code. Chọn service nào?
5. Web app đơn giản muốn deploy nhanh. Có thể dùng service nào?

### Lab nhỏ

Tìm hiểu giao diện AWS Console của các dịch vụ:

- CodeBuild
- CodePipeline
- CodeDeploy
- CloudFormation
- Lambda

Không cần tạo resource, chỉ cần quan sát các thành phần chính.
