# Đề luyện 08C: Set và Tuple

## Quy định chung

* Dùng set khi cần loại trùng hoặc so sánh nhóm.
* Dùng tuple cho dữ liệu cố định theo cặp/bộ.

---

## Bài 1: Hai câu lạc bộ chung thành viên

### Mô tả

Nhập thành viên CLB Python và CLB Robotics. In danh sách thành viên tham gia cả hai CLB theo thứ tự alphabet.

### Input

* Dòng 1: số thành viên CLB Python `n`.
* Dòng 2: `n` tên.
* Dòng 3: số thành viên CLB Robotics `m`.
* Dòng 4: `m` tên.

### Output

Tên thành viên chung, cách nhau bởi dấu cách; nếu không có in `NONE`.

### Ràng buộc

* `1 <= n, m <= 100`
* Tên không chứa khoảng trắng.

### Ví dụ

Input:

```text
4
An Binh Chi Dung
3
Chi Khoa An
```

Output:

```text
An Chi
```

---

## Bài 2: Tọa độ kho báu

### Mô tả

Nhập hai tọa độ dạng `(x, y)` của robot và kho báu. Tính khoảng cách Manhattan: `abs(x1 - x2) + abs(y1 - y2)`.

### Input

* Dòng 1: `x1 y1`.
* Dòng 2: `x2 y2`.

### Output

Một số nguyên là khoảng cách.

### Ràng buộc

* `-1000 <= x, y <= 1000`

### Ví dụ

Input:

```text
2 3
-1 7
```

Output:

```text
7
```

---

## Bài 3: Môn học chưa đăng ký

### Mô tả

Nhập danh sách môn học nhà trường mở và danh sách môn học học sinh đã đăng ký. In các môn chưa đăng ký theo alphabet.

### Input

* Dòng 1: số môn mở `n`.
* Dòng 2: `n` mã môn.
* Dòng 3: số môn đã đăng ký `m`.
* Dòng 4: `m` mã môn.

### Output

Các mã môn chưa đăng ký, hoặc `NONE`.

### Ràng buộc

* `1 <= m <= n <= 50`

### Ví dụ

Input:

```text
5
PY JS HTML CSS SQL
2
PY CSS
```

Output:

```text
HTML JS SQL
```
