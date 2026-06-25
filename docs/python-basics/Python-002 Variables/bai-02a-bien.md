# Bài 02: BT Biến, Kiểu Dữ Liệu và Ép Kiểu

## Mục tiêu luyện tập

* Biết tạo biến và gán giá trị cho biến.
* Biết sử dụng các kiểu dữ liệu cơ bản: `int`, `float`, `str`, `bool`.
* Biết nhập dữ liệu bằng `input()`.
* Biết ép kiểu dữ liệu bằng `int()`, `float()`, `str()`.
* Biết in kết quả đúng theo yêu cầu.

---

# I. Bài tập cơ bản

## Bài 1: Thông tin học sinh

Viết chương trình nhập vào thông tin của một học sinh gồm:

* Họ tên
* Tuổi
* Lớp

Sau đó in ra thông tin học sinh theo mẫu.

### Input

Gồm 3 dòng:

| Dòng   | Ý nghĩa         |
| ------ | --------------- |
| Dòng 1 | Họ tên học sinh |
| Dòng 2 | Tuổi            |
| Dòng 3 | Lớp             |

### Output

In ra thông tin học sinh theo mẫu.

### Ví dụ

| Input                       | Output                                         |
| --------------------------- | ---------------------------------------------- |
| `Nguyễn An`<br />`12`<br />`7A` | `Họ tên: Nguyễn An`<br />`Tuổi: 12`<br />`Lớp: 7A` |

### Gợi ý

Tuổi nhập vào có thể để dạng chuỗi nếu chỉ dùng để in ra.

---

## Bài 2: Cộng hai số nguyên

Viết chương trình nhập vào hai số nguyên `a` và `b`.

Hãy tính và in ra tổng của hai số đó.

### Input

Gồm 2 dòng:

| Dòng   | Ý nghĩa       |
| ------ | ------------- |
| Dòng 1 | Số nguyên `a` |
| Dòng 2 | Số nguyên `b` |

### Output

In ra tổng của `a` và `b`.

### Ví dụ

| Input      | Output |
| ---------- | ------ |
| `5`<br />`7` | `12`   |

### Gợi ý

Dữ liệu nhập từ `input()` luôn là chuỗi, cần dùng `int()` để ép kiểu.

```python
a = int(input())
b = int(input())
```

---

## Bài 3: Tính diện tích hình tròn

Viết chương trình nhập vào bán kính `r` của hình tròn.

Hãy tính diện tích hình tròn theo công thức:

```text
S = 3.14 * r * r
```

### Input

Gồm 1 dòng:

| Dòng   | Ý nghĩa      |
| ------ | ------------ |
| Dòng 1 | Bán kính `r` |

### Output

In ra diện tích hình tròn.

### Ví dụ

| Input | Output  |
| ----- | ------- |
| `2`   | `12.56` |

### Gợi ý

Bán kính có thể là số thập phân, nên dùng `float()`.

```python
r = float(input())
```

---

# II. Bài tập nâng cao

## Bài 4: Tuổi và năm sinh

Viết chương trình nhập vào:

* Tên của một người
* Năm sinh

Biết năm hiện tại là `2026`.

Hãy in ra câu thông báo tuổi của người đó theo mẫu.

### Input

Gồm 2 dòng:

| Dòng   | Ý nghĩa  |
| ------ | -------- |
| Dòng 1 | Tên      |
| Dòng 2 | Năm sinh |

### Output

In ra câu thông báo tuổi.

### Ví dụ

| Input            | Output                       |
| ---------------- | ---------------------------- |
| `Minh`<br />`2014` | `Bạn Minh hiện tại 12 tuổi.` |

### Gợi ý

Công thức tính tuổi:

```python
age = 2026 - birth_year
```

Cần ép kiểu năm sinh sang `int`.

---

## Bài 5: Tổng và trung bình ba môn

Viết chương trình nhập vào điểm của 3 môn:

* Toán
* Văn
* Anh

Hãy in ra:

* Tổng điểm
* Điểm trung bình
* Kiểu dữ liệu của biến điểm trung bình

### Input

Gồm 3 dòng:

| Dòng   | Ý nghĩa   |
| ------ | --------- |
| Dòng 1 | Điểm Toán |
| Dòng 2 | Điểm Văn  |
| Dòng 3 | Điểm Anh  |

### Output

In ra tổng điểm, điểm trung bình và kiểu dữ liệu của điểm trung bình.

### Ví dụ

| Input             | Output                                                                         |
| ----------------- | ------------------------------------------------------------------------------ |
| `8`<br />`7`<br />`9` | `Tổng điểm: 24.0`<br />`Điểm trung bình: 8.0`<br />`Kiểu dữ liệu: <class 'float'>` |

### Gợi ý

Dùng `float()` để ép kiểu điểm số.

```python
math = float(input())
literature = float(input())
english = float(input())
```

Dùng `type()` để kiểm tra kiểu dữ liệu.

```python
print(type(average))
```

---

# Ghi nhớ

* `input()` luôn trả về dữ liệu kiểu chuỗi `str`.
* Muốn tính toán với số nguyên, dùng `int()`.
* Muốn tính toán với số thập phân, dùng `float()`.
* Muốn kiểm tra kiểu dữ liệu, dùng `type()`.
* Nên đặt tên biến rõ nghĩa như `name`, `age`, `score`, `average`.
