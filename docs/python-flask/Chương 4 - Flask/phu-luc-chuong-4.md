# Phụ lục Chương 4: Flask REST API và Frontend Client-side

## 1. Lệnh thường dùng

```text
python -m venv venv
venv\Scripts\activate
pip install Flask Flask-Cors Flask-SQLAlchemy psycopg2-binary python-dotenv
pip freeze > requirements.txt
pip install -r requirements.txt
python app.py
```

Trên macOS/Linux dùng `source venv/bin/activate`.

## 2. HTTP và CRUD

| CRUD | Method | Status thành công thường dùng |
|---|---|---|
| Create | POST | `201 Created` |
| Read | GET | `200 OK` |
| Update | PUT | `200 OK` |
| Delete | DELETE | `204 No Content` |

| Status | Khi dùng |
|---|---|
| `400` | JSON hoặc giá trị đầu vào không hợp lệ |
| `404` | Tài nguyên/endpoint không tồn tại |
| `405` | Method không được endpoint hỗ trợ |
| `500` | Lỗi ngoài dự kiến ở server |

## 3. Mẫu response

Thành công:

```json
{"id": 1, "name": "Bút máy", "price": 45000}
```

Thất bại:

```json
{"error": "Không tìm thấy sản phẩm"}
```

## 4. Mẫu fetch

GET:

```javascript
const response = await fetch("http://127.0.0.1:5000/api/products");
const data = await response.json();
if (!response.ok) throw new Error(data.error || "Yêu cầu thất bại");
```

POST/PUT:

```javascript
const response = await fetch(url, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(payload),
});
```

DELETE `204`:

```javascript
const response = await fetch(url, {method: "DELETE"});
if (!response.ok) {
  const data = await response.json();
  throw new Error(data.error);
}
```

Không gọi `response.json()` với response `204`.

## 5. Checklist validation backend

- Body có phải object JSON không?
- Trường bắt buộc có tồn tại không?
- Chuỗi sau `strip()` có rỗng hoặc quá dài không?
- Số có đúng kiểu, đúng miền và không phải boolean không?
- Id liên quan có tồn tại trong database không?
- Client có đang gửi trường mà server không nên tin, như giá hoặc tổng tiền, không?

## 6. Lỗi thường gặp

### Không gọi được API

Kiểm tra Flask đang chạy, URL/cổng chính xác, DevTools Network và cấu hình CORS.

### API nhận `None`

Request phải có `Content-Type: application/json`, body phải qua `JSON.stringify` và là JSON hợp lệ.

### Lỗi CORS

```python
from flask_cors import CORS
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5500"}})
```

Origin gồm giao thức, host và port. `localhost` khác `127.0.0.1`.

### Model không chuyển thành JSON

Tạo `to_dict()` và chỉ đưa các trường được phép công khai vào dictionary.

### Database không kết nối

Kiểm tra PostgreSQL đang chạy, database tồn tại, `DATABASE_URL` đúng và `load_dotenv()` đã được gọi.

### Thay đổi không được lưu

Sau add, update, delete phải `db.session.commit()`. Khi transaction lỗi, gọi `db.session.rollback()`.

### Module JavaScript không chạy

Dùng `<script type="module">` và mở frontend bằng HTTP server/Live Server, không dùng `file://`.

### Giỏ hàng bị hỏng

Bọc `JSON.parse` bằng `try/catch` và kiểm tra kết quả là array. Không lưu giá hoặc tổng làm nguồn dữ liệu đáng tin cậy.

## 7. Kiểm thử bằng curl

```text
curl http://127.0.0.1:5000/api/products
curl http://127.0.0.1:5000/api/products/1
curl -X POST http://127.0.0.1:5000/api/products -H "Content-Type: application/json" -d "{\"name\":\"Bút máy\",\"price\":45000}"
curl -X DELETE http://127.0.0.1:5000/api/products/1
```

Trên PowerShell, `curl` có thể là alias tùy phiên bản. Có thể dùng `curl.exe` hoặc Postman.

## 8. Thuật ngữ

| Thuật ngữ | Ý nghĩa |
|---|---|
| API | Giao diện để các chương trình trao đổi dữ liệu |
| Endpoint | Một URL API kèm HTTP method |
| JSON | Định dạng dữ liệu văn bản |
| REST | Cách tổ chức API quanh tài nguyên |
| CORS | Quy tắc trình duyệt cho request khác origin |
| ORM | Ánh xạ class/object với bảng/bản ghi |
| Transaction | Nhóm thao tác cùng thành công hoặc cùng hủy |
| Serialization | Chuyển dữ liệu thành dạng truyền được như JSON |
| `localStorage` | Kho dữ liệu theo origin trong trình duyệt |

## 9. Hướng phát triển

- Flask-Migrate/Alembic cho migration.
- Blueprint và application factory để chia module.
- Authentication và phân quyền quản trị.
- Pagination, sorting và tài liệu OpenAPI.
- Test tự động bằng `pytest`.
- Deploy frontend và backend, giới hạn CORS theo domain thật.
