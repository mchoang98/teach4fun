# Thực hành bài 7-3: Hàm ẩn danh lambda

## Bài 1: Sắp xếp theo độ dài tên

### Mô tả

Nhập danh sách tên học sinh. Dùng `lambda` trong `sorted()` để sắp xếp tên theo độ dài tăng dần. Nếu bằng nhau, giữ thứ tự alphabet.

### Input

* Dòng 1: số tên `n`.
* Dòng 2: `n` tên, cách nhau bởi dấu cách.

### Output

Danh sách tên sau khi sắp xếp.

### Ràng buộc

* `1 <= n <= 100`
* Tên không chứa khoảng trắng.

### Ví dụ

Input:

```text
5
An Binh Chi Duong Ha
```

Output:

```text
An Ha Chi Binh Duong
```

---

## Bài 2: Lọc điểm đạt

### Mô tả

Nhập danh sách điểm. Dùng `filter()` và `lambda` để giữ lại các điểm từ 5 trở lên.

### Input

* Dòng 1: số điểm `n`.
* Dòng 2: `n` điểm.

### Output

Các điểm đạt, cách nhau bởi dấu cách; nếu không có in `NONE`.

### Ràng buộc

* `1 <= n <= 100`
* `0 <= diem <= 10`

### Ví dụ

Input:

```text
6
4 5 8 3 9 4.5
```

Output:

```text
5 8 9
```

