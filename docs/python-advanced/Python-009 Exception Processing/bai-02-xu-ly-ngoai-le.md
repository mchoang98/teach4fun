# Bài 9-2: Xử Lý Ngoại Lệ 

## 1. Khái Niệm Xử Lý Ngoại Lệ

Khi lập trình, ngoại lệ (Exception) là những lỗi xảy ra trong quá trình chương trình thực thi. Nếu không xử lý, chương trình có thể bị dừng lại, làm gián đoạn công việc của chúng ta. Nhưng nếu chúng ta xử lý ngoại lệ đúng cách, chương trình sẽ vẫn có thể tiếp tục hoạt động.

Cũng giống như trong các cuộc phiêu lưu của Doraemon, khi Doraemon và các bạn gặp phải sự cố với bảo bối, thay vì bỏ cuộc, Doraemon sẽ tìm cách sửa chữa hoặc thay thế bảo bối để cuộc phiêu lưu tiếp tục. Việc xử lý ngoại lệ trong lập trình cũng giống như thế, giúp chương trình không bị "dừng lại" khi gặp sự cố.

## 2. Cách Xử Lý Ngoại Lệ trong Python

Trong Python, chúng ta sử dụng cấu trúc `try`, `except` để xử lý ngoại lệ. Khi gặp phải lỗi, chương trình sẽ không bị dừng lại mà sẽ chuyển sang khối `except` để xử lý lỗi đó.

Ví dụ, trong một chuyến phiêu lưu, Doraemon sử dụng bảo bối **Cánh cửa thần kỳ** để đi đến các địa điểm. Tuy nhiên, nếu cánh cửa không thể mở ra địa điểm mà Doraemon yêu cầu, chúng ta sẽ phải xử lý lỗi này thay vì để Doraemon thất vọng.

## 3. Ví Dụ: Xử Lý Ngoại Lệ với Bảo Bối Cánh Cửa Thần Kỳ

Hãy tưởng tượng rằng Doraemon muốn mở một cánh cửa đến một địa điểm cụ thể, nhưng cánh cửa lại gặp phải sự cố không thể mở đến địa điểm đó. Thay vì để Doraemon bỏ cuộc, chúng ta sẽ xử lý ngoại lệ và thông báo cho Doraemon biết lý do cánh cửa không thể mở.

## Ví Dụ:

```python
# Bảo bối Cánh cửa thần kỳ
class CanhCuaThanKy:
    def __init__(self):
        self.dia_diem = ["Tokyo", "Vũ Trụ", "Thế Giới Cổ Đại"]
        
    def mo_cua(self, dia_diem_mong_muon):
        try:
            # Kiểm tra nếu địa điểm có trong danh sách hay không
            if dia_diem_mong_muon not in self.dia_diem:
                # Nếu không có, gây ra lỗi ValueError
                raise ValueError("Địa điểm không có trong danh sách!")
            print(f"Mở cửa đến {dia_diem_mong_muon} thành công!")
        except ValueError as e:
            # Bắt lỗi và in ra thông báo lỗi
            print(f"Lỗi: {e}. Vui lòng thử lại với địa điểm khác.")
        finally:
            # Cuối cùng, dù có lỗi hay không, sẽ thông báo
            print("Cánh cửa thần kỳ đã sẵn sàng cho chuyến phiêu lưu tiếp theo.")

# Tạo đối tượng bảo bối Cánh cửa thần kỳ
canh_cua = CanhCuaThanKy()

# Thử mở cửa đến một địa điểm không có trong danh sách
canh_cua.mo_cua("Bắc Cực")  # In ra: Lỗi: Địa điểm không có trong danh sách! Vui lòng thử lại với địa điểm khác.
                             # In ra: Cánh cửa thần kỳ đã sẵn sàng cho chuyến phiêu lưu tiếp theo.

# Thử mở cửa đến một địa điểm hợp lệ
canh_cua.mo_cua("Tokyo")  # In ra: Mở cửa đến Tokyo thành công!
                           # In ra: Cánh cửa thần kỳ đã sẵn sàng cho chuyến phiêu lưu tiếp theo.
```

## 4. Các Thành Phần Của Xử Lý Ngoại Lệ

- **`try`**: Chúng ta đặt các đoạn mã có thể gây ra lỗi vào trong khối `try`. Python sẽ thử thực thi đoạn mã này.
- **`except`**: Nếu một lỗi xảy ra trong khối `try`, chương trình sẽ nhảy vào khối `except` để xử lý lỗi đó.
- **`finally`**: Đây là khối mã sẽ luôn được thực thi, dù có lỗi hay không. Trong ví dụ trên, chúng ta dùng `finally` để thông báo rằng cánh cửa thần kỳ luôn sẵn sàng cho chuyến phiêu lưu tiếp theo.

## 5. Các Loại Ngoại Lệ Thường Gặp

Trong Python, có rất nhiều loại ngoại lệ, nhưng một số loại phổ biến là:

- **ValueError**: Khi dữ liệu không hợp lệ (ví dụ: địa điểm không có trong danh sách của cánh cửa thần kỳ).
- **ZeroDivisionError**: Khi thực hiện phép chia cho số 0.
- **FileNotFoundError**: Khi không thể tìm thấy tệp tin mà bạn đang mở.
- **IndexError**: Khi cố gắng truy cập vào một phần tử ngoài phạm vi của danh sách.

## 6. Tại Sao Phải Sử Dụng Xử Lý Ngoại Lệ?

Xử lý ngoại lệ giúp chương trình của Doraemon (và chương trình của chúng ta) không bị gián đoạn khi gặp phải sự cố. Thay vì chương trình bị dừng lại đột ngột, chúng ta có thể chủ động thông báo lỗi cho người dùng và cho họ cơ hội sửa chữa vấn đề.

Giống như khi Doraemon gặp vấn đề với bảo bối, thay vì bỏ cuộc, chúng ta sẽ luôn có cách để khắc phục và tiếp tục hành trình.

## 7. Bài Luyện Tập

## Bài Tập 1:
- Tạo một chương trình cho phép Doraemon sử dụng bảo bối **Máy dịch** để dịch từ tiếng Nhật sang tiếng Việt. Nếu từ không có trong từ điển, chương trình sẽ thông báo lỗi và yêu cầu Doraemon nhập lại.

## Bài Tập 2:
- Viết một chương trình để Doraemon sử dụng **Cánh cửa thần kỳ** mở cửa đến các địa điểm khác nhau. Nếu có lỗi xảy ra (ví dụ, không tìm thấy địa điểm), chương trình sẽ xử lý lỗi và thông báo cho Doraemon.

---

## Tóm Tắt

Xử lý ngoại lệ là một kỹ thuật quan trọng trong lập trình, giúp chương trình không bị dừng lại đột ngột khi gặp phải sự cố. Giống như Doraemon luôn biết cách xử lý vấn đề khi gặp phải sự cố với các bảo bối, việc xử lý ngoại lệ giúp chương trình của chúng ta tiếp tục chạy một cách mượt mà và ổn định.