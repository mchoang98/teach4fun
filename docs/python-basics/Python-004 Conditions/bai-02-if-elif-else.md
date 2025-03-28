# Bài 4-2: If-Elif-Else 

Một ngày nọ, Doraemon và Nobita đứng trước một tình huống rất thú vị: **"Chọn món ăn cho bữa trưa!"**. Nhưng không phải món ăn nào cũng phù hợp. Doraemon quyết định sẽ áp dụng **If-Elif-Else** để đưa ra quyết định thông minh. 

## Cấu Trúc If-Elif-Else

**If-Elif-Else** là một cách mở rộng của **If-Else**. Nó cho phép bạn kiểm tra nhiều điều kiện và thực hiện hành động tùy vào kết quả của từng điều kiện.

Cấu trúc của **If-Elif-Else**:

```python
if điều_kiện_1:
    # Hành động khi điều kiện 1 đúng
elif điều_kiện_2:
    # Hành động khi điều kiện 2 đúng
else:
    # Hành động khi tất cả các điều kiện trên đều sai
```

## Ví dụ 1: Quyết Định Món Ăn

Doraemon và Nobita muốn chọn món ăn cho bữa trưa. Nếu Nobita thích **mì**, họ sẽ ăn mì. Nếu không, nếu cậu ấy muốn **pizza**, họ sẽ chọn pizza. Nếu cả hai đều không, họ sẽ ăn **cơm**.

```python
favorite_food = "pizza"

if favorite_food == "mì":
    print("Chúng ta ăn mì nhé!")
elif favorite_food == "pizza":
    print("Chúng ta ăn pizza nhé!")
else:
    print("Không thích mì hay pizza, vậy thì ăn cơm thôi!")
```

**Giải thích**: 
- Nếu món ăn yêu thích của Nobita là **mì**, họ sẽ ăn mì.
- Nếu không, nếu món ăn yêu thích là **pizza**, họ sẽ ăn pizza.
- Nếu không có món ăn yêu thích nào trong hai món trên, họ sẽ ăn **cơm**.

## Ví dụ 2: Quyết Định Sử Dụng Bảo Bối

Doraemon đang tìm cách sử dụng các **bảo bối** cho Nobita. Nếu Nobita cần **bảo bối bay**, Doraemon sẽ lấy **Cánh Diều Bay**. Nếu cần **bảo bối cứu hộ**, Doraemon sẽ lấy **Cái Nón Cứu Hộ**. Nếu không, Nobita có thể dùng **Cánh Cửa Thời Gian**.

```python
needed_tool = "bảo bối bay"

if needed_tool == "bảo bối bay":
    print("Doraemon lấy Cánh Diều Bay!")
elif needed_tool == "bảo bối cứu hộ":
    print("Doraemon lấy Cái Nón Cứu Hộ!")
else:
    print("Doraemon lấy Cánh Cửa Thời Gian!")
```

**Giải thích**:
- Nếu Nobita cần **bảo bối bay**, Doraemon sẽ lấy **Cánh Diều Bay**.
- Nếu không, nếu Nobita cần **bảo bối cứu hộ**, Doraemon sẽ lấy **Cái Nón Cứu Hộ**.
- Nếu không cần cả hai món trên, Doraemon sẽ lấy **Cánh Cửa Thời Gian**.

## Ví dụ 3: Kiểm Tra Điểm Của Nobita

Doraemon muốn biết liệu Nobita có được thưởng hay không. Nếu Nobita đạt **10 điểm**, cậu ấy sẽ nhận phần thưởng đặc biệt. Nếu điểm từ **8 đến 9**, cậu ấy sẽ nhận phần thưởng nhỏ. Còn nếu dưới **8 điểm**, Nobita sẽ phải làm lại.

```python
score = 9

if score == 10:
    print("Nobita được thưởng phần thưởng đặc biệt!")
elif score >= 8:
    print("Nobita được thưởng phần thưởng nhỏ!")
else:
    print("Nobita phải làm lại.")
```

**Giải thích**:
- Nếu **điểm** của Nobita là **10**, cậu ấy sẽ nhận phần thưởng đặc biệt.
- Nếu điểm từ **8 đến 9**, Nobita sẽ nhận phần thưởng nhỏ.
- Nếu dưới **8 điểm**, Nobita sẽ phải làm lại.

## Tóm Tắt

- **If-Elif-Else** giúp bạn kiểm tra nhiều điều kiện và thực hiện hành động phù hợp với từng điều kiện.
- **If** là kiểm tra điều kiện đầu tiên, **elif** là kiểm tra các điều kiện tiếp theo, và **else** sẽ thực hiện hành động nếu tất cả điều kiện đều sai.

Doraemon và Nobita đã áp dụng **If-Elif-Else** để đưa ra các quyết định thông minh và hợp lý trong cuộc sống hàng ngày. Bạn cũng có thể sử dụng **If-Elif-Else** để giải quyết nhiều tình huống trong lập trình!


### Bài Tập Tự Luyện

#### **Bài Tập 1:** 
Doraemon muốn biết Nobita có được thưởng hay không. Nếu Nobita đạt **10 điểm**, cậu ấy sẽ nhận phần thưởng đặc biệt. Nếu điểm từ **8 đến 9**, cậu ấy sẽ nhận phần thưởng nhỏ. Còn nếu dứu **8 điểm**, Nobita sẽ phải làm lại.

**Input:** score = 8\
**Output:** "Nobita phải làm lại."

#### **Bài Tập 2:** 
Shizuka có 3 con mèo. Nếu con mèo đầu tiên là **mèo trắng**, con mèo thứ hai là **mèo đen**, con mèo thứ ba là **mèo xám**, Shizuka sẽ được tặng 1 bó hoa. Nếu không, cô ấy sẽ được tặng 1 lon sữa.

**Input:** color1 = "mèo trắng", color2 = "mèo đen", color3 = "mèo xám"\
**Output:** "Shizuka được tặng 1 bó hoa."

#### **Bài Tập 3:** 
Doraemon có 2 con robot. Nếu con robot đầu tiên là **robot đỏ**, con robot thứ hai là **robot xanh**, Doraemon sẽ được tặng 1 lon dầu. Nếu không, cậu ấy sẽ được tặng 1 lon nước.

**Input:** color1 = "robot đỏ", color2 = "robot vàng"\
**Output:** "Doraemon được tặng 1 lon nước."
