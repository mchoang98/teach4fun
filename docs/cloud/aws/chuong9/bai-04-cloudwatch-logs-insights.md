# Bài 4. CloudWatch Logs Insights

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu CloudWatch Logs Insights dùng để làm gì.
- Biết query log bằng cú pháp cơ bản.
- Biết tìm lỗi trong log nhanh hơn so với xem thủ công.
- Biết các tình huống exam liên quan đến search logs.

---

## 2. CloudWatch Logs Insights là gì?

CloudWatch Logs Insights là công cụ truy vấn log.

Thay vì mở từng log stream và tìm bằng mắt, ta có thể viết query để tìm nhanh.

Ví dụ:

```text
Tìm tất cả log có chữ ERROR trong 1 giờ gần nhất
```

Hoặc:

```text
Tìm request nào có latency cao nhất
```

---

## 3. Khi nào dùng Logs Insights?

Dùng khi:

- Log quá nhiều, không thể xem thủ công.
- Cần tìm lỗi theo keyword.
- Cần lọc log theo requestId/userId.
- Cần thống kê số lỗi theo thời gian.
- Cần tìm Lambda invocation chậm.

---

## 4. Cú pháp query cơ bản

## Hiển thị các field chính

```sql
fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

## Tìm log có chữ ERROR

```sql
fields @timestamp, @message
| filter @message like /ERROR/
| sort @timestamp desc
| limit 50
```

## Tìm log theo request id

```sql
fields @timestamp, @message
| filter @message like /request-id-abc/
| sort @timestamp asc
```

## Tìm Lambda chạy lâu

```sql
fields @timestamp, @duration, @message
| filter @type = "REPORT"
| sort @duration desc
| limit 20
```

---

## 5. Field thường gặp trong Lambda logs

| Field | Ý nghĩa |
|---|---|
| @timestamp | Thời điểm log được ghi |
| @message | Nội dung log |
| @logStream | Log stream |
| @requestId | Request ID |
| @duration | Thời gian Lambda chạy |
| @billedDuration | Thời gian tính phí |
| @memorySize | Memory cấu hình |
| @maxMemoryUsed | Memory thực tế dùng |

---

## 6. Ví dụ tìm lỗi AccessDenied

```sql
fields @timestamp, @message
| filter @message like /AccessDenied/
| sort @timestamp desc
| limit 50
```

Khi thấy lỗi AccessDenied, thường cần kiểm tra:

- Lambda execution role.
- IAM policy.
- Resource ARN.
- Explicit deny.

---

## 7. Ví dụ tìm Lambda timeout

```sql
fields @timestamp, @message
| filter @message like /Task timed out/
| sort @timestamp desc
| limit 50
```

Khi Lambda timeout, cần kiểm tra:

- Timeout setting.
- Memory setting.
- Code xử lý chậm.
- Gọi service ngoài quá lâu.
- DynamoDB/S3/API bên ngoài bị chậm.

---

## 8. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| search logs | CloudWatch Logs Insights |
| query logs | CloudWatch Logs Insights |
| analyze logs | CloudWatch Logs Insights |
| filter log events | Logs Insights / Metric Filter |
| find error messages | CloudWatch Logs Insights |
| log analytics | CloudWatch Logs Insights |

---

## 9. Dạng câu hỏi exam thường gặp

1. Log của Lambda quá nhiều, cần tìm lỗi nhanh.
2. Cần tìm tất cả request có `AccessDenied`.
3. Cần tìm Lambda invocation có duration cao nhất.
4. Cần thống kê lỗi theo thời gian.
5. Cần lọc log theo request ID.

---

## 10. Bẫy thường gặp

## Bẫy 1: Logs Insights không phải X-Ray

Logs Insights dùng để query log.

X-Ray dùng để trace request qua nhiều service.

Nếu đề nói:

```text
Search application logs
```

Chọn:

```text
CloudWatch Logs Insights
```

Nếu đề nói:

```text
Trace request across distributed services
```

Chọn:

```text
AWS X-Ray
```

---

## Bẫy 2: Logs Insights không tự tạo alarm

Logs Insights để phân tích log. Nếu cần cảnh báo tự động theo metric, dùng CloudWatch Alarm.

---

## 11. Lab thực hành

### Yêu cầu

1. Tạo nhiều log trong Lambda.
2. Cố ý tạo lỗi `AccessDenied` hoặc lỗi custom.
3. Vào CloudWatch Logs Insights.
4. Chọn log group của Lambda.
5. Query các lỗi có chữ `ERROR`.
6. Query các dòng có `requestId` cụ thể.

### Query mẫu

```sql
fields @timestamp, @message
| filter @message like /ERROR/
| sort @timestamp desc
| limit 20
```

---

## 12. Bài tập về nhà

1. CloudWatch Logs Insights dùng để làm gì?
2. Viết query tìm log có chữ `AccessDenied`.
3. Viết query lấy 20 log mới nhất.
4. Logs Insights khác gì với CloudWatch Alarm?
5. Logs Insights khác gì với X-Ray?
