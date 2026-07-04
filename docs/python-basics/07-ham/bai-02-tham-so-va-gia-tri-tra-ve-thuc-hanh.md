# Thực hành bài 7-2: Tham số và giá trị trả về

## Bài 1: Tính điểm năng lượng

### Mô tả

Viết hàm `energy(sleep_hours, study_minutes)` trả về điểm năng lượng theo công thức:

```text
sleep_hours * 10 + study_minutes // 10
```

### Input

* Dòng 1: số giờ ngủ.
* Dòng 2: số phút học.

### Output

Điểm năng lượng.

### Ràng buộc

* `0 <= sleep_hours <= 24`
* `0 <= study_minutes <= 1000`

### Ví dụ

Input:

```text
7
90
```

Output:

```text
79
```

---

## Bài 2: Hóa đơn sau giảm giá

### Mô tả

Viết hàm `final_price(price, discount)` trả về số tiền sau khi giảm `discount` phần trăm.

### Input

* Dòng 1: giá gốc.
* Dòng 2: phần trăm giảm giá.

### Output

Số tiền sau giảm, làm tròn 2 chữ số.

### Ràng buộc

* `0 <= price <= 10000000`
* `0 <= discount <= 100`

### Ví dụ

Input:

```text
200000
15
```

Output:

```text
170000.00
```

