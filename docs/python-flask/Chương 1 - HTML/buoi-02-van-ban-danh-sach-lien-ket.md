#  Buổi 2: Văn bản, danh sách và liên kết

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết dùng các thẻ tiêu đề `h1` đến `h6`.
- Biết dùng thẻ đoạn văn `p`.
- Biết dùng `strong`, `em`, `br`.
- Biết tạo danh sách không thứ tự và có thứ tự.
- Biết tạo liên kết bằng thẻ `a`.
- Biết dùng `target="_blank"`.

## 2. Kiến thức chính

Các thẻ học trong buổi này:

```html
<h1> đến <h6>
<p>
<br>
<strong>
<em>
<a>
<ul>
<ol>
<li>
```

## 3. Giải thích dễ hiểu

Website thường có nhiều loại nội dung:

- Tiêu đề.
- Đoạn văn.
- Danh sách.
- Liên kết.

HTML giúp trình bày các nội dung đó theo đúng ý nghĩa.

Ví dụ:

```html
<h1>Trang cá nhân của An</h1>
<p>Tôi đang học lập trình web.</p>
```

Danh sách không thứ tự:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Danh sách có thứ tự:

```html
<ol>
    <li>Học HTML</li>
    <li>Học CSS</li>
    <li>Học JavaScript</li>
</ol>
```

Liên kết:

```html
<a href="https://github.com" target="_blank">GitHub</a>
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML text list link tags example`

- Vị trí chèn:  
Sau phần giới thiệu các thẻ văn bản.

- Chú thích:  
HTML có nhiều thẻ để trình bày nội dung theo đúng ý nghĩa.

## 5. Ví dụ code

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giới thiệu bản thân</title>
</head>
<body>
    <h1>Nguyễn Văn An</h1>

    <h2>Giới thiệu</h2>
    <p>Tôi là học viên đang học lập trình web.</p>
    <p>Tôi thích <strong>công nghệ</strong> và <em>thiết kế website</em>.</p>

    <h2>Kỹ năng</h2>
    <ul>
        <li>HTML cơ bản</li>
        <li>Sử dụng VS Code</li>
        <li>Tạo trang web đơn giản</li>
    </ul>

    <h2>Mục tiêu học tập</h2>
    <ol>
        <li>Học HTML</li>
        <li>Học CSS</li>
        <li>Học JavaScript</li>
    </ol>

    <h2>Liên hệ</h2>
    <p>
        GitHub:
        <a href="https://github.com" target="_blank">Trang GitHub của tôi</a>
    </p>
</body>
</html>
```

## 6. Thực hành trên lớp

- Thêm phần giới thiệu bản thân.
- Thêm danh sách kỹ năng bằng `ul`.
- Thêm danh sách mục tiêu học tập bằng `ol`.
- Thêm ít nhất 2 liên kết.
- Kiểm tra liên kết có mở được không.

## 7. Lỗi thường gặp

### Lỗi 1: Quên href

Sai:

```html
<a>GitHub</a>
```

Đúng:

```html
<a href="https://github.com">GitHub</a>
```

### Lỗi 2: Viết danh sách thiếu li

Sai:

```html
<ul>
    HTML
    CSS
</ul>
```

Đúng:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

## 8. Bài tập về nhà

Cập nhật trang cá nhân có:

- Tên.
- Giới thiệu.
- Kỹ năng.
- Sở thích.
- Mục tiêu học tập.
- Ít nhất 2 liên kết: Facebook, GitHub hoặc email.

## 9. Checklist cuối buổi

- [ ] Em biết dùng `h1` đến `h6`.
- [ ] Em biết dùng `p`.
- [ ] Em biết dùng `strong`.
- [ ] Em biết dùng `em`.
- [ ] Em biết tạo danh sách `ul`.
- [ ] Em biết tạo danh sách `ol`.
- [ ] Em biết tạo liên kết `a`.
- [ ] Em biết dùng `target="_blank"`.

## 10. Kết quả cần đạt

Kết thúc buổi này, em có trang giới thiệu cá nhân có văn bản, danh sách và liên kết.
