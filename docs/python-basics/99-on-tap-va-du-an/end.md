# Đề kiểm tra cuối khóa: Hàm và xử lý dữ liệu

## Quy định chung

* Mỗi bài cần có ít nhất một hàm xử lý chính.
* Không hard-code dữ liệu ví dụ trong chương trình.
* Ưu tiên code dễ đọc, tên biến rõ nghĩa.

---

## Bài 1: Bộ lọc email lớp học

### Mô tả

Viết hàm lọc ra các email thuộc domain trường học `@school.vn`.

### Input

* Dòng 1: số email `n`.
* Dòng 2: `n` email.

### Output

Các email hợp lệ, cách nhau bởi dấu cách; nếu không có in `NONE`.

### Ràng buộc

* `1 <= n <= 200`
* Email không chứa khoảng trắng.

### Ví dụ

Input:

```text
4
a@gmail.com b@school.vn c@school.vn d@yahoo.com
```

Output:

```text
b@school.vn c@school.vn
```

---

## Bài 2: Thống kê điểm theo nhóm

### Mô tả

Mỗi dòng gồm tên nhóm và điểm. Hãy tính điểm trung bình của từng nhóm, in theo thứ tự nhóm xuất hiện lần đầu.

### Input

* Dòng 1: số lượt chấm `n`.
* `n` dòng tiếp theo: `<nhom> <diem>`.

### Output

Mỗi dòng: `<nhom>: <diem_tb>` làm tròn 2 chữ số.

### Ràng buộc

* `1 <= n <= 200`
* `0 <= diem <= 10`

### Ví dụ

Input:

```text
5
A 8
B 7
A 10
C 6
B 9
```

Output:

```text
A: 9.00
B: 8.00
C: 6.00
```

---

## Bài 3: Tìm cặp quà vừa ngân sách

### Mô tả

Nhập danh sách giá quà và ngân sách `target`. Đếm số cặp quà khác vị trí có tổng đúng bằng `target`.

### Input

* Dòng 1: số món `n`.
* Dòng 2: `n` giá tiền.
* Dòng 3: ngân sách `target`.

### Output

Số cặp thỏa mãn.

### Ràng buộc

* `2 <= n <= 1000`
* `0 <= gia, target <= 1000000`

### Ví dụ

Input:

```text
5
10 20 30 20 40
50
```

Output:

```text
3
```

---

## Bài 4: Từ khóa nổi bật

### Mô tả

Nhập một đoạn gồm `n` từ. Tìm từ xuất hiện nhiều nhất. Nếu hòa, chọn từ có thứ tự alphabet nhỏ hơn.

### Input

* Dòng 1: số từ `n`.
* Dòng 2: `n` từ.

### Output

```text
<tu> <so_lan>
```

### Ràng buộc

* `1 <= n <= 1000`
* Từ chỉ gồm chữ cái thường không dấu.

### Ví dụ

Input:

```text
7
code python code ai python code ai
```

Output:

```text
code 3
```
