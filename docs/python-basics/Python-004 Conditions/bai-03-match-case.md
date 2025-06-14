
# Bài 4-3: Match Case trong Python

Từ phiên bản Python 3.10, một cú pháp mới mang tên `match case` được giới thiệu giúp việc so sánh và xử lý điều kiện trở nên rõ ràng, ngắn gọn hơn so với `if-elif-else`. Cú pháp này giống như `switch case` trong các ngôn ngữ khác nhưng mạnh mẽ hơn vì hỗ trợ *pattern matching* – tức là so khớp theo cấu trúc dữ liệu.

## Cú pháp cơ bản

```python
match biến:
    case mẫu_1:
        # mã lệnh nếu khớp mẫu_1
    case mẫu_2:
        # mã lệnh nếu khớp mẫu_2
    case _:
        # mặc định nếu không khớp mẫu nào
```

`_` là ký hiệu đại diện cho mọi giá trị, tương đương với "default".

---

## 1. So khớp với giá trị cụ thể (constant)

```python
def kiem_tra_so(x):
    match x:
        case 10:
            print("Số là 10")
        case 20:
            print("Số là 20")
        case _:
            print("Không phải 10 hay 20")

kiem_tra_so(10)
kiem_tra_so(30)
```

---

## 2. Sử dụng `or` để so khớp nhiều giá trị

```python
def kiem_tra(x):
    match x:
        case 1 | 3 | 5:
            print("Là số lẻ đặc biệt")
        case _:
            print("Không khớp")

kiem_tra(3)
kiem_tra(4)
```

---

## 3. Kết hợp điều kiện `if` trong case

```python
def so_chan(x):
    match x:
        case n if n % 2 == 0:
            print("Là số chẵn")
        case _:
            print("Không phải số chẵn")

so_chan(4)
so_chan(5)
```

---

## 4. So khớp với danh sách hoặc tuple (sequence)

```python
def xu_ly_danh_sach(data):
    match data:
        case [a, b]:
            print(f"Hai phần tử: {a}, {b}")
        case [a, b, c]:
            print(f"Ba phần tử: {a}, {b}, {c}")
        case _:
            print("Dữ liệu không khớp")

xu_ly_danh_sach([1, 2])
xu_ly_danh_sach([1, 2, 3])
xu_ly_danh_sach([1, 2, 3, 4])
```

---

## 5. So khớp với từ điển (dictionary)

```python
def thong_tin_nguoi(nguoi):
    match nguoi:
        case {"ten": ten, "tuoi": tuoi}:
            print(f"Tên: {ten}, Tuổi: {tuoi}")
        case {"ten": ten}:
            print(f"Tên: {ten}")
        case _:
            print("Không rõ thông tin")

thong_tin_nguoi({"ten": "An", "tuoi": 20})
thong_tin_nguoi({"ten": "Bình"})
thong_tin_nguoi({"diachi": "HN"})
```

---

## 6. So khớp với lớp (class)

```python
class Hinh:
    pass

class Tron(Hinh):
    def __init__(self, ban_kinh):
        self.ban_kinh = ban_kinh

class ChuNhat(Hinh):
    def __init__(self, rong, dai):
        self.rong = rong
        self.dai = dai

def kiem_tra_hinh(hinh):
    match hinh:
        case Tron(ban_kinh):
            print(f"Hình tròn, bán kính: {ban_kinh}")
        case ChuNhat(rong, dai):
            print(f"Hình chữ nhật: {rong}x{dai}")
        case _:
            print("Không rõ loại hình")

kiem_tra_hinh(Tron(5))
kiem_tra_hinh(ChuNhat(3, 7))
```

---

## Kết luận

Câu lệnh `match case` giúp viết mã dễ đọc hơn, đặc biệt trong các trường hợp phức tạp với danh sách, từ điển hoặc đối tượng. Đây là một tính năng hiện đại, rất hữu ích trong các chương trình xử lý dữ liệu hoặc điều kiện phân nhánh.


