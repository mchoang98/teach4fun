# Bài 2. CloudWatch Logs

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu CloudWatch Logs dùng để làm gì.
- Biết log group và log stream là gì.
- Biết Lambda ghi log vào CloudWatch như thế nào.
- Biết API Gateway có thể ghi access log và execution log.
- Biết tìm lỗi cơ bản qua log.

---

## 2. CloudWatch Logs là gì?

CloudWatch Logs là dịch vụ lưu trữ và xem log trên AWS.

Trong serverless app, CloudWatch Logs thường dùng để xem:

- Log của Lambda.
- Log của API Gateway.
- Log của ECS/EKS/EC2 nếu cấu hình agent.
- Log lỗi khi app chạy production.

---

## 3. Log Group và Log Stream

## Log Group

Log group là nhóm log của một service hoặc một ứng dụng.

Ví dụ log group của Lambda:

```text
/aws/lambda/createBooking
```

## Log Stream

Log stream là từng dòng thời gian chạy cụ thể trong log group.

Ví dụ Lambda được gọi nhiều lần, mỗi container/runtime có thể tạo log stream khác nhau.

---

## 4. Lambda ghi log vào CloudWatch

Lambda tự động gửi log vào CloudWatch Logs nếu execution role có quyền phù hợp.

Các quyền thường cần:

```text
logs:CreateLogGroup
logs:CreateLogStream
logs:PutLogEvents
```

Với Node.js Lambda, có thể ghi log bằng:

```javascript
console.log("message");
console.error("error message");
```

Với Python Lambda:

```python
print("message")
```

---

## 5. Ví dụ log tốt cho developer

Log chưa tốt:

```text
error
```

Log tốt hơn:

```text
CreateBookingFailed userId=123 error=AccessDeniedException table=Bookings
```

Log tốt nên có:

- Tên action.
- User ID hoặc request ID nếu có.
- Resource liên quan.
- Error message.
- Thời điểm xảy ra.

---

## 6. API Gateway Logs

API Gateway có thể ghi log để debug request.

Có 2 loại log thường gặp:

## Access log

Ghi thông tin request/response ở mức tổng quan.

Ví dụ:

```text
requestId, ip, caller, requestTime, httpMethod, resourcePath, status, latency
```

## Execution log

Ghi chi tiết quá trình API Gateway xử lý request.

Dùng khi cần debug integration, authorizer, mapping template.

---

## 7. Khi nào xem CloudWatch Logs?

| Tình huống | Nên xem log nào? |
|---|---|
| Lambda bị lỗi | Lambda CloudWatch Logs |
| API Gateway trả 502 | API Gateway logs + Lambda logs |
| API bị CORS | API Gateway logs + browser console |
| Lambda không ghi DynamoDB được | Lambda logs + IAM permission |
| User báo request lỗi | API Gateway access logs |
| Cần xem stack trace | Lambda logs |

---

## 8. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| application logs | CloudWatch Logs |
| view Lambda logs | CloudWatch Logs |
| log group | CloudWatch Logs |
| log stream | CloudWatch Logs |
| access logs | API Gateway / CloudWatch Logs |
| execution logs | API Gateway debug |
| stack trace | CloudWatch Logs |

---

## 9. Dạng câu hỏi exam thường gặp

1. Developer cần xem lỗi chi tiết của Lambda.
2. API Gateway trả lỗi nhưng không biết Lambda có được gọi không.
3. Cần kiểm tra request ID của một request cụ thể.
4. Cần lưu log ứng dụng tập trung.
5. Cần debug lỗi 5xx từ API Gateway.

---

## 10. Bẫy thường gặp

## Bẫy 1: Lambda không có quyền ghi log

Nếu Lambda execution role không có quyền ghi log, Lambda có thể chạy nhưng không thấy log trong CloudWatch.

Cần kiểm tra IAM permission:

```text
logs:CreateLogGroup
logs:CreateLogStream
logs:PutLogEvents
```

---

## Bẫy 2: Chỉ xem API Gateway log mà quên Lambda log

API Gateway 502 thường cần xem cả:

```text
API Gateway logs
Lambda logs
```

Vì lỗi có thể nằm ở response format của Lambda.

---

## 11. Lab thực hành

### Yêu cầu

1. Tạo Lambda `createBooking`.
2. Ghi 3 loại log:
   - Log bắt đầu xử lý.
   - Log thành công.
   - Log lỗi.
3. Gọi Lambda qua API Gateway.
4. Vào CloudWatch Logs để xem log group.
5. Tìm request bị lỗi.

### Gợi ý nội dung log

```javascript
exports.handler = async (event) => {
  console.log("Start create booking", JSON.stringify(event));

  try {
    const bookingId = "booking-001";
    console.log("Booking created", bookingId);

    return {
      statusCode: 200,
      body: JSON.stringify({ bookingId })
    };
  } catch (error) {
    console.error("Create booking failed", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" })
    };
  }
};
```

---

## 12. Bài tập về nhà

1. Log group là gì?
2. Log stream là gì?
3. Lambda cần quyền IAM nào để ghi log?
4. Access log của API Gateway dùng để làm gì?
5. Khi API Gateway trả 502, cần xem những log nào?
