# Buổi 6: Giao diện danh sách và chi tiết gọi API

## 1. Mục tiêu

- Tách logic gọi API khỏi logic giao diện.
- Hiển thị danh sách và chi tiết từ JSON.
- Đọc id từ query string.
- Tạo DOM an toàn và xử lý loading, rỗng, lỗi mạng, 404.

## 2. Module gọi API

`frontend/js/api.js`:

```javascript
const API_BASE_URL = "http://127.0.0.1:5000/api";

export async function getJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const data = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(data?.error || "Yêu cầu thất bại");
  return data;
}
```

## 3. Trang danh sách

```javascript
import { getJson } from "./api.js";

const container = document.querySelector("#products");
const status = document.querySelector("#status");
const formatMoney = new Intl.NumberFormat("vi-VN");

function createProductCard(product) {
  const article = document.createElement("article");
  const title = document.createElement("h2");
  const price = document.createElement("p");
  const link = document.createElement("a");
  title.textContent = product.name;
  price.textContent = `${formatMoney.format(product.price)} đồng`;
  link.href = `product.html?id=${product.id}`;
  link.textContent = "Xem chi tiết";
  article.append(title, price, link);
  return article;
}

async function loadProducts() {
  try {
    const products = await getJson("/products");
    status.textContent = products.length ? "" : "Chưa có sản phẩm";
    products.forEach((product) => container.append(createProductCard(product)));
  } catch (error) {
    status.textContent = error.message;
  }
}

loadProducts();
```

Dùng `textContent` cho dữ liệu từ API để không diễn giải dữ liệu như HTML.

## 4. Trang chi tiết

```javascript
import { getJson } from "./api.js";

const id = Number(new URLSearchParams(location.search).get("id"));
const status = document.querySelector("#status");

async function loadProduct() {
  if (!Number.isInteger(id) || id <= 0) {
    status.textContent = "Mã sản phẩm không hợp lệ";
    return;
  }
  try {
    const product = await getJson(`/products/${id}`);
    document.querySelector("#name").textContent = product.name;
    document.querySelector("#description").textContent =
      product.description || "Chưa có mô tả";
    status.textContent = "";
  } catch (error) {
    status.textContent = error.message;
  }
}

loadProduct();
```

Nạp module bằng `<script type="module" src="js/products.js"></script>`.

## 5. Thực hành trên lớp

### Yêu cầu

Hiển thị ảnh; khi `image_url` rỗng hoặc tải lỗi, dùng `images/placeholder.png`.

### Dữ liệu đầu vào

`image_url` là URL dạng chuỗi hoặc chuỗi rỗng.

### Kết quả mong đợi

Mỗi thẻ có ảnh, tên, giá, liên kết; ảnh lỗi không phá bố cục.

### Yêu cầu kỹ thuật

Tạo `img` bằng DOM, đặt `alt` và xử lý `error`; không ghép dữ liệu vào `innerHTML`.

## 6. Lỗi thường gặp

- Import lỗi: dùng `type="module"` và Live Server.
- Id là `null` hoặc `NaN`: kiểm tra trước khi gọi API.
- Danh sách nhân đôi: xóa container trước khi render lại.
- Giá sai: API phải trả số; định dạng bằng `Intl.NumberFormat`.

## 7. Bài tập về nhà

### Yêu cầu

Thêm lọc từ khóa và khoảng giá trên trang danh sách.

### Dữ liệu đầu vào

Từ khóa có thể rỗng; giá có thể bỏ trống, nếu nhập phải là số nguyên không âm và min không lớn hơn max.

### Kết quả mong đợi

Frontend tạo query string, gọi API và hiển thị kết quả hoặc empty state.

### Yêu cầu kỹ thuật

Dùng `URLSearchParams`; không tự lọc bản sao dữ liệu cũ ở client.

## 8. Checklist

- [ ] Frontend không chứa Jinja.
- [ ] Danh sách và chi tiết đều lấy từ API.
- [ ] Có loading, empty state và lỗi.
- [ ] Không chèn dữ liệu không tin cậy bằng `innerHTML`.
