# Thực hành bài 6-2: Phương thức xử lý chuỗi

## Bài 1: Làm sạch tên đăng nhập

### Mô tả

Nhập một tên đăng nhập có thể thừa khoảng trắng ở đầu và cuối, đồng thời có thể chứa chữ hoa. Hãy xóa khoảng trắng hai đầu và chuyển toàn bộ tên đăng nhập về chữ thường.

### Input

* Một dòng là tên đăng nhập.

### Output

In một dòng là tên đăng nhập sau khi làm sạch.

### Ràng buộc

* Tên đăng nhập dài từ 1 đến 100 ký tự tính cả khoảng trắng.

### Ví dụ

Input:

```text
   CodeMaster   
```

Output:

```text
codemaster
```

---

## Bài 2: Tạo hashtag lớp học

### Mô tả

Nhập tên chủ đề gồm nhiều từ. Hãy tạo hashtag bằng cách xóa khoảng trắng ở đầu và cuối, viết hoa chữ cái đầu mỗi từ, xóa khoảng trắng giữa các từ và thêm dấu `#` ở đầu.

### Input

* Một dòng là tên chủ đề.

### Output

In một dòng là hashtag sau khi xử lý.

### Ràng buộc

* Chủ đề dài từ 1 đến 100 ký tự.
* Các từ trong chủ đề được phân tách bằng đúng một khoảng trắng sau khi đã xóa khoảng trắng ở đầu và cuối.

### Ví dụ

Input:

```text
  hoc python vui  
```

Output:

```text
#HocPythonVui
```

---

## Bài 3: Viết hoa lời chào

### Mô tả

Nhập tên của một người. In lời chào trong đó tên được chuyển toàn bộ thành chữ hoa. Nếu tên có khoảng trắng, giữ nguyên các khoảng trắng đó.

### Input

* Một dòng là tên.

### Output

```text
Xin chao <TEN_VIET_HOA>
```

### Ràng buộc

* Tên dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
Minh Anh
```

Output:

```text
Xin chao MINH ANH
```

---

## Bài 4: Viết thường email

### Mô tả

Nhập một địa chỉ email. In lại email sau khi chuyển toàn bộ chữ cái thành chữ thường. Các ký tự không phải chữ cái được giữ nguyên.

### Input

* Một dòng là địa chỉ email.

### Output

In một dòng là email sau khi chuyển thành chữ thường.

### Ràng buộc

* Email dài từ 3 đến 100 ký tự.

### Ví dụ

Input:

```text
An.NGUYEN@Example.COM
```

Output:

```text
an.nguyen@example.com
```

---

## Bài 5: Xóa khoảng trắng hai đầu

### Mô tả

Nhập một chuỗi có thể có khoảng trắng ở đầu và cuối. In chuỗi sau khi xóa các khoảng trắng ở đầu và cuối, đồng thời in độ dài mới của chuỗi.

### Input

* Một dòng là chuỗi cần xử lý.

### Output

```text
Chuoi moi: <chuoi_sau_khi_xoa>
Do dai moi: <do_dai_moi>
```

### Ràng buộc

* Chuỗi dài từ 1 đến 100 ký tự tính cả khoảng trắng.

### Ví dụ

Input:

```text
  Python co ban  
```

Output:

```text
Chuoi moi: Python co ban
Do dai moi: 13
```

---

## Bài 6: Thay dấu gạch ngang

### Mô tả

Nhập một chuỗi mô tả tiêu đề có các từ cách nhau bằng dấu gạch ngang `-`. Hãy thay tất cả dấu gạch ngang bằng khoảng trắng.

### Input

* Một dòng là chuỗi tiêu đề.

### Output

In một dòng là chuỗi sau khi thay dấu gạch ngang bằng khoảng trắng.

### Ràng buộc

* Chuỗi tiêu đề dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
lap-trinh-python-co-ban
```

Output:

```text
lap trinh python co ban
```

---

## Bài 7: Đếm chữ a

### Mô tả

Nhập một chuỗi. Đếm số lần ký tự `a` thường xuất hiện trong chuỗi. Chỉ đếm chữ `a` thường, không đếm chữ `A` hoa.

### Input

* Một dòng là chuỗi cần đếm.

### Output

```text
So chu a: <so_lan>
```

### Ràng buộc

* Chuỗi dài từ 1 đến 100 ký tự.
* Phép đếm phân biệt chữ hoa và chữ thường.

### Ví dụ

Input:

```text
banana Apple
```

Output:

```text
So chu a: 3
```

---

## Bài 8: Tìm vị trí dấu @

### Mô tả

Nhập một địa chỉ email. In vị trí đầu tiên của ký tự `@` trong chuỗi. Vị trí được tính từ 0. Nếu không có ký tự `@`, in `Khong tim thay`.

### Input

* Một dòng là chuỗi email.

### Output

Nếu tìm thấy `@`, in:

```text
Vi tri @: <vi_tri>
```

Nếu không tìm thấy `@`, in:

```text
Khong tim thay
```

### Ràng buộc

* Chuỗi email dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
an@example.com
```

Output:

```text
Vi tri @: 2
```

---

## Bài 9: Kiểm tra tiền tố

### Mô tả

Nhập một mã học viên. Kiểm tra mã có bắt đầu bằng chuỗi `PY` hay không. Phép kiểm tra phân biệt chữ hoa và chữ thường.

### Input

* Một dòng là mã học viên.

### Output

Nếu mã bắt đầu bằng `PY`, in:

```text
Hop le
```

Ngược lại, in:

```text
Khong hop le
```

### Ràng buộc

* Mã học viên dài từ 1 đến 50 ký tự.

### Ví dụ

Input:

```text
PY2026A01
```

Output:

```text
Hop le
```

---

## Bài 10: Kiểm tra hậu tố

### Mô tả

Nhập tên một tệp. Kiểm tra tên tệp có kết thúc bằng `.py` hay không. Phép kiểm tra phân biệt chữ hoa và chữ thường, nên `.PY` không được xem là hợp lệ.

### Input

* Một dòng là tên tệp.

### Output

Nếu tên tệp kết thúc bằng `.py`, in:

```text
Tep Python
```

Ngược lại, in:

```text
Khong phai tep Python
```

### Ràng buộc

* Tên tệp dài từ 1 đến 100 ký tự.

### Ví dụ

Input:

```text
bai_tap.py
```

Output:

```text
Tep Python
```

---

## Bài 11: Tách ngày tháng năm

### Mô tả

Nhập một ngày ở dạng `dd/mm/yyyy`. Tách và in ngày, tháng, năm trên 3 dòng riêng.

### Input

* Một dòng là ngày ở dạng `dd/mm/yyyy`.

### Output

```text
Ngay: <dd>
Thang: <mm>
Nam: <yyyy>
```

### Ràng buộc

* `dd` gồm 2 chữ số.
* `mm` gồm 2 chữ số.
* `yyyy` gồm 4 chữ số.

### Ví dụ

Input:

```text
05/09/2026
```

Output:

```text
Ngay: 05
Thang: 09
Nam: 2026
```

---

## Bài 12: Ghép danh sách môn học

### Mô tả

Nhập tên 3 môn học trên 3 dòng. Ghép 3 tên môn học thành một chuỗi, các môn cách nhau bằng dấu ` - `.

### Input

* Dòng 1: tên môn học thứ nhất.
* Dòng 2: tên môn học thứ hai.
* Dòng 3: tên môn học thứ ba.

### Output

```text
Danh sach: <mon_1> - <mon_2> - <mon_3>
```

### Ràng buộc

* Mỗi tên môn học dài từ 1 đến 50 ký tự.

### Ví dụ

Input:

```text
Python
Toan
Tin hoc
```

Output:

```text
Danh sach: Python - Toan - Tin hoc
```
