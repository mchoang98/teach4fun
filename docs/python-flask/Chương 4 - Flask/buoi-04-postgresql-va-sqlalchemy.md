# Bài giảng Buổi 4: PostgreSQL và SQLAlchemy

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu database dùng để làm gì.
- Hiểu PostgreSQL là gì.
- Biết SQLAlchemy là gì.
- Biết cài thư viện kết nối database.
- Biết cấu hình Flask kết nối PostgreSQL.
- Biết tạo model `Product`.
- Biết tạo bảng trong database.

## 2. Kiến thức chính

Database là nơi lưu dữ liệu lâu dài.

Website bán hàng cần lưu:

- Sản phẩm
- Giá
- Mô tả
- Hình ảnh
- Đơn hàng
- Thông tin khách hàng

Cài thư viện:

```bash
pip install flask_sqlalchemy psycopg2-binary
```

Cấu hình database:

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://username:password@localhost:5432/flask_shop"
```

## 3. Giải thích dễ hiểu

Nếu không có database, dữ liệu sản phẩm phải viết cứng trong HTML hoặc Python. Khi muốn thêm sản phẩm, ta phải sửa code.

Database giúp lưu sản phẩm ở nơi riêng. Flask chỉ cần đọc dữ liệu từ database và hiển thị lên website.

PostgreSQL là hệ quản trị cơ sở dữ liệu. SQLAlchemy giúp Python làm việc với database bằng code Python.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`Flask SQLAlchemy PostgreSQL diagram`

- Vị trí chèn:  
Sau phần giải thích Flask kết nối database.

- Chú thích:  
Flask dùng SQLAlchemy để làm việc với PostgreSQL.

## 5. Ví dụ code

File `app.py`:

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/flask_shop"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.String(255))

    def __repr__(self):
        return f"<Product {self.name}>"

@app.route("/")
def home():
    return "Flask kết nối PostgreSQL"

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
```

Tạo database trong PostgreSQL:

```sql
CREATE DATABASE flask_shop;
```

## 6. Thực hành trên lớp

- Cài thư viện `flask_sqlalchemy` và `psycopg2-binary`.
- Tạo database `flask_shop`.
- Cấu hình chuỗi kết nối.
- Tạo model `Product`.
- Chạy `db.create_all()` để tạo bảng.

## 7. Lỗi thường gặp

### Lỗi 1: Chưa cài PostgreSQL

Cần cài PostgreSQL và tạo database trước.

### Lỗi 2: Sai username hoặc password

Kiểm tra chuỗi kết nối:

```text
postgresql://username:password@localhost:5432/database_name
```

### Lỗi 3: Chưa cài psycopg2

```bash
pip install psycopg2-binary
```

### Lỗi 4: Quên `app.app_context()`

```python
with app.app_context():
    db.create_all()
```

## 8. Bài tập về nhà

Tạo model `Product` có các cột:

- `id`
- `name`
- `price`
- `description`
- `image_url`

Tạo thành công bảng `products` trong PostgreSQL.

## 9. Checklist cuối buổi

- [ ] Hiểu database dùng để làm gì.
- [ ] Hiểu PostgreSQL là gì.
- [ ] Hiểu SQLAlchemy là gì.
- [ ] Cài được `flask_sqlalchemy`.
- [ ] Cài được `psycopg2-binary`.
- [ ] Tạo được database `flask_shop`.
- [ ] Cấu hình được kết nối database.
- [ ] Tạo được model `Product`.
- [ ] Tạo được bảng trong database.

## 10. Kết quả cần đạt

Kết thúc buổi này, Flask app kết nối được PostgreSQL và có bảng `products`.
