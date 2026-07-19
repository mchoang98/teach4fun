# Thực hành bài 5-1: Vòng lặp for

## Bài 1: Điểm danh nhanh

### Yêu cầu

Viết chương trình đọc danh sách tên học sinh và in lời chào cho từng bạn theo đúng thứ tự đã nhập.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số học sinh (`1 <= n <= 50`).
* Dòng thứ hai chứa đúng `n` tên, các tên cách nhau bởi một khoảng trắng.
* Mỗi tên không chứa khoảng trắng.

### Dữ liệu đầu ra

Với mỗi học sinh, in một dòng theo mẫu `Xin chao <ten>`.

Ví dụ:

```text
3
An Binh Chi
```

Kết quả:

```text
Xin chao An
Xin chao Binh
Xin chao Chi
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để duyệt qua danh sách tên.

## Bài 2: In dãy số từ 1 đến n

### Yêu cầu

Viết chương trình in lần lượt các số nguyên từ `1` đến `n`, bao gồm cả `1` và `n`.

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

* Sử dụng vòng lặp `for` và hàm `range()`.

## Bài 3: Các số chẵn trong đoạn

### Yêu cầu

Viết chương trình in tất cả số chẵn trong đoạn từ `a` đến `b`, bao gồm cả hai đầu mút nếu chúng là số chẵn. Biết rằng `a` luôn nhỏ hơn hoặc bằng `b`.

### Dữ liệu đầu vào

Một dòng chứa hai số nguyên `a` và `b`, cách nhau bởi một khoảng trắng (`0 <= a <= b <= 1000`).

### Dữ liệu đầu ra

* In các số chẵn theo thứ tự tăng dần trên một dòng, mỗi số cách nhau bởi một khoảng trắng.
* Nếu đoạn từ `a` đến `b` không có số chẵn, in `Khong co so chan`.

Ví dụ:

```text
3 10
```

Kết quả:

```text
4 6 8 10
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` với `range()`.
* Sử dụng bước nhảy phù hợp để tạo dãy số chẵn; không cần duyệt qua mọi số trong đoạn.

## Bài 4: Tổng từ 1 đến n

### Yêu cầu

Viết chương trình tính tổng các số nguyên từ `1` đến `n` theo công thức:

`tong = 1 + 2 + 3 + ... + n`

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

* Sử dụng vòng lặp `for` để cộng lần lượt từng số vào biến tổng.
* Không sử dụng công thức `n * (n + 1) // 2` và không sử dụng hàm `sum()`.

## Bài 5: Bảng nhân của một số

### Yêu cầu

Viết chương trình in bảng nhân của số nguyên `n`, từ `n x 1` đến `n x 10`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 20`).

### Dữ liệu đầu ra

In đúng 10 dòng. Dòng thứ `i` có định dạng `n x i = ket_qua`, trong đó `i` lần lượt nhận các giá trị từ `1` đến `10`.

Ví dụ:

```text
3
```

Kết quả:

```text
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` và hàm `range()`.

## Bài 6: Đếm điểm đạt

### Yêu cầu

Viết chương trình đếm số học sinh đạt yêu cầu. Một học sinh được tính là đạt khi điểm lớn hơn hoặc bằng `5`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số học sinh (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số thực, là điểm của các học sinh. Các điểm cách nhau bởi một khoảng trắng và đều nằm trong đoạn từ `0` đến `10`.

### Dữ liệu đầu ra

In một số nguyên là số học sinh có điểm lớn hơn hoặc bằng `5`.

Ví dụ:

```text
5
7.5 4 5 3.5 9
```

Kết quả:

```text
3
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để duyệt qua danh sách điểm.
* Sử dụng câu lệnh `if` để kiểm tra từng điểm.

## Bài 7: Đếm nguyên âm trong từ

### Yêu cầu

Viết chương trình đếm số nguyên âm trong một từ. Các ký tự được tính là nguyên âm gồm `a`, `e`, `i`, `o`, `u` và các chữ cái viết hoa tương ứng `A`, `E`, `I`, `O`, `U`. Mỗi lần xuất hiện của một nguyên âm được tính một lần.

### Dữ liệu đầu vào

Một dòng chứa một từ chỉ gồm các chữ cái tiếng Anh và không chứa khoảng trắng. Độ dài của từ từ `1` đến `100` ký tự.

### Dữ liệu đầu ra

In một số nguyên là số nguyên âm có trong từ.

Ví dụ:

```text
Education
```

Kết quả:

```text
5
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để duyệt qua từng ký tự trong từ.
* Không sử dụng phương thức `count()`.

## Bài 8: Tìm tên trong danh sách

### Yêu cầu

Viết chương trình tìm một tên trong danh sách. Phép so sánh tên phân biệt chữ hoa và chữ thường.

* Nếu tìm thấy tên cần tìm, in `Da tim thay` và kết thúc việc tìm kiếm ngay.
* Nếu đã kiểm tra hết danh sách mà không tìm thấy, in `Khong tim thay`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số tên trong danh sách (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` tên, các tên cách nhau bởi một khoảng trắng. Mỗi tên không chứa khoảng trắng.
* Dòng thứ ba chứa tên cần tìm.

### Dữ liệu đầu ra

In đúng một trong hai thông báo: `Da tim thay` hoặc `Khong tim thay`.

Ví dụ:

```text
4
An Binh Chi Dung
Chi
```

Kết quả:

```text
Da tim thay
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for...else`.
* Sử dụng `break` để dừng vòng lặp khi tìm thấy tên.

## Bài 9: Đếm ngược bằng for

### Yêu cầu

Viết chương trình in lần lượt các số nguyên từ `n` giảm dần đến `1`. Sau khi in hết các số, in thêm thông báo `Bat dau!`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

* In các số từ `n` đến `1`, mỗi số trên một dòng.
* Dòng cuối cùng in `Bat dau!`.

Ví dụ:

```text
3
```

Kết quả:

```text
3
2
1
Bat dau!
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` và hàm `range()` với bước nhảy âm.
* Không sử dụng vòng lặp `while`.

## Bài 10: Bình phương các số

### Yêu cầu

Viết chương trình in bình phương của từng số nguyên từ `1` đến `n`. Bình phương của số `i` được tính bằng `i * i`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

In đúng `n` dòng. Dòng tương ứng với số `i` có định dạng `i: binh_phuong`.

Ví dụ:

```text
4
```

Kết quả:

```text
1: 1
2: 4
3: 9
4: 16
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` và hàm `range()`.
* Không sử dụng toán tử `**` hoặc hàm `pow()`.

## Bài 11: Tổng các số chẵn từ 1 đến n

### Yêu cầu

Viết chương trình tính tổng tất cả số chẵn từ `1` đến `n`, bao gồm `n` nếu `n` là số chẵn.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 10 000`).

### Dữ liệu đầu ra

In một số nguyên là tổng các số chẵn từ `1` đến `n`.

Ví dụ:

```text
7
```

Kết quả:

```text
12
```

Giải thích ví dụ: Các số chẵn cần cộng là `2`, `4` và `6`, nên tổng bằng `12`.

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` với bước nhảy phù hợp.
* Không sử dụng hàm `sum()`.

## Bài 12: Tính giai thừa

### Yêu cầu

Viết chương trình tính giai thừa của số nguyên không âm `n`.

* Nếu `n > 0`, giai thừa được tính bằng `n! = 1 * 2 * 3 * ... * n`.
* Nếu `n = 0`, quy ước `0! = 1`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`0 <= n <= 20`).

### Dữ liệu đầu ra

In một số nguyên là `n!`.

Ví dụ:

```text
5
```

Kết quả:

```text
120
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để thực hiện các phép nhân.
* Không sử dụng hàm tính giai thừa có sẵn.

## Bài 13: Đảo ngược một từ

### Yêu cầu

Viết chương trình tạo và in một chuỗi mới có thứ tự ký tự ngược lại so với từ đã nhập. Giữ nguyên chữ hoa và chữ thường của từng ký tự.

### Dữ liệu đầu vào

Một dòng chứa một từ có từ `1` đến `100` ký tự và không chứa khoảng trắng.

### Dữ liệu đầu ra

In từ sau khi đã đảo ngược thứ tự các ký tự.

Ví dụ:

```text
Python
```

Kết quả:

```text
nohtyP
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để duyệt qua các vị trí trong chuỗi theo thứ tự giảm dần.
* Không sử dụng cú pháp cắt chuỗi đảo ngược `[::-1]` và không sử dụng hàm `reversed()`.

## Bài 14: Tìm số lớn nhất

### Yêu cầu

Viết chương trình tìm số nguyên lớn nhất trong một danh sách. Các số trong danh sách có thể là số âm, số `0` hoặc số dương.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử của danh sách (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng. Mỗi số nằm trong đoạn từ `-10 000` đến `10 000`.

### Dữ liệu đầu ra

In một số nguyên là giá trị lớn nhất trong danh sách.

Ví dụ:

```text
5
-8 -2 -10 -3 -5
```

Kết quả:

```text
-2
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` và câu lệnh `if`.
* Khởi tạo giá trị lớn nhất từ một phần tử của danh sách để xử lý đúng danh sách chỉ có số âm.
* Không sử dụng hàm `max()` và không sắp xếp danh sách.

## Bài 15: Đếm số lần xuất hiện

### Yêu cầu

Viết chương trình đếm số lần giá trị `x` xuất hiện trong danh sách số nguyên. Mỗi phần tử bằng `x` được tính là một lần xuất hiện.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử của danh sách (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng.
* Dòng thứ ba chứa số nguyên `x` cần đếm.
* Mỗi số trong danh sách và `x` đều nằm trong đoạn từ `-1000` đến `1000`.

### Dữ liệu đầu ra

In một số nguyên là số lần `x` xuất hiện. Nếu `x` không xuất hiện, in `0`.

Ví dụ:

```text
7
2 5 2 8 2 3 5
2
```

Kết quả:

```text
3
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` để kiểm tra từng phần tử.
* Không sử dụng phương thức `count()`.

## Bài 16: Các bội số của 3

### Yêu cầu

Viết chương trình in tất cả bội số dương của `3` không vượt quá `n`. Các số được in theo thứ tự tăng dần, bắt đầu từ `3`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 10 000`).

### Dữ liệu đầu ra

* Nếu `n >= 3`, in các bội số dương của `3` không vượt quá `n` trên một dòng, mỗi số cách nhau bởi một khoảng trắng.
* Nếu `n < 3`, in `Khong co boi so`.

Ví dụ:

```text
11
```

Kết quả:

```text
3 6 9
```

### Yêu cầu kỹ thuật

* Sử dụng vòng lặp `for` với `range()` và bước nhảy bằng `3`.
* Không cần duyệt qua các số không phải bội số của `3`.

## Bài 17: Đếm số lớn hơn trung bình

### Yêu cầu

Viết chương trình tính trung bình cộng của danh sách số thực, sau đó đếm số phần tử lớn hơn giá trị trung bình đó. Phần tử bằng giá trị trung bình không được tính.

Trung bình cộng được tính bằng tổng các phần tử chia cho số phần tử `n`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử của danh sách (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số thực, các số cách nhau bởi một khoảng trắng. Mỗi số nằm trong đoạn từ `-10 000` đến `10 000`.

### Dữ liệu đầu ra

In một số nguyên là số phần tử lớn hơn trung bình cộng của danh sách.

Ví dụ:

```text
5
2 4 6 8 10
```

Kết quả:

```text
2
```

Giải thích ví dụ: Trung bình cộng bằng `6`. Hai phần tử lớn hơn `6` là `8` và `10`.

### Yêu cầu kỹ thuật

* Sử dụng một vòng lặp `for` để tính tổng.
* Sử dụng một vòng lặp `for` khác để đếm các phần tử lớn hơn trung bình.
* Không sử dụng hàm `sum()`.

## Bài 18: Kiểm tra số nguyên tố

### Yêu cầu

Viết chương trình kiểm tra số nguyên `n` có phải là số nguyên tố hay không. Một số là số nguyên tố khi số đó lớn hơn `1` và chỉ chia hết cho `1` và chính nó.

* Nếu `n` là số nguyên tố, in `La so nguyen to`.
* Nếu `n` không phải là số nguyên tố, in `Khong phai so nguyen to`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`0 <= n <= 10 000`).

### Dữ liệu đầu ra

In đúng một trong hai thông báo: `La so nguyen to` hoặc `Khong phai so nguyen to`.

Ví dụ:

```text
17
```

Kết quả:

```text
La so nguyen to
```

### Yêu cầu kỹ thuật

* Với `n >= 2`, sử dụng vòng lặp `for...else` để thử các ước số từ `2` đến `n - 1`.
* Sử dụng `break` ngay khi tìm thấy một ước số của `n`.
* Xử lý riêng trường hợp `n < 2` vì các số này không phải là số nguyên tố.
