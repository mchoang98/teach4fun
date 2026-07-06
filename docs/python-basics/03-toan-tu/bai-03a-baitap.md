# Bài tập 03: Toán tử trong Python

## Mục tiêu bài học

Sau phần bài tập này, học sinh cần hiểu rằng toán tử trong Python được dùng để:

* Tạo ra giá trị mới từ dữ liệu ban đầu.
* Tính toán các kết quả như tổng tiền, điểm số, số phần chia được.
* So sánh dữ liệu để nhận kết quả `True` hoặc `False`.
* Kết hợp nhiều điều kiện bằng toán tử logic.
* Bắt đầu sử dụng câu lệnh `if` để đưa ra quyết định trong chương trình.

## Lưu ý chung

Trong toàn bộ bài tập này:

* Có thể sử dụng câu lệnh `if` khi cần.
* Khi kiểm tra điều kiện, có thể:

  * In trực tiếp kết quả `True` hoặc `False`, hoặc
  * Dùng `if` để in ra thông báo phù hợp.
* Học sinh cần tự tạo biến, tự viết công thức và tự in kết quả.

---

# Bài tập 1: Tổng tiền căn tin

## Bối cảnh

Bạn mua nước và bánh ở căn tin. Mỗi chai nước và mỗi cái bánh có giá riêng. Hãy tính tổng số tiền cần trả.

## Input

Cho các giá trị:

```text
water_price = 12000
cake_price = 15000
water_count = 2
cake_count = 3
```

## Output

In ra tổng số tiền cần trả.

```text
69000
```

## Ràng buộc

* Không nhập dữ liệu từ bàn phím.
* Phải sử dụng biến để lưu giá tiền và số lượng.
* Phải sử dụng toán tử `*` để tính tiền từng món.
* Phải sử dụng toán tử `+` để tính tổng tiền.

## Gợi ý

* Tiền nước = giá nước × số chai nước.
* Tiền bánh = giá bánh × số bánh.
* Tổng tiền = tiền nước + tiền bánh.

---

# Bài tập 2: Điểm game sau một màn chơi

## Bối cảnh

Trong một trò chơi, mỗi ngôi sao nhận được 10 điểm. Mỗi lỗi bị trừ 5 điểm. Hãy tính điểm cuối cùng sau màn chơi.

## Input

Cho các giá trị:

```text
stars = 8
mistakes = 3
```

## Output

In ra điểm cuối cùng.

```text
65
```

## Ràng buộc

* Không nhập dữ liệu từ bàn phím.
* Mỗi sao được cộng 10 điểm.
* Mỗi lỗi bị trừ 5 điểm.
* Phải sử dụng toán tử `*` và `-`.

## Gợi ý

* Điểm từ sao = số sao × 10.
* Điểm bị trừ = số lỗi × 5.
* Điểm cuối cùng = điểm từ sao - điểm bị trừ.

---

# Bài tập 3: Thứ tự ưu tiên phép toán

## Bối cảnh

Một nhóm mua 2 combo. Mỗi combo gồm 1 phần ăn và 1 ly nước. Sau đó nhóm được giảm giá.

Hãy tính và so sánh kết quả khi dùng dấu ngoặc và khi không dùng dấu ngoặc.

## Input

Cho các giá trị:

```text
food = 30000
drink = 12000
combo_count = 2
discount = 10000
```

## Output

In ra 2 dòng:

* Dòng 1: tổng tiền đúng.
* Dòng 2: tổng tiền sai do thiếu dấu ngoặc.

```text
74000
44000
```

## Ràng buộc

* Không nhập dữ liệu từ bàn phím.
* Dòng 1 phải tính đúng.
* Dòng 2 phải cố ý sai để so sánh.
* Phải sử dụng toán tử `+`, `*`, `-`.

## Gợi ý

* Dùng dấu ngoặc để thay đổi thứ tự tính toán.
* Công thức đúng là: `(food + drink) * combo_count - discount`.

---

# Bài tập 4: Chia đều sticker

## Bối cảnh

Cô giáo có một số sticker và muốn chia đều cho các nhóm.

## Input

```text
stickers = 47
groups = 6
```

## Output

```text
7
5
```

## Ràng buộc

* Phải dùng `//` và `%`.

## Gợi ý

* `//` lấy phần nguyên.
* `%` lấy phần dư.

---

# Bài tập 5: Kiểm tra số chẵn lẻ (có dùng if)

## Bối cảnh

Kiểm tra số lượt chơi là chẵn hay lẻ.

## Input

```text
turns = 14
```

## Output

```text
Số chẵn
```

## Ràng buộc

* Phải dùng `%`.
* Phải dùng `if`.

## Gợi ý

* Nếu chia 2 dư 0 → số chẵn.

---

# Bài tập 6: Lũy thừa trong điểm thưởng

## Input

```text
level = 5
```

## Output

```text
25
```

## Ràng buộc

* Phải dùng `**`.

---

# Bài tập 7: Kiểm tra đạt hay chưa đạt (dùng if)

## Input

```text
score = 7.5
pass_score = 5
```

## Output

```text
Đạt
```

## Ràng buộc

* Phải dùng `if`.

---

# Bài tập 8: Kiểm tra đủ tuổi tham gia

## Input

```text
age = 11
min_age = 12
```

## Output

```text
Chưa đủ tuổi
```

## Ràng buộc

* Phải dùng `if`.

---

# Bài tập 9: Mật khẩu đúng hay sai

## Input

```text
correct_password = "python123"
user_password = "python12"
```

## Output

```text
Sai mật khẩu
```

## Ràng buộc

* Phải dùng `if`.

---

# Bài tập 10: Ghép điều kiện bằng `and`

## Input

```text
score = 8.5
submitted_all = True
```

## Output

```text
Nhận huy hiệu
```

## Ràng buộc

* Phải dùng `and` và `if`.

---

# Bài tập 11: Ghép điều kiện bằng `or`

## Input

```text
has_student_card = False
with_teacher = True
```

## Output

```text
Được vào
```

## Ràng buộc

* Phải dùng `or` và `if`.

---

# Bài tập 12: Đảo ngược bằng `not`

## Input

```text
is_locked = False
```

## Output

```text
Được đăng nhập
```

## Ràng buộc

* Phải dùng `not` và `if`.

---

# Bài tập 13: Tổng hợp điều kiện

## Input

```text
age = 13
registered = True
card_locked = False
```

## Output

```text
Được tham gia
```

## Ràng buộc

* Phải dùng `and`, `not`, `if`.

---

# Bài tập 14: Đơn hàng hợp lệ

## Input

```text
price = 25000
quantity = 3
wallet = 100000
confirm_code = "OK2026"
user_code = "OK2026"
```

## Output

```text
Đơn hàng hợp lệ
```

## Ràng buộc

* Phải dùng `and`, `if`.

---

# Bài tập 15: Chia hết cho 3

## Input

```text
number = 27
```

## Output

```text
Chia hết cho 3
```

## Ràng buộc

* Phải dùng `%` và `if`.

---

# Bài tập 16: Điểm hợp lệ

## Input

```text
score = 8
```

## Output

```text
Hợp lệ
```

## Ràng buộc

* Phải dùng `and`, `if`.

---

# Bài tập 17: Ưu đãi mua hàng

## Input

```text
total = 85000
is_vip = True
```

## Output

```text
Có ưu đãi
```

## Ràng buộc

* Phải dùng `or`, `if`.

---

# Bài tập 18: Trạng thái nộp bài

## Input

```text
submitted = False
```

## Output

```text
Chưa hoàn thành
```

## Ràng buộc

* Phải dùng `not`, `if`.

---

# Chuyển tiếp

Ở phần này, bạn đã bắt đầu sử dụng `if` để đưa ra quyết định.

Ở bài tiếp theo, bạn sẽ học sâu hơn về:

* `if`, `elif`, `else`
* Viết chương trình có nhiều nhánh xử lý khác nhau
