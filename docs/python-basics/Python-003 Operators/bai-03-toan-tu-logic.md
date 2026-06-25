# Bài 3-3: Toán tử logic

## Mục tiêu

- Biết dùng `and`, `or`, `not`.
- Kết hợp nhiều điều kiện trong một biểu thức.
- Đọc được kết quả `True` hoặc `False`.

## Các toán tử logic

| Toán tử | Ý nghĩa | Khi nào là `True` |
| --- | --- | --- |
| `and` | Và | Tất cả điều kiện đều đúng |
| `or` | Hoặc | Ít nhất một điều kiện đúng |
| `not` | Phủ định | Đảo ngược kết quả |

## Ví dụ

```python
age = 13
score = 8

print(age >= 12 and score >= 8)  # True
print(age >= 15 or score >= 8)   # True
print(not age >= 15)             # True
```

## Bảng nhớ nhanh

| Biểu thức | Kết quả |
| --- | --- |
| `True and True` | `True` |
| `True and False` | `False` |
| `True or False` | `True` |
| `False or False` | `False` |
| `not True` | `False` |
| `not False` | `True` |

## Kết hợp điều kiện

```python
username = "admin"
password = "123456"

print(username == "admin" and password == "123456")
```

Kết quả:

```text
True
```

## Lỗi cần tránh

- Viết `and`, `or`, `not` bằng chữ thường.
- Nên dùng `()` khi biểu thức dài để dễ đọc.
- Không nhầm `and` với `or`: `and` chặt hơn, `or` chỉ cần một điều kiện đúng.

## Ghi nhớ

Toán tử logic giúp ghép nhiều phép so sánh lại với nhau.
