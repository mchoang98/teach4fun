# Bài 02: Biến, Kiểu Dữ Liệu và Ép Kiểu trong Python

## Khung học vui

**Bối cảnh:** Bạn đang làm màn hình hồ sơ cho một game học tập. Nhân vật cần có tên, tuổi, điểm năng lượng, số xu và trạng thái đã đăng nhập hay chưa.

**Thử ngay trong 5 phút:** Tạo 5 biến mô tả nhân vật của bạn rồi dùng `print()` để in thành một thẻ hồ sơ dễ đọc.

**Hoạt động cặp đôi:** Bạn A đọc thông tin nhân vật, bạn B chọn kiểu dữ liệu phù hợp. Sau đó cùng kiểm tra bằng `type()`.

**Nâng cấp sau giờ học:** Viết chương trình nhập tên, tuổi, điểm Toán và điểm Tin, rồi in hồ sơ kèm điểm trung bình.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## Mục tiêu bài học

Sau bài học này, học sinh có thể:

* Hiểu biến là gì và vì sao cần dùng biến.
* Biết cách tạo biến và gán giá trị cho biến trong Python.
* Biết quy tắc đặt tên biến đúng.
* Nhận biết một số kiểu dữ liệu cơ bản như `int`, `float`, `str`, `bool`.
* Biết cách chuyển đổi kiểu dữ liệu bằng `int()`, `float()`, `str()`, `bool()`.
* Biết xử lý dữ liệu nhập từ bàn phím bằng `input()`.

---

# 1. Biến trong Python

## 1.1. Biến là gì?

Trong lập trình, **biến** giống như một chiếc hộp có tên.

Ta có thể bỏ dữ liệu vào chiếc hộp đó, sau đó gọi lại tên hộp để sử dụng dữ liệu bên trong.

Ví dụ:

```python
name = "An"
age = 12
```

Trong ví dụ trên:

* `name` là biến lưu tên `"An"`.
* `age` là biến lưu tuổi `12`.

Có thể hiểu đơn giản:

```text
name  --->  "An"
age   --->  12
```

**Hình minh họa biến:**

<img src="https://www.datamentor.io/sites/tutorial2program/files/assign-value-to-variable.png" width="500" />

---

## 1.2. Tạo biến trong Python

Trong Python, ta không cần khai báo kiểu dữ liệu trước.

Chỉ cần viết:

```python
ten_bien = gia_tri
```

Ví dụ:

```python
student_name = "Minh"
age = 13
score = 8.5
is_student = True
```

Giải thích:

| Biến           | Giá trị  | Ý nghĩa                |
| -------------- | -------- | ---------------------- |
| `student_name` | `"Minh"` | Tên học sinh           |
| `age`          | `13`     | Tuổi                   |
| `score`        | `8.5`    | Điểm số                |
| `is_student`   | `True`   | Có phải học sinh không |

---

## 1.3. Dấu `=` trong Python có ý nghĩa gì?

Trong Toán học, dấu `=` thường có nghĩa là “bằng nhau”.

Nhưng trong Python, dấu `=` dùng để **gán giá trị**.

Ví dụ:

```python
x = 10
```

Nghĩa là:

```text
Gán giá trị 10 vào biến x
```

Không nên hiểu là “x bằng 10” theo kiểu toán học thuần túy, mà nên hiểu là:

```text
x đang lưu giá trị 10
```

---

# 2. Quy tắc đặt tên biến

## 2.1. Tên biến hợp lệ

Tên biến trong Python cần tuân theo các quy tắc sau:

* Được bắt đầu bằng chữ cái hoặc dấu gạch dưới `_`.
* Không được bắt đầu bằng số.
* Không chứa khoảng trắng.
* Không dùng ký tự đặc biệt như `-`, `@`, `#`, `%`.
* Không trùng với từ khóa của Python như `class`, `if`, `for`, `while`.
* Phân biệt chữ hoa và chữ thường.

Ví dụ:

```python
name = "Lan"
Name = "Hoa"
```

Trong Python, `name` và `Name` là hai biến khác nhau.

---

## 2.2. Ví dụ tên biến đúng và sai

| Tên biến đúng  | Tên biến sai   | Lý do sai                 |
| -------------- | -------------- | ------------------------- |
| `student_name` | `student name` | Có khoảng trắng           |
| `age`          | `1age`         | Bắt đầu bằng số           |
| `_score`       | `my-score`     | Có dấu `-`                |
| `total_score`  | `total@score`  | Có ký tự đặc biệt         |
| `class_name`   | `class`        | `class` là từ khóa Python |

**Hình minh họa quy tắc đặt tên biến:**

<img src="https://hi-static.z-dn.net/files/d7e/8b67b00b45c03edb4809cb80843352eb.jpg" width="600" />

---

## 2.3. Cách đặt tên biến dễ hiểu

Nên đặt tên biến rõ nghĩa.

Không nên viết:

```python
a = "Minh"
b = 13
c = 8.5
```

Nên viết:

```python
student_name = "Minh"
age = 13
score = 8.5
```

Cách viết thứ hai dễ hiểu hơn vì nhìn vào tên biến là biết biến đó lưu thông tin gì.

---

# 3. Thay đổi giá trị của biến

Biến có thể được thay đổi giá trị trong quá trình chạy chương trình.

Ví dụ:

```python
score = 7
print(score)

score = 9
print(score)
```

Kết quả:

```text
7
9
```

Giải thích:

Ban đầu biến `score` lưu giá trị `7`.

Sau đó ta gán lại:

```python
score = 9
```

Nên giá trị cũ bị thay thế bằng giá trị mới.

---

## 3.1. Biến có thể thay đổi kiểu dữ liệu

Python cho phép một biến thay đổi kiểu dữ liệu.

Ví dụ:

```python
x = 10
x = "Python"
```

Ban đầu `x` là số nguyên.

Sau đó `x` trở thành chuỗi ký tự.

Tuy Python cho phép làm vậy, nhưng khi mới học, ta nên hạn chế đổi kiểu dữ liệu lung tung để tránh khó hiểu.

---

# 4. Các kiểu dữ liệu cơ bản trong Python

Kiểu dữ liệu cho biết giá trị thuộc loại nào.

Ví dụ:

* `12` là số nguyên.
* `3.14` là số thực.
* `"Hello"` là chuỗi.
* `True` là giá trị đúng.
* `False` là giá trị sai.

---

## 4.1. Bảng kiểu dữ liệu thường gặp

| Kiểu dữ liệu | Tên tiếng Anh         | Ví dụ              | Ý nghĩa                |
| ------------ | --------------------- | ------------------ | ---------------------- |
| `int`        | Integer               | `10`, `-5`, `0`    | Số nguyên              |
| `float`      | Floating-point number | `3.14`, `8.5`      | Số thực, số thập phân  |
| `str`        | String                | `"Python"`, `"An"` | Chuỗi ký tự            |
| `bool`       | Boolean               | `True`, `False`    | Đúng hoặc sai          |
| `list`       | List                  | `[1, 2, 3]`        | Danh sách              |
| `dict`       | Dictionary            | `{"name": "An"}`   | Dữ liệu dạng key-value |

**Hình minh họa kiểu dữ liệu:**

<img src="https://images.theengineeringprojects.com/image/main/2020/06/Datatypes-in-python.jpg" width="650" />

---

## 4.2. Ví dụ về kiểu dữ liệu

```python
name = "Linh"        # str
age = 12             # int
height = 1.55        # float
is_student = True    # bool
```

Giải thích:

| Biến         | Giá trị  | Kiểu dữ liệu |
| ------------ | -------- | ------------ |
| `name`       | `"Linh"` | `str`        |
| `age`        | `12`     | `int`        |
| `height`     | `1.55`   | `float`      |
| `is_student` | `True`   | `bool`       |

---

# 5. Kiểm tra kiểu dữ liệu bằng `type()`

Trong Python, ta có thể dùng hàm `type()` để kiểm tra kiểu dữ liệu của một biến.

Ví dụ:

```python
name = "Linh"
age = 12
score = 8.5

print(type(name))
print(type(age))
print(type(score))
```

Kết quả:

```text
<class 'str'>
<class 'int'>
<class 'float'>
```

Giải thích:

* `str` là chuỗi.
* `int` là số nguyên.
* `float` là số thực.

---

# 6. Dữ liệu nhập từ bàn phím bằng `input()`

## 6.1. Hàm `input()` là gì?

Hàm `input()` dùng để nhập dữ liệu từ bàn phím.

Ví dụ:

```python
name = input()
print("Xin chào", name)
```

Nếu nhập:

```text
An
```

Chương trình sẽ in:

```text
Xin chào An
```

---

## 6.2. Lưu ý quan trọng về `input()`

Dữ liệu nhập bằng `input()` luôn có kiểu là `str`.

Ví dụ:

```python
age = input()
print(type(age))
```

Nếu nhập:

```text
12
```

Kết quả vẫn là:

```text
<class 'str'>
```

Mặc dù ta nhập số `12`, Python vẫn hiểu đó là chuỗi `"12"`.

---

# 7. Ép kiểu dữ liệu trong Python

## 7.1. Ép kiểu là gì?

Ép kiểu là chuyển dữ liệu từ kiểu này sang kiểu khác.

Ví dụ:

```python
age = "12"
age = int(age)
```

Ban đầu:

```text
age là chuỗi "12"
```

Sau khi dùng `int(age)`:

```text
age trở thành số nguyên 12
```

---

## 7.2. Các hàm ép kiểu thường dùng

| Hàm       | Công dụng             | Ví dụ                  |
| --------- | --------------------- | ---------------------- |
| `int()`   | Chuyển sang số nguyên | `int("10")` → `10`     |
| `float()` | Chuyển sang số thực   | `float("8.5")` → `8.5` |
| `str()`   | Chuyển sang chuỗi     | `str(100)` → `"100"`   |
| `bool()`  | Chuyển sang đúng/sai  | `bool(1)` → `True`     |

---

# 8. Ép kiểu từ chuỗi sang số

## 8.1. Chuyển chuỗi sang số nguyên

Ví dụ:

```python
a = "10"
b = int(a)

print(b + 5)
```

Kết quả:

```text
15
```

Nếu không ép kiểu:

```python
a = "10"
print(a + 5)
```

Chương trình sẽ lỗi, vì không thể cộng chuỗi `"10"` với số `5`.

---

## 8.2. Chuyển chuỗi sang số thực

Ví dụ:

```python
score = "9.5"
score = float(score)

print(score + 0.5)
```

Kết quả:

```text
10.0
```

---

# 9. Ép kiểu từ số sang chuỗi

Khi muốn ghép số vào chuỗi bằng dấu `+`, ta cần chuyển số sang chuỗi.

Ví dụ sai:

```python
age = 12
print("Tuổi của em là " + age)
```

Chương trình sẽ lỗi.

Ví dụ đúng:

```python
age = 12
print("Tuổi của em là " + str(age))
```

Kết quả:

```text
Tuổi của em là 12
```

Cách dễ hơn là dùng dấu phẩy:

```python
age = 12
print("Tuổi của em là", age)
```

Kết quả:

```text
Tuổi của em là 12
```

---

# 10. Ép kiểu từ `float` sang `int`

Khi chuyển từ `float` sang `int`, Python sẽ bỏ phần thập phân.

Ví dụ:

```python
x = 5.99
y = int(x)

print(y)
```

Kết quả:

```text
5
```

Lưu ý:

`int()` không làm tròn số, mà chỉ cắt bỏ phần sau dấu chấm.

| Giá trị ban đầu | Sau khi dùng `int()` |
| --------------- | -------------------- |
| `5.99`          | `5`                  |
| `8.75`          | `8`                  |
| `3.14`          | `3`                  |

---

# 11. Ép kiểu ngầm định

Python có thể tự động chuyển kiểu trong một số phép toán.

Ví dụ:

```python
x = 5
y = 2.5
z = x + y

print(z)
print(type(z))
```

Kết quả:

```text
7.5
<class 'float'>
```

Giải thích:

* `x` là `int`.
* `y` là `float`.
* Khi cộng `int` với `float`, Python tự chuyển kết quả thành `float`.

**Hình minh họa ép kiểu:**

<img src="https://i.ytimg.com/vi/Kjziohpfooo/sddefault.jpg" width="600" height="400" />

---

# 12. Ví dụ tổng hợp

## Bài toán

Nhập vào tên, tuổi và điểm trung bình của một học sinh.

Sau đó in ra:

* Tên học sinh.
* Tuổi hiện tại.
* Tuổi sau 3 năm.
* Điểm trung bình.

---

## Code mẫu

```python
name = input("Nhập tên: ")
age = int(input("Nhập tuổi: "))
score = float(input("Nhập điểm trung bình: "))

print("Họ tên:", name)
print("Tuổi hiện tại:", age)
print("Tuổi sau 3 năm:", age + 3)
print("Điểm trung bình:", score)
```

---

## Ví dụ Input/Output

| Input                   | Output                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `Linh`<br />`12`<br />`8.5` | `Họ tên: Linh`<br />`Tuổi hiện tại: 12`<br />`Tuổi sau 3 năm: 15`<br />`Điểm trung bình: 8.5` |

---

# 13. Một số lỗi thường gặp

## Lỗi 1: Cộng chuỗi với số

Code sai:

```python
age = input()
print(age + 1)
```

Nếu nhập:

```text
12
```

Chương trình sẽ lỗi vì `age` đang là chuỗi `"12"`.

Code đúng:

```python
age = int(input())
print(age + 1)
```

---

## Lỗi 2: Ép kiểu sai dữ liệu

Code sai:

```python
x = int("hello")
```

Chương trình sẽ lỗi vì `"hello"` không thể chuyển thành số nguyên.

---

## Lỗi 3: Đặt tên biến sai

Code sai:

```python
1name = "An"
student-name = "Binh"
class = "Python"
```

Code đúng:

```python
name1 = "An"
student_name = "Binh"
class_name = "Python"
```

---

## Tự luyện tại lớp

## Bài 1: Thông tin học sinh

Viết chương trình nhập vào tên, tuổi và lớp của một học sinh. Sau đó in ra thông tin học sinh.

### Input

| Dòng   | Ý nghĩa      |
| ------ | ------------ |
| Dòng 1 | Tên học sinh |
| Dòng 2 | Tuổi         |
| Dòng 3 | Lớp          |

### Output

In ra thông tin học sinh theo mẫu.

### Ví dụ

| Input                | Output                               |
| -------------------- | ------------------------------------ |
| `An`<br />`12`<br />`7A` | `Tên: An`<br />`Tuổi: 12`<br />`Lớp: 7A` |

---

## Bài 2: Tuổi sau 5 năm

Viết chương trình nhập vào tuổi hiện tại của một người. In ra tuổi của người đó sau 5 năm.

### Ví dụ

| Input | Output |
| ----- | ------ |
| `12`  | `17`   |

Gợi ý:

Cần dùng `int()` để chuyển dữ liệu nhập vào thành số nguyên.

---

## Bài 3: Tính tổng hai số nguyên

Viết chương trình nhập vào hai số nguyên `a` và `b`. In ra tổng của hai số đó.

### Ví dụ

| Input      | Output |
| ---------- | ------ |
| `5`<br />`7` | `12`   |

---

## Bài 4: Tính điểm trung bình

Viết chương trình nhập vào điểm Toán, Văn, Anh. In ra điểm trung bình của 3 môn.

### Ví dụ

| Input             | Output |
| ----------------- | ------ |
| `8`<br />`7`<br />`9` | `8.0`  |

Gợi ý:

Công thức:

```python
average = (math + literature + english) / 3
```

---

## Bài 5: Đổi kiểu dữ liệu

Cho biến:

```python
x = "100"
```

Hãy chuyển `x` thành số nguyên rồi in ra kết quả của:

```python
x + 50
```

### Output mong muốn

```text
150
```

---

# 15. Bài tập nâng cao

## Bài 6: Tính năm sinh

Nhập vào tên và tuổi của một người. Biết năm hiện tại là `2026`. Hãy in ra năm sinh dự kiến của người đó.

### Ví dụ

| Input          | Output                          |
| -------------- | ------------------------------- |
| `Minh`<br />`12` | `Bạn Minh sinh khoảng năm 2014` |

Gợi ý:

```python
birth_year = 2026 - age
```

---

## Bài 7: Tính tiền mua hàng

Nhập vào tên sản phẩm, số lượng và đơn giá. Hãy tính tổng tiền cần trả.

### Ví dụ

| Input                      | Output             |
| -------------------------- | ------------------ |
| `Bút chì`<br />`3`<br />`5000` | `Tổng tiền: 15000` |

Gợi ý:

```python
total = quantity * price
```

---

# 16. Ghi nhớ cuối bài

* Biến dùng để lưu trữ dữ liệu.
* Python dùng dấu `=` để gán giá trị cho biến.
* Tên biến nên rõ nghĩa, không có khoảng trắng và không bắt đầu bằng số.
* Một số kiểu dữ liệu cơ bản:

  * `int`: số nguyên
  * `float`: số thực
  * `str`: chuỗi
  * `bool`: đúng/sai
* Dữ liệu nhập bằng `input()` luôn là chuỗi.
* Muốn tính toán với dữ liệu nhập vào, thường cần ép kiểu bằng `int()` hoặc `float()`.
* `int()` khi dùng với số thực sẽ cắt phần thập phân, không làm tròn.

---

# 17. Mini Quiz

## Câu 1

Biến dùng để làm gì?

A. Lưu trữ dữ liệu
B. Xóa chương trình
C. Tắt máy tính
D. Tạo hình ảnh

Đáp án: A

---

## Câu 2

Dòng nào đặt tên biến đúng?

A. `1name`
B. `student name`
C. `student_name`
D. `my-score`

Đáp án: C

---

## Câu 3

Kết quả của đoạn code sau là gì?

```python
x = "10"
y = int(x)
print(y + 5)
```

A. `105`
B. `15`
C. Lỗi
D. `10 5`

Đáp án: B

---

## Câu 4

Dữ liệu nhập từ `input()` luôn có kiểu gì?

A. `int`
B. `float`
C. `str`
D. `bool`

Đáp án: C

---

## Câu 5

Kết quả của đoạn code sau là gì?

```python
x = 5.99
print(int(x))
```

A. `6`
B. `5.99`
C. `5`
D. Lỗi

Đáp án: C
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
