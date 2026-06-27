# Buổi 5: Làm đẹp hình ảnh, liên kết và nút bấm

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết chỉnh kích thước hình ảnh.
- Biết bo tròn ảnh đại diện.
- Biết dùng `object-fit`.
- Biết làm đẹp liên kết.
- Biết tạo nút bấm bằng CSS.
- Biết dùng trạng thái `hover`.

## 2. Kiến thức chính

Các kiến thức chính:

```css
img
a
button
hover
border-radius
object-fit
cursor
text-decoration
```

Một số thuộc tính thường dùng:

```css
width
height
border-radius
object-fit
background-color
color
padding
text-decoration
cursor
```

## 3. Giải thích dễ hiểu

Website cá nhân thường có:

- Ảnh đại diện
- Liên kết mạng xã hội
- Nút liên hệ
- Nút xem dự án

Nếu để mặc định, hình ảnh và liên kết có thể chưa đẹp.

Ví dụ liên kết mặc định thường có màu xanh và gạch chân.

```html
<a href="#">Facebook của tôi</a>
```

CSS có thể giúp liên kết đẹp hơn:

```css
a {
    color: #2563eb;
    text-decoration: none;
}
```

### Làm đẹp ảnh đại diện

Ảnh đại diện thường nên có kích thước cố định và được bo tròn.

```css
.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}
```

Giải thích:

- `width`: chiều rộng ảnh
- `height`: chiều cao ảnh
- `object-fit: cover`: giúp ảnh không bị méo
- `border-radius: 50%`: biến ảnh thành hình tròn

### Làm đẹp liên kết

```css
a {
    color: #2563eb;
    text-decoration: none;
}
```

Bỏ gạch chân mặc định:

```css
text-decoration: none;
```

### Hover là gì?

Hover là trạng thái khi người dùng đưa chuột lên phần tử.

Ví dụ:

```css
a:hover {
    text-decoration: underline;
}
```

Khi đưa chuột lên liên kết, liên kết sẽ có gạch chân.

### Tạo nút bấm

Có thể dùng thẻ `<button>` hoặc thẻ `<a>` có class `btn`.

```html
<a href="#" class="btn">Liên hệ tôi</a>
```

CSS:

```css
.btn {
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
}
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`profile avatar button link css example`

- Vị trí chèn:  
Sau phần giải thích ảnh đại diện và nút bấm.

- Chú thích:  
Ảnh đại diện, liên kết và nút bấm giúp website cá nhân thân thiện và chuyên nghiệp hơn.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hình ảnh và nút bấm</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">

        <h1>Nguyễn Văn An</h1>
        <p>Tôi đang học lập trình web.</p>

        <p>
            <a href="https://github.com" target="_blank">GitHub của tôi</a>
        </p>

        <a href="mailto:email@example.com" class="btn">Liên hệ tôi</a>
    </div>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
    text-align: center;
}

.profile-card {
    background-color: white;
    width: 500px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 16px;
}

.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}

a {
    color: #2563eb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.btn {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 12px;
}

.btn:hover {
    background-color: #1e40af;
    text-decoration: none;
}
```

## 6. Thực hành trên lớp

### Bài 1: Thêm ảnh đại diện

HTML:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">
```

### Bài 2: Chỉnh kích thước ảnh

```css
.avatar {
    width: 160px;
    height: 160px;
}
```

### Bài 3: Bo tròn ảnh

```css
.avatar {
    border-radius: 50%;
}
```

### Bài 4: Chống méo ảnh

```css
.avatar {
    object-fit: cover;
}
```

### Bài 5: Làm đẹp liên kết

```css
a {
    color: #2563eb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

### Bài 6: Tạo nút bấm

HTML:

```html
<a href="#" class="btn">Xem dự án</a>
```

CSS:

```css
.btn {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Ảnh không hiện

Kiểm tra tên file ảnh.

Nếu HTML viết:

```html
<img src="avatar.jpg">
```

Thì file ảnh phải tên đúng là:

```text
avatar.jpg
```

### Lỗi 2: Ảnh bị méo

Nên thêm:

```css
object-fit: cover;
```

### Lỗi 3: Nút vẫn bị gạch chân

Nếu dùng thẻ `<a>` làm nút, cần thêm:

```css
text-decoration: none;
```

### Lỗi 4: Hover không chạy

Kiểm tra viết đúng cú pháp:

```css
.btn:hover {
    background-color: #1e40af;
}
```

Không có dấu cách giữa `.btn` và `:hover`.

## 8. Bài tập về nhà

Cập nhật website cá nhân với yêu cầu:

- Có ảnh đại diện.
- Ảnh đại diện được bo tròn.
- Có ít nhất 2 liên kết:
  - GitHub
  - Facebook
  - Email
- Có ít nhất 1 nút bấm dạng `.btn`.
- Có hiệu ứng hover cho liên kết hoặc nút.

Gợi ý:

```html
<a href="https://github.com" class="btn">GitHub</a>
<a href="mailto:email@example.com" class="btn">Email</a>
```

## 9. Checklist cuối buổi

- [ ] Em biết thêm ảnh vào HTML.
- [ ] Em biết chỉnh kích thước ảnh.
- [ ] Em biết bo tròn ảnh đại diện.
- [ ] Em biết dùng `object-fit`.
- [ ] Em biết làm đẹp liên kết.
- [ ] Em biết tạo nút bằng CSS.
- [ ] Em biết dùng `hover`.
- [ ] Em sửa được lỗi ảnh không hiển thị.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em cần có:

- Ảnh đại diện đẹp.
- Liên kết được làm đẹp.
- Nút bấm có màu nền.
- Có hiệu ứng khi đưa chuột lên nút hoặc liên kết.