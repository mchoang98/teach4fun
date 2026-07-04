# Thực hành bài 10-1: Ngoại lệ và xử lý ngoại lệ

## Bài 1: Nhập tuổi an toàn

### Mô tả

Nhập tuổi người dùng. Nếu nhập không phải số nguyên, in `INVALID`. Nếu tuổi hợp lệ, in `AGE: <age>`.

### Input

* Một dòng dữ liệu tuổi.

### Output

`INVALID` hoặc `AGE: <age>`.

### Ràng buộc

* Nếu ép kiểu được, tuổi nằm trong khoảng `0` đến `120`.

### Ví dụ 1

Input:

```text
15
```

Output:

```text
AGE: 15
```

### Ví dụ 2

Input:

```text
abc
```

Output:

```text
INVALID
```

---

## Bài 2: Chia điểm nhóm

### Mô tả

Nhập tổng điểm và số thành viên. Nếu số thành viên bằng 0 hoặc dữ liệu không phải số, in `ERROR`. Ngược lại in điểm mỗi bạn, làm tròn 2 chữ số.

### Input

* Dòng 1: tổng điểm.
* Dòng 2: số thành viên.

### Output

`ERROR` hoặc điểm mỗi bạn.

### Ràng buộc

* `0 <= tong_diem <= 10000`
* `0 <= so_thanh_vien <= 100`

### Ví dụ

Input:

```text
85
4
```

Output:

```text
21.25
```

