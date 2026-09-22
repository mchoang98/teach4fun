# BÀI TẬP LỚN PYTHON CƠ BẢN

## Đề tài: Thời khóa biểu thông minh

### 1. Mô tả bài toán

Viết chương trình Python chạy trên **Console** giúp học sinh quản lý thời khóa biểu trong tuần.

Chương trình cần sử dụng các kiến thức cơ bản:

* Biến và kiểu dữ liệu
* `if / elif / else`
* Vòng lặp `for`, `while`
* Danh sách `list`
* Hàm `function`
* Xử lý chuỗi
* Nhập dữ liệu bằng `input()`

---

## 2. Giao diện menu

Khi chạy chương trình, hiển thị menu:

```text
==================================
      THỜI KHÓA BIỂU THÔNG MINH
==================================

1. Xem thời khóa biểu
2. Thêm môn học
3. Xóa môn học
4. Tìm kiếm môn học
5. Thống kê
0. Thoát

----------------------------------
Nhập lựa chọn của bạn:
```

Chương trình sử dụng vòng lặp `while` để menu tiếp tục hiển thị cho đến khi người dùng chọn `0`.

---

## 3. Yêu cầu 1: Xem thời khóa biểu

Cho phép người dùng xem thời khóa biểu của một ngày.

Ví dụ:

```text
Chọn ngày:

1. Thứ 2
2. Thứ 3
3. Thứ 4
4. Thứ 5
5. Thứ 6

Nhập lựa chọn: 1
```

Kết quả:

```text
===== THỨ 2 =====

1. Toán
2. Ngữ Văn
3. Tiếng Anh
4. Tin học
```

---

## 4. Yêu cầu 2: Thêm môn học

Người dùng chọn ngày và nhập tên môn học muốn thêm.

Ví dụ:

```text
===== THÊM MÔN HỌC =====

Chọn ngày: 2
Nhập tên môn học: Hóa

Đã thêm môn Hóa vào Thứ 3.
```

Sau khi thêm, môn học phải được lưu vào danh sách của ngày tương ứng.

---

## 5. Yêu cầu 3: Xóa môn học

Người dùng chọn ngày.

Chương trình hiển thị danh sách môn học:

```text
===== THỨ 2 =====

1. Toán
2. Ngữ Văn
3. Tiếng Anh
4. Tin học

Nhập số thứ tự môn muốn xóa: 2
```

Kết quả:

```text
Đã xóa môn Ngữ Văn.
```

Danh sách mới:

```text
1. Toán
2. Tiếng Anh
3. Tin học
```

---

## 6. Yêu cầu 4: Tìm kiếm môn học

Cho phép người dùng nhập tên một môn học.

Chương trình sử dụng vòng lặp để tìm xem môn học đó xuất hiện vào những ngày nào.

Ví dụ:

```text
===== TÌM KIẾM MÔN HỌC =====

Nhập tên môn học: Toán
```

Kết quả:

```text
Tìm thấy môn Toán:

- Thứ 2 - Tiết 1
- Thứ 3 - Tiết 3
- Thứ 5 - Tiết 2
```

Nếu không tìm thấy:

```text
Không tìm thấy môn học này trong thời khóa biểu.
```

---

## 7. Yêu cầu 5: Thống kê thời khóa biểu

Chương trình thống kê thông tin từ danh sách môn học.

Ví dụ:

```text
===== THỐNG KÊ =====

Thứ 2: 4 tiết
Thứ 3: 5 tiết
Thứ 4: 3 tiết
Thứ 5: 6 tiết
Thứ 6: 4 tiết

Tổng số tiết trong tuần: 22

Ngày học nhiều nhất:
Thứ 5 - 6 tiết
```

Khuyến khích bổ sung:

```text
Môn xuất hiện nhiều nhất:
Toán - 5 tiết
```

---

## 8. Dữ liệu gợi ý

Có thể sử dụng danh sách lồng nhau:

```python
schedule = [
    ["Toán", "Văn", "Anh"],
    ["Lý", "Hóa", "Toán"],
    ["Tin", "Toán", "Anh"],
    ["Văn", "Lý"],
    ["Toán", "Tin"]
]
```

Danh sách tên các ngày:

```python
days = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6"
]
```

Ví dụ:

```python
print(days[0])
print(schedule[0])
```

Kết quả:

```text
Thứ 2
['Toán', 'Văn', 'Anh']
```

---

## 9. Yêu cầu kỹ thuật

Chương trình bắt buộc có:

* Menu Console.
* Vòng lặp `while` để điều khiển menu.
* Vòng lặp `for` để duyệt danh sách.
* `if / elif / else` để xử lý lựa chọn.
* Sử dụng `list` để lưu dữ liệu.
* Sử dụng `append()` để thêm môn học.
* Sử dụng `pop()` hoặc `remove()` để xóa môn học.
* Có ít nhất 3 hàm tự viết.

Ví dụ:

```python
def show_schedule():
    pass

def add_subject():
    pass

def delete_subject():
    pass

def search_subject():
    pass

def show_statistics():
    pass
```


---

## Kết quả cần đạt

Sau khi hoàn thành, chương trình phải cho phép người dùng thực hiện quy trình:

```text
Menu
  |
  +--> Xem thời khóa biểu
  |
  +--> Thêm môn học
  |
  +--> Xóa môn học
  |
  +--> Tìm môn học
  |
  +--> Thống kê
  |
  +--> Thoát
```

Mục tiêu chính của bài tập là giúp sinh viên biết cách kết hợp **vòng lặp, danh sách, điều kiện và hàm** để xây dựng một chương trình Console hoàn chỉnh.
