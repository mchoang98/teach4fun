# Đề kiểm tra giữa khóa: Toán tử, điều kiện, vòng lặp

## Quy định chung

* Thời gian gợi ý: 60-75 phút.
* Mỗi bài là một chương trình riêng.
* Không dùng thư viện ngoài Python chuẩn.
* Chú ý đúng format Input/Output.

---

## Bài 1: Chuyến xe lớp học

### Mô tả

Một lớp đi tham quan. Mỗi xe chở tối đa `k` học sinh. Nhập số học sinh `n` và sức chứa `k`, tính số xe ít nhất cần thuê.

### Input

* Dòng 1: `n`.
* Dòng 2: `k`.

### Output

```text
So xe: <x>
```

### Ràng buộc

* `1 <= n <= 1000`
* `1 <= k <= 60`

### Ví dụ

Input:

```text
123
45
```

Output:

```text
So xe: 3
```

---

## Bài 2: Cửa hàng nhiệm vụ

### Mô tả

Người chơi có `coin` xu. Một vật phẩm có giá `price`. Nếu người chơi là thành viên VIP thì được giảm 20%. Hãy in `BUY` nếu đủ xu, ngược lại in `WAIT`.

### Input

* Dòng 1: số xu.
* Dòng 2: giá vật phẩm.
* Dòng 3: trạng thái VIP, `yes` hoặc `no`.

### Output

`BUY` hoặc `WAIT`.

### Ràng buộc

* `0 <= coin, price <= 1000000`

### Ví dụ

Input:

```text
80
100
yes
```

Output:

```text
BUY
```

---

## Bài 3: Đếm ngày học bền bỉ

### Mô tả

Nhập số phút học của `n` ngày. Một ngày được xem là bền bỉ nếu học ít nhất 25 phút. Hãy in chuỗi ngày bền bỉ dài nhất liên tiếp.

### Input

* Dòng 1: `n`.
* Dòng 2: `n` số phút học.

### Output

Một số nguyên là độ dài streak dài nhất.

### Ràng buộc

* `1 <= n <= 365`
* `0 <= phut <= 1000`

### Ví dụ

Input:

```text
8
30 40 10 25 26 27 0 50
```

Output:

```text
3
```

---

## Bài 4: Mã số đối xứng đặc biệt

### Mô tả

Trong đoạn `[a, b]`, hãy đếm các số vừa là số đối xứng vừa chia hết cho 3.

### Input

* Dòng 1: `a`.
* Dòng 2: `b`.

### Output

Số lượng số thỏa mãn.

### Ràng buộc

* `1 <= a <= b <= 100000`

### Ví dụ

Input:

```text
10
200
```

Output:

```text
6
```
