# Thực hành bài 12-1: Clean Code

## Bài 1: Đổi tên biến khó hiểu

### Mô tả

Cho đoạn code sau:

```python
a = input()
b = int(input())
c = int(input())
print(a, b + c)
```

Hãy viết lại bằng tên biến rõ nghĩa để chương trình đọc tên học sinh, điểm bài 1, điểm bài 2 rồi in tổng điểm.

### Input

* Dòng 1: tên học sinh.
* Dòng 2: điểm bài 1.
* Dòng 3: điểm bài 2.

### Output

```text
<ten> <tong_diem>
```

### Ràng buộc

* `0 <= diem <= 10`

### Ví dụ

Input:

```text
An
8
9
```

Output:

```text
An 17
```

---

## Bài 2: Tách hàm cho dễ đọc

### Mô tả

Viết chương trình tính tiền đơn hàng. Cần tách ít nhất 2 hàm: một hàm tính tổng tiền và một hàm in hóa đơn.

### Input

* Dòng 1: tên món.
* Dòng 2: giá.
* Dòng 3: số lượng.

### Output

```text
<ten_mon> x<so_luong> = <tong_tien>
```

### Ràng buộc

* `0 <= gia <= 1000000`
* `1 <= so_luong <= 100`

### Ví dụ

Input:

```text
Tra sua
25000
2
```

Output:

```text
Tra sua x2 = 50000
```

