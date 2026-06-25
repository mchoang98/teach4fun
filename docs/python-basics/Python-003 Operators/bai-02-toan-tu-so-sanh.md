# Bài 3-2: Toán tử so sánh

## Mục tiêu

- Biết toán tử so sánh dùng để kiểm tra quan hệ giữa hai giá trị.
- Hiểu kết quả so sánh luôn là `True` hoặc `False`.
- Phân biệt `=` và `==`.

## Các toán tử so sánh

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
| --- | --- | --- | --- |
| `==` | Bằng nhau | `5 == 5` | `True` |
| `!=` | Khác nhau | `5 != 3` | `True` |
| `>` | Lớn hơn | `8 > 3` | `True` |
| `<` | Nhỏ hơn | `2 < 7` | `True` |
| `>=` | Lớn hơn hoặc bằng | `5 >= 5` | `True` |
| `<=` | Nhỏ hơn hoặc bằng | `4 <= 6` | `True` |

## Ví dụ

```python
a = 10
b = 20
c = 10

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= c)
print(a <= c)
```

Kết quả:

```text
False
True
False
True
True
True
```

## `=` và `==`

`=` dùng để gán giá trị cho biến:

```python
age = 12
```

`==` dùng để so sánh hai giá trị:

```python
print(age == 12)  # True
```

## So sánh chuỗi

Python phân biệt chữ hoa và chữ thường.

```python
print("Python" == "Python")  # True
print("Python" == "python")  # False
print("An" != "Binh")        # True
```

## Kết hợp với toán tử số học

```python
number = 8

print(number % 2 == 0)  # True, vì 8 chia hết cho 2
print(5 + 3 == 8)       # True
print(2 ** 3 > 10)      # False
```

## Lỗi cần tránh

- Muốn so sánh bằng nhau phải dùng `==`, không dùng `=`.
- Viết đúng thứ tự: `>=`, `<=`, không viết `=>`, `=<`.
- Khi so sánh chuỗi, chú ý chữ hoa và chữ thường.

## Ghi nhớ

Toán tử so sánh trả về `True` hoặc `False`. Đây là nền tảng để học câu lệnh điều kiện `if`.
