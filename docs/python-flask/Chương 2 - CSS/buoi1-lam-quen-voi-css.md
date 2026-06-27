# Buổi 1: Làm quen với CSS

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu CSS dùng để làm đẹp website.
- Phân biệt được HTML và CSS.
- Biết 3 cách thêm CSS vào HTML:
  - Inline CSS
  - Internal CSS
  - External CSS
- Tạo được file `style.css`.
- Liên kết được file CSS với file HTML.
- Đổi được màu chữ và màu nền cơ bản.

## 2. Kiến thức chính

CSS là ngôn ngữ dùng để định dạng giao diện website.

CSS có thể chỉnh:

- Màu chữ
- Màu nền
- Cỡ chữ
- Font chữ
- Khoảng cách
- Bố cục
- Nút bấm
- Hình ảnh

Một số thuộc tính học trong buổi này:

```css
color
background-color
```

Cách liên kết CSS vào HTML:

```html
<link rel="stylesheet" href="style.css">
```

## 3. Giải thích dễ hiểu

HTML dùng để tạo nội dung cho website.

Ví dụ:

```html
<h1>Xin chào</h1>
<p>Tôi đang học lập trình web.</p>
```

CSS dùng để làm cho nội dung đó đẹp hơn.

Ví dụ:

```css
h1 {
    color: blue;
}
```

Có thể hiểu đơn giản:

```text
HTML = nội dung của website
CSS  = giao diện của website
```

Nếu HTML giống như bộ xương của trang web, thì CSS giống như quần áo, màu sắc và cách trang trí.

### 3 cách viết CSS

#### Cách 1: Inline CSS

Viết trực tiếp trong thẻ HTML.

```html
<h1 style="color: blue;">Xin chào CSS</h1>
```

Cách này dễ thử nhanh nhưng không nên dùng nhiều vì HTML sẽ bị rối.

#### Cách 2: Internal CSS

Viết CSS trong thẻ `<style>`.

```html
<style>
    h1 {
        color: blue;
    }
</style>
```

Cách này phù hợp với trang nhỏ.

#### Cách 3: External CSS

Viết CSS trong file riêng, ví dụ `style.css`.

```html
<link rel="stylesheet" href="style.css">
```

Đây là cách nên dùng vì code gọn, dễ quản lý và dễ sửa.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML CSS difference illustration`

- Vị trí chèn:  
Sau phần giải thích “HTML = nội dung, CSS = giao diện”.

- Chú thích:  
HTML tạo nội dung cho website, CSS giúp nội dung đó có màu sắc và giao diện đẹp hơn.

## 5. Ví dụ code

Tạo thư mục:

```text
css-buoi-1
├── index.html
└── style.css
```

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CSS đầu tiên</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Xin chào CSS</h1>
    <p>Tôi đang học cách làm đẹp website.</p>
    <p>CSS giúp website dễ nhìn hơn.</p>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: lightyellow;
}

h1 {
    color: blue;
}

p {
    color: gray;
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo thư mục dự án

Tạo thư mục tên:

```text
css-buoi-1
```

Bên trong tạo 2 file:

```text
index.html
style.css
```

### Bài 2: Viết nội dung HTML

Trong file `index.html`, tạo trang giới thiệu ngắn gồm:

- Tiêu đề chính
- 2 đoạn văn
- 1 danh sách sở thích

### Bài 3: Gắn CSS vào HTML

Trong thẻ `<head>`, thêm:

```html
<link rel="stylesheet" href="style.css">
```

### Bài 4: Đổi màu bằng CSS

Trong file `style.css`, đổi:

- Màu nền trang
- Màu tiêu đề
- Màu đoạn văn

## 7. Lỗi thường gặp

### Lỗi 1: Quên liên kết file CSS

Sai:

```html
<head>
    <title>CSS đầu tiên</title>
</head>
```

Đúng:

```html
<head>
    <title>CSS đầu tiên</title>
    <link rel="stylesheet" href="style.css">
</head>
```

### Lỗi 2: Gõ sai tên file CSS

Nếu file tên là:

```text
style.css
```

Thì trong HTML phải viết:

```html
<link rel="stylesheet" href="style.css">
```

Không viết sai thành:

```html
<link rel="stylesheet" href="styles.css">
```

### Lỗi 3: Quên dấu chấm phẩy

Sai:

```css
h1 {
    color: blue
}
```

Đúng:

```css
h1 {
    color: blue;
}
```

## 8. Bài tập về nhà

Tạo trang giới thiệu bản thân có:

- Tiêu đề chính
- 2 đoạn văn giới thiệu
- Danh sách 3 sở thích
- Màu nền
- Màu chữ tiêu đề
- Màu chữ đoạn văn

Gợi ý HTML:

```html
<h1>Giới thiệu bản thân</h1>
<p>Xin chào, tôi tên là...</p>
<p>Tôi đang học HTML và CSS.</p>

<h2>Sở thích của tôi</h2>
<ul>
    <li>Đọc sách</li>
    <li>Chơi game</li>
    <li>Lập trình</li>
</ul>
```

## 9. Checklist cuối buổi

- [ ] Em hiểu CSS dùng để làm gì.
- [ ] Em phân biệt được HTML và CSS.
- [ ] Em biết tạo file `style.css`.
- [ ] Em biết liên kết CSS vào HTML.
- [ ] Em đổi được màu chữ.
- [ ] Em đổi được màu nền.
- [ ] Em mở được website trên trình duyệt.
- [ ] Em sửa được lỗi sai tên file CSS.

## 10. Kết quả cần đạt

Kết thúc buổi này, em có một trang HTML đơn giản đã được làm đẹp bằng CSS.

Sản phẩm cần có:

```text
css-buoi-1
├── index.html
└── style.css
```