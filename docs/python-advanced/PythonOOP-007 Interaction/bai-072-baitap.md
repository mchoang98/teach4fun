# Bài tập interaction

### **BÀI TẬP: Mô Phỏng Quản Lý Cửa Hàng Bán Hàng**

#### **Mô tả yêu cầu**

Thiết kế một hệ thống đơn giản để mô phỏng hoạt động của một cửa hàng bán hàng gồm các class sau:

#### **1. Class `Product`**

* Thuộc tính:

  * `name` (str)
  * `price` (float)
* Phương thức:

  * `get_info()` → trả về thông tin sản phẩm dạng chuỗi.

#### **2. Class `Customer`**

* Thuộc tính:

  * `name` (str)
  * `cart` (list chứa các Product)
* Phương thức:

  * `add_to_cart(product)` → thêm sản phẩm vào giỏ.
  * `checkout()` → tính tổng tiền và in hóa đơn.

#### **3. Class `Store`**

* Thuộc tính:

  * `inventory` (list chứa các Product có sẵn)
* Phương thức:

  * `list_products()` → in danh sách sản phẩm hiện có.
  * `find_product(name)` → trả về sản phẩm theo tên nếu có.

#### **Yêu cầu chính:**

* Tạo sẵn 3 sản phẩm và thêm vào cửa hàng.
* Tạo 1 khách hàng và cho họ mua 2 sản phẩm.
* Khi `checkout()`, in ra thông tin chi tiết giỏ hàng và tổng tiền.

---

### **Gợi ý hướng dẫn:**

* Các đối tượng tương tác như sau:

  * `Customer` gọi method từ `Store` để lấy sản phẩm (`find_product`)
  * `Customer` chứa list các `Product`
  * `Product` là đối tượng độc lập được dùng bởi cả `Store` và `Customer`

---

Kết quả cần đạt:

```plaintext
=== CỬA HÀNG XYZ ===
1. Táo - 10.0$
2. Sữa - 15.5$
3. Bánh mì - 5.0$

Khách hàng: Nguyễn Văn A
Đang thêm sản phẩm vào giỏ...
> Đã thêm: Táo
> Đã thêm: Sữa
> Không tìm thấy: Coca

--- HÓA ĐƠN ---
Tên: Nguyễn Văn A
Giỏ hàng:
- Táo: 10.0$
- Sữa: 15.5$
Tổng tiền: 25.5$

Cảm ơn quý khách!
```


---

## **BÀI TẬP 2: Quản lý nhân viên và phân ca làm việc**

### **Mục tiêu**

* Tập trung vào quan hệ **1-n** giữa `Store` và `Employee`
* Tương tác giữa `Manager`, `Employee`, `Shift`
* Áp dụng `composition` và `method delegation`

---

### **Yêu cầu chức năng**

Thiết kế các class:

#### **1. `Employee`**

* `name`: tên nhân viên
* `role`: vị trí (thu ngân, kho, bảo vệ...)
* `assign_shift(shift)`: gán ca làm cho nhân viên

#### **2. `Shift`**

* `day`: thứ/ngày làm việc
* `time`: ca sáng/chiều/tối

#### **3. `Store`**

* `name`: tên cửa hàng
* `employees`: danh sách nhân viên
* `assign_employee(employee, shift)`: gán ca cho nhân viên

#### **4. (Tùy chọn)** `Manager` có thể là subclass của `Employee` và có quyền gán ca cho nhân viên khác

---

### **Output console mong muốn**

```plaintext
=== CỬA HÀNG ABC ===

Danh sách nhân viên:
- Huy (Thu ngân)
- Lan (Kho)
- Minh (Bảo vệ)

Phân ca:
> Gán Huy vào Thứ 2 - Sáng
> Gán Lan vào Thứ 3 - Chiều
> Gán Minh vào Thứ 2 - Tối

--- LỊCH LÀM VIỆC ---
Huy: Thứ 2 - Sáng
Lan: Thứ 3 - Chiều
Minh: Thứ 2 - Tối
```

