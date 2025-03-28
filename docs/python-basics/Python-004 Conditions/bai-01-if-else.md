# Bài 4-1: If-Else

Một ngày, Doraemon và Nobita đang đứng trước một quyết định quan trọng: **“Hôm nay chúng ta sẽ làm gì?”** Thay vì phải suy nghĩ quá lâu, Doraemon rút ra một cách đơn giản để đưa ra quyết định. Đó chính là sử dụng một **công thức lập trình cực kỳ hữu ích** – **If-Else**! 

### Cấu Trúc If-Else

Trong Python, **If-Else** giúp chúng ta kiểm tra điều kiện và thực hiện một hành động khi điều kiện đó đúng, hoặc thực hiện hành động khác khi điều kiện sai. 

Cấu trúc cơ bản của **If-Else** là:

```python
if điều_kiện:
    # Hành động khi điều kiện đúng
else:
    # Hành động khi điều kiện sai
```

### Ví dụ 1: Quyết Định Đi Đâu

Doraemon và Nobita đang đứng trước lựa chọn: **“Đi công viên”** hay **“Ở nhà chơi game”**. Nếu trời đẹp, họ sẽ đi công viên, nếu không, họ sẽ ở nhà chơi game.

```python
weather = "trời đẹp"

if weather == "trời đẹp":
    print("Họ đi công viên và chơi!")
else:
    print("Họ ở nhà và chơi game!")
```

**Giải thích**: Nếu **trời đẹp**, họ sẽ quyết định đi công viên. Nếu không phải trời đẹp, họ sẽ ở nhà chơi game.

### Ví dụ 2: Kiểm Tra Tuổi Của Nobita

Doraemon đang suy nghĩ liệu Nobita có đủ tuổi để tham gia trò chơi mới hay không. Nếu tuổi của Nobita từ 10 trở lên, cậu ấy sẽ được phép tham gia. Nếu không, cậu ấy phải đợi thêm.

```python
age = 9

if age >= 10:
    print("Nobita đủ tuổi để chơi trò chơi!")
else:
    print("Nobita chưa đủ tuổi, phải đợi thêm.")
```

**Giải thích**: Nếu **tuổi** của Nobita từ 10 trở lên, cậu ấy sẽ tham gia trò chơi. Nếu không, cậu ấy sẽ phải đợi thêm.

### Ví dụ 3: Kiểm Tra Số Điểm Của Nobita

Doraemon muốn xem liệu Nobita có đủ điểm để nhận phần thưởng hay không. Nếu điểm của Nobita từ 8 trở lên, cậu ấy sẽ được thưởng. Nếu thấp hơn 8, cậu ấy phải làm lại.

```python
score = 7

if score >= 8:
    print("Nobita được thưởng!")
else:
    print("Nobita phải làm lại.")
```

**Giải thích**: Nếu **điểm** của Nobita từ 8 trở lên, cậu ấy sẽ được thưởng. Nếu dưới 8, Nobita phải làm lại.

### Tóm Tắt

- **If-Else** giúp bạn quyết định hành động dựa trên điều kiện.
- **If** là kiểm tra điều kiện, thực hiện hành động nếu đúng, còn **else** sẽ thực hiện hành động khác nếu điều kiện sai.

Vậy là Doraemon và Nobita đã sử dụng **If-Else** để đưa ra những quyết định thông minh trong ngày hôm đó! Bạn cũng có thể áp dụng **If-Else** trong lập trình để xử lý các tình huống và đưa ra lựa chọn phù hợp.

<!--  -->

### Bài Tập Vận Dụng

#### **Bài Tập 1:** 
Doraemon muốn xem liệu Nobita có đủ điểm để được thưởng hay không. Nếu điểm của Nobita từ 8 trở lên, cậu ấy sẽ được thưởng. Nếu thấp hơn 8, cậu ấy phải làm lại.

**Input:** score = 7\
**Output:** "Nobita phải làm lại."

#### **Bài Tập 2:** 
Shizuka có một chiếc bánh sinh nhật, và cô ấy muốn chia cho 4 người bạn. Nếu có đủ bánh, mỗi người sẽ được 1 phần. Nếu không đủ, cô ấy sẽ chia đôi cho 2 người.

**Input:** num_people = 4, num_cakes = 3\
**Output:** "Shizuka chia đôi cho 2 người."

#### **Bài Tập 3:** 
Doraemon có một bảo bối giúp Nobita học tiếng Anh. Nếu Nobita trả lời đúng, cậu ấy sẽ được 1 điểm. Nếu trả lời sai, cậu ấy sẽ bị trừ 1 điểm.

**Input:** correct_answer = True\
**Output:** "Nobita được 1 điểm."

