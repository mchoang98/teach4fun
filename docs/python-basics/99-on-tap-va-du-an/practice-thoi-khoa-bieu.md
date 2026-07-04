# Đề thực hành dự án: Thời khóa biểu thông minh

## Quy định chung

* Đây là bài dự án console, có thể làm trong 1-2 buổi.
* Chương trình cần đọc dữ liệu từ input, không dùng dữ liệu mẫu cố định.
* Output đúng format để giáo viên dễ kiểm tra.

---

## Bài 1: In thời khóa biểu một ngày

### Mô tả

Nhập tên ngày và danh sách môn học trong ngày. In thời khóa biểu theo số tiết.

### Input

* Dòng 1: tên ngày.
* Dòng 2: số tiết `n`.
* `n` dòng tiếp theo: tên môn học.

### Output

Dòng đầu: `TKB <ngay>`.
Các dòng sau: `Tiet <i>: <mon>`.

### Ràng buộc

* `1 <= n <= 12`
* Tên môn dài không quá 50 ký tự.

### Ví dụ

Input:

```text
Thu Hai
3
Toan
Python
The duc
```

Output:

```text
TKB Thu Hai
Tiet 1: Toan
Tiet 2: Python
Tiet 3: The duc
```

---

## Bài 2: Đếm môn học nặng

### Mô tả

Một môn được xem là nặng nếu xuất hiện từ 2 tiết trở lên trong ngày. Hãy in các môn nặng theo thứ tự xuất hiện lần đầu.

### Input

* Dòng 1: số tiết `n`.
* `n` dòng tiếp theo: tên môn.

### Output

Các môn nặng, mỗi môn một dòng; nếu không có in `NONE`.

### Ràng buộc

* `1 <= n <= 12`

### Ví dụ

Input:

```text
5
Toan
Python
Toan
Van
Python
```

Output:

```text
Toan
Python
```

---

## Bài 3: Gợi ý chuẩn bị cặp sách

### Mô tả

Mỗi môn cần một số quyển vở. Nhập danh sách môn trong ngày và bảng số vở cần cho từng môn. Tính tổng số vở cần mang.

### Input

* Dòng 1: số môn trong bảng `m`.
* `m` dòng tiếp theo: `<mon> <so_vo>`.
* Dòng tiếp theo: số tiết `n`.
* `n` dòng tiếp theo: tên môn trong ngày.

### Output

```text
Tong vo can mang: <tong>
```

### Ràng buộc

* `1 <= m, n <= 20`
* `0 <= so_vo <= 10`
* Môn trong ngày luôn có trong bảng.

### Ví dụ

Input:

```text
3
Toan 2
Python 1
Van 1
4
Toan
Python
Toan
Van
```

Output:

```text
Tong vo can mang: 6
```
