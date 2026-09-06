# Bài 1 – Điều phối đội hình sự kiện

## Yêu cầu

Ban tổ chức một sự kiện đang lưu thứ tự đăng ký của các đội tham gia:

```python
doi_hinh = [
    "Trống hội",
    "Thiếu nhi",
    "Văn nghệ",
    "Thanh niên",
    "Thiếu nhi",
    "Hậu cần"
]
```

Trước khi chương trình bắt đầu, danh sách cần được xử lý theo các quy tắc sau:

* `"Hậu cần"` chỉ hỗ trợ phía sau sân khấu nên không xuất hiện trong đội hình biểu diễn.
* Do nhập dữ liệu hai lần, `"Thiếu nhi"` đang bị trùng. Trong danh sách cuối cùng chỉ được giữ lại một lần xuất hiện.
* `"Cờ Tổ quốc"` phải đứng ở vị trí đầu tiên.
* `"Trống hội"` phải đứng ngay sau `"Cờ Tổ quốc"`.
* Các đội còn lại giữ nguyên thứ tự tương đối như trong danh sách ban đầu.
* Sau khi xử lý, cần tạo một chuỗi dùng cho bảng điện tử. Tên các đội được nối bằng:

```text
 -> 
```

Ngoài ra, chương trình phải cho biết tổng số đội thực sự tham gia biểu diễn.

## Dữ liệu cho trước

```python
doi_hinh = [
    "Trống hội",
    "Thiếu nhi",
    "Văn nghệ",
    "Thanh niên",
    "Thiếu nhi",
    "Hậu cần"
]
```

Không sử dụng `input()`.

## Kết quả mong đợi

Danh sách sau khi xử lý:

```text
['Cờ Tổ quốc', 'Trống hội', 'Thiếu nhi', 'Văn nghệ', 'Thanh niên']
```

Tổng số đội:

```text
5
```

Chuỗi hiển thị trên bảng điện tử:

```text
Cờ Tổ quốc -> Trống hội -> Thiếu nhi -> Văn nghệ -> Thanh niên
```

## Yêu cầu kỹ thuật

* Chương trình phải có một hàm nhận danh sách ban đầu và trả về danh sách đội hình sau khi xử lý.
* Chương trình phải xử lý được phần tử bị trùng, không được chỉ viết lại danh sách kết quả bằng tay.
* Chương trình phải có một hàm riêng để tạo nội dung cho bảng điện tử.
* Danh sách ban đầu không được chứa `"Hậu cần"` trong kết quả cuối cùng.
* Trong kết quả cuối cùng, mỗi đội chỉ xuất hiện một lần.
* Không sử dụng `input()`.
* Người học tự lựa chọn cách thêm, xóa, kiểm tra và sắp xếp vị trí các phần tử.

## Ví dụ Input

```text
["Trống hội", "Thiếu nhi", "Văn nghệ", "Thanh niên", "Thiếu nhi", "Hậu cần"]
```

## Ví dụ Output

```text
['Cờ Tổ quốc', 'Trống hội', 'Thiếu nhi', 'Văn nghệ', 'Thanh niên']
5
Cờ Tổ quốc -> Trống hội -> Thiếu nhi -> Văn nghệ -> Thanh niên
```
