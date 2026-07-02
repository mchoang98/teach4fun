# Chương 8. Deployment, CI/CD và Infrastructure as Code

## Mục tiêu chương

Sau chương này, học viên có thể:

- Hiểu vai trò của Deployment trong vòng đời phát triển ứng dụng AWS.
- Phân biệt được CloudFormation, SAM, CodeBuild, CodePipeline và CodeDeploy.
- Biết cách triển khai ứng dụng serverless bằng SAM.
- Hiểu các chiến lược deployment thường gặp trong đề thi DVA-C02.
- Nhận diện keyword tiếng Anh liên quan đến CI/CD và Infrastructure as Code.

---

## Danh sách bài học

1. Bài 1. Tổng quan Deployment trên AWS
2. Bài 2. CloudFormation cơ bản
3. Bài 3. CloudFormation nâng cao
4. Bài 4. AWS SAM
5. Bài 5. CodeBuild
6. Bài 6. CodePipeline
7. Bài 7. CodeDeploy
8. Bài 8. Deployment Strategies
9. Bài 9. Deploy Lambda an toàn
10. Bài 10. Bài kiểm tra cuối chương

---

## Mini project trong chương

Trong chương này, học viên sẽ tiếp tục project **Serverless Booking API** bằng cách:

- Viết SAM template cho Lambda + API Gateway.
- Deploy project bằng SAM CLI.
- Tạo CodeBuild để build source code.
- Tạo CodePipeline để tự động hóa CI/CD.
- Dùng CodeDeploy để triển khai Lambda theo chiến lược canary.

---

## Keyword cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| infrastructure as code | CloudFormation |
| serverless deployment | SAM |
| build artifact | CodeBuild |
| buildspec.yml | CodeBuild |
| automate release pipeline | CodePipeline |
| deploy application | CodeDeploy |
| traffic shifting Lambda | CodeDeploy + Lambda Alias |
| gradual deployment | Canary / Linear |
| separate old and new environment | Blue/green |
| detect manual changes | CloudFormation Drift Detection |
