# Bài 3. Tổng ôn Domain 3: Deployment

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu các dịch vụ deployment trong AWS.
- Phân biệt SAM, CloudFormation, CodeBuild, CodeDeploy, CodePipeline.
- Biết chọn deployment strategy phù hợp.
- Biết nhận diện câu hỏi về rollback, artifact, pipeline và traffic shifting.

## 2. Domain 3 gồm những gì?

Domain 3 tập trung vào triển khai ứng dụng.

Các nội dung thường gặp:

- Infrastructure as Code.
- Build artifact.
- CI/CD pipeline.
- Serverless deployment.
- Lambda deployment.
- Canary deployment.
- Blue/green deployment.
- Rollback.
- Test trong môi trường dev/staging.

## 3. CloudFormation

CloudFormation dùng để định nghĩa infrastructure bằng code.

Cần nhớ:

- Template.
- Stack.
- Resource.
- Parameter.
- Output.
- Change set.
- Drift detection.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| infrastructure as code | CloudFormation |
| template | CloudFormation |
| stack | CloudFormation |
| preview changes before update | Change set |
| detect manual changes | Drift detection |

## 4. SAM

SAM dùng để deploy serverless application.

Cần nhớ:

- SAM template.
- `sam build`.
- `sam deploy`.
- Local invoke.
- Lambda + API Gateway deployment.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| serverless deployment | SAM |
| Lambda + API Gateway template | SAM |
| local invoke Lambda | SAM CLI |
| package serverless app | SAM build/deploy |

## 5. CodeBuild

CodeBuild dùng để build source code thành artifact.

Cần nhớ:

- Build project.
- buildspec.yml.
- Artifact.
- Environment.
- Logs.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| build artifact | CodeBuild |
| buildspec.yml | CodeBuild |
| compile and test code | CodeBuild |

## 6. CodePipeline

CodePipeline dùng để tự động hóa quy trình release.

Cần nhớ:

- Source stage.
- Build stage.
- Deploy stage.
- Manual approval.
- Artifact passing between stages.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| automate release pipeline | CodePipeline |
| source to build to deploy | CodePipeline |
| CI/CD pipeline | CodePipeline |

## 7. CodeDeploy

CodeDeploy dùng để deploy application và hỗ trợ traffic shifting/rollback.

Cần nhớ:

- Deployment group.
- AppSpec.
- Rollback.
- Lambda deployment.
- Canary / Linear deployment.

Keyword:

| Keyword | Nghĩ tới |
|---|---|
| deploy application | CodeDeploy |
| traffic shifting Lambda | CodeDeploy + Lambda Alias |
| rollback failed deployment | CodeDeploy |
| gradual deployment | Canary / Linear |

## 8. Deployment strategies

| Strategy | Ý nghĩa | Khi dùng |
|---|---|---|
| All-at-once | Deploy toàn bộ ngay | Dev/test, ít rủi ro |
| Rolling | Deploy từng phần | App truyền thống |
| Immutable | Tạo môi trường mới rồi chuyển | Giảm rủi ro |
| Blue/green | Có môi trường cũ và mới | Production cần rollback nhanh |
| Canary | Chuyển ít traffic trước | Production cần kiểm thử an toàn |
| Linear | Tăng traffic từ từ | Kiểm soát rủi ro theo từng bước |

## 9. Các bẫy thường gặp

### Bẫy 1. CodeBuild không phải pipeline hoàn chỉnh

CodeBuild chỉ build/test code. Pipeline hoàn chỉnh là CodePipeline.

### Bẫy 2. SAM khác CloudFormation

SAM là framework cho serverless và được transform thành CloudFormation.

### Bẫy 3. Traffic shifting Lambda cần version/alias

Muốn chuyển 10% traffic sang version mới, cần Lambda version/alias và thường kết hợp CodeDeploy.

### Bẫy 4. Drift detection không rollback

Drift detection dùng để phát hiện thay đổi thủ công so với template, không phải công cụ rollback chính.

## 10. Câu hỏi ôn tập nhanh

1. Cần deploy serverless app Lambda + API Gateway nên dùng gì?
2. Cần build source code thành artifact nên dùng gì?
3. Cần tự động hóa source → build → deploy nên dùng gì?
4. Cần kiểm tra thay đổi trước khi update stack nên dùng gì?
5. Cần chuyển 10% traffic sang Lambda version mới nên dùng gì?

## 11. Bài tập về nhà

- Viết bảng so sánh CodeBuild, CodeDeploy, CodePipeline.
- Làm 25 câu Deployment.
- Ghi lại các câu sai về canary, blue/green, rollback.
- Tự viết flow deploy serverless app bằng SAM.
