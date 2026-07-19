# Thực hành bài 5-2: Vòng lặp while

## Bài 1: Đếm ngược khai giảng

### Yêu cầu

Viết chương trình in các số nguyên từ `n` giảm dần đến `1`. Sau đó, in thông báo `START`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

* In các số từ `n` đến `1`, mỗi số trên một dòng.
* Dòng cuối cùng in `START`.

Ví dụ:

```text
3
```

Kết quả:

```text
3
2
1
START
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while`.
* Sau mỗi lần lặp, giảm biến đếm đi `1`.

## Bài 2: Đếm từ 1 đến n

### Yêu cầu

Viết chương trình in lần lượt các số nguyên từ `1` đến `n`, bao gồm cả hai đầu mút.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

In các số từ `1` đến `n` trên cùng một dòng, mỗi số cách nhau bởi một khoảng trắng.

Ví dụ:

```text
5
```

Kết quả:

```text
1 2 3 4 5
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while`.
* Không sử dụng vòng lặp `for`.

## Bài 3: Các số lẻ không vượt quá n

### Yêu cầu

Viết chương trình in tất cả số lẻ dương không vượt quá `n`, theo thứ tự tăng dần và bắt đầu từ `1`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 1000`).

### Dữ liệu đầu ra

In các số lẻ dương không vượt quá `n` trên một dòng, mỗi số cách nhau bởi một khoảng trắng.

Ví dụ:

```text
8
```

Kết quả:

```text
1 3 5 7
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while`.
* Bắt đầu biến đếm từ `1` và tăng thêm `2` sau mỗi lần lặp.

## Bài 4: Tổng từ 1 đến n

### Yêu cầu

Viết chương trình tính tổng các số nguyên từ `1` đến `n` theo công thức `1 + 2 + 3 + ... + n`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 10 000`).

### Dữ liệu đầu ra

In một số nguyên là tổng tính được.

Ví dụ:

```text
5
```

Kết quả:

```text
15
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while` để cộng lần lượt từng số vào biến tổng.
* Không sử dụng hàm `sum()` và không sử dụng công thức `n * (n + 1) // 2`.

## Bài 5: Bảng nhân của một số

### Yêu cầu

Viết chương trình in bảng nhân của số nguyên `n`, từ `n x 1` đến `n x 10`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 20`).

### Dữ liệu đầu ra

In đúng 10 dòng. Dòng thứ `i` có định dạng `n x i = ket_qua`, trong đó `i` nhận các giá trị từ `1` đến `10`.

Ví dụ:

```text
2
```

Kết quả:

```text
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while` với biến đếm từ `1` đến `10`.
* Không sử dụng vòng lặp `for`.

## Bài 6: Đếm số chữ số

### Yêu cầu

Viết chương trình đếm số chữ số của số nguyên không âm `n`. Số `0` có một chữ số.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`0 <= n <= 1 000 000 000`).

### Dữ liệu đầu ra

In một số nguyên là số chữ số của `n`.

Ví dụ:

```text
50820
```

Kết quả:

```text
5
```

### Yêu cầu kỹ thuật

* Xử lý riêng trường hợp `n = 0`.
* Với `n > 0`, sử dụng vòng lặp `while` và phép chia nguyên `// 10` để lần lượt bỏ chữ số cuối.
* Không chuyển số thành chuỗi để đếm.

## Bài 7: Tính tổng các chữ số

### Yêu cầu

Viết chương trình tính tổng các chữ số của số nguyên không âm `n`. Nếu `n = 0`, tổng các chữ số bằng `0`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`0 <= n <= 1 000 000 000`).

### Dữ liệu đầu ra

In một số nguyên là tổng các chữ số của `n`.

Ví dụ:

```text
4072
```

Kết quả:

```text
13
```

Giải thích ví dụ: `4 + 0 + 7 + 2 = 13`.

### Yêu cầu kỹ thuật

* Sử dụng `% 10` để lấy chữ số cuối và `// 10` để bỏ chữ số cuối.
* Lặp lại việc xử lý bằng vòng lặp `while`.
* Không chuyển số thành chuỗi.

## Bài 8: Nhập số cho đến khi gặp 0

### Yêu cầu

Viết chương trình đọc lần lượt các số nguyên và tính tổng của chúng. Khi đọc được số `0`, chương trình dừng nhập. Số `0` chỉ là dấu hiệu kết thúc và không làm thay đổi tổng.

### Dữ liệu đầu vào

* Mỗi dòng chứa một số nguyên trong đoạn từ `-10 000` đến `10 000`.
* Dòng cuối cùng chứa số `0`.
* Có thể không có số nào trước số `0`.

### Dữ liệu đầu ra

In một số nguyên là tổng của tất cả số đã nhập trước số `0`. Nếu số đầu tiên là `0`, in `0`.

Ví dụ:

```text
5
-2
7
0
```

Kết quả:

```text
10
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while` với điều kiện dừng dựa trên giá trị vừa nhập.
* Không biết trước số lượng giá trị trước khi vòng lặp bắt đầu.

## Bài 9: Yêu cầu nhập số hợp lệ

### Yêu cầu

Viết chương trình đọc các số nguyên cho đến khi người dùng nhập một số nằm trong đoạn từ `1` đến `10`, bao gồm cả `1` và `10`.

* Với mỗi số nhỏ hơn `1` hoặc lớn hơn `10`, in `Khong hop le` rồi tiếp tục đọc số tiếp theo.
* Khi nhận được số hợp lệ, in `Da nhan: <n>` và kết thúc chương trình.

### Dữ liệu đầu vào

Mỗi dòng chứa một số nguyên. Dữ liệu luôn có ít nhất một số thuộc đoạn từ `1` đến `10`.

### Dữ liệu đầu ra

* Với mỗi số không hợp lệ, in một dòng `Khong hop le`.
* Sau khi nhận được số hợp lệ đầu tiên, in `Da nhan: <n>`.

Ví dụ:

```text
-3
15
7
```

Kết quả:

```text
Khong hop le
Khong hop le
Da nhan: 7
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while` để tiếp tục đọc khi giá trị chưa hợp lệ.
* Không sử dụng vòng lặp `for`.

## Bài 10: Mật khẩu với ba lượt thử

### Yêu cầu

Mật khẩu đúng là `python123`. Viết chương trình cho phép nhập mật khẩu tối đa ba lần. Phép so sánh mật khẩu phân biệt chữ hoa và chữ thường.

* Nếu nhập đúng, in `Dang nhap thanh cong` và dừng ngay, không đọc thêm dữ liệu.
* Nếu cả ba lần đều sai, in `Tai khoan bi khoa`.

### Dữ liệu đầu vào

Tối đa ba dòng, mỗi dòng chứa một mật khẩu không có khoảng trắng. Nếu mật khẩu đúng xuất hiện trước lần thứ ba, dữ liệu kết thúc tại dòng đó.

### Dữ liệu đầu ra

In đúng một trong hai thông báo: `Dang nhap thanh cong` hoặc `Tai khoan bi khoa`.

Ví dụ:

```text
abc
Python123
python123
```

Kết quả:

```text
Dang nhap thanh cong
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while...else` để quản lý tối đa ba lượt thử.
* Sử dụng `break` khi mật khẩu đúng.

## Bài 11: Tính tổng nhưng bỏ qua số âm

### Yêu cầu

Viết chương trình đọc các số nguyên cho đến khi gặp số `0`.

* Nếu số vừa đọc là số dương, cộng số đó vào tổng.
* Nếu số vừa đọc là số âm, bỏ qua số đó và tiếp tục đọc.
* Nếu số vừa đọc bằng `0`, kết thúc vòng lặp. Số `0` không được cộng vào tổng.

### Dữ liệu đầu vào

* Mỗi dòng chứa một số nguyên trong đoạn từ `-10 000` đến `10 000`.
* Dòng cuối cùng chứa số `0`.

### Dữ liệu đầu ra

In một số nguyên là tổng của các số dương đã nhập. Nếu không có số dương nào, in `0`.

Ví dụ:

```text
5
-3
8
-2
0
```

Kết quả:

```text
13
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `while True`.
* Sử dụng `break` khi đọc được số `0`.
* Sử dụng `continue` khi đọc được số âm.
