# Bài 5-1: Vòng lặp for

## Khung học vui

**Bối cảnh:** Bạn được giao tự động hóa việc lặp lại trong lớp: điểm danh, in bảng cửu chương, đếm lượt thử game, và tìm dữ liệu trong danh sách.

**Thử ngay trong 5 phút:** Dùng `for` in 5 lời nhắc học tập khác nhau, sau đó dùng `while` cho trò đoán mật mã 3 lần.

**Hoạt động cặp đôi:** Một bạn đóng vai người dùng nhập dữ liệu, một bạn viết vòng lặp xử lý. Đổi vai khi chương trình chạy đúng.

**Nâng cấp sau giờ học:** Tạo game đoán số có giới hạn lượt, báo cao/thấp, và in tổng số lượt đã dùng.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
Vòng lặp `for` trong Python được sử dụng để lặp qua một dãy (sequence) như danh sách (list), tuple, chuỗi (string), hoặc các đối tượng có thể lặp khác (iterable). Vòng lặp `for` cho phép bạn thực hiện một hành động nhiều lần trên các phần tử trong dãy mà không cần phải xác định số lần lặp thủ công.

## Cấu trúc cơ bản

Cấu trúc của vòng lặp `for` trong Python như sau:

```python
for biến in dãy:
    # Thực hiện hành động với biến
```

- **`biến`**: Là tên biến được sử dụng để lưu trữ giá trị của mỗi phần tử trong dãy khi vòng lặp đi qua.
- **`dãy`**: Là dãy mà bạn muốn lặp qua (ví dụ: danh sách, chuỗi, tuple, v.v...).

## Ví dụ cơ bản

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

Kết quả:

```
apple
banana
cherry
```

Trong ví dụ này, vòng lặp `for` sẽ lặp qua mỗi phần tử trong danh sách `fruits`, gán từng phần tử cho biến `fruit`, và in ra giá trị của `fruit` ở mỗi lần lặp.

## Vòng lặp for với chuỗi

Vòng lặp `for` cũng có thể được sử dụng để lặp qua các ký tự trong một chuỗi.

```python
word = "Python"

for letter in word:
    print(letter)
```

Kết quả:

```
P
y
t
h
o
n
```

Trong ví dụ này, vòng lặp sẽ in ra từng ký tự trong chuỗi "Python".

## Vòng lặp for với dãy số

Bạn cũng có thể sử dụng vòng lặp `for` để lặp qua các số trong một dãy số được tạo ra bởi hàm `range()`.

```python
for i in range(5):
    print(i)
```

Kết quả:

```
0
1
2
3
4
```

Hàm `range(5)` tạo ra một dãy số từ 0 đến 4, và vòng lặp `for` lặp qua từng số trong dãy đó.

### `range(start, stop, step)`

Hàm `range()` có thể nhận thêm các tham số `start` (giá trị bắt đầu), `stop` (giá trị kết thúc), và `step` (bước nhảy).

```python
for i in range(1, 10, 2):
    print(i)
```

Kết quả:

```
1
3
5
7
9
```

Trong ví dụ này, vòng lặp bắt đầu từ 1 và kết thúc trước 10, với bước nhảy là 2, vì vậy chương trình in ra các số lẻ từ 1 đến 9.

## Vòng lặp for với `else`

Vòng lặp `for` có thể đi kèm với một phần `else`, và phần này sẽ được thực thi khi vòng lặp hoàn tất mà không bị dừng lại bởi `break`.

```python
for i in range(5):
    print(i)
else:
    print("Vòng lặp hoàn tất")
```

Kết quả:

```
0
1
2
3
4
Vòng lặp hoàn tất
```

Nếu bạn dùng `break` để thoát khỏi vòng lặp trước khi kết thúc, phần `else` sẽ không được thực thi.

```python
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("Vòng lặp hoàn tất")
```

Kết quả:

```
0
1
2
```

Trong trường hợp này, vì vòng lặp bị dừng lại bởi `break`, phần `else` sẽ không được thực thi.

## Kết luận

Vòng lặp `for` là một công cụ mạnh mẽ và linh hoạt trong Python, giúp bạn lặp qua các phần tử trong các dãy khác nhau một cách dễ dàng. Bạn có thể sử dụng vòng lặp `for` để xử lý các dữ liệu trong danh sách, chuỗi, tuple, hoặc dãy số, và thậm chí kết hợp với hàm `range()` để điều khiển số lần lặp.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
