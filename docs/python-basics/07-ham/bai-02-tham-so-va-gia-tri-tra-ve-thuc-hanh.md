# Thực hành bài 7-2: Tham số và giá trị trả về

## Bài 1: Tính điểm năng lượng

### Yêu cầu

Viết hàm `energy(sleep_hours, study_minutes)` trả về điểm năng lượng theo công thức `sleep_hours * 10 + study_minutes // 10`.

### Dữ liệu đầu vào

Chương trình đọc hai dòng: số giờ ngủ `sleep_hours` và số phút học `study_minutes`. Cả hai là số nguyên; `0 <= sleep_hours <= 24` và `0 <= study_minutes <= 1000`.

Ví dụ đầu vào:

```text
7
90
```

### Dữ liệu đầu ra

In điểm năng lượng. Với dữ liệu mẫu:

```text
79
```

### Yêu cầu kỹ thuật

* Hàm phải có hai tham số và dùng `return`.
* Đọc, chuyển dữ liệu sang `int` ở ngoài hàm.

## Bài 2: Tính tiền sau giảm giá

### Yêu cầu

Viết hàm `final_price(price, discount)` trả về số tiền sau giảm giá. Công thức: `price * (1 - discount / 100)`.

### Dữ liệu đầu vào

Chương trình đọc giá gốc `price` ở dòng 1 và phần trăm giảm `discount` ở dòng 2. Hai giá trị là số thực; `price >= 0` và `0 <= discount <= 100`.

Ví dụ đầu vào:

```text
200000
15
```

### Dữ liệu đầu ra

In số tiền sau giảm với hai chữ số sau dấu chấm thập phân:

```text
170000.00
```

### Yêu cầu kỹ thuật

* Hàm phải trả kết quả bằng `return`.
* Dùng định dạng `:.2f` khi in.

## Bài 3: Tạo lời chào theo thời điểm

### Yêu cầu

Viết hàm `greet(name, time_of_day="buổi sáng")` trả về chuỗi `Chào <name>, chúc bạn <time_of_day> vui vẻ!`.

Gọi hàm lần đầu chỉ với tên `Lan`, lần thứ hai với tên `Minh` và thời điểm `buổi tối`.

### Dữ liệu cho trước

```python
first_name = "Lan"
second_name = "Minh"
second_time = "buổi tối"
```

Giữ nguyên các biến và không dùng `input()`.

### Kết quả mong đợi

```text
Chào Lan, chúc bạn buổi sáng vui vẻ!
Chào Minh, chúc bạn buổi tối vui vẻ!
```

### Yêu cầu kỹ thuật

* `time_of_day` phải có giá trị mặc định `"buổi sáng"`.
* Hàm dùng `return`, không dùng `print()`.

## Bài 4: Quy đổi nhiệt độ

### Yêu cầu

Viết hàm `celsius_to_fahrenheit(celsius)` trả về nhiệt độ Fahrenheit theo công thức `celsius * 9 / 5 + 32`.

### Dữ liệu đầu vào

Đọc một số thực là nhiệt độ Celsius.

Ví dụ đầu vào:

```text
25
```

### Dữ liệu đầu ra

In theo mẫu `<celsius>°C = <fahrenheit>°F`, mỗi số có một chữ số sau dấu chấm:

```text
25.0°C = 77.0°F
```

### Yêu cầu kỹ thuật

* Chuyển dữ liệu sang `float` trước khi gọi hàm.
* Hàm phải dùng `return`.
* Dùng định dạng `:.1f` cho cả hai nhiệt độ.

## Bài 5: Tìm số nhỏ hơn và số lớn hơn

### Yêu cầu

Viết hàm `find_bounds(a, b)` trả về hai giá trị theo thứ tự: số nhỏ hơn, rồi số lớn hơn. Nếu hai số bằng nhau, cả hai giá trị trả về đều bằng số đó.

### Dữ liệu đầu vào

Đọc hai số nguyên, mỗi số trên một dòng.

Ví dụ đầu vào:

```text
12
7
```

### Dữ liệu đầu ra

In số nhỏ hơn ở dòng 1 và số lớn hơn ở dòng 2:

```text
Nhỏ hơn: 7
Lớn hơn: 12
```

### Yêu cầu kỹ thuật

* Dùng câu lệnh điều kiện trong hàm.
* Trả về hai giá trị bằng một câu lệnh `return`.

## Bài 6: Tính tổng số lượng không xác định

### Yêu cầu

Viết hàm `sum_numbers(*numbers)` nhận số lượng đối số bất kỳ và trả về tổng của chúng. Nếu không có đối số, hàm trả về `0`.

Gọi hàm với ba bộ số đã cho.

### Dữ liệu cho trước

```python
first_total = sum_numbers(2, 4, 6)
second_total = sum_numbers(10, 20, 30, 40)
empty_total = sum_numbers()
```

Không dùng `input()`.

### Kết quả mong đợi

```text
12
100
0
```

### Yêu cầu kỹ thuật

* Hàm phải khai báo tham số `*numbers`.
* Duyệt qua `numbers` để tính tổng và dùng `return`.

## Bài 7: Tính trung bình nhiều điểm

### Yêu cầu

Viết hàm `average_score(*scores)` trả về điểm trung bình cộng. Công thức là tổng các điểm chia cho số lượng điểm. Hàm luôn nhận ít nhất một điểm.

### Dữ liệu đầu vào

Dòng duy nhất chứa từ 1 đến 10 điểm thực, cách nhau bởi dấu cách. Mỗi điểm thuộc đoạn từ 0 đến 10.

Ví dụ đầu vào:

```text
8 7.5 9 6.5
```

### Dữ liệu đầu ra

In điểm trung bình với hai chữ số sau dấu chấm:

```text
7.75
```

### Yêu cầu kỹ thuật

* Hàm phải dùng `*scores`.
* Dùng toán tử `*` để truyền các phần tử của danh sách điểm vào hàm.
* Hàm phải trả kết quả bằng `return`.

## Bài 8: In hồ sơ học sinh

### Yêu cầu

Viết hàm `print_profile(**info)` nhận các thông tin được truyền bằng đối số có tên. Hàm in mỗi thông tin theo mẫu `<key>: <value>`, theo đúng thứ tự nhận được.

### Dữ liệu cho trước

Gọi hàm như sau:

```python
print_profile(name="An", age=12, class_name="7A")
```

Không dùng `input()`.

### Kết quả mong đợi

```text
name: An
age: 12
class_name: 7A
```

### Yêu cầu kỹ thuật

* Hàm phải khai báo tham số `**info`.
* Duyệt qua `info.items()` để in khóa và giá trị.

## Bài 9: Thống kê phép tính

### Yêu cầu

Viết hàm `calculate(a, b)` trả về bốn giá trị theo thứ tự: tổng, hiệu `a - b`, tích và thương `a / b`.

### Dữ liệu đầu vào

Đọc hai số thực `a` và `b`, mỗi số trên một dòng. Giá trị `b` luôn khác `0`.

Ví dụ đầu vào:

```text
12
4
```

### Dữ liệu đầu ra

In bốn kết quả, mỗi kết quả trên một dòng:

```text
Tổng: 16.0
Hiệu: 8.0
Tích: 48.0
Thương: 3.0
```

### Yêu cầu kỹ thuật

* Hàm trả về bốn giá trị bằng một câu lệnh `return`.
* Gán bốn giá trị trả về vào bốn biến riêng biệt.

## Bài 10: Tính hóa đơn nhiều sản phẩm

### Yêu cầu

Viết hàm `invoice(discount=0, *prices)` trả về hai giá trị: tổng giá gốc và số tiền phải trả sau giảm giá. Công thức tiền phải trả là `total * (1 - discount / 100)`.

### Dữ liệu cho trước

```python
discount = 10
prices = [50000, 30000, 20000]
```

Các giá trị có đơn vị đồng. `prices` chỉ chứa số không âm và `discount` thuộc đoạn từ 0 đến 100. Giữ nguyên dữ liệu và không dùng `input()`.

### Kết quả mong đợi

```text
Tổng giá gốc: 100000 đồng
Phải trả: 90000 đồng
```

### Yêu cầu kỹ thuật

* Hàm phải dùng cả tham số mặc định và `*prices`.
* Truyền danh sách vào hàm bằng toán tử `*`.
* Hàm trả về hai giá trị và không dùng `print()`.
