# Bài 8-2: Thuộc Tính và Phương Thức

## 1. Thuộc Tính Của Lớp

Trong thế giới của **Doraemon**, mỗi bảo bối đều có những **thuộc tính** đặc trưng, giúp phân biệt các bảo bối với nhau. Thuộc tính giống như các đặc điểm của mỗi bảo bối mà Doraemon sở hữu, ví dụ như màu sắc, kích thước hay tính năng.

Trong lập trình, **thuộc tính** là các giá trị đặc trưng của đối tượng, được khởi tạo thông qua phương thức `__init__` khi tạo đối tượng từ lớp.

## 2. Phương Thức Của Lớp

Ngoài thuộc tính, các bảo bối trong **Doraemon** còn có **phương thức**. Phương thức là các hành động mà bảo bối có thể thực hiện. Ví dụ, cánh cửa thần kỳ có phương thức **mở cửa** và **đóng cửa**, hay cái bật lửa tự động có phương thức **bật** và **tắt**.

Trong lập trình, **phương thức** là các hàm được định nghĩa bên trong lớp, giúp đối tượng thực hiện các hành động hoặc thay đổi các thuộc tính của chính nó.

## 3. Ví Dụ Về Lớp, Thuộc Tính và Phương Thức

Hãy cùng xem ví dụ về **Cánh Cửa Thần Kỳ** của Doraemon với các thuộc tính và phương thức.

```python
class CanhCuaThanKy:
    # Phương thức khởi tạo với các thuộc tính
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

Trong ví dụ này:
- **Thuộc tính**: `mau_sac` và `dia_diem` mô tả đặc điểm của cánh cửa.
- **Phương thức**: `mo_cua` và `dong_cua` mô tả hành động của cánh cửa.

## 4. Tạo Đối Tượng và Sử Dụng Thuộc Tính, Phương Thức

Khi tạo một đối tượng từ lớp **CanhCuaThanKy**, chúng ta sẽ gán giá trị cho các thuộc tính và có thể gọi các phương thức để thực hiện hành động.

```python
# Tạo đối tượng cửa thần kỳ
cua_than_ky = CanhCuaThanKy("xanh", "vương quốc vui vẻ")

# Sử dụng các phương thức của đối tượng
cua_than_ky.mo_cua()  # In ra: Mở cửa thần kỳ màu xanh đến vương quốc vui vẻ!
cua_than_ky.dong_cua()  # In ra: Đóng cửa thần kỳ màu xanh!
```

## 5. Sử Dụng Phương Thức Để Thay Đổi Thuộc Tính

Một phương thức không chỉ thực hiện hành động mà còn có thể thay đổi thuộc tính của đối tượng. Ví dụ, nếu Doraemon có một **Cánh Cửa Thần Kỳ Siêu Tốc**, cánh cửa này có thể thay đổi tốc độ của mình thông qua phương thức.

```python
class CanhCuaThanKySieuToc:
    def __init__(self, mau_sac, dia_diem, toc_do):
        self.mau_sac = mau_sac  # Thuộc tính màu sắc
        self.dia_diem = dia_diem  # Thuộc tính địa điểm
        self.toc_do = toc_do  # Thuộc tính tốc độ

    # Phương thức mở cửa
    def mo_cua(self):
        print(f"Mở cửa thần kỳ siêu tốc màu {self.mau_sac} đến {self.dia_diem} với tốc độ {self.toc_do}!")

    # Phương thức thay đổi tốc độ
    def thay_doi_toc_do(self, toc_do):
        self.toc_do = toc_do
        print(f"Tốc độ cánh cửa đã thay đổi thành {self.toc_do}!")
```

## 6. Bài Luyện Tập

### Bài Tập 1: Lớp "Máy Bơm Nước"
Tạo lớp `MayBomNuoc` có thuộc tính là **màu sắc**, **công suất** và phương thức để **bắt đầu bơm nước** và **dừng bơm nước**.

### Bài Tập 2: Lớp "Đèn Pin"
Tạo lớp `DenPin` có thuộc tính là **màu sắc**, **loại pin** và phương thức để **bật đèn** và **tắt đèn**.

---

## Tóm Tắt

- **Thuộc tính** là các đặc điểm của đối tượng, giống như các tính năng mà bảo bối của Doraemon có.
- **Phương thức** là các hành động mà đối tượng có thể thực hiện, giống như các tính năng đặc biệt mà mỗi bảo bối có thể làm.
- Bằng cách sử dụng **lớp** và **phương thức**, chúng ta có thể dễ dàng mô phỏng các bảo bối và hành động trong thế giới của Doraemon.

Hãy thử tạo lớp và phương thức cho các bảo bối khác của Doraemon và luyện tập!