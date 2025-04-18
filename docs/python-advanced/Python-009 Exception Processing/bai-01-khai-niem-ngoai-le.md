# Bài 9-1: Khái Niệm Ngoại Lệ 

## 1. Khái Niệm Ngoại Lệ

Trong lập trình Python, **ngoại lệ** (Exception) là một sự kiện hoặc lỗi xảy ra trong quá trình thực thi chương trình, làm gián đoạn dòng chảy bình thường của chương trình. Ngoại lệ có thể xảy ra khi người dùng nhập dữ liệu sai, tính toán sai, hoặc khi không tìm thấy tệp tin.

Nếu không xử lý đúng các ngoại lệ, chương trình của bạn sẽ bị dừng lại đột ngột và không thể tiếp tục. Nhưng nếu biết cách xử lý ngoại lệ, chương trình của bạn sẽ tiếp tục hoạt động bình thường mà không gặp phải sự cố lớn.

Để dễ hình dung, chúng ta có thể tưởng tượng Doraemon và các bạn nhỏ đang sử dụng bảo bối. Nếu có sự cố ngoài ý muốn (như bảo bối hỏng hay không hoạt động như mong đợi), chúng ta sẽ phải có cách xử lý ngoại lệ để bảo bối vẫn có thể hoạt động tiếp được.

## 2. Tại Sao Cần Xử Lý Ngoại Lệ?

Khi Doraemon và Nobita sử dụng các bảo bối, đôi khi những bảo bối này có thể gặp sự cố như không có điện, bị lỗi hoặc không hoạt động đúng. Nhưng thay vì để bảo bối bị hỏng hoàn toàn, Doraemon luôn tìm cách sửa chữa, thay đổi cách sử dụng hoặc thay thế nó bằng một bảo bối khác.

Trong lập trình, khi một ngoại lệ xảy ra, nếu không xử lý, chương trình sẽ dừng lại và không thể tiếp tục làm việc. Tuy nhiên, nếu ta xử lý ngoại lệ, chương trình vẫn có thể tiếp tục thực thi và không bị "đứng hình" như khi gặp lỗi.

## 3. Ví Dụ Về Ngoại Lệ trong Doraemon

Hãy tưởng tượng Doraemon đang dùng **Cánh cửa thần kỳ** để đi du lịch, nhưng có một sự cố xảy ra khi Doraemon không tìm thấy đích đến, khiến bảo bối gặp lỗi. Thay vì để Doraemon và các bạn đứng yên, chúng ta có thể xử lý tình huống này để bảo bối vẫn có thể tiếp tục hoạt động.

### Ví Dụ:

```python
# Giả sử bảo bối Cánh cửa thần kỳ có thể mở ra các địa điểm khác nhau
class CanhCuaThanKy:
    def __init__(self):
        self.dia_diem = ["Tokyo", "Vũ Trụ", "Thế Giới Cổ Đại"]

    def mo_cua(self, dia_diem_mong_muon):
        try:
            # Nếu địa điểm không có trong danh sách, sẽ gây ra lỗi
            if dia_diem_mong_muon not in self.dia_diem:
                raise ValueError("Địa điểm không có trong danh sách!")
            print(f"Mở cửa đến {dia_diem_mong_muon} thành công!")
        except ValueError as e:
            print(f"Lỗi: {e}. Vui lòng thử lại với địa điểm khác.")

# Tạo đối tượng bảo bối Cánh cửa thần kỳ
canh_cua = CanhCuaThanKy()

# Thử mở cửa đến một địa điểm không có trong danh sách
canh_cua.mo_cua("Bắc Cực")  # In ra: Lỗi: Địa điểm không có trong danh sách! Vui lòng thử lại với địa điểm khác.

# Thử mở cửa đến một địa điểm hợp lệ
canh_cua.mo_cua("Tokyo")  # In ra: Mở cửa đến Tokyo thành công!
```

## 4. Cách Xử Lý Ngoại Lệ

Trong ví dụ trên, chúng ta sử dụng một **khối `try`** để thử mở cửa đến địa điểm mà Doraemon mong muốn. Nếu địa điểm không có trong danh sách, chúng ta sẽ tạo ra một ngoại lệ (`ValueError`) và xử lý nó trong **khối `except`**. Điều này giúp Doraemon tránh gặp sự cố và tìm được giải pháp cho vấn đề mà không bị dừng lại.

## 5. Các Loại Ngoại Lệ Thường Gặp

Trong Python, có rất nhiều loại ngoại lệ, một số ngoại lệ thường gặp có thể kể đến như:

- **ValueError**: Khi dữ liệu đầu vào không hợp lệ (ví dụ: địa điểm không có trong danh sách).
- **ZeroDivisionError**: Khi thực hiện phép chia cho số 0.
- **FileNotFoundError**: Khi cố gắng mở một tệp không tồn tại.
- **IndexError**: Khi truy cập vào chỉ số ngoài phạm vi của một danh sách.

## 6. Lợi Ích của Xử Lý Ngoại Lệ

- **Giữ chương trình chạy ổn định**: Khi xử lý ngoại lệ đúng cách, chương trình không bị dừng đột ngột, giúp chương trình hoạt động ổn định hơn.
- **Tăng trải nghiệm người dùng**: Người dùng sẽ không gặp phải những lỗi không mong muốn, và thay vào đó có thể nhận được thông báo lỗi rõ ràng để dễ dàng khắc phục.
- **Chủ động xử lý tình huống bất ngờ**: Giống như Doraemon chủ động sử dụng các bảo bối để giải quyết vấn đề, việc xử lý ngoại lệ giúp lập trình viên chuẩn bị sẵn cho những tình huống bất ngờ trong chương trình.

## 7. Bài Luyện Tập

### Bài Tập 1:
- Tạo một chương trình cho phép Doraemon tìm kiếm các bảo bối trong một danh sách. Nếu bảo bối không có trong danh sách, hãy sử dụng ngoại lệ để thông báo cho Doraemon biết.

### Bài Tập 2:
- Viết một chương trình cho phép Doraemon chia sẻ các bảo bối với các bạn trong nhóm. Nếu số lượng bảo bối chia cho từng người không chia hết, chương trình sẽ tạo ra một ngoại lệ và yêu cầu nhập lại số lượng bảo bối.

---

## Tóm Tắt

Ngoại lệ trong Python là cách xử lý các lỗi hoặc tình huống bất ngờ mà chúng ta không thể dự đoán trước. Việc sử dụng ngoại lệ giúp chương trình của Doraemon (và cả chương trình của chúng ta) có thể tiếp tục hoạt động ngay cả khi gặp sự cố, tránh bị dừng lại đột ngột. Chỉ cần một chút xử lý ngoại lệ hợp lý, mọi vấn đề sẽ được giải quyết dễ dàng!