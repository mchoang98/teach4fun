# Bài 6-2: Các phương thức xử lý chuỗi
Dĩ nhiên! Đây là **Bài giảng 02 - Các phương thức xử lý chuỗi trong Python**, mình viết theo phong cách mạch lạc, dễ hiểu như đang học với giáo viên nhé:

---

# 📚 BÀI GIẢNG 02: CÁC PHƯƠNG THỨC XỬ LÝ CHUỖI TRONG PYTHON

## Khung học vui

**Bối cảnh:** Bạn đang làm bộ lọc tin nhắn cho nhóm lớp: chuẩn hóa tên, kiểm tra từ khóa, tạo username, và làm câu trả lời tự động.

**Thử ngay trong 5 phút:** Nhập một câu bất kỳ, in ra chữ hoa, chữ thường, số ký tự, và kiểm tra có chứa từ `Python` không.

**Hoạt động cặp đôi:** Bạn A gửi một câu lộn xộn nhiều khoảng trắng, bạn B dùng method chuỗi để làm sạch.

**Nâng cấp sau giờ học:** Viết chương trình tạo username từ họ tên: chuyển thành chữ thường, bỏ khoảng trắng thừa, nối bằng dấu chấm.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
Trong bài này, chúng ta sẽ học những phương thức cực kỳ **thường dùng** để thao tác với **chuỗi** trong Python.

---

# 1. `lower()` - Chuyển thành chữ thường

Biến toàn bộ chuỗi thành chữ thường.

```python
s = "Hello World"
print(s.lower())
```
👉 Kết quả:
```
hello world
```

---

# 2. `upper()` - Chuyển thành chữ hoa

Biến toàn bộ chuỗi thành chữ hoa.

```python
s = "hello"
print(s.upper())
```
👉 Kết quả:
```
HELLO
```

---

# 3. `capitalize()` - Viết hoa chữ cái đầu tiên

Chỉ chữ cái đầu tiên viết hoa, các chữ khác thành thường.

```python
s = "python programming"
print(s.capitalize())
```
👉 Kết quả:
```
Python programming
```

---

# 4. `title()` - Viết hoa chữ cái đầu mỗi từ

```python
s = "python programming language"
print(s.title())
```
👉 Kết quả:
```
Python Programming Language
```

---

# 5. `strip()` - Xóa khoảng trắng ở đầu và cuối

```python
s = "  Hello World  "
print(s.strip())
```
👉 Kết quả:
```
Hello World
```

> Ngoài `strip()`, còn có:
> - `lstrip()` : xóa khoảng trắng bên trái.
> - `rstrip()` : xóa khoảng trắng bên phải.

---

# 6. `replace(old, new)` - Thay thế chuỗi con

```python
s = "I love Python"
print(s.replace("Python", "Java"))
```
👉 Kết quả:
```
I love Java
```

---

# 7. `find(sub)` - Tìm vị trí đầu tiên của chuỗi con

Trả về **chỉ số** của ký tự đầu tiên tìm được, nếu không có trả về `-1`.

```python
s = "Hello World"
print(s.find("World"))
```
👉 Kết quả:
```
6
```

---

# 8. `count(sub)` - Đếm số lần xuất hiện chuỗi con

```python
s = "banana"
print(s.count("a"))
```
👉 Kết quả:
```
3
```

---

# 9. `startswith(sub)` - Kiểm tra chuỗi bắt đầu bằng sub?

```python
s = "Hello World"
print(s.startswith("Hello"))
```
👉 Kết quả:
```
True
```

---

# 10. `endswith(sub)` - Kiểm tra chuỗi kết thúc bằng sub?

```python
s = "example.txt"
print(s.endswith(".txt"))
```
👉 Kết quả:
```
True
```

---

# 11. `split(separator)` - Tách chuỗi thành danh sách

Mặc định `separator` là dấu cách `' '`.

```python
s = "apple,banana,cherry"
print(s.split(","))
```
👉 Kết quả:
```
['apple', 'banana', 'cherry']
```

---

# 12. `join(list)` - Nối danh sách thành chuỗi

```python
lst = ['Python', 'Java', 'C++']
print(" - ".join(lst))
```
👉 Kết quả:
```
Python - Java - C++
```

---

# 🎯 Tóm tắt nhanh

| Phương thức  | Công dụng                       |
|--------------|----------------------------------|
| `lower()`    | Chuyển thành chữ thường          |
| `upper()`    | Chuyển thành chữ hoa             |
| `capitalize()` | Viết hoa chữ đầu tiên          |
| `title()`    | Viết hoa chữ đầu mỗi từ           |
| `strip()`    | Xóa khoảng trắng 2 đầu           |
| `replace()`  | Thay chuỗi con                   |
| `find()`     | Tìm vị trí chuỗi con             |
| `count()`    | Đếm số lần xuất hiện             |
| `startswith()` | Kiểm tra bắt đầu bằng chuỗi    |
| `endswith()` | Kiểm tra kết thúc bằng chuỗi     |
| `split()`    | Tách chuỗi thành danh sách       |
| `join()`     | Ghép danh sách thành chuỗi       |

---

## Tự luyện tại lớp

- Nhập 1 chuỗi, in ra dạng chữ hoa.
- Đếm xem trong chuỗi có bao nhiêu chữ cái 'e'.
- Kiểm tra chuỗi nhập vào có kết thúc bằng ".com" hay không.
- Viết chương trình đảo ngược chuỗi người dùng nhập.

---

# 🎯 Ghi nhớ:

> "Làm việc với chuỗi là nền tảng cơ bản trong lập trình Python. Nếu bạn xử lý chuỗi thành thạo, bạn sẽ làm chủ được dữ liệu dạng văn bản."

---

Bạn có muốn mình viết thêm 10 bài tập thực hành ứng dụng cao hơn (có đáp án) theo sát bài giảng 02 này không? 🚀  
Mình làm nhanh cho bạn nếu cần nhé! 🎯✨
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
