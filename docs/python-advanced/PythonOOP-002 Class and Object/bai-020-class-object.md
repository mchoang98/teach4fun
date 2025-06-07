
# Bài 020 - Class và Object


Trong Python, **lập trình hướng đối tượng (OOP)** là phương pháp thiết kế phần mềm dựa trên các **đối tượng** và **lớp** – một cách tiếp cận hiện đại, trực quan và dễ bảo trì. Bài viết này sẽ giúp bạn hiểu:

* Class là gì?
* Object là gì?
* Constructor và phương thức trong class
* Phân biệt Class Attribute và Instance Attribute
* Các ví dụ minh họa dễ hiểu

---

##  1. Class và Object là gì?

###  **Class (Lớp)**

Là một **khuôn mẫu (blueprint)** để tạo ra các đối tượng. Class định nghĩa các thuộc tính (dữ liệu) và phương thức (hành vi) mà các đối tượng sẽ có.

###  **Object (Đối tượng)**

Là một **thực thể cụ thể** được tạo ra từ class. Mỗi object có dữ liệu riêng (instance attribute) nhưng có thể dùng chung một số thuộc tính hoặc phương thức của class.

---

##  2. Ví dụ cơ bản về Class và Object

```python
class Complex:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def print(self):
        print(f"{self.real}+{self.imag}i")

    def add(self, other):
        self.real += other.real
        self.imag += other.imag

# Tạo đối tượng
c1 = Complex(10, 20)
c2 = Complex(5, 5)

c1.print()      # 👉 10+20i
c1.add(c2)
c1.print()      # 👉 15+25i
```

* `__init__`: là **constructor**, dùng để khởi tạo giá trị ban đầu.
* `self`: đại diện cho đối tượng hiện tại.
* `c1`, `c2`: là các **instance** (đối tượng) của class `Complex`.

