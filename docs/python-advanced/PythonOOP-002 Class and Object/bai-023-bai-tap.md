## Bài tập: Thiết kế lớp `MatHang` để quản lý sản phẩm trong chợ

### Mô tả:

Bạn cần viết một lớp Python tên là `MatHang` để quản lý thông tin của một mặt hàng trong chợ hoặc siêu thị. Lớp này cần đảm bảo việc **đóng gói dữ liệu** đúng cách, bảo vệ thông tin nội bộ khỏi việc truy cập sai mục đích, đồng thời cung cấp các phương thức dễ sử dụng để quản lý.

### Yêu cầu:

Viết lớp `MatHang` với các thuộc tính và phương thức sau:

* Các thuộc tính:

  * `ten`: tên mặt hàng (public)
  * `_so_luong`: số lượng hàng trong kho (protected)
  * `__gia`: giá bán mỗi đơn vị hàng (private)
  * `__ma_vach`: mã vạch sản phẩm (private)

* Viết phương thức `hien_thi_thong_tin()` để in ra tên mặt hàng.

* Viết phương thức `hien_thi_so_luong()` để in ra số lượng hiện có (sử dụng `_so_luong`).

* Viết các phương thức:

  * `lay_gia()` để lấy giá bán
  * `cap_nhat_gia(gia_moi)` để cập nhật giá nếu giá mới lớn hơn 0. Nếu không hợp lệ, in ra "Giá không hợp lệ!"

* Viết phương thức `kiem_tra_kho()` trả về chuỗi:

  * `>= 100`: "Hàng nhiều"
  * `30 - 99`: "Hàng ổn định"
  * `< 30`: "Sắp hết hàng"

* Tạo một đối tượng và thử in `hang.__gia` từ bên ngoài lớp (dự đoán lỗi).
  Sau đó in `hang._MatHang__gia` để truy cập bằng name mangling.

* Viết phương thức `cap_nhat_ma_vach(ma_moi)` để cập nhật mã vạch nếu độ dài chuỗi là 8 hoặc 12 ký tự.

* Viết phương thức `lay_ma_vach()` để trả về mã vạch.

* Ghi đè phương thức `__str__()` để trả về thông tin như sau:
  `"Mặt hàng: Tên = ..., Số lượng = ..., Giá = ..."`

* Viết phương thức `ban(so_luong_ban)`:

  * Nếu `so_luong_ban <= _so_luong`: trừ số lượng và in ra "Đã bán thành công!"
  * Nếu không đủ hàng: in "Không đủ hàng để bán!"


## Bài tập 2: Tạo Giao Diện Quản Lý Mặt Hàng Bằng `guizero`

### Mô tả:

Sử dụng lớp `MatHang` đã viết ở Bài 1, hãy thiết kế một **ứng dụng giao diện đơn giản** bằng thư viện `guizero` cho phép người dùng xem thông tin mặt hàng, cập nhật giá, bán hàng, và kiểm tra kho.

---

### Yêu cầu cụ thể:

* Tạo lớp `MatHang` giống như trong Bài tập 1 (tên, số lượng, giá, mã vạch, v.v...).

* Dùng thư viện `guizero` để tạo một cửa sổ chính (`App`) có các phần sau:

---

#### 1. **Hiển thị thông tin ban đầu**

* Ô hiển thị tên mặt hàng (Label).
* Ô hiển thị số lượng hàng còn (Label).
* Ô hiển thị giá hiện tại (Label).
* Ô hiển thị trạng thái kho (`Hàng nhiều`, `Hàng ổn định`, `Sắp hết hàng`).

#### 2. **Chức năng bán hàng**

* Ô nhập số lượng cần bán (`TextBox`).
* Nút "Bán hàng".
* Khi nhấn, cập nhật lại số lượng và hiển thị thông báo kết quả bán (Label).

#### 3. **Chức năng cập nhật giá**

* Ô nhập giá mới (`TextBox`).
* Nút "Cập nhật giá".
* Hiển thị thông báo nếu cập nhật thành công hoặc lỗi.

#### 4. **Chức năng cập nhật mã vạch**

* Ô nhập mã vạch mới.
* Nút "Cập nhật mã vạch".
* Hiển thị thông báo nếu cập nhật thành công.

#### 5. **Nút kiểm tra kho**

* Nút “Kiểm tra kho”.
* Hiển thị trạng thái kho hiện tại (dựa trên số lượng hàng).

---

### Gợi ý về giao diện:

```python
from guizero import App, Text, TextBox, PushButton

# Tạo app
app = App("Quản Lý Mặt Hàng", width=400, height=400)

# Các widget ở đây...

app.display()
```

---

### Yêu cầu phụ:

* Không cho phép nhập số âm cho số lượng bán hoặc giá.
* Sau mỗi thao tác, cập nhật lại thông tin hiển thị (số lượng, giá, trạng thái kho).
* Tên các nút và nhãn đều viết **bằng tiếng Việt**.

