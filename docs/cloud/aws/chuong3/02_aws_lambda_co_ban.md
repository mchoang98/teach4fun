# Bài 2. AWS Lambda cơ bản

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu AWS Lambda là gì.
- Biết các thành phần cơ bản của Lambda function.
- Hiểu runtime, handler, event object và context object.
- Biết Lambda thường được gọi bởi service nào.

---

## 2. Giải thích dễ hiểu

AWS Lambda giống như một **hàm xử lý công việc**.

Bạn không cần mở server, không cần cài web server. Bạn chỉ cần viết function, ví dụ:

```text
Khi có request API -> chạy Lambda
Khi có file upload S3 -> chạy Lambda
Khi có message trong SQS -> chạy Lambda
Khi đến giờ hẹn -> chạy Lambda
```

AWS sẽ tự chạy function khi có event.

---

## 3. Lambda Function

Lambda function là nơi chứa code xử lý.

Một Lambda function thường có:

- Runtime
- Handler
- Code
- Configuration
- Execution role
- Trigger
- Logs

Ví dụ function đơn giản bằng JavaScript:

```javascript
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello Lambda' })
  };
};
```

---

## 4. Runtime

Runtime là môi trường chạy code.

Ví dụ runtime:

- Node.js
- Python
- Java
- .NET
- Go
- Ruby

Nếu bạn là backend developer, thường sẽ gặp:

- Node.js cho API
- Python cho automation hoặc xử lý dữ liệu
- Java cho hệ thống enterprise

---

## 5. Handler

Handler là điểm bắt đầu khi Lambda chạy.

Ví dụ:

```javascript
exports.handler = async (event, context) => {
  // code xử lý nằm ở đây
};
```

Trong ví dụ trên:

- `handler` là tên function Lambda sẽ gọi.
- `event` chứa dữ liệu đầu vào.
- `context` chứa thông tin môi trường chạy.

---

## 6. Event Object

`event` là dữ liệu Lambda nhận được từ trigger.

Ví dụ:

### Nếu Lambda được gọi bởi API Gateway

`event` có thể chứa:

- HTTP method
- Path
- Headers
- Query string
- Body

### Nếu Lambda được gọi bởi S3

`event` có thể chứa:

- Bucket name
- Object key
- Event name

### Nếu Lambda được gọi bởi SQS

`event` có thể chứa:

- Danh sách messages
- Message body
- Message ID

---

## 7. Context Object

`context` chứa thông tin về lần chạy Lambda.

Một số thông tin thường gặp:

- Function name
- Request ID
- Remaining time
- Memory limit
- Log group
- Log stream

Ví dụ dùng `context` để xem thời gian còn lại:

```javascript
console.log(context.getRemainingTimeInMillis());
```

---

## 8. Lambda Trigger

Trigger là nguồn kích hoạt Lambda.

Các trigger thường gặp:

| Trigger | Tình huống |
|---|---|
| API Gateway | Gọi Lambda qua HTTP API |
| S3 | File được upload hoặc xóa |
| DynamoDB Streams | Item trong table thay đổi |
| SQS | Có message trong queue |
| SNS | Có notification mới |
| EventBridge | Chạy theo lịch hoặc event |

---

## 9. Kiến thức thi cần nhớ

- Lambda là serverless compute.
- Lambda chạy khi có event.
- Lambda cần execution role để gọi AWS service khác.
- Event object thay đổi tùy trigger.
- Lambda ghi log mặc định vào CloudWatch Logs nếu có quyền.

---

## 10. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| serverless compute | Lambda |
| event object | Dữ liệu đầu vào Lambda |
| context object | Thông tin runtime Lambda |
| handler | Entry point của Lambda |
| trigger | Nguồn kích hoạt Lambda |
| runtime | Môi trường chạy code |

---

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

Lambda cần xử lý request từ API Gateway. Dữ liệu request nằm ở đâu?

Đáp án: **event object**.

### Tình huống 2

Lambda cần biết còn bao nhiêu thời gian trước khi timeout.

Đáp án: **context object**.

### Tình huống 3

Lambda không thể ghi log vào CloudWatch.

Đáp án nên kiểm tra: **execution role có quyền ghi CloudWatch Logs hay không**.

---

## 12. Bẫy thường gặp

- Không phải event nào cũng có cùng format.
- Lambda không tự có quyền gọi DynamoDB, S3, SQS nếu role chưa được cấp quyền.
- Handler khai báo sai sẽ làm function lỗi.
- Runtime không tương thích code sẽ làm deploy hoặc invoke lỗi.

---

## 13. Bài tập về nhà

### Lý thuyết

1. Lambda là gì?
2. Runtime là gì?
3. Handler là gì?
4. Event object dùng để làm gì?
5. Context object dùng để làm gì?

### Lab đề xuất

- Tạo Lambda Hello World.
- In `event` ra log.
- In `context.functionName` ra log.
- Test function bằng test event trong AWS Console.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
