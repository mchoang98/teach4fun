# Phụ lục Chương 4: Flask và PostgreSQL

## 1. Lệnh thường dùng

### Tạo môi trường ảo

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Cài Flask

```bash
pip install flask
```

### Cài SQLAlchemy và PostgreSQL driver

```bash
pip install flask_sqlalchemy psycopg2-binary
```

### Lưu thư viện vào requirements.txt

```bash
pip freeze > requirements.txt
```

### Cài lại thư viện từ requirements.txt

```bash
pip install -r requirements.txt
```

### Chạy Flask app

```bash
python app.py
```

## 2. Bảng thuật ngữ nhanh

| Thuật ngữ | Ý nghĩa |
| --- | --- |
| Backend | Phần xử lý phía server |
| Frontend | Phần giao diện người dùng nhìn thấy |
| Database | Nơi lưu dữ liệu |
| PostgreSQL | Hệ quản trị cơ sở dữ liệu |
| Flask | Framework Python để tạo web backend |
| Route | Đường dẫn xử lý request |
| Template | File HTML được Flask render |
| Static | File tĩnh như CSS, JS, hình ảnh |
| Request | Yêu cầu gửi từ trình duyệt lên server |
| Response | Kết quả server trả về |
| GET | Phương thức lấy dữ liệu |
| POST | Phương thức gửi dữ liệu |
| ORM | Công cụ thao tác database bằng code |
| SQLAlchemy | ORM phổ biến trong Python |
| Model | Class đại diện cho bảng dữ liệu |
| CRUD | Thêm, xem, sửa, xóa dữ liệu |
| Session | Nơi lưu dữ liệu tạm theo người dùng |
| Cart | Giỏ hàng |
| Checkout | Đặt hàng |

## 3. Lỗi thường gặp

### Lỗi 1: Không cài Flask

```text
ModuleNotFoundError: No module named 'flask'
```

Cách sửa:

```bash
pip install flask
```

### Lỗi 2: Sai tên thư mục templates

Flask mặc định tìm thư mục:

```text
templates
```

Không đặt sai thành:

```text
template
```

### Lỗi 3: Sai tên thư mục static

Thư mục file tĩnh phải là:

```text
static
```

### Lỗi 4: Không kết nối được PostgreSQL

Cần kiểm tra:

- PostgreSQL đã chạy chưa.
- Tên database đúng chưa.
- Username đúng chưa.
- Password đúng chưa.
- Port có phải `5432` không.

### Lỗi 5: Quên tạo database

```sql
CREATE DATABASE flask_shop;
```

### Lỗi 6: Quên `db.create_all()`

```python
with app.app_context():
    db.create_all()
```

### Lỗi 7: Input form thiếu `name`

Sai:

```html
<input type="text">
```

Đúng:

```html
<input type="text" name="name">
```

### Lỗi 8: Form POST nhưng route không nhận POST

Sai:

```python
@app.route("/contact")
```

Đúng:

```python
@app.route("/contact", methods=["GET", "POST"])
```

### Lỗi 9: Quên `secret_key` khi dùng session

```python
app.secret_key = "your-secret-key"
```

### Lỗi 10: Dữ liệu giá bị lỗi kiểu

Dữ liệu từ form thường là chuỗi. Khi lưu giá, cần đổi sang số:

```python
price = int(request.form.get("price"))
```

## 4. Hướng phát triển sau Chương 4

Sau khi hoàn thành chương này, học viên có thể học tiếp:

1. Đăng ký, đăng nhập người dùng.
2. Phân quyền admin và khách hàng.
3. Upload ảnh sản phẩm.
4. Tìm kiếm và lọc sản phẩm.
5. REST API với Flask.
6. Kết nối frontend JavaScript với Flask API.
7. Deploy Flask lên Render.
8. Dùng PostgreSQL online.
9. Bảo mật form và dữ liệu người dùng.
10. Làm website bán hàng hoàn chỉnh hơn.
