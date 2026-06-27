# Buổi 7: Responsive cơ bản

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu responsive là gì.
- Biết dùng `max-width`.
- Biết dùng `width: 100%`.
- Biết dùng `img { max-width: 100%; }`.
- Biết viết media query cơ bản.
- Biết chuyển layout hàng thành cột trên màn hình nhỏ.
- Biết kiểm tra website trên chế độ điện thoại.

## 2. Kiến thức chính

Các kiến thức chính:

```css
responsive
max-width
width: 100%
media query
@media
```

Ví dụ media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

## 3. Giải thích dễ hiểu

Website không chỉ xem trên máy tính. Người dùng còn xem trên điện thoại, máy tính bảng và nhiều kích thước màn hình khác nhau.

Responsive nghĩa là website tự điều chỉnh giao diện để phù hợp với từng màn hình.

Ví dụ trên máy tính:

```text
[Card 1] [Card 2] [Card 3]
```

Trên điện thoại:

```text
[Card 1]
[Card 2]
[Card 3]
```

Nếu không responsive, website có thể bị:

- Chữ quá nhỏ
- Card bị tràn ngang
- Ảnh quá lớn
- Người dùng phải kéo ngang để xem

### max-width

`max-width` giúp nội dung không bị quá rộng trên màn hình lớn.

```css
.container {
    max-width: 960px;
    margin: 0 auto;
}
```

### width: 100%

Giúp phần tử chiếm toàn bộ chiều rộng có thể dùng được.

```css
img {
    max-width: 100%;
}
```

### Media query

Media query cho phép viết CSS riêng cho từng kích thước màn hình.

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

Đoạn CSS trên có nghĩa là:

Khi màn hình nhỏ hơn hoặc bằng 768px, tiêu đề `h1` sẽ có cỡ chữ 28px.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`responsive web design desktop mobile layout`

- Vị trí chèn:  
Sau phần giải thích responsive là gì.

- Chú thích:  
Responsive giúp website hiển thị tốt trên cả máy tính và điện thoại.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Responsive cơ bản</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Portfolio cá nhân</h1>

        <div class="card-row">
            <div class="card">
                <h2>Giới thiệu</h2>
                <p>Tôi đang học lập trình web.</p>
            </div>

            <div class="card">
                <h2>Kỹ năng</h2>
                <p>Tôi biết HTML và CSS cơ bản.</p>
            </div>

            <div class="card">
                <h2>Mục tiêu</h2>
                <p>Tôi muốn tạo website cá nhân đẹp.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

File `style.css`:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2563eb;
    text-align: center;
    font-size: 36px;
}

.card-row {
    display: flex;
    gap: 20px;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    width: 100%;
}

img {
    max-width: 100%;
}

@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }

    h1 {
        font-size: 28px;
    }
}
```

## 6. Thực hành trên lớp

### Bài 1: Thêm container

HTML:

```html
<div class="container">
    Nội dung website ở đây
</div>
```

CSS:

```css
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}
```

### Bài 2: Chống tràn ảnh

```css
img {
    max-width: 100%;
}
```

### Bài 3: Viết media query

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

### Bài 4: Chuyển card từ hàng sang cột

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Bài 5: Kiểm tra bằng DevTools

Mở trình duyệt Chrome.

Bấm chuột phải vào trang web.

Chọn:

```text
Inspect / Kiểm tra
```

Bật chế độ điện thoại và kiểm tra giao diện.

## 7. Lỗi thường gặp

### Lỗi 1: Website bị tràn ngang

Nên thêm:

```css
* {
    box-sizing: border-box;
}
```

Và kiểm tra lại width của các phần tử.

### Lỗi 2: Ảnh quá lớn

Nên thêm:

```css
img {
    max-width: 100%;
}
```

### Lỗi 3: Quên dấu ngoặc trong media query

Sai:

```css
@media max-width: 768px {
    h1 {
        font-size: 28px;
    }
}
```

Đúng:

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

### Lỗi 4: Card vẫn nằm ngang trên điện thoại

Kiểm tra đã viết đúng chưa:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

## 8. Bài tập về nhà

Chỉnh website cá nhân để xem tốt trên điện thoại.

Yêu cầu:

- Có `.container`.
- Có `max-width`.
- Có `padding`.
- Ảnh không bị tràn.
- Card không bị tràn ngang.
- Trên điện thoại, card chuyển thành dạng cột.
- Tiêu đề nhỏ hơn trên màn hình nhỏ.

## 9. Checklist cuối buổi

- [ ] Em hiểu responsive là gì.
- [ ] Em biết dùng `.container`.
- [ ] Em biết dùng `max-width`.
- [ ] Em biết dùng `img { max-width: 100%; }`.
- [ ] Em biết viết `@media`.
- [ ] Em biết đổi layout trên màn hình nhỏ.
- [ ] Em kiểm tra được giao diện bằng DevTools.
- [ ] Website của em không bị tràn ngang trên điện thoại.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em cần xem tốt trên cả máy tính và điện thoại.

Sản phẩm cần đạt:

- Giao diện không bị tràn ngang.
- Chữ dễ đọc trên điện thoại.
- Card tự chuyển từ hàng sang cột.
- Ảnh co giãn phù hợp.