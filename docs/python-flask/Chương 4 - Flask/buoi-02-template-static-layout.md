# Bài giảng Buổi 2: Template, Static và Layout

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Biết dùng thư mục `templates`.
- Biết dùng `render_template`.
- Biết tạo file HTML cho Flask.
- Biết dùng thư mục `static`.
- Biết gắn CSS vào Flask.
- Biết tạo layout chung cho website.

## 2. Kiến thức chính

Flask thường dùng cấu trúc:

```text
flask-shop
├── app.py
├── templates
│   ├── layout.html
│   ├── index.html
│   ├── products.html
│   └── contact.html
└── static
    └── style.css
```

Render template:

```python
from flask import render_template

return render_template("index.html")
```

Gắn CSS trong Flask:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
```

## 3. Giải thích dễ hiểu

Ở buổi 1, route chỉ trả về text. Nhưng website thật cần HTML và CSS. Vì vậy Flask dùng thư mục `templates` để chứa file HTML.

Thư mục `static` chứa các file tĩnh như CSS, JavaScript, hình ảnh.

Layout giúp website có một khung chung. Ví dụ tất cả trang đều có header và menu giống nhau.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`Flask project folder structure`

- Vị trí chèn:  
Sau phần giới thiệu `templates` và `static`.

- Chú thích:  
Project Flask thường chia HTML vào templates và CSS, ảnh, JS vào static.

## 5. Ví dụ code

File `app.py`:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/products")
def products():
    return render_template("products.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
```

File `templates/layout.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flask Shop</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <header class="header">
        <h1>Flask Shop</h1>
        <nav>
            <a href="/">Trang chủ</a>
            <a href="/products">Sản phẩm</a>
            <a href="/contact">Liên hệ</a>
        </nav>
    </header>

    <main class="container">
        {% block content %}{% endblock %}
    </main>
</body>
</html>
```

File `templates/index.html`:

```html
{% extends "layout.html" %}

{% block content %}
<section class="card">
    <h2>Chào mừng đến với Flask Shop</h2>
    <p>Đây là website bán hàng đơn giản được xây dựng bằng Flask.</p>
</section>
{% endblock %}
```

File `static/style.css`:

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #1f2937;
}

.header {
    background-color: #2563eb;
    color: white;
    padding: 20px;
    text-align: center;
}

.header a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background-color: white;
    padding: 24px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
}
```

## 6. Thực hành trên lớp

- Tạo thư mục `templates`.
- Tạo thư mục `static`.
- Tạo `layout.html`.
- Tạo `index.html`, `products.html`, `contact.html`.
- Gắn CSS bằng `url_for`.
- Dùng `{% extends "layout.html" %}` cho các trang con.

## 7. Lỗi thường gặp

### Lỗi 1: Sai tên thư mục templates

Flask mặc định tìm thư mục:

```text
templates
```

Không viết thành:

```text
template
```

### Lỗi 2: Sai tên thư mục static

Phải là:

```text
static
```

### Lỗi 3: Quên import `render_template`

```python
from flask import render_template
```

### Lỗi 4: Gắn CSS sai cách

Nên dùng:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
```

## 8. Bài tập về nhà

Tạo website Flask có 4 trang:

- Trang chủ
- Sản phẩm
- Giới thiệu
- Liên hệ

Yêu cầu:

- Có `layout.html`.
- Có menu chung.
- Có file `style.css`.
- Giao diện có màu nền, card và header.

## 9. Checklist cuối buổi

- [ ] Biết dùng thư mục `templates`.
- [ ] Biết dùng `render_template`.
- [ ] Biết tạo `layout.html`.
- [ ] Biết dùng `{% extends %}`.
- [ ] Biết dùng `{% block content %}`.
- [ ] Biết dùng thư mục `static`.
- [ ] Gắn được CSS vào Flask.
- [ ] Tạo được nhiều trang HTML trong Flask.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên có website Flask nhiều trang, có layout chung và có CSS.
