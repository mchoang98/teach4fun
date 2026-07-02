# Bài 5. CORS trong API Gateway

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu CORS là gì.
- Biết vì sao frontend gọi API bị lỗi CORS.
- Biết cách bật CORS cho API Gateway.
- Biết các header CORS quan trọng.

---

## 2. Giải thích dễ hiểu

CORS là cơ chế bảo mật của trình duyệt.

Nếu website chạy ở domain này gọi API ở domain khác, trình duyệt sẽ kiểm tra API có cho phép hay không.

Ví dụ:

```text
Frontend: https://myapp.com
API:      https://api.example.com
```

Đây là cross-origin request.

Nếu API không trả header CORS phù hợp, browser sẽ chặn request.

---

## 3. CORS là gì?

CORS là viết tắt của:

```text
Cross-Origin Resource Sharing
```

Nó cho phép server khai báo domain nào được phép gọi API.

Header phổ biến:

```text
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```

---

## 4. Preflight Request

Với một số request như `POST`, `PUT`, `DELETE`, hoặc request có custom header, browser có thể gửi request `OPTIONS` trước.

Request này gọi là preflight request.

Mục đích:

- Kiểm tra server có cho phép method không.
- Kiểm tra server có cho phép header không.
- Kiểm tra origin có được phép không.

---

## 5. CORS trong API Gateway

Khi dùng API Gateway, cần đảm bảo:

- API Gateway có hỗ trợ method `OPTIONS` nếu cần.
- Response có header `Access-Control-Allow-Origin`.
- Response có header `Access-Control-Allow-Methods`.
- Response có header `Access-Control-Allow-Headers`.
- Lambda cũng có thể cần trả CORS header nếu dùng proxy integration.

---

## 6. Ví dụ response có CORS header

```js
return {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  },
  body: JSON.stringify({
    message: "success"
  })
};
```

Trong production, không nên luôn dùng `*` nếu API cần bảo mật. Nên chỉ định origin cụ thể.

---

## 7. Lỗi CORS thường gặp

Thông báo lỗi thường thấy trong browser console:

```text
Access to fetch at ... from origin ... has been blocked by CORS policy
```

Nguyên nhân:

- API thiếu `Access-Control-Allow-Origin`.
- API thiếu method `OPTIONS`.
- Header `Authorization` chưa được allow.
- Lambda response thiếu CORS header.
- Deploy API Gateway chưa cập nhật cấu hình CORS.

---

## 8. Kiến thức thi cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| browser blocks request | CORS |
| cross-origin request | CORS |
| OPTIONS request | Preflight |
| frontend cannot call API | CORS / Authorization |
| Access-Control-Allow-Origin | CORS header |

---

## 9. Bẫy thường gặp

### Bẫy 1. Test bằng Postman không lỗi nhưng browser lỗi

Postman không bị ràng buộc CORS như browser.

Nếu Postman gọi được nhưng browser lỗi, hãy nghĩ đến CORS.

### Bẫy 2. Chỉ bật CORS trong API Gateway nhưng Lambda không trả header

Khi dùng Lambda proxy integration, Lambda response cũng thường cần CORS header.

### Bẫy 3. Quên allow Authorization header

Nếu frontend gửi JWT token trong header `Authorization`, CORS phải cho phép header này.

---

## 10. Lab thực hành

### Lab: Sửa lỗi CORS cho API Gateway

Yêu cầu:

1. Tạo frontend HTML đơn giản dùng `fetch()` gọi API Gateway.
2. Gọi API khi chưa bật CORS.
3. Quan sát lỗi trong browser console.
4. Bật CORS trong API Gateway.
5. Cập nhật Lambda response có CORS header.
6. Deploy lại API.
7. Gọi lại API và kiểm tra thành công.

---

## 11. Bài tập về nhà

1. CORS là gì?
2. Vì sao browser chặn request cross-origin?
3. Preflight request là gì?
4. Header nào cho phép origin gọi API?
5. Nếu frontend gửi JWT token, cần allow header nào?
6. Vì sao Postman gọi được nhưng browser không gọi được?
