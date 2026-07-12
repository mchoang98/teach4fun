# Thực hành bài 4-1: Câu lệnh if...else

## Bài 1: Kiểm tra số chẵn

### Yêu cầu

Viết chương trình kiểm tra một số nguyên `number` là số chẵn hay số lẻ.

Nếu `number` chia hết cho `2`, in `Số chẵn`. Ngược lại, in `Số lẻ`. Số `0` được xem là số chẵn.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `number`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Số chẵn` nếu `number` chia hết cho `2`.
* `Số lẻ` nếu `number` không chia hết cho `2`.

Ví dụ, với dữ liệu đầu vào:

```text
14
```

chương trình in:

```text
Số chẵn
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số nguyên.
* Dùng toán tử `%` và câu lệnh `if...else`.

## Bài 2: Phân loại số nguyên

### Yêu cầu

Viết chương trình xác định số nguyên `number` là số dương, số âm hay số không.

Nếu `number` lớn hơn `0`, in `Số dương`. Nếu `number` nhỏ hơn `0`, in `Số âm`. Nếu `number` bằng `0`, in `Số không`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `number`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Số dương` nếu `number > 0`.
* `Số âm` nếu `number < 0`.
* `Số không` nếu `number == 0`.

Ví dụ, với dữ liệu đầu vào:

```text
0
```

chương trình in:

```text
Số không
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số nguyên.
* Dùng cấu trúc `if...elif...else`.

## Bài 3: Kiểm tra đủ tuổi xem phim

### Yêu cầu

Một bộ phim chỉ dành cho người từ đủ `13` tuổi trở lên. Viết chương trình kiểm tra người xem có đủ tuổi xem phim hay không.

Nếu `age` lớn hơn hoặc bằng `13`, in `Được phép xem phim`. Ngược lại, in `Chưa đủ tuổi xem phim`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `age` là tuổi của người xem, với `0 <= age <= 120`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Được phép xem phim` nếu `age >= 13`.
* `Chưa đủ tuổi xem phim` nếu `age < 13`.

Ví dụ, với dữ liệu đầu vào:

```text
13
```

chương trình in:

```text
Được phép xem phim
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số nguyên.
* Dùng câu lệnh `if...else`.

## Bài 4: Xếp loại kết quả môn học

### Yêu cầu

Viết chương trình xếp loại kết quả môn học dựa trên điểm `score`.

Nếu `score` lớn hơn hoặc bằng `8`, in `Tốt`. Nếu `score` từ `5` đến dưới `8`, in `Đạt`. Nếu `score` dưới `5`, in `Chưa đạt`.

### Dữ liệu đầu vào

Một dòng chứa số thực `score` là điểm môn học, với `0 <= score <= 10`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Tốt` nếu `score >= 8`.
* `Đạt` nếu `5 <= score < 8`.
* `Chưa đạt` nếu `score < 5`.

Ví dụ, với dữ liệu đầu vào:

```text
4.5
```

chương trình in:

```text
Chưa đạt
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số thực.
* Dùng cấu trúc `if...elif...else`.

## Bài 5: So sánh hai số

### Yêu cầu

Viết chương trình so sánh hai số nguyên `a` và `b`.

Nếu `a` lớn hơn `b`, in `a lớn hơn b`. Ngược lại, in `a không lớn hơn b`. Trường hợp ngược lại bao gồm cả `a` nhỏ hơn `b` và `a` bằng `b`.

### Dữ liệu đầu vào

Hai dòng, mỗi dòng chứa một số nguyên theo thứ tự sau:

1. Dòng thứ nhất chứa `a`.
2. Dòng thứ hai chứa `b`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `a lớn hơn b` nếu `a > b`.
* `a không lớn hơn b` nếu `a <= b`.

Ví dụ, với dữ liệu đầu vào:

```text
7
7
```

chương trình in:

```text
a không lớn hơn b
```

### Yêu cầu kỹ thuật

* Dùng `input()` hai lần để đọc dữ liệu và chuyển mỗi giá trị thành số nguyên.
* Dùng câu lệnh `if...else`.

## Bài 6: Kiểm tra mật khẩu

### Yêu cầu

Mật khẩu đúng là `python123`. Viết chương trình kiểm tra mật khẩu người dùng nhập vào.

Nếu `password` giống chính xác mật khẩu đúng, in `Đăng nhập thành công`. Ngược lại, in `Sai mật khẩu`. Phép so sánh mật khẩu phân biệt chữ hoa và chữ thường.

### Dữ liệu đầu vào

Một dòng chứa chuỗi `password`. Chuỗi không chứa khoảng trắng.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Đăng nhập thành công` nếu `password` bằng `python123`.
* `Sai mật khẩu` nếu `password` khác `python123`.

Ví dụ, với dữ liệu đầu vào:

```text
Python123
```

chương trình in:

```text
Sai mật khẩu
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc chuỗi mật khẩu.
* Dùng toán tử `==` và câu lệnh `if...else`.

## Bài 7: Kiểm tra bội của 5

### Yêu cầu

Viết chương trình kiểm tra số nguyên `number` có phải là bội của `5` hay không.

Nếu `number` chia hết cho `5`, in `Là bội của 5`. Ngược lại, in `Không phải bội của 5`. Số `0` là bội của `5`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `number`.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Là bội của 5` nếu `number` chia hết cho `5`.
* `Không phải bội của 5` nếu `number` không chia hết cho `5`.

Ví dụ, với dữ liệu đầu vào:

```text
-15
```

chương trình in:

```text
Là bội của 5
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số nguyên.
* Dùng toán tử `%` và câu lệnh `if...else`.

## Bài 8: Tính phí giao hàng

### Yêu cầu

Một cửa hàng miễn phí giao hàng cho đơn có giá trị từ `500000` đồng trở lên. Đơn có giá trị thấp hơn `500000` đồng phải trả phí giao hàng là `30000` đồng.

Viết chương trình tính và in phí giao hàng dựa trên giá trị đơn hàng `order_value`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `order_value` là giá trị đơn hàng, tính bằng đồng, với `order_value >= 0`.

### Dữ liệu đầu ra

In một số nguyên là phí giao hàng, tính bằng đồng:

* In `0` nếu `order_value >= 500000`.
* In `30000` nếu `order_value < 500000`.

Ví dụ, với dữ liệu đầu vào:

```text
499000
```

chương trình in:

```text
30000
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số nguyên.
* Dùng câu lệnh `if...else`.

## Bài 9: Kiểm tra nhiệt độ lạnh

### Yêu cầu

Viết chương trình nhận biết thời tiết có lạnh hay không dựa trên nhiệt độ `temperature`.

Nếu `temperature` nhỏ hơn `20` độ C, in `Trời lạnh`. Ngược lại, in `Trời không lạnh`. Nhiệt độ đúng bằng `20` độ C thuộc trường hợp trời không lạnh.

### Dữ liệu đầu vào

Một dòng chứa số thực `temperature` là nhiệt độ, tính bằng độ C.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* `Trời lạnh` nếu `temperature < 20`.
* `Trời không lạnh` nếu `temperature >= 20`.

Ví dụ, với dữ liệu đầu vào:

```text
20
```

chương trình in:

```text
Trời không lạnh
```

### Yêu cầu kỹ thuật

* Dùng `input()` để đọc dữ liệu và chuyển dữ liệu thành số thực.
* Dùng câu lệnh `if...else`.

## Bài 10: Tìm số lớn hơn hoặc kiểm tra bằng nhau

### Yêu cầu

Viết chương trình xử lý hai số nguyên `a` và `b`.

Nếu hai số khác nhau, in số lớn hơn. Nếu hai số bằng nhau, in `Hai số bằng nhau`.

### Dữ liệu đầu vào

Hai số nguyên `a` và `b` được viết trên cùng một dòng, cách nhau bởi một khoảng trắng.

### Dữ liệu đầu ra

In một dòng theo quy tắc sau:

* Nếu `a != b`, in giá trị lớn hơn trong hai số.
* Nếu `a == b`, in `Hai số bằng nhau`.

Ví dụ, với dữ liệu đầu vào:

```text
-3 8
```

chương trình in:

```text
8
```

### Yêu cầu kỹ thuật

* Dùng `input().split()` để đọc hai giá trị trên cùng một dòng và chuyển chúng thành số nguyên.
* Dùng câu lệnh `if...else`.
* Trong nhánh hai số khác nhau, có thể dùng hàm `max()` để tìm số lớn hơn.
