# 3 bài tập lớn vận dụng toàn bộ kiến thức về hàm trong Python

## Bài 1: Trợ lý chuẩn bị cặp đi học

### Yêu cầu

Hãy xây dựng một chương trình có tên **Trợ lý chuẩn bị cặp đi học**.

Chương trình giúp học sinh kiểm tra xem mình đã chuẩn bị đủ đồ dùng trước khi đến trường hay chưa.

Người dùng cần nhập các thông tin:

* Hôm nay là thứ mấy.
* Hôm nay có tiết Thể dục hay không.
* Hôm nay có tiết Tin học hay không.
* Trời có mưa hay không.
* Học sinh đã mang vở hay chưa.
* Học sinh đã mang hộp bút hay chưa.
* Học sinh đã mang bình nước hay chưa.

Chương trình dựa vào các thông tin trên để tạo danh sách những đồ cần mang và kiểm tra mức độ chuẩn bị của học sinh.

### Dữ liệu đầu vào

Chương trình đọc dữ liệu bằng `input()`.

#### 1. Thứ trong tuần

Người dùng nhập một số nguyên từ `2` đến `6`.

Ví dụ:

```text
Nhập thứ hôm nay (2-6): 3
```

Nếu người dùng nhập giá trị ngoài khoảng từ `2` đến `6`, chương trình phải thông báo:

```text
Thứ không hợp lệ.
```

và kết thúc việc kiểm tra.

#### 2. Có tiết Thể dục hay không

Người dùng nhập:

```text
yes
```

hoặc:

```text
no
```

Phép so sánh không phân biệt chữ hoa và chữ thường.

Ví dụ `YES`, `Yes` và `yes` đều được xem là giống nhau.

#### 3. Có tiết Tin học hay không

Cách nhập tương tự tiết Thể dục.

#### 4. Trời có mưa hay không

Cách nhập tương tự.

#### 5. Các đồ dùng đã chuẩn bị

Chương trình hỏi lần lượt:

```text
Đã mang vở chưa?
Đã mang hộp bút chưa?
Đã mang bình nước chưa?
```

Người dùng trả lời `yes` hoặc `no`.

### Quy tắc chuẩn bị đồ

Một ngày học bình thường luôn cần:

* Vở.
* Hộp bút.
* Bình nước.

Nếu có tiết Thể dục, học sinh cần thêm:

```text
Đồ thể dục
```

Nếu có tiết Tin học, học sinh cần thêm:

```text
USB
```

Nếu trời mưa, học sinh cần thêm:

```text
Ô hoặc áo mưa
```

### Tính điểm chuẩn bị

Chương trình bắt đầu với:

```text
Điểm chuẩn bị = 3
```

Điểm này tương ứng với ba đồ dùng cơ bản:

* Vở.
* Hộp bút.
* Bình nước.

Nếu học sinh quên một món trong ba món trên, trừ `1` điểm cho mỗi món.

Nếu có tiết Thể dục, cộng thêm `1` vào số điểm tối đa.

Nếu có tiết Tin học, cộng thêm `1` vào số điểm tối đa.

Nếu trời mưa, cộng thêm `1` vào số điểm tối đa.

Để đơn giản, chương trình không cần hỏi học sinh đã mang đồ Thể dục, USB hoặc áo mưa hay chưa. Chỉ cần đưa các món này vào danh sách nhắc nhở.

### Đánh giá mức độ chuẩn bị

Sau khi kiểm tra, tính:

```text
Tỷ lệ chuẩn bị = điểm đạt được / điểm tối đa
```

Nếu tỷ lệ bằng `100%`:

```text
Bạn đã chuẩn bị rất tốt!
```

Nếu tỷ lệ từ `70%` đến dưới `100%`:

```text
Khá ổn, nhưng hãy kiểm tra lại cặp.
```

Nếu tỷ lệ dưới `70%`:

```text
Bạn đang quên khá nhiều đồ.
```

### Kết quả mong đợi

Ví dụ người dùng nhập:

```text
Nhập thứ hôm nay (2-6): 3
Có tiết Thể dục không? yes
Có tiết Tin học không? no
Trời có mưa không? yes

Đã mang vở chưa? yes
Đã mang hộp bút chưa? no
Đã mang bình nước chưa? yes
```

Chương trình có thể in:

```text
----- TRỢ LÝ CHUẨN BỊ CẶP -----

Hôm nay bạn cần:
- Vở
- Hộp bút
- Bình nước
- Đồ thể dục
- Ô hoặc áo mưa

Bạn đang quên:
- Hộp bút

Điểm chuẩn bị: 2/5

Bạn đang quên khá nhiều đồ.
```

### Yêu cầu kỹ thuật

Chương trình phải có ít nhất `6` hàm.

Phải có:

* Ít nhất `2` hàm nhận tham số.
* Ít nhất `2` hàm có `return`.
* Ít nhất `1` hàm không có tham số.
* Ít nhất `1` hàm gọi một hàm khác.
* Một hàm chính để điều khiển chương trình.

Ví dụ:

```python
def main():
```

hoặc:

```python
def run_program():
```

Các thông tin như:

```text
thứ
có Thể dục
có Tin học
trời mưa
điểm chuẩn bị
```

nên được lưu trong biến cục bộ.

Tạo một biến toàn cục:

```python
assistant_name = "School Bag Assistant"
```

Một hàm phải đọc và hiển thị tên trợ lý này.

Không được thay đổi giá trị của `assistant_name` trong chương trình.

### Gợi ý

Có thể chia chương trình thành các nhiệm vụ:

* Hiển thị tên chương trình.
* Kiểm tra thứ hợp lệ.
* Tạo danh sách đồ cần mang.
* Kiểm tra đồ cơ bản bị quên.
* Tính điểm chuẩn bị.
* Xếp loại mức độ chuẩn bị.
* In báo cáo cuối cùng.

Học sinh tự quyết định tên hàm và cách truyền dữ liệu giữa các hàm.

---

## Bài 2: Quầy bán vé hội chợ trường học

### Yêu cầu

Trường tổ chức một hội chợ với nhiều trò chơi.

Hãy viết chương trình mô phỏng **quầy bán vé hội chợ**.

Có ba trò chơi:

| Mã | Trò chơi     | Giá mỗi lượt |
| -- | ------------ | -----------: |
| 1  | Ném vòng     |  10.000 đồng |
| 2  | Bóng rổ mini |  15.000 đồng |
| 3  | Nhà ma       |  20.000 đồng |

Mỗi khách hàng chọn:

* Một trò chơi.
* Số lượt muốn chơi.
* Tuổi.
* Có phải học sinh của trường hay không.

Chương trình phải tính số tiền cần thanh toán và cập nhật doanh thu của quầy.

### Dữ liệu đầu vào

Chương trình dùng `input()`.

#### Mã trò chơi

Người dùng nhập `1`, `2` hoặc `3`.

Nếu nhập mã khác:

```text
Trò chơi không tồn tại.
```

Không tạo giao dịch.

#### Số lượt

Số lượt phải là số nguyên lớn hơn `0`.

Nếu số lượt nhỏ hơn hoặc bằng `0`:

```text
Số lượt không hợp lệ.
```

#### Tuổi

Tuổi là số nguyên từ `6` đến `18`.

Nếu ngoài khoảng này:

```text
Tuổi không hợp lệ.
```

#### Học sinh của trường

Nhập:

```text
yes
```

hoặc:

```text
no
```

Không phân biệt chữ hoa và chữ thường.

### Quy tắc tính tiền

Trước tiên:

```text
Tổng tiền = giá mỗi lượt × số lượt
```

Sau đó áp dụng giảm giá.

#### Giảm giá theo số lượt

Nếu mua từ `5` lượt trở lên:

```text
Giảm 10%
```

Nếu mua dưới `5` lượt:

```text
Không giảm theo số lượt
```

#### Giảm giá học sinh

Nếu khách là học sinh của trường:

```text
Giảm thêm 5%
```

Nếu không phải học sinh của trường:

```text
Không có giảm giá học sinh
```

Hai loại giảm giá được tính dựa trên tổng tiền ban đầu.

Ví dụ:

```text
Tổng tiền = 100000
Giảm theo số lượt = 10000
Giảm học sinh = 5000

Thanh toán = 85000
```

Không tính giảm giá lần hai trên số tiền đã giảm.

### Vé thưởng

Nếu khách:

* Là học sinh của trường.
* Và mua ít nhất `5` lượt.

thì chương trình in:

```text
Bạn nhận được 1 vé quay thưởng!
```

Ngược lại:

```text
Không có vé quay thưởng.
```

Điều kiện này phải được xử lý bằng toán tử `and`.

### Tiền khách đưa

Sau khi tính tiền, chương trình hỏi:

```text
Khách đưa bao nhiêu tiền?
```

Nếu số tiền khách đưa nhỏ hơn số tiền cần thanh toán:

```text
Không đủ tiền thanh toán.
```

Giao dịch không được tính là thành công.

Nếu đủ tiền:

```text
Tiền thừa = tiền khách đưa - tiền thanh toán
```

### Biến thống kê

Chương trình có hai biến toàn cục:

```python
total_revenue = 0
customer_count = 0
```

Sau mỗi giao dịch thành công:

```text
customer_count tăng 1
total_revenue tăng số tiền khách thực trả
```

Nếu giao dịch thất bại thì không được thay đổi hai biến này.

### Kết quả mong đợi

Ví dụ:

```text
Mã trò chơi: 2
Số lượt: 6
Tuổi: 13
Là học sinh của trường? yes
Khách đưa bao nhiêu tiền? 100000
```

Giá trò Bóng rổ mini là:

```text
15000
```

Tổng trước giảm:

```text
15000 × 6 = 90000
```

Giảm theo số lượt:

```text
9000
```

Giảm học sinh:

```text
4500
```

Thanh toán:

```text
76500
```

Tiền thừa:

```text
23500
```

Kết quả:

```text
----- VÉ HỘI CHỢ -----

Trò chơi: Bóng rổ mini
Số lượt: 6
Tổng tiền: 90000 đồng
Giảm theo số lượt: 9000 đồng
Giảm học sinh: 4500 đồng
Thanh toán: 76500 đồng
Tiền thừa: 23500 đồng

Bạn nhận được 1 vé quay thưởng!
```

### Yêu cầu kỹ thuật

Chương trình phải có ít nhất `7` hàm.

Trong đó:

* Có hàm lấy tên trò chơi.
* Có hàm lấy giá trò chơi.
* Có hàm tính tổng tiền.
* Có hàm tính giảm giá.
* Có hàm kiểm tra vé thưởng.
* Có hàm xử lý thanh toán.
* Có hàm hiển thị kết quả.

Ít nhất `3` hàm phải sử dụng `return`.

Ít nhất một hàm phải trả về kiểu `bool`.

Ví dụ:

```python
True
```

hoặc:

```python
False
```

Phải có ít nhất một điều kiện sử dụng `and`.

Phải sử dụng biến cục bộ cho:

```text
game_code
quantity
age
is_student
total
discount
payment
change
```

Hai biến:

```python
total_revenue
customer_count
```

là biến toàn cục.

Chỉ hàm cập nhật thống kê mới được phép dùng:

```python
global
```

Không được dùng `global` cho các biến khác.

### Phần mở rộng tùy chọn

Sau mỗi giao dịch thành công, hỏi:

```text
Phục vụ khách tiếp theo? yes/no
```

Nếu nhập `yes`, chương trình tiếp tục bán vé.

Nếu nhập `no`, chương trình kết thúc và in:

```text
----- THỐNG KÊ -----
Số khách: ...
Doanh thu: ... đồng
```

---

## Bài 3: Thử thách 7 ngày tiết kiệm

### Yêu cầu

Hãy xây dựng chương trình **Thử thách 7 ngày tiết kiệm**.

Chương trình giúp học sinh theo dõi tiền tiêu vặt trong một tuần.

Người dùng có:

* Một ngân sách cho cả tuần.
* Một mục tiêu tiết kiệm.

Trong mỗi ngày, người dùng nhập số tiền đã chi cho:

* Ăn uống.
* Học tập.
* Giải trí.

Chương trình tính tổng chi tiêu trong ngày, tổng chi tiêu cả tuần và đánh giá việc quản lý tiền.

### Dữ liệu đầu vào

Đầu chương trình, nhập:

```text
Ngân sách tuần:
Mục tiêu tiết kiệm:
```

Cả hai phải lớn hơn `0`.

Ví dụ:

```text
Ngân sách tuần: 500000
Mục tiêu tiết kiệm: 100000
```

Sau đó chương trình nhập chi tiêu cho từng ngày.

Ví dụ ngày 1:

```text
----- NGÀY 1 -----
Tiền ăn uống: 30000
Tiền học tập: 10000
Tiền giải trí: 20000
```

Mỗi số tiền phải lớn hơn hoặc bằng `0`.

Không được nhập số âm.

Nếu có một khoản âm:

```text
Số tiền không hợp lệ.
```

### Tính tổng chi tiêu ngày

Công thức:

```text
Chi tiêu ngày =
ăn uống + học tập + giải trí
```

Ví dụ:

```text
30000 + 10000 + 20000 = 60000
```

### Đánh giá chi tiêu mỗi ngày

Ngân sách trung bình mỗi ngày:

```text
Ngân sách ngày = ngân sách tuần / 7
```

Nếu chi tiêu ngày nhỏ hơn hoặc bằng ngân sách ngày:

```text
Chi tiêu hôm nay: An toàn
```

Nếu chi tiêu lớn hơn ngân sách ngày nhưng không vượt quá `150%` ngân sách ngày:

```text
Chi tiêu hôm nay: Cẩn thận
```

Nếu chi tiêu lớn hơn `150%` ngân sách ngày:

```text
Chi tiêu hôm nay: Quá nhiều
```

### Tổng chi tiêu tuần

Chương trình có biến toàn cục:

```python
total_spent = 0
```

Sau mỗi ngày hợp lệ:

```text
total_spent = total_spent + chi tiêu ngày
```

Hàm cập nhật biến này phải sử dụng `global`.

### Kiểm tra ngân sách

Sau khi nhập đủ 7 ngày:

```text
Tiền còn lại = ngân sách tuần - total_spent
```

Nếu `total_spent` lớn hơn ngân sách:

```text
Bạn đã vượt ngân sách.
```

Số tiền vượt:

```text
total_spent - ngân sách tuần
```

Ví dụ:

```text
Bạn đã vượt ngân sách 50000 đồng.
```

Nếu chưa vượt:

```text
Bạn còn lại ... đồng.
```

### Kiểm tra mục tiêu tiết kiệm

Học sinh đạt mục tiêu nếu:

```text
Tiền còn lại >= mục tiêu tiết kiệm
```

Nếu đạt:

```text
Chúc mừng! Bạn đã đạt mục tiêu tiết kiệm.
```

Nếu chưa đạt:

```text
Bạn chưa đạt mục tiêu tiết kiệm.
```

Nếu chưa đạt nhưng vẫn còn tiền, chương trình tính:

```text
Số tiền còn thiếu =
mục tiêu tiết kiệm - tiền còn lại
```

Ví dụ:

```text
Bạn còn thiếu 30000 đồng để đạt mục tiêu.
```

### Đánh giá cuối tuần

Nếu:

* Không vượt ngân sách.
* Và đạt mục tiêu tiết kiệm.

thì:

```text
Xếp loại: Quản lý tiền rất tốt
```

Nếu không vượt ngân sách nhưng chưa đạt mục tiêu:

```text
Xếp loại: Quản lý tiền khá tốt
```

Nếu vượt ngân sách:

```text
Xếp loại: Cần cố gắng hơn
```

Phải sử dụng kết hợp `and` hoặc `not` trong phần đánh giá này.

### Kết quả mong đợi

Ví dụ sau 7 ngày:

```text
Ngân sách tuần: 500000
Mục tiêu tiết kiệm: 100000

Tổng chi tiêu: 370000
```

Tiền còn lại:

```text
500000 - 370000 = 130000
```

Kết quả:

```text
----- BÁO CÁO 7 NGÀY -----

Tổng chi tiêu: 370000 đồng
Tiền còn lại: 130000 đồng

Chúc mừng! Bạn đã đạt mục tiêu tiết kiệm.

Xếp loại: Quản lý tiền rất tốt
```

### Yêu cầu kỹ thuật

Chương trình phải có ít nhất `7` hàm.

Phải có các loại hàm sau:

* Hàm nhập và kiểm tra số tiền.
* Hàm tính tổng chi tiêu trong ngày.
* Hàm đánh giá chi tiêu trong ngày.
* Hàm cập nhật tổng chi tiêu.
* Hàm tính số tiền còn lại.
* Hàm kiểm tra mục tiêu tiết kiệm.
* Hàm tạo báo cáo cuối tuần.

Phải có hàm chính:

```python
def main():
```

hoặc:

```python
def run_program():
```

Hàm chính phải gọi các hàm nhỏ để hoàn thành chương trình.

Ít nhất `3` hàm phải nhận từ `2` tham số trở lên.

Ít nhất `3` hàm phải sử dụng `return`.

Ít nhất một hàm phải trả về `True` hoặc `False`.

Biến:

```python
total_spent
```

là biến toàn cục.

Các biến sau nên là biến cục bộ:

```text
food
study
entertainment
daily_total
daily_budget
remaining
saving_goal
```

Chỉ hàm cập nhật `total_spent` được sử dụng từ khóa:

```python
global
```

### Phần mở rộng tùy chọn

Sau khi hoàn thành chương trình chính, có thể thêm chức năng tìm ngày chi tiêu nhiều nhất.

Mỗi ngày sau khi tính tổng, chương trình so sánh với mức chi cao nhất hiện tại.

Cuối tuần in:

```text
Ngày chi tiêu nhiều nhất: Ngày ...
Số tiền: ... đồng
```

---

## Yêu cầu chung cho cả 3 bài

Không viết toàn bộ chương trình trong một hàm duy nhất.

Mỗi hàm nên chịu trách nhiệm cho một nhiệm vụ cụ thể.

Ví dụ:

```text
main()
  │
  ├── nhập dữ liệu
  │
  ├── gọi hàm kiểm tra
  │
  ├── gọi hàm tính toán
  │
  ├── gọi hàm đánh giá
  │
  └── gọi hàm hiển thị kết quả
```

Khi một hàm tính ra dữ liệu mà hàm khác cần sử dụng, ưu tiên trả kết quả bằng:

```python
return
```

Ví dụ:

```python
def calculate_total(price, quantity):
    return price * quantity
```

Không sử dụng biến toàn cục chỉ để tránh truyền tham số.

Chỉ sử dụng `global` trong những trường hợp đề bài yêu cầu cập nhật một giá trị dùng chung như:

```text
doanh thu
số khách
tổng chi tiêu
```

Trước khi hoàn thành bài, kiểm tra:

* Chương trình có được chia thành nhiều hàm hợp lý không?
* Hàm có tên dễ hiểu không?
* Có truyền dữ liệu bằng tham số không?
* Có lấy kết quả bằng `return` không?
* Có phân biệt đúng biến cục bộ và biến toàn cục không?
* `global` có chỉ được sử dụng ở nơi thật sự cần thiết không?
* Các trường hợp sai dữ liệu đã được xử lý chưa?
* Các điều kiện biên như `>=`, `<=` đã được xử lý đúng chưa?
* Hàm chính có điều khiển được toàn bộ chương trình không?
