# Thực hành bài 3-3: Toán tử logic

## Bài 1: Kiểm tra điều kiện vào phòng lab

### Mô tả

Một học sinh được vào phòng lab khi đã đăng ký và có thẻ học sinh. Nếu là trợ giảng thì cũng được vào. Chưa dùng `if`, chỉ in kết quả kiểm tra `True` hoặc `False`.

### Input

* Dòng 1: đã đăng ký, `yes` hoặc `no`.
* Dòng 2: có thẻ học sinh, `yes` hoặc `no`.
* Dòng 3: là trợ giảng, `yes` hoặc `no`.

### Output

In `True` nếu điều kiện vào phòng lab đúng, ngược lại in `False`.

### Ràng buộc

* Input chỉ gồm `yes` hoặc `no`.
* Cần chuyển từng dòng nhập thành biểu thức boolean, ví dụ `registered = input() == "yes"`.

### Ví dụ

Input:

```text
yes
no
yes
```

Output:

```text
True
```

---

## Bài 2: Mật khẩu và tài khoản khóa

### Mô tả

Người dùng đăng nhập được khi mật khẩu nhập vào đúng và tài khoản không bị khóa. Chỉ in kết quả kiểm tra, chưa in thông báo theo nhánh.

### Input

* Dòng 1: mật khẩu đúng.
* Dòng 2: mật khẩu người dùng nhập.
* Dòng 3: tài khoản bị khóa hay không, `yes` hoặc `no`.

### Output

`True` nếu mật khẩu đúng và tài khoản không bị khóa, ngược lại `False`.

### Ràng buộc

* Mật khẩu không chứa khoảng trắng.

### Ví dụ

Input:

```text
python123
python123
no
```

Output:

```text
True
```

