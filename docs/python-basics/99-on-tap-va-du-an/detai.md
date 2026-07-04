# Đề dự án cuối khóa Python cơ bản

## Mục tiêu

Học sinh chọn 1 trong 5 đề tài dưới đây để xây dựng chương trình console hoàn chỉnh. Dự án cần thể hiện được các kiến thức đã học: biến, kiểu dữ liệu, toán tử, điều kiện, vòng lặp, chuỗi, hàm, list/dictionary/set/tuple, xử lý lỗi cơ bản và đọc ghi file nếu đã học đến chương 11.

## Yêu cầu nộp bài

* File chính: `main.py`.
* Nếu tách module, đặt thêm các file như `storage.py`, `utils.py`, `menu.py`.
* File mô tả ngắn: `README.md`, gồm cách chạy, chức năng đã làm và 1 ví dụ input/output.
* Chương trình phải chạy được từ terminal bằng lệnh `python main.py`.

## Ràng buộc chung

* Không dùng thư viện ngoài Python chuẩn.
* Không hard-code toàn bộ dữ liệu mẫu; chương trình phải cho người dùng nhập dữ liệu.
* Menu cần có chức năng thoát.
* Dữ liệu nhập sai phải được xử lý thân thiện, không để chương trình dừng đột ngột.
* Tên biến, tên hàm cần rõ nghĩa.

## Thang điểm gợi ý

| Tiêu chí | Điểm |
| --- | ---: |
| Chạy được, không lỗi ở luồng chính | 25 |
| Đủ chức năng bắt buộc | 30 |
| Có kiểm tra dữ liệu nhập và thông báo lỗi | 15 |
| Code rõ ràng, có hàm, không lặp quá nhiều | 15 |
| Có lưu/đọc file hoặc chức năng mở rộng sáng tạo | 10 |
| README rõ cách chạy và ví dụ | 5 |

---

## Đề 1: Trạm nhiệm vụ học tập

### Mô tả

Xây dựng chương trình quản lý nhiệm vụ học tập của một học sinh. Mỗi nhiệm vụ gồm tên nhiệm vụ, môn học, độ khó và trạng thái hoàn thành.

### Chức năng bắt buộc

1. Thêm nhiệm vụ mới.
2. Đánh dấu nhiệm vụ đã hoàn thành.
3. Hiển thị danh sách nhiệm vụ.
4. Thống kê số nhiệm vụ đã hoàn thành theo từng môn.
5. Thoát chương trình.

### Input mẫu

```text
1
Lam bai vong lap
Python
Kho
1
Doc bai lich su
LichSu
De
2
Lam bai vong lap
3
0
```

### Output mẫu

```text
Da them nhiem vu
Da them nhiem vu
Da hoan thanh: Lam bai vong lap
1. Lam bai vong lap | Python | Kho | Done
2. Doc bai lich su | LichSu | De | Todo
Tam biet
```

### Ràng buộc

* Tên nhiệm vụ dài từ 1 đến 80 ký tự.
* Độ khó chỉ nhận `De`, `Vua`, `Kho`.
* Nếu đánh dấu nhiệm vụ không tồn tại, in `Khong tim thay`.

### Mở rộng sáng tạo

* Lưu nhiệm vụ vào file JSON.
* Tính điểm thưởng theo độ khó.
* Lọc nhiệm vụ chưa hoàn thành.

---

## Đề 2: Quầy đồ uống lớp học

### Mô tả

Xây dựng chương trình quản lý đơn hàng đồ uống trong một buổi sinh hoạt lớp. Mỗi món có tên, giá và số lượng.

### Chức năng bắt buộc

1. Thêm món vào đơn hàng.
2. Xóa món theo tên.
3. Cập nhật số lượng.
4. In hóa đơn và tổng tiền.
5. Thoát chương trình.

### Input mẫu

```text
1
TraDao
18000
2
1
SuaTuoi
15000
1
4
0
```

### Output mẫu

```text
Da them TraDao
Da them SuaTuoi
TraDao x2 = 36000
SuaTuoi x1 = 15000
Tong tien: 51000
Tam biet
```

### Ràng buộc

* `0 <= gia <= 1000000`.
* `1 <= so_luong <= 100`.
* Nếu món đã tồn tại, có thể cộng số lượng hoặc báo đã tồn tại, nhưng phải thống nhất trong README.

### Mở rộng sáng tạo

* Giảm giá khi tổng tiền vượt một ngưỡng.
* Tìm món đắt nhất.
* Lưu hóa đơn ra file text.

---

## Đề 3: Sổ mượn thiết bị lớp học

### Mô tả

Xây dựng chương trình quản lý thiết bị được mượn trong lớp như laptop, micro, máy ảnh, bảng vẽ.

### Chức năng bắt buộc

1. Thêm lượt mượn thiết bị.
2. Trả thiết bị.
3. Tra cứu thiết bị theo mã.
4. Hiển thị thiết bị đang được mượn.
5. Cảnh báo thiết bị mượn quá 7 ngày.

### Input mẫu

```text
1
LAP01
An
3
1
MIC02
Binh
9
5
0
```

### Output mẫu

```text
Da ghi nhan LAP01
Da ghi nhan MIC02
Qua han: MIC02 - Binh - 9 ngay
Tam biet
```

### Ràng buộc

* Mã thiết bị không chứa khoảng trắng.
* `0 <= so_ngay_muon <= 365`.
* Thiết bị đã trả không xuất hiện trong danh sách đang mượn.

### Mở rộng sáng tạo

* Phân loại thiết bị theo tiền tố mã: `LAP`, `MIC`, `CAM`, `TAB`.
* Lưu dữ liệu vào JSON.
* Tìm người đang mượn nhiều thiết bị nhất.

---

## Đề 4: Nhật ký cảm xúc học tập

### Mô tả

Xây dựng chương trình để học sinh ghi lại cảm xúc sau mỗi buổi học. Mỗi dòng nhật ký gồm ngày, môn học, cảm xúc và ghi chú ngắn.

### Chức năng bắt buộc

1. Thêm nhật ký.
2. Xem toàn bộ nhật ký.
3. Tìm nhật ký theo môn học.
4. Thống kê số lần xuất hiện của từng cảm xúc.
5. Thoát chương trình.

### Input mẫu

```text
1
2026-07-03
Python
vui
Hieu duoc vong lap
1
2026-07-04
Toan
kho
Can luyen them
4
0
```

### Output mẫu

```text
Da luu nhat ky
Da luu nhat ky
vui: 1
kho: 1
Tam biet
```

### Ràng buộc

* Ngày nhập dạng chuỗi `YYYY-MM-DD`, chưa cần kiểm tra lịch thật.
* Cảm xúc là một từ không chứa khoảng trắng.
* Ghi chú dài không quá 120 ký tự.

### Mở rộng sáng tạo

* Lọc nhật ký theo khoảng ngày.
* Tìm từ khóa trong ghi chú.
* Lưu dữ liệu vào file text hoặc JSON.

---

## Đề 5: Bản đồ kho báu mini

### Mô tả

Xây dựng chương trình mô phỏng robot di chuyển trên lưới tọa độ. Robot bắt đầu ở `(0, 0)`, nhận các lệnh `U`, `D`, `L`, `R`, sau đó tính vị trí cuối và khoảng cách Manhattan đến kho báu.

### Chức năng bắt buộc

1. Nhập tọa độ kho báu.
2. Nhập chuỗi lệnh di chuyển.
3. In vị trí cuối của robot.
4. In khoảng cách đến kho báu.
5. Báo `FOUND` nếu robot đứng đúng vị trí kho báu.

### Input mẫu

```text
2 1
UURRDL
```

### Output mẫu

```text
Vi tri robot: 1 1
Khoang cach: 1
NOT FOUND
```

### Ràng buộc

* `-1000 <= x_kho_bau, y_kho_bau <= 1000`.
* Chuỗi lệnh dài từ 1 đến 1000 ký tự.
* Lệnh không hợp lệ cần được bỏ qua hoặc báo lỗi, nhưng cách xử lý phải ghi trong README.

### Mở rộng sáng tạo

* Đếm số bước hợp lệ.
* Lưu lịch sử vị trí robot.
* In cảnh báo nếu robot đi quá xa gốc tọa độ.
