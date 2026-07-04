# Đề luyện 09: Module và dự án nhỏ

## Quy định chung

* Bài yêu cầu tách file thì cần nêu rõ tên file trong phần nộp bài.
* Không đặt tên file trùng module chuẩn như `random.py`, `math.py`, `json.py`.
* Có thể dùng thư viện chuẩn của Python.

---

## Bài 1: Module tính phí sự kiện

### Mô tả

Tạo module `event_fee.py` có hàm `total_fee(people, price, room_fee)` trả về tổng phí sự kiện. File `main.py` nhập dữ liệu và in kết quả.

### Input

* Dòng 1: số người.
* Dòng 2: giá vé mỗi người.
* Dòng 3: phí thuê phòng.

### Output

```text
Tong phi: <tong>
```

### Ràng buộc

* `1 <= people <= 500`
* `0 <= price, room_fee <= 10000000`

### Ví dụ

Input:

```text
30
50000
300000
```

Output:

```text
Tong phi: 1800000
```

---

## Bài 2: Module tạo mã may mắn

### Mô tả

Dùng module `random` để tạo mã may mắn gồm một chữ cái đầu của tên và một số từ 100 đến 999. Vì kết quả ngẫu nhiên không cố định, chương trình chỉ cần đúng định dạng.

### Input

* Một dòng tên, không chứa khoảng trắng.

### Output

Một mã dạng `<chu_cai_dau><so>`.

### Ràng buộc

* Tên dài từ 1 đến 30 ký tự.
* Số ngẫu nhiên nằm trong `[100, 999]`.

### Ví dụ

Input:

```text
Linh
```

Output mẫu:

```text
L427
```

---

## Bài 3: Package xử lý điểm

### Mô tả

Tạo package `grade_tools` có file `summary.py` chứa hàm `average(scores)`. File `main.py` nhập danh sách điểm và in điểm trung bình làm tròn 2 chữ số.

### Input

* Dòng 1: số điểm `n`.
* Dòng 2: `n` điểm số.

### Output

```text
Diem TB: <avg>
```

### Ràng buộc

* `1 <= n <= 100`
* `0 <= diem <= 10`

### Ví dụ

Input:

```text
3
8 7.5 9
```

Output:

```text
Diem TB: 8.17
```
