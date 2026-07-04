# Bài 3-4: Toán tử gán

## Khung học vui

**Bối cảnh:** Bạn là người thiết kế máy tính mini cho căn tin trường: tính tiền nước, giảm giá combo, kiểm tra đủ tiền và đổi điểm thưởng.

**Thử ngay trong 5 phút:** Cho `price`, `quantity`, `discount`, hãy tính tổng tiền trước và sau giảm giá.

**Hoạt động cặp đôi:** Một bạn đặt luật tính tiền, một bạn viết biểu thức Python. Cùng thử ít nhất 3 bộ dữ liệu khác nhau.

**Nâng cấp sau giờ học:** Tạo máy tính đơn hàng: nhập giá, số lượng, phần trăm giảm giá, số tiền khách đưa; in tiền cần trả và tiền thừa.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## Mục tiêu

- Biết dùng `=` để gán giá trị cho biến.
- Biết các toán tử gán mở rộng như `+=`, `-=`, `*=`.
- Biết gán nhiều biến và đổi chỗ giá trị.

## Gán cơ bản

```python
name = "An"
age = 12
score = 9.5
```

Dấu `=` nghĩa là lưu giá trị bên phải vào biến bên trái.

## Toán tử gán mở rộng

| Toán tử | Ví dụ | Tương đương |
| --- | --- | --- |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `//=` | `x //= 2` | `x = x // 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |

## Ví dụ

```python
x = 10

x += 5   # 15
x *= 2   # 30
x -= 10  # 20
x //= 3  # 6

print(x)
```

Kết quả:

```text
6
```

## Gán nhiều biến

```python
a, b, c = 1, 2, 3
print(a, b, c)
```

## Đổi chỗ giá trị

```python
a = 5
b = 10

a, b = b, a

print(a)  # 10
print(b)  # 5
```

## Lỗi cần tránh

- `=` là gán, `==` là so sánh.
- Biến phải nằm bên trái khi gán: viết `x = 5`, không viết `5 = x`.
- Toán tử gán mở rộng chỉ dùng khi biến đã có giá trị trước đó.

## Ghi nhớ

Toán tử gán giúp cập nhật giá trị biến ngắn gọn hơn.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
