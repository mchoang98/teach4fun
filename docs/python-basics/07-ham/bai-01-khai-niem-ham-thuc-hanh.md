# Thực hành bài 7-1: Khái niệm hàm

## Bài 1: Hàm in vé tham gia

### Mô tả

Viết hàm `print_ticket(name, event)` để in vé tham gia sự kiện theo mẫu.

### Input

* Dòng 1: tên học sinh.
* Dòng 2: tên sự kiện.

### Output

```text
=== TICKET ===
Name: <name>
Event: <event>
```

### Ràng buộc

* Tên và sự kiện không rỗng.

### Ví dụ

Input:

```text
An
Python Club
```

Output:

```text
=== TICKET ===
Name: An
Event: Python Club
```

---

## Bài 2: Hàm nhắc học

### Mô tả

Viết hàm `study_reminder(subject, minutes)` trả về câu nhắc học theo mẫu.

### Input

* Dòng 1: tên môn.
* Dòng 2: số phút học.

### Output

```text
Hom nay hoc <subject> trong <minutes> phut
```

### Ràng buộc

* `1 <= minutes <= 500`

### Ví dụ

Input:

```text
Python
45
```

Output:

```text
Hom nay hoc Python trong 45 phut
```

