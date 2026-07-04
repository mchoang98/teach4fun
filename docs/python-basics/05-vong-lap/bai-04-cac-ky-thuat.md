# Bài 5-4: Các kỹ thuật Lặp (looping) trong Python

## Khung học vui

**Bối cảnh:** Bạn được giao tự động hóa việc lặp lại trong lớp: điểm danh, in bảng cửu chương, đếm lượt thử game, và tìm dữ liệu trong danh sách.

**Thử ngay trong 5 phút:** Dùng `for` in 5 lời nhắc học tập khác nhau, sau đó dùng `while` cho trò đoán mật mã 3 lần.

**Hoạt động cặp đôi:** Một bạn đóng vai người dùng nhập dữ liệu, một bạn viết vòng lặp xử lý. Đổi vai khi chương trình chạy đúng.

**Nâng cấp sau giờ học:** Tạo game đoán số có giới hạn lượt, báo cao/thấp, và in tổng số lượt đã dùng.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## 1. Giới Thiệu về Vòng Lặp
Vòng lặp (loop) là một kỹ thuật quan trọng trong lập trình, giúp chúng ta thực hiện lặp lại một đoạn mã nhiều lần mà không cần viết lại cùng một đoạn code. Python cung cấp các vòng lặp phổ biến như `for` và `while`, cùng nhiều kỹ thuật lặp nâng cao.

## 2. Vòng Lặp `for`
Vòng lặp `for` được sử dụng khi chúng ta cần lặp qua các phần tử trong một tập hợp dữ liệu như danh sách, tuple, dictionary, string,...

### Cú pháp:
```python
for variable in iterable:
    # Khối lệnh được thực thi trong mỗi lần lặp
```

### Ví dụ:
```python
numbers = [1, 2, 3, 4]
for num in numbers:
    print(num)
```
**Lặp qua chuỗi:**
```python
text = "Python"
for char in text:
    print(char)
```

### Lặp với `range()`
`range()` được sử dụng để tạo dãy số trong vòng lặp `for`.
```python
for i in range(5):  # Lặp từ 0 đến 4
    print(i)
```

## 3. Vòng Lặp `while`
Vòng lặp `while` được sử dụng khi chúng ta muốn lặp lại một khối lệnh dựa vào một điều kiện.

### Cú pháp:
```python
while condition:
    # Khối lệnh được thực thi nếu condition là True
```

### Ví dụ:
```python
i = 0
while i < 5:
    print(i)
    i += 1
```

## 4. Lặp Qua Dictionary
Dictionary lưu trữ dữ liệu dưới dạng cặp `key-value`. Chúng ta có thể duyệt qua nó bằng cách sử dụng `.items()`, `.keys()`, hoặc `.values()`.

### Ví dụ:
```python
data = {"name": "Alice", "age": 25}
for key, value in data.items():
    print(key, value)
```

## 5. Lặp Với `enumerate()`
`enumerate()` giúp chúng ta lặp qua danh sách nhưng vẫn giữ được chỉ mục.

### Ví dụ:
```python
fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)
```

## 6. Lặp Qua Nhiều Danh Sách với `zip()`
`zip()` giúp lặp qua nhiều danh sách cùng lúc.

### Ví dụ:
```python
names = ['Alice', 'Bob']
ages = [25, 30]
for name, age in zip(names, ages):
    print(name, age)
```

## 7. Duyệt Danh Sách Nhanh với List Comprehension
List comprehension giúp viết vòng lặp nhanh gọn hơn.

### Ví dụ:
```python
numbers = [1, 2, 3, 4]
squares = [x**2 for x in numbers]
print(squares)
```

## 8. Generator và `yield`
Generator giúp tạo một luồng dữ liệu liên tục mà không cần lưu trữ toàn bộ dữ liệu trong bộ nhớ.

### Ví dụ:
```python
def count():
    i = 0
    while True:
        yield i
        i += 1

gen = count()
print(next(gen))  # 0
print(next(gen))  # 1
```

## 9. Lặp Với `map()`
`map()` giúp áp dụng một hàm lên từng phần tử của danh sách.

### Ví dụ:
```python
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x**2, numbers))
print(squares)
```

## 10. Lặp Với `filter()`
`filter()` giúp lọc các phần tử thỏa mãn điều kiện.

### Ví dụ:
```python
numbers = [1, 2, 3, 4]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)
```

## 11. Lặp Với `itertools`
Thư viện `itertools` hỗ trợ các kỹ thuật lặp nâng cao.

### Ví dụ: Lặp vô hạn với `cycle()`
```python
from itertools import cycle

colors = ['red', 'green', 'blue']
for color in cycle(colors):
    print(color)
```

## 12. Tổng Kết
| Kỹ thuật lặp  | Mô tả |
|--------------|----------------------|
| `for` | Duyệt qua danh sách, chuỗi, dictionary, tập hợp |
| `while` | Lặp dựa vào điều kiện |
| `enumerate()` | Lặp với chỉ mục |
| `zip()` | Lặp qua nhiều danh sách cùng lúc |
| List Comprehension | Tạo danh sách nhanh gọn |
| `map()` | Áp dụng hàm lên danh sách |
| `filter()` | Lọc danh sách theo điều kiện |
| Generator (`yield`) | Sinh dữ liệu lười biếng (lazy evaluation) |
| `itertools` | Cung cấp công cụ lặp nâng cao |

👉 **Bạn nên chọn kỹ thuật lặp phù hợp với bài toán cụ thể để tối ưu hiệu suất và đọc hiểu code dễ dàng hơn!**
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
