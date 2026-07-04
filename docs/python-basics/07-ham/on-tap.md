# Đề luyện 07: Hàm trong Python

## Quy định chung

* Mỗi bài phải viết ít nhất một hàm tự định nghĩa.
* Hàm cần có tên rõ nghĩa và trả về kết quả bằng `return` khi phù hợp.
* Phần nhập/xuất nên đặt ngoài hàm xử lý chính.

---

## Bài 1: Bộ tính điểm nhiệm vụ

### Mô tả

Viết hàm `mission_score(easy, hard, bonus)` tính điểm: nhiệm vụ dễ 5 điểm, nhiệm vụ khó 12 điểm, cộng thêm bonus. Chương trình nhập dữ liệu và in tổng điểm.

### Input

* Dòng 1: số nhiệm vụ dễ.
* Dòng 2: số nhiệm vụ khó.
* Dòng 3: điểm bonus.

### Output

```text
Tong diem: <diem>
```

### Ràng buộc

* `0 <= easy, hard <= 100`
* `0 <= bonus <= 1000`

### Ví dụ

Input:

```text
4
3
10
```

Output:

```text
Tong diem: 66
```

---

## Bài 2: Chuẩn hóa tên đội

### Mô tả

Viết hàm `team_name(raw)` nhận tên đội có thể thừa khoảng trắng và chữ hoa/thường lộn xộn. Trả về tên đã bỏ khoảng trắng hai đầu và viết hoa chữ cái đầu mỗi từ.

### Input

* Một dòng tên đội.

### Output

Tên đội sau chuẩn hóa.

### Ràng buộc

* Chuỗi dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
   code  warriors
```

Output:

```text
Code  Warriors
```

---

## Bài 3: Hàm kiểm tra vé hợp lệ

### Mô tả

Viết hàm `is_valid_ticket(age, paid)` trả về `True` nếu tuổi từ 12 trở lên và đã thanh toán. Input trạng thái thanh toán là `yes` hoặc `no`.

### Input

* Dòng 1: tuổi.
* Dòng 2: trạng thái thanh toán.

### Output

In `VALID` hoặc `INVALID`.

### Ràng buộc

* `1 <= age <= 100`

### Ví dụ

Input:

```text
13
yes
```

Output:

```text
VALID
```
