# Bài 4. AWS SAM

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS SAM là gì.
- Biết SAM dùng để deploy serverless app.
- Hiểu quan hệ giữa SAM và CloudFormation.
- Biết các lệnh cơ bản: `sam build`, `sam deploy`, `sam local invoke`.
- Biết cách SAM triển khai Lambda và API Gateway.

---

## 2. AWS SAM là gì?

AWS SAM là viết tắt của **Serverless Application Model**.

SAM là framework giúp xây dựng và deploy ứng dụng serverless trên AWS.

SAM thường dùng cho:

- Lambda
- API Gateway
- DynamoDB
- SQS
- SNS
- EventBridge
- IAM Role

Keyword trong đề: **serverless deployment** → nghĩ đến **SAM**.

---

## 3. SAM và CloudFormation khác nhau thế nào?

SAM được xây trên CloudFormation.

Có thể hiểu đơn giản:

```text
CloudFormation = công cụ IaC tổng quát
SAM = công cụ IaC tối ưu cho serverless
```

SAM template nhìn gọn hơn CloudFormation khi viết Lambda/API Gateway.

Khi deploy, SAM sẽ chuyển template thành CloudFormation stack.

---

## 4. Cấu trúc project SAM cơ bản

Một project SAM thường có dạng:

```text
serverless-booking-api/
  template.yaml
  src/
    app.js
  events/
    event.json
  package.json
```

Trong đó:

| Thành phần | Ý nghĩa |
|---|---|
| template.yaml | Mô tả serverless resource |
| src/ | Source code Lambda |
| events/ | Event mẫu để test local |
| package.json | Dependencies nếu dùng Node.js |

---

## 5. SAM template cơ bản

Ví dụ template đơn giản:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: Simple SAM app

Resources:
  HelloFunction:
    Type: AWS::Serverless::Function
    Properties:
      Runtime: nodejs20.x
      Handler: app.handler
      CodeUri: src/
      Events:
        HelloApi:
          Type: Api
          Properties:
            Path: /hello
            Method: get
```

Điểm quan trọng:

- `Transform: AWS::Serverless-2016-10-31` cho biết đây là SAM template.
- `AWS::Serverless::Function` dùng để khai báo Lambda.
- `Events` có thể tự tạo API Gateway trigger.

---

## 6. sam build

Lệnh `sam build` dùng để build ứng dụng serverless.

Ví dụ:

```bash
sam build
```

Lệnh này sẽ:

- Đọc template.
- Cài dependencies nếu cần.
- Chuẩn bị source code để deploy.
- Tạo thư mục `.aws-sam/build`.

Keyword: **build serverless application** → SAM build.

---

## 7. sam deploy

Lệnh `sam deploy` dùng để deploy app lên AWS.

Ví dụ lần đầu:

```bash
sam deploy --guided
```

Sau khi cấu hình xong, có thể dùng:

```bash
sam deploy
```

SAM deploy sẽ tạo hoặc update CloudFormation stack.

---

## 8. sam local invoke

Lệnh `sam local invoke` dùng để chạy Lambda local.

Ví dụ:

```bash
sam local invoke HelloFunction
```

Có thể truyền event mẫu:

```bash
sam local invoke HelloFunction -e events/event.json
```

Lợi ích:

- Test Lambda trước khi deploy.
- Giảm thời gian debug.
- Kiểm tra event input.

---

## 9. SAM local start-api

Lệnh `sam local start-api` dùng để chạy API Gateway + Lambda giả lập ở local.

Ví dụ:

```bash
sam local start-api
```

Sau đó có thể gọi:

```text
http://localhost:3000/hello
```

---

## 10. SAM trong mini project Serverless Booking API

Trong project, ta có thể dùng SAM để tạo:

```text
API Gateway
-> Lambda createBooking
-> DynamoDB Orders table
-> SQS queue
-> Worker Lambda
```

SAM giúp gom infrastructure và code deployment vào một template.

---

## 11. Kiến thức thi cần nhớ

- SAM dùng cho serverless application.
- SAM được xây trên CloudFormation.
- `sam build` dùng để build app.
- `sam deploy` dùng để deploy app.
- `sam local invoke` dùng để test Lambda local.
- `sam local start-api` dùng để test API local.
- SAM template có `Transform: AWS::Serverless-2016-10-31`.

---

## 12. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| serverless application | SAM |
| serverless deployment | SAM |
| sam build | Build serverless app |
| sam deploy | Deploy serverless app |
| local invoke Lambda | SAM local invoke |
| local API testing | SAM local start-api |
| AWS::Serverless::Function | SAM Lambda function |

---

## 13. Dạng câu hỏi exam thường gặp

### Tình huống 1

Developer muốn deploy Lambda + API Gateway bằng template đơn giản cho serverless app.

Đáp án: **AWS SAM**.

### Tình huống 2

Developer muốn test Lambda trên máy local trước khi deploy.

Đáp án: **sam local invoke**.

### Tình huống 3

Developer muốn test API Gateway + Lambda local.

Đáp án: **sam local start-api**.

### Tình huống 4

Team muốn deploy serverless app và quản lý bằng CloudFormation stack.

Đáp án: **SAM**.

---

## 14. Bẫy thường gặp

- SAM không phải chỉ để viết code Lambda.
  - SAM dùng để build/deploy serverless app.

- SAM không tách rời CloudFormation.
  - SAM chạy dựa trên CloudFormation.

- `sam build` không deploy lên AWS.
  - Deploy là `sam deploy`.

- `sam local invoke` không tạo resource thật trên AWS.
  - Nó chỉ test local.

---

## 15. Bài tập về nhà

### Lý thuyết

1. SAM là gì?
2. SAM phù hợp với loại app nào?
3. SAM liên quan gì đến CloudFormation?
4. `sam build` dùng để làm gì?
5. `sam deploy` dùng để làm gì?
6. `sam local invoke` dùng để làm gì?
7. `sam local start-api` dùng để làm gì?
8. SAM template có dòng Transform nào?
9. SAM có thể tạo API Gateway không?
10. SAM có thể tạo DynamoDB table không?

### Tình huống

1. Cần deploy Lambda + API Gateway. Chọn gì?
2. Cần test Lambda local. Dùng lệnh gì?
3. Cần test API local. Dùng lệnh gì?
4. Cần deploy serverless app bằng IaC. Chọn gì?
5. Cần build serverless app trước khi deploy. Dùng lệnh gì?

### Lab nhỏ

Tạo cấu trúc project giả lập:

```text
serverless-booking-api/
  template.yaml
  src/
    app.js
  events/
    create-booking.json
```

Viết comment trong `template.yaml` mô tả:

```yaml
# Lambda createBooking
# API POST /bookings
# DynamoDB Orders table
```
