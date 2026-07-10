# Bài tập 03: Toán tử trong Python

## Mục tiêu

Sau khi hoàn thành các bài tập, học sinh có thể:

* Dùng toán tử số học để tính toán từ dữ liệu cho trước.
* Dùng toán tử so sánh để tạo ra kết quả `True` hoặc `False`.
* Kết hợp nhiều điều kiện bằng `and`, `or` và `not`.
* Dùng câu lệnh `if` để in kết quả phù hợp với từng điều kiện.

## Hướng dẫn chung

* Mỗi bài là một chương trình độc lập.
* Không dùng `input()`. Hãy khai báo các biến đúng như phần **Dữ liệu cho trước**.
* Kết quả phải được in bằng `print()` và đúng chính tả như phần **Kết quả mong đợi**.
* Với bài có điều kiện, chương trình phải xử lý được cả trường hợp điều kiện đúng và điều kiện sai, không chỉ riêng bộ dữ liệu minh họa.

---

## Bài tập 1: Tổng tiền căn tin

### Yêu cầu

Bạn mua nước và bánh ở căn tin. Hãy tính tổng số tiền phải trả theo công thức:

```text
tổng tiền = giá nước × số chai nước + giá bánh × số cái bánh
```

### Dữ liệu cho trước

```python
water_price = 12000
cake_price = 15000
water_count = 2
cake_count = 3
```

Các giá tiền có đơn vị là đồng.

### Kết quả mong đợi

```text
69000
```

### Yêu cầu kỹ thuật

* Dùng toán tử `*` để tính tiền của từng loại hàng.
* Dùng toán tử `+` để tính tổng tiền.

---

## Bài tập 2: Điểm sau một màn chơi

### Yêu cầu

Trong một trò chơi, mỗi ngôi sao được 10 điểm và mỗi lỗi làm mất 5 điểm. Điểm ban đầu của người chơi là 0. Hãy tính điểm cuối cùng sau màn chơi. Điểm cuối cùng có thể là số âm.

### Dữ liệu cho trước

```python
stars = 8
mistakes = 3
```

### Kết quả mong đợi

```text
65
```

### Yêu cầu kỹ thuật

* Dùng toán tử `*` để tính điểm nhận được và điểm bị trừ.
* Dùng toán tử `-` để tính điểm cuối cùng.

---

## Bài tập 3: Thứ tự ưu tiên của phép toán

### Yêu cầu

Một nhóm mua nhiều combo. Mỗi combo gồm một phần ăn và một ly nước. Khoản giảm giá chỉ được trừ **một lần** trên toàn bộ hóa đơn.

Hãy tính hai biểu thức sau để quan sát tác dụng của dấu ngoặc:

```python
correct_total = (food + drink) * combo_count - discount
wrong_total = food + drink * combo_count - discount
```

Biểu thức thứ hai không tính giá phần ăn cho mỗi combo nên không phải công thức đúng của hóa đơn.

### Dữ liệu cho trước

```python
food = 30000
drink = 12000
combo_count = 2
discount = 10000
```

Các giá tiền có đơn vị là đồng.

### Kết quả mong đợi

In `correct_total` ở dòng đầu và `wrong_total` ở dòng thứ hai:

```text
74000
44000
```

### Yêu cầu kỹ thuật

* Giữ nguyên hai biểu thức đã cho.
* Dùng hai lệnh `print()` để in kết quả theo đúng thứ tự.

---

## Bài tập 4: Chia đều sticker

### Yêu cầu

Cô giáo chia đều 47 sticker cho 6 nhóm. Mỗi nhóm phải nhận số sticker bằng nhau; những sticker không thể chia đều sẽ được giữ lại.

Hãy tính:

1. Số sticker mỗi nhóm nhận được.
2. Số sticker còn dư.

### Dữ liệu cho trước

```python
stickers = 47
groups = 6
```

### Kết quả mong đợi

In số sticker mỗi nhóm nhận được ở dòng đầu và số sticker còn dư ở dòng thứ hai:

```text
7
5
```

### Yêu cầu kỹ thuật

* Dùng `//` để tính số sticker của mỗi nhóm.
* Dùng `%` để tính số sticker còn dư.

---

## Bài tập 5: Kiểm tra số chẵn hoặc số lẻ

### Yêu cầu

Kiểm tra `turns` là số chẵn hay số lẻ.

* Nếu `turns` chia hết cho 2, in `Số chẵn`.
* Ngược lại, in `Số lẻ`.

### Dữ liệu cho trước

```python
turns = 14
```

### Kết quả mong đợi

```text
Số chẵn
```

### Yêu cầu kỹ thuật

* Dùng toán tử `%`.
* Dùng câu lệnh `if...else`.

---

## Bài tập 6: Tính điểm thưởng theo cấp độ

### Yêu cầu

Điểm thưởng được tính bằng bình phương của cấp độ. Hãy tính và in điểm thưởng theo công thức:

```text
điểm thưởng = cấp độ²
```

### Dữ liệu cho trước

```python
level = 5
```

### Kết quả mong đợi

```text
25
```

### Yêu cầu kỹ thuật

* Dùng toán tử `**`; không viết `level * level`.

---

## Bài tập 7: Kiểm tra kết quả học tập

### Yêu cầu

So sánh `score` với `pass_score`.

* Nếu `score` lớn hơn hoặc bằng `pass_score`, in `Đạt`.
* Ngược lại, in `Chưa đạt`.

### Dữ liệu cho trước

```python
score = 7.5
pass_score = 5
```

### Kết quả mong đợi

```text
Đạt
```

### Yêu cầu kỹ thuật

* Dùng toán tử `>=` và câu lệnh `if...else`.

---

## Bài tập 8: Kiểm tra độ tuổi tham gia

### Yêu cầu

* Nếu `age` lớn hơn hoặc bằng `min_age`, in `Đủ tuổi`.
* Ngược lại, in `Chưa đủ tuổi`.

### Dữ liệu cho trước

```python
age = 11
min_age = 12
```

### Kết quả mong đợi

```text
Chưa đủ tuổi
```

### Yêu cầu kỹ thuật

* Dùng toán tử `>=` và câu lệnh `if...else`.

---

## Bài tập 9: Kiểm tra mật khẩu

### Yêu cầu

So sánh mật khẩu người dùng nhập với mật khẩu đúng.

* Nếu hai chuỗi giống hệt nhau, in `Đúng mật khẩu`.
* Ngược lại, in `Sai mật khẩu`.

Phép so sánh có phân biệt chữ hoa và chữ thường.

### Dữ liệu cho trước

```python
correct_password = "python123"
user_password = "python12"
```

### Kết quả mong đợi

```text
Sai mật khẩu
```

### Yêu cầu kỹ thuật

* Dùng toán tử `==` và câu lệnh `if...else`.

---

## Bài tập 10: Điều kiện nhận huy hiệu

### Yêu cầu

Học sinh nhận huy hiệu khi **đồng thời** đạt ít nhất 8 điểm và đã nộp đủ bài.

* Nếu đủ cả hai điều kiện, in `Nhận huy hiệu`.
* Ngược lại, in `Chưa nhận huy hiệu`.

### Dữ liệu cho trước

```python
score = 8.5
submitted_all = True
```

### Kết quả mong đợi

```text
Nhận huy hiệu
```

### Yêu cầu kỹ thuật

* Dùng toán tử `>=`, toán tử `and` và câu lệnh `if...else`.

---

## Bài tập 11: Điều kiện vào thư viện

### Yêu cầu

Một người được vào thư viện khi có thẻ học sinh **hoặc** đi cùng giáo viên.

* Nếu có ít nhất một trong hai điều kiện, in `Được vào`.
* Nếu không có điều kiện nào, in `Không được vào`.

### Dữ liệu cho trước

```python
has_student_card = False
with_teacher = True
```

### Kết quả mong đợi

```text
Được vào
```

### Yêu cầu kỹ thuật

* Dùng toán tử `or` và câu lệnh `if...else`.

---

## Bài tập 12: Kiểm tra trạng thái khóa tài khoản

### Yêu cầu

* Nếu tài khoản **không bị khóa** (`is_locked` là `False`), in `Được đăng nhập`.
* Nếu tài khoản bị khóa, in `Không được đăng nhập`.

### Dữ liệu cho trước

```python
is_locked = False
```

### Kết quả mong đợi

```text
Được đăng nhập
```

### Yêu cầu kỹ thuật

* Dùng toán tử `not` và câu lệnh `if...else`.

---

## Bài tập 13: Điều kiện tham gia câu lạc bộ

### Yêu cầu

Một học sinh được tham gia câu lạc bộ khi thỏa mãn **tất cả** các điều kiện sau:

* Từ 12 tuổi trở lên.
* Đã đăng ký (`registered` là `True`).
* Thẻ không bị khóa (`card_locked` là `False`).

Nếu đủ cả ba điều kiện, in `Được tham gia`; ngược lại, in `Không được tham gia`.

### Dữ liệu cho trước

```python
age = 13
registered = True
card_locked = False
```

### Kết quả mong đợi

```text
Được tham gia
```

### Yêu cầu kỹ thuật

* Dùng `>=`, `and`, `not` và câu lệnh `if...else`.

---

## Bài tập 14: Kiểm tra đơn hàng

### Yêu cầu

Tính tổng tiền của đơn hàng bằng `price * quantity`. Đơn hàng hợp lệ khi:

* Ví có đủ tiền để thanh toán, nghĩa là `wallet` lớn hơn hoặc bằng tổng tiền; **và**
* `user_code` giống hệt `confirm_code`.

Nếu đủ cả hai điều kiện, in `Đơn hàng hợp lệ`; ngược lại, in `Đơn hàng không hợp lệ`.

### Dữ liệu cho trước

```python
price = 25000
quantity = 3
wallet = 100000
confirm_code = "OK2026"
user_code = "OK2026"
```

Các giá tiền có đơn vị là đồng.

### Kết quả mong đợi

```text
Đơn hàng hợp lệ
```

### Yêu cầu kỹ thuật

* Dùng `*`, `>=`, `==`, `and` và câu lệnh `if...else`.

---

## Bài tập 15: Kiểm tra chia hết cho 3

### Yêu cầu

* Nếu `number` chia hết cho 3, in `Chia hết cho 3`.
* Ngược lại, in `Không chia hết cho 3`.

### Dữ liệu cho trước

```python
number = 27
```

### Kết quả mong đợi

```text
Chia hết cho 3
```

### Yêu cầu kỹ thuật

* Dùng toán tử `%`, toán tử `==` và câu lệnh `if...else`.

---

## Bài tập 16: Kiểm tra điểm hợp lệ

### Yêu cầu

Một điểm số hợp lệ khi nằm trong đoạn từ 0 đến 10, bao gồm cả 0 và 10.

* Nếu `score` hợp lệ, in `Hợp lệ`.
* Ngược lại, in `Không hợp lệ`.

### Dữ liệu cho trước

```python
score = 8
```

### Kết quả mong đợi

```text
Hợp lệ
```

### Yêu cầu kỹ thuật

* Viết hai phép so sánh và kết hợp chúng bằng `and`.
* Dùng câu lệnh `if...else`.

---

## Bài tập 17: Kiểm tra ưu đãi mua hàng

### Yêu cầu

Khách hàng được hưởng ưu đãi nếu tổng tiền mua hàng từ 100.000 đồng trở lên **hoặc** khách hàng là thành viên VIP.

* Nếu thỏa mãn ít nhất một điều kiện, in `Có ưu đãi`.
* Ngược lại, in `Không có ưu đãi`.

### Dữ liệu cho trước

```python
total = 85000
is_vip = True
```

### Kết quả mong đợi

```text
Có ưu đãi
```

### Yêu cầu kỹ thuật

* Dùng toán tử `>=`, toán tử `or` và câu lệnh `if...else`.

---

## Bài tập 18: Kiểm tra trạng thái nộp bài

### Yêu cầu

* Nếu bài chưa được nộp (`submitted` là `False`), in `Chưa hoàn thành`.
* Nếu bài đã được nộp, in `Đã hoàn thành`.

### Dữ liệu cho trước

```python
submitted = False
```

### Kết quả mong đợi

```text
Chưa hoàn thành
```

### Yêu cầu kỹ thuật

* Dùng toán tử `not` và câu lệnh `if...else`.

---

## Chuyển tiếp

Qua các bài tập trên, bạn đã dùng toán tử để tính toán, so sánh và kết hợp điều kiện. Ở bài tiếp theo, bạn sẽ tìm hiểu sâu hơn về `if`, `elif`, `else` và cách viết chương trình có nhiều nhánh xử lý.
