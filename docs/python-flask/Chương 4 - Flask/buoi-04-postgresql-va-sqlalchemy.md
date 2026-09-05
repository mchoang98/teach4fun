# Buổi 4: PostgreSQL, SQLAlchemy và API đọc dữ liệu

## 1. Mục tiêu

- Kết nối Flask với PostgreSQL qua Flask-SQLAlchemy.
- Đưa chuỗi kết nối vào biến môi trường.
- Xây dựng model và chuyển model thành JSON.
- Tạo API đọc danh sách và chi tiết sản phẩm.

## 2. Cài đặt

```text
pip install Flask Flask-Cors Flask-SQLAlchemy psycopg2-binary python-dotenv
pip freeze > requirements.txt
```

Tạo database `flask_shop`. File `backend/.env`:

```text
DATABASE_URL=postgresql+psycopg2://postgres:mat_khau@localhost:5432/flask_shop
```

Không commit `.env`; thêm file này vào `.gitignore`.

## 3. Model sản phẩm

```python
import os
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(500), nullable=False, default="")
    image_url = db.Column(db.String(500), nullable=False, default="")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "image_url": self.image_url,
        }
```

`to_dict()` kiểm soát chính xác các trường được công khai qua API.

## 4. Tạo bảng và dữ liệu mẫu

```python
with app.app_context():
    db.create_all()
```

`db.create_all()` phù hợp lúc nhập môn. Dự án thực tế nên dùng migration. Seed dữ liệu mẫu một lần:

```python
with app.app_context():
    if Product.query.count() == 0:
        db.session.add_all([
            Product(name="Bút máy", price=45000, description="Ngòi êm"),
            Product(name="Sổ tay", price=60000, description="Bìa cứng"),
        ])
        db.session.commit()
```

## 5. API đọc dữ liệu

```python
@app.get("/api/products")
def get_products():
    products = db.session.execute(
        db.select(Product).order_by(Product.id)
    ).scalars().all()
    return jsonify([product.to_dict() for product in products]), 200


@app.get("/api/products/<int:product_id>")
def get_product(product_id):
    product = db.session.get(Product, product_id)
    if product is None:
        return jsonify({"error": "Không tìm thấy sản phẩm"}), 404
    return jsonify(product.to_dict()), 200
```

## 6. Thực hành trên lớp

### Yêu cầu

Tạo model `Category` và endpoint `GET /api/categories`.

### Dữ liệu cho trước

Mỗi danh mục có `id` là khóa chính và `name` là chuỗi bắt buộc, tối đa 80 ký tự.

### Dữ liệu đầu ra

Status `200` và JSON array sắp xếp theo `id` tăng dần; chưa có dữ liệu thì trả `[]`.

### Yêu cầu kỹ thuật

Model có `to_dict()`; query bằng `db.select`; không dùng Jinja.

## 7. Lỗi thường gặp

- Thiếu `DATABASE_URL`: kiểm tra `.env` và `load_dotenv()`.
- Authentication failed: kiểm tra tài khoản và port PostgreSQL.
- Working outside application context: dùng `app.app_context()`.
- Object is not JSON serializable: gọi `to_dict()`.

## 8. Bài tập về nhà

### Yêu cầu

Thêm trường `stock` biểu diễn tồn kho.

### Dữ liệu cho trước

`stock` là số nguyên không âm, mặc định 0.

### Kết quả mong đợi

Hai API sản phẩm đều trả trường `stock`.

### Yêu cầu kỹ thuật

Cập nhật model, database và `to_dict()`; ghi lại cách cập nhật schema.

## 9. Checklist

- [ ] Kết nối PostgreSQL bằng biến môi trường.
- [ ] Tạo được model, bảng và dữ liệu mẫu.
- [ ] API đọc database, trả JSON và xử lý 404.
