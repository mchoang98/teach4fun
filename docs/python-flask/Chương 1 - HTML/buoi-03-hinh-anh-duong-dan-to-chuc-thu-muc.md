# Bài giảng Buổi 3: Hình ảnh, đường dẫn và tổ chức thư mục

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết thêm hình ảnh vào trang HTML.
- Biết dùng `src`, `alt`, `width`.
- Biết tổ chức thư mục website.
- Biết dùng đường dẫn tương đối.
- Biết tạo website nhiều trang HTML.
- Biết liên kết giữa các trang.

## 2. Kiến thức chính

Thẻ hình ảnh:

```html
<img src="images/avatar.jpg" alt="Ảnh đại diện" width="200">
```

Các thuộc tính:

```text
src   : đường dẫn ảnh
alt   : mô tả ảnh
width : chiều rộng ảnh
```

Cấu trúc thư mục:

```text
portfolio-html
├── index.html
├── about.html
├── contact.html
└── images
    └── avatar.jpg
```

## 3. Giải thích dễ hiểu

Ảnh giúp trang web sinh động hơn.

Nếu ảnh nằm cùng thư mục với file HTML:

```html
<img src="avatar.jpg" alt="Ảnh đại diện">
```

Nếu ảnh nằm trong thư mục `images`:

```html
<img src="images/avatar.jpg" alt="Ảnh đại diện">
```

Đường dẫn đúng rất quan trọng. Nếu sai đường dẫn, ảnh sẽ không hiển thị.

Website có thể có nhiều trang:

```html
<a href="about.html">Giới thiệu</a>
<a href="contact.html">Liên hệ</a>
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML relative path images folder example`

- Vị trí chèn:  
Sau phần cấu trúc thư mục.

- Chú thích:  
Đường dẫn giúp HTML tìm đúng file ảnh hoặc file trang khác.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio cá nhân</title>
</head>
<body>
    <h1>Nguyễn Văn An</h1>

    <nav>
        <a href="index.html">Trang chủ</a>
        <a href="about.html">Giới thiệu</a>
        <a href="contact.html">Liên hệ</a>
    </nav>

    <img src="images/avatar.jpg" alt="Ảnh đại diện của An" width="200">

    <p>Xin chào, tôi đang học HTML.</p>
</body>
</html>
```

File `about.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giới thiệu</title>
</head>
<body>
    <h1>Giới thiệu</h1>
    <a href="index.html">Quay lại trang chủ</a>
    <p>Tôi là học viên mới học lập trình web.</p>
</body>
</html>
```

## 6. Thực hành trên lớp

- Tạo thư mục `images`.
- Thêm ảnh `avatar.jpg` vào thư mục `images`.
- Thêm ảnh vào `index.html`.
- Tạo thêm `about.html`.
- Tạo thêm `contact.html`.
- Tạo menu liên kết giữa các trang.

## 7. Lỗi thường gặp

### Lỗi 1: Sai tên ảnh

Nếu file tên là:

```text
avatar.jpg
```

Không viết:

```html
<img src="images/avartar.jpg">
```

### Lỗi 2: Sai thư mục

Nếu ảnh nằm trong `images`, cần viết:

```html
<img src="images/avatar.jpg">
```

### Lỗi 3: Thiếu alt

Nên luôn có:

```html
alt="Ảnh đại diện"
```

## 8. Bài tập về nhà

Tạo website nhiều trang gồm:

```text
index.html
about.html
contact.html
images/avatar.jpg
```

Yêu cầu:

- Có menu ở cả 3 trang.
- Trang chủ có ảnh đại diện.
- Trang giới thiệu có mô tả bản thân.
- Trang liên hệ có email hoặc mạng xã hội.

## 9. Checklist cuối buổi

- [ ] Em biết dùng thẻ `img`.
- [ ] Em biết dùng `src`.
- [ ] Em biết dùng `alt`.
- [ ] Em biết dùng thư mục `images`.
- [ ] Em biết đường dẫn tương đối.
- [ ] Em tạo được nhiều trang HTML.
- [ ] Em liên kết được giữa các trang.

## 10. Kết quả cần đạt

Kết thúc buổi này, em có website nhiều trang có ảnh và liên kết nội bộ.
