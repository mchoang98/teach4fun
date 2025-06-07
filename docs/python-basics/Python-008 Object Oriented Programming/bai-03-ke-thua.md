# Bài 8-3 - Các Tính Chất của OOP trong Python
_Tác giả: Phu Hoang_  
_Thuộc loạt bài: Học Lập Trình Python OOP cơ bản_  
_Web học lập trình Python: [Let's Code Python](https://letscode-python.web.app)_

---

## 🧠 Mục tiêu bài học

Trong bài này, bạn sẽ học 4 tính chất quan trọng nhất của lập trình hướng đối tượng:

1. **Tính đóng gói** (Encapsulation)
2. **Tính kế thừa** (Inheritance)
3. **Tính đa hình** (Polymorphism)
4. **Tính trừu tượng** (Abstraction)

---

## 🧳 1. Tính đóng gói (Encapsulation)

**Đóng gói** là khả năng **ẩn dữ liệu bên trong đối tượng** và **chỉ cho phép truy cập qua phương thức**.

### 🧪 Ví dụ:

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Dấu __ để ẩn thuộc tính

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance
```

```python
acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())  # 👉 1500
# print(acc.__balance)    ❌ Lỗi vì thuộc tính này bị ẩn
```

✅ **Ý nghĩa**: Bảo vệ dữ liệu khỏi bị thay đổi trực tiếp từ bên ngoài.

---

## 👨‍👩‍👧 2. Tính kế thừa (Inheritance)

**Kế thừa** là khả năng **lớp con kế thừa thuộc tính và phương thức từ lớp cha**, giúp tái sử dụng mã.

### 🧪 Ví dụ:

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Gâu gâu!")

dog = Dog()
dog.speak()   # Kế thừa từ lớp cha
dog.bark()    # Phương thức riêng của lớp con
```

✅ **Ý nghĩa**: Giúp mở rộng và tái sử dụng mã hiệu quả.

---

## 🌀 3. Tính đa hình (Polymorphism)

**Đa hình** là khả năng **một phương thức có thể có nhiều cách thực hiện khác nhau**.

### 🧪 Ví dụ:

```python
class Animal:
    def speak(self):
        print("Animal makes sound")

class Cat(Animal):
    def speak(self):
        print("Meo meo")

class Dog(Animal):
    def speak(self):
        print("Gâu gâu")

def animal_speak(animal):
    animal.speak()

animal_speak(Cat())  # 👉 Meo meo
animal_speak(Dog())  # 👉 Gâu gâu
```

✅ **Ý nghĩa**: Cho phép gọi cùng một phương thức nhưng kết quả khác nhau tuỳ theo đối tượng.

---

## 🕶 4. Tính trừu tượng (Abstraction)

**Trừu tượng** là khả năng **ẩn chi tiết không cần thiết và chỉ hiển thị phần quan trọng**.

### 🧪 Ví dụ với `abc` module:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius
```

```python
c = Circle(5)
print(c.area())  # 👉 78.5
```

✅ **Ý nghĩa**: Buộc lớp con phải định nghĩa chi tiết, lớp cha chỉ là "khuôn mẫu".

---

## 🧠 Tóm tắt 4 tính chất OOP

| Tính chất     | Giải thích ngắn                     | Từ khóa Python |
|---------------|-------------------------------------|----------------|
| Đóng gói      | Ẩn dữ liệu, bảo vệ thuộc tính       | `__ten_bien`   |
| Kế thừa       | Dùng lại code từ lớp cha            | `class B(A)`   |
| Đa hình       | Cùng phương thức, khác hành vi      | override method |
| Trừu tượng    | Chỉ hiển thị điều cần thiết         | `@abstractmethod` |

---

## 🧩 Hình ảnh minh họa

![OOP properties](https://cdn.botpenguin.com/assets/website/Object_Oriented_Programming_144832b0c6.png)

---

## 🧪 Bài tập thực hành

1. Viết class `Employee`, kế thừa class `Person`. Thêm phương thức `get_salary()`.
2. Viết class `Shape` trừu tượng, có `area()`. Tạo class `Rectangle`, `Circle` kế thừa từ `Shape`.
3. Viết ví dụ sử dụng đóng gói: thuộc tính `__password` chỉ được truy cập qua `get_password()`.


