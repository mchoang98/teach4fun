# Đề luyện 02: Biến, kiểu dữ liệu và ép kiểu

## Quy định chung

* Mỗi bài cần đọc dữ liệu bằng `input()` và ép kiểu khi cần.
* Không in lời nhắc nhập dữ liệu nếu muốn so sánh output với ví dụ.
* Kết quả số thực làm tròn 2 chữ số nếu đề yêu cầu.

---

## Bài 1: Hồ sơ nhân vật học tập

### Mô tả

Một game học tập cần tạo hồ sơ nhân vật. Mỗi nhân vật có tên, cấp độ, số xu và năng lượng. Hãy in hồ sơ và tổng tài nguyên `xu + năng lượng`.

### Input

* Dòng 1: tên nhân vật.
* Dòng 2: cấp độ, số nguyên.
* Dòng 3: số xu, số nguyên.
* Dòng 4: năng lượng, số nguyên.

### Output

```text
Nhan vat: <ten>
Cap do: <cap_do>
Tong tai nguyen: <tong>
```

### Ràng buộc

* `1 <= cap_do <= 100`
* `0 <= xu, nang_luong <= 100000`

### Ví dụ

Input:

```text
ByteKid
7
120
35
```

Output:

```text
Nhan vat: ByteKid
Cap do: 7
Tong tai nguyen: 155
```

---

## Bài 2: Chia tiền mua đồ nhóm

### Mô tả

Một nhóm bạn mua đồ làm dự án. Nhập tổng tiền, số thành viên và tiền quỹ hỗ trợ. Tính số tiền mỗi bạn cần góp sau khi trừ quỹ.

### Input

* Dòng 1: tổng tiền, số thực.
* Dòng 2: số thành viên, số nguyên.
* Dòng 3: tiền quỹ hỗ trợ, số thực.

### Output

```text
Moi ban gop: <so_tien>
```

`<so_tien>` làm tròn 2 chữ số.

### Ràng buộc

* `0 <= tien_quy <= tong_tien <= 10000000`
* `1 <= so_thanh_vien <= 50`

### Ví dụ

Input:

```text
250000
4
50000
```

Output:

```text
Moi ban gop: 50000.00
```

---

## Bài 3: Đổi phút học thành giờ phút

### Mô tả

Ứng dụng học tập lưu thời gian theo phút. Hãy đổi tổng số phút thành số giờ và số phút còn lại.

### Input

* Một số nguyên `m`: tổng số phút học.

### Output

```text
<h> gio <p> phut
```

### Ràng buộc

* `0 <= m <= 10000`

### Ví dụ

Input:

```text
135
```

Output:

```text
2 gio 15 phut
```

---

## Bài 4: Nhãn sản phẩm tự động

### Mô tả

Một cửa hàng cần tạo nhãn sản phẩm gồm tên món, giá gốc và giá sau khi cộng phí đóng gói cố định.

### Input

* Dòng 1: tên món.
* Dòng 2: giá gốc, số nguyên.
* Dòng 3: phí đóng gói, số nguyên.

### Output

```text
<ten_mon> - gia niem yet: <tong_gia> VND
```

### Ràng buộc

* `0 <= gia_goc, phi_dong_goi <= 1000000`

### Ví dụ

Input:

```text
Tra dao
18000
2000
```

Output:

```text
Tra dao - gia niem yet: 20000 VND
```
