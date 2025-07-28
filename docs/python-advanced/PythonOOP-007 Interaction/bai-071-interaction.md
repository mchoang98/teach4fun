# Tương Tác Giữa Các Đối Tượng Trong Python

## 1. Khái niệm

**Object Interaction** là quá trình một đối tượng sử dụng phương thức hoặc thuộc tính của một đối tượng khác để phối hợp thực hiện chức năng.

> Đây là cách các thành phần trong hệ thống OOP giao tiếp với nhau để hoàn thành logic nghiệp vụ.

---

## 2. Các hình thức tương tác

### a. **Gọi phương thức** (Method Invocation)

```python
car.start()
```

### b. **Truy cập thuộc tính** (Attribute Access)

```python
print(car.engine.status)
```

### c. **Composition** – Một đối tượng chứa đối tượng khác

```python
class Car:
    def __init__(self):
        self.engine = Engine()
```

### d. **Delegation** – Uỷ quyền hành vi

```python
def start(self):
    self.engine.start()
```

---

## 3. Sơ đồ: Tương tác giữa `Student` và `Teacher`

```text
+-----------+             +-----------+
|  Student  |             |  Teacher  |
+-----------+             +-----------+
| - name    |             |           |
+-----------+             +-----------+
| +ask()    | --------->> | +answer() |
+-----------+             +-----------+
```

### Code tương ứng:

```python
class Teacher:
    def answer(self, question):
        return f"Answering: {question}"

class Student:
    def ask(self, teacher, question):
        return teacher.answer(question)
```

---

## 4. Sơ đồ Composition: `Car` chứa `Engine`

```text
+-------+      has-a      +--------+
|  Car  | --------------> | Engine |
+-------+                 +--------+
| engine|                 |        |
+-------+                 +--------+
```

### Code tương ứng:

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        self.engine.start()
```

---

## 5. So sánh với kế thừa

| Kế thừa (is-a)              | Tương tác (has-a / uses-a)                        |
| --------------------------- | ------------------------------------------------- |
| Class con mở rộng class cha | Object này dùng object khác qua method/thuộc tính |
| Ràng buộc chặt              | Tách biệt, linh hoạt                              |
| Khó thay đổi cấu trúc       | Dễ bảo trì, mở rộng                               |

---

## 6. Nguyên tắc thiết kế liên quan

* **Law of Demeter**: object chỉ nên nói chuyện với các object “gần” (được sở hữu, được truyền vào).
* **Tell, Don’t Ask**: giao việc cho object, đừng chỉ lấy dữ liệu rồi xử lý ngoài.
* **Single Responsibility Principle**: mỗi class chỉ nên có một lý do để thay đổi.

---

## 7. Kết luận

* Object interaction là trung tâm trong lập trình hướng đối tượng.
* Dùng composition và delegation giúp hệ thống rõ ràng, dễ mở rộng.
* Việc hiểu và áp dụng đúng interaction giúp thiết kế phần mềm linh hoạt, tách biệt tốt và tuân theo nguyên lý SOLID.


