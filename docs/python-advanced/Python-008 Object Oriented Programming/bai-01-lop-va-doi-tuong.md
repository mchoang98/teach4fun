# Bài 8-1 Lớp và hướng đối tượng

---

_Tác giả: Phu Hoang_  
_Website học Python: [Let's Code Python](https://teach4fun.web.app)_

---

## 🧠 Giới thiệu về Lập trình Hướng đối tượng (OOP)

Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một phong cách lập trình mô phỏng thế giới thực thông qua **đối tượng** và **lớp**.

**Ví dụ thực tế:**
- 🧸 Một chiếc **Gấu bông** là một **đối tượng**.
- 💡 "Gấu bông" là một **lớp** chung để tạo ra nhiều con gấu bông khác nhau.

---

## 🧱 Khái niệm cơ bản

| Khái niệm        | Giải thích |
|------------------|------------|
| `class`          | Định nghĩa khuôn mẫu cho đối tượng |
| `object`         | Thực thể được tạo từ class |
| `__init__`       | Hàm khởi tạo, chạy đầu tiên khi tạo object |
| `self`           | Đại diện cho chính đối tượng hiện tại |
| `method`         | Hàm được định nghĩa trong class |

---

## 🧪 Ví dụ minh họa

### 🧑‍🏫 Định nghĩa một lớp `Student`

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Xin chào, mình là {self.name}, {self.age} tuổi.")
```

### 📦 Tạo đối tượng (instance)

```python
sv1 = Student("Minh", 20)
sv2 = Student("Lan", 21)

sv1.introduce()
sv2.introduce()
```

**Kết quả:**
```
Xin chào, mình là Minh, 20 tuổi.
Xin chào, mình là Lan, 21 tuổi.
```

---

## 📊 Minh họa bằng hình ảnh

### Hình 1: Mối quan hệ giữa `class` và `object`

![oop-concept](https://funix.edu.vn/wp-content/uploads/2022/03/external-content-duckduckgo-com-16331547209891134749158-0-0-942-1676-crop-1633154954083874831395-1024x576.jpg)

### Hình 2: Một lớp Python cơ bản

![python-class](https://media.licdn.com/dms/image/v2/D4E12AQGC3gb2NSgv5Q/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1674773994474?e=1750291200&v=beta&t=M3dKJvVwx8Ed2yG5eGM4Y-JeA1HB0F2OC1T-yIdqKos)

---

## 🛠 Các tính năng OOP nâng cao

| Tính năng         | Mô tả |
|-------------------|------|
| Kế thừa (Inheritance)     | Lớp con kế thừa từ lớp cha |
| Đa hình (Polymorphism)    | Nhiều phương thức cùng tên, hoạt động khác nhau |
| Bao đóng (Encapsulation) | Ẩn chi tiết nội bộ, chỉ cho phép truy cập qua method |

---

## 🧰 Ví dụ kế thừa

```python
class Animal:
    def speak(self):
        print("Động vật đang phát ra âm thanh.")

class Dog(Animal):
    def speak(self):
        print("Gâu gâu!")

pet = Dog()
pet.speak()
```

**Kết quả:**  
```
Gâu gâu!
```

---

## ✅ Tóm tắt

- `class` giống như khuôn mẫu, `object` là sản phẩm tạo ra từ khuôn đó.
- `__init__` là nơi khai báo thuộc tính khi tạo object.
- `self` giúp gán giá trị cho chính đối tượng.
- OOP giúp quản lý chương trình theo cách mô phỏng thế giới thực.

---

## 🔗 Thực hành thêm

👉 Truy cập: [Let's Code Python - OOP Bài tập](https://letscode-python.web.app)

---

Bạn có muốn mình đóng gói file này dưới dạng `.md` kèm hình ảnh minh họa không? Hoặc muốn chèn thêm phần câu hỏi trắc nghiệm/tự luận để luyện tập?