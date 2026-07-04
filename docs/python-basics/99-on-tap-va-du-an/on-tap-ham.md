# Đề luyện tổng hợp: Hàm

## Quy định chung

* Mỗi bài phải viết hàm theo tên đề bài gợi ý.
* Chương trình chính chỉ nhập dữ liệu, gọi hàm và in kết quả.

---

## Bài 1: `calc_progress(done, total)`

### Mô tả

Hàm trả về phần trăm hoàn thành nhiệm vụ. Nếu `total = 0`, trả về 0.

### Input

* Dòng 1: số nhiệm vụ đã xong.
* Dòng 2: tổng số nhiệm vụ.

### Output

Phần trăm hoàn thành, làm tròn 2 chữ số.

### Ràng buộc

* `0 <= done <= total <= 1000`

### Ví dụ

Input:

```text
7
10
```

Output:

```text
70.00
```

---

## Bài 2: `make_slug(title)`

### Mô tả

Hàm nhận tiêu đề không dấu, chuyển thành chữ thường và thay khoảng trắng bằng dấu `-`.

### Input

* Một dòng tiêu đề.

### Output

Slug sau xử lý.

### Ràng buộc

* Tiêu đề dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
Python Basic Project
```

Output:

```text
python-basic-project
```

---

## Bài 3: `count_pass(scores, threshold)`

### Mô tả

Hàm đếm số điểm lớn hơn hoặc bằng ngưỡng đạt.

### Input

* Dòng 1: số điểm `n`.
* Dòng 2: `n` điểm.
* Dòng 3: ngưỡng đạt.

### Output

Số lượng điểm đạt.

### Ràng buộc

* `1 <= n <= 200`
* `0 <= diem, threshold <= 10`

### Ví dụ

Input:

```text
5
6 8 4 9 7
7
```

Output:

```text
3
```
