# Bài 6-1: Chuỗi 

## Khung học vui

**Bối cảnh:** Bạn đang làm bộ lọc tin nhắn cho nhóm lớp: chuẩn hóa tên, kiểm tra từ khóa, tạo username, và làm câu trả lời tự động.

**Thử ngay trong 5 phút:** Nhập một câu bất kỳ, in ra chữ hoa, chữ thường, số ký tự, và kiểm tra có chứa từ `Python` không.

**Hoạt động cặp đôi:** Bạn A gửi một câu lộn xộn nhiều khoảng trắng, bạn B dùng method chuỗi để làm sạch.

**Nâng cấp sau giờ học:** Viết chương trình tạo username từ họ tên: chuyển thành chữ thường, bỏ khoảng trắng thừa, nối bằng dấu chấm.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## 1. Chuỗi là gì?

- **Chuỗi** (string) là một **dãy ký tự** (chữ cái, số, ký hiệu, khoảng trắng...) được đặt trong **dấu ngoặc đơn (' ') hoặc ngoặc kép (" ")**.

Ví dụ:
```python
name = "Python"
greeting = 'Hello World'
```

> **Ghi nhớ:** Dùng ' hoặc " đều được, nhưng phải thống nhất đầu và cuối chuỗi.

---

## 2. Khai báo chuỗi

```python
s1 = 'Xin chào'
s2 = "Python rất thú vị!"
s3 = '''Đây
là chuỗi
nhiều dòng'''
```
- **''' '''** hoặc **""" """** dùng để khai báo **chuỗi nhiều dòng**.

---

## 3. Truy cập ký tự trong chuỗi

- Mỗi ký tự trong chuỗi đều có **vị trí** (chỉ số) bắt đầu từ 0.

```python
s = "Hello"
print(s[0])  # In ra 'H'
print(s[1])  # In ra 'e'
```
- Có thể dùng **chỉ số âm** để truy cập ngược từ cuối chuỗi:

```python
print(s[-1])  # In ra 'o'
print(s[-2])  # In ra 'l'
```

---

## 4. Cắt chuỗi (Slicing)

- Cú pháp: `chuỗi[start:end]`  
  (Lấy từ vị trí `start` đến `end-1`)

```python
s = "Python"
print(s[0:2])  # Py
print(s[2:])   # thon
print(s[:4])   # Pyth
```

---

## 5. Các phương thức thường dùng với chuỗi

| Phương thức     | Ý nghĩa | Ví dụ |
|-----------------|---------|-------|
| `lower()`       | Chuyển thành chữ thường | `"HELLO".lower()` → `hello` |
| `upper()`       | Chuyển thành chữ hoa | `"hello".upper()` → `HELLO` |
| `title()`       | Viết hoa chữ cái đầu | `"python programming".title()` → `Python Programming` |
| `strip()`       | Xóa khoảng trắng đầu/cuối | `"  hello  ".strip()` → `hello` |
| `replace(a, b)` | Thay thế chuỗi `a` bằng `b` | `"hello world".replace("world", "Python")` → `hello Python` |
| `count(x)`      | Đếm số lần xuất hiện | `"banana".count("a")` → `3` |
| `find(x)`       | Tìm vị trí đầu tiên của `x` | `"hello".find("e")` → `1` |

---

## 6. Nối chuỗi

- Dùng toán tử `+` để nối nhiều chuỗi lại:

```python
first = "Hello"
second = "World"
print(first + " " + second)  # Hello World
```

- Dùng f-string (Python 3.6+) để chèn biến vào chuỗi:

```python
name = "Alice"
print(f"Hello {name}")  # Hello Alice
```

---

## 7. Một số lưu ý quan trọng

- **Chuỗi là immutable**: không thể thay đổi từng ký tự trực tiếp.

Ví dụ (sai):
```python
s = "Hello"
s[0] = "Y"  # ❌ Error
```

- Muốn thay đổi, phải tạo chuỗi mới:

```python
s = "Hello"
s = "Y" + s[1:]
print(s)  # Yello
```

---

## Tự luyện tại lớp

- Viết chương trình nhập vào tên, in ra tên viết hoa toàn bộ.
- Viết chương trình nhập 1 câu, đếm số lượng chữ 'a' trong câu.
- Viết chương trình kiểm tra xem chuỗi có bắt đầu bằng "Hello" không.

---

# 🎯 Tóm lại
- Chuỗi rất **cơ bản và quan trọng** trong Python.
- Biết cách **khai báo, truy cập, cắt**, **sử dụng phương thức**, và **nối chuỗi** sẽ giúp bạn xử lý dữ liệu văn bản rất dễ dàng!

---
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
