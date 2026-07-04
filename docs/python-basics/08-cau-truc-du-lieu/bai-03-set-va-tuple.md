# BÀI 7-3: SET VÀ TUPLE TRONG PYTHON

## Khung học vui

**Bối cảnh:** Bạn là quản lý dữ liệu cho một mini app lớp học: danh sách thành viên, bảng điểm, bộ tag sở thích và hồ sơ từng bạn.

**Thử ngay trong 5 phút:** Tạo một list 5 món yêu thích, một dict mô tả bản thân, một set các môn đã học, rồi in chúng theo câu văn.

**Hoạt động cặp đôi:** Bạn A đưa dữ liệu thô, bạn B chọn nên dùng list, dict, set hay tuple và giải thích vì sao.

**Nâng cấp sau giờ học:** Làm chương trình quản lý lớp: thêm học sinh, lưu điểm bằng dictionary, in học sinh có điểm cao nhất.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## I. Tập hợp (Set) là gì?

**Set** là một kiểu dữ liệu trong Python dùng để lưu trữ **nhiều giá trị không trùng lặp**, không có thứ tự và có thể thay đổi.

### Cú pháp:

```python
tap_hop = {1, 2, 3}
```

### Đặc điểm:

* Không cho phép phần tử trùng lặp
* Không có thứ tự, không truy cập bằng chỉ số
* Có thể thêm, xóa phần tử

### Ví dụ:

```python
a = {1, 2, 3, 4, 4, 2}
print(a)  # Kết quả: {1, 2, 3, 4}
```

🎥 Video hướng dẫn: [https://www.youtube.com/watch?v=sBvaPopWOmQ](https://www.youtube.com/watch?v=sBvaPopWOmQ)

---

## II. Một số hàm xử lý Set

| Phương thức        | Mô tả                                   |
| ------------------ | --------------------------------------- |
| `add(x)`           | Thêm phần tử x vào tập hợp              |
| `remove(x)`        | Xóa phần tử x (nếu không có sẽ báo lỗi) |
| `discard(x)`       | Xóa phần tử x (nếu không có thì bỏ qua) |
| `clear()`          | Xóa toàn bộ phần tử trong set           |
| `union(s2)`        | Hợp hai tập hợp                         |
| `intersection(s2)` | Giao hai tập hợp                        |
| `difference(s2)`   | Hiệu tập hợp                            |

### Ví dụ:

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.union(s2))         # {1, 2, 3, 4, 5}
print(s1.intersection(s2))  # {3}
print(s1.difference(s2))    # {1, 2}
```

---

## III. Tuple là gì?

**Tuple** là một kiểu dữ liệu trong Python giống như danh sách (list) nhưng **không thể thay đổi (immutable)** sau khi tạo ra.

### Cú pháp:

```python
tup = (1, 2, 3)
```

Hoặc tuple một phần tử:

```python
tup1 = (5,)  # Dấu phẩy rất quan trọng
```

### Đặc điểm:

* Có thể chứa nhiều kiểu dữ liệu
* Có thứ tự và truy cập bằng chỉ số
* Không thể thay đổi nội dung

### Ví dụ:

```python
a = (1, 2, 3)
print(a[0])  # 1
```

🎥 Video hướng dẫn: [https://www.youtube.com/watch?v=W8AeOXa\_FEI](https://www.youtube.com/watch?v=W8AeOXa_FEI)

---

## IV. Một số hàm xử lý Tuple

| Hàm/phương thức | Mô tả                                     |
| --------------- | ----------------------------------------- |
| `len(t)`        | Độ dài tuple                              |
| `t.index(x)`    | Trả về chỉ số đầu tiên tìm thấy phần tử x |
| `t.count(x)`    | Đếm số lần xuất hiện của phần tử x        |

### Ví dụ:

```python
t = (1, 2, 2, 3)
print(len(t))       # 4
print(t.count(2))   # 2
print(t.index(3))   # 3
```

---

## V. So sánh Set, Tuple và List

| Tính chất       | List | Tuple | Set   |
| --------------- | ---- | ----- | ----- |
| Thay đổi được   | Có   | Không | Có    |
| Có thứ tự       | Có   | Có    | Không |
| Phần tử trùng   | Có   | Có    | Không |
| Truy cập chỉ số | Có   | Có    | Không |

---

## VI. Ví dụ thực hành

### Ví dụ 1: Tìm hợp và giao của hai tập hợp

```python
a = {1, 2, 3}
b = {2, 3, 4}
print("Hợp:", a.union(b))
print("Giao:", a.intersection(b))
```

### Ví dụ 2: Đếm số lần xuất hiện trong tuple

```python
t = (1, 1, 2, 3, 1)
print("Số lần 1 xuất hiện:", t.count(1))
```

---

## VII. Bài tập luyện tập

1. Tạo một set chứa các chữ cái trong chuỗi "lap trinh python", in ra tập hợp.
2. Nhập vào hai set số nguyên, in ra hợp và giao của chúng.
3. Viết chương trình kiểm tra một phần tử có trong set hay không.
4. Tạo một tuple chứa thông tin sinh viên (họ tên, tuổi, lớp), in từng giá trị.
5. Viết chương trình đếm số lần một phần tử xuất hiện trong tuple.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
