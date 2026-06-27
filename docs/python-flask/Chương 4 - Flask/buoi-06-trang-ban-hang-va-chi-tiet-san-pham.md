#  Buổi 6: Trang bán hàng và chi tiết sản phẩm

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Biết tạo trang danh sách sản phẩm cho khách hàng.
- Biết hiển thị sản phẩm từ database ra HTML.
- Biết tạo card sản phẩm.
- Biết tạo trang chi tiết sản phẩm.
- Biết phân biệt trang admin và trang khách hàng.

## 2. Kiến thức chính

Trang admin dành cho người quản lý sản phẩm.

Trang bán hàng dành cho khách hàng xem và mua sản phẩm.

Các route chính:

```text
/products
/products/<id>
```

Lấy danh sách sản phẩm:

```python
products = Product.query.all()
```

Lấy chi tiết sản phẩm:

```python
product = Product.query.get_or_404(id)
```

## 3. Giải thích dễ hiểu

Ở buổi 5, học viên đã tạo trang quản lý sản phẩm. Buổi này, ta dùng dữ liệu đó để hiển thị cho khách hàng.

Khách hàng không cần thấy nút sửa hoặc xóa. Khách hàng chỉ cần thấy:

- Hình sản phẩm
- Tên sản phẩm
- Giá
- Mô tả ngắn
- Nút xem chi tiết
- Nút thêm vào giỏ hàng

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`product card ecommerce layout`

- Vị trí chèn:  
Sau phần giải thích trang bán hàng cho khách hàng.

- Chú thích:  
Card sản phẩm giúp hiển thị sản phẩm rõ ràng và dễ mua hơn.

## 5. Ví dụ code

### Route danh sách sản phẩm

```python
@app.route("/products")
def products():
    products = Product.query.all()
    return render_template("products.html", products=products)
```

### Route chi tiết sản phẩm

```python
@app.route("/products/<int:id>")
def product_detail(id):
    product = Product.query.get_or_404(id)
    return render_template("product_detail.html", product=product)
```

File `templates/products.html`:

```html
{% extends "layout.html" %}

{% block content %}
<h2>Danh sách sản phẩm</h2>

<div class="product-grid">
    {% for product in products %}
    <div class="product-card">
        <img src="{{ product.image_url }}" alt="{{ product.name }}">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} VND</p>
        <a href="/products/{{ product.id }}" class="btn">Xem chi tiết</a>
        <a href="/cart/add/{{ product.id }}" class="btn">Thêm vào giỏ</a>
    </div>
    {% endfor %}
</div>
{% endblock %}
```

File `templates/product_detail.html`:

```html
{% extends "layout.html" %}

{% block content %}
<section class="card">
    <img src="{{ product.image_url }}" alt="{{ product.name }}">
    <h2>{{ product.name }}</h2>
    <p>Giá: {{ product.price }} VND</p>
    <p>{{ product.description }}</p>
    <a href="/cart/add/{{ product.id }}" class="btn">Thêm vào giỏ hàng</a>
</section>
{% endblock %}
```

## 6. Thực hành trên lớp

- Tạo route `/products`.
- Tạo route `/products/<id>`.
- Tạo template `products.html`.
- Tạo template `product_detail.html`.
- Hiển thị dữ liệu từ PostgreSQL ra card.
- Thêm nút xem chi tiết.
- Thêm nút thêm vào giỏ hàng.

## 7. Lỗi thường gặp

### Lỗi 1: Không truyền products vào template

```python
return render_template("products.html", products=products)
```

### Lỗi 2: Sai tên biến trong template

Python truyền `products`, template cũng phải dùng `products`.

### Lỗi 3: Ảnh không hiển thị

Kiểm tra `image_url` có đúng link ảnh không.

### Lỗi 4: Lỗi 404 khi xem chi tiết

Kiểm tra sản phẩm có tồn tại trong database không.

## 8. Bài tập về nhà

Hoàn thiện trang sản phẩm cho khách hàng:

- Có grid sản phẩm.
- Có card sản phẩm.
- Có nút xem chi tiết.
- Có trang chi tiết sản phẩm.
- Có nút thêm vào giỏ hàng.

## 9. Checklist cuối buổi

- [ ] Tạo được route `/products`.
- [ ] Tạo được route `/products/<id>`.
- [ ] Hiển thị được danh sách sản phẩm.
- [ ] Hiển thị được chi tiết sản phẩm.
- [ ] Biết dùng vòng lặp `{% for %}` trong Jinja.
- [ ] Tạo được card sản phẩm.
- [ ] Phân biệt được trang admin và trang khách hàng.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên có trang bán hàng hiển thị sản phẩm từ database.
