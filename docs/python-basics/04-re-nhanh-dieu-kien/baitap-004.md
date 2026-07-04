# Đề luyện 04: Rẽ nhánh và điều kiện

## Quy định chung

* Mỗi bài cần dùng `if`, `elif`, `else` hoặc `match case` khi phù hợp.
* Output phải đúng chữ in hoa/in thường như đề.

---

## Bài 1: Chọn phòng học thông minh

### Mô tả

Một lớp chọn phòng học theo số học sinh và nhu cầu máy chiếu. Phòng `LAB` dùng khi cần máy chiếu hoặc số học sinh trên 35. Phòng `CLASS` dùng cho lớp thường từ 16 đến 35 học sinh. Phòng `SMALL` dùng cho nhóm 15 học sinh trở xuống.

### Input

* Dòng 1: số học sinh `n`.
* Dòng 2: cần máy chiếu hay không, `yes` hoặc `no`.

### Output

In một trong ba giá trị: `LAB`, `CLASS`, `SMALL`.

### Ràng buộc

* `1 <= n <= 60`

### Ví dụ

Input:

```text
28
yes
```

Output:

```text
LAB
```

---

## Bài 2: Cảnh báo thời tiết cho sự kiện

### Mô tả

Sự kiện ngoài trời dựa vào nhiệt độ và trạng thái mưa. Nếu mưa thì in `DOI LICH`. Nếu không mưa và nhiệt độ từ 18 đến 32 thì in `TO CHUC`. Các trường hợp còn lại in `CHUYEN TRONG NHA`.

### Input

* Dòng 1: nhiệt độ, số nguyên.
* Dòng 2: trạng thái mưa, `rain` hoặc `clear`.

### Output

Một dòng kết luận.

### Ràng buộc

* `-10 <= nhiet_do <= 50`

### Ví dụ

Input:

```text
34
clear
```

Output:

```text
CHUYEN TRONG NHA
```

---

## Bài 3: Xếp hạng nhiệm vụ tuần

### Mô tả

Học sinh có điểm hoàn thành từ 0 đến 100. Nếu điểm từ 90 trở lên: `S`. Từ 75 đến dưới 90: `A`. Từ 60 đến dưới 75: `B`. Từ 40 đến dưới 60: `C`. Dưới 40: `D`.

### Input

* Một số nguyên `score`.

### Output

In hạng tương ứng.

### Ràng buộc

* `0 <= score <= 100`

### Ví dụ

Input:

```text
83
```

Output:

```text
A
```

---

## Bài 4: Menu máy bán hàng

### Mô tả

Máy bán hàng nhận mã món: `A` là nước suối, `B` là trà, `C` là bánh. Mã khác in `INVALID`.

### Input

* Một ký tự mã món.

### Output

In tên món: `NUOC SUOI`, `TRA`, `BANH` hoặc `INVALID`.

### Ràng buộc

* Mã món là một ký tự chữ cái.

### Ví dụ

Input:

```text
B
```

Output:

```text
TRA
```
