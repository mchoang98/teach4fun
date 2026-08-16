# Thực hành bài 7-1: Khái niệm hàm

## Bài 1: In lời chào

### Yêu cầu

Viết hàm `say_hello()` không có tham số. Mỗi lần được gọi, hàm in ra lời chào `Chào mừng bạn đến với Python!`.

Gọi hàm một lần để hiển thị lời chào.

### Dữ liệu cho trước

Bài tập không có dữ liệu đầu vào và không dùng `input()`.

### Kết quả mong đợi

```text
Chào mừng bạn đến với Python!
```

### Yêu cầu kỹ thuật

* Định nghĩa hàm bằng từ khóa `def`.
* Đặt câu lệnh `print()` bên trong thân hàm.
* Gọi `say_hello()` sau phần định nghĩa hàm.

## Bài 2: In bảng tên học sinh

### Yêu cầu

Viết hàm `print_name_tag(name)` nhận tham số `name` là tên học sinh. Hàm in bảng tên theo đúng mẫu bên dưới.

Gọi hàm lần lượt với hai tên `An` và `Bình`.

### Dữ liệu cho trước

```python
first_name = "An"
second_name = "Bình"
```

Giữ nguyên tên và giá trị của hai biến. Không dùng `input()`.

### Kết quả mong đợi

```text
=== BẢNG TÊN ===
Học sinh: An
=== BẢNG TÊN ===
Học sinh: Bình
```

### Yêu cầu kỹ thuật

* Hàm phải có đúng một tham số tên là `name`.
* Gọi cùng một hàm hai lần, mỗi lần truyền một biến đã cho.

## Bài 3: Giới thiệu câu lạc bộ

### Yêu cầu

Viết hàm `introduce_club(name, topic)` nhận tên câu lạc bộ và chủ đề sinh hoạt. Hàm in một câu theo mẫu: `Câu lạc bộ <name> sinh hoạt về <topic>.`

### Dữ liệu đầu vào

Chương trình đọc hai dòng bằng `input()`:

* Dòng 1 chứa tên câu lạc bộ.
* Dòng 2 chứa chủ đề sinh hoạt.

Cả hai dòng đều là chuỗi không rỗng.

Ví dụ đầu vào:

```text
Lập trình vui
Python
```

### Dữ liệu đầu ra

In đúng một dòng giới thiệu câu lạc bộ.

Với dữ liệu mẫu, kết quả là:

```text
Câu lạc bộ Lập trình vui sinh hoạt về Python.
```

### Yêu cầu kỹ thuật

* Hàm phải có hai tham số `name` và `topic`.
* Dữ liệu được đọc bên ngoài hàm rồi truyền vào khi gọi hàm.

## Bài 4: Tính tổng điểm

### Yêu cầu

Viết hàm `total_score(score_1, score_2, score_3)` nhận ba điểm số và trả về tổng của ba điểm bằng `return`.

Gọi hàm, lưu giá trị trả về vào biến `result`, sau đó in `Tổng điểm: <result>`.

### Dữ liệu cho trước

```python
score_1 = 8
score_2 = 7
score_3 = 9
```

Các điểm được tính theo thang điểm 10. Giữ nguyên tên và giá trị của các biến. Không dùng `input()`.

### Kết quả mong đợi

```text
Tổng điểm: 24
```

### Yêu cầu kỹ thuật

* Hàm phải dùng `return` để trả về tổng.
* Không dùng `print()` bên trong hàm.
* Chỉ in kết quả sau khi gọi hàm.

## Bài 5: Tính diện tích hình chữ nhật

### Yêu cầu

Viết hàm `rectangle_area(length, width)` nhận chiều dài và chiều rộng của một hình chữ nhật, sau đó trả về diện tích.

Công thức: `diện tích = chiều dài × chiều rộng`.

### Dữ liệu đầu vào

Chương trình đọc hai dòng bằng `input()`:

* Dòng 1 chứa chiều dài là một số thực dương, đơn vị xăng-ti-mét.
* Dòng 2 chứa chiều rộng là một số thực dương, đơn vị xăng-ti-mét.

Ví dụ đầu vào:

```text
8
5
```

### Dữ liệu đầu ra

In diện tích theo mẫu `Diện tích: <area> cm²`.

Với dữ liệu mẫu, kết quả là:

```text
Diện tích: 40.0 cm²
```

### Yêu cầu kỹ thuật

* Chuyển hai giá trị đọc được sang kiểu `float` trước khi gọi hàm.
* Hàm phải trả về diện tích bằng `return`.

## Bài 6: Đổi phút thành giây

### Yêu cầu

Viết hàm `minutes_to_seconds(minutes)` nhận một số phút và trả về số giây tương ứng.

Công thức: `số giây = số phút × 60`.

Gọi hàm với từng giá trị trong ba biến đã cho và in mỗi kết quả trên một dòng.

### Dữ liệu cho trước

```python
first_minutes = 1
second_minutes = 5
third_minutes = 12
```

Các giá trị đều là số nguyên không âm, đơn vị phút. Giữ nguyên tên và giá trị của các biến. Không dùng `input()`.

### Kết quả mong đợi

```text
60
300
720
```

### Yêu cầu kỹ thuật

* Chỉ định nghĩa hàm `minutes_to_seconds()` một lần.
* Gọi lại hàm ba lần với ba biến khác nhau.
* Hàm phải dùng `return`.

## Bài 7: Lời chào có tên mặc định

### Yêu cầu

Viết hàm `greet(name="Bạn")` có tham số mặc định. Hàm in `Chào <name>!`.

Gọi hàm lần đầu không truyền đối số. Gọi hàm lần thứ hai với đối số `Mai`.

### Dữ liệu cho trước

Bài tập không có dữ liệu đầu vào và không dùng `input()`.

### Kết quả mong đợi

```text
Chào Bạn!
Chào Mai!
```

### Yêu cầu kỹ thuật

* Khai báo giá trị mặc định `"Bạn"` cho tham số `name`.
* Phải có một lần gọi hàm không truyền đối số và một lần gọi hàm có truyền đối số.

## Bài 8: Tính tổng và tích

### Yêu cầu

Viết hàm `calculate(a, b)` nhận hai số nguyên. Hàm trả về hai giá trị theo đúng thứ tự: tổng của hai số, sau đó là tích của hai số.

Gọi hàm và lưu hai giá trị trả về vào hai biến riêng biệt.

### Dữ liệu đầu vào

Chương trình đọc hai dòng bằng `input()`. Mỗi dòng chứa một số nguyên.

Ví dụ đầu vào:

```text
6
4
```

### Dữ liệu đầu ra

In hai dòng theo thứ tự:

* Dòng 1: `Tổng: <sum_value>`.
* Dòng 2: `Tích: <product_value>`.

Với dữ liệu mẫu, kết quả là:

```text
Tổng: 10
Tích: 24
```

### Yêu cầu kỹ thuật

* Chuyển dữ liệu đầu vào sang kiểu `int`.
* Chỉ dùng một câu lệnh `return` để trả về hai giá trị.
* Nhận hai giá trị trả về bằng cách gán vào hai biến.

## Bài 9: Tính chu vi và diện tích hình vuông

### Yêu cầu

Viết hàm `square_info(side)` nhận độ dài cạnh của một hình vuông. Hàm trả về chu vi và diện tích theo đúng thứ tự này.

Công thức:

* `chu vi = cạnh × 4`.
* `diện tích = cạnh × cạnh`.

### Dữ liệu cho trước

```python
side = 7
```

Độ dài cạnh là số dương, đơn vị xăng-ti-mét. Giữ nguyên tên và giá trị của biến. Không dùng `input()`.

### Kết quả mong đợi

```text
Chu vi: 28 cm
Diện tích: 49 cm²
```

### Yêu cầu kỹ thuật

* Hàm phải trả về hai giá trị bằng `return`.
* Không dùng `print()` bên trong hàm.
* In chu vi trước, sau đó in diện tích.

## Bài 10: Tạo thông báo hoàn thành bài học

### Yêu cầu

Viết hai hàm:

* `completion_percent(done, total)` trả về phần trăm số bài đã hoàn thành theo công thức `done / total * 100`.
* `print_progress(name, percent)` in thông báo `<name> đã hoàn thành <percent>% bài tập.`.

Dùng giá trị do `completion_percent()` trả về làm đối số khi gọi `print_progress()`.

### Dữ liệu đầu vào

Chương trình đọc ba dòng bằng `input()`:

* Dòng 1 chứa tên học sinh, là một chuỗi không rỗng.
* Dòng 2 chứa số bài đã hoàn thành `done`, là số nguyên không âm.
* Dòng 3 chứa tổng số bài `total`, là số nguyên dương.

Giá trị `done` luôn nhỏ hơn hoặc bằng `total`.

Ví dụ đầu vào:

```text
Lan
8
10
```

### Dữ liệu đầu ra

In phần trăm với đúng một chữ số sau dấu chấm thập phân.

Với dữ liệu mẫu, kết quả là:

```text
Lan đã hoàn thành 80.0% bài tập.
```

### Yêu cầu kỹ thuật

* Chuyển `done` và `total` sang kiểu `int`.
* `completion_percent()` phải dùng `return` và không được dùng `print()`.
* `print_progress()` phải nhận kết quả đã tính qua tham số `percent`.
* Dùng định dạng `:.1f` để in phần trăm với một chữ số sau dấu chấm thập phân.
