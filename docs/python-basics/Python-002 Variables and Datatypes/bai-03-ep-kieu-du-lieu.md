# Bài 2-3: Ép Kiểu Dữ Liệu Trong Python

## Giới thiệu
Ép kiểu dữ liệu là quá trình chuyển đổi dữ liệu từ kiểu này sang kiểu khác. Điều này rất quan trọng khi làm việc với các loại dữ liệu khác nhau trong Python.

## 1. Ép kiểu số
Python hỗ trợ chuyển đổi giữa các kiểu số: `int`, `float` và `complex`.
```python
x = 10  # int
y = float(x)  # Chuyển sang float
z = complex(x)  # Chuyển sang số phức
print(y)  # Kết quả: 10.0
print(z)  # Kết quả: (10+0j)
```

## 2. Ép kiểu chuỗi
Chuyển đổi dữ liệu thành chuỗi (`str`).
```python
num = 123
text = str(num)
print(text)  # Kết quả: "123"
print(type(text))  # Kết quả: <class 'str'>
```

## 3. Ép kiểu danh sách và tập hợp
Có thể chuyển đổi giữa `list`, `tuple`, `set`.
```python
data = (1, 2, 3)  # Tuple
list_data = list(data)  # Chuyển thành list
set_data = set(data)  # Chuyển thành set
print(list_data)  # Kết quả: [1, 2, 3]
print(set_data)  # Kết quả: {1, 2, 3}
```

## 4. Ép kiểu từ điển
Có thể chuyển danh sách cặp giá trị thành từ điển (`dict`).
```python
pairs = [("name", "John"), ("age", 30)]
dict_data = dict(pairs)
print(dict_data)  # Kết quả: {'name': 'John', 'age': 30}
```

## 5. Lưu ý khi ép kiểu
Không phải lúc nào cũng có thể ép kiểu thành công.
```python
text = "abc"
num = int(text)  # Lỗi: Không thể chuyển "abc" thành số nguyên
```

## Tổng kết
- Python hỗ trợ ép kiểu giữa các loại dữ liệu phổ biến.
- Cần cẩn thận khi ép kiểu để tránh lỗi.
- Thực hành nhiều để sử dụng thành thạo!

