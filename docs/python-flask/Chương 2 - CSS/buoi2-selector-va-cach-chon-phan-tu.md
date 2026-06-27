# Buổi 2: Selector và cách chọn phần tử

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu selector là gì.
- Biết chọn phần tử bằng tên thẻ HTML.
- Biết dùng class.
- Biết dùng id.
- Biết khi nào nên dùng class, khi nào nên dùng id.
- Biết dùng dấu `.` và dấu `#` trong CSS.

## 2. Kiến thức chính

Selector là cách CSS chọn đúng phần tử HTML cần định dạng.

Có 3 loại selector cơ bản:

### Tag selector

Chọn theo tên thẻ HTML.

```css
p {
    color: gray;
}
```

### Class selector

Chọn theo class.

```css
.intro {
    color: blue;
}
```

### ID selector

Chọn theo id.

```css
#main-title {
    color: darkblue;
}
```

## 3. Giải thích dễ hiểu

Khi website có nhiều phần tử, CSS cần biết em muốn làm đẹp phần nào.

Ví dụ:

```html
<p>Đây là đoạn giới thiệu.</p>
<p>Đây là đoạn sở thích.</p>
<p>Đây là đoạn kỹ năng.</p>
```

Nếu viết:

```css
p {
    color: gray;
}
```

Tất cả thẻ `<p>` sẽ đổi thành màu xám.

Nhưng nếu chỉ muốn đoạn giới thiệu có màu xanh, em cần dùng class.

```html
<p class="intro">Đây là đoạn giới thiệu.</p>
```

CSS:

```css
.intro {
    color: blue;
}
```

### Class là gì?

Class giống như một cái nhãn.

Nhiều phần tử có thể dùng chung một class.

```html
<p class="intro">Tôi đang học CSS.</p>
<p class="intro">Tôi thích tạo website.</p>
```

```css
.intro {
    color: darkblue;
}
```

### ID là gì?

ID dùng cho một phần tử đặc biệt, thường không lặp lại nhiều lần trong cùng một trang.

```html
<h1 id="main-title">Trang cá nhân của An</h1>
```

```css
#main-title {
    color: darkred;
}
```

### Khi nào dùng class?

Dùng class khi muốn áp dụng cùng một kiểu cho nhiều phần tử.

Ví dụ:

- Nhiều đoạn giới thiệu
- Nhiều card
- Nhiều nút bấm

### Khi nào dùng id?

Dùng id khi phần tử đó đặc biệt và chỉ xuất hiện một lần.

Ví dụ:

- Tiêu đề chính
- Khu vực header chính

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS selector class id diagram`

- Vị trí chèn:  
Sau phần giải thích class và id.

- Chú thích:  
Class dùng dấu chấm `.`, id dùng dấu thăng `#`.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Selector trong CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-title">Trang cá nhân của An</h1>

    <p class="intro">Tôi đang học CSS.</p>
    <p class="intro">Tôi thích tạo website đẹp.</p>

    <h2>Sở thích</h2>
    <p class="hobby">Tôi thích đọc sách và chơi game.</p>

    <h2>Kỹ năng</h2>
    <p class="skill">Tôi biết HTML cơ bản.</p>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

#main-title {
    color: darkblue;
    text-align: center;
}

.intro {
    color: #444444;
    font-size: 18px;
}

.hobby {
    color: green;
}

.skill {
    color: purple;
}

p {
    line-height: 1.6;
}
```

## 6. Thực hành trên lớp

### Bài 1: Chọn bằng tên thẻ

Viết CSS:

```css
p {
    color: gray;
}
```

Quan sát tất cả đoạn văn đều đổi màu.

### Bài 2: Thêm id cho tiêu đề

HTML:

```html
<h1 id="main-title">Trang cá nhân của tôi</h1>
```

CSS:

```css
#main-title {
    color: blue;
    text-align: center;
}
```

### Bài 3: Thêm class cho đoạn giới thiệu

HTML:

```html
<p class="intro">Tôi đang học CSS.</p>
```

CSS:

```css
.intro {
    font-size: 18px;
    color: darkgreen;
}
```

### Bài 4: Tạo nhiều class

HTML:

```html
<p class="intro">Tôi là học viên mới học web.</p>
<p class="hobby">Tôi thích thiết kế website.</p>
<p class="skill">Tôi biết HTML cơ bản.</p>
```

CSS:

```css
.intro {
    color: blue;
}

.hobby {
    color: orange;
}

.skill {
    color: purple;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Quên dấu chấm khi chọn class

HTML:

```html
<p class="intro">Xin chào</p>
```

Sai:

```css
intro {
    color: blue;
}
```

Đúng:

```css
.intro {
    color: blue;
}
```

### Lỗi 2: Quên dấu thăng khi chọn id

HTML:

```html
<h1 id="main-title">Xin chào</h1>
```

Sai:

```css
main-title {
    color: red;
}
```

Đúng:

```css
#main-title {
    color: red;
}
```

### Lỗi 3: Viết sai tên class

HTML:

```html
<p class="intro">Xin chào</p>
```

CSS sai:

```css
.intros {
    color: blue;
}
```

Tên class trong HTML và CSS phải giống nhau.

## 8. Bài tập về nhà

Cập nhật website cá nhân với yêu cầu:

- Tiêu đề chính có `id="main-title"`.
- Có ít nhất 3 class:
  - `intro`
  - `hobby`
  - `skill`
- Mỗi class có màu chữ khác nhau.
- Tất cả đoạn văn có `line-height: 1.6`.

Gợi ý:

```html
<h1 id="main-title">Trang cá nhân của Bình</h1>

<p class="intro">Tôi là Bình, tôi đang học lập trình web.</p>
<p class="hobby">Tôi thích bóng đá, âm nhạc và game.</p>
<p class="skill">Tôi đã biết HTML và đang học CSS.</p>
```

## 9. Checklist cuối buổi

- [ ] Em hiểu selector là gì.
- [ ] Em biết chọn phần tử bằng tên thẻ.
- [ ] Em biết dùng class trong HTML.
- [ ] Em biết chọn class bằng dấu `.`.
- [ ] Em biết dùng id trong HTML.
- [ ] Em biết chọn id bằng dấu `#`.
- [ ] Em phân biệt được class và id.
- [ ] Em sửa được lỗi quên dấu `.` hoặc `#`.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em có nhiều phần được định dạng riêng bằng class và id.

Sản phẩm cần có:

- Tiêu đề chính dùng id.
- Các đoạn nội dung dùng class.
- Có ít nhất 3 kiểu CSS khác nhau.