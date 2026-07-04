# Quản lý module

## Khung học vui

**Bối cảnh:** Dự án bắt đầu lớn hơn một file. Bạn cần chia code thành các module giống như chia nhóm trong lớp: mỗi nhóm phụ trách một việc rõ ràng.

**Thử ngay trong 5 phút:** Tạo hai file: `main.py` gọi một hàm từ file module riêng như `tools.py` hoặc `score_utils.py`.

**Hoạt động cặp đôi:** Một bạn thiết kế tên module, một bạn quyết định hàm nào nên đặt trong module đó.

**Nâng cấp sau giờ học:** Tách game đoán số thành `main.py`, `game.py`, `messages.py` để luyện import và tổ chức dự án.

> Gợi ý học nhanh: chạy code sớm, sửa từng lỗi nhỏ, đổi dữ liệu đầu vào ít nhất 3 lần. Đây là cách biến cú pháp khô thành trải nghiệm có phản hồi ngay.

---
## 1. **Quản lý học sinh (dùng list + module tự viết)**

* Viết module `student.py` chứa các hàm:

  * `add_student(danh_sach, ten, tuoi, diem)` → thêm học sinh.
  * `show_students(danh_sach)` → in ra danh sách.
  * `average_score(danh_sach)` → tính điểm trung bình.
* File chính `main.py`:

  * Nhập dữ liệu vài học sinh.
  * Gọi hàm trong module để in danh sách + tính điểm TB.

---

## 2. **Quản lý thư viện (dùng dictionary + module)**

* Viết module `library.py` với các hàm:

  * `add_book(thuvien, ten, tacgia)` → thêm sách.
  * `search_book(thuvien, keyword)` → tìm sách theo tên.
* File chính:

  * Tạo danh sách sách (dùng dict).
  * Cho nhập tên sách để tìm.

---

## 3. **Game đoán số (dùng `random` built-in)**

* Import `random`.
* Máy sinh số từ 1–50.
* Người chơi nhập số, báo **“cao hơn / thấp hơn / đúng”**.
* Giới hạn 5 lần đoán.

---

## 4. **Công cụ chuyển đổi đơn vị (dùng `math`)**

* Viết module `converter.py` với các hàm:

  * `cm_to_m(x)`
  * `m_to_km(x)`
  * `c_to_f(c)`
* File chính:

  * Nhập giá trị, gọi hàm để chuyển đổi.

---

## 5. **Phân tích dữ liệu đơn giản (dùng `statistics`)**

* Nhập một list số (vd: điểm kiểm tra).
* Dùng module `statistics`:

  * `mean()`, `median()`, `stdev()`.
* In kết quả: trung bình, trung vị, độ lệch chuẩn.

---

## 6. **Kiểm tra mật khẩu an toàn (dùng `string` + module tự viết)**

* Viết module `password.py`:

  * Hàm `check_password(pw)` kiểm tra:

    * ≥ 8 ký tự.
    * Có chữ hoa, chữ thường, số, ký tự đặc biệt.
* File chính:

  * Nhập mật khẩu từ bàn phím.
  * In ra “Yếu / Trung bình / Mạnh”.

---
---

## Tự luyện tại lớp: nâng cấp bài vừa học

Các bài dưới đây dùng để luyện ngay trong lớp. Không cần làm giống hệt ví dụ trong bài giảng; hãy đổi bối cảnh, đổi dữ liệu và thêm một luật nhỏ của riêng bạn.

1. Chạy lại ví dụ chính, sau đó thay dữ liệu bằng tình huống trong lớp của bạn.
2. Thêm ít nhất một `input()` để chương trình nhận dữ liệu từ người dùng.
3. In kết quả thành câu hoàn chỉnh, dễ hiểu với người chưa biết code.
4. Thử một trường hợp dễ sai và ghi lại chương trình xử lý ra sao.
5. Nâng cấp thêm một luật mới: giảm giá, giới hạn lượt, xếp loại, lọc dữ liệu hoặc cảnh báo lỗi.

**Mức đạt:** chương trình chạy được, có 3 bộ dữ liệu thử, tên biến rõ nghĩa và bạn giải thích được input, xử lý, output bằng lời của mình.
