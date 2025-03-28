# Bài 4-3: Biểu Thức Điều Kiện 

Trong thế giới của Doraemon, mỗi khi gặp một tình huống cần phải đưa ra quyết định, Doraemon và Nobita thường dùng **biểu thức điều kiện** để giúp họ quyết định nhanh chóng. **Biểu thức điều kiện** là một cách rút gọn của câu lệnh `if-else`, giúp làm cho chương trình ngắn gọn hơn mà vẫn đạt được kết quả tương tự.

### Cấu Trúc Biểu Thức Điều Kiện

Biểu thức điều kiện có cấu trúc cơ bản như sau:

```python
giá_trị = giá_trị_nếu_đúng if điều_kiện else giá_trị_nếu_sai
```

- **Điều kiện** là một phép so sánh hoặc một phép kiểm tra nào đó (ví dụ: `x > 10`).
- Nếu **điều kiện** đúng, giá trị **giá_trị_nếu_đúng** sẽ được gán cho biến.
- Nếu **điều kiện** sai, giá trị **giá_trị_nếu_sai** sẽ được gán cho biến.

### Ví dụ 1: Quyết Định Mặc Gì Hôm Nay

Doraemon và Nobita đang quyết định mặc gì trong ngày hôm nay. Nếu trời **nắng**, họ sẽ mặc **áo phông**. Nếu trời **mưa**, họ sẽ mặc **áo mưa**. Nếu thời tiết không xấu lắm, họ sẽ mặc **áo khoác**.

Doraemon có thể sử dụng **biểu thức điều kiện** để quyết định:

```python
weather = "mưa"
clothes = "áo mưa" if weather == "mưa" else "áo phông" if weather == "nắng" else "áo khoác"
```

Trong ví dụ này:
- Nếu trời **mưa**, họ sẽ mặc **áo mưa**.
- Nếu trời **nắng**, họ sẽ mặc **áo phông**.
- Nếu thời tiết không rõ ràng, họ sẽ mặc **áo khoác**.

### Ví dụ 2: Kiểm Tra Điểm Của Nobita

Nobita vừa hoàn thành bài kiểm tra và đang rất lo lắng không biết có được thưởng hay không. Nếu điểm của cậu là **10**, cậu sẽ nhận phần thưởng đặc biệt. Nếu điểm của cậu từ **8 đến 9**, cậu sẽ nhận phần thưởng nhỏ. Nếu điểm thấp hơn **8**, Nobita sẽ phải học lại.

Doraemon sẽ giúp Nobita kiểm tra điểm với **biểu thức điều kiện** như sau:

```python
score = 9
reward = "Phần thưởng đặc biệt" if score == 10 else "Phần thưởng nhỏ" if score >= 8 else "Phải học lại"
```

### Ví dụ 3: Quyết Định Đến Công Viên Hay Ở Nhà

Doraemon và Nobita đang đứng trước sự lựa chọn đi công viên hay ở nhà chơi game. Nếu trời **đẹp**, họ sẽ đi công viên. Nếu trời không đẹp, họ sẽ ở nhà chơi game.

Doraemon sẽ giúp Nobita đưa ra quyết định này với **biểu thức điều kiện**:

```python
weather = "trời đẹp"
activity = "Đi công viên" if weather == "trời đẹp" else "Ở nhà chơi game"
```

### Bài Luyện Tập

#### Bài Tập 1: Quyết Định Mặc Gì
Doraemon và Nobita sẽ quyết định mặc gì hôm nay. Nếu trời **nắng**, họ sẽ mặc **áo phông**. Nếu trời **mưa**, họ sẽ mặc **áo mưa**. Nếu không, họ sẽ mặc **áo khoác**.

**Yêu cầu**: Quyết định xem họ sẽ mặc gì nếu trời **mưa**.

#### Bài Tập 2: Quyết Định Xem Phim Hay Chơi Game
Nobita đang phân vân không biết nên chơi game hay xem phim. Nếu **điểm** của Nobita là **trên 8**, cậu ấy sẽ xem phim. Nếu không, cậu ấy sẽ chơi game.

**Yêu cầu**: Quyết định xem Nobita sẽ làm gì nếu cậu ấy có **điểm 7**.

#### Bài Tập 3: Quyết Định Mua Đồ
Nobita có **5000 đồng** và muốn mua đồ. Nếu có từ **10000 đồng trở lên**, Nobita sẽ mua **đồng hồ thông minh**. Nếu không, Nobita sẽ mua **tai nghe Bluetooth**.

**Yêu cầu**: Quyết định xem Nobita sẽ mua gì nếu cậu ấy có **5000 đồng**.

---

### Tóm Tắt
- **Biểu thức điều kiện** giúp bạn làm chương trình gọn gàng hơn và dễ hiểu hơn, vì bạn có thể viết một câu lệnh ngắn thay vì phải dùng câu lệnh `if-else` dài dòng.
- Hãy thử sử dụng **biểu thức điều kiện** trong các bài tập để luyện tập và nắm vững cách sử dụng nó trong các tình huống khác nhau.

**Input:** score = 8\
**Input:** money = 20000\
**Input:** weather = "trời mưa"\
