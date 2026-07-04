# Đề luyện 08A: List

## Quy định chung

* Dữ liệu nhiều phần tử được nhập trên một dòng, cách nhau bởi dấu cách.
* Dùng list để lưu và xử lý dữ liệu.

---

## Bài 1: Playlist không quá dài

### Mô tả

Nhập danh sách thời lượng bài hát theo phút. Hãy in tổng thời lượng và số bài có thời lượng không quá 4 phút.

### Input

* Dòng 1: số bài hát `n`.
* Dòng 2: `n` số nguyên là thời lượng.

### Output

```text
Tong: <tong>
Bai ngan: <dem>
```

### Ràng buộc

* `1 <= n <= 100`
* `1 <= thoi_luong <= 30`

### Ví dụ

Input:

```text
5
3 5 4 7 2
```

Output:

```text
Tong: 21
Bai ngan: 3
```

---

## Bài 2: Xếp hàng ưu tiên

### Mô tả

Nhập danh sách tên học sinh trong hàng. Một học sinh được ưu tiên chuyển lên đầu hàng. Nếu tên không có trong danh sách, giữ nguyên hàng.

### Input

* Dòng 1: số học sinh `n`.
* Dòng 2: `n` tên, cách nhau bởi dấu cách.
* Dòng 3: tên học sinh ưu tiên.

### Output

Danh sách sau xử lý trên một dòng.

### Ràng buộc

* `1 <= n <= 50`
* Tên không chứa khoảng trắng.

### Ví dụ

Input:

```text
4
An Binh Chi Dung
Chi
```

Output:

```text
Chi An Binh Dung
```

---

## Bài 3: Kho sticker

### Mô tả

Nhập danh sách mã sticker. Hãy in mã xuất hiện nhiều nhất. Nếu có nhiều mã cùng số lần xuất hiện, in mã xuất hiện trước trong danh sách.

### Input

* Dòng 1: số sticker `n`.
* Dòng 2: `n` mã sticker.

### Output

Mã sticker phổ biến nhất.

### Ràng buộc

* `1 <= n <= 200`
* Mã không chứa khoảng trắng.

### Ví dụ

Input:

```text
6
A B A C B A
```

Output:

```text
A
```
