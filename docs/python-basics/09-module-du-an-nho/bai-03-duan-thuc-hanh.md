# Thực hành bài 9-3: Dự án nhỏ

## Bài 1: Tách dự án quản lý mục tiêu

### Mô tả

Tạo dự án gồm 2 file:

* `goal_utils.py`: chứa hàm `is_done(progress)` trả về `True` nếu tiến độ từ 100 trở lên.
* `main.py`: nhập tên mục tiêu và tiến độ, in trạng thái.

### Input

* Dòng 1: tên mục tiêu.
* Dòng 2: tiến độ phần trăm.

### Output

In `DONE` nếu hoàn thành, ngược lại in `DOING`.

### Ràng buộc

* `0 <= progress <= 200`

### Ví dụ

Input:

```text
Hoc vong lap
80
```

Output:

```text
DOING
```

---

## Bài 2: Dự án mini tính điểm nhóm

### Mô tả

Tách chương trình thành:

* `score.py`: hàm `team_score(tasks, bonus)`.
* `main.py`: nhập số nhiệm vụ, điểm mỗi nhiệm vụ và bonus.

### Input

* Dòng 1: số nhiệm vụ `n`.
* Dòng 2: `n` điểm nhiệm vụ.
* Dòng 3: điểm bonus.

### Output

```text
Tong diem nhom: <score>
```

### Ràng buộc

* `1 <= n <= 100`
* `0 <= diem, bonus <= 1000`

### Ví dụ

Input:

```text
3
10 20 30
5
```

Output:

```text
Tong diem nhom: 65
```

