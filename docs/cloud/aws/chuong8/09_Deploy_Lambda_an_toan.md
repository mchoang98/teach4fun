# Bài 9. Deploy Lambda an toàn

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu vì sao không nên deploy trực tiếp production Lambda thiếu kiểm soát.
- Biết Lambda version và alias trong deployment.
- Hiểu cách dùng CodeDeploy để traffic shifting.
- Biết rollback bằng CloudWatch Alarm.
- Làm được flow deploy Lambda an toàn trong project.

---

## 2. Vấn đề khi deploy Lambda trực tiếp

Nếu chỉ update code Lambda trực tiếp lên production, rủi ro là:

- Code mới lỗi làm toàn bộ user bị ảnh hưởng.
- Không kiểm soát được version đang chạy.
- Rollback khó hơn.
- Không test được một phần traffic trước.

Vì vậy production nên dùng version, alias và deployment strategy.

---

## 3. Lambda Version

Lambda version là bản snapshot không đổi của Lambda function.

Ví dụ:

```text
$LATEST = bản đang phát triển
Version 1 = bản production ổn định
Version 2 = bản release mới
```

Khi publish version, code và configuration của version đó được cố định.

---

## 4. Lambda Alias

Alias là tên trỏ đến một Lambda version.

Ví dụ:

```text
Alias: dev -> Version 2
Alias: production -> Version 1
```

Ứng dụng production nên gọi alias thay vì gọi trực tiếp version hoặc `$LATEST`.

Lợi ích:

- Dễ chuyển traffic giữa các version.
- Dễ rollback.
- Dễ quản lý môi trường.

---

## 5. Traffic shifting bằng Alias

Lambda alias có thể chia traffic giữa hai version.

Ví dụ:

```text
production alias:
- 90% traffic -> Version 1
- 10% traffic -> Version 2
```

Nếu version 2 ổn, tăng lên 100%.

Nếu version 2 lỗi, chuyển 100% về version 1.

---

## 6. CodeDeploy với Lambda Alias

CodeDeploy giúp tự động hóa traffic shifting.

Ví dụ canary:

```text
Deploy version 2
-> Chuyển 10% traffic sang version 2
-> Chờ 5 phút
-> Nếu không lỗi, chuyển 100%
-> Nếu lỗi, rollback về version 1
```

Trong đề thi, keyword:

```text
traffic shifting for Lambda
```

thường là:

```text
CodeDeploy + Lambda Alias
```

---

## 7. CloudWatch Alarm rollback

CloudWatch Alarm có thể theo dõi metric như:

- Lambda Errors
- Lambda Duration
- Lambda Throttles
- API Gateway 5xx

Nếu alarm bị kích hoạt trong lúc deploy, CodeDeploy có thể rollback.

Ví dụ:

```text
Version 2 làm error tăng
-> CloudWatch Alarm chuyển sang ALARM
-> CodeDeploy rollback alias về Version 1
```

---

## 8. Pre-traffic và Post-traffic Hook

CodeDeploy có thể chạy hook để kiểm tra bản mới.

Ví dụ:

- PreTraffic hook: kiểm tra version mới trước khi nhận traffic.
- PostTraffic hook: kiểm tra sau khi traffic đã chuyển.

Hook thường là Lambda function kiểm tra health hoặc logic quan trọng.

---

## 9. Flow deploy Lambda an toàn

Quy trình đề xuất:

```text
1. Developer push code
2. CodePipeline được kích hoạt
3. CodeBuild chạy test và build
4. SAM/CloudFormation publish Lambda version mới
5. CodeDeploy deploy qua alias production
6. Canary 10% traffic
7. CloudWatch theo dõi error
8. Nếu ổn -> 100% traffic
9. Nếu lỗi -> rollback
```

---

## 10. Áp dụng vào Serverless Booking API

Với API `POST /bookings`:

```text
API Gateway
-> Lambda alias production
-> Version 1 hoặc Version 2
```

Deploy version mới:

```text
Version 1: đang chạy ổn
Version 2: thêm logic kiểm tra booking
Canary: 10% traffic sang Version 2
Alarm: Lambda Errors > threshold
Rollback: quay về Version 1 nếu lỗi
```

---

## 11. Kiến thức thi cần nhớ

- Không nên dùng `$LATEST` trực tiếp cho production deployment quan trọng.
- Lambda version là snapshot cố định.
- Lambda alias trỏ đến version.
- Alias hỗ trợ traffic shifting.
- CodeDeploy tự động hóa canary/linear deployment cho Lambda.
- CloudWatch Alarm có thể kích hoạt rollback.
- PreTraffic/PostTraffic hook giúp kiểm tra deployment.

---

## 12. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| stable production version | Lambda Version / Alias |
| traffic shifting Lambda | Lambda Alias + CodeDeploy |
| canary Lambda deployment | CodeDeploy |
| rollback on errors | CodeDeploy + CloudWatch Alarm |
| route small percentage | Alias routing configuration |
| avoid deploying directly to latest | Lambda Version |
| pre-traffic validation | CodeDeploy Hook |

---

## 13. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn production Lambda luôn chạy bản ổn định, không bị ảnh hưởng bởi code đang phát triển.

Đáp án: dùng **Lambda Version và Alias**.

### Tình huống 2

Team muốn đưa 10% traffic sang Lambda version mới trước.

Đáp án: **CodeDeploy Canary + Lambda Alias**.

### Tình huống 3

Nếu error tăng trong lúc deploy, hệ thống phải tự rollback.

Đáp án: **CloudWatch Alarm + CodeDeploy rollback**.

### Tình huống 4

Team muốn kiểm tra version mới trước khi nhận traffic.

Đáp án: **PreTraffic hook**.

---

## 14. Bẫy thường gặp

- `$LATEST` không phải lựa chọn tốt cho production deployment an toàn.
- Lambda version sau khi publish không chỉnh sửa trực tiếp được.
- Alias không phải bản copy code, alias chỉ trỏ đến version.
- Traffic shifting cần alias, không chỉ cần version.
- CloudWatch Logs chỉ lưu log, còn rollback tự động cần CodeDeploy + Alarm.

---

## 15. Bài tập về nhà

### Lý thuyết

1. Lambda version là gì?
2. Lambda alias là gì?
3. Vì sao production nên dùng alias?
4. `$LATEST` là gì?
5. Traffic shifting là gì?
6. CodeDeploy giúp gì khi deploy Lambda?
7. Canary deployment cho Lambda hoạt động thế nào?
8. CloudWatch Alarm liên quan gì đến rollback?
9. PreTraffic hook dùng để làm gì?
10. PostTraffic hook dùng để làm gì?

### Tình huống

1. Cần production chạy bản ổn định. Dùng gì?
2. Cần deploy 10% traffic trước. Dùng gì?
3. Cần rollback nếu error tăng. Dùng gì?
4. Cần kiểm tra version mới trước traffic. Dùng gì?
5. Cần tránh deploy trực tiếp `$LATEST`. Dùng gì thay thế?

### Lab nhỏ

Vẽ flow deploy Lambda an toàn:

```text
CodePipeline
-> CodeBuild
-> SAM deploy
-> Lambda Version 2
-> CodeDeploy Canary
-> CloudWatch Alarm
-> Rollback nếu lỗi
```

Sau đó giải thích từng bước bằng 1-2 câu.
