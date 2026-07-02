# Bài 3. Lambda Proxy Integration

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu Lambda proxy integration là gì.
- Biết API Gateway truyền request vào Lambda như thế nào.
- Biết Lambda cần trả response theo format nào.
- Biết nguyên nhân phổ biến gây lỗi 502 Bad Gateway.

---

## 2. Giải thích dễ hiểu

Khi client gọi API Gateway, API Gateway cần chuyển request đó vào Lambda.

Với Lambda proxy integration, API Gateway gửi gần như toàn bộ request vào Lambda trong một object `event`.

Lambda sẽ tự đọc:

- HTTP method
- Path
- Query string
- Headers
- Body
- Path parameters

Sau đó Lambda xử lý và trả response lại API Gateway.

---

## 3. Lambda proxy integration là gì?

Lambda proxy integration là kiểu tích hợp trong đó API Gateway chuyển request đến Lambda theo format chuẩn.

Lambda sẽ nhận event có dạng gần giống:

```json
{
  "httpMethod": "POST",
  "path": "/bookings",
  "headers": {},
  "queryStringParameters": {},
  "pathParameters": {},
  "body": "{\"name\":\"Phu\"}"
}
```

Lambda cần parse `body` nếu client gửi JSON.

---

## 4. Response format bắt buộc

Khi dùng Lambda proxy integration, Lambda phải trả response đúng format.

Ví dụ Node.js:

```js
export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "success"
    })
  };
};
```

Các field quan trọng:

| Field | Ý nghĩa |
|---|---|
| statusCode | HTTP status code |
| headers | Response headers |
| body | Response body dạng string |

Lưu ý: `body` nên là string, không phải object trực tiếp.

---

## 5. Lỗi 502 Bad Gateway

Một lỗi rất hay gặp là API Gateway trả:

```text
502 Bad Gateway
```

Nguyên nhân phổ biến:

- Lambda trả response sai format.
- `body` là object thay vì string.
- Lambda throw error nhưng không được xử lý.
- Lambda timeout.
- Lambda permission chưa đúng.

---

## 6. Ví dụ response sai

Ví dụ sai:

```js
return {
  message: "success"
};
```

Sai vì thiếu:

- `statusCode`
- `body`

Ví dụ sai:

```js
return {
  statusCode: 200,
  body: {
    message: "success"
  }
};
```

Sai vì `body` phải là string.

---

## 7. Ví dụ response đúng

```js
return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "success"
  })
};
```

---

## 8. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Lambda integration error | Kiểm tra response format |
| API Gateway 502 | Lambda response sai hoặc Lambda lỗi |
| proxy integration | Event chứa request đầy đủ |
| body is JSON string | Cần JSON.parse trong Lambda |
| return JSON to client | body cần JSON.stringify |

---

## 9. Dạng câu hỏi exam thường gặp

### Tình huống

Developer tạo Lambda function và kết nối với API Gateway bằng Lambda proxy integration. Khi gọi API, client nhận lỗi 502.

Nguyên nhân có khả năng cao là gì?

Đáp án thường là:

```text
Lambda function did not return the response in the required format.
```

---

## 10. Lab thực hành

### Lab: Tạo Lambda proxy response đúng và sai

Yêu cầu:

1. Tạo Lambda trả response sai format.
2. Kết nối với API Gateway.
3. Gọi API và quan sát lỗi 502.
4. Sửa response đúng format.
5. Gọi lại API và xác nhận thành công.

Response đúng:

```js
return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    status: "ok"
  })
};
```

---

## 11. Bài tập về nhà

1. Lambda proxy integration là gì?
2. Lambda nhận request từ API Gateway qua biến nào?
3. Vì sao `body` trong response nên là string?
4. Lỗi 502 thường do nguyên nhân gì?
5. Hãy viết response JSON thành công với status code 201.
