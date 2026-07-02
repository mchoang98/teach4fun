# Bài 4. Stage và Deployment

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu stage trong API Gateway.
- Biết cách deploy API ra các môi trường khác nhau.
- Biết stage variables dùng để làm gì.
- Hiểu ý nghĩa của dev, staging và production.

---

## 2. Giải thích dễ hiểu

Trong dự án thực tế, ta thường có nhiều môi trường:

```text
Development -> Staging -> Production
```

API Gateway dùng stage để đại diện cho từng môi trường triển khai.

Ví dụ:

```text
https://api-id.execute-api.region.amazonaws.com/dev
https://api-id.execute-api.region.amazonaws.com/staging
https://api-id.execute-api.region.amazonaws.com/prod
```

---

## 3. Stage là gì?

Stage là một môi trường đã được deploy của API.

Một API có thể có nhiều stage:

- `dev`
- `test`
- `staging`
- `prod`

Mỗi stage có thể có cấu hình riêng như:

- Logging
- Throttling
- Variables
- Cache
- Deployment version

---

## 4. Deployment là gì?

Deployment là hành động publish cấu hình API ra một stage.

Khi bạn chỉnh sửa route, method hoặc integration, thay đổi đó chưa chắc có hiệu lực ngay với client. Bạn cần deploy API ra stage.

Ví dụ:

```text
Chỉnh sửa API -> Deploy to stage dev -> Test -> Deploy to stage prod
```

---

## 5. Stage Variables

Stage variables là biến cấu hình riêng cho từng stage.

Ví dụ:

| Stage | Variable | Value |
|---|---|---|
| dev | lambdaAlias | dev |
| prod | lambdaAlias | prod |

Có thể dùng stage variables để điều hướng API đến Lambda alias khác nhau.

Ví dụ:

```text
/dev -> Lambda alias dev
/prod -> Lambda alias prod
```

---

## 6. Vì sao cần nhiều stage?

Nhiều stage giúp:

- Test API trước khi đưa lên production.
- Tách môi trường học/lab và môi trường thật.
- Giảm rủi ro khi deploy.
- Có thể rollback dễ hơn.
- Cho phép cấu hình logging/throttling khác nhau.

---

## 7. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| deploy API changes | API Gateway deployment |
| separate dev and prod | Stage |
| different config per environment | Stage variables |
| API changes not visible | Need deploy to stage |
| production endpoint | prod stage |

---

## 8. Bẫy thường gặp

### Bẫy 1. Sửa API nhưng quên deploy

Trong REST API, sau khi thay đổi cấu hình, cần deploy lại ra stage.

### Bẫy 2. Dùng chung một stage cho mọi môi trường

Không nên dùng chung production cho việc test.

### Bẫy 3. Nhầm stage với Lambda version

Stage thuộc API Gateway.

Version/Alias thuộc Lambda.

Hai phần này có thể kết hợp với nhau nhưng không giống nhau.

---

## 9. Lab thực hành

### Lab: Tạo stage dev và prod

Yêu cầu:

1. Tạo API Gateway với route `GET /health`.
2. Deploy API ra stage `dev`.
3. Gọi endpoint `/dev/health`.
4. Tạo thêm stage `prod`.
5. Gọi endpoint `/prod/health`.
6. Bật logging cho stage `dev`.

Kết quả cần đạt:

- Có ít nhất 2 endpoint khác nhau cho `dev` và `prod`.
- Hiểu rằng mỗi stage là một môi trường API riêng.

---

## 10. Bài tập về nhà

1. Stage trong API Gateway là gì?
2. Vì sao cần deploy API ra stage?
3. Nếu sửa API nhưng client chưa thấy thay đổi, cần kiểm tra gì?
4. Stage variable dùng để làm gì?
5. Hãy giải thích khác nhau giữa API Gateway stage và Lambda alias.
