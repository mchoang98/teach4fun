# Bài 2-1: Biến là gì?

## Giới thiệu
Trong lập trình, "biến" là một khái niệm cực kỳ quan trọng. Nó giống như một chiếc hộp để lưu trữ dữ liệu, giúp chúng ta có thể sử dụng và thay đổi dữ liệu một cách linh hoạt trong chương trình.

## 1. Biến là gì?
Biến là một tên gọi đại diện cho một giá trị trong bộ nhớ máy tính. Khi khai báo một biến, chúng ta có thể gán cho nó một giá trị và sử dụng lại giá trị đó sau này.

Ví dụ về khai báo biến trong Python:
```python
name = "Minh"
age = 25
height = 1.75
```
Ở đây:
- `name` là một biến lưu trữ chuỗi "Minh".
- `age` là một biến lưu trữ số nguyên 25.
- `height` là một biến lưu trữ số thực 1.75.

## 2. Quy tắc đặt tên biến
Python có một số quy tắc khi đặt tên biến:
- Tên biến chỉ được chứa chữ cái, số và dấu gạch dưới (`_`).
- Không được bắt đầu bằng số.
- Không được trùng với các từ khóa của Python (ví dụ: `if`, `while`, `def`, `class`…).
- Phân biệt chữ hoa và chữ thường (`age` và `Age` là hai biến khác nhau).

Ví dụ hợp lệ:
```python
my_name = "Linh"
number1 = 100
_height = 1.80
```
Ví dụ không hợp lệ:
```python
1st_number = 10  # Lỗi: bắt đầu bằng số
class = "Python"  # Lỗi: trùng với từ khóa
my-name = "Linh"  # Lỗi: chứa ký tự gạch ngang
```

## 3. Gán giá trị cho biến
Trong Python, bạn có thể gán giá trị cho biến bằng dấu `=`.
```python
x = 10
y = x + 5
print(y)  # Kết quả: 15
```
Bạn cũng có thể gán nhiều biến cùng lúc:
```python
a, b, c = 1, 2, 3
print(a, b, c)  # Kết quả: 1 2 3
```
Hoặc gán một giá trị cho nhiều biến:
```python
x = y = z = 100
print(x, y, z)  # Kết quả: 100 100 100
```

## 4. Thay đổi giá trị của biến
Bạn có thể thay đổi giá trị của một biến bất cứ lúc nào.
```python
age = 20
print(age)  # Kết quả: 20
age = 21
print(age)  # Kết quả: 21
```

## Tổng kết
- Biến là một tên đại diện cho một giá trị.
- Biến có thể lưu trữ nhiều loại dữ liệu khác nhau.
- Có các quy tắc đặt tên biến trong Python.
- Biến có thể thay đổi giá trị trong quá trình chạy chương trình.

Hãy thực hành khai báo và sử dụng biến để hiểu rõ hơn nhé!

