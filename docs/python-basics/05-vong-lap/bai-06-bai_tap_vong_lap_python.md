# Đề luyện 05B: Vòng lặp nâng cao

## Quy định chung

* Bài tập yêu cầu tư duy mô phỏng, không chỉ in dãy số có sẵn.
* Có thể dùng biến đếm, biến tổng, `break`, `continue` nếu cần.

---

## Bài 1: Quầy đổi phiếu thưởng

### Mô tả

Mỗi nhiệm vụ hoàn thành được một số điểm. Khi tổng điểm đạt ít nhất `target`, học sinh nhận quà và chương trình dừng đọc thêm nhiệm vụ. Hãy in số nhiệm vụ đã cần để đạt quà, hoặc `CHUA DAT` nếu hết nhiệm vụ vẫn chưa đủ.

### Input

* Dòng 1: số nhiệm vụ `n`.
* Dòng 2: điểm mục tiêu `target`.
* `n` dòng tiếp theo: điểm từng nhiệm vụ.

### Output

In số nhiệm vụ đã làm để đạt mục tiêu, hoặc `CHUA DAT`.

### Ràng buộc

* `1 <= n <= 100`
* `1 <= target <= 10000`
* `0 <= diem <= 1000`

### Ví dụ

Input:

```text
5
50
10
15
30
5
20
```

Output:

```text
3
```

---

## Bài 2: Vẽ banner lớp học

### Mô tả

Nhập chiều cao `h`. In banner tam giác số: dòng 1 có `1`, dòng 2 có `12`, dòng 3 có `123`, cứ thế đến `h`.

### Input

* Một số nguyên `h`.

### Output

`h` dòng tam giác số.

### Ràng buộc

* `1 <= h <= 9`

### Ví dụ

Input:

```text
4
```

Output:

```text
1
12
123
1234
```

---

## Bài 3: Bộ lọc số may mắn

### Mô tả

Trong đoạn từ `a` đến `b`, số may mắn là số chia hết cho 3 nhưng không chứa chữ số 0. Hãy in tất cả số may mắn, nếu không có thì in `NONE`.

### Input

* Dòng 1: `a`.
* Dòng 2: `b`.

### Output

Các số may mắn trên một dòng, cách nhau bởi dấu cách, hoặc `NONE`.

### Ràng buộc

* `1 <= a <= b <= 10000`

### Ví dụ

Input:

```text
8
18
```

Output:

```text
9 12 15 18
```
