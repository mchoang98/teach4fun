# Bài 5. Lambda Concurrency

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu concurrency trong Lambda.
- Phân biệt reserved concurrency và provisioned concurrency.
- Hiểu cold start là gì.
- Biết cách xử lý khi Lambda bị gọi quá nhiều.

---

## 2. Concurrency là gì?

Concurrency là số lượng Lambda function đang chạy cùng lúc.

Ví dụ:

```text
100 request đến cùng thời điểm
Mỗi request làm Lambda chạy 1 lần
=> Có thể có 100 concurrent executions
```

Lambda có thể tự scale để xử lý nhiều request, nhưng vẫn có giới hạn concurrency theo account/region.

---

## 3. Vì sao concurrency quan trọng?

Nếu Lambda bị gọi quá nhiều:

- Có thể đạt giới hạn concurrency.
- Request mới có thể bị throttled.
- Service phía sau như database có thể bị quá tải.
- Chi phí có thể tăng nhanh.

Ví dụ:

```text
API Gateway -> Lambda -> RDS
```

Nếu Lambda scale quá mạnh, nó có thể mở quá nhiều connection tới RDS và làm database quá tải.

---

## 4. Reserved Concurrency

Reserved concurrency là giới hạn concurrency dành riêng cho một Lambda function.

Nó có 2 tác dụng:

1. Đảm bảo function có một lượng concurrency riêng.
2. Giới hạn function không vượt quá mức đó.

Ví dụ:

```text
Reserved concurrency = 10
Function chỉ được chạy tối đa 10 instance cùng lúc
```

Dùng khi:

- Muốn bảo vệ database phía sau.
- Muốn giới hạn function xử lý quá nhiều request.
- Muốn đảm bảo function quan trọng luôn có concurrency riêng.

---

## 5. Provisioned Concurrency

Provisioned concurrency giữ sẵn một số execution environment đã được khởi tạo.

Mục tiêu chính:

- Giảm cold start.
- Đảm bảo function phản hồi nhanh và ổn định hơn.

Ví dụ:

```text
Provisioned concurrency = 5
AWS giữ sẵn 5 môi trường Lambda đã khởi động
```

Dùng khi:

- API production cần latency thấp.
- Function dùng runtime khởi động chậm.
- User không chấp nhận delay do cold start.

---

## 6. Cold Start

Cold start xảy ra khi Lambda cần khởi tạo môi trường chạy mới trước khi xử lý request.

Cold start có thể xảy ra khi:

- Function lâu không được gọi.
- Traffic tăng đột ngột.
- Lambda cần scale thêm execution environment.
- Function dùng VPC hoặc runtime/package nặng.

Cách giảm cold start:

- Tối ưu code khởi tạo.
- Giảm package size.
- Tăng memory nếu phù hợp.
- Dùng provisioned concurrency cho workload quan trọng.

---

## 7. Throttling trong Lambda

Throttling xảy ra khi Lambda không thể nhận thêm invocation do đạt giới hạn concurrency.

Cách xử lý:

- Tăng account concurrency limit nếu cần.
- Dùng reserved concurrency hợp lý.
- Dùng SQS để buffer request.
- Tối ưu thời gian xử lý để function kết thúc nhanh hơn.

---

## 8. Kiến thức thi cần nhớ

- Concurrency là số lần Lambda chạy đồng thời.
- Reserved concurrency dùng để giới hạn hoặc dành riêng concurrency cho function.
- Provisioned concurrency dùng để giảm cold start.
- Cold start ảnh hưởng latency.
- Nếu Lambda gọi database, cần cẩn thận vì Lambda scale nhanh có thể làm DB quá tải.

---

## 9. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| Lambda invoked too many times | Concurrency |
| limit function concurrency | Reserved concurrency |
| protect downstream database | Reserved concurrency |
| reduce cold start | Provisioned concurrency |
| low latency requirement | Provisioned concurrency |
| throttled invocation | Concurrency limit |
| sudden traffic spike | Scaling / concurrency |

---

## 10. Dạng câu hỏi exam thường gặp

### Tình huống 1

Lambda gọi RDS và làm database quá tải khi traffic tăng.

Đáp án nên nghĩ tới: **reserved concurrency để giới hạn số Lambda chạy đồng thời**.

### Tình huống 2

API dùng Lambda bị chậm ở request đầu tiên sau thời gian không sử dụng.

Đáp án nên nghĩ tới: **cold start**.

### Tình huống 3

Ứng dụng yêu cầu latency thấp, muốn giảm cold start.

Đáp án nên nghĩ tới: **provisioned concurrency**.

---

## 11. Bẫy thường gặp

- Reserved concurrency không phải để giảm cold start chính.
- Provisioned concurrency không phải để giới hạn traffic chính.
- Tăng concurrency không phải lúc nào cũng tốt, vì service phía sau có thể quá tải.
- Cold start không xảy ra ở mọi request.

---

## 12. Bài tập về nhà

### Lý thuyết

1. Concurrency là gì?
2. Reserved concurrency dùng để làm gì?
3. Provisioned concurrency dùng để làm gì?
4. Cold start là gì?
5. Lambda throttling xảy ra khi nào?

### Lab đề xuất

- Tạo Lambda đơn giản.
- Cấu hình reserved concurrency.
- Gọi function nhiều lần và quan sát behavior.
- Đọc CloudWatch Metrics liên quan đến concurrent executions và throttles.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
