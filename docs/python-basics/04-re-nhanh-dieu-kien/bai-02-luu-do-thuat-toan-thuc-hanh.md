# Thực hành bài 4-2: Lưu đồ thuật toán

## Bài 1: Quy trình mượn sách

### Mô tả

Viết chương trình theo lưu đồ: nếu còn sách và học sinh không bị khóa thẻ thì in `BORROW OK`; nếu hết sách in `OUT OF STOCK`; nếu bị khóa thẻ in `CARD LOCKED`.

### Input

* Dòng 1: số sách còn lại.
* Dòng 2: thẻ bị khóa hay không, `yes` hoặc `no`.

### Output

`BORROW OK`, `OUT OF STOCK` hoặc `CARD LOCKED`.

### Ràng buộc

* `0 <= books <= 1000`

### Ví dụ

Input:

```text
3
no
```

Output:

```text
BORROW OK
```

