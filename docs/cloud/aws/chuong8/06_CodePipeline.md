# Bài 6. CodePipeline

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS CodePipeline là gì.
- Biết pipeline gồm các stage nào.
- Phân biệt CodePipeline với CodeBuild và CodeDeploy.
- Hiểu cách tự động hóa source -> build -> deploy.
- Nhận diện keyword trong đề thi.

---

## 2. CodePipeline là gì?

AWS CodePipeline là dịch vụ giúp tự động hóa quy trình release phần mềm.

CodePipeline không chỉ build hoặc deploy riêng lẻ. Nó điều phối nhiều bước trong quy trình CI/CD.

Ví dụ:

```text
Source
-> Build
-> Test
-> Deploy to staging
-> Manual approval
-> Deploy to production
```

Keyword trong đề: **automate release pipeline** → nghĩ đến **CodePipeline**.

---

## 3. Pipeline là gì?

Pipeline là dây chuyền gồm nhiều bước để đưa code từ repository đến môi trường chạy thật.

Một pipeline đơn giản:

```text
GitHub / CodeCommit
-> CodeBuild
-> CloudFormation / CodeDeploy / Elastic Beanstalk
```

---

## 4. Stage là gì?

Stage là một bước lớn trong pipeline.

Ví dụ:

| Stage | Ý nghĩa |
|---|---|
| Source | Lấy source code |
| Build | Build source code |
| Test | Chạy test |
| Deploy | Deploy app |
| Approval | Chờ người duyệt |

Mỗi stage có thể có một hoặc nhiều action.

---

## 5. Source Stage

Source stage lấy code từ nơi lưu trữ.

Có thể lấy từ:

- CodeCommit
- GitHub
- Bitbucket
- S3
- ECR

Khi có commit mới, pipeline có thể tự động chạy.

---

## 6. Build Stage

Build stage thường dùng CodeBuild.

Nhiệm vụ:

- Cài dependencies.
- Chạy test.
- Build app.
- Tạo artifact.

CodePipeline truyền source artifact vào CodeBuild và nhận build artifact đi tiếp.

---

## 7. Deploy Stage

Deploy stage có thể dùng nhiều dịch vụ:

- CodeDeploy
- CloudFormation
- SAM
- Elastic Beanstalk
- ECS
- S3

Với serverless app, deploy stage thường dùng CloudFormation/SAM.

Với Lambda traffic shifting, deploy stage có thể dùng CodeDeploy.

---

## 8. Manual Approval

Manual Approval là bước yêu cầu con người duyệt trước khi pipeline tiếp tục.

Thường dùng trước production:

```text
Deploy staging
-> Test OK
-> Manual approval
-> Deploy production
```

Trong đề thi, nếu cần người quản lý duyệt trước khi deploy production, hãy nghĩ đến **Manual Approval trong CodePipeline**.

---

## 9. Artifact trong CodePipeline

CodePipeline truyền artifact giữa các stage.

Ví dụ:

```text
Source Artifact
-> Build Artifact
-> Deploy Artifact
```

Artifact thường được lưu trong S3 artifact bucket của pipeline.

---

## 10. CodePipeline trong mini project

Với Serverless Booking API:

```text
GitHub source
-> CodeBuild: npm test + sam build
-> Deploy dev bằng SAM/CloudFormation
-> Manual approval
-> Deploy production bằng CodeDeploy canary
```

---

## 11. Phân biệt CodePipeline, CodeBuild, CodeDeploy

| Dịch vụ | Vai trò |
|---|---|
| CodePipeline | Điều phối toàn bộ pipeline |
| CodeBuild | Build source code, chạy test, tạo artifact |
| CodeDeploy | Deploy application, traffic shifting, rollback |

Cách nhớ:

```text
Pipeline = dây chuyền
Build = đóng gói
Deploy = đưa bản mới lên môi trường chạy
```

---

## 12. Kiến thức thi cần nhớ

- CodePipeline tự động hóa CI/CD pipeline.
- Pipeline gồm nhiều stage.
- Source stage lấy code.
- Build stage thường dùng CodeBuild.
- Deploy stage có thể dùng CodeDeploy, CloudFormation, SAM hoặc Elastic Beanstalk.
- Manual approval dùng để chờ người duyệt.
- Artifact được truyền giữa các stage.

---

## 13. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| automate release pipeline | CodePipeline |
| source to build to deploy | CodePipeline |
| CI/CD workflow | CodePipeline |
| manual approval before production | CodePipeline approval action |
| pipeline stage | CodePipeline |
| source artifact | CodePipeline |
| build artifact | CodeBuild / CodePipeline |

---

## 14. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn tự động hóa toàn bộ quy trình từ source code đến deploy.

Đáp án: **CodePipeline**.

### Tình huống 2

Team muốn deploy production chỉ sau khi manager duyệt.

Đáp án: **Manual approval action trong CodePipeline**.

### Tình huống 3

Pipeline cần build code trước khi deploy.

Đáp án: thêm **CodeBuild stage**.

### Tình huống 4

Pipeline cần deploy Lambda bằng canary.

Đáp án: dùng **CodeDeploy trong deploy stage**.

---

## 15. Bẫy thường gặp

- CodePipeline không trực tiếp compile code.
  - Việc đó thường do CodeBuild.

- CodePipeline không phải CloudFormation.
  - CloudFormation tạo resource.
  - CodePipeline điều phối quy trình.

- Manual approval không phải IAM permission.
  - Đây là bước duyệt trong pipeline.

- Artifact bucket không phải nơi user upload file app.
  - Nó lưu artifact của pipeline.

---

## 16. Bài tập về nhà

### Lý thuyết

1. CodePipeline là gì?
2. Pipeline là gì?
3. Stage là gì?
4. Source stage dùng để làm gì?
5. Build stage thường dùng dịch vụ nào?
6. Deploy stage có thể dùng dịch vụ nào?
7. Manual approval dùng để làm gì?
8. Artifact trong pipeline là gì?
9. CodePipeline khác CodeBuild thế nào?
10. CodePipeline khác CodeDeploy thế nào?

### Tình huống

1. Cần tự động hóa source -> build -> deploy. Chọn gì?
2. Cần build source trong pipeline. Dùng gì?
3. Cần duyệt thủ công trước production. Dùng gì?
4. Cần deploy Lambda bằng canary. Dùng gì?
5. Cần lưu artifact giữa các stage. Pipeline dùng gì?

### Lab nhỏ

Vẽ pipeline cho project Serverless Booking API:

```text
Source: GitHub
Build: CodeBuild
Deploy Dev: SAM
Approval: Manual
Deploy Prod: CodeDeploy Canary
```

Ghi chú vai trò từng stage.
