# Bài 3. Lambda Configuration

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu các cấu hình quan trọng của Lambda.
- Biết timeout, memory, environment variables ảnh hưởng thế nào.
- Hiểu execution role của Lambda.
- Biết Lambda ghi log vào CloudWatch.

---

## 2. Các cấu hình quan trọng của Lambda

Một Lambda function không chỉ có code. Nó còn có nhiều cấu hình ảnh hưởng trực tiếp đến cách chạy:

- Timeout
- Memory
- Environment variables
- Execution role
- Logging
- Trigger
- VPC configuration nếu cần

Trong đề Developer Associate, các cấu hình thường xuất hiện nhất là:

- Timeout
- Memory
- Environment variables
- Execution role
- CloudWatch Logs

---

## 3. Timeout

Timeout là thời gian tối đa Lambda được phép chạy.

Nếu Lambda chạy quá thời gian này, AWS sẽ dừng function và trả lỗi timeout.

Ví dụ:

```text
Timeout = 3 giây
Function xử lý mất 5 giây
=> Lambda bị timeout
```

Tình huống thường gặp:

- Lambda gọi API bên ngoài quá lâu.
- Lambda xử lý file lớn.
- Lambda query database chậm.
- Lambda xử lý batch message quá nhiều.

Cách xử lý:

- Tăng timeout nếu hợp lý.
- Tối ưu code.
- Chia nhỏ workload.
- Dùng SQS cho xử lý async.

---

## 4. Memory

Memory là lượng RAM cấp cho Lambda.

Điểm quan trọng: Khi tăng memory, Lambda cũng được tăng CPU tương ứng.

Vì vậy, tăng memory có thể giúp function chạy nhanh hơn.

Ví dụ:

```text
Memory 128 MB -> chạy 5 giây
Memory 512 MB -> chạy 1.5 giây
```

Trong đề thi, nếu Lambda chạy chậm, có thể cần xem xét:

- Memory
- Timeout
- Code logic
- Cold start
- Service bên ngoài

---

## 5. Environment Variables

Environment variables dùng để lưu cấu hình cho Lambda.

Ví dụ:

- `TABLE_NAME`
- `STAGE`
- `API_URL`
- `REGION`

Ví dụ code:

```javascript
const tableName = process.env.TABLE_NAME;
```

Lưu ý bảo mật:

- Không nên lưu secret nhạy cảm trực tiếp trong environment variables nếu không có mã hóa/phân quyền phù hợp.
- Với password, API key, database credential, nên dùng Secrets Manager hoặc Parameter Store.

---

## 6. Execution Role

Execution role là IAM Role mà Lambda sử dụng khi chạy.

Lambda muốn gọi AWS service khác thì role phải có quyền tương ứng.

Ví dụ:

| Lambda cần làm gì | Role cần quyền gì |
|---|---|
| Ghi log | CloudWatch Logs permission |
| Đọc S3 object | s3:GetObject |
| Ghi DynamoDB | dynamodb:PutItem |
| Gửi message SQS | sqs:SendMessage |
| Đọc secret | secretsmanager:GetSecretValue |

---

## 7. CloudWatch Logs

Lambda thường ghi log ra CloudWatch Logs.

Ví dụ:

```javascript
console.log('Booking created');
console.error('Create booking failed', error);
```

Để log hoạt động, Lambda execution role cần quyền ghi log.

Các quyền thường gặp:

- `logs:CreateLogGroup`
- `logs:CreateLogStream`
- `logs:PutLogEvents`

---

## 8. Kiến thức thi cần nhớ

- Lambda timeout nghĩa là function chạy quá thời gian cho phép.
- Tăng memory có thể tăng CPU và cải thiện performance.
- Environment variables phù hợp để lưu config, không nên hard-code config trong code.
- Secret nhạy cảm nên lưu trong Secrets Manager hoặc Parameter Store.
- Lambda dùng execution role để gọi AWS service.
- Log của Lambda thường nằm trong CloudWatch Logs.

---

## 9. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| function timeout | Lambda timeout |
| out of memory | Lambda memory |
| configuration value | Environment variables / Parameter Store |
| Lambda access DynamoDB | Lambda execution role |
| application logs | CloudWatch Logs |
| AccessDenied | IAM permission |
| avoid hard-coded config | Environment variables |
| avoid hard-coded secret | Secrets Manager |

---

## 10. Dạng câu hỏi exam thường gặp

### Tình huống 1

Lambda gọi API bên ngoài và thường bị dừng sau vài giây.

Đáp án nên nghĩ tới: **tăng timeout hoặc tối ưu xử lý**.

### Tình huống 2

Lambda cần ghi dữ liệu vào DynamoDB nhưng bị AccessDenied.

Đáp án nên nghĩ tới: **cấp quyền DynamoDB cho Lambda execution role**.

### Tình huống 3

Developer muốn thay đổi tên table giữa dev và prod mà không sửa code.

Đáp án nên nghĩ tới: **environment variables**.

---

## 11. Bẫy thường gặp

- Tăng timeout không phải lúc nào cũng là giải pháp tốt nhất.
- Environment variables không phải nơi tốt nhất để lưu password nếu yêu cầu bảo mật cao.
- Lambda có code đúng nhưng role sai vẫn bị lỗi.
- Lambda không ghi log được có thể do thiếu quyền CloudWatch Logs.

---

## 12. Bài tập về nhà

### Lý thuyết

1. Timeout trong Lambda là gì?
2. Memory ảnh hưởng gì đến Lambda?
3. Environment variables dùng để làm gì?
4. Execution role là gì?
5. Lambda log nằm ở đâu?

### Lab đề xuất

- Tạo Lambda đọc biến môi trường `STAGE`.
- Ghi log giá trị `STAGE` ra CloudWatch.
- Thử giảm timeout xuống thấp và tạo xử lý lâu để quan sát lỗi timeout.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
