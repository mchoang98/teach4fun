# Buổi 4: Box Model - margin, padding, border

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu mỗi phần tử HTML giống như một chiếc hộp.
- Phân biệt được:
  - Content
  - Padding
  - Border
  - Margin
- Biết dùng `padding` để tạo khoảng cách bên trong.
- Biết dùng `margin` để tạo khoảng cách bên ngoài.
- Biết dùng `border` để tạo viền.
- Biết dùng `border-radius` để bo góc.
- Tạo được card giới thiệu bản thân.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
width
margin
padding
border
border-radius
background-color
```

Mô hình Box Model:

```text
margin
  border
    padding
      content
```

## 3. Giải thích dễ hiểu

Trong CSS, mỗi phần tử HTML có thể xem như một chiếc hộp.

Ví dụ:

```html
<div class="profile-card">
    <h1>Xin chào</h1>
    <p>Tôi đang học CSS.</p>
</div>
```

Phần `div` này là một chiếc hộp chứa tiêu đề và đoạn văn.

Một chiếc hộp gồm 4 phần chính:

```text
Content : nội dung bên trong
Padding : khoảng cách từ nội dung đến viền
Border  : đường viền của hộp
Margin  : khoảng cách từ hộp này đến hộp khác
```

### Content

Là phần nội dung thật, ví dụ chữ, ảnh, nút bấm.

### Padding

Padding là khoảng cách bên trong hộp.

Nếu không có padding, chữ sẽ sát vào viền hộp và nhìn rất chật.

```css
.card {
    padding: 20px;
}
```

### Border

Border là viền của hộp.

```css
.card {
    border: 1px solid #dddddd;
}
```

### Margin

Margin là khoảng cách bên ngoài hộp.

```css
.card {
    margin: 20px;
}
```

### Border radius

`border-radius` dùng để bo góc hộp.

```css
.card {
    border-radius: 16px;
}
```

Bo góc giúp giao diện mềm mại và hiện đại hơn.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS box model diagram`

- Vị trí chèn:  
Ngay sau phần giới thiệu Box Model.

- Chú thích:  
Box Model gồm content, padding, border và margin. Đây là kiến thức rất quan trọng khi căn chỉnh khoảng cách trong CSS.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Box Model</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <h1>Nguyễn Văn An</h1>
        <p>Tôi là học viên mới học lập trình web.</p>
        <p>Tôi đang học HTML và CSS để tạo website cá nhân.</p>
    </div>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

.profile-card {
    background-color: white;
    width: 500px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 16px;
}

.profile-card h1 {
    margin-top: 0;
    color: #2563eb;
}

.profile-card p {
    margin-bottom: 12px;
    line-height: 1.6;
}
```

Giải thích:

```css
width: 500px;
```

Card rộng 500px.

```css
margin: 40px auto;
```

Card cách phía trên 40px và được căn giữa theo chiều ngang.

```css
padding: 24px;
```

Nội dung bên trong cách viền 24px.

```css
border: 1px solid #dddddd;
```

Card có viền mỏng màu xám nhạt.

```css
border-radius: 16px;
```

Card được bo góc.

## 6. Thực hành trên lớp

### Bài 1: Tạo card

HTML:

```html
<div class="profile-card">
    <h1>Thông tin cá nhân</h1>
    <p>Tên: An</p>
    <p>Sở thích: Lập trình web</p>
</div>
```

### Bài 2: Thêm nền trắng cho card

```css
.profile-card {
    background-color: white;
}
```

### Bài 3: Thêm padding

```css
.profile-card {
    padding: 24px;
}
```

### Bài 4: Thêm border

```css
.profile-card {
    border: 1px solid #dddddd;
}
```

### Bài 5: Bo góc card

```css
.profile-card {
    border-radius: 16px;
}
```

### Bài 6: Căn card ra giữa

```css
.profile-card {
    width: 500px;
    margin: 40px auto;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Card quá sát mép màn hình

Nếu không có margin hoặc padding, giao diện sẽ bị chật.

Nên thêm:

```css
.profile-card {
    margin: 40px auto;
    padding: 24px;
}
```

### Lỗi 2: Quên đơn vị px

Sai:

```css
padding: 20;
```

Đúng:

```css
padding: 20px;
```

### Lỗi 3: Card không căn giữa

Muốn dùng `margin: auto`, phần tử cần có `width`.

Đúng:

```css
.profile-card {
    width: 500px;
    margin: 40px auto;
}
```

### Lỗi 4: Viền quá đậm

Không nên dùng viền quá đậm nếu muốn giao diện nhẹ nhàng.

Nên dùng:

```css
border: 1px solid #dddddd;
```

## 8. Bài tập về nhà

Tạo 3 card cho website cá nhân:

- Card Giới thiệu
- Card Sở thích
- Card Kỹ năng

Mỗi card cần có:

- Nền trắng
- Padding
- Border
- Border radius
- Margin bên dưới

Gợi ý HTML:

```html
<div class="card">
    <h2>Giới thiệu</h2>
    <p>Tôi là học viên mới học lập trình web.</p>
</div>

<div class="card">
    <h2>Sở thích</h2>
    <p>Tôi thích đọc sách, chơi game và lập trình.</p>
</div>

<div class="card">
    <h2>Kỹ năng</h2>
    <p>Tôi đã biết HTML và đang học CSS.</p>
</div>
```

## 9. Checklist cuối buổi

- [ ] Em hiểu Box Model là gì.
- [ ] Em phân biệt được content, padding, border, margin.
- [ ] Em biết dùng `padding`.
- [ ] Em biết dùng `margin`.
- [ ] Em biết dùng `border`.
- [ ] Em biết dùng `border-radius`.
- [ ] Em tạo được card giới thiệu.
- [ ] Em căn được card ra giữa.

## 10. Kết quả cần đạt

Kết thúc buổi này, em tạo được card giới thiệu bản thân có:

- Nền trắng
- Khoảng cách đẹp
- Viền nhẹ
- Bo góc
- Nội dung dễ đọc