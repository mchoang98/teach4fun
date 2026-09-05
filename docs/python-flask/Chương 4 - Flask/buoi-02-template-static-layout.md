# Buổi 2: REST API và Frontend gọi API

## 1. Mục tiêu

- Hiểu tài nguyên, endpoint, path parameter và query parameter.
- Tạo frontend độc lập với Flask.
- Dùng `fetch()`, `async/await` và DOM để hiển thị JSON.
- Hiểu CORS ở mức cơ bản.

## 2. Kiến thức chính

| Request | Ý nghĩa |
|---|---|
| `GET /api/products` | Lấy danh sách |
| `GET /api/products/2` | Lấy sản phẩm id 2 |
| `GET /api/products?keyword=áo` | Tìm theo tên |

Frontend ở cổng `5500` và API ở cổng `5000` là hai origin khác nhau. Cài `Flask-Cors` để cho phép frontend học tập gọi API.

## 3. Backend mẫu

```text
pip install Flask-Cors
```

```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {"id": 1, "name": "Bút máy", "price": 45000},
    {"id": 2, "name": "Sổ tay", "price": 60000},
]


@app.get("/api/products")
def get_products():
    keyword = request.args.get("keyword", "").strip().lower()
    result = [p for p in products if keyword in p["name"].lower()]
    return jsonify(result), 200


@app.get("/api/products/<int:product_id>")
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product is None:
        return jsonify({"error": "Không tìm thấy sản phẩm"}), 404
    return jsonify(product), 200
```

## 4. Frontend mẫu

`frontend/index.html` là HTML thuần, không nằm trong `templates`:

```html
<!doctype html>
<html lang="vi">
<head><meta charset="UTF-8"><title>Sản phẩm</title></head>
<body>
  <h1>Sản phẩm</h1>
  <p id="status">Đang tải...</p>
  <ul id="product-list"></ul>
  <script src="js/products.js"></script>
</body>
</html>
```

`frontend/js/products.js`:

```javascript
const API_URL = "http://127.0.0.1:5000/api";
const statusElement = document.querySelector("#status");
const listElement = document.querySelector("#product-list");

async function loadProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error("Không tải được sản phẩm");
    const products = await response.json();
    listElement.innerHTML = products
      .map((p) => `<li>${p.name} - ${p.price} đồng</li>`).join("");
    statusElement.textContent = products.length ? "" : "Chưa có sản phẩm";
  } catch (error) {
    statusElement.textContent = error.message;
  }
}

loadProducts();
```

Mở `frontend` bằng Live Server, không dùng `file://`.

## 5. Thực hành trên lớp

### Yêu cầu

Thêm ô tìm kiếm. Khi gửi, gọi `GET /api/products?keyword=...` và vẽ lại danh sách.

### Dữ liệu đầu vào

Một chuỗi có thể rỗng. Chuỗi rỗng trả mọi sản phẩm; so sánh không phân biệt hoa thường.

### Kết quả mong đợi

Hiển thị sản phẩm có tên chứa từ khóa; nếu rỗng, in `Không tìm thấy sản phẩm`.

### Yêu cầu kỹ thuật

Dùng `URLSearchParams`, `request.args.get` và không tải lại trang.

## 6. Lỗi thường gặp

- CORS: kiểm tra `CORS(app)` và đúng cổng API.
- `Failed to fetch`: kiểm tra backend đang chạy.
- Quên gọi hàm: dùng `await response.json()`.
- DOM không đổi: kiểm tra selector và Console.

## 7. Bài tập về nhà

### Yêu cầu

Tạo trang đọc `id` từ URL `product.html?id=2`, gọi API chi tiết và hiển thị kết quả.

### Dữ liệu đầu vào

`id` là số nguyên dương.

### Kết quả mong đợi

Hiển thị tên, giá khi status `200`; hiển thị lỗi API khi status `404`.

### Yêu cầu kỹ thuật

Dùng `URLSearchParams`, `fetch`, `textContent`; xử lý loading và lỗi.

## 8. Checklist

- [ ] Thiết kế được URL theo tài nguyên.
- [ ] Gọi được API bằng `fetch()`.
- [ ] Xử lý được loading, dữ liệu rỗng và lỗi.
