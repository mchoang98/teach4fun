# Bài 3-4: Toán Tử Gán 

## **1. Mục tiêu bài học**

* Hiểu khái niệm toán tử gán.
* Biết cách sử dụng các toán tử gán mở rộng trong Python.
* Làm quen với cách gán nhiều giá trị và đổi chỗ giá trị giữa các biến.
* Vận dụng để viết các chương trình đơn giản.

---

## **2. Lý thuyết**

### **2.1. Toán tử gán cơ bản**

Trong Python, **toán tử gán** được dùng để **gán một giá trị cho biến**.

**Cú pháp**:

```python
tên_biến = giá_trị
```

**Ví dụ**:

```python
a = 5
b = 10
```

Trong ví dụ trên, biến `a` được gán giá trị `5`, biến `b` được gán giá trị `10`.

---

### **2.2. Toán tử gán mở rộng**

Python cung cấp các toán tử gán kết hợp với các phép toán như cộng, trừ, nhân, chia,... giúp viết mã ngắn gọn hơn.

| Toán tử | Ý nghĩa                 | Ví dụ     | Tương đương với |
| ------- | ----------------------- | --------- | --------------- |
| `+=`    | Cộng rồi gán            | `a += 2`  | `a = a + 2`     |
| `-=`    | Trừ rồi gán             | `a -= 1`  | `a = a - 1`     |
| `*=`    | Nhân rồi gán            | `a *= 3`  | `a = a * 3`     |
| `/=`    | Chia rồi gán            | `a /= 2`  | `a = a / 2`     |
| `//=`   | Chia lấy nguyên rồi gán | `a //= 2` | `a = a // 2`    |
| `%=`    | Chia lấy dư rồi gán     | `a %= 3`  | `a = a % 3`     |
| `**=`   | Lũy thừa rồi gán        | `a **= 2` | `a = a ** 2`    |

---

### **2.3. Gán nhiều giá trị cùng lúc**

Python cho phép gán **nhiều biến cùng một lúc** trên một dòng.

**Ví dụ:**

```python
a, b, c = 1, 2, 3
```

Mỗi biến sẽ được gán với giá trị tương ứng từ trái sang phải.

---

### **2.4. Đổi chỗ giá trị giữa hai biến**

Python hỗ trợ **đổi giá trị giữa hai biến mà không cần biến tạm**.

**Ví dụ:**

```python
a = 5
b = 10
a, b = b, a
```

Sau khi chạy, `a` sẽ có giá trị `10`, và `b` sẽ có giá trị `5`.

---

## **3. Ví dụ minh họa**

```python
x = 10
x += 5      # x = 15
x *= 2      # x = 30
x -= 10     # x = 20
x //= 3     # x = 6
print(x)
```

---

## **4. Ghi nhớ**

* Dấu `=` là **gán**, còn `==` là **so sánh bằng**.
* Có thể sử dụng các toán tử gán mở rộng để viết mã ngắn gọn.
* Python cho phép **gán nhiều giá trị** và **đổi chỗ giá trị** nhanh chóng mà không cần biến tạm.

---

## **5. Bài tập vận dụng**

### **Bài 1:**

Viết chương trình nhập vào một số nguyên `x`. Thực hiện các thao tác sau:

* Cộng `10` vào `x`
* Nhân `x` với `2`
* Trừ `5` khỏi `x`
* In ra kết quả cuối cùng

---

### **Bài 2:**

Viết chương trình nhập vào hai số nguyên `a` và `b`, sau đó **hoán đổi giá trị** của chúng bằng cách **không dùng biến tạm**.

---

### **Bài 3:**

Cho biến `x = 7`, sử dụng các **toán tử gán** để biến `x` thành:

```python
x = (((x + 3) * 2) ** 2)
```

In kết quả ra màn hình.

---

### **Bài 4:**

Viết chương trình nhập vào số nguyên `n`, sử dụng toán tử gán để:

* Tính bình phương của `n`
* Trừ đi `n // 2`
* In ra kết quả cuối cùng

---

### **Bài 5:**

Viết chương trình nhập vào **số có hai chữ số**, sau đó tính tổng hai chữ số đó và in ra màn hình.

Ví dụ: nếu người dùng nhập `35` thì chương trình in ra:

```
3 + 5 = 8
```

**Gợi ý**: Dùng toán tử `//` và `%` kết hợp với toán tử gán.

