

# Bài 8-4 - Các Bài Tập Thực Hành OOP  
_Tác giả: Phu Hoang_  
_Thuộc loạt bài: Lập trình hướng đối tượng trong Python_

---

## 🧑‍🏫 Bài Tập 1 – Đóng Gói: Quản lý điểm học sinh

### 🚩 **Đề bài:**
Viết class `Student` có:
- Thuộc tính `name` và `__score` (điểm, ẩn)
- Phương thức `set_score(score)` để nhập điểm
- Phương thức `get_score()` để in điểm ra màn hình

> Nếu điểm không nằm trong khoảng từ 0 đến 10 thì không nhận.

---

### ✅ **Kết quả mong đợi:**

```python
s = Student("An")
s.set_score(9)
s.get_score()         # 👉 An được 9 điểm.

s.set_score(15)       # 👉 Điểm không hợp lệ!
s.get_score()         # 👉 An được 9 điểm.
```

---

## 👨‍👩‍👧 Bài Tập 2 – Kế Thừa: Quản lý thành viên CLB

### 🚩 **Đề bài:**
Viết class `Member` có:
- `name`, `grade` (lớp)

Viết class `Leader` kế thừa từ `Member`, có thêm:
- `position` (chức vụ)
- Phương thức `introduce()` để giới thiệu bản thân

---

### ✅ **Kết quả mong đợi:**

```python
leader = Leader("Lan", "11A3", "Chủ nhiệm")
leader.introduce()  
# 👉 Mình là Lan, lớp 11A3, giữ chức vụ Chủ nhiệm.
```

---

## 🐾 Bài Tập 3 – Đa Hình: Thú cưng lớp học

### 🚩 **Đề bài:**
Tạo class `Pet` có phương thức `speak()`.

Tạo các class con `Dog`, `Cat`, `Parrot` kế thừa và định nghĩa lại `speak()` sao cho:
- `Dog`: in "Gâu gâu!"
- `Cat`: in "Meo meo!"
- `Parrot`: in "Xin chào!"

Viết hàm `let_them_speak(pet_list)` để cho tất cả thú cưng nói.

---

### ✅ **Kết quả mong đợi:**

```python
pets = [Dog(), Cat(), Parrot()]
let_them_speak(pets)

# 👉 Gâu gâu!
# 👉 Meo meo!
# 👉 Xin chào!
```

---

## 🧠 Bài Tập 4 – Trừu Tượng: Đăng ký hoạt động ngoại khóa

### 🚩 **Đề bài:**
Tạo class trừu tượng `Activity` có phương thức `register()`.

Viết các lớp kế thừa:
- `DanceClub`: in "Đăng ký CLB nhảy thành công!"
- `FootballTeam`: in "Đăng ký đội bóng thành công!"
- `ChessClub`: in "Đăng ký CLB cờ vua thành công!"

---

### ✅ **Kết quả mong đợi:**

```python
activities = [DanceClub(), FootballTeam(), ChessClub()]
for act in activities:
    act.register()

# 👉 Đăng ký CLB nhảy thành công!
# 👉 Đăng ký đội bóng thành công!
# 👉 Đăng ký CLB cờ vua thành công!
```

---

## 🧩 Hình minh họa

| Tính chất | Ý nghĩa | Minh họa |
|----------|---------|----------|
| Đóng gói | Ẩn thông tin | ![encapsulation](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Encapsulation.svg/300px-Encapsulation.svg.png) |
| Kế thừa | Tái sử dụng | ![inheritance](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/OO_inheritance_fig1.svg/300px-OO_inheritance_fig1.svg.png) |
| Đa hình | Hành vi khác nhau | ![polymorphism](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Polymorphism.svg/300px-Polymorphism.svg.png) |
| Trừu tượng | Tập trung vào ý chính | ![abstraction](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Abstraction_layers.svg/300px-Abstraction_layers.svg.png) |

---

## 🧪 Bạn có thể làm thêm

- Viết class `Library` quản lý mượn/trả sách theo đối tượng `Student`.
- Viết ứng dụng mini quản lý lớp học dùng OOP.


