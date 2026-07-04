# Đề luyện 03: Toán tử trong Python

## Quy định chung

* Dùng toán tử số học, so sánh, logic hoặc gán mở rộng phù hợp.
* Không dùng list, vòng lặp hoặc hàm tự viết nếu bài chưa yêu cầu.

---

## Bài 1: Máy tính combo căn tin

### Mô tả

Một combo gồm nước và bánh. Nếu mua từ 3 combo trở lên thì được giảm thêm một khoản cố định cho mỗi combo. Tính tổng tiền phải trả.

### Input

* Dòng 1: giá nước.
* Dòng 2: giá bánh.
* Dòng 3: số combo.
* Dòng 4: tiền giảm mỗi combo nếu đủ điều kiện.

### Output

```text
Tong tien: <tong>
```

### Ràng buộc

* Tất cả giá trị là số nguyên không âm.
* `1 <= so_combo <= 100`
* Chỉ giảm giá khi `so_combo >= 3`.

### Ví dụ

Input:

```text
12000
15000
4
2000
```

Output:

```text
Tong tien: 100000
```

---

## Bài 2: Kiểm tra pin robot

### Mô tả

Robot cần ít nhất `n` phần trăm pin và không được ở chế độ khóa để bắt đầu chạy. Hãy kiểm tra robot có được phép chạy không.

### Input

* Dòng 1: pin hiện tại, số nguyên.
* Dòng 2: pin tối thiểu, số nguyên.
* Dòng 3: trạng thái khóa, `yes` hoặc `no`.

### Output

In `READY` nếu robot được chạy, ngược lại in `WAIT`.

### Ràng buộc

* `0 <= pin_hien_tai, pin_toi_thieu <= 100`
* Trạng thái khóa chỉ là `yes` hoặc `no`.

### Ví dụ

Input:

```text
65
50
no
```

Output:

```text
READY
```

---

## Bài 3: Mã ghế rạp phim

### Mô tả

Ghế trong rạp được đánh số từ 1. Mỗi hàng có `k` ghế. Với số ghế `s`, hãy tính ghế đó nằm ở hàng nào và vị trí thứ mấy trong hàng.

### Input

* Dòng 1: số ghế `s`.
* Dòng 2: số ghế mỗi hàng `k`.

### Output

```text
Hang <hang>, ghe <vi_tri>
```

### Ràng buộc

* `1 <= s <= 10000`
* `1 <= k <= 50`

### Ví dụ

Input:

```text
27
10
```

Output:

```text
Hang 3, ghe 7
```

---

## Bài 4: Điểm thưởng nhiệm vụ

### Mô tả

Một học sinh làm `a` nhiệm vụ dễ, `b` nhiệm vụ khó. Nhiệm vụ dễ được 5 điểm, nhiệm vụ khó được 12 điểm. Nếu tổng điểm từ 100 trở lên, học sinh nhận huy hiệu.

### Input

* Dòng 1: số nhiệm vụ dễ.
* Dòng 2: số nhiệm vụ khó.

### Output

Dòng 1 in tổng điểm. Dòng 2 in `HUY HIEU` hoặc `CHUA DAT`.

### Ràng buộc

* `0 <= a, b <= 100`

### Ví dụ

Input:

```text
8
6
```

Output:

```text
112
HUY HIEU
```
