# BÀI TẬP LỚN PYTHON CƠ BẢN

## Đề tài: Thời khóa biểu thông minh

### Mô tả bài toán

Viết chương trình Python chạy trên **Console** giúp học sinh quản lý thời khóa biểu trong tuần.

Bài tập tập trung áp dụng các kiến thức:

* Biến và kiểu dữ liệu
* `if / elif / else`
* Vòng lặp `for`, `while`
* Danh sách `list`
* Hàm `function`
* `input()` và `print()`

---

## Giao diện chương trình

```text
==================================
      THỜI KHÓA BIỂU THÔNG MINH
==================================

1. Xem thời khóa biểu theo ngày
2. Thêm môn học
3. Xóa môn học
4. Tìm kiếm môn học
5. Hiển thị toàn bộ thời khóa biểu
0. Thoát

----------------------------------
Nhập lựa chọn của bạn:
```

Menu phải tiếp tục hiển thị cho đến khi người dùng chọn `0. Thoát`.

---

## Yêu cầu 1: Xem thời khóa biểu theo ngày

Cho phép người dùng chọn một ngày để xem danh sách môn học.

Ví dụ:

```text
===== XEM THỜI KHÓA BIỂU =====

1. Thứ 2
2. Thứ 3
3. Thứ 4
4. Thứ 5
5. Thứ 6

Chọn ngày: 1

===== THỨ 2 =====
1. Toán
2. Ngữ Văn
3. Tiếng Anh
4. Tin học
```

---

## Yêu cầu 2: Thêm môn học

Cho phép người dùng chọn ngày và nhập tên môn học cần thêm.

Ví dụ:

```text
===== THÊM MÔN HỌC =====

Chọn ngày: 2
Nhập tên môn học: Hóa

Đã thêm môn Hóa vào Thứ 3.
```

Môn học mới phải được thêm vào danh sách của ngày tương ứng.

---

## Yêu cầu 3: Xóa môn học

Cho phép người dùng chọn ngày và chọn môn học cần xóa.

Ví dụ:

```text
===== XÓA MÔN HỌC =====

Chọn ngày: 1

1. Toán
2. Ngữ Văn
3. Tiếng Anh
4. Tin học

Nhập số thứ tự môn muốn xóa: 2

Đã xóa môn Ngữ Văn.
```

Danh sách môn học phải được cập nhật sau khi xóa.

---

## Yêu cầu 4: Tìm kiếm môn học

Cho phép người dùng nhập tên một môn học.

Chương trình sử dụng vòng lặp để tìm môn học đó trong toàn bộ thời khóa biểu.

Ví dụ:

```text
===== TÌM KIẾM MÔN HỌC =====

Nhập tên môn học: Toán

Kết quả:

- Thứ 2 - Tiết 1
- Thứ 3 - Tiết 3
- Thứ 5 - Tiết 2
```

Nếu không tìm thấy:

```text
Không tìm thấy môn học này.
```

---

## Yêu cầu 5: Hiển thị toàn bộ thời khóa biểu

Chương trình hiển thị tất cả môn học từ **Thứ 2 đến Thứ 6**.

Phải sử dụng vòng lặp để duyệt qua các ngày và các môn học.

Ví dụ:

```text
========== THỜI KHÓA BIỂU ==========

--- THỨ 2 ---
1. Toán
2. Ngữ Văn
3. Tiếng Anh

--- THỨ 3 ---
1. Vật Lý
2. Hóa Học
3. Toán

--- THỨ 4 ---
1. Tin học
2. Toán
3. Tiếng Anh

--- THỨ 5 ---
1. Ngữ Văn
2. Vật Lý

--- THỨ 6 ---
1. Toán
2. Tin học

=====================================
```

Nếu một ngày chưa có môn học:

```text
--- THỨ 6 ---
Chưa có môn học.
```

---

## Dữ liệu gợi ý

Sử dụng danh sách lồng nhau:

```python
days = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6"
]

schedule = [
    ["Toán", "Văn", "Anh"],
    ["Lý", "Hóa", "Toán"],
    ["Tin", "Toán", "Anh"],
    ["Văn", "Lý"],
    ["Toán", "Tin"]
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

## Yêu cầu kỹ thuật

Chương trình bắt buộc:

* Sử dụng `list` để lưu thời khóa biểu.
* Sử dụng `while` để xây dựng menu.
* Sử dụng `for` để duyệt danh sách.
* Sử dụng `if / elif / else` để xử lý lựa chọn.
* Sử dụng `append()` để thêm môn học.
* Sử dụng `pop()` hoặc `remove()` để xóa môn học.
* Có ít nhất 3 hàm tự viết.
* Kiểm tra lựa chọn không hợp lệ của người dùng.



### Kết quả cần đạt

```text
THỜI KHÓA BIỂU THÔNG MINH
          |
          +--- Xem theo ngày
          |
          +--- Thêm môn học
          |
          +--- Xóa môn học
          |
          +--- Tìm kiếm
          |
          +--- Hiển thị toàn bộ
          |
          +--- Thoát
```
