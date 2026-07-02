# Bài 5. CodeBuild

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS CodeBuild là gì.
- Biết CodeBuild dùng để build source code thành artifact.
- Hiểu file `buildspec.yml`.
- Biết vai trò của CodeBuild trong CI/CD pipeline.
- Nhận diện keyword thường gặp trong đề thi.

---

## 2. CodeBuild là gì?

AWS CodeBuild là dịch vụ build được quản lý bởi AWS.

CodeBuild có thể:

- Lấy source code.
- Cài dependencies.
- Chạy test.
- Build ứng dụng.
- Tạo artifact.
- Gửi log đến CloudWatch.

Keyword trong đề: **build artifact** → nghĩ đến **CodeBuild**.

---

## 3. Vì sao cần CodeBuild?

Nếu không có CodeBuild, developer thường build trên máy cá nhân.

Vấn đề:

- Máy mỗi người có version khác nhau.
- Có thể quên chạy test.
- Artifact tạo ra không nhất quán.
- Khó tự động hóa.

CodeBuild giúp build trong môi trường chuẩn và có thể lặp lại.

---

## 4. Quy trình CodeBuild cơ bản

```text
Source code
-> CodeBuild project
-> Install dependencies
-> Run tests
-> Build application
-> Create artifact
-> Store artifact
```

CodeBuild thường được gọi bởi CodePipeline.

---

## 5. Build project là gì?

Build project là cấu hình build trong CodeBuild.

Một build project thường có:

- Source provider.
- Build environment.
- Runtime version.
- Service role.
- Buildspec file.
- Artifact output.
- Logs configuration.

---

## 6. buildspec.yml là gì?

`buildspec.yml` là file hướng dẫn CodeBuild cần chạy những lệnh nào.

Ví dụ:

```yaml
version: 0.2

phases:
  install:
    runtime-versions:
      nodejs: 20
    commands:
      - npm ci
  build:
    commands:
      - npm test
      - npm run build

artifacts:
  files:
    - '**/*'
```

---

## 7. Các phase trong buildspec

`buildspec.yml` thường có các phase:

| Phase | Ý nghĩa |
|---|---|
| install | Cài runtime/dependencies |
| pre_build | Chuẩn bị trước khi build |
| build | Chạy test/build chính |
| post_build | Xử lý sau build |

Không phải project nào cũng cần đủ tất cả phase.

---

## 8. Artifact trong CodeBuild

Artifact là kết quả sau build.

Ví dụ:

- File `.zip` Lambda.
- File `.jar` Java.
- Folder frontend build.
- Packaged SAM template.
- Docker image metadata.

Artifact thường được lưu ở S3 hoặc truyền cho bước deploy trong CodePipeline.

---

## 9. CodeBuild Service Role

CodeBuild cần IAM role để truy cập AWS resource.

Ví dụ, CodeBuild có thể cần quyền:

- Đọc source code.
- Ghi artifact vào S3.
- Ghi logs vào CloudWatch.
- Push image vào ECR.
- Deploy bằng SAM/CloudFormation nếu pipeline yêu cầu.

Best practice: cấp quyền theo **least privilege**.

---

## 10. Logs trong CodeBuild

CodeBuild có thể gửi logs đến CloudWatch Logs.

Khi build lỗi, cần kiểm tra:

- Lệnh nào fail.
- Dependency có cài được không.
- Test case nào fail.
- IAM permission có đủ không.

---

## 11. CodeBuild trong mini project

Với Serverless Booking API, CodeBuild có thể chạy:

```bash
npm ci
npm test
sam build
sam package
```

Sau đó tạo artifact cho bước deploy.

---

## 12. Kiến thức thi cần nhớ

- CodeBuild dùng để build source code.
- `buildspec.yml` định nghĩa các lệnh build.
- CodeBuild có thể chạy test.
- CodeBuild tạo artifact.
- CodeBuild cần IAM service role.
- Logs build có thể xem trong CloudWatch Logs.
- CodeBuild thường là một stage trong CodePipeline.

---

## 13. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| build artifact | CodeBuild |
| buildspec.yml | CodeBuild |
| run unit tests | CodeBuild |
| compile source code | CodeBuild |
| managed build service | CodeBuild |
| build logs | CloudWatch Logs / CodeBuild |
| build environment | CodeBuild |

---

## 14. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn tự động chạy unit test và build source code khi có commit mới.

Đáp án: **CodeBuild**.

### Tình huống 2

Build bị lỗi, developer cần xem log của từng command.

Đáp án: **CodeBuild logs trong CloudWatch Logs**.

### Tình huống 3

CodeBuild không thể upload artifact lên S3.

Đáp án: kiểm tra **CodeBuild service role permission**.

### Tình huống 4

Team cần định nghĩa command build trong file của repo.

Đáp án: **buildspec.yml**.

---

## 15. Bẫy thường gặp

- CodeBuild không phải pipeline đầy đủ.
  - Pipeline là CodePipeline.

- CodeBuild không tự động deploy nếu không cấu hình.
  - Deploy thường do CodeDeploy, CloudFormation hoặc SAM thực hiện.

- `buildspec.yml` không phải CloudFormation template.
  - Nó chỉ chứa lệnh build.

- Build fail không phải lúc nào cũng do code.
  - Có thể do IAM permission, dependency hoặc environment.

---

## 16. Bài tập về nhà

### Lý thuyết

1. CodeBuild là gì?
2. CodeBuild dùng để làm gì?
3. `buildspec.yml` là gì?
4. Artifact là gì?
5. CodeBuild logs nằm ở đâu?
6. CodeBuild service role dùng để làm gì?
7. CodeBuild khác CodePipeline thế nào?
8. CodeBuild có chạy test được không?
9. CodeBuild có tạo Docker image được không?
10. Vì sao nên dùng managed build service?

### Tình huống

1. Cần build source code thành artifact. Chọn gì?
2. Cần chạy test tự động. Chọn gì?
3. Build không upload được artifact lên S3. Kiểm tra gì?
4. Cần định nghĩa command build trong repo. Dùng file gì?
5. Cần xem lỗi build. Xem ở đâu?

### Lab nhỏ

Viết file `buildspec.yml` mẫu cho Node.js:

```yaml
version: 0.2

phases:
  install:
    commands:
      - npm ci
  build:
    commands:
      - npm test
      - npm run build

artifacts:
  files:
    - '**/*'
```

Giải thích từng dòng bằng comment tiếng Việt.
