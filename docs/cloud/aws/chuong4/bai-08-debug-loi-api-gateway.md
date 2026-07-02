# Bài 8. Debug lỗi API Gateway

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Biết các nhóm lỗi phổ biến trong API Gateway.
- Phân biệt lỗi 4xx và 5xx.
- Biết nguyên nhân thường gặp của lỗi 502.
- Biết dùng CloudWatch Logs để debug API Gateway và Lambda.

---

## 2. Giải thích dễ hiểu

Khi API bị lỗi, không nên đoán mò.

Cần xác định lỗi nằm ở đâu:

```text
Client -> API Gateway -> Lambda -> AWS Service / Database
```

Mỗi vị trí có thể gây lỗi khác nhau.

---

## 3. Nhóm lỗi 4xx

Lỗi 4xx thường là lỗi từ phía client hoặc request.

Ví dụ:

| Mã lỗi | Ý nghĩa thường gặp |
|---|---|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |

---

## 4. Nhóm lỗi 5xx

Lỗi 5xx thường là lỗi phía server hoặc integration.

Ví dụ:

| Mã lỗi | Ý nghĩa thường gặp |
|---|---|
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 504 | Timeout |

Trong API Gateway + Lambda, lỗi 502 rất phổ biến.

---

## 5. Lỗi 401 Unauthorized

Nguyên nhân thường gặp:

- Thiếu token.
- Token sai format.
- Token hết hạn.
- Authorizer cấu hình sai.
- Cognito User Pool không đúng.

Cách kiểm tra:

- Kiểm tra header `Authorization`.
- Kiểm tra JWT token.
- Kiểm tra authorizer trong API Gateway.

---

## 6. Lỗi 403 Forbidden

Nguyên nhân thường gặp:

- Không có quyền gọi API.
- IAM policy không cho phép.
- API Key sai hoặc thiếu nếu method yêu cầu API Key.
- Resource policy chặn request.

---

## 7. Lỗi 404 Not Found

Nguyên nhân thường gặp:

- Sai path.
- Sai stage.
- Chưa deploy API.
- Gọi nhầm method.

Ví dụ:

```text
API có GET /orders nhưng client gọi POST /orders
```

---

## 8. Lỗi 429 Too Many Requests

Nguyên nhân:

- Vượt rate limit.
- Vượt burst limit.
- Vượt quota usage plan.

Cách xử lý:

- Tăng throttling limit nếu hợp lý.
- Dùng retry với exponential backoff ở client.
- Tối ưu backend để giảm request.

---

## 9. Lỗi 502 Bad Gateway

Nguyên nhân thường gặp nhất khi dùng Lambda proxy integration:

- Lambda response sai format.
- Lambda throw exception.
- Lambda timeout.
- Lambda permission lỗi.
- Integration URI sai.

Cần kiểm tra:

- CloudWatch Logs của Lambda.
- Execution logs của API Gateway.
- Format response của Lambda.

---

## 10. Lỗi 504 Timeout

Nguyên nhân:

- Backend xử lý quá lâu.
- Lambda timeout.
- Integration timeout.

Cách xử lý:

- Tối ưu Lambda.
- Tăng timeout trong giới hạn cho phép.
- Chuyển xử lý lâu sang async bằng SQS.

---

## 11. CloudWatch Logs

Để debug API Gateway, nên bật:

- Access logging
- Execution logging
- Lambda logging

Log giúp trả lời:

- Request có vào API Gateway không?
- API Gateway có gọi Lambda không?
- Lambda có lỗi gì không?
- Response trả về là gì?

---

## 12. Quy trình debug đề xuất

```text
1. Xác định mã lỗi HTTP
2. Kiểm tra request path, method, stage
3. Kiểm tra authentication/authorization
4. Kiểm tra API Gateway logs
5. Kiểm tra Lambda logs
6. Kiểm tra IAM permission
7. Kiểm tra response format
```

---

## 13. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| API Gateway 502 | Lambda integration error |
| API Gateway 429 | Throttling |
| browser blocked | CORS |
| Unauthorized | Authorizer / token |
| AccessDenied | IAM permission |
| request timeout | Lambda timeout / async SQS |
| debug API issue | CloudWatch Logs |

---

## 14. Lab thực hành

### Lab: Debug lỗi 502

Yêu cầu:

1. Tạo Lambda trả response sai format.
2. Kết nối Lambda với API Gateway.
3. Gọi API và ghi nhận lỗi 502.
4. Mở CloudWatch Logs để xem Lambda output.
5. Sửa response đúng format.
6. Deploy lại API.
7. Gọi API thành công.

### Lab mở rộng: Debug lỗi 429

1. Cấu hình throttling thấp.
2. Gọi API liên tục.
3. Quan sát lỗi 429.
4. Giải thích nguyên nhân.

---

## 15. Bài tập về nhà

1. Lỗi 4xx thường liên quan đến phía nào?
2. Lỗi 5xx thường liên quan đến phía nào?
3. Lỗi 502 trong API Gateway + Lambda thường do gì?
4. Lỗi 429 nghĩa là gì?
5. Nếu API trả Unauthorized, cần kiểm tra gì?
6. Nếu API timeout vì xử lý lâu, có thể dùng dịch vụ nào để chuyển sang async?
7. CloudWatch Logs giúp debug những gì?
