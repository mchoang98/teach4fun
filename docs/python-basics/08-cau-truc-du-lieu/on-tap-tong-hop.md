# Đề luyện 08D: Tổng hợp cấu trúc dữ liệu

## Quy định chung

* Chọn list, dictionary, set hoặc tuple phù hợp với từng bài.
* Bài có nhiều dòng output cần giữ đúng thứ tự đề yêu cầu.

---

## Bài 1: Bảng nhiệm vụ nhóm

### Mô tả

Mỗi nhiệm vụ có tên người phụ trách và số điểm. Hãy tính tổng điểm của từng người, in theo thứ tự tên xuất hiện lần đầu.

### Input

* Dòng 1: số nhiệm vụ `n`.
* `n` dòng tiếp theo: `<ten> <diem>`.

### Output

Mỗi dòng: `<ten> <tong_diem>`.

### Ràng buộc

* `1 <= n <= 200`
* `0 <= diem <= 100`

### Ví dụ

Input:

```text
5
An 10
Binh 5
An 7
Chi 8
Binh 12
```

Output:

```text
An 17
Binh 17
Chi 8
```

---

## Bài 2: Lọc tag dự án

### Mô tả

Một dự án có danh sách tag, có thể bị trùng. Hãy in các tag duy nhất theo alphabet, sau đó in số lượng tag duy nhất.

### Input

* Dòng 1: số tag `n`.
* Dòng 2: `n` tag.

### Output

Dòng 1: các tag duy nhất.
Dòng 2: số lượng tag duy nhất.

### Ràng buộc

* `1 <= n <= 100`

### Ví dụ

Input:

```text
6
python ai game python web ai
```

Output:

```text
ai game python web
4
```

---

## Bài 3: Điểm cao nhất từng môn

### Mô tả

Nhập các lượt nộp bài gồm tên môn và điểm. Với mỗi môn, chỉ giữ điểm cao nhất. In kết quả theo alphabet tên môn.

### Input

* Dòng 1: số lượt nộp `n`.
* `n` dòng tiếp theo: `<mon> <diem>`.

### Output

Mỗi dòng: `<mon>: <diem_cao_nhat>`.

### Ràng buộc

* `1 <= n <= 200`
* `0 <= diem <= 10`

### Ví dụ

Input:

```text
5
python 8
math 7
python 9
english 6
math 8
```

Output

```text
english: 6
math: 8
python: 9
```
