# Đề thực hành 08E: Đăng nhập và bảo vệ tài khoản

## Quy định chung

* Dữ liệu tài khoản được nhập từ bàn phím, không hard-code danh sách trong chương trình.
* Dùng cấu trúc dữ liệu phù hợp để tra cứu nhanh.
* Output cần đúng từng dòng.

---

## Bài 1: Đăng nhập một lần

### Mô tả

Nhập danh sách tài khoản hợp lệ. Sau đó nhập một username và password cần kiểm tra. Nếu đúng in `LOGIN OK`, ngược lại in `LOGIN FAIL`.

### Input

* Dòng 1: số tài khoản `n`.
* `n` dòng tiếp theo: `<username> <password>`.
* Dòng tiếp theo: username cần đăng nhập.
* Dòng cuối: password cần đăng nhập.

### Output

`LOGIN OK` hoặc `LOGIN FAIL`.

### Ràng buộc

* `1 <= n <= 100`
* Username và password không chứa khoảng trắng.

### Ví dụ

Input:

```text
3
admin 123456
alice qwerty
bob python
alice
qwerty
```

Output:

```text
LOGIN OK
```

---

## Bài 2: Khóa sau 3 lần sai

### Mô tả

Một tài khoản được phép thử đăng nhập tối đa 3 lần. Nếu nhập đúng trước khi hết lượt, in `WELCOME`. Nếu sai đủ 3 lần, in `LOCKED`.

### Input

* Dòng 1: username đúng.
* Dòng 2: password đúng.
* 3 cặp dòng tiếp theo, mỗi cặp gồm username và password người dùng nhập.

### Output

`WELCOME` hoặc `LOCKED`.

### Ràng buộc

* Chuỗi không chứa khoảng trắng.

### Ví dụ

Input:

```text
admin
abc123
admin
111
root
abc123
admin
abc123
```

Output:

```text
WELCOME
```

---

## Bài 3: Nhật ký đăng nhập đáng ngờ

### Mô tả

Nhập `n` lượt đăng nhập, mỗi lượt có username và kết quả `OK` hoặc `FAIL`. In các username có từ 2 lần `FAIL` trở lên theo alphabet.

### Input

* Dòng 1: số lượt `n`.
* `n` dòng tiếp theo: `<username> <ket_qua>`.

### Output

Danh sách username đáng ngờ, cách nhau bởi dấu cách; nếu không có in `SAFE`.

### Ràng buộc

* `1 <= n <= 200`

### Ví dụ

Input:

```text
6
an FAIL
binh OK
an FAIL
chi FAIL
chi OK
chi FAIL
```

Output:

```text
an chi
```
