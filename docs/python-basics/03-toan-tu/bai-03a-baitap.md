# Bài tập 03: Toán tử trong Python

## Mục tiêu của phần bài tập

Sau phần này, học sinh cần hiểu rằng toán tử không chỉ là các ký hiệu rời rạc. Toán tử giúp chương trình:

* Tạo ra giá trị mới từ dữ liệu ban đầu.
* Tính toán kết quả như tổng tiền, điểm số, số phần chia được.
* Kiểm tra một điều đúng hay sai và nhận kết quả `True` hoặc `False`.
* Chuẩn bị cho bài sau: dùng kết quả `True/False` để câu lệnh `if` ra quyết định.

Trong toàn bộ bài tập này, chưa dùng `if`. Khi cần kiểm tra, chỉ in trực tiếp biểu thức so sánh hoặc biểu thức logic.

---

## Bài tập 1: Tổng tiền căn tin

* **Bối cảnh:** Bạn mua nước và bánh ở căn tin.
* **Yêu cầu:** Tính tổng tiền cần trả.
* **Code khởi đầu:**

```python
water_price = 12000
cake_price = 15000
water_count = 2
cake_count = 3

total = water_price * water_count + cake_price * cake_count
print(total)
```

* **Câu hỏi gợi ý:**
  * Toán tử `*` tạo ra giá trị mới nào?
  * Toán tử `+` đang cộng những phần tiền nào?
  * Nếu mua thêm 1 chai nước, cần đổi biến nào?
* **Đáp án mẫu:**

```text
69000
```

---

## Bài tập 2: Điểm game sau một màn chơi

* **Bối cảnh:** Trong game, mỗi sao được 10 điểm, mỗi lỗi bị trừ 5 điểm.
* **Yêu cầu:** Tính điểm cuối cùng sau một màn chơi.
* **Code khởi đầu:**

```python
stars = 8
mistakes = 3

score = stars * 10 - mistakes * 5
print(score)
```

* **Câu hỏi gợi ý:**
  * Phép `stars * 10` có ý nghĩa gì trong game?
  * Phép `mistakes * 5` có ý nghĩa gì?
  * Vì sao ở đây dùng dấu `-`?
* **Đáp án mẫu:**

```text
65
```

---

## Bài tập 3: Thứ tự ưu tiên phép toán

* **Bối cảnh:** Một nhóm mua 2 combo. Mỗi combo gồm 1 phần ăn và 1 nước. Sau đó cả nhóm dùng thêm mã giảm giá.
* **Yêu cầu:** So sánh kết quả khi có và không có dấu ngoặc.
* **Code khởi đầu:**

```python
food = 30000
drink = 12000
combo_count = 2
discount = 10000

total_right = (food + drink) * combo_count - discount
total_wrong = food + drink * combo_count - discount

print(total_right)
print(total_wrong)
```

* **Câu hỏi gợi ý:**
  * Vì sao hai kết quả khác nhau?
  * Trong Python, `*` được tính trước hay `+` được tính trước?
  * Khi nào nên dùng dấu ngoặc?
* **Đáp án mẫu:**

```text
74000
44000
```

---

## Bài tập 4: Chia đều sticker

* **Bối cảnh:** Cô giáo có một số sticker và muốn chia đều cho các nhóm.
* **Yêu cầu:** Tính mỗi nhóm nhận được bao nhiêu sticker và còn dư bao nhiêu sticker.
* **Code khởi đầu:**

```python
stickers = 47
groups = 6

each_group = stickers // groups
left_over = stickers % groups

print(each_group)
print(left_over)
```

* **Câu hỏi gợi ý:**
  * `//` trả về phần nào của phép chia?
  * `%` trả về phần nào của phép chia?
  * Vì sao không dùng `/` trong bài chia đều này?
* **Đáp án mẫu:**

```text
7
5
```

---

## Bài tập 5: Kiểm tra số chẵn lẻ

* **Bối cảnh:** Một trò chơi cần biết số lượt chơi là chẵn hay lẻ.
* **Yêu cầu:** Dùng `%` để kiểm tra số lượt chơi có phải số chẵn không.
* **Code khởi đầu:**

```python
turns = 14

is_even = turns % 2 == 0
is_odd = turns % 2 != 0

print(is_even)
print(is_odd)
```

* **Câu hỏi gợi ý:**
  * Một số chia cho 2 dư 0 thì là chẵn hay lẻ?
  * Biểu thức `turns % 2 == 0` trả về kiểu dữ liệu gì?
  * Nếu đổi `turns = 15`, kết quả thay đổi thế nào?
* **Đáp án mẫu:**

```text
True
False
```

---

## Bài tập 6: Lũy thừa trong điểm thưởng

* **Bối cảnh:** Một nhiệm vụ đặc biệt có điểm thưởng tăng rất nhanh theo cấp độ.
* **Yêu cầu:** Tính điểm thưởng bằng công thức `level ** 2`.
* **Code khởi đầu:**

```python
level = 5

bonus = level ** 2
print(bonus)
```

* **Câu hỏi gợi ý:**
  * `level ** 2` nghĩa là gì?
  * Nếu `level = 10`, điểm thưởng là bao nhiêu?
  * Toán tử `**` khác gì với `*`?
* **Đáp án mẫu:**

```text
25
```

---

## Bài tập 7: Kiểm tra đạt hay chưa đạt

* **Bối cảnh:** Một bài kiểm tra cần từ 5 điểm trở lên để đạt.
* **Yêu cầu:** In ra kết quả của biểu thức kiểm tra điểm có đạt hay không.
* **Code khởi đầu:**

```python
score = 7.5
pass_score = 5

is_passed = score >= pass_score
print(is_passed)
```

* **Câu hỏi gợi ý:**
  * Toán tử `>=` có nghĩa là gì?
  * Kết quả của `score >= pass_score` là số hay `True/False`?
  * Nếu `score = 4.5`, kết quả là gì?
* **Đáp án mẫu:**

```text
True
```

---

## Bài tập 8: Kiểm tra đủ tuổi tham gia

* **Bối cảnh:** Một câu lạc bộ yêu cầu học sinh từ 12 tuổi trở lên mới được tham gia.
* **Yêu cầu:** Dùng biểu thức so sánh để kiểm tra học sinh đã đủ tuổi chưa.
* **Code khởi đầu:**

```python
age = 11
min_age = 12

can_join = age >= min_age
print(can_join)
```

* **Câu hỏi gợi ý:**
  * Biểu thức nào trả lời câu hỏi “đủ tuổi chưa”?
  * Vì sao bài này chưa in “Được tham gia” hoặc “Chưa được tham gia”?
  * Khi học `if`, ta sẽ dùng kết quả `can_join` để làm gì?
* **Đáp án mẫu:**

```text
False
```

---

## Bài tập 9: Mật khẩu đúng hay sai

* **Bối cảnh:** Một màn hình đăng nhập cần kiểm tra mật khẩu nhập vào có đúng không.
* **Yêu cầu:** Dùng `==` để so sánh mật khẩu nhập vào và mật khẩu đúng.
* **Code khởi đầu:**

```python
correct_password = "python123"
user_password = "python12"

is_correct = user_password == correct_password
is_wrong = user_password != correct_password

print(is_correct)
print(is_wrong)
```

* **Câu hỏi gợi ý:**
  * `==` khác gì với `=`?
  * `!=` có nghĩa là gì?
  * Nếu `user_password = "python123"`, hai dòng output là gì?
* **Đáp án mẫu:**

```text
False
True
```

---

## Bài tập 10: Ghép điều kiện bằng `and`

* **Bối cảnh:** Để nhận huy hiệu học tập, học sinh cần đạt từ 8 điểm trở lên và nộp đủ bài.
* **Yêu cầu:** Dùng `and` để kiểm tra cả hai điều kiện cùng lúc.
* **Code khởi đầu:**

```python
score = 8.5
submitted_all = True

can_get_badge = score >= 8 and submitted_all
print(can_get_badge)
```

* **Câu hỏi gợi ý:**
  * `and` chỉ trả về `True` khi nào?
  * Nếu `submitted_all = False`, kết quả là gì?
  * Điều kiện `score >= 8` đang kiểm tra điều gì?
* **Đáp án mẫu:**

```text
True
```

---

## Bài tập 11: Ghép điều kiện bằng `or`

* **Bối cảnh:** Học sinh được vào phòng thực hành nếu có thẻ học sinh hoặc có giáo viên đi cùng.
* **Yêu cầu:** Dùng `or` để kiểm tra chỉ cần một trong hai điều kiện đúng.
* **Code khởi đầu:**

```python
has_student_card = False
with_teacher = True

can_enter_lab = has_student_card or with_teacher
print(can_enter_lab)
```

* **Câu hỏi gợi ý:**
  * `or` trả về `True` khi nào?
  * Nếu cả hai biến đều là `False`, kết quả là gì?
  * Tình huống đời thường nào khác cũng dùng logic “hoặc”?
* **Đáp án mẫu:**

```text
True
```

---

## Bài tập 12: Đảo ngược kết quả bằng `not`

* **Bối cảnh:** Một tài khoản đang bị khóa thì không được đăng nhập.
* **Yêu cầu:** Dùng `not` để kiểm tra tài khoản có được phép đăng nhập không.
* **Code khởi đầu:**

```python
is_locked = False

can_login = not is_locked
print(can_login)
```

* **Câu hỏi gợi ý:**
  * `not False` cho kết quả gì?
  * Nếu `is_locked = True`, `can_login` là gì?
  * Vì sao `not` hữu ích khi muốn đảo ngược ý nghĩa?
* **Đáp án mẫu:**

```text
True
```

---

## Bài tập 13: Tổng hợp - Vé vào khu trải nghiệm

* **Bối cảnh:** Khu trải nghiệm Python có quy tắc: học sinh cần từ 12 tuổi trở lên, đã đăng ký, và không bị khóa thẻ.
* **Yêu cầu:** Tạo các biểu thức kiểm tra từng điều kiện và một biểu thức logic tổng hợp. Không dùng `if`.
* **Code khởi đầu:**

```python
age = 13
registered = True
card_locked = False

old_enough = age >= 12
card_ok = not card_locked
can_join = old_enough and registered and card_ok

print(old_enough)
print(card_ok)
print(can_join)
```

* **Câu hỏi gợi ý:**
  * Dòng nào kiểm tra đủ tuổi?
  * Dòng nào đảo ngược trạng thái khóa thẻ?
  * Biểu thức `can_join` cần những điều kiện nào cùng đúng?
* **Đáp án mẫu:**

```text
True
True
True
```

---

## Bài tập 14: Tổng hợp - Đơn hàng có hợp lệ không?

* **Bối cảnh:** Một đơn hàng online hợp lệ khi số lượng lớn hơn 0, tổng tiền không vượt quá số tiền trong ví, và mã xác nhận đúng.
* **Yêu cầu:** Dùng toán tử số học, so sánh và logic để in kết quả kiểm tra đơn hàng. Không dùng `if`.
* **Code khởi đầu:**

```python
price = 25000
quantity = 3
wallet = 100000
confirm_code = "OK2026"
user_code = "OK2026"

total = price * quantity
quantity_ok = quantity > 0
money_ok = wallet >= total
code_ok = user_code == confirm_code
order_ok = quantity_ok and money_ok and code_ok

print(total)
print(quantity_ok)
print(money_ok)
print(code_ok)
print(order_ok)
```

* **Câu hỏi gợi ý:**
  * Biểu thức nào tạo ra giá trị tổng tiền?
  * Biểu thức nào kiểm tra đủ tiền?
  * Vì sao `order_ok` dùng `and`?
  * Nếu đổi `wallet = 50000`, dòng cuối sẽ là gì?
* **Đáp án mẫu:**

```text
75000
True
True
True
True
```

---

## Chuyển tiếp sang bài `if`

Ở phần toán tử, chúng ta đã tạo ra nhiều biểu thức có kết quả `True` hoặc `False`, ví dụ:

```python
score >= 5
age >= 12
user_password == correct_password
old_enough and registered and card_ok
```

Hiện tại chương trình mới chỉ in ra kết quả kiểm tra. Ở bài tiếp theo, câu lệnh `if` sẽ dùng chính các kết quả `True/False` này để giúp chương trình ra quyết định: nếu đúng thì làm việc này, nếu sai thì làm việc khác.
