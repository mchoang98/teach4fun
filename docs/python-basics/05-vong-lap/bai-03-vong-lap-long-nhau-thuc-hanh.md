# Thực hành bài 5-3: Vòng lặp lồng nhau

## Bài 1: Bảng ghế lớp học

### Yêu cầu

Viết chương trình in sơ đồ ghế của một lớp học có `hang` hàng và `cot` cột. Ghế ở hàng `i`, cột `j` được ký hiệu là `R<i>C<j>`. Hàng và cột đều được đánh số bắt đầu từ `1`.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `hang`, là số hàng ghế (`1 <= hang <= 20`).
* Dòng thứ hai chứa số nguyên `cot`, là số cột ghế (`1 <= cot <= 20`).

### Dữ liệu đầu ra

In `hang` dòng. Mỗi dòng chứa `cot` ký hiệu ghế, các ký hiệu cách nhau bởi một khoảng trắng.

Ví dụ:

```text
2
3
```

Kết quả:

```text
R1C1 R1C2 R1C3
R2C1 R2C2 R2C3
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Vòng lặp ngoài duyệt các hàng và vòng lặp trong duyệt các cột.

## Bài 2: Hình chữ nhật đặc

### Yêu cầu

Viết chương trình vẽ một hình chữ nhật gồm `hang` hàng và `cot` cột bằng ký tự `*`.

### Dữ liệu đầu vào

Một dòng chứa hai số nguyên `hang` và `cot`, cách nhau bởi một khoảng trắng (`1 <= hang, cot <= 20`).

### Dữ liệu đầu ra

In `hang` dòng. Mỗi dòng chứa đúng `cot` ký tự `*` liên tiếp và không có khoảng trắng giữa các ký tự.

Ví dụ:

```text
3 5
```

Kết quả:

```text
*****
*****
*****
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau để in từng hàng và từng ký tự.
* Không tạo sẵn cả dòng bằng phép nhân chuỗi, chẳng hạn `"*" * cot`.

## Bài 3: Lưới số theo hàng

### Yêu cầu

Viết chương trình in một lưới gồm `n` hàng và `n` cột. Tất cả giá trị ở hàng thứ `i` đều bằng `i`, với `i` bắt đầu từ `1`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 20`).

### Dữ liệu đầu ra

In `n` dòng, mỗi dòng có `n` số nguyên. Các số trên cùng một dòng cách nhau bởi một khoảng trắng.

Ví dụ:

```text
4
```

Kết quả:

```text
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Giá trị được in phải dựa vào biến đếm của vòng lặp ngoài.

## Bài 4: Tam giác vuông bằng dấu sao

### Yêu cầu

Viết chương trình vẽ một tam giác vuông có `n` hàng bằng ký tự `*`. Hàng thứ `i` chứa đúng `i` ký tự `*`, với `i` bắt đầu từ `1`.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 30`).

### Dữ liệu đầu ra

In `n` dòng tạo thành tam giác. Các ký tự `*` trên một dòng được viết liền nhau, không có khoảng trắng.

Ví dụ:

```text
4
```

Kết quả:

```text
*
**
***
****
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Không sử dụng phép nhân chuỗi để tạo một hàng.

## Bài 5: Tam giác vuông ngược

### Yêu cầu

Viết chương trình vẽ một tam giác vuông ngược có `n` hàng bằng ký tự `#`. Hàng đầu tiên có `n` ký tự; mỗi hàng tiếp theo ít hơn hàng trước một ký tự; hàng cuối cùng có một ký tự.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 30`).

### Dữ liệu đầu ra

In `n` dòng tạo thành tam giác. Các ký tự `#` trên một dòng được viết liền nhau, không có khoảng trắng.

Ví dụ:

```text
4
```

Kết quả:

```text
####
###
##
#
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Số lần lặp của vòng lặp trong phải giảm theo từng hàng.
* Không sử dụng phép nhân chuỗi để tạo một hàng.

## Bài 6: Tam giác số tăng dần

### Yêu cầu

Viết chương trình in một tam giác số có `n` hàng. Hàng thứ `i` chứa các số nguyên từ `1` đến `i`, theo thứ tự tăng dần.

### Dữ liệu đầu vào

Một dòng chứa số nguyên `n` (`1 <= n <= 20`).

### Dữ liệu đầu ra

In `n` dòng. Các số trên cùng một dòng cách nhau bởi một khoảng trắng.

Ví dụ:

```text
4
```

Kết quả:

```text
1
1 2
1 2 3
1 2 3 4
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Giá trị được in phải dựa vào biến đếm của vòng lặp trong.

## Bài 7: Khung hình chữ nhật

### Yêu cầu

Viết chương trình vẽ đường viền của hình chữ nhật có `hang` hàng và `cot` cột.

* Vị trí thuộc hàng đầu tiên, hàng cuối cùng, cột đầu tiên hoặc cột cuối cùng được in bằng ký tự `*`.
* Các vị trí còn lại được in bằng dấu chấm `.`.
* Nếu `hang = 1` hoặc `cot = 1`, mọi vị trí đều nằm trên đường viền và được in bằng `*`.

### Dữ liệu đầu vào

Một dòng chứa hai số nguyên `hang` và `cot`, cách nhau bởi một khoảng trắng (`1 <= hang, cot <= 30`).

### Dữ liệu đầu ra

In `hang` dòng, mỗi dòng gồm đúng `cot` ký tự và không có khoảng trắng giữa các ký tự.

Ví dụ:

```text
4 6
```

Kết quả:

```text
******
*....*
*....*
******
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau và câu lệnh `if...else`.
* Kiểm tra vị trí hiện tại có thuộc đường viền hay không.

## Bài 8: Bàn cờ ký tự

### Yêu cầu

Viết chương trình tạo một bàn cờ gồm `hang` hàng và `cot` cột bằng hai ký tự `#` và `.`.

* Ô ở hàng `1`, cột `1` là ký tự `#`.
* Hai ô liền nhau theo chiều ngang hoặc chiều dọc phải chứa hai ký tự khác nhau.

### Dữ liệu đầu vào

Một dòng chứa hai số nguyên `hang` và `cot`, cách nhau bởi một khoảng trắng (`1 <= hang, cot <= 30`).

### Dữ liệu đầu ra

In `hang` dòng, mỗi dòng gồm đúng `cot` ký tự và không có khoảng trắng giữa các ký tự.

Ví dụ:

```text
4 5
```

Kết quả:

```text
#.#.#
.#.#.
#.#.#
.#.#.
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Sử dụng tổng chỉ số hàng và cột để quyết định in `#` hay `.`.

## Bài 9: Bảng tích

### Yêu cầu

Viết chương trình in bảng tích có `m` hàng và `n` cột. Giá trị ở hàng `i`, cột `j` bằng `i * j`. Hàng và cột đều được đánh số bắt đầu từ `1`.

### Dữ liệu đầu vào

Một dòng chứa hai số nguyên `m` và `n`, cách nhau bởi một khoảng trắng (`1 <= m, n <= 10`).

### Dữ liệu đầu ra

In `m` dòng, mỗi dòng chứa `n` số nguyên. Các số trên cùng một dòng cách nhau bởi một khoảng trắng.

Ví dụ:

```text
3 4
```

Kết quả:

```text
1 2 3 4
2 4 6 8
3 6 9 12
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau.
* Tính từng giá trị từ biến đếm của hai vòng lặp.

## Bài 10: Tổng các phần tử của ma trận

### Yêu cầu

Viết chương trình tính tổng tất cả phần tử trong một ma trận số nguyên có `m` hàng và `n` cột.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa hai số nguyên `m` và `n`, cách nhau bởi một khoảng trắng (`1 <= m, n <= 20`).
* `m` dòng tiếp theo, mỗi dòng chứa đúng `n` số nguyên. Các số cách nhau bởi một khoảng trắng và nằm trong đoạn từ `-1000` đến `1000`.

### Dữ liệu đầu ra

In một số nguyên là tổng của tất cả phần tử trong ma trận.

Ví dụ:

```text
2 3
1 2 3
4 -5 6
```

Kết quả:

```text
11
```

### Yêu cầu kỹ thuật

* Lưu dữ liệu dưới dạng danh sách hai chiều.
* Sử dụng hai vòng lặp lồng nhau để duyệt từng phần tử.
* Không sử dụng hàm `sum()`.

## Bài 11: Các cặp có tổng bằng k

### Yêu cầu

Viết chương trình tìm các cặp phần tử trong một danh sách có tổng bằng `k`.

* Mỗi cặp được xác định bởi hai vị trí `i` và `j`, với `i < j`.
* Vị trí của phần tử được đánh số bắt đầu từ `1`.
* Nếu cùng một giá trị xuất hiện ở nhiều vị trí, các cặp vị trí khác nhau vẫn được tính riêng.

### Dữ liệu đầu vào

* Dòng đầu tiên chứa số nguyên `n`, là số phần tử của danh sách (`2 <= n <= 100`).
* Dòng thứ hai chứa đúng `n` số nguyên, các số cách nhau bởi một khoảng trắng. Mỗi số nằm trong đoạn từ `-1000` đến `1000`.
* Dòng thứ ba chứa số nguyên `k` (`-2000 <= k <= 2000`).

### Dữ liệu đầu ra

* Với mỗi cặp thỏa mãn, in một dòng chứa hai vị trí `i` và `j`, cách nhau bởi một khoảng trắng.
* Các cặp được in theo thứ tự tăng dần của `i`; nếu có cùng `i`, in theo thứ tự tăng dần của `j`.
* Nếu không có cặp nào thỏa mãn, in `Khong co cap phu hop`.

Ví dụ:

```text
5
1 4 2 3 4
5
```

Kết quả:

```text
1 2
1 5
3 4
```

### Yêu cầu kỹ thuật

* Sử dụng hai vòng lặp lồng nhau để xét các cặp vị trí.
* Vòng lặp trong bắt đầu từ vị trí ngay sau vị trí của vòng lặp ngoài để không xét một phần tử với chính nó và không lặp lại cặp.
