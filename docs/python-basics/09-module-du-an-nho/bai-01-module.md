# Bài 9-1: Module trong Python
# Bài 8-1 Module trong Python

## Khung học vui

**Bối cảnh:** Dự án bắt đầu lớn hơn một file. Bạn cần chia code thành các module giống như chia nhóm trong lớp: mỗi nhóm phụ trách một việc rõ ràng.

**Thử ngay trong 5 phút:** Tạo hai file: `main.py` gọi một hàm từ file module riêng như `tools.py` hoặc `score_utils.py`.

**Hoạt động cặp đôi:** Một bạn thiết kế tên module, một bạn quyết định hàm nào nên đặt trong module đó.

**Nâng cấp sau giờ học:** Tách game đoán số thành `main.py`, `game.py`, `messages.py` để luyện import và tổ chức dự án.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
---

## 1. Khái niệm về Module

* **Module** là một tệp (file) Python (`.py`) chứa các **hàm, biến, lớp** có thể tái sử dụng trong nhiều chương trình.
* Thay vì viết lại code, ta có thể **import** module để sử dụng.

Lợi ích:

* Tái sử dụng code.
* Dễ quản lý, dễ bảo trì.
* Chia nhỏ chương trình lớn thành nhiều phần.

---

## 2. Phân loại Module trong Python

### (a) Built-in Modules

Là các module được Python cung cấp sẵn, không cần cài thêm.
Ví dụ:

* `math`: toán học (sqrt, pow, sin, cos…)
* `random`: số ngẫu nhiên
* `datetime`: ngày giờ
* `sys`: thông tin hệ thống

Cách sử dụng:

```python
import math
print(math.sqrt(16))  # 4.0

import random
print(random.randint(1, 100))  # số ngẫu nhiên 1–100
```

Có thể đổi tên module cho ngắn gọn:

```python
import math as m
print(m.pi)   # 3.141592653589793
```

### (b) Custom Modules

* Người lập trình tự tạo ra module dưới dạng file `.py`.
* Ví dụ, tạo file `mymath.py`:

```python
def cong(a, b):
    return a + b

def tru(a, b):
    return a - b
```

Sử dụng trong file `main.py`:

```python
import mymath

print(mymath.cong(5, 3))  # 8
```

---

## 3. Package trong Python

* **Package** là một **thư mục** chứa nhiều module, có file `__init__.py` (dù rỗng cũng được).
* Dùng để tổ chức code khi dự án lớn.

Ví dụ cấu trúc:

```
mypackage/
    __init__.py
    tinhcong.py
    tinhtru.py
```

Trong `tinhcong.py`:

```python
def add(a, b):
    return a + b
```

Trong file `main.py`:

```python
from mypackage import tinhcong
print(tinhcong.add(2, 3))   # 5
```

---

## 4. Thứ tự tìm kiếm Module trong Python

Khi `import`, Python tìm theo thứ tự:

1. **Built-in modules** (ưu tiên cao nhất).
2. **Thư mục hiện tại (current directory)**.
3. **PYTHONPATH** (biến môi trường).
4. **Thư viện cài đặt toàn hệ thống**.

👉 Nghĩa là nếu bạn tạo file `random.py` trong thư mục hiện tại, khi `import random` thì Python sẽ lấy file của bạn chứ không phải built-in `random`. Điều này dễ gây **lỗi che khuất** (shadowing).

---

## 5. External Modules & Cộng đồng Python

* Ngoài built-in, ta có thể cài thêm module từ cộng đồng qua **pip**.
* Ví dụ cài module `requests` để làm việc với HTTP:

```bash
pip install requests
```

Sử dụng:

```python
import requests
res = requests.get("https://jsonplaceholder.typicode.com/todos/1")
print(res.json())
```

👉 Python có một hệ sinh thái cực lớn, hầu như mọi thứ đều có thư viện hỗ trợ (AI, web, dữ liệu, game…).

---

## 6. Tổng kết

* **Module** = 1 file `.py` có thể import.
* Có **built-in modules** và **custom modules**.
* **Package** = thư mục chứa nhiều module.
* Có thể dùng `import … as …` để đặt tên ngắn gọn.
* Thứ tự tìm kiếm module quan trọng để tránh lỗi.
* Có thể cài **external modules** từ cộng đồng qua `pip`.

---

## 7. Bài tập vận dụng

### **Bài 1: Built-in `math`**

Viết chương trình:

* Nhập vào một số nguyên `n`.
* In ra căn bậc 2, bình phương và giá trị cos(n) bằng `math`.

---

### **Bài 2: Built-in `random`**

Viết chương trình:

* Sinh ra 10 số ngẫu nhiên trong khoảng 1 → 50.
* In ra số lớn nhất và nhỏ nhất trong danh sách đó.

---

### **Bài 3: Built-in `datetime`**

Viết chương trình in ra:

* Ngày giờ hiện tại.
* Năm hiện tại.
* Kiểm tra xem năm hiện tại có phải **năm nhuận** không.

---

### **Bài 4: Custom module `temperature.py`**

1. Tạo file `temperature.py` với 2 hàm:

   ```python
   def c_to_f(c):
       return c * 9/5 + 32

   def f_to_c(f):
       return (f - 32) * 5/9
   ```
2. Trong `main.py`, import module này.
3. Thử đổi:

   * 0°C → ? °F
   * 100°F → ? °C

---

### **Bài 5: Custom module `stringtools.py`**

1. Tạo file `stringtools.py` với các hàm:

   * `to_upper(s)` → trả về chuỗi viết hoa.
   * `count_vowels(s)` → đếm số nguyên âm (a, e, i, o, u).
2. Trong `main.py`, import và chạy thử với chuỗi `"Hello Python"`.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
