# Bài 03: BT Toán tử trong Python

## Mục tiêu luyện tập

* Biết sử dụng toán tử số học: `+`, `-`, `*`, `/`, `//`, `%`, `**`.
* Biết sử dụng toán tử so sánh: `==`, `!=`, `>`, `<`, `>=`, `<=`.
* Biết kết hợp điều kiện bằng `and`, `or`, `not`.
* Biết cập nhật giá trị biến bằng toán tử gán mở rộng: `+=`, `-=`, `*=`, `//=`, `%=`, `**=`.
* Làm quen với một số toán tử bitwise cơ bản: `&`, `|`, `^`, `<<`, `>>`.

---

# I. Bài tập cơ bản

## Bài 1: Tính tổng, hiệu, tích

Viết chương trình nhập vào hai số nguyên `a` và `b`.

Hãy in ra tổng, hiệu và tích của hai số đó.

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Số nguyên `a` |
| Dòng 2 | Số nguyên `b` |

### Output

In ra 3 dòng:

* Tổng của `a` và `b`
* Hiệu của `a` và `b`
* Tích của `a` và `b`

### Ví dụ

| Input | Output |
| --- | --- |
| `8`<br />`3` | `11`<br />`5`<br />`24` |

### Gợi ý

Dùng `int()` để ép kiểu dữ liệu nhập vào.

```python
a = int(input())
b = int(input())
```

---

## Bài 2: Chia bánh

Có `n` cái bánh chia đều vào `m` hộp.

Hãy in ra:

* Mỗi hộp có bao nhiêu cái bánh.
* Còn dư bao nhiêu cái bánh.

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Số cái bánh `n` |
| Dòng 2 | Số hộp `m` |

### Output

In ra 2 dòng: số bánh mỗi hộp và số bánh còn dư.

### Ví dụ

| Input | Output |
| --- | --- |
| `37`<br />`5` | `7`<br />`2` |

### Gợi ý

Dùng `//` để chia lấy phần nguyên và `%` để chia lấy dư.

---

## Bài 3: Diện tích hình vuông

Viết chương trình nhập vào độ dài cạnh `a` của hình vuông.

Hãy in ra diện tích hình vuông.

### Input

Gồm 1 dòng chứa số nguyên `a`.

### Output

In ra diện tích hình vuông.

### Ví dụ

| Input | Output |
| --- | --- |
| `6` | `36` |

### Gợi ý

Diện tích hình vuông:

```text
S = a * a
```

---

## Bài 4: So sánh tuổi

Viết chương trình nhập vào tuổi của Nam và Hoa.

Hãy kiểm tra:

* Nam có bằng tuổi Hoa không?
* Hoa có lớn tuổi hơn Nam không?
* Nam có nhỏ hơn hoặc bằng 12 tuổi không?

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Tuổi của Nam |
| Dòng 2 | Tuổi của Hoa |

### Output

In ra 3 dòng, mỗi dòng là `True` hoặc `False`.

### Ví dụ

| Input | Output |
| --- | --- |
| `12`<br />`13` | `False`<br />`True`<br />`True` |

### Gợi ý

Dùng các toán tử `==`, `>`, `<=`.

---

## Bài 5: Kiểm tra số chẵn

Viết chương trình nhập vào một số nguyên `n`.

Hãy kiểm tra `n` có phải là số chẵn không.

### Input

Gồm 1 dòng chứa số nguyên `n`.

### Output

In ra `True` nếu `n` là số chẵn, ngược lại in ra `False`.

### Ví dụ

| Input | Output |
| --- | --- |
| `18` | `True` |

### Gợi ý

Số chẵn là số chia hết cho `2`.

```python
n % 2 == 0
```

---

# II. Bài tập nâng cao

## Bài 6: Điều kiện nhận thưởng

Viết chương trình nhập vào tuổi và điểm của một học sinh.

Học sinh được nhận thưởng nếu tuổi lớn hơn hoặc bằng `13` và điểm lớn hơn hoặc bằng `8`.

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Tuổi |
| Dòng 2 | Điểm |

### Output

In ra `True` nếu học sinh được nhận thưởng, ngược lại in ra `False`.

### Ví dụ

| Input | Output |
| --- | --- |
| `14`<br />`8` | `True` |

### Gợi ý

Dùng toán tử `and`.

---

## Bài 7: Kiểm tra đăng nhập

Viết chương trình nhập vào tên đăng nhập và mật khẩu.

Tài khoản hợp lệ khi:

* Tên đăng nhập là `admin`
* Mật khẩu là `123456`

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Tên đăng nhập |
| Dòng 2 | Mật khẩu |

### Output

In ra `True` nếu đăng nhập hợp lệ, ngược lại in ra `False`.

### Ví dụ

| Input | Output |
| --- | --- |
| `admin`<br />`123456` | `True` |

### Gợi ý

Dùng `==` để so sánh chuỗi và `and` để kết hợp điều kiện.

---

## Bài 8: Cập nhật điểm số

Viết chương trình nhập vào điểm ban đầu `score`.

Sau đó thực hiện lần lượt:

* Cộng thêm `2` điểm.
* Nhân điểm với `3`.
* Trừ đi `4` điểm.

In ra điểm cuối cùng.

### Input

Gồm 1 dòng chứa số nguyên `score`.

### Output

In ra điểm cuối cùng.

### Ví dụ

| Input | Output |
| --- | --- |
| `5` | `17` |

### Gợi ý

Dùng toán tử gán mở rộng:

```python
score += 2
score *= 3
score -= 4
```

---

## Bài 9: Đổi chỗ hai số

Viết chương trình nhập vào hai số nguyên `a` và `b`.

Hãy đổi chỗ giá trị của hai biến rồi in ra `a` và `b`.

### Input

Gồm 2 dòng:

| Dòng | Ý nghĩa |
| --- | --- |
| Dòng 1 | Số nguyên `a` |
| Dòng 2 | Số nguyên `b` |

### Output

In ra 2 dòng: giá trị mới của `a` và giá trị mới của `b`.

### Ví dụ

| Input | Output |
| --- | --- |
| `5`<br />`10` | `10`<br />`5` |

### Gợi ý

Python cho phép đổi chỗ nhanh:

```python
a, b = b, a
```

---

## Bài 10: Dịch bit

Viết chương trình nhập vào một số nguyên `x`.

Hãy in ra:

* Kết quả của `x << 1`
* Kết quả của `x >> 1`

### Input

Gồm 1 dòng chứa số nguyên `x`.

### Output

In ra 2 dòng theo yêu cầu.

### Ví dụ

| Input | Output |
| --- | --- |
| `8` | `16`<br />`4` |

### Gợi ý

`x << 1` thường tương đương `x * 2`.

`x >> 1` thường tương đương `x // 2`.

---

# Ghi nhớ

* `/` là chia thường, `//` là chia lấy nguyên, `%` là chia lấy dư.
* Toán tử so sánh luôn trả về `True` hoặc `False`.
* Dùng `and`, `or`, `not` để kết hợp nhiều điều kiện.
* Toán tử gán mở rộng giúp cập nhật biến ngắn gọn.
* `^` là XOR trong bitwise, không phải lũy thừa. Lũy thừa dùng `**`.
