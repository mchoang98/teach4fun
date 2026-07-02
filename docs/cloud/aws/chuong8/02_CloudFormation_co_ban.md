# Bài 2. CloudFormation cơ bản

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu CloudFormation là gì.
- Biết khái niệm Infrastructure as Code.
- Hiểu template, stack, resource, parameter và output.
- Biết vai trò của CloudFormation trong đề thi DVA-C02.

---

## 2. CloudFormation là gì?

AWS CloudFormation là dịch vụ giúp tạo và quản lý AWS resource bằng file template.

Thay vì vào AWS Console và bấm từng bước để tạo Lambda, API Gateway, DynamoDB, ta có thể viết một file template mô tả resource cần tạo.

Ví dụ tư duy:

```text
Tôi muốn có:
- 1 Lambda function
- 1 API Gateway
- 1 DynamoDB table
- 1 IAM role
```

CloudFormation sẽ đọc template và tạo các resource đó cho ta.

---

## 3. Infrastructure as Code là gì?

Infrastructure as Code, viết tắt là IaC, nghĩa là quản lý hạ tầng bằng code.

Thay vì cấu hình thủ công, ta lưu cấu hình vào file.

Lợi ích:

- Dễ tái sử dụng.
- Dễ version control bằng Git.
- Dễ review thay đổi.
- Dễ tạo lại môi trường dev/staging/production.
- Giảm lỗi do thao tác thủ công.

Keyword trong đề: **infrastructure as code** → nghĩ đến **CloudFormation**.

---

## 4. Template là gì?

Template là file mô tả resource cần tạo.

CloudFormation template thường viết bằng:

- YAML
- JSON

Ví dụ YAML đơn giản:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: Simple S3 bucket example

Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-demo-bucket-example
```

Template trên mô tả một S3 bucket.

---

## 5. Stack là gì?

Stack là tập hợp resource được tạo từ một template CloudFormation.

Ví dụ:

```text
Template: file mô tả cần tạo gì
Stack: kết quả thật được tạo trên AWS
```

Nếu template có Lambda, API Gateway và DynamoDB, stack sẽ quản lý cả 3 resource đó.

Khi xóa stack, các resource trong stack cũng có thể bị xóa theo.

---

## 6. Resource là gì?

Resource là thành phần AWS thật được tạo ra.

Ví dụ:

- Lambda function
- S3 bucket
- DynamoDB table
- IAM role
- API Gateway
- CloudWatch Alarm

Trong template, phần quan trọng nhất thường là `Resources`.

Ví dụ:

```yaml
Resources:
  OrdersTable:
    Type: AWS::DynamoDB::Table
```

---

## 7. Parameter là gì?

Parameter cho phép truyền giá trị động vào template.

Ví dụ, thay vì hard-code tên môi trường, ta dùng parameter:

```yaml
Parameters:
  EnvironmentName:
    Type: String
    Default: dev
```

Khi deploy, ta có thể truyền:

```text
EnvironmentName = staging
EnvironmentName = production
```

Lợi ích:

- Một template dùng cho nhiều môi trường.
- Tránh copy nhiều file gần giống nhau.
- Dễ tái sử dụng.

---

## 8. Output là gì?

Output dùng để xuất thông tin sau khi stack được tạo.

Ví dụ:

- API endpoint
- Bucket name
- DynamoDB table name
- Lambda function ARN

Ví dụ:

```yaml
Outputs:
  BucketName:
    Description: Name of the created bucket
    Value: !Ref MyBucket
```

---

## 9. Cấu trúc template cơ bản

Một template CloudFormation thường có các phần:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: Demo template

Parameters:
  EnvironmentName:
    Type: String
    Default: dev

Resources:
  MyBucket:
    Type: AWS::S3::Bucket

Outputs:
  BucketName:
    Value: !Ref MyBucket
```

Trong đề thi DVA, bạn không cần nhớ toàn bộ syntax, nhưng cần hiểu template dùng để tạo resource bằng code.

---

## 10. Kiến thức thi cần nhớ

- CloudFormation là dịch vụ Infrastructure as Code của AWS.
- Template mô tả resource cần tạo.
- Stack là tập hợp resource được tạo từ template.
- Resource là thành phần AWS thật.
- Parameter giúp template linh hoạt.
- Output xuất thông tin sau khi deploy.
- CloudFormation giúp tái tạo môi trường nhất quán.

---

## 11. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| infrastructure as code | CloudFormation |
| template | CloudFormation file |
| stack | CloudFormation stack |
| parameter | input value for template |
| output | exported value |
| repeatable infrastructure | CloudFormation |
| version controlled infrastructure | CloudFormation |

---

## 12. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn tạo cùng một bộ resource ở dev, staging và production mà không bấm tay trên Console.

Đáp án: **CloudFormation**.

### Tình huống 2

Team muốn lưu định nghĩa infrastructure trong Git để review thay đổi.

Đáp án: **CloudFormation template**.

### Tình huống 3

Team muốn truyền tên môi trường khi deploy template.

Đáp án: **Parameters**.

### Tình huống 4

Sau khi deploy, team muốn lấy API endpoint để dùng ở bước tiếp theo.

Đáp án: **Outputs**.

---

## 13. Bẫy thường gặp

- CloudFormation không phải dịch vụ build code.
  - Build code là CodeBuild.

- CloudFormation không phải pipeline.
  - Pipeline là CodePipeline.

- CloudFormation không chỉ dùng cho serverless.
  - Nó có thể tạo nhiều loại resource AWS.

- SAM không thay thế hoàn toàn CloudFormation.
  - SAM là framework serverless được xây trên CloudFormation.

---

## 14. Bài tập về nhà

### Lý thuyết

1. CloudFormation là gì?
2. Infrastructure as Code là gì?
3. Template là gì?
4. Stack là gì?
5. Resource là gì?
6. Parameter dùng để làm gì?
7. Output dùng để làm gì?
8. Vì sao nên quản lý infrastructure bằng code?
9. CloudFormation khác CodeBuild ở điểm nào?
10. CloudFormation khác CodePipeline ở điểm nào?

### Tình huống

1. Cần tạo resource giống nhau ở nhiều môi trường. Chọn gì?
2. Cần lưu hạ tầng trong Git. Chọn gì?
3. Cần truyền tên môi trường khi deploy. Dùng thành phần nào?
4. Cần lấy endpoint sau khi deploy. Dùng thành phần nào?
5. Cần build source code. Có dùng CloudFormation không?

### Lab nhỏ

Tạo một file `template.yaml` mô tả bằng comment:

```yaml
# Tạo một S3 bucket
# Tạo một DynamoDB table
# Xuất ra tên bucket ở Outputs
```

Chưa cần deploy thật, chỉ cần hiểu cấu trúc file.
