# Bài 3-2: Toán tử so sánh

## Khung học vui

**Bối cảnh:** Bạn là người thiết kế máy tính mini cho căn tin trường: tính tiền nước, giảm giá combo, kiểm tra đủ tiền và đổi điểm thưởng.

**Thử ngay trong 5 phút:** Cho `price`, `quantity`, `discount`, hãy tính tổng tiền trước và sau giảm giá.

**Hoạt động cặp đôi:** Một bạn đặt luật tính tiền, một bạn viết biểu thức Python. Cùng thử ít nhất 3 bộ dữ liệu khác nhau.

**Nâng cấp sau giờ học:** Tạo máy tính đơn hàng: nhập giá, số lượng, phần trăm giảm giá, số tiền khách đưa; in tiền cần trả và tiền thừa.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## Mục tiêu

- Biết toán tử so sánh dùng để kiểm tra quan hệ giữa hai giá trị.
- Hiểu kết quả so sánh luôn là `True` hoặc `False`.
- Phân biệt `=` và `==`.

## Các toán tử so sánh

| Toán tử | Ý nghĩa | Ví dụ | Kết quả |
| --- | --- | --- | --- |
| `==` | Bằng nhau | `5 == 5` | `True` |
| `!=` | Khác nhau | `5 != 3` | `True` |
| `>` | Lớn hơn | `8 > 3` | `True` |
| `<` | Nhỏ hơn | `2 < 7` | `True` |
| `>=` | Lớn hơn hoặc bằng | `5 >= 5` | `True` |
| `<=` | Nhỏ hơn hoặc bằng | `4 <= 6` | `True` |

## Ví dụ

```python
a = 10
b = 20
c = 10

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= c)
print(a <= c)
```

Kết quả:

```text
False
True
False
True
True
True
```

## `=` và `==`

`=` dùng để gán giá trị cho biến:

```python
age = 12
```

`==` dùng để so sánh hai giá trị:

```python
print(age == 12)  # True
```

## So sánh chuỗi

Python phân biệt chữ hoa và chữ thường.

```python
print("Python" == "Python")  # True
print("Python" == "python")  # False
print("An" != "Binh")        # True
```

## Kết hợp với toán tử số học

```python
number = 8

print(number % 2 == 0)  # True, vì 8 chia hết cho 2
print(5 + 3 == 8)       # True
print(2 ** 3 > 10)      # False
```

## Lỗi cần tránh

- Muốn so sánh bằng nhau phải dùng `==`, không dùng `=`.
- Viết đúng thứ tự: `>=`, `<=`, không viết `=>`, `=<`.
- Khi so sánh chuỗi, chú ý chữ hoa và chữ thường.

## Ghi nhớ

Toán tử so sánh trả về `True` hoặc `False`. Đây là nền tảng để học câu lệnh điều kiện `if`.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
