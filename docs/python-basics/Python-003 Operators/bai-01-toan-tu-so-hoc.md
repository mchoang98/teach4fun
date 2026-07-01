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
# Bài 1. Tổng ba số

## Đề bài

Nhập vào ba số nguyên `a`, `b`, `c`.
Hãy tính tổng của ba số đó.

## Input

Gồm 3 số nguyên `a`, `b`, `c`.

## Output

In ra tổng của ba số.

## Ví dụ

### Input

```text
2 3 5
```

### Output

```text
10
```

## Hướng dẫn

* Đọc ba số từ bàn phím.
* Tính tổng: `a + b + c`.
* In kết quả ra màn hình.

---

# Bài 2. Chu vi và diện tích hình chữ nhật

## Đề bài

Nhập vào chiều dài `a` và chiều rộng `b` của hình chữ nhật.
Hãy tính chu vi và diện tích của hình chữ nhật.

## Input

Gồm 2 số nguyên dương `a`, `b`.

## Output

In ra chu vi và diện tích của hình chữ nhật.

## Ví dụ

### Input

```text
5 3
```

### Output

```text
16 15
```

## Hướng dẫn

* Chu vi hình chữ nhật được tính bằng công thức: `(a + b) × 2`.
* Diện tích hình chữ nhật được tính bằng công thức: `a × b`.
* In chu vi trước, diện tích sau.

---

# Bài 3. Đổi giây sang giờ phút giây

## Đề bài

Nhập vào một số nguyên `n` là số giây.
Hãy đổi số giây đó sang dạng giờ, phút, giây.

## Input

Gồm một số nguyên không âm `n`.

## Output

In ra 3 số lần lượt là: giờ, phút, giây.

## Ví dụ

### Input

```text
3665
```

### Output

```text
1 1 5
```

## Hướng dẫn

* 1 giờ = 3600 giây.
* Số giờ = `n // 3600`.
* Sau khi lấy số giờ, tính số giây còn lại.
* Số phút = số giây còn lại `// 60`.
* Số giây cuối cùng = số giây còn lại sau khi lấy phút.

---

# Bài 4. Tổng chữ số số ba chữ số

## Đề bài

Nhập vào một số nguyên có đúng ba chữ số.
Hãy tính tổng các chữ số của số đó.

## Input

Gồm một số nguyên `n` có đúng ba chữ số.

## Output

In ra tổng các chữ số của `n`.

## Ví dụ

### Input

```text
357
```

### Output

```text
15
```

## Hướng dẫn

Với số `n = 357`:

* Chữ số hàng trăm là `3`.
* Chữ số hàng chục là `5`.
* Chữ số hàng đơn vị là `7`.
* Tổng là `3 + 5 + 7 = 15`.

Có thể tách chữ số bằng phép chia lấy nguyên và chia lấy dư.

---

# Bài 5. Khoảng cách hai điểm

## Đề bài

Nhập vào tọa độ hai điểm `A(x1, y1)` và `B(x2, y2)` trên mặt phẳng tọa độ.
Hãy tính khoảng cách giữa hai điểm đó.

## Input

Gồm 4 số `x1`, `y1`, `x2`, `y2`.

## Output

In ra khoảng cách giữa hai điểm.

## Ví dụ

### Input

```text
0 0 3 4
```

### Output

```text
5
```

## Hướng dẫn

Khoảng cách giữa hai điểm được tính theo công thức:

```text
d = căn bậc hai của ((x2 - x1)^2 + (y2 - y1)^2)
```

Ví dụ với hai điểm `(0, 0)` và `(3, 4)`:

```text
d = căn bậc hai của (3^2 + 4^2)
d = căn bậc hai của 25
d = 5
```

---

# Bài 6. Tổng từ 1 đến N

## Đề bài

Nhập vào một số nguyên dương `n`.
Hãy tính tổng các số từ `1` đến `n`.

## Input

Gồm một số nguyên dương `n`.

## Output

In ra tổng các số từ `1` đến `n`.

## Ví dụ

### Input

```text
5
```

### Output

```text
15
```

## Hướng dẫn

Cần tính:

```text
1 + 2 + 3 + ... + n
```

Ví dụ với `n = 5`:

```text
1 + 2 + 3 + 4 + 5 = 15
```

Có thể tính bằng cách cộng lần lượt các số từ `1` đến `n`.
