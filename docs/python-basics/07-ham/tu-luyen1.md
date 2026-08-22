# Hàm - Ôn tập

## Bài 1: Trợ lý chuẩn bị cặp đi học

### Yêu cầu

Viết chương trình giúp học sinh kiểm tra xem mình đã chuẩn bị đủ đồ dùng trước khi đi học hay chưa.

Chương trình lần lượt hỏi người dùng:

* Đã mang vở chưa?
* Đã mang hộp bút chưa?
* Đã mang bình nước chưa?

Người dùng trả lời:

```text
yes
```

hoặc:

```text
no
```

Mỗi món đồ đã mang được tính `1` điểm.

Tổng điểm tối đa là `3`.

Sau khi kiểm tra, chương trình đưa ra đánh giá:

* `3 điểm`: `Bạn đã chuẩn bị đầy đủ!`
* `2 điểm`: `Bạn gần đủ rồi, hãy kiểm tra lại.`
* `0 hoặc 1 điểm`: `Bạn đang quên khá nhiều đồ.`

### Cách chương trình chạy

Ví dụ:

```text
Đã mang vở chưa? yes
Đã mang hộp bút chưa? no
Đã mang bình nước chưa? yes
```

Chương trình tính được:

```text
Điểm chuẩn bị: 2/3
```

Và in:

```text
Bạn gần đủ rồi, hãy kiểm tra lại.
```

Một ví dụ khác:

```text
Đã mang vở chưa? yes
Đã mang hộp bút chưa? yes
Đã mang bình nước chưa? yes
```

Kết quả:

```text
Điểm chuẩn bị: 3/3
Bạn đã chuẩn bị đầy đủ!
```

---

## Bài 2: Quầy bán vé hội chợ trường học

### Yêu cầu

Trường đang tổ chức hội chợ và có một trò chơi **Bóng rổ mini**.

Mỗi lượt chơi có giá:

```text
15.000 đồng
```

Người chơi nhập số lượt muốn mua.

Chương trình tính tổng số tiền dựa trên:

```text
Tổng tiền = số lượt × 15.000
```

Nếu người chơi mua từ `5` lượt trở lên, họ được giảm `10%` tổng tiền.

Nếu mua dưới `5` lượt thì không được giảm giá.

Cuối cùng, chương trình hiển thị:

* Số lượt đã mua.
* Tổng tiền trước giảm giá.
* Số tiền được giảm.
* Số tiền cuối cùng cần thanh toán.

### Cách chương trình chạy

Ví dụ:

```text
Nhập số lượt muốn chơi: 3
```

Chương trình in:

```text
Số lượt: 3
Tổng tiền: 45000 đồng
Giảm giá: 0 đồng
Thanh toán: 45000 đồng
```

Nếu nhập:

```text
Nhập số lượt muốn chơi: 6
```

Tổng tiền là:

```text
6 × 15000 = 90000
```

Số tiền giảm:

```text
90000 × 10% = 9000
```

Kết quả:

```text
Số lượt: 6
Tổng tiền: 90000 đồng
Giảm giá: 9000 đồng
Thanh toán: 81000 đồng
```

---

## Bài 3: Thử thách quản lý tiền trong ngày

### Yêu cầu

Một học sinh có:

```text
100.000 đồng
```

để sử dụng trong một ngày.

Trong ngày, học sinh chi tiền cho hai mục:

* Ăn uống.
* Giải trí.

Chương trình yêu cầu người dùng nhập số tiền đã chi cho từng mục.

Sau đó chương trình tính:

```text
Tổng chi = tiền ăn uống + tiền giải trí
```

Nếu tổng chi không vượt quá `100.000 đồng`, chương trình tính số tiền còn lại:

```text
Tiền còn lại = 100.000 - tổng chi
```

và thông báo:

```text
Bạn vẫn còn trong ngân sách.
```

Nếu tổng chi lớn hơn `100.000 đồng`, chương trình thông báo:

```text
Bạn đã vượt ngân sách.
```

Ngoài ra, chương trình cần cho biết người dùng đã vượt ngân sách bao nhiêu tiền.

### Cách chương trình chạy

Ví dụ:

```text
Tiền ăn uống: 40000
Tiền giải trí: 30000
```

Tổng chi:

```text
40000 + 30000 = 70000
```

Kết quả:

```text
Tổng chi: 70000 đồng
Tiền còn lại: 30000 đồng
Bạn vẫn còn trong ngân sách.
```

Ví dụ khác:

```text
Tiền ăn uống: 70000
Tiền giải trí: 50000
```

Tổng chi:

```text
120000 đồng
```

Số tiền vượt ngân sách:

```text
120000 - 100000 = 20000
```

Kết quả:

```text
Tổng chi: 120000 đồng
Bạn đã vượt ngân sách 20000 đồng.
```
