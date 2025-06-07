# Bài 8-2 - Thuộc Tính và Phương Thức trong Python

---
_Tác giả: Phu Hoang_  
_Thuộc loạt bài: Học Lập Trình Python OOP cơ bản_  
_Website học Python: [Let's Code Python](https://letscode-python.web.app)_

---

## 🧠 Mục tiêu bài học

Trong bài này, bạn sẽ học:

- 👀 Hiểu **thuộc tính (attributes)** là gì.
- 🛠 Biết cách định nghĩa và sử dụng **phương thức (methods)** trong class.
- 📦 Áp dụng được để mô tả đối tượng thực tế bằng Python.

---

## 📦 1. Thuộc tính là gì?

Thuộc tính là **đặc điểm hoặc dữ liệu** gắn với một đối tượng.

> 🧍 Ví dụ: Một người có tên, tuổi, chiều cao là **thuộc tính**.

### 🔨 Cách định nghĩa thuộc tính

```python
class Person:
    def __init__(self, name, age):
        self.name = name    # Thuộc tính name
        self.age = age      # Thuộc tính age
```

### 🚀 Tạo đối tượng và sử dụng thuộc tính

```python
p = Person("Hoàng", 26)
print(p.name)   # 👉 Hoàng
print(p.age)    # 👉 26
```

---

## ⚙️ 2. Phương thức là gì?

Phương thức là **hành động** mà đối tượng có thể thực hiện, được định nghĩa bằng **hàm trong class**.

> 🏃‍♂️ Ví dụ: Một người có thể `chạy()`, `nói()` là các **phương thức**.

### 💻 Cách viết phương thức

```python
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"Xin chào, mình là {self.name}")
```

### 🔄 Gọi phương thức

```python
p = Person("Lan")
p.say_hello()
```

**Kết quả:**  
```
Xin chào, mình là Lan
```

---

## 🧠 Phân biệt: Thuộc tính vs. Phương thức

| Thuộc Tính        | Phương Thức        |
|-------------------|--------------------|
| Dữ liệu của đối tượng | Hành động của đối tượng |
| Dùng `self.tên`        | Định nghĩa bằng `def`   |
| Không có `()` khi gọi | Có `()` khi gọi |

---

## 📊 Hình ảnh minh họa

### Hình 1: Cấu trúc class với thuộc tính và phương thức

![OOP method attribute](https://pbs.twimg.com/media/FwhDiEjWIAMaMz9.jpg)

---

## 🎯 Ví dụ tổng hợp

```python
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def start(self):
        print(f"{self.brand} đang khởi động...")

    def show_info(self):
        print(f"Xe {self.brand}, màu {self.color}")
```

```python
my_car = Car("Toyota", "Đỏ")
my_car.start()
my_car.show_info()
```

**Kết quả:**  
```
Toyota đang khởi động...
Xe Toyota, màu Đỏ
```

---

## 📝 Câu hỏi ôn tập

1. Sự khác biệt giữa **thuộc tính** và **phương thức** là gì?
2. Làm sao để truy cập thuộc tính `age` của một đối tượng `student`?
3. Viết một class `Book` có thuộc tính `title`, `author`, phương thức `display()`.

---

## ✅ Tóm tắt bài học

- **Thuộc tính** là thông tin (biến) của đối tượng.
- **Phương thức** là hành vi (hàm) mà đối tượng thực hiện.
- Dùng `self` để truy cập cả thuộc tính và phương thức bên trong class.

---


