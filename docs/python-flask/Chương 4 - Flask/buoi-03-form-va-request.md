# Bài giảng Buổi 3: Form và Request trong Flask

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu form dùng để gửi dữ liệu lên backend.
- Biết phân biệt GET và POST.
- Biết tạo form HTML.
- Biết nhận dữ liệu form trong Flask.
- Biết dùng `request.form`.
- Biết kiểm tra dữ liệu rỗng cơ bản.

## 2. Kiến thức chính

Import `request`:

```python
from flask import request
```

Route nhận cả GET và POST:

```python
@app.route("/contact", methods=["GET", "POST"])
def contact():
    pass
```

Lấy dữ liệu từ form:

```python
name = request.form.get("name")
```

HTML form:

```html
<form method="POST">
    <input type="text" name="name">
    <button type="submit">Gửi</button>
</form>
```

## 3. Giải thích dễ hiểu

Form là cách người dùng gửi dữ liệu cho website.

Ví dụ trong website bán hàng:

- Người dùng nhập tên.
- Người dùng nhập số điện thoại.
- Người dùng nhập địa chỉ.
- Người dùng bấm đặt hàng.

Flask nhận dữ liệu và xử lý.

GET thường dùng để lấy dữ liệu. POST thường dùng để gửi dữ liệu.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTTP GET POST form diagram`

- Vị trí chèn:  
Sau phần giải thích GET và POST.

- Chú thích:  
GET thường dùng để lấy dữ liệu, POST thường dùng để gửi dữ liệu lên server.

## 5. Ví dụ code

File `app.py`:

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/contact", methods=["GET", "POST"])
def contact():
    message = ""

    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        content = request.form.get("content")

        if name == "" or email == "" or content == "":
            message = "Vui lòng nhập đầy đủ thông tin."
        else:
            message = "Gửi liên hệ thành công!"

    return render_template("contact.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)
```

File `templates/contact.html`:

```html
{% extends "layout.html" %}

{% block content %}
<section class="card">
    <h2>Liên hệ</h2>

    <form method="POST">
        <label>Họ tên</label>
        <input type="text" name="name">

        <label>Email</label>
        <input type="email" name="email">

        <label>Nội dung</label>
        <textarea name="content"></textarea>

        <button type="submit">Gửi liên hệ</button>
    </form>

    {% if message %}
        <p class="message">{{ message }}</p>
    {% endif %}
</section>
{% endblock %}
```

## 6. Thực hành trên lớp

- Tạo form liên hệ gồm họ tên, email, nội dung.
- Thêm `method="POST"`.
- Nhận dữ liệu bằng `request.form.get`.
- Kiểm tra dữ liệu rỗng.
- Hiển thị thông báo ra template.

## 7. Lỗi thường gặp

### Lỗi 1: Quên `methods=["GET", "POST"]`

```python
@app.route("/contact", methods=["GET", "POST"])
```

### Lỗi 2: Quên import request

```python
from flask import request
```

### Lỗi 3: Input thiếu name

Sai:

```html
<input type="text">
```

Đúng:

```html
<input type="text" name="name">
```

### Lỗi 4: Tên name trong HTML và Flask không khớp

HTML:

```html
<input name="email">
```

Python:

```python
email = request.form.get("email")
```

## 8. Bài tập về nhà

Tạo form thêm sản phẩm giả lập gồm:

- Tên sản phẩm
- Giá sản phẩm
- Mô tả

Khi gửi form, Flask hiển thị thông báo:

```text
Đã nhận sản phẩm: ...
```

## 9. Checklist cuối buổi

- [ ] Hiểu form dùng để làm gì.
- [ ] Phân biệt được GET và POST.
- [ ] Tạo được form HTML.
- [ ] Biết dùng `method="POST"`.
- [ ] Biết dùng `request.form.get`.
- [ ] Biết kiểm tra dữ liệu rỗng.
- [ ] Hiển thị được thông báo ra template.
- [ ] Sửa được lỗi thiếu `name` trong input.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên tạo được form gửi dữ liệu từ HTML lên Flask.
