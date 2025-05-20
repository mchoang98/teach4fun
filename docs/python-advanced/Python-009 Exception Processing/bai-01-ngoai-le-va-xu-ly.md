
# 📘 Bài 9-1: Ngoại Lệ và Xử Lý Ngoại Lệ trong Python

> **Mục tiêu:** Hiểu và sử dụng `try`, `except`, `else`, và `finally` để xử lý lỗi một cách an toàn trong chương trình Python.

---

## ✅ 1. Ngoại lệ là gì?

**Ngoại lệ (Exception)** là lỗi xảy ra trong khi chương trình đang chạy, khiến chương trình bị **dừng đột ngột** nếu không được xử lý.

Ví dụ:
```python
print(10 / 0)  # Lỗi chia cho 0
```

Kết quả:
```
ZeroDivisionError: division by zero
```

---

## 🧯 2. Cách xử lý ngoại lệ với `try - except`

Cú pháp cơ bản:
```python
try:
    # mã có thể gây lỗi
except ErrorType:
    # mã xử lý khi có lỗi
```

Ví dụ:
```python
try:
    num = int(input("Nhập số: "))
    print("Bình phương:", num ** 2)
except ValueError:
    print("❌ Bạn phải nhập số nguyên!")
```

---

## 🔍 3. Sử dụng `else` và `finally`

### `else`: Chạy khi **không có lỗi**
```python
try:
    age = int(input("Nhập tuổi: "))
except ValueError:
    print("Sai định dạng!")
else:
    print("Tuổi của bạn là:", age)
```

### `finally`: Luôn chạy **dù có lỗi hay không**
```python
try:
    f = open("data.txt")
except FileNotFoundError:
    print("Không tìm thấy file!")
finally:
    print("Kết thúc xử lý file.")
```

---

## 📦 4. Một số lỗi thường gặp

| Lỗi | Mô tả |
|-----|------|
| `ZeroDivisionError` | Chia cho 0 |
| `ValueError` | Sai kiểu giá trị |
| `TypeError` | Sai kiểu dữ liệu |
| `FileNotFoundError` | Không tìm thấy file |
| `IndexError` | Truy cập sai chỉ mục danh sách |

---

## 🧑‍🏫 5. Bài tập đơn giản

### Đề bài: Tính điểm trung bình 3 môn

```python
try:
    math = float(input("Điểm Toán: "))
    lit = float(input("Điểm Văn: "))
    eng = float(input("Điểm Anh: "))
    avg = round((math + lit + eng) / 3, 2)
except ValueError:
    print("❌ Điểm phải là số!")
else:
    print("✅ Điểm trung bình:", avg)
```

---

## 🖼️ 6. Hình minh họa

![Xử lý ngoại lệ Python](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Python_exception_handling.svg/800px-Python_exception_handling.svg.png)
> _Sơ đồ xử lý ngoại lệ trong Python_

---

## ✨ Ghi nhớ nhanh

| Thành phần | Ý nghĩa |
|------------|--------|
| `try`      | Nơi đặt đoạn code có thể gây lỗi |
| `except`   | Xử lý khi lỗi xảy ra |
| `else`     | Chạy nếu không có lỗi |
| `finally`  | Luôn chạy dù có lỗi hay không |

---
