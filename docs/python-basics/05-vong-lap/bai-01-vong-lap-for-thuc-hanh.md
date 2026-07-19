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
