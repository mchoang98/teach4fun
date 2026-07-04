# Bài 5-2: Vòng lặp while

## Khung học vui

**Bối cảnh:** Bạn được giao tự động hóa việc lặp lại trong lớp: điểm danh, in bảng cửu chương, đếm lượt thử game, và tìm dữ liệu trong danh sách.

**Thử ngay trong 5 phút:** Dùng `for` in 5 lời nhắc học tập khác nhau, sau đó dùng `while` cho trò đoán mật mã 3 lần.

**Hoạt động cặp đôi:** Một bạn đóng vai người dùng nhập dữ liệu, một bạn viết vòng lặp xử lý. Đổi vai khi chương trình chạy đúng.

**Nâng cấp sau giờ học:** Tạo game đoán số có giới hạn lượt, báo cao/thấp, và in tổng số lượt đã dùng.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
Vòng lặp `while` trong Python được sử dụng để lặp lại một khối mã khi điều kiện xác định là đúng. Điều này có nghĩa là vòng lặp sẽ tiếp tục chạy cho đến khi điều kiện trong câu lệnh `while` trở thành sai.

## Cấu trúc cơ bản

Cấu trúc của vòng lặp `while` trong Python như sau:

```python
while điều_kiện:
    # Thực hiện hành động
```

- **`điều_kiện`**: Là một biểu thức điều kiện, nếu điều kiện này trả về `True`, vòng lặp sẽ tiếp tục lặp. Khi điều kiện trả về `False`, vòng lặp sẽ dừng lại.
- **Khối mã bên trong vòng lặp**: Mã sẽ được thực thi liên tục miễn là điều kiện vẫn đúng.

## Ví dụ cơ bản

```python
count = 0

while count < 5:
    print(count)
    count += 1
```

Kết quả:

```
0
1
2
3
4
```

Trong ví dụ này:
- Ban đầu `count = 0`, vòng lặp kiểm tra điều kiện `count < 5`, và thực thi mã bên trong vòng lặp.
- Sau mỗi lần lặp, `count` được tăng lên 1 (`count += 1`).
- Khi `count` đạt 5, điều kiện `count < 5` trở thành `False`, và vòng lặp dừng lại.

## Vòng lặp while vô hạn

Nếu điều kiện trong vòng lặp `while` luôn đúng, vòng lặp sẽ chạy vô hạn. Điều này thường được sử dụng trong những trường hợp bạn không biết chính xác số lần lặp mà chỉ muốn vòng lặp tiếp tục cho đến khi có một điều kiện dừng khác.

Ví dụ vòng lặp vô hạn:

```python
while True:
    response = input("Nhập 'quit' để thoát: ")
    if response == 'quit':
        print("Thoát khỏi vòng lặp.")
        break
```

Kết quả:

```
Nhập 'quit' để thoát: hello
Nhập 'quit' để thoát: quit
Thoát khỏi vòng lặp.
```

Ở đây:
- Vòng lặp sẽ tiếp tục yêu cầu người dùng nhập dữ liệu cho đến khi họ nhập 'quit'.
- Khi người dùng nhập 'quit', vòng lặp sẽ dừng nhờ câu lệnh `break`.

## Vòng lặp while với câu lệnh `else`

Giống như vòng lặp `for`, vòng lặp `while` cũng có thể đi kèm với câu lệnh `else`. Câu lệnh `else` sẽ được thực thi nếu vòng lặp kết thúc mà không bị dừng lại bởi `break`.

```python
count = 0

while count < 5:
    print(count)
    count += 1
else:
    print("Vòng lặp kết thúc.")
```

Kết quả:

```
0
1
2
3
4
Vòng lặp kết thúc.
```

Trong trường hợp này, phần `else` sẽ được thực thi khi vòng lặp hoàn tất mà không gặp `break`.

## Sử dụng `break` và `continue` trong vòng lặp while

- **`break`**: Dừng ngay lập tức vòng lặp.
- **`continue`**: Bỏ qua phần còn lại của vòng lặp và quay lại kiểm tra điều kiện.

### Ví dụ sử dụng `break`:

```python
count = 0

while count < 10:
    if count == 5:
        break
    print(count)
    count += 1
```

Kết quả:

```
0
1
2
3
4
```

Vòng lặp sẽ dừng lại khi `count` đạt giá trị 5 nhờ câu lệnh `break`.

### Ví dụ sử dụng `continue`:

```python
count = 0

while count < 5:
    count += 1
    if count == 3:
        continue
    print(count)
```

Kết quả:

```
1
2
4
5
```

Ở đây, khi `count` đạt 3, câu lệnh `continue` sẽ bỏ qua phần còn lại của vòng lặp và tiếp tục với lần lặp tiếp theo.

## Kết luận

Vòng lặp `while` là một công cụ mạnh mẽ trong Python, đặc biệt khi bạn không biết trước số lần cần lặp. Bạn có thể kết hợp vòng lặp với các câu lệnh `break`, `continue`, và `else` để kiểm soát quá trình lặp và dừng lại khi cần thiết.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
