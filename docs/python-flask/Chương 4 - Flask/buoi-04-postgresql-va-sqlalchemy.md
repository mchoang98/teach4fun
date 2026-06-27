# Buổi 4: PostgreSQL và SQLAlchemy

## 1. Mục tiêu

Sau buổi học này, bạn cần hiểu và làm được các việc sau:

* Hiểu database là gì và dùng để làm gì.
* Hiểu vì sao website cần database.
* Biết PostgreSQL là gì.
* Biết SQLAlchemy giúp Flask làm việc với database như thế nào.
* Biết cài thư viện cần thiết để kết nối Flask với PostgreSQL.
* Biết cấu hình Flask kết nối tới database.
* Biết tạo model `Product`.
* Biết tạo bảng `products` trong PostgreSQL bằng Python.

---

## 2. Database là gì?

Database có thể hiểu đơn giản là **nơi lưu trữ dữ liệu lâu dài**.

Ví dụ, khi làm một website bán hàng, chúng ta cần lưu rất nhiều thông tin như:

* Tên sản phẩm
* Giá sản phẩm
* Mô tả sản phẩm
* Hình ảnh sản phẩm
* Đơn hàng
* Thông tin khách hàng

Nếu không có database, mỗi khi muốn thêm sản phẩm mới, ta phải mở file code ra sửa trực tiếp. Cách này rất bất tiện và không phù hợp với website thật.

Ví dụ nếu chưa có database, ta có thể phải viết sản phẩm trực tiếp trong code:

```python
products = [
    {
        "name": "Áo thun",
        "price": 120000
    },
    {
        "name": "Quần jean",
        "price": 250000
    }
]
```

Cách này chỉ phù hợp khi học thử. Với website thật, dữ liệu cần được lưu trong database.

---

## 3. PostgreSQL là gì?

PostgreSQL là một hệ quản trị cơ sở dữ liệu.

Nói dễ hiểu hơn, PostgreSQL là phần mềm giúp chúng ta:

* Tạo database
* Tạo bảng
* Lưu dữ liệu
* Tìm kiếm dữ liệu
* Cập nhật dữ liệu
* Xóa dữ liệu

Trong bài này, chúng ta sẽ tạo database tên là:

```text
flask_shop
```

Database này sẽ dùng để lưu dữ liệu cho website bán hàng bằng Flask.

---

## 4. SQLAlchemy là gì?

Flask không tự làm việc trực tiếp với database một cách dễ dàng.

Vì vậy, chúng ta dùng thêm một thư viện tên là **SQLAlchemy**.

SQLAlchemy giúp Python làm việc với database bằng code Python.

Thay vì phải viết SQL thủ công như sau:

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER
);
```

Ta có thể viết bằng Python như sau:

```python
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    price = db.Column(db.Integer)
```

Sau đó SQLAlchemy sẽ giúp tạo bảng trong database.

Có thể hiểu đơn giản:

```text
Flask → SQLAlchemy → PostgreSQL
```

Trong đó:

* Flask là web backend.
* SQLAlchemy là cầu nối giữa Flask và database.
* PostgreSQL là nơi lưu dữ liệu thật.

---

## 5. Cài thư viện cần thiết

Trước tiên, cần cài 2 thư viện:

```bash
pip install flask_sqlalchemy psycopg2-binary
```

Ý nghĩa:

```text
flask_sqlalchemy
```

Dùng để tích hợp SQLAlchemy vào Flask.

```text
psycopg2-binary
```

Dùng để Python có thể kết nối với PostgreSQL.

Nếu thiếu một trong hai thư viện này, Flask sẽ không kết nối được với PostgreSQL.

---

## 6. Tạo database trong PostgreSQL

Trước khi Flask kết nối được database, ta cần tạo database trước.

Mở PostgreSQL và chạy lệnh:

```sql
CREATE DATABASE flask_shop;
```

Lệnh này tạo một database mới tên là:

```text
flask_shop
```

Database này hiện tại chưa có bảng nào. Ở phần sau, chúng ta sẽ dùng Flask và SQLAlchemy để tạo bảng `products`.

---

## 7. Cấu hình Flask kết nối PostgreSQL

Trong file `app.py`, ta cần cấu hình đường dẫn kết nối database:

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/flask_shop"
```

Cấu trúc chuỗi kết nối như sau:

```text
postgresql://username:password@localhost:5432/database_name
```

Giải thích:

```text
postgresql
```

Loại database đang dùng là PostgreSQL.

```text
username
```

Tên tài khoản PostgreSQL.

```text
password
```

Mật khẩu PostgreSQL.

```text
localhost
```

Database đang chạy trên máy tính của mình.

```text
5432
```

Cổng mặc định của PostgreSQL.

```text
flask_shop
```

Tên database muốn kết nối.

Ví dụ:

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/flask_shop"
```

Nếu máy bạn dùng mật khẩu khác, hãy thay `password` bằng mật khẩu PostgreSQL của bạn.

---

## 8. Tạo file `app.py`

Tạo file `app.py` với nội dung sau:

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
    return "Flask đã kết nối PostgreSQL thành công!"


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
```

---

## 9. Giải thích code

### Import thư viện

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
```

Dòng này dùng để import Flask và SQLAlchemy vào project.

---

### Tạo Flask app

```python
app = Flask(__name__)
```

Dòng này tạo ứng dụng Flask.

---

### Cấu hình database

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/flask_shop"
```

Dòng này cho Flask biết cần kết nối tới database nào.

---

### Tắt thông báo theo dõi thay đổi

```python
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
```

Dòng này giúp tránh cảnh báo không cần thiết từ SQLAlchemy.

---

### Tạo đối tượng database

```python
db = SQLAlchemy(app)
```

Dòng này tạo đối tượng `db`.

Từ đây, ta có thể dùng `db` để:

* Tạo model
* Tạo bảng
* Thêm dữ liệu
* Sửa dữ liệu
* Xóa dữ liệu
* Truy vấn dữ liệu

---

## 10. Model là gì?

Model là một class Python đại diện cho một bảng trong database.

Trong bài này, ta tạo model `Product`.

```python
class Product(db.Model):
    __tablename__ = "products"
```

Điều này có nghĩa là:

```text
Class Product trong Python tương ứng với bảng products trong database.
```

---

## 11. Giải thích các cột trong bảng `products`

### Cột `id`

```python
id = db.Column(db.Integer, primary_key=True)
```

Đây là mã số của sản phẩm.

Mỗi sản phẩm sẽ có một `id` riêng.

Ví dụ:

```text
1
2
3
```

`primary_key=True` nghĩa là đây là khóa chính của bảng.

---

### Cột `name`

```python
name = db.Column(db.String(100), nullable=False)
```

Đây là tên sản phẩm.

Ví dụ:

```text
Áo thun
Giày thể thao
Balo laptop
```

`db.String(100)` nghĩa là chuỗi tối đa 100 ký tự.

`nullable=False` nghĩa là bắt buộc phải có tên sản phẩm, không được để trống.

---

### Cột `price`

```python
price = db.Column(db.Integer, nullable=False)
```

Đây là giá sản phẩm.

Ví dụ:

```text
120000
250000
500000
```

Ta dùng `Integer` vì giá đang được lưu dưới dạng số nguyên.

---

### Cột `description`

```python
description = db.Column(db.Text)
```

Đây là mô tả sản phẩm.

Ví dụ:

```text
Áo thun cotton, phù hợp mặc hằng ngày.
```

`Text` dùng cho nội dung dài hơn `String`.

---

### Cột `image_url`

```python
image_url = db.Column(db.String(255))
```

Đây là đường dẫn hình ảnh sản phẩm.

Ví dụ:

```text
https://example.com/images/ao-thun.jpg
```

---

## 12. Tạo bảng trong database

Phần code sau dùng để tạo bảng:

```python
with app.app_context():
    db.create_all()
```

Ý nghĩa:

```python
db.create_all()
```

Lệnh này yêu cầu SQLAlchemy tạo tất cả các bảng dựa trên model đã khai báo.

Trong bài này, SQLAlchemy sẽ tạo bảng:

```text
products
```

Dựa trên model:

```python
class Product(db.Model):
```

Lưu ý: Nếu thiếu `app.app_context()`, chương trình có thể bị lỗi vì Flask chưa biết đang chạy trong ngữ cảnh ứng dụng nào.

---

## 13. Chạy chương trình

Sau khi viết xong file `app.py`, chạy lệnh:

```bash
python app.py
```

Nếu mọi thứ đúng, Flask sẽ chạy và hiển thị:

```text
Flask đã kết nối PostgreSQL thành công!
```

Sau đó, kiểm tra trong PostgreSQL sẽ thấy bảng:

```text
products
```

---

## 14. Hình minh họa nên chèn

Từ khóa tìm hình trên Google:

```text
Flask SQLAlchemy PostgreSQL diagram
```

Vị trí chèn:

Sau phần giải thích:

```text
Flask → SQLAlchemy → PostgreSQL
```

Chú thích hình:

```text
Flask không làm việc trực tiếp với PostgreSQL. Flask dùng SQLAlchemy làm cầu nối để đọc và ghi dữ liệu vào database.
```

---

## 15. Thực hành trên lớp

Học viên thực hiện các bước sau:

### Bước 1: Cài thư viện

```bash
pip install flask_sqlalchemy psycopg2-binary
```

### Bước 2: Tạo database

```sql
CREATE DATABASE flask_shop;
```

### Bước 3: Tạo file `app.py`

Tạo file `app.py` và viết code Flask kết nối PostgreSQL.

### Bước 4: Tạo model `Product`

Model cần có các cột:

* `id`
* `name`
* `price`
* `description`
* `image_url`

### Bước 5: Chạy chương trình

```bash
python app.py
```

### Bước 6: Kiểm tra kết quả

Kiểm tra trong PostgreSQL xem đã có bảng:

```text
products
```

hay chưa.

---

## 16. Lỗi thường gặp

### Lỗi 1: Chưa cài PostgreSQL

Nếu máy chưa có PostgreSQL, Flask sẽ không thể kết nối database.

Cách xử lý:

* Cài PostgreSQL.
* Mở PostgreSQL.
* Tạo database `flask_shop`.

---

### Lỗi 2: Sai username hoặc password

Ví dụ chuỗi kết nối:

```python
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:password@localhost:5432/flask_shop"
```

Nếu mật khẩu PostgreSQL của bạn không phải là `password`, cần sửa lại cho đúng.

Cấu trúc đúng là:

```text
postgresql://username:password@localhost:5432/database_name
```

---

### Lỗi 3: Chưa cài `psycopg2-binary`

Nếu gặp lỗi liên quan đến `psycopg2`, hãy chạy:

```bash
pip install psycopg2-binary
```

---

### Lỗi 4: Quên `app.app_context()`

Nếu viết:

```python
db.create_all()
```

mà bị lỗi, hãy sửa thành:

```python
with app.app_context():
    db.create_all()
```

---

### Lỗi 5: Chưa tạo database `flask_shop`

Nếu chưa tạo database trước, Flask sẽ không thể kết nối.

Cần chạy trong PostgreSQL:

```sql
CREATE DATABASE flask_shop;
```

---

## 17. Bài tập về nhà

Tạo lại project Flask kết nối PostgreSQL từ đầu.

Yêu cầu:

1. Tạo database tên là:

```text
flask_shop
```

2. Tạo model `Product`.

3. Model `Product` có các cột:

* `id`
* `name`
* `price`
* `description`
* `image_url`

4. Chạy chương trình và tạo thành công bảng:

```text
products
```

5. Kiểm tra bảng trong PostgreSQL.

---

## 18. Checklist cuối buổi

* [ ] Hiểu database dùng để lưu dữ liệu lâu dài.
* [ ] Hiểu vì sao website bán hàng cần database.
* [ ] Hiểu PostgreSQL là hệ quản trị cơ sở dữ liệu.
* [ ] Hiểu SQLAlchemy là cầu nối giữa Flask và PostgreSQL.
* [ ] Cài được `flask_sqlalchemy`.
* [ ] Cài được `psycopg2-binary`.
* [ ] Tạo được database `flask_shop`.
* [ ] Cấu hình được chuỗi kết nối database.
* [ ] Tạo được model `Product`.
* [ ] Tạo được bảng `products` trong PostgreSQL.
* [ ] Chạy được Flask app không lỗi.

---

## 19. Kết quả cần đạt

Kết thúc buổi này, bạn cần có một Flask app kết nối được với PostgreSQL.

Project cần có:

```text
app.py
```

Database cần có:

```text
flask_shop
```

Bảng cần có:

```text
products
```

Khi chạy chương trình, Flask tạo được bảng `products` trong PostgreSQL và website hiển thị được dòng chữ:

```text
Flask đã kết nối PostgreSQL thành công!
```
