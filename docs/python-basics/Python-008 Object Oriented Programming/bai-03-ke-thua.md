# Bài 8-3: Kế Thừa trong Hướng Đối Tượng Python

## 1. Khái Niệm Kế Thừa

Trong Python, **kế thừa** là một tính năng trong **lập trình hướng đối tượng** giúp chúng ta tái sử dụng mã nguồn và mở rộng các lớp (class) mà không cần phải viết lại mã. Điều này giống như khi Doraemon sử dụng bảo bối để giúp đỡ các bạn nhỏ mà không phải làm lại mọi thứ từ đầu!

Ví dụ: Doraemon có rất nhiều bảo bối, và những bảo bối này có thể kế thừa từ một bảo bối cơ bản. Khi cần thiết, Doraemon có thể thay đổi hoặc mở rộng tính năng của các bảo bối này để phù hợp với tình huống.

## 2. Cách Sử Dụng Kế Thừa trong Python

Để sử dụng kế thừa, bạn tạo một lớp con (subclass) và kế thừa thuộc tính cùng phương thức từ lớp cha (parent class). Ví dụ dưới đây chúng ta sẽ sử dụng Doraemon và các bảo bối của anh ấy.

### Ví Dụ: Bảo Bối Cơ Bản và Kế Thừa

```python
# Lớp cha: Bảo Bối cơ bản
class BaoBoi:
    def __init__(self, ten):
        self.ten = ten

    def su_dung(self):
        print(f"Bảo bối {self.ten} đang hoạt động!")

# Lớp con: Bảo Bối Cánh Cửa Thần Kỳ (kế thừa từ BaoBoi)
class CanhCuaThanKy(BaoBoi):
    def __init__(self, ten, khamPha):
        super().__init__(ten)  # Kế thừa từ lớp cha
        self.khamPha = khamPha

    def su_dung(self):
        print(f"Bảo bối {self.ten} giúp bạn khám phá {self.khamPha}!")

# Lớp con: Bảo Bối Tủ Đồ Di Động (kế thừa từ BaoBoi)
class TuDoDiDong(BaoBoi):
    def __init__(self, ten, chuaDo):
        super().__init__(ten)  # Kế thừa từ lớp cha
        self.chuaDo = chuaDo

    def su_dung(self):
        print(f"Bảo bối {self.ten} chứa {self.chuaDo} và rất tiện lợi!")

# Tạo các đối tượng từ lớp con
canh_cua = CanhCuaThanKy("Cánh cửa thần kỳ", "khám phá thế giới")
tu_do = TuDoDiDong("Tủ đồ di động", "đồ đạc của Doraemon")

canh_cua.su_dung()  # In ra: Bảo bối Cánh cửa thần kỳ giúp bạn khám phá thế giới!
tu_do.su_dung()     # In ra: Bảo bối Tủ đồ di động chứa đồ đạc của Doraemon và rất tiện lợi!
```

## 3. Sử Dụng `super()` để Gọi Phương Thức của Lớp Cha

Chúng ta đã sử dụng phương thức `super()` để gọi phương thức khởi tạo (`__init__`) của lớp cha. Điều này giúp lớp con có thể kế thừa các thuộc tính từ lớp cha mà không cần phải khai báo lại.

## 4. Bảo Bối Có Thể Thay Đổi Hành Vi

Một bảo bối có thể thay đổi hành vi của mình tùy vào cách chúng ta ghi đè phương thức trong lớp con. Ví dụ, phương thức `su_dung()` của bảo bối `CanhCuaThanKy` sẽ giúp người dùng khám phá những nơi thú vị, trong khi bảo bối `TuDoDiDong` giúp chứa đựng đồ đạc của Doraemon.

## 5. Kế Thừa Nhiều Lớp

Doraemon có rất nhiều bảo bối có thể kế thừa tính năng từ nhiều bảo bối khác nhau. Python hỗ trợ kế thừa từ nhiều lớp (đa kế thừa), giúp chúng ta linh hoạt hơn trong việc kết hợp các tính năng.

### Ví Dụ: Kế Thừa Nhiều Lớp

```python
class BaoBoi:
    def __init__(self, ten):
        self.ten = ten

    def su_dung(self):
        print(f"Bảo bối {self.ten} đang hoạt động!")

# Bảo Bối Di Chuyển
class BaoBoiDiChuyen:
    def di_chuyen(self):
        print("Bảo bối này giúp di chuyển rất nhanh!")

# Bảo Bối Tủ Đồ Di Động và Di Chuyển (kế thừa từ cả 2 lớp)
class TuDoDiDongDiChuyen(BaoBoi, BaoBoiDiChuyen):
    def __init__(self, ten, chuaDo):
        BaoBoi.__init__(self, ten)  # Gọi phương thức khởi tạo của lớp BaoBoi
        self.chuaDo = chuaDo

    def su_dung(self):
        print(f"Bảo bối {self.ten} chứa {self.chuaDo} và có thể di chuyển!")

# Tạo đối tượng của lớp TuDoDiDongDiChuyen
tu_do_di_chuyen = TuDoDiDongDiChuyen("Tủ đồ di động kiêm di chuyển", "đồ đạc của Doraemon")
tu_do_di_chuyen.su_dung()     # In ra: Bảo bối Tủ đồ di động kiêm di chuyển chứa đồ đạc của Doraemon và có thể di chuyển!
tu_do_di_chuyen.di_chuyen()   # In ra: Bảo bối này giúp di chuyển rất nhanh!
```

## 6. Phương Thức và Thuộc Tính Trong Kế Thừa

- **Sử dụng lại thuộc tính và phương thức**: Các bảo bối có thể kế thừa thuộc tính và phương thức từ lớp cha mà không cần phải định nghĩa lại.
- **Ghi đè phương thức**: Lớp con có thể thay đổi hành vi của phương thức lớp cha nếu cần thiết.

## 7. Lợi Ích của Kế Thừa

- **Tái sử dụng mã**: Bằng cách kế thừa, Doraemon không phải viết lại từng bảo bối một mà có thể tái sử dụng mã của các bảo bối đã có.
- **Mở rộng mã**: Doraemon có thể tạo ra các bảo bối mới và cải tiến các bảo bối cũ mà không cần phải thay đổi toàn bộ mã nguồn.
- **Dễ quản lý hơn**: Các bảo bối đều có một cấu trúc chung, dễ dàng quản lý và nâng cấp.

## 8. Bài Luyện Tập

### Bài Tập 1: Tạo Lớp Cha và Lớp Con
- Tạo lớp cha `BaoBoi` với thuộc tính `ten` và phương thức `su_dung()`.
- Tạo các lớp con như `CánhCuaThanKy`, `TuiTaoTao`, mỗi lớp con có phương thức riêng biệt.

### Bài Tập 2: Kế Thừa Nhiều Lớp
- Tạo các lớp cha `DiChuyen` và `LuuTru`, mỗi lớp có phương thức riêng.
- Tạo một lớp con `MayBay` kế thừa cả hai lớp và sử dụng các phương thức của chúng.

---

## Tóm Tắt

- **Kế thừa** giúp chúng ta dễ dàng tái sử dụng mã và tạo ra các bảo bối mới dựa trên các bảo bối đã có, giống như cách Doraemon có thể tạo ra các bảo bối khác nhau từ những bảo bối cơ bản.
- **Ghi đè phương thức** giúp chúng ta thay đổi hành vi của các bảo bối sao cho phù hợp với từng tình huống.
- **Kế thừa đa kế thừa** cho phép chúng ta kết hợp các tính năng của nhiều bảo bối vào một bảo bối mới.

Hãy thử áp dụng kế thừa vào các bảo bối trong thế giới của Doraemon để khám phá những điều thú vị nhé!