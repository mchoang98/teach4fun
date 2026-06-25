# Bài 3-4: Toán tử gán

## Mục tiêu

- Biết dùng `=` để gán giá trị cho biến.
- Biết các toán tử gán mở rộng như `+=`, `-=`, `*=`.
- Biết gán nhiều biến và đổi chỗ giá trị.

## Gán cơ bản

```python
name = "An"
age = 12
score = 9.5
```

Dấu `=` nghĩa là lưu giá trị bên phải vào biến bên trái.

## Toán tử gán mở rộng

| Toán tử | Ví dụ | Tương đương |
| --- | --- | --- |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `//=` | `x //= 2` | `x = x // 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |

## Ví dụ

```python
x = 10

x += 5   # 15
x *= 2   # 30
x -= 10  # 20
x //= 3  # 6

print(x)
```

Kết quả:

```text
6
```

## Gán nhiều biến

```python
a, b, c = 1, 2, 3
print(a, b, c)
```

## Đổi chỗ giá trị

```python
a = 5
b = 10

a, b = b, a

print(a)  # 10
print(b)  # 5
```

## Lỗi cần tránh

- `=` là gán, `==` là so sánh.
- Biến phải nằm bên trái khi gán: viết `x = 5`, không viết `5 = x`.
- Toán tử gán mở rộng chỉ dùng khi biến đã có giá trị trước đó.

## Ghi nhớ

Toán tử gán giúp cập nhật giá trị biến ngắn gọn hơn.
