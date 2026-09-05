# Buổi 1: Làm quen Backend, HTTP và Flask API

## 1. Mục tiêu

- Hiểu frontend, backend, API, request và response.
- Tạo môi trường Python và chạy Flask.
- Tạo endpoint trả JSON bằng `jsonify`.
- Nhận biết các status code thông dụng.

## 2. Kiến thức chính

Frontend gửi HTTP request. Backend xử lý và trả HTTP response. Trong chương này, frontend và backend trao đổi dữ liệu JSON.

| Mã | Ý nghĩa |
|---|---|
| `200` | Thành công |
| `201` | Đã tạo dữ liệu |
| `204` | Thành công, không có body |
| `400` | Dữ liệu không hợp lệ |
| `404` | Không tìm thấy |
| `500` | Lỗi server |

## 3. Chuẩn bị

```text
mkdir flask-shop
cd flask-shop
mkdir backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install Flask
```

Trên macOS/Linux, kích hoạt bằng `source venv/bin/activate`.

## 4. Ví dụ code

`backend/app.py`:

```python
from flask import Flask, jsonify

app = Flask(__name__)


@app.get("/api/hello")
def hello():
    return jsonify({
        "message": "Xin chào từ Flask API",
        "course": "Python Flask"
    }), 200


@app.get("/api/health")
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    app.run(debug=True)
```

Chạy `python app.py`, rồi mở `http://127.0.0.1:5000/api/hello` hoặc dùng:

```text
curl http://127.0.0.1:5000/api/hello
```

## 5. Thực hành trên lớp

### Bài 1: API khóa học

#### Yêu cầu

Tạo `GET /api/course` trả thông tin khóa học.

#### Dữ liệu cho trước

```python
course_name = "Python Flask"
total_lessons = 8
```

Giữ nguyên tên biến và không dùng `input()`.

#### Kết quả mong đợi

Response mã `200`, gồm hai trường `name` và `total_lessons`.

#### Yêu cầu kỹ thuật

Dùng `@app.get`, `jsonify` và tuple `(response, status_code)`.

### Bài 2: API hồ sơ

#### Yêu cầu

Tạo `GET /api/profile` trả họ tên, tuổi và trạng thái đang học.

#### Dữ liệu cho trước

```python
full_name = "Nguyễn An"
age = 16
is_learning = True
```

#### Kết quả mong đợi

JSON giữ đúng kiểu chuỗi, số nguyên và boolean; response mã `200`.

#### Yêu cầu kỹ thuật

Không chuyển mọi giá trị thành chuỗi.

## 6. Lỗi thường gặp

- `ModuleNotFoundError`: kích hoạt môi trường ảo và cài Flask.
- Không kết nối: bảo đảm terminal vẫn chạy `python app.py`.
- `404`: kiểm tra chính xác URL và tiền tố `/api`.
- Trả chuỗi giống JSON: dùng `jsonify`, không tự ghép chuỗi.

## 7. Bài tập về nhà

### Yêu cầu

Tạo `GET /api/book` trả một cuốn sách.

### Dữ liệu cho trước

Tự khai báo `title`, `author`, `price`; giá là số nguyên không âm, đơn vị đồng.

### Kết quả mong đợi

Object JSON có đúng ba trường trên và status `200`.

### Yêu cầu kỹ thuật

Không dùng HTML hoặc Jinja.

## 8. Checklist

- [ ] Phân biệt được request, response, JSON và HTML.
- [ ] Chạy được Flask server.
- [ ] Tạo được endpoint GET trả JSON và status code.
