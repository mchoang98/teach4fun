# Bài 8-1 Lớp và hướng đối tượng

## 1. Khái Niệm Lớp và Hướng Đối Tượng

Trong thế giới của **Doraemon**, các nhân vật đều có những **bảo bối** đặc biệt, mỗi bảo bối này có những thuộc tính và hành vi riêng. Để dễ hiểu, chúng ta sẽ dùng khái niệm **lớp (Class)** và **đối tượng (Object)** để mô phỏng các bảo bối của Doraemon.

- **Lớp (Class)**: Là khuôn mẫu hoặc bản thiết kế cho một bảo bối. Lớp sẽ định nghĩa các thuộc tính và hành vi của bảo bối đó.
- **Đối tượng (Object)**: Là một thực thể của lớp, khi một bảo bối được chế tạo từ lớp đó.

## 2. Cấu Trúc Của Lớp

Cấu trúc của một lớp rất giống với cách mà Doraemon thiết kế các bảo bối. Chúng ta sẽ có:

1. **Khởi tạo**: Phương thức `__init__` giúp khởi tạo các thuộc tính cho bảo bối khi Doraemon lấy ra từ túi bảo bối của mình.
2. **Thuộc tính**: Các đặc điểm của bảo bối, ví dụ như màu sắc, tính năng.
3. **Phương thức**: Các hành động mà bảo bối có thể thực hiện, ví dụ như bật, tắt, hoặc thay đổi trạng thái.

## 3. Ví Dụ Về Lớp và Đối Tượng

Chúng ta sẽ bắt đầu với lớp **"Cánh Cửa Thần Kỳ"** - bảo bối nổi tiếng trong Doraemon. Cánh cửa này có các thuộc tính như **màu sắc** và **địa điểm đến**, và có phương thức **mở cửa** để giúp Nobita đi đến những địa điểm mới.

```python
class CanhCuaThanKy:
    # Phương thức khởi tạo
    def __init__(self, mau_sac, dia_diem):
        self.mau_sac = mau_sac  # Thuộc tính màu sắc
        self.dia_diem = dia_diem  # Thuộc tính địa điểm

    # Phương thức mở cửa
    def mo_cua(self):
        print(f"Mở cửa thần kỳ màu {self.mau_sac} đến {self.dia_diem}!")

    # Phương thức đóng cửa
    def dong_cua(self):
        print(f"Đóng cửa thần kỳ màu {self.mau_sac}!")
```

## 4. Cách Tạo Đối Tượng

Để tạo ra một **Cánh Cửa Thần Kỳ**, bạn cần phải gọi lớp **CanhCuaThanKy** và khởi tạo các thuộc tính cần thiết.

```python
# Tạo đối tượng cửa thần kỳ từ lớp CanhCuaThanKy
cua_than_ky = CanhCuaThanKy("xanh", "trường học")

# Gọi phương thức của đối tượng cửa thần kỳ
cua_than_ky.mo_cua()  # In ra: Mở cửa thần kỳ màu xanh đến trường học!
cua_than_ky.dong_cua()  # In ra: Đóng cửa thần kỳ màu xanh!
```

## 5. Kế Thừa (Inheritance)

Doraemon có rất nhiều bảo bối khác nhau, mỗi bảo bối có thể kế thừa những thuộc tính và phương thức chung từ lớp cơ bản, rồi thêm vào các đặc điểm riêng biệt của mình. Ví dụ, chúng ta sẽ tạo một lớp mới là **Cánh Cửa Thần Kỳ Siêu Tốc**, kế thừa từ lớp **CanhCuaThanKy** và thêm thuộc tính **tốc độ**.

```python
class CanhCuaThanKySieuToc(CanhCuaThanKy):
    def __init__(self, mau_sac, dia_diem, toc_do):
        super().__init__(mau_sac, dia_diem)  # Kế thừa thuộc tính từ lớp CanhCuaThanKy
        self.toc_do = toc_do  # Thuộc tính tốc độ riêng của cánh cửa siêu tốc

    # Phương thức thay đổi tốc độ
    def thay_doi_toc_do(self, toc_do):
        self.toc_do = toc_do
        print(f"Tốc độ cánh cửa đã thay đổi thành {self.toc_do}!")
```

```python
# Tạo đối tượng cửa thần kỳ siêu tốc từ lớp CanhCuaThanKySieuToc
cua_sieu_toc = CanhCuaThanKySieuToc("vàng", "vương quốc hạnh phúc", "nhanh nhất thế giới")

# Gọi phương thức từ lớp cha và lớp con
cua_sieu_toc.mo_cua()  # In ra: Mở cửa thần kỳ màu vàng đến vương quốc hạnh phúc!
cua_sieu_toc.thay_doi_toc_do("siêu nhanh")  # In ra: Tốc độ cánh cửa đã thay đổi thành siêu nhanh!
```

## 6. Bài Luyện Tập

## Bài Tập 1: Lớp "Máy bay mini"
Hãy tạo một lớp `MayBayMini` có thuộc tính là màu sắc và tốc độ. Máy bay có phương thức để **bay** và **hạ cánh**.

## Bài Tập 2: Lớp "Túi bảo bối"
Tạo lớp `TuiBaoBoi` với thuộc tính là số lượng bảo bối và phương thức để **thêm bảo bối** và **hiển thị các bảo bối**.

---

## Tóm Tắt

- **Lớp (Class)** là khuôn mẫu để tạo ra đối tượng, giống như cách Doraemon tạo các bảo bối.
- **Đối tượng (Object)** là một thực thể của lớp, mang các thuộc tính và hành vi riêng.
- **Kế thừa** giúp bạn tạo ra các lớp con có thể sử dụng lại mã nguồn của lớp cha và thêm các tính năng mới.

Hãy thử tạo các lớp bảo bối của riêng bạn và luyện tập!