# Thực hành bài 9-1: Module trong Python

## Bài 1: Module đổi đơn vị

### Mô tả

Tạo file `convert.py` có hàm `minutes_to_hours(minutes)` trả về cặp `(hours, remain_minutes)`. File `main.py` nhập số phút và in kết quả.

### Input

* Một số nguyên `minutes`.

### Output

```text
<hours> gio <remain_minutes> phut
```

### Ràng buộc

* `0 <= minutes <= 10000`

### Ví dụ

Input:

```text
145
```

Output:

```text
2 gio 25 phut
```

---

## Bài 2: Module lời chào

### Mô tả

Tạo file `messages.py` có hàm `welcome(name, course)` trả về câu chào. File `main.py` nhập tên và khóa học rồi in câu chào.

### Input

* Dòng 1: tên học sinh.
* Dòng 2: tên khóa học.

### Output

```text
Chao <name>, chuc mung den voi <course>
```

### Ràng buộc

* Tên và khóa học không rỗng.

### Ví dụ

Input:

```text
Lan
Python Basics
```

Output:

```text
Chao Lan, chuc mung den voi Python Basics
```

