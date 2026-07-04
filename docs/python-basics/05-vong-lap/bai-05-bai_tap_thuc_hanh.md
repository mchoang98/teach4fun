# Đề luyện 05A: Vòng lặp thực hành tại lớp

## Quy định chung

* Dùng `for` hoặc `while` đúng tình huống.
* Không nhập thừa dữ liệu ngoài phần Input.
* Với bài cần nhiều dòng output, in đúng thứ tự.

---

## Bài 1: Nhật ký streak học tập

### Mô tả

Trong `n` ngày, mỗi ngày học sinh nhập số phút học. Hãy đếm số ngày học từ 30 phút trở lên và tính tổng phút học.

### Input

* Dòng 1: số ngày `n`.
* `n` dòng tiếp theo: số phút học mỗi ngày.

### Output

```text
Tong phut: <tong>
Ngay dat streak: <dem>
```

### Ràng buộc

* `1 <= n <= 30`
* `0 <= phut <= 500`

### Ví dụ

Input:

```text
5
20
45
30
0
60
```

Output:

```text
Tong phut: 155
Ngay dat streak: 3
```

---

## Bài 2: Mật mã thang máy

### Mô tả

Một thang máy chỉ mở khi nhập đúng mã. Người dùng có tối đa `k` lượt thử. In `OPEN` nếu có lần nhập đúng, nếu hết lượt vẫn sai thì in `LOCKED`.

### Input

* Dòng 1: mã đúng.
* Dòng 2: số lượt thử `k`.
* `k` dòng tiếp theo: mã người dùng nhập.

### Output

In `OPEN` hoặc `LOCKED`.

### Ràng buộc

* Mã là chuỗi không có khoảng trắng, dài không quá 20 ký tự.
* `1 <= k <= 10`

### Ví dụ

Input:

```text
py2026
3
abc
py2025
py2026
```

Output:

```text
OPEN
```

---

## Bài 3: In lịch tưới cây

### Mô tả

Một vườn cây tưới vào các ngày cách nhau `step` ngày, bắt đầu từ ngày `start` đến hết ngày `end`. Hãy in các ngày cần tưới trên một dòng, cách nhau bởi dấu cách.

### Input

* Dòng 1: `start`.
* Dòng 2: `end`.
* Dòng 3: `step`.

### Output

Các ngày cần tưới.

### Ràng buộc

* `1 <= start <= end <= 365`
* `1 <= step <= 30`

### Ví dụ

Input:

```text
2
10
3
```

Output:

```text
2 5 8
```
