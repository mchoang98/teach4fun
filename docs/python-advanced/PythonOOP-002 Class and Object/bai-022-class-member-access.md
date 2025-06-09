
# Bài 022 – Quy tắc truy cập thành viên trong lớp (Encapsulation trong Python)

**Encapsulation** (đóng gói) là một nguyên lý quan trọng trong lập trình hướng đối tượng (OOP), nhằm **ẩn giấu thông tin bên trong lớp**, chỉ cho phép truy cập những gì cần thiết. Điều này giúp bảo vệ trạng thái nội bộ của đối tượng và tránh các thay đổi không mong muốn từ bên ngoài.

## 1. Thành viên công khai (Public Members)

Trong Python, tất cả các thuộc tính (biến) và phương thức (hàm) trong một lớp mặc định là **công khai**, nghĩa là có thể truy cập từ mọi nơi.

**Ví dụ:**

```python
class Test:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def fun(self):
        print("Hi")

t = Test(10, 20)
print(t.x)
print(t.y)
t.fun()
```

**Kết quả:**

```
10
20
Hi
```

`x`, `y` và `fun` là thành viên công khai nên có thể truy cập trực tiếp thông qua đối tượng `t`.

## 2. Thành viên được bảo vệ (Protected Members)

Nếu tên biến hoặc phương thức được đặt dấu gạch dưới đơn (`_`) ở đầu, nó được coi là **bảo vệ**. Theo quy ước, những thành viên này chỉ nên được sử dụng bên trong lớp hoặc các lớp kế thừa.

**Ví dụ:**

```python
class Test:
    def __init__(self, x, y):
        self._x = x
        self.y = y

    def _fun(self):
        print("Hi")

t = Test(10, 20)
print(t._x)
print(t.y)
t._fun()
```

**Kết quả:**

```
10
20
Hi
```

Python **không ngăn chặn** việc truy cập thành viên `_x` và `_fun` từ bên ngoài, nhưng quy ước khuyên rằng bạn **không nên làm như vậy**, trừ khi thật sự cần thiết.

## 3. Thành viên riêng tư (Private Members)

Khi đặt **hai dấu gạch dưới (`__`) ở đầu tên**, Python sẽ coi đó là thành viên riêng tư. Những thành viên này không thể truy cập trực tiếp từ bên ngoài lớp, nhờ cơ chế **name mangling** (biến đổi tên).

**Ví dụ:**

```python
class Test:
    def __init__(self, x, y):
        self.__x = x
        self.y = y

    def __fun(self):
        print("Hi")

t = Test(10, 20)
print(t.__x)     # Lỗi
print(t.y)
t.__fun()        # Lỗi
```

Kết quả sẽ gây lỗi khi truy cập `__x` và `__fun` từ bên ngoài.

Tuy nhiên, Python vẫn **cho phép truy cập gián tiếp** thông qua cú pháp đặc biệt:

```python
print(t._Test__x)    # Truy cập được
t._Test__fun()       # Truy cập được
```

## 4. Truy cập thành viên riêng tư bên trong lớp

Các thành viên `__private` có thể được truy cập **bên trong chính lớp đó**, không gặp vấn đề gì.

**Ví dụ:**

```python
class Test:
    def __init__(self, x):
        self.x = x
        self.__y = 10

    def printTest(self):
        print(self.x)
        print(self.__y)

t = Test(5)
t.printTest()
```

**Kết quả:**

```
5
10
```

## 5. Trường hợp đặc biệt: Tên có dấu gạch dưới kép ở đầu và cuối

Tên phương thức hoặc thuộc tính có **hai dấu gạch dưới ở cả đầu và cuối** như `__init__`, `__str__`, `__add__` được gọi là **phương thức đặc biệt** (special methods hoặc dunder methods).

Chúng **không bị biến đổi tên**, và được Python định nghĩa sẵn để thực hiện các chức năng đặc biệt.

**Ví dụ:**

```python
class Test:
    def __init__(self, x):
        self.__x = x
        self.__y__ = 20

    def __fun__(self):
        print("Hi")

t = Test(10)
print(t.__x)        # Lỗi
print(t.__y__)      # Truy cập được
t.__fun__()         # Truy cập được
```

Ở đây:

* `__x` là thành viên riêng tư → không truy cập được trực tiếp.
* `__y__` và `__fun__` là thành viên đặc biệt → vẫn truy cập bình thường.

---

## Tóm tắt các mức độ truy cập

| Cách đặt tên | Mức truy cập              | Truy cập từ bên ngoài | Có bị đổi tên (mangling)? |
| ------------ | ------------------------- | --------------------- | ------------------------- |
| `x`          | Public (công khai)        | Có                    | Không                     |
| `_x`         | Protected (bảo vệ)        | Có (nên hạn chế)      | Không                     |
| `__x`        | Private (riêng tư)        | Không trực tiếp       | Có                        |
| `__x__`      | Special method (đặc biệt) | Có                    | Không                     |

---

## Kết luận

Encapsulation giúp bạn kiểm soát tốt hơn quyền truy cập đến các thành phần bên trong lớp, từ đó đảm bảo tính an toàn và rõ ràng trong thiết kế phần mềm. Python không ép buộc quá chặt, nhưng tuân theo quy ước truy cập vẫn là điều nên làm để mã nguồn dễ đọc và dễ bảo trì.

