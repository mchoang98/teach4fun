# Thực hành bài 6-1: Chuỗi

## Bài 1: Thẻ tên sự kiện

### Mô tả

Nhập họ tên và tên sự kiện. In thẻ tên theo mẫu, đồng thời in số ký tự của họ tên. Khoảng trắng trong họ tên được tính là ký tự.

### Input

* Dòng 1: họ tên.
* Dòng 2: tên sự kiện.

### Output

```text
Xin chao <ho_ten>
Su kien: <su_kien>
Do dai ten: <so_ky_tu>
```

### Ràng buộc

* Họ tên và tên sự kiện dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
Nguyen An
Python Day
```

Output:

```text
Xin chao Nguyen An
Su kien: Python Day
Do dai ten: 9
```

---

## Bài 2: Cắt mã lớp

### Mô tả

Một mã lớp có dạng `PYTHON-7A1-2026`. Hãy in 6 ký tự đầu tiên và 4 ký tự cuối cùng của mã.

### Input

* Một dòng là mã lớp.

### Output

```text
Dau: <phan_dau>
Cuoi: <phan_cuoi>
```

### Ràng buộc

* Mã lớp dài ít nhất 10 ký tự.

### Ví dụ

Input:

```text
PYTHON-7A1-2026
```

Output:

```text
Dau: PYTHON
Cuoi: 2026
```

---

## Bài 3: Chữ cái đầu và cuối

### Mô tả

Nhập một từ. In ký tự đầu tiên, ký tự cuối cùng và độ dài của từ đó.

### Input

* Một dòng là một từ không chứa khoảng trắng.

### Output

```text
Dau tien: <ky_tu_dau>
Cuoi cung: <ky_tu_cuoi>
Do dai: <do_dai>
```

### Ràng buộc

* Từ dài từ 1 đến 50 ký tự.

### Ví dụ

Input:

```text
python
```

Output:

```text
Dau tien: p
Cuoi cung: n
Do dai: 6
```

---

## Bài 4: Ghép họ và tên

### Mô tả

Nhập họ và tên riêng trên hai dòng. Ghép hai chuỗi thành họ tên đầy đủ, có đúng một khoảng trắng ở giữa.

### Input

* Dòng 1: họ.
* Dòng 2: tên riêng.

### Output

```text
Ho ten: <ho_ten_day_du>
```

### Ràng buộc

* Họ và tên riêng dài từ 1 đến 50 ký tự.

### Ví dụ

Input:

```text
Nguyen
An
```

Output:

```text
Ho ten: Nguyen An
```

---

## Bài 5: Tách mã học sinh

### Mô tả

Một mã học sinh có dạng `HS2026A01`. Hãy in phần loại mã, năm nhập học và số thứ tự theo mẫu. Các phần nằm ở vị trí cố định trong chuỗi.

### Input

* Một dòng là mã học sinh.

### Output

```text
Loai ma: <loai_ma>
Nam: <nam>
So thu tu: <so_thu_tu>
```

### Ràng buộc

* Mã học sinh có đúng 9 ký tự.
* 2 ký tự đầu là phần loại mã.
* 4 ký tự tiếp theo là năm.
* 3 ký tự cuối là số thứ tự.

### Ví dụ

Input:

```text
HS2026A01
```

Output:

```text
Loai ma: HS
Nam: 2026
So thu tu: A01
```

---

## Bài 6: Tạo chữ ký ngắn

### Mô tả

Nhập họ và tên riêng. Tạo chữ ký ngắn bằng cách lấy ký tự đầu của họ, ký tự đầu của tên riêng, rồi ghép với dấu chấm `.` ở giữa.

### Input

* Dòng 1: họ.
* Dòng 2: tên riêng.

### Output

```text
Chu ky: <ky_tu_dau_ho>.<ky_tu_dau_ten>
```

### Ràng buộc

* Họ và tên riêng dài từ 1 đến 50 ký tự.
* Họ và tên riêng không bắt đầu bằng khoảng trắng.
* Phép lấy ký tự phân biệt chữ hoa và chữ thường.

### Ví dụ

Input:

```text
Nguyen
An
```

Output:

```text
Chu ky: N.A
```

---

## Bài 7: Đổi ký tự đầu

### Mô tả

Nhập một từ và một ký tự mới. Tạo từ mới bằng cách thay ký tự đầu tiên của từ bằng ký tự mới, các ký tự còn lại giữ nguyên.

### Input

* Dòng 1: một từ.
* Dòng 2: một ký tự mới.

### Output

```text
Tu moi: <tu_moi>
```

### Ràng buộc

* Từ dài từ 1 đến 50 ký tự và không chứa khoảng trắng.
* Ký tự mới có đúng 1 ký tự.

### Ví dụ

Input:

```text
Hello
Y
```

Output:

```text
Tu moi: Yello
```

---

## Bài 8: Thông tin câu lạc bộ

### Mô tả

Nhập tên câu lạc bộ và tên trường. In một câu giới thiệu đầy đủ, đồng thời in độ dài của tên câu lạc bộ.

### Input

* Dòng 1: tên câu lạc bộ.
* Dòng 2: tên trường.

### Output

```text
Cau lac bo <ten_cau_lac_bo> thuoc truong <ten_truong>
Do dai ten cau lac bo: <do_dai>
```

### Ràng buộc

* Tên câu lạc bộ và tên trường dài từ 1 đến 100 ký tự.
* Khoảng trắng trong tên câu lạc bộ được tính là ký tự.

### Ví dụ

Input:

```text
Lap trinh
Le Quy Don
```

Output:

```text
Cau lac bo Lap trinh thuoc truong Le Quy Don
Do dai ten cau lac bo: 9
```
