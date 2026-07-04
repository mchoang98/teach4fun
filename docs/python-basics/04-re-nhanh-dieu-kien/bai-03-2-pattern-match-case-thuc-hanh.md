# Thực hành bài 4-3.2: Pattern matching

## Bài 1: Phân loại gói dữ liệu

### Mô tả

Nhập loại gói và giá trị. Nếu loại là `score` và giá trị từ 0 đến 10 thì in `SCORE DATA`. Nếu loại là `name` và giá trị không rỗng thì in `NAME DATA`. Trường hợp khác in `INVALID`.

### Input

* Dòng 1: loại gói.
* Dòng 2: giá trị.

### Output

`SCORE DATA`, `NAME DATA` hoặc `INVALID`.

### Ràng buộc

* Có thể dùng `match case` kết hợp điều kiện guard.

### Ví dụ

Input:

```text
score
8
```

Output:

```text
SCORE DATA
```

