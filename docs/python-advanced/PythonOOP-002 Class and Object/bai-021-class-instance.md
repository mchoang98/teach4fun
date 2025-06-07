#  Bài 021 - Class Attribute vs Instance Attribute

###  **Class Attribute** (thuộc tính lớp)

* Dùng chung cho **mọi đối tượng**.
* Khai báo **ngoài `__init__`**.
* Chỉ có **một bản sao duy nhất** trong bộ nhớ.

###  **Instance Attribute** (thuộc tính đối tượng)

* **Riêng biệt cho từng đối tượng**.
* Khai báo trong `__init__` hoặc phương thức.
* Mỗi object giữ một **bản sao riêng**.

###  Ví dụ minh họa:

```python
class Employee:
    company_name = "TechCorp"  # Class attribute

    def __init__(self, emp_id):
        self.emp_id = emp_id  # Instance attribute

e1 = Employee(101)
e2 = Employee(102)

print(e1.company_name)   # 👉 TechCorp
print(e2.emp_id)         # 👉 102
```

---

## 4. Thay đổi thuộc tính lớp

```python
Employee.company_name = "TechGlobal"

print(e1.company_name)   # 👉 TechGlobal
print(e2.company_name)   # 👉 TechGlobal
```

→ Tất cả đối tượng đều thấy thay đổi vì cùng trỏ đến `company_name` trong lớp.

---

##  5. Thêm thuộc tính sau khi tạo

```python
e1.ten = "An"
e2.chuc_vu = "Giám đốc"
Employee.tru_so = "Hà Nội"

print(e1.ten)        # 👉 An
print(e2.chuc_vu)    # 👉 Giám đốc
print(e1.tru_so)     # 👉 Hà Nội
```

→ Python cho phép thêm thuộc tính vào **đối tượng hoặc lớp bất kỳ lúc nào**.

---

##  6. Khi tên thuộc tính trùng nhau

```python
class Employee:
    dia_chi = "Hà Nội"

e = Employee(101)
e.dia_chi = "TP.HCM"

print(Employee.dia_chi)  # 👉 Hà Nội
print(e.dia_chi)         # 👉 TP.HCM
```

→ Nếu trùng tên, **thuộc tính của đối tượng ưu tiên hơn**.

---

##  Tổng kết nhanh

| Khái niệm          | Đặc điểm chính                              |
| ------------------ | ------------------------------------------- |
| Class              | Khuôn mẫu định nghĩa thuộc tính & hành vi   |
| Object             | Một thực thể cụ thể của class               |
| Instance Attribute | Dữ liệu riêng biệt của mỗi object           |
| Class Attribute    | Dữ liệu dùng chung cho tất cả object        |
| `self`             | Đại diện cho đối tượng hiện tại trong class |
| `__init__`         | Hàm khởi tạo được gọi khi object được tạo   |

---

##  Gợi ý áp dụng

* Dùng **class attribute** cho thông tin chung: tên công ty, địa chỉ...
* Dùng **instance attribute** cho thông tin cá nhân: mã nhân viên, tên, chức vụ...

---

👉 **Tiếp theo:** Bạn sẽ học về các loại **phương thức trong lớp**: `instance method`, `class method`, `static method` và cách sử dụng decorator như `@classmethod`.

