# Bài giảng Buổi 1: Làm quen Backend và Flask

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu backend là gì.
- Hiểu Flask là gì.
- Biết tạo môi trường ảo Python.
- Biết cài Flask.
- Biết tạo file `app.py`.
- Biết tạo route đầu tiên.
- Chạy được website Flask trên máy tính.

## 2. Kiến thức chính

Backend là phần xử lý phía sau của website. Backend nhận yêu cầu từ trình duyệt, xử lý dữ liệu và trả kết quả về cho người dùng.

Flask là một framework Python dùng để xây dựng web backend đơn giản, nhẹ và dễ học.

Các khái niệm chính:

```text
Frontend  : phần người dùng nhìn thấy
Backend   : phần xử lý phía server
Database  : nơi lưu dữ liệu
Route     : đường dẫn xử lý request
Request   : yêu cầu từ trình duyệt gửi lên server
Response  : kết quả server trả về
```

## 3. Giải thích dễ hiểu

Khi người dùng mở một website bán hàng, trình duyệt gửi yêu cầu đến server.

Ví dụ:

```text
Người dùng mở /products
→ Flask nhận yêu cầu
→ Flask xử lý yêu cầu
→ Flask trả về trang danh sách sản phẩm
→ Trình duyệt hiển thị kết quả
```

Ở các chương trước, học viên đã học frontend bằng HTML, CSS và JavaScript. Từ chương này, học viên bắt đầu học phần backend để website có thể xử lý dữ liệu thật.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`frontend backend database diagram`

- Vị trí chèn:  
Sau phần giải thích Frontend, Backend và Database.

- Chú thích:  
Frontend hiển thị giao diện, backend xử lý logic, database lưu dữ liệu.

## 5. Ví dụ code

### Tạo thư mục project

```text
flask-buoi-1
├── app.py
└── requirements.txt
```

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

### File `app.py`

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Xin chào Flask!"

@app.route("/about")
def about():
    return "Đây là trang giới thiệu."

@app.route("/products")
def products():
    return "Đây là trang sản phẩm."

if __name__ == "__main__":
    app.run(debug=True)
```

### Chạy project

```bash
python app.py
```

Mở trình duyệt:

```text
http://127.0.0.1:5000
```

## 6. Thực hành trên lớp

### Bài 1: Tạo project Flask

Tạo thư mục:

```text
flask-buoi-1
```

Tạo file:

```text
app.py
```

### Bài 2: Tạo route trang chủ

```python
@app.route("/")
def home():
    return "Trang chủ website bán hàng"
```

### Bài 3: Tạo các route phụ

Tạo thêm:

```text
/about
/products
/contact
```

Mỗi route trả về một đoạn text khác nhau.

## 7. Lỗi thường gặp

### Lỗi 1: Chưa cài Flask

```text
ModuleNotFoundError: No module named 'flask'
```

Cách sửa:

```bash
pip install flask
```

### Lỗi 2: Chưa bật môi trường ảo

Windows:

```bash
venv\Scripts\activate
```

### Lỗi 3: Quên chạy đúng file

Nếu file tên là `app.py`, chạy:

```bash
python app.py
```

### Lỗi 4: Quên `app.run`

Cần có:

```python
if __name__ == "__main__":
    app.run(debug=True)
```

## 8. Bài tập về nhà

Tạo project Flask có các route:

```text
/
/about
/products
/contact
```

Mỗi route trả về một nội dung khác nhau liên quan đến website bán hàng.

## 9. Checklist cuối buổi

- [ ] Hiểu backend là gì.
- [ ] Hiểu Flask dùng để làm gì.
- [ ] Tạo được môi trường ảo Python.
- [ ] Cài được Flask.
- [ ] Tạo được file `app.py`.
- [ ] Tạo được route `/`.
- [ ] Chạy được Flask server.
- [ ] Mở được website trên trình duyệt.

## 10. Kết quả cần đạt

Kết thúc buổi này, học viên có một Flask app chạy được và có nhiều route cơ bản.
