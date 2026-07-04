# Đề luyện 01: Làm quen Python

## Quy định chung

* Mỗi bài là một chương trình Python riêng.
* Không cần dùng kiến thức ngoài bài học đầu tiên, nhưng tên biến và câu in ra phải rõ nghĩa.
* Output cần đúng nội dung, có thể khác dấu câu nhỏ nếu vẫn dễ hiểu.

---

## Bài 1: Vé vào CLB lập trình

### Mô tả

CLB lập trình cần in vé chào mừng cho học sinh mới. Chương trình nhận tên học sinh, lớp và mục tiêu học Python trong tháng này, sau đó in thành một tấm vé 4 dòng.

### Input

* Dòng 1: tên học sinh.
* Dòng 2: tên lớp.
* Dòng 3: mục tiêu học Python.

### Output

In 4 dòng:

```text
=== VE CLB PYTHON ===
Hoc sinh: <ten>
Lop: <lop>
Muc tieu: <muc_tieu>
```

### Ràng buộc

* Tên và lớp dài không quá 50 ký tự.
* Mục tiêu dài không quá 100 ký tự.

### Ví dụ

Input:

```text
Minh Anh
7A1
lam game doan so
```

Output:

```text
=== VE CLB PYTHON ===
Hoc sinh: Minh Anh
Lop: 7A1
Muc tieu: lam game doan so
```

---

## Bài 2: Bảng thông báo 3 dòng

### Mô tả

Giáo viên nhập 3 thông báo ngắn. Chương trình in lại mỗi thông báo theo mẫu có số thứ tự.

### Input

* 3 dòng, mỗi dòng là một thông báo.

### Output

In 3 dòng theo mẫu:

```text
1. <thong_bao_1>
2. <thong_bao_2>
3. <thong_bao_3>
```

### Ràng buộc

* Mỗi thông báo dài từ 1 đến 80 ký tự.

### Ví dụ

Input:

```text
Mang laptop
Cai Python
Thu chay file dau tien
```

Output:

```text
1. Mang laptop
2. Cai Python
3. Thu chay file dau tien
```

---

## Bài 3: Poster console

### Mô tả

Một sự kiện cần poster chữ trong terminal. Nhập tên sự kiện và khẩu hiệu, in ra poster có khung bằng dấu `=`.

### Input

* Dòng 1: tên sự kiện.
* Dòng 2: khẩu hiệu.

### Output

```text
====================
<ten_su_kien>
<khau_hieu>
====================
```

### Ràng buộc

* Tên sự kiện và khẩu hiệu không rỗng.
* Không cần tự căn giữa chữ.

### Ví dụ

Input:

```text
Python Friday
Code nho vui lon
```

Output:

```text
====================
Python Friday
Code nho vui lon
====================
```
