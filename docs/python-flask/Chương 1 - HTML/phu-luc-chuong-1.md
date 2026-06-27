# Phụ lục Chương 1: HTML cơ bản

## 1. Bảng thẻ HTML nhanh

| Thẻ | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `html` | Gốc tài liệu HTML | `<html lang="vi">` |
| `head` | Thông tin của trang | `<head>...</head>` |
| `body` | Nội dung hiển thị | `<body>...</body>` |
| `title` | Tiêu đề tab trình duyệt | `<title>Trang chủ</title>` |
| `h1` | Tiêu đề chính | `<h1>Xin chào</h1>` |
| `p` | Đoạn văn | `<p>Nội dung</p>` |
| `a` | Liên kết | `<a href="#">Link</a>` |
| `img` | Hình ảnh | `<img src="avatar.jpg" alt="Ảnh">` |
| `ul` | Danh sách không thứ tự | `<ul>...</ul>` |
| `ol` | Danh sách có thứ tự | `<ol>...</ol>` |
| `li` | Mục trong danh sách | `<li>HTML</li>` |
| `header` | Phần đầu trang | `<header>...</header>` |
| `nav` | Menu điều hướng | `<nav>...</nav>` |
| `main` | Nội dung chính | `<main>...</main>` |
| `section` | Khu vực nội dung | `<section>...</section>` |
| `footer` | Phần cuối trang | `<footer>...</footer>` |
| `form` | Biểu mẫu | `<form>...</form>` |
| `input` | Ô nhập liệu | `<input type="text">` |
| `textarea` | Ô nhập nhiều dòng | `<textarea></textarea>` |
| `select` | Danh sách chọn | `<select>...</select>` |
| `table` | Bảng | `<table>...</table>` |
| `iframe` | Nhúng nội dung | `<iframe src="..."></iframe>` |

## 2. Lỗi HTML thường gặp

### Quên đóng thẻ

Sai:

```html
<p>Xin chào
```

Đúng:

```html
<p>Xin chào</p>
```

### Sai đường dẫn ảnh

Sai:

```html
<img src="avatar.jpg">
```

Trong khi ảnh nằm trong `images`.

Đúng:

```html
<img src="images/avatar.jpg">
```

### Thiếu alt cho ảnh

Nên viết:

```html
<img src="images/avatar.jpg" alt="Ảnh đại diện">
```

### Link thiếu href

Sai:

```html
<a>Facebook</a>
```

Đúng:

```html
<a href="https://facebook.com">Facebook</a>
```

### Form input thiếu name

Sai:

```html
<input type="text">
```

Đúng:

```html
<input type="text" name="full_name">
```

## 3. Cấu trúc HTML chuẩn nên nhớ

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề trang</title>
</head>
<body>
    Nội dung trang web
</body>
</html>
```
