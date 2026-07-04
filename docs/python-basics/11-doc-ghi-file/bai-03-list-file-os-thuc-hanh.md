# Thực hành bài 11-3: Làm việc với thư mục và module os

## Bài 1: Liệt kê file Markdown

### Mô tả

Nhập đường dẫn thư mục. Dùng `os.listdir()` để đếm số file có đuôi `.md` trong thư mục đó.

### Input

* Một dòng đường dẫn thư mục.

### Output

```text
Markdown files: <count>
```

### Ràng buộc

* Nếu thư mục không tồn tại, in `NOT FOUND`.

### Ví dụ

Input:

```text
docs/python-basics
```

Output mẫu:

```text
Markdown files: 1
```

---

## Bài 2: Tìm file theo từ khóa

### Mô tả

Nhập đường dẫn thư mục và từ khóa. In tên các file trong thư mục có chứa từ khóa trong tên file.

### Input

* Dòng 1: đường dẫn thư mục.
* Dòng 2: từ khóa.

### Output

Các tên file tìm thấy, mỗi file một dòng; nếu không có in `NONE`.

### Ràng buộc

* Chỉ cần tìm trong thư mục hiện tại, chưa cần đệ quy.

