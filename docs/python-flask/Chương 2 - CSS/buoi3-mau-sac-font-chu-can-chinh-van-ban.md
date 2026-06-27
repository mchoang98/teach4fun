# Buổi 3: Màu sắc, font chữ và căn chỉnh văn bản

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết đổi màu chữ.
- Biết đổi màu nền.
- Biết chỉnh cỡ chữ.
- Biết chỉnh font chữ.
- Biết chỉnh độ đậm của chữ.
- Biết căn trái, căn phải, căn giữa văn bản.
- Biết chỉnh khoảng cách dòng bằng `line-height`.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
color
background-color
font-size
font-family
font-weight
text-align
line-height
```

Ví dụ:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #222222;
}
```

## 3. Giải thích dễ hiểu

Một website không chỉ cần có nội dung đúng mà còn cần dễ đọc.

Nếu chữ quá nhỏ, người xem sẽ khó đọc.

Nếu màu chữ và màu nền quá giống nhau, người xem sẽ bị mỏi mắt.

Nếu các dòng chữ quá sát nhau, đoạn văn sẽ khó theo dõi.

CSS giúp em chỉnh phần chữ để website rõ ràng và đẹp hơn.

### Màu sắc trong CSS

Có thể dùng tên màu:

```css
h1 {
    color: blue;
}
```

Hoặc dùng mã màu:

```css
h1 {
    color: #2563eb;
}
```

Một số mã màu gợi ý:

```text
#2563eb : xanh dương
#1f2937 : xám đậm
#f5f7fb : nền xám rất nhạt
#d97706 : cam nhấn
#ffffff : trắng
```

### Font chữ

Font chữ ảnh hưởng đến cảm giác chuyên nghiệp của website.

```css
body {
    font-family: Arial, sans-serif;
}
```

### Cỡ chữ

```css
p {
    font-size: 18px;
}
```

### Độ đậm của chữ

```css
.highlight {
    font-weight: bold;
}
```

### Căn chỉnh văn bản

```css
h1 {
    text-align: center;
}
```

Một số giá trị thường dùng:

```text
left    : căn trái
right   : căn phải
center  : căn giữa
```

### Khoảng cách dòng

```css
p {
    line-height: 1.6;
}
```

`line-height` giúp đoạn văn dễ đọc hơn.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`web typography font size line height example`

- Vị trí chèn:  
Sau phần giải thích `font-size` và `line-height`.

- Chú thích:  
Cỡ chữ, font chữ và khoảng cách dòng ảnh hưởng trực tiếp đến khả năng đọc nội dung.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Màu sắc và chữ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Giới thiệu bản thân</h1>

    <p>
        Xin chào, tôi là An. Tôi đang học lập trình web và muốn tự tạo website cá nhân.
    </p>

    <p>
        Tôi thích học HTML, CSS và tạo ra những sản phẩm có thể chia sẻ với mọi người.
    </p>

    <p class="highlight">
        Mục tiêu của tôi là hoàn thành một portfolio cá nhân thật đẹp.
    </p>
</body>
</html>
```

File `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #222222;
}

h1 {
    color: #1d4ed8;
    text-align: center;
    font-size: 36px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

.highlight {
    color: #d97706;
    font-weight: bold;
}
```

## 6. Thực hành trên lớp

### Bài 1: Đổi font toàn trang

```css
body {
    font-family: Arial, sans-serif;
}
```

### Bài 2: Đổi màu nền và màu chữ

```css
body {
    background-color: #f5f7fb;
    color: #222222;
}
```

### Bài 3: Căn giữa tiêu đề

```css
h1 {
    text-align: center;
}
```

### Bài 4: Tăng cỡ chữ đoạn văn

```css
p {
    font-size: 18px;
}
```

### Bài 5: Chỉnh khoảng cách dòng

```css
p {
    line-height: 1.6;
}
```

### Bài 6: Tạo câu nhấn mạnh

HTML:

```html
<p class="highlight">Tôi rất thích lập trình web.</p>
```

CSS:

```css
.highlight {
    color: #d97706;
    font-weight: bold;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Màu chữ quá khó đọc

Không nên:

```css
body {
    background-color: white;
    color: yellow;
}
```

Nên dùng:

```css
body {
    background-color: #f5f7fb;
    color: #222222;
}
```

### Lỗi 2: Chữ quá nhỏ

Không nên:

```css
p {
    font-size: 10px;
}
```

Nên dùng:

```css
p {
    font-size: 16px;
}
```

hoặc:

```css
p {
    font-size: 18px;
}
```

### Lỗi 3: Quên đơn vị px

Sai:

```css
h1 {
    font-size: 36;
}
```

Đúng:

```css
h1 {
    font-size: 36px;
}
```

### Lỗi 4: Gõ sai tên thuộc tính

Sai:

```css
font-szie: 18px;
```

Đúng:

```css
font-size: 18px;
```

## 8. Bài tập về nhà

Cập nhật trang giới thiệu bản thân với yêu cầu:

- Toàn trang dùng font Arial.
- Nền trang màu sáng.
- Tiêu đề chính căn giữa.
- Tiêu đề chính có màu xanh.
- Đoạn văn có cỡ chữ dễ đọc.
- Có ít nhất một câu dùng class `highlight`.
- Có `line-height` cho đoạn văn.

## 9. Checklist cuối buổi

- [ ] Em biết dùng `color`.
- [ ] Em biết dùng `background-color`.
- [ ] Em biết dùng `font-size`.
- [ ] Em biết dùng `font-family`.
- [ ] Em biết dùng `font-weight`.
- [ ] Em biết căn chữ bằng `text-align`.
- [ ] Em biết chỉnh khoảng cách dòng bằng `line-height`.
- [ ] Em biết tạo class nhấn mạnh nội dung.

## 10. Kết quả cần đạt

Kết thúc buổi này, trang giới thiệu của em cần dễ đọc hơn, có màu sắc rõ ràng và chữ được căn chỉnh hợp lý.

Sản phẩm cần có:

- Font chữ thống nhất.
- Màu nền dễ nhìn.
- Tiêu đề nổi bật.
- Đoạn văn dễ đọc.
- Có ít nhất một nội dung được nhấn mạnh.