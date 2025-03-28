# Bài 9-3: Tạo Ngoại Lệ Tự Chỉnh

## 1. Khái Niệm Ngoại Lệ Tự Chỉnh

Trong lập trình, chúng ta có thể tạo ra các loại ngoại lệ riêng để xử lý những tình huống đặc biệt mà chúng ta dự đoán trước được. Việc tạo ngoại lệ tự chỉnh cho phép chúng ta kiểm soát tốt hơn chương trình của mình và đưa ra thông báo cụ thể khi xảy ra lỗi.

Doraemon cũng vậy, khi gặp một sự cố đặc biệt mà các bảo bối của cậu không thể xử lý, Doraemon sẽ tự tạo ra một giải pháp riêng để khắc phục vấn đề. Ví dụ, Doraemon có thể tạo ra một "bảo bối" giúp cảnh báo nếu có một sự cố nào đó xảy ra trong chuyến phiêu lưu.

## 2. Cách Tạo Ngoại Lệ Tự Chỉnh

Trong Python, chúng ta có thể tạo ngoại lệ tự chỉnh bằng cách tạo một lớp kế thừa từ lớp `Exception`. Sau đó, chúng ta có thể sử dụng ngoại lệ này để ném ra khi xảy ra một tình huống đặc biệt.

Ví dụ: Doraemon muốn tạo một ngoại lệ khi sử dụng bảo bối **Máy dịch** và nhập vào một từ không có trong từ điển của cậu. Thay vì để chương trình dừng lại, Doraemon sẽ tự tạo ra một ngoại lệ để thông báo cho mọi người biết rằng từ này không có trong từ điển.

## 3. Ví Dụ: Tạo Ngoại Lệ Tự Chỉnh Với Bảo Bối **Máy Dịch**

Trong ví dụ này, Doraemon sẽ sử dụng một từ điển và khi từ không có trong từ điển, chúng ta sẽ ném ra một ngoại lệ tự chỉnh để thông báo lỗi.

### Ví Dụ:

```python
# Tạo ngoại lệ tự chỉnh
class TuKhongCoNgoaiLe(Exception):
    def __init__(self, tu):
        super().__init__(f"Từ '{tu}' không có trong từ điển của Doraemon!")

# Bảo bối Máy dịch
class MayDich:
    def __init__(self):
        # Từ điển của Doraemon
        self.tu_dien = {
            "こんにちは": "Xin chào",
            "ありがとう": "Cảm ơn",
            "さようなら": "Tạm biệt"
        }

    def dich(self, tu):
        try:
            # Kiểm tra nếu từ có trong từ điển hay không
            if tu not in self.tu_dien:
                # Nếu không có, ném ra ngoại lệ tự chỉnh
                raise TuKhongCoNgoaiLe(tu)
            return self.tu_dien[tu]
        except TuKhongCoNgoaiLe as e:
            # Bắt lỗi và in ra thông báo lỗi
            print(f"Lỗi: {e}")
        finally:
            # Sau khi xử lý xong, luôn thông báo
            print("Máy dịch đã sẵn sàng cho từ tiếp theo.")

# Tạo đối tượng Máy dịch
may_dich = MayDich()

# Thử dịch một từ không có trong từ điển
may_dich.dich("おはよう")  # In ra: Lỗi: Từ 'おはよう' không có trong từ điển của Doraemon!
                            # In ra: Máy dịch đã sẵn sàng cho từ tiếp theo.

# Thử dịch một từ có trong từ điển
result = may_dich.dich("こんにちは")  # In ra: Máy dịch đã sẵn sàng cho từ tiếp theo.
print(result)  # In ra: Xin chào
```

## 4. Giải Thích Mã

- **Lớp TuKhongCoNgoaiLe**: Đây là lớp ngoại lệ tự chỉnh mà Doraemon tạo ra để xử lý tình huống khi từ không có trong từ điển. Lớp này kế thừa từ `Exception` và có một phương thức khởi tạo nhận từ không có trong từ điển.
  
- **Lớp MayDich**: Đây là lớp mô phỏng bảo bối **Máy dịch** của Doraemon. Nếu từ không có trong từ điển, một ngoại lệ tự chỉnh `TuKhongCoNgoaiLe` sẽ được ném ra và chương trình sẽ thông báo lỗi.

- **Khối `try-except-finally`**: Đây là phần xử lý ngoại lệ. Chúng ta thử tìm kiếm từ trong từ điển, nếu không có, một ngoại lệ sẽ được ném ra và thông báo lỗi sẽ được in ra. Khối `finally` luôn chạy, dù có lỗi hay không, để thông báo rằng máy dịch đã sẵn sàng.

## 5. Lý Do Tạo Ngoại Lệ Tự Chỉnh

Việc tạo ngoại lệ tự chỉnh giúp chương trình của Doraemon linh hoạt hơn và có thể kiểm soát tốt hơn các tình huống đặc biệt. Khi gặp phải những trường hợp mà chương trình không thể tự xử lý, việc tạo ra một ngoại lệ cho phép Doraemon hoặc người lập trình biết chính xác đâu là nguyên nhân của sự cố, từ đó có thể đưa ra giải pháp phù hợp.

## 6. Bài Luyện Tập

### Bài Tập 1:
- Viết một chương trình cho phép Doraemon sử dụng bảo bối **Máy tính** để thực hiện các phép toán. Nếu phép toán không hợp lệ (như chia cho 0), hãy tạo một ngoại lệ tự chỉnh để thông báo lỗi.

### Bài Tập 2:
- Tạo một chương trình cho phép Doraemon sử dụng bảo bối **Máy rút tiền** để rút tiền từ tài khoản. Nếu số tiền rút lớn hơn số dư tài khoản, chương trình sẽ tạo một ngoại lệ tự chỉnh và thông báo lỗi.

---

## Tóm Tắt

Ngoại lệ tự chỉnh là một công cụ mạnh mẽ giúp chúng ta xử lý các tình huống đặc biệt trong chương trình. Thay vì để chương trình bị gián đoạn, chúng ta có thể tạo ra các ngoại lệ tùy chỉnh để thông báo cho người dùng và đưa ra giải pháp cho vấn đề. Giống như Doraemon luôn sáng tạo ra những giải pháp hữu ích trong cuộc sống, việc tạo ngoại lệ tự chỉnh giúp chương trình của chúng ta hoạt động mượt mà hơn.