# Bài 3-5: Toán tử bitwise

## Khung học vui

**Bối cảnh:** Bạn là người thiết kế máy tính mini cho căn tin trường: tính tiền nước, giảm giá combo, kiểm tra đủ tiền và đổi điểm thưởng.

**Thử ngay trong 5 phút:** Cho `price`, `quantity`, `discount`, hãy tính tổng tiền trước và sau giảm giá.

**Hoạt động cặp đôi:** Một bạn đặt luật tính tiền, một bạn viết biểu thức Python. Cùng thử ít nhất 3 bộ dữ liệu khác nhau.

**Nâng cấp sau giờ học:** Tạo máy tính đơn hàng: nhập giá, số lượng, phần trăm giảm giá, số tiền khách đưa; in tiền cần trả và tiền thừa.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## Mục tiêu

- Biết bitwise là phép toán trên từng bit nhị phân.
- Nhận biết các toán tử `&`, `|`, `^`, `~`, `<<`, `>>`.
- Hiểu một vài ứng dụng cơ bản.

## Bitwise là gì?

Máy tính lưu số nguyên dưới dạng nhị phân gồm các bit `0` và `1`.

Ví dụ:

```python
a = 5  # 0101
b = 3  # 0011
```

Toán tử bitwise thao tác trực tiếp trên các bit này.

## Các toán tử chính

| Toán tử | Tên | Ví dụ với `a = 5`, `b = 3` | Kết quả |
| --- | --- | --- | --- |
| `&` | AND | `a & b` | `1` |
| `|` | OR | `a | b` | `7` |
| `^` | XOR | `a ^ b` | `6` |
| `~` | NOT | `~a` | `-6` |
| `<<` | Dịch trái | `a << 1` | `10` |
| `>>` | Dịch phải | `a >> 1` | `2` |

## Ví dụ

```python
a = 5
b = 3

print(a & b)   # 1
print(a | b)   # 7
print(a ^ b)   # 6
print(~a)      # -6
print(a << 1)  # 10
print(a >> 1)  # 2
```

## Dịch bit

- `x << 1` thường tương đương `x * 2`.
- `x >> 1` thường tương đương `x // 2`.

```python
print(6 << 1)  # 12
print(6 >> 1)  # 3
```

## Kiểm tra một bit

```python
number = 5  # 0101
n = 2

print(number & (1 << n) != 0)  # True
```

## Lỗi cần tránh

- `^` trong Python là XOR, không phải lũy thừa.
- Bitwise thường dùng với số nguyên.
- Với người mới học, chỉ cần nắm ý nghĩa cơ bản trước.

## Ghi nhớ

Bitwise ít dùng hơn toán tử số học và so sánh, nhưng rất hữu ích khi làm việc với nhị phân, cờ trạng thái hoặc tối ưu xử lý số.
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
