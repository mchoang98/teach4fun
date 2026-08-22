# Bài tập: Biến cục bộ và biến toàn cục trong Python

## Bài 1: Nhận biết biến cục bộ

### Yêu cầu

Cho chương trình sau:

```python
def show_student():
    student_name = "Minh"
    print(student_name)

show_student()
```

Hãy xác định:

- Biến nào là biến cục bộ.
- Biến đó thuộc phạm vi của hàm nào.
- Có thể sử dụng biến đó bên ngoài hàm hay không.

### Dữ liệu cho trước

Không có dữ liệu nhập từ bàn phím.

### Kết quả mong đợi

Học sinh giải thích được phạm vi của biến `student_name`.

### Yêu cầu kỹ thuật

Không cần thay đổi chương trình.

---

## Bài 2: Dự đoán kết quả

### Yêu cầu

Cho chương trình:

```python
number = 10

def show_number():
    number = 20
    print(number)

show_number()
print(number)
```

Hãy viết ra hai giá trị mà chương trình sẽ in và giải thích tại sao chúng khác nhau.

### Dữ liệu cho trước

```python
number = 10
```

### Kết quả mong đợi

```text
20
10
```

### Yêu cầu kỹ thuật

Phân biệt rõ biến `number` bên trong và bên ngoài hàm.

---

## Bài 3: Đọc biến toàn cục

### Yêu cầu

Viết hàm `show_school()` để in tên trường được lưu trong biến toàn cục `school_name`.

### Dữ liệu cho trước

```python
school_name = "Python Academy"
```

Giữ nguyên tên biến `school_name`.

### Kết quả mong đợi

Khi gọi:

```python
show_school()
```

chương trình in:

```text
Python Academy
```

### Yêu cầu kỹ thuật

- Phải sử dụng hàm.
- Không khai báo lại `school_name` bên trong hàm.
- Không cần sử dụng `global`.

---

## Bài 4: Tăng biến toàn cục

### Yêu cầu

Biến `visits` lưu số lần người dùng đã truy cập.

Viết hàm `visit()` để mỗi lần hàm được gọi, giá trị của `visits` tăng thêm `1`.

### Dữ liệu cho trước

```python
visits = 0
```

Giữ nguyên tên biến `visits`.

### Kết quả mong đợi

Sau đoạn chương trình:

```python
visit()
visit()
visit()

print(visits)
```

kết quả phải là:

```text
3
```

### Yêu cầu kỹ thuật

- Phải sử dụng từ khóa `global`.
- Mỗi lần gọi `visit()` chỉ tăng `visits` thêm `1`.

---

## Bài 5: Không dùng `global`

### Yêu cầu

Viết hàm `increase_score(score)` nhận một số điểm và trả về điểm mới cao hơn điểm ban đầu `5` điểm.

### Dữ liệu cho trước

```python
score = 20
```

### Kết quả mong đợi

Với:

```python
score = increase_score(score)
print(score)
```

chương trình in:

```text
25
```

### Yêu cầu kỹ thuật

- Phải sử dụng tham số.
- Phải sử dụng `return`.
- Không được sử dụng `global`.

---

## Bài 6: Tìm lỗi

### Yêu cầu

Chương trình sau bị lỗi:

```python
count = 5

def increase():
    count = count + 1

increase()
print(count)
```

Hãy:

1. Giải thích nguyên nhân gây lỗi.
2. Sửa chương trình để `count` tăng từ `5` thành `6`.

### Dữ liệu cho trước

```python
count = 5
```

### Kết quả mong đợi

```text
6
```

### Yêu cầu kỹ thuật

Sửa bài bằng cách sử dụng từ khóa `global`.

---

## Bài 7: Phân biệt hai biến cùng tên

### Yêu cầu

Cho chương trình:

```python
score = 50

def test():
    score = 100
    print("Trong hàm:", score)

test()
print("Ngoài hàm:", score)
```

Hãy dự đoán kết quả và giải thích vì sao giá trị `score` bên ngoài hàm không bị thay đổi.

### Dữ liệu cho trước

```python
score = 50
```

### Kết quả mong đợi

```text
Trong hàm: 100
Ngoài hàm: 50
```

### Yêu cầu kỹ thuật

Không thay đổi chương trình.

---

## Bài 8: Chuyển từ `global` sang `return`

### Yêu cầu

Cho chương trình:

```python
score = 10

def add_score():
    global score
    score = score + 5

add_score()
print(score)
```

Hãy viết lại chương trình để vẫn cho kết quả `15` nhưng không sử dụng `global`.

### Dữ liệu cho trước

```python
score = 10
```

### Kết quả mong đợi

```text
15
```

### Yêu cầu kỹ thuật

- Phải truyền `score` vào hàm bằng tham số.
- Phải sử dụng `return`.
- Không được sử dụng `global`.

---

## Câu hỏi kiểm tra nhanh

### Câu 1

Biến được tạo bên trong hàm được gọi là gì?

A. Biến toàn cục  
B. Biến cục bộ  
C. Biến cố định  
D. Biến đầu vào

### Câu 2

Cho chương trình:

```python
x = 10

def test():
    print(x)
```

Hàm `test()` có thể sử dụng `x` không?

A. Có  
B. Không

### Câu 3

Cho chương trình:

```python
x = 10

def test():
    x = 20
```

`x = 20` là:

A. Biến toàn cục  
B. Biến cục bộ

### Câu 4

Từ khóa nào được sử dụng khi muốn thay đổi một biến toàn cục bên trong hàm?

A. `local`  
B. `return`  
C. `global`  
D. `variable`

### Câu 5

Khi chỉ đọc một biến toàn cục trong hàm, có bắt buộc phải dùng `global` không?

A. Có  
B. Không

---

## Đáp án câu hỏi kiểm tra nhanh

1. B
2. A
3. B
4. C
5. B
