# Đề luyện 08B: Dictionary

## Quy định chung

* Dùng dictionary để lưu dữ liệu dạng khóa - giá trị.
* Không dùng dữ liệu cố định trong code nếu đề yêu cầu nhập.

---

## Bài 1: Bảng điểm mini

### Mô tả

Nhập điểm của `n` học sinh. Sau đó nhập tên cần tra cứu. Nếu có tên, in điểm; nếu không có, in `NOT FOUND`.

### Input

* Dòng 1: số học sinh `n`.
* `n` dòng tiếp theo: `<ten> <diem>`.
* Dòng cuối: tên cần tra cứu.

### Output

Điểm của học sinh hoặc `NOT FOUND`.

### Ràng buộc

* `1 <= n <= 100`
* Tên không chứa khoảng trắng.
* `0 <= diem <= 10`

### Ví dụ

Input:

```text
3
An 8.5
Binh 7
Chi 9
Binh
```

Output:

```text
7
```

---

## Bài 2: Tủ đồ thất lạc

### Mô tả

Mỗi món đồ có mã và tên chủ. Hãy nhập danh sách đồ thất lạc, sau đó nhập mã đồ cần tìm chủ.

### Input

* Dòng 1: số món đồ `n`.
* `n` dòng tiếp theo: `<ma_do> <ten_chu>`.
* Dòng cuối: mã đồ cần tìm.

### Output

Tên chủ hoặc `UNKNOWN`.

### Ràng buộc

* `1 <= n <= 100`
* Mã đồ và tên chủ không chứa khoảng trắng.

### Ví dụ

Input:

```text
3
B01 An
B02 Linh
C09 Khoa
C09
```

Output:

```text
Khoa
```

---

## Bài 3: Đếm phản ứng lớp học

### Mô tả

Nhập `n` phản ứng của học sinh sau tiết học, ví dụ `like`, `ok`, `confused`. Hãy đếm mỗi loại và in theo thứ tự lần đầu xuất hiện.

### Input

* Dòng 1: `n`.
* Dòng 2: `n` phản ứng.

### Output

Mỗi dòng: `<phan_ung>: <so_lan>`.

### Ràng buộc

* `1 <= n <= 200`
* Phản ứng không chứa khoảng trắng.

### Ví dụ

Input:

```text
6
like ok like confused ok like
```

Output:

```text
like: 3
ok: 2
confused: 1
```
