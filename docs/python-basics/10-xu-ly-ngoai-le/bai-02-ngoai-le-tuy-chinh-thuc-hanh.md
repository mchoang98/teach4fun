# Thực hành bài 10-2: Ngoại lệ tùy chỉnh

## Bài 1: Kiểm tra điểm hợp lệ

### Mô tả

Tạo ngoại lệ `InvalidScoreError`. Viết hàm kiểm tra điểm: nếu điểm nhỏ hơn 0 hoặc lớn hơn 10 thì raise ngoại lệ, ngược lại in `OK`.

### Input

* Một số thực là điểm.

### Output

In `OK` nếu hợp lệ, ngược lại in `INVALID SCORE`.

### Ràng buộc

* Input có thể ép sang số thực.

### Ví dụ

Input:

```text
11
```

Output:

```text
INVALID SCORE
```

---

## Bài 2: Mật khẩu quá ngắn

### Mô tả

Tạo ngoại lệ `WeakPasswordError`. Nếu mật khẩu ngắn hơn 8 ký tự thì báo lỗi, ngược lại in `STRONG`.

### Input

* Một dòng mật khẩu.

### Output

`STRONG` hoặc `WEAK PASSWORD`.

### Ràng buộc

* Mật khẩu dài không quá 100 ký tự.

### Ví dụ

Input:

```text
py123
```

Output:

```text
WEAK PASSWORD
```

