# Bài 3-5: Toán tử bitwise

## Mục tiêu

- Biết bitwise là phép toán trên từng bit nhị phân.
- Nhận biết các toán tử `&`, `|`, `^`, `~`, `<<`, `>>`.
- Hiểu một vài ứng dụng cơ bản.

## Bitwise là gì?

Máy tính lưu số nguyên dưới dạng nhị phân gồm các bit `0` và `1`.

Ví dụ:

```python
a = 5  # 0101
b = 3  # 0011
```

Toán tử bitwise thao tác trực tiếp trên các bit này.

## Các toán tử chính

| Toán tử | Tên | Ví dụ với `a = 5`, `b = 3` | Kết quả |
| --- | --- | --- | --- |
| `&` | AND | `a & b` | `1` |
| `|` | OR | `a | b` | `7` |
| `^` | XOR | `a ^ b` | `6` |
| `~` | NOT | `~a` | `-6` |
| `<<` | Dịch trái | `a << 1` | `10` |
| `>>` | Dịch phải | `a >> 1` | `2` |

## Ví dụ

```python
a = 5
b = 3

print(a & b)   # 1
print(a | b)   # 7
print(a ^ b)   # 6
print(~a)      # -6
print(a << 1)  # 10
print(a >> 1)  # 2
```

## Dịch bit

- `x << 1` thường tương đương `x * 2`.
- `x >> 1` thường tương đương `x // 2`.

```python
print(6 << 1)  # 12
print(6 >> 1)  # 3
```

## Kiểm tra một bit

```python
number = 5  # 0101
n = 2

print(number & (1 << n) != 0)  # True
```

## Lỗi cần tránh

- `^` trong Python là XOR, không phải lũy thừa.
- Bitwise thường dùng với số nguyên.
- Với người mới học, chỉ cần nắm ý nghĩa cơ bản trước.

## Ghi nhớ

Bitwise ít dùng hơn toán tử số học và so sánh, nhưng rất hữu ích khi làm việc với nhị phân, cờ trạng thái hoặc tối ưu xử lý số.
