# Bài 2-2: Kiểu Dữ Liệu Trong Python

## Giới thiệu
Mọi dữ liệu trong Python đều có một kiểu cụ thể. Hiểu về kiểu dữ liệu giúp chúng ta làm việc hiệu quả và tránh lỗi khi lập trình.

## 1. Các kiểu dữ liệu cơ bản trong Python
Python có nhiều kiểu dữ liệu khác nhau, nhưng đây là một số kiểu phổ biến:

### a) Kiểu số (`int`, `float`)
Dùng để lưu trữ số nguyên và số thực.
```python
x = 10       # Số nguyên (int)
y = 3.14     # Số thực (float)
print(type(x))  # Kết quả: <class 'int'>
print(type(y))  # Kết quả: <class 'float'>
```

### b) Kiểu chuỗi (`str`)
Dùng để lưu trữ văn bản.
```python
name = "Python"
print(type(name))  # Kết quả: <class 'str'>
```
Chuỗi có thể sử dụng cả nháy đơn và nháy kép.

### c) Kiểu logic (`bool`)
Chỉ có hai giá trị: `True` hoặc `False`.
```python
is_python_fun = True
print(type(is_python_fun))  # Kết quả: <class 'bool'>
```

### d) Kiểu danh sách (`list`)
Danh sách chứa nhiều giá trị, có thể thay đổi được.
```python
numbers = [1, 2, 3, 4]
print(type(numbers))  # Kết quả: <class 'list'>
```

### e) Kiểu tuple (`tuple`)
Giống danh sách nhưng không thể thay đổi.
```python
dimensions = (1920, 1080)
print(type(dimensions))  # Kết quả: <class 'tuple'>
```

### f) Kiểu từ điển (`dict`)
Lưu trữ dữ liệu dưới dạng cặp `key: value`.
```python
person = {"name": "John", "age": 30}
print(type(person))  # Kết quả: <class 'dict'>
```

## 2. Ép kiểu dữ liệu
Chúng ta có thể chuyển đổi giữa các kiểu dữ liệu bằng cách ép kiểu.
```python
x = 10  # int
y = float(x)  # Ép sang float
z = str(x)  # Ép sang string
```

## Tổng kết
- Python có nhiều kiểu dữ liệu như số, chuỗi, danh sách, tuple, từ điển…
- Có thể kiểm tra kiểu dữ liệu bằng `type()`.
- Có thể ép kiểu để chuyển đổi giữa các kiểu dữ liệu.

Hãy thực hành để nắm vững hơn nhé!