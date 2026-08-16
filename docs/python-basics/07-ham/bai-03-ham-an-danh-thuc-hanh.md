# Thực hành bài 7-3: Hàm ẩn danh lambda

## Bài 1: Tính bình phương

### Yêu cầu

Tạo hàm lambda nhận một số `x` và trả về bình phương của số đó. Gán hàm vào biến `square`, sau đó gọi hàm với dữ liệu đã cho.

### Dữ liệu cho trước

```python
number = 6
```

Giữ nguyên biến và không dùng `input()`.

### Kết quả mong đợi

```text
36
```

### Yêu cầu kỹ thuật

* Phải dùng từ khóa `lambda`.
* Biểu thức lambda chỉ chứa phép tính `x ** 2`.

## Bài 2: Tính tiền sản phẩm

### Yêu cầu

Tạo hàm lambda `total_price` nhận đơn giá `price` và số lượng `quantity`, sau đó trả về `price * quantity`.

### Dữ liệu đầu vào

Đọc đơn giá thực không âm ở dòng 1 và số lượng nguyên không âm ở dòng 2.

Ví dụ đầu vào:

```text
12500
4
```

### Dữ liệu đầu ra

In tổng tiền với hai chữ số sau dấu chấm:

```text
50000.00
```

### Yêu cầu kỹ thuật

* Định nghĩa `total_price` bằng `lambda` với hai tham số.
* Dùng định dạng `:.2f` khi in.

## Bài 3: Đổi nhiệt độ bằng lambda

### Yêu cầu

Tạo hàm lambda `to_fahrenheit` nhận nhiệt độ Celsius và trả về Fahrenheit theo công thức `celsius * 9 / 5 + 32`.

### Dữ liệu đầu vào

Đọc một số thực là nhiệt độ Celsius.

Ví dụ đầu vào:

```text
30
```

### Dữ liệu đầu ra

In nhiệt độ Fahrenheit với một chữ số sau dấu chấm:

```text
86.0
```

### Yêu cầu kỹ thuật

* Hàm phải được viết bằng `lambda`, không dùng `def`.
* Dùng định dạng `:.1f` khi in.

## Bài 4: Nhân đôi các số

### Yêu cầu

Dùng `map()` và lambda để tạo danh sách mới trong đó mỗi số của danh sách ban đầu được nhân đôi.

### Dữ liệu cho trước

```python
numbers = [3, 7, 1, 9, 4]
```

Giữ nguyên danh sách và không dùng `input()`.

### Kết quả mong đợi

```text
[6, 14, 2, 18, 8]
```

### Yêu cầu kỹ thuật

* Truyền trực tiếp một hàm lambda vào `map()`.
* Chuyển kết quả của `map()` thành `list` trước khi in.

## Bài 5: Tính độ dài các từ

### Yêu cầu

Dùng `map()` và lambda để tạo danh sách chứa độ dài của từng từ, giữ nguyên thứ tự ban đầu.

### Dữ liệu đầu vào

Dòng duy nhất chứa các từ không rỗng, cách nhau bởi dấu cách. Mỗi từ không chứa khoảng trắng.

Ví dụ đầu vào:

```text
Python rất thú vị
```

### Dữ liệu đầu ra

In các độ dài trên một dòng, cách nhau bởi dấu cách:

```text
6 3 3 2
```

### Yêu cầu kỹ thuật

* Dùng `split()` để tạo danh sách từ.
* Dùng lambda gọi `len()` cho từng từ trong `map()`.

## Bài 6: Lọc các số chẵn

### Yêu cầu

Dùng `filter()` và lambda để giữ lại các số chẵn. Số chẵn là số chia hết cho `2`. Giữ nguyên thứ tự của các số.

### Dữ liệu đầu vào

Dòng duy nhất chứa từ 1 đến 100 số nguyên, cách nhau bởi dấu cách.

Ví dụ đầu vào:

```text
3 8 2 7 10 5
```

### Dữ liệu đầu ra

In các số chẵn, cách nhau bởi dấu cách. Nếu không có số chẵn, in `NONE`.

Với dữ liệu mẫu:

```text
8 2 10
```

### Yêu cầu kỹ thuật

* Dùng biểu thức `x % 2 == 0` trong lambda.
* Chuyển kết quả của `filter()` thành danh sách trước khi kiểm tra và in.

## Bài 7: Lọc điểm đạt

### Yêu cầu

Dùng `filter()` và lambda để giữ lại các điểm lớn hơn hoặc bằng `5`. Giữ nguyên thứ tự ban đầu.

### Dữ liệu đầu vào

Dòng duy nhất chứa từ 1 đến 100 điểm thực, cách nhau bởi dấu cách. Mỗi điểm thuộc đoạn từ 0 đến 10.

Ví dụ đầu vào:

```text
4 5 8 3 9 4.5
```

### Dữ liệu đầu ra

In các điểm đạt dưới dạng danh sách Python:

```text
[5.0, 8.0, 9.0]
```

Nếu không có điểm đạt, in:

```text
[]
```

### Yêu cầu kỹ thuật

* Chuyển mọi dữ liệu đầu vào sang `float`.
* Truyền trực tiếp lambda có điều kiện `score >= 5` vào `filter()`.

## Bài 8: Sắp xếp tên theo độ dài

### Yêu cầu

Dùng `sorted()` và lambda để sắp xếp danh sách tên theo độ dài tăng dần. Khi hai tên có cùng độ dài, sắp xếp chúng theo thứ tự bảng chữ cái, có phân biệt chữ hoa và chữ thường.

### Dữ liệu cho trước

```python
names = ["Bình", "An", "Chi", "Dương", "Hà"]
```

Giữ nguyên danh sách và không dùng `input()`.

### Kết quả mong đợi

```text
['An', 'Hà', 'Chi', 'Bình', 'Dương']
```

### Yêu cầu kỹ thuật

* Dùng `sorted()` với `key` là lambda.
* Lambda trả về tuple `(len(name), name)`.

## Bài 9: Sắp xếp sản phẩm theo giá

### Yêu cầu

Mỗi sản phẩm được biểu diễn bằng tuple `(tên, giá)`. Dùng `sorted()` và lambda để sắp xếp sản phẩm theo giá giảm dần. Nếu giá bằng nhau, giữ nguyên thứ tự ban đầu.

### Dữ liệu cho trước

```python
products = [
    ("Bút", 5000),
    ("Vở", 12000),
    ("Thước", 7000),
    ("Sổ", 12000),
]
```

Giá có đơn vị đồng. Giữ nguyên dữ liệu và không dùng `input()`.

### Kết quả mong đợi

```text
[('Vở', 12000), ('Sổ', 12000), ('Thước', 7000), ('Bút', 5000)]
```

### Yêu cầu kỹ thuật

* Lambda dùng phần tử ở chỉ số `1` của mỗi tuple làm khóa sắp xếp.
* Truyền `reverse=True` vào `sorted()`.

## Bài 10: Xử lý danh sách nhiệt độ

### Yêu cầu

Từ danh sách nhiệt độ Celsius, thực hiện lần lượt hai bước:

1. Dùng `filter()` và lambda để giữ các nhiệt độ lớn hơn hoặc bằng `20°C`.
2. Dùng `map()` và lambda để đổi các nhiệt độ đã giữ sang Fahrenheit theo công thức `celsius * 9 / 5 + 32`.

Giữ nguyên thứ tự của các nhiệt độ.

### Dữ liệu đầu vào

Dòng duy nhất chứa từ 1 đến 50 nhiệt độ thực theo thang Celsius, cách nhau bởi dấu cách.

Ví dụ đầu vào:

```text
15 20 25 18 30
```

### Dữ liệu đầu ra

In danh sách nhiệt độ Fahrenheit dưới dạng danh sách Python:

```text
[68.0, 77.0, 86.0]
```

Nếu không có nhiệt độ nào đạt điều kiện, in:

```text
[]
```

### Yêu cầu kỹ thuật

* Dùng một lambda trong `filter()` và một lambda khác trong `map()`.
* Chuyển kết quả cuối cùng thành `list` trước khi in.
* Không dùng vòng lặp để lọc hoặc quy đổi dữ liệu.
