# Thực hành bài 5-4: Các kỹ thuật lặp

## Bài 1: Xếp hạng điểm bằng enumerate

### Yêu cầu

Viết chương trình in thứ hạng và điểm của từng học sinh từ một danh sách điểm đã được sắp xếp theo thứ hạng. Phần tử đầu tiên có hạng `1`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số điểm (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng. Mỗi điểm nằm trong đoạn từ `0` đến `10`.

### Dữ liệu đầu ra

In `n` dòng theo định dạng `Hang <i>: <diem>`, trong đó `i` bắt đầu từ `1`.

Ví dụ:

```text
3
9 8 7
```

Kết quả:

```text
Hang 1: 9
Hang 2: 8
Hang 3: 7
```

### Yêu cầu kỹ thuật

* Sử dụng `enumerate(danh_sach, start=1)`.

## Bài 2: Tìm các vị trí của một giá trị

### Yêu cầu

Viết chương trình tìm tất cả vị trí xuất hiện của số nguyên `x` trong danh sách. Các vị trí được đánh số bắt đầu từ `1`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng.
* Dòng thứ ba chứa số nguyên `x` cần tìm.

### Dữ liệu đầu ra

* Nếu `x` xuất hiện, in các vị trí của `x` trên một dòng theo thứ tự tăng dần, mỗi vị trí cách nhau bởi một khoảng trắng.
* Nếu `x` không xuất hiện, in `Khong tim thay`.

Ví dụ:

```text
6
4 2 4 7 4 9
4
```

Kết quả:

```text
1 3 5
```

### Yêu cầu kỹ thuật

* Sử dụng `enumerate()` với vị trí bắt đầu từ `1`.
* Không sử dụng phương thức `index()`.

## Bài 3: Ghép tên với điểm

### Yêu cầu

Viết chương trình ghép từng tên học sinh với điểm ở cùng vị trí trong hai danh sách.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số học sinh (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` tên, các tên cách nhau bởi một khoảng trắng. Mỗi tên không chứa khoảng trắng.
* Dòng thứ ba chứa đúng `n` số nguyên, là điểm tương ứng. Các điểm cách nhau bởi một khoảng trắng và nằm trong đoạn từ `0` đến `10`.

### Dữ liệu đầu ra

In `n` dòng theo định dạng `<ten>: <diem>`, giữ nguyên thứ tự đầu vào.

Ví dụ:

```text
3
An Binh Chi
8 9 7
```

Kết quả:

```text
An: 8
Binh: 9
Chi: 7
```

### Yêu cầu kỹ thuật

* Sử dụng `zip()` để duyệt đồng thời danh sách tên và danh sách điểm.
* Không truy cập phần tử bằng chỉ số.

## Bài 4: Cộng hai danh sách theo vị trí

### Yêu cầu

Viết chương trình tạo một danh sách mới. Phần tử thứ `i` của danh sách mới bằng tổng phần tử thứ `i` trong hai danh sách đầu vào.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n` (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên của danh sách thứ nhất.
* Dòng thứ ba chứa đúng `n` số nguyên của danh sách thứ hai.
* Các số trên mỗi dòng cách nhau bởi một khoảng trắng và nằm trong đoạn từ `-1000` đến `1000`.

### Dữ liệu đầu ra

In `n` tổng trên một dòng, mỗi tổng cách nhau bởi một khoảng trắng.

Ví dụ:

```text
4
1 2 3 4
10 20 30 40
```

Kết quả:

```text
11 22 33 44
```

### Yêu cầu kỹ thuật

* Sử dụng `zip()` kết hợp với list comprehension.

## Bài 5: Duyệt kho hàng bằng dictionary

### Yêu cầu

Viết chương trình lưu tên sản phẩm và số lượng của sản phẩm đó trong một dictionary, sau đó in từng cặp tên và số lượng theo đúng thứ tự nhập.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số sản phẩm (`1 <= n <= 100`).
* `n` dòng tiếp theo, mỗi dòng chứa tên sản phẩm và số lượng, cách nhau bởi một khoảng trắng.
* Tên sản phẩm không chứa khoảng trắng và không trùng nhau.
* Số lượng là số nguyên trong đoạn từ `0` đến `10 000`.

### Dữ liệu đầu ra

In `n` dòng theo định dạng `<ten>: <so_luong>`, theo đúng thứ tự nhập.

Ví dụ:

```text
3
but 20
vo 15
thuoc 8
```

Kết quả:

```text
but: 20
vo: 15
thuoc: 8
```

### Yêu cầu kỹ thuật

* Lưu dữ liệu trong một dictionary.
* Sử dụng phương thức `.items()` để duyệt đồng thời khóa và giá trị.

## Bài 6: Tạo danh sách bình phương

### Yêu cầu

Viết chương trình tạo danh sách chứa bình phương của các số nguyên từ `1` đến `n`. Bình phương của `i` là `i * i`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

In các số bình phương từ `1 * 1` đến `n * n` trên một dòng, mỗi số cách nhau bởi một khoảng trắng.

Ví dụ:

```text
5
```

Kết quả:

```text
1 4 9 16 25
```

### Yêu cầu kỹ thuật

* Sử dụng list comprehension để tạo danh sách kết quả.
* Không dùng vòng lặp `for` thông thường để tạo danh sách.

## Bài 7: Lọc các số chia hết cho 3

### Yêu cầu

Viết chương trình tạo danh sách mới gồm các số trong danh sách đầu vào chia hết cho `3`. Giữ nguyên thứ tự ban đầu.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng.

### Dữ liệu đầu ra

* Nếu có số chia hết cho `3`, in các số đó trên một dòng, mỗi số cách nhau bởi một khoảng trắng.
* Nếu không có số nào chia hết cho `3`, in `Danh sach rong`.

Ví dụ:

```text
6
4 9 12 7 5 18
```

Kết quả:

```text
9 12 18
```

### Yêu cầu kỹ thuật

* Sử dụng list comprehension có điều kiện để tạo danh sách mới.

## Bài 8: Nhân đôi bằng map

### Yêu cầu

Viết chương trình nhân mỗi số nguyên trong danh sách với `2` và tạo một danh sách kết quả mới.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng. Mỗi số nằm trong đoạn từ `-1000` đến `1000`.

### Dữ liệu đầu ra

In các giá trị sau khi nhân đôi trên một dòng, mỗi giá trị cách nhau bởi một khoảng trắng.

Ví dụ:

```text
5
-2 0 3 7 10
```

Kết quả:

```text
-4 0 6 14 20
```

### Yêu cầu kỹ thuật

* Sử dụng `map()` để áp dụng phép nhân cho từng phần tử.
* Chuyển kết quả của `map()` thành danh sách trước khi in.

## Bài 9: Lọc số dương bằng filter

### Yêu cầu

Viết chương trình lọc các số dương từ danh sách số nguyên. Số dương là số lớn hơn `0`; số `0` và các số âm bị loại bỏ. Giữ nguyên thứ tự ban đầu.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử (`1 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng.

### Dữ liệu đầu ra

* Nếu có số dương, in các số dương trên một dòng, mỗi số cách nhau bởi một khoảng trắng.
* Nếu không có số dương, in `Khong co so duong`.

Ví dụ:

```text
6
-3 0 5 -1 8 2
```

Kết quả:

```text
5 8 2
```

### Yêu cầu kỹ thuật

* Sử dụng `filter()` để lọc dữ liệu.
* Chuyển kết quả của `filter()` thành danh sách trước khi kiểm tra và in.

## Bài 10: Generator sinh số chẵn

### Yêu cầu

Viết một generator sinh lần lượt `n` số chẵn không âm đầu tiên, bắt đầu từ `0`. Sau đó, duyệt generator để in các số được sinh ra.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

In `n` số chẵn không âm đầu tiên trên một dòng, mỗi số cách nhau bởi một khoảng trắng.

Ví dụ:

```text
5
```

Kết quả:

```text
0 2 4 6 8
```

### Yêu cầu kỹ thuật

* Định nghĩa một hàm generator có sử dụng `yield`.
* Không tạo và trả về toàn bộ danh sách số chẵn bên trong hàm.

## Bài 11: Chu kỳ đèn giao thông

### Yêu cầu

Ba trạng thái đèn giao thông lặp theo thứ tự `Do`, `Xanh`, `Vang`, sau đó quay lại `Do`. Viết chương trình in `n` trạng thái đầu tiên của chu kỳ này.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 100`).

### Dữ liệu đầu ra

In `n` dòng. Mỗi dòng có định dạng `<i>: <trang_thai>`, trong đó `i` bắt đầu từ `1`.

Ví dụ:

```text
7
```

Kết quả:

```text
1: Do
2: Xanh
3: Vang
4: Do
5: Xanh
6: Vang
7: Do
```

### Yêu cầu kỹ thuật

* Khai báo danh sách trạng thái theo thứ tự `Do`, `Xanh`, `Vang`.
* Sử dụng `cycle()` từ thư viện `itertools` để lặp chu kỳ.
* Dừng sau khi đã in đúng `n` trạng thái; không để chương trình lặp vô hạn.
