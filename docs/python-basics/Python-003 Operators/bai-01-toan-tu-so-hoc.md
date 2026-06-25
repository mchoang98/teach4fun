# Bài 3-1: Toán tử số học

## Mục tiêu

- Biết các toán tử số học trong Python.
- Phân biệt `/`, `//`, `%`.
- Biết dùng `()` để đổi thứ tự tính toán.

## Các toán tử thường dùng

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
| --- | --- | --- | --- |
| `+` | Cộng | `5 + 3` | `8` |
| `-` | Trừ | `10 - 4` | `6` |
| `*` | Nhân | `6 * 7` | `42` |
| `/` | Chia thường | `10 / 3` | `3.333...` |
| `//` | Chia lấy phần nguyên | `10 // 3` | `3` |
| `%` | Chia lấy dư | `10 % 3` | `1` |
| `**` | Lũy thừa | `2 ** 3` | `8` |

## Ví dụ

```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

Kết quả:

```text
13
7
30
3.3333333333333335
3
1
1000
```

## Phân biệt `/`, `//`, `%`

Với phép chia `10` cho `3`:

- `10 / 3` cho kết quả chia thường: `3.333...`
- `10 // 3` lấy phần nguyên: `3`
- `10 % 3` lấy phần dư: `1`

Ví dụ chia kẹo:

```python
candies = 25
friends = 4

print(candies // friends)  # mỗi bạn nhận 6 cái
print(candies % friends)   # còn dư 1 cái
```

## Thứ tự ưu tiên

Python tính theo thứ tự:

1. `()`
2. `**`
3. `*`, `/`, `//`, `%`
4. `+`, `-`

```python
print(2 + 3 * 4)    # 14
print((2 + 3) * 4)  # 20
```

## Lỗi cần tránh

- Phép nhân dùng `*`, không viết `5 x 3`.
- Lũy thừa dùng `**`, không dùng `^`.
- Dùng `()` khi muốn một phép tính được thực hiện trước.

## Ghi nhớ

Toán tử số học giúp Python tính toán như máy tính cầm tay. Ba toán tử hay nhầm nhất là `/`, `//`, `%`.
