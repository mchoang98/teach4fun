# Thực hành bài 11-2: Làm việc với JSON

## Bài 1: Lưu hồ sơ học sinh

### Mô tả

Nhập tên, lớp và điểm của học sinh. Lưu dữ liệu vào file `student.json`, sau đó đọc lại và in theo mẫu.

### Input

* Dòng 1: tên học sinh.
* Dòng 2: lớp.
* Dòng 3: điểm.

### Output

```text
<ten> - <lop> - <diem>
```

### Ràng buộc

* `0 <= diem <= 10`

### Ví dụ

Input:

```text
An
7A1
8.5
```

Output:

```text
An - 7A1 - 8.5
```

---

## Bài 2: Danh sách nhiệm vụ JSON

### Mô tả

Nhập `n` nhiệm vụ, mỗi nhiệm vụ có tên và trạng thái `todo` hoặc `done`. Lưu danh sách vào `tasks.json`, đọc lại và in số nhiệm vụ đã hoàn thành.

### Input

* Dòng 1: số nhiệm vụ `n`.
* `n` cặp dòng tiếp theo: tên nhiệm vụ và trạng thái.

### Output

```text
Done: <count>
```

### Ràng buộc

* `1 <= n <= 50`
* Trạng thái chỉ là `todo` hoặc `done`.

### Ví dụ

Input:

```text
3
Hoc JSON
done
Lam bai tap
todo
On bai
done
```

Output:

```text
Done: 2
```

