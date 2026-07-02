# Bài 7. Troubleshooting API Gateway

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết các lỗi API Gateway thường gặp.
- Phân biệt lỗi 4xx và 5xx.
- Biết nguyên nhân phổ biến của lỗi 502.
- Biết debug CORS, throttling và authorizer.
- Biết keyword exam liên quan API Gateway troubleshooting.

---

## 2. Phân biệt lỗi 4xx và 5xx

## 4xx Error

Lỗi 4xx thường liên quan đến phía client/request.

Ví dụ:

| Mã lỗi | Ý nghĩa thường gặp |
|---|---|
| 400 | Request sai format |
| 401 | Chưa authentication |
| 403 | Không có quyền |
| 404 | Resource/method không tồn tại |
| 429 | Quá nhiều request, bị throttling |

## 5xx Error

Lỗi 5xx thường liên quan đến backend hoặc integration.

Ví dụ:

| Mã lỗi | Ý nghĩa thường gặp |
|---|---|
| 500 | Internal server error |
| 502 | Bad Gateway / Lambda response sai |
| 503 | Service unavailable |
| 504 | Integration timeout |

---

## 3. API Gateway 502 Bad Gateway

Lỗi 502 rất hay gặp trong đề thi và thực tế.

Nguyên nhân phổ biến:

- Lambda response sai format.
- Lambda throw exception.
- Lambda timeout.
- Integration bị lỗi.
- Permission invoke Lambda sai.

Với Lambda proxy integration, response cần có format:

```json
{
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "{\"message\":\"ok\"}"
}
```

Lưu ý: `body` phải là string.

---

## 4. Troubleshooting CORS

CORS thường xảy ra khi browser gọi API từ domain khác.

Triệu chứng:

```text
Access to fetch has been blocked by CORS policy
```

Cần kiểm tra:

- API Gateway đã bật CORS chưa.
- Response có header `Access-Control-Allow-Origin` không.
- Method OPTIONS có hoạt động không.
- Lambda error response có trả CORS header không.

Header thường dùng:

```json
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
}
```

---

## 5. Troubleshooting 403

Lỗi 403 thường liên quan đến authorization hoặc permission.

Nguyên nhân có thể:

- IAM authorization sai.
- Cognito token không hợp lệ.
- Lambda Authorizer deny request.
- Resource policy chặn request.
- API key/usage plan cấu hình sai.

---

## 6. Troubleshooting 429

Lỗi 429 nghĩa là request bị giới hạn.

Nguyên nhân:

- API Gateway throttling.
- Usage Plan quota.
- Client gửi quá nhiều request.

Hướng xử lý:

- Điều chỉnh throttling limit nếu phù hợp.
- Dùng retry với exponential backoff ở client.
- Cache response nếu có thể.
- Tối ưu backend để xử lý tốt hơn.

---

## 7. Troubleshooting timeout

API Gateway có giới hạn thời gian chờ integration.

Nếu backend xử lý quá lâu, API có thể trả timeout.

Hướng xử lý:

- Tối ưu Lambda/backend.
- Tăng timeout Lambda nếu hợp lý.
- Với job lâu, chuyển sang async flow:

```text
API Gateway -> Lambda -> SQS -> Worker Lambda
```

API trả response nhanh, worker xử lý phía sau.

---

## 8. Log và metric cần xem

| Cần kiểm tra | Nơi xem |
|---|---|
| Request vào API | API Gateway access logs |
| Lỗi integration | API Gateway execution logs |
| Lambda có lỗi không | Lambda CloudWatch Logs |
| 4xx/5xx tăng | API Gateway Metrics |
| Backend chậm không | Latency / IntegrationLatency |
| Trace request | X-Ray |

---

## 9. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| 502 Bad Gateway | Lambda integration error |
| 429 Too Many Requests | Throttling |
| CORS error | Access-Control-Allow-Origin |
| unauthorized | 401 / authorizer |
| forbidden | 403 / permission |
| integration latency | Backend latency |
| API caching | API Gateway cache |
| usage plan | API key / quota / throttling |

---

## 10. Dạng câu hỏi exam thường gặp

1. Browser gọi API bị CORS.
2. API Gateway trả 502 khi gọi Lambda.
3. API Gateway trả 429 khi traffic tăng.
4. API cần giới hạn quota theo client.
5. API cần xác thực user bằng Cognito.
6. API bị timeout vì backend xử lý quá lâu.
7. Developer cần xem request log của API.

---

## 11. Bẫy thường gặp

## Bẫy 1: API Key không phải authentication mạnh

API Key dùng cho usage plan, quota, tracking client usage. Không nên xem API Key là cơ chế xác thực user đầy đủ.

Nếu cần user authentication, nghĩ tới:

```text
Cognito Authorizer
Lambda Authorizer
IAM Authorization
```

## Bẫy 2: CORS chỉ xảy ra ở browser

Server-to-server request thường không bị CORS. Nếu đề nói browser hoặc web app frontend, mới nghĩ nhiều đến CORS.

## Bẫy 3: Lambda error response thiếu CORS header

Nhiều app chỉ trả CORS header khi thành công, nhưng khi lỗi 500 thì quên header. Browser vẫn báo CORS làm developer khó debug.

---

## 12. Lab thực hành

### Lab 1: Tạo lỗi 502

1. Tạo Lambda proxy integration.
2. Cho Lambda return sai format:

```javascript
return { message: "ok" };
```

3. Gọi API Gateway.
4. Quan sát lỗi 502.
5. Sửa lại đúng format.

### Lab 2: Tạo lỗi CORS

1. Gọi API từ frontend local.
2. Không trả header CORS.
3. Quan sát lỗi browser.
4. Thêm CORS header và test lại.

---

## 13. Bài tập về nhà

1. Lỗi 4xx khác gì 5xx?
2. API Gateway 502 thường do những nguyên nhân nào?
3. CORS là gì?
4. API Gateway 429 nghĩa là gì?
5. Khi API bị chậm, nên xem metric nào?
