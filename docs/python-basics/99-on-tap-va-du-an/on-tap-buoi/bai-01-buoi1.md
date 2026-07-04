# Đề dự án buổi 1: Quản lý thiết bị lớp học

## Quy định chung

* Bài này thay thế đề tài cũ bằng bối cảnh lớp học, phù hợp học sinh mới học Python cơ bản.
* Có thể làm bằng list/dictionary, chưa cần OOP.
* Output cần đúng format từng bài.

---

## Bài 1: Danh sách thiết bị mượn

### Mô tả

Nhập danh sách thiết bị được mượn trong lớp, mỗi thiết bị có mã và tên người mượn. Sau đó nhập mã thiết bị cần tra cứu.

### Input

* Dòng 1: số thiết bị `n`.
* `n` dòng tiếp theo: `<ma_thiet_bi> <nguoi_muon>`.
* Dòng cuối: mã cần tra cứu.

### Output

Tên người mượn hoặc `KHONG TIM THAY`.

### Ràng buộc

* `1 <= n <= 100`
* Mã và tên không chứa khoảng trắng.

### Ví dụ

Input:

```text
3
LAP01 An
MIC02 Binh
CAM03 Chi
MIC02
```

Output:

```text
Binh
```

---

## Bài 2: Cảnh báo thiết bị quá hạn

### Mô tả

Mỗi thiết bị có số ngày đã mượn. Nếu mượn quá 7 ngày, thiết bị bị quá hạn. Hãy in các mã quá hạn theo thứ tự nhập.

### Input

* Dòng 1: số thiết bị `n`.
* `n` dòng tiếp theo: `<ma_thiet_bi> <so_ngay>`.

### Output

Các mã quá hạn, mỗi mã một dòng; nếu không có in `OK`.

### Ràng buộc

* `1 <= n <= 100`
* `0 <= so_ngay <= 365`

### Ví dụ

Input:

```text
4
LAP01 3
MIC02 9
CAM03 8
TAB04 7
```

Output:

```text
MIC02
CAM03
```

---

## Bài 3: Thống kê loại thiết bị

### Mô tả

Mã thiết bị bắt đầu bằng loại: `LAP`, `MIC`, `CAM`, `TAB`. Nhập danh sách mã thiết bị và đếm số lượng từng loại xuất hiện.

### Input

* Dòng 1: số thiết bị `n`.
* Dòng 2: `n` mã thiết bị.

### Output

In 4 dòng theo thứ tự `LAP`, `MIC`, `CAM`, `TAB`:

```text
LAP: <so_luong>
MIC: <so_luong>
CAM: <so_luong>
TAB: <so_luong>
```

### Ràng buộc

* `1 <= n <= 200`
* Mỗi mã bắt đầu bằng một trong bốn tiền tố trên.

### Ví dụ

Input:

```text
5
LAP01 MIC02 LAP03 TAB04 CAM05
```

Output:

```text
LAP: 2
MIC: 1
CAM: 1
TAB: 1
```
