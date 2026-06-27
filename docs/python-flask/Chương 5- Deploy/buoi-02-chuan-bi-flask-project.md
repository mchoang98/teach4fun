# Buổi 2: Chuẩn bị Flask project để deploy

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Biết kiểm tra project Flask trước khi deploy.
- Biết tạo file `requirements.txt`.
- Biết cài `gunicorn`.
- Biết dùng biến môi trường.
- Biết tránh đưa thông tin bí mật lên GitHub.
- Biết chuẩn bị cấu trúc project phù hợp với Render.

## 2. Nội dung học

- Kiểm tra lại project Flask.
- Tạo `requirements.txt`.
- Cài `gunicorn`.
- Cấu hình `SECRET_KEY`.
- Cấu hình `DATABASE_URL`.
- Dùng biến môi trường.
- Tạo file `.gitignore`.
- Kiểm tra static và templates.

## 3. Kiến thức chính

```text
requirements.txt : danh sách thư viện Python cần cài
gunicorn         : server dùng để chạy Flask khi deploy
environment vars : biến môi trường
SECRET_KEY       : khóa bí mật cho Flask session
DATABASE_URL     : đường dẫn kết nối database
```

## 4. Cấu trúc project gợi ý

```text
flask-shop
├── app.py
├── requirements.txt
├── .gitignore
├── templates
│   ├── layout.html
│   ├── index.html
│   ├── products.html
│   ├── product_detail.html
│   ├── cart.html
│   └── checkout.html
└── static
    └── style.css
```

## 5. File requirements.txt cần có

```text
Flask
Flask-SQLAlchemy
psycopg2-binary
gunicorn
python-dotenv
```

Hoặc tạo tự động bằng lệnh:

```bash
pip freeze > requirements.txt
```

## 6. Cấu hình Flask nên có

```python
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key")

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
    "DATABASE_URL",
    "postgresql://postgres:password@localhost:5432/flask_shop"
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
```

## 7. File .gitignore gợi ý

```text
venv/
__pycache__/
*.pyc
.env
instance/
.DS_Store
```

## 8. Sản phẩm nhỏ

Project Flask có:

- `requirements.txt`
- `gunicorn`
- `.gitignore`
- Cấu hình `SECRET_KEY`
- Cấu hình `DATABASE_URL`
- Không để lộ password database trong code

## 9. Checklist cuối buổi

- [ ] Có file `requirements.txt`.
- [ ] Có cài `gunicorn`.
- [ ] Có file `.gitignore`.
- [ ] Không đưa `.env` lên GitHub.
- [ ] Cấu hình được `SECRET_KEY`.
- [ ] Cấu hình được `DATABASE_URL`.
- [ ] Project chạy local bình thường.

## 10. Kết quả cần đạt

Project Flask sẵn sàng được đưa lên GitHub và deploy lên Render.
