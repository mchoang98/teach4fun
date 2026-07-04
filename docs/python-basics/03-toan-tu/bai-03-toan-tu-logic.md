# Bài 3-3: Toán tử logic

## Khung học vui

**Bối cảnh:** Bạn là người thiết kế máy tính mini cho căn tin trường: tính tiền nước, giảm giá combo, kiểm tra đủ tiền và đổi điểm thưởng.

**Thử ngay trong 5 phút:** Cho `price`, `quantity`, `discount`, hãy tính tổng tiền trước và sau giảm giá.

**Hoạt động cặp đôi:** Một bạn đặt luật tính tiền, một bạn viết biểu thức Python. Cùng thử ít nhất 3 bộ dữ liệu khác nhau.

**Nâng cấp sau giờ học:** Tạo máy tính đơn hàng: nhập giá, số lượng, phần trăm giảm giá, số tiền khách đưa; in tiền cần trả và tiền thừa.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## Mục tiêu

- Biết dùng `and`, `or`, `not`.
- Kết hợp nhiều điều kiện trong một biểu thức.
- Đọc được kết quả `True` hoặc `False`.

## Các toán tử logic

| Toán tử | Ý nghĩa | Khi nào là `True` |
| --- | --- | --- |
| `and` | Và | Tất cả điều kiện đều đúng |
| `or` | Hoặc | Ít nhất một điều kiện đúng |
| `not` | Phủ định | Đảo ngược kết quả |

## Ví dụ

```python
age = 13
score = 8

print(age >= 12 and score >= 8)  # True
print(age >= 15 or score >= 8)   # True
print(not age >= 15)             # True
```

## Bảng nhớ nhanh

| Biểu thức | Kết quả |
| --- | --- |
| `True and True` | `True` |
| `True and False` | `False` |
| `True or False` | `True` |
| `False or False` | `False` |
| `not True` | `False` |
| `not False` | `True` |

## Kết hợp điều kiện

```python
username = "admin"
password = "123456"

print(username == "admin" and password == "123456")
```

Kết quả:

```text
True
```

## Lỗi cần tránh

- Viết `and`, `or`, `not` bằng chữ thường.
- Nên dùng `()` khi biểu thức dài để dễ đọc.
- Không nhầm `and` với `or`: `and` chặt hơn, `or` chỉ cần một điều kiện đúng.

## Ghi nhớ

Toán tử logic giúp ghép nhiều phép so sánh lại với nhau.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
