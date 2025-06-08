# Bài 001 - Bài tập tự luyện

### 🔸 **Bài tập 1: So sánh hai cách lập trình**

**Yêu cầu**:
Viết lại đoạn chương trình đơn giản sau bằng hai cách:

1. **Lập trình thủ tục**
2. **Lập trình hướng đối tượng**

**Đề bài**: Viết chương trình quản lý thông tin của một học sinh gồm: họ tên, lớp, điểm trung bình. Chương trình in ra thông tin học sinh.

**Gợi ý**:

* Thủ tục: dùng biến và hàm riêng.
* OOP: tạo class `HocSinh` với các thuộc tính và phương thức `in_thong_tin()`.

---

### 🔸 **Bài tập 2: Tạo lớp SinhVien**

**Yêu cầu**:

1. Tạo lớp `SinhVien` có các thuộc tính:

   * `ho_ten`, `ma_sv`, `lop`, `diem_tb`
2. Viết phương thức:

   * `in_thong_tin()`: in ra thông tin sinh viên
   * `xep_loai()`: xếp loại sinh viên theo điểm (>=8: Giỏi, >=6.5: Khá, >=5: Trung bình, <5: Yếu)

**Yêu cầu thêm**: Tạo 3 sinh viên và in thông tin cùng xếp loại của họ.

---

### 🔸 **Bài tập 3: Đăng ký môn học**

**Yêu cầu**:

1. Tạo lớp `SinhVien` với thuộc tính `danh_sach_mon_hoc` (kiểu danh sách).
2. Viết phương thức:

   * `dang_ky_mon(mon_hoc)`: thêm môn học vào danh sách
   * `hien_thi_mon_hoc()`: in ra các môn đã đăng ký

**Gợi ý**: Dùng `append()` để thêm vào danh sách.

---

### 🔸 **Bài tập 4: Quản lý nhiều sinh viên**

**Yêu cầu**:

1. Tạo lớp `SinhVien` như các bài trước.
2. Tạo một danh sách chứa nhiều đối tượng `SinhVien`.
3. Viết chương trình:

   * In thông tin của tất cả sinh viên.
   * Tính điểm trung bình của cả lớp.

---

### 🔸 **Bài tập 5: Tư duy mô hình đối tượng**

**Câu hỏi lý thuyết**:

1. Với bài toán quản lý thư viện, em sẽ mô hình hóa thành những lớp nào?
2. Với mỗi lớp, em sẽ chọn những **thuộc tính** và **phương thức** gì?

**Gợi ý**:

* Lớp: `Sach`, `DocGia`, `ThuThu`, `MuonTra`
* Thuộc tính: tên sách, mã sách, họ tên độc giả...
* Phương thức: mượn sách, trả sách, kiểm tra sách quá hạn...

