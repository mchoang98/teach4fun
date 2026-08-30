# Bài tập List trong Python

## Bài 1. Truy cập phần tử trong danh sách

### Yêu cầu

Cho một danh sách tên các môn học.

Hãy in ra:

* Phần tử đầu tiên của danh sách.
* Phần tử thứ ba của danh sách.
* Phần tử cuối cùng của danh sách.
* Phần tử thứ hai tính từ cuối danh sách.

### Dữ liệu cho trước

Giữ nguyên tên biến `subjects`.

```python
subjects = ["Toán", "Văn", "Anh", "Tin", "Lý"]
```

### Kết quả mong đợi

```text
Toán
Anh
Lý
Tin
```

### Yêu cầu kỹ thuật

* Không sử dụng vòng lặp.
* Phải sử dụng cả chỉ số dương và chỉ số âm để truy cập phần tử.

## Bài 2. Thêm học sinh vào danh sách

### Yêu cầu

Cho danh sách tên học sinh trong một lớp.

Thực hiện lần lượt các thao tác sau:

1. Thêm `"Minh"` vào cuối danh sách.
2. Chèn `"Lan"` vào vị trí có chỉ số `1`.
3. In danh sách sau khi đã thực hiện cả hai thao tác.

### Dữ liệu cho trước

Giữ nguyên tên biến `students`.

```python
students = ["An", "Bình", "Hùng"]
```

### Kết quả mong đợi

```text
['An', 'Lan', 'Bình', 'Hùng', 'Minh']
```

### Yêu cầu kỹ thuật

* Phải sử dụng `append()` để thêm `"Minh"`.
* Phải sử dụng `insert()` để thêm `"Lan"`.

## Bài 3. Ghép hai danh sách môn học

### Yêu cầu

Cho hai danh sách môn học.

Hãy thêm toàn bộ phần tử của `subjects_2` vào cuối `subjects_1`.

Sau đó in `subjects_1`.

### Dữ liệu cho trước

```python
subjects_1 = ["Toán", "Văn"]
subjects_2 = ["Anh", "Tin", "Lý"]
```

### Kết quả mong đợi

```text
['Toán', 'Văn', 'Anh', 'Tin', 'Lý']
```

### Yêu cầu kỹ thuật

* Phải sử dụng phương thức `extend()`.
* Không sử dụng vòng lặp.

## Bài 4. Xóa sản phẩm khỏi giỏ hàng

### Yêu cầu

Cho danh sách các sản phẩm trong giỏ hàng.

Danh sách có thể chứa nhiều sản phẩm trùng tên.

Hãy xóa lần xuất hiện đầu tiên của `"Sữa"` khỏi danh sách và in danh sách sau khi xóa.

### Dữ liệu cho trước

```python
cart = ["Bánh", "Sữa", "Nước", "Sữa", "Kẹo"]
```

### Kết quả mong đợi

```text
['Bánh', 'Nước', 'Sữa', 'Kẹo']
```

### Yêu cầu kỹ thuật

* Phải sử dụng phương thức `remove()`.
* Chỉ xóa một phần tử `"Sữa"`.
* Không được tạo lại toàn bộ danh sách bằng cách viết tay.

## Bài 5. Lấy người cuối hàng

### Yêu cầu

Cho danh sách những người đang xếp hàng.

Hãy:

1. Xóa người cuối cùng khỏi danh sách và lưu tên người đó vào biến `last_person`.
2. In tên người vừa rời hàng.
3. In danh sách những người còn lại.

### Dữ liệu cho trước

```python
queue = ["An", "Bình", "Chi", "Dũng"]
```

### Kết quả mong đợi

```text
Dũng
['An', 'Bình', 'Chi']
```

### Yêu cầu kỹ thuật

* Phải sử dụng `pop()`.
* Không truyền chỉ số vào `pop()`.
* Giá trị trả về từ `pop()` phải được lưu vào biến `last_person`.

## Bài 6. Xóa phần tử theo vị trí

### Yêu cầu

Cho danh sách các ngôn ngữ lập trình.

Hãy xóa phần tử có chỉ số `2` khỏi danh sách và in danh sách sau khi xóa.

### Dữ liệu cho trước

```python
languages = ["Python", "Java", "PHP", "C++", "JavaScript"]
```

### Kết quả mong đợi

```text
['Python', 'Java', 'C++', 'JavaScript']
```

### Yêu cầu kỹ thuật

* Phải sử dụng từ khóa `del`.
* Không sử dụng `remove()` hoặc `pop()`.

## Bài 7. Làm rỗng danh sách công việc

### Yêu cầu

Cho một danh sách các công việc cần hoàn thành.

Hãy xóa toàn bộ phần tử trong danh sách nhưng vẫn giữ biến `tasks` tồn tại.

Sau đó in `tasks`.

### Dữ liệu cho trước

```python
tasks = ["Học Python", "Làm bài tập", "Đọc sách", "Tập thể dục"]
```

### Kết quả mong đợi

```text
[]
```

### Yêu cầu kỹ thuật

* Phải sử dụng phương thức `clear()`.
* Không sử dụng `del tasks`.
* Sau khi chương trình chạy, biến `tasks` vẫn phải tồn tại.

## Bài 8. Sắp xếp điểm

### Yêu cầu

Cho danh sách điểm của một nhóm học sinh.

Hãy:

1. Sắp xếp danh sách theo thứ tự tăng dần và in kết quả.
2. Sau đó sắp xếp chính danh sách đó theo thứ tự giảm dần và in kết quả.

### Dữ liệu cho trước

```python
scores = [8, 5, 10, 7, 6]
```

### Kết quả mong đợi

```text
[5, 6, 7, 8, 10]
[10, 8, 7, 6, 5]
```

### Yêu cầu kỹ thuật

* Phải sử dụng `sort()`.
* Khi sắp xếp giảm dần, phải sử dụng tham số `reverse=True`.
* Không sử dụng `sorted()` trong bài này.

## Bài 9. Sắp xếp nhưng giữ nguyên danh sách gốc

### Yêu cầu

Cho danh sách các số.

Hãy tạo một danh sách mới tên `sorted_numbers` chứa các phần tử của `numbers` được sắp xếp tăng dần.

Sau đó in lần lượt:

1. Danh sách `numbers`.
2. Danh sách `sorted_numbers`.

Danh sách `numbers` phải giữ nguyên thứ tự ban đầu.

### Dữ liệu cho trước

```python
numbers = [7, 2, 9, 1, 5]
```

### Kết quả mong đợi

```text
[7, 2, 9, 1, 5]
[1, 2, 5, 7, 9]
```

### Yêu cầu kỹ thuật

* Phải sử dụng hàm `sorted()`.
* Không được sử dụng `sort()`.
* Kết quả của `sorted()` phải được lưu vào biến `sorted_numbers`.

## Bài 10. Sao chép và ghép danh sách

### Yêu cầu

Cho danh sách `original`.

Hãy thực hiện các bước sau:

1. Tạo một bản sao của `original` và lưu vào biến `copied`.
2. Thêm số `50` vào cuối `copied`.
3. In `original`.
4. In `copied`.

Sau đó cho danh sách các từ:

```python
words = ["Python", "is", "fun"]
```

Hãy ghép các từ thành một chuỗi, giữa mỗi từ có đúng một dấu cách và in kết quả.

### Dữ liệu cho trước

```python
original = [10, 20, 30, 40]
words = ["Python", "is", "fun"]
```

### Kết quả mong đợi

```text
[10, 20, 30, 40]
[10, 20, 30, 40, 50]
Python is fun
```

### Yêu cầu kỹ thuật

* Phải tạo bản sao bằng `copy()`.
* Không sử dụng phép gán `copied = original`.
* Phải sử dụng `append()` để thêm `50`.
* Phải sử dụng `join()` để ghép các từ.
