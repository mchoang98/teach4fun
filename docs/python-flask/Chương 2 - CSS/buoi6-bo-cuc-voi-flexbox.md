# Buổi 6: Bố cục với Flexbox

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu Flexbox dùng để sắp xếp phần tử.
- Biết dùng `display: flex`.
- Biết dùng `gap`.
- Biết dùng `justify-content`.
- Biết dùng `align-items`.
- Biết dùng `flex-direction`.
- Tạo được bố cục nhiều card nằm cùng hàng.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
display: flex;
gap
justify-content
align-items
flex-direction
```

Ví dụ:

```css
.card-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
}
```

## 3. Giải thích dễ hiểu

Khi chưa dùng Flexbox, các phần tử thường nằm theo chiều dọc.

Ví dụ:

```text
[Card 1]
[Card 2]
[Card 3]
```

Khi dùng Flexbox, ta có thể sắp xếp chúng theo hàng ngang.

```text
[Card 1]   [Card 2]   [Card 3]
```

Flexbox giúp bố cục dễ hơn, đặc biệt khi cần căn giữa, chia hàng, chia cột hoặc tạo khoảng cách giữa các phần tử.

### display: flex

Đây là thuộc tính bật Flexbox.

```css
.card-row {
    display: flex;
}
```

Khi đó, các phần tử con bên trong `.card-row` sẽ nằm cùng hàng theo mặc định.

### gap

Tạo khoảng cách giữa các phần tử.

```css
.card-row {
    gap: 20px;
}
```

### justify-content

Căn các phần tử theo chiều ngang chính.

```css
.card-row {
    justify-content: center;
}
```

Một số giá trị thường dùng:

```text
flex-start     : dồn về đầu
center         : căn giữa
space-between  : giãn đều, phần tử đầu và cuối sát hai bên
space-around   : giãn đều xung quanh
```

### align-items

Căn các phần tử theo chiều vuông góc.

```css
.card-row {
    align-items: center;
}
```

### flex-direction

Quy định hướng sắp xếp.

```css
.card-row {
    flex-direction: row;
}
```

Một số giá trị:

```text
row     : xếp theo hàng ngang
column  : xếp theo cột dọc
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS flexbox layout diagram`

- Vị trí chèn:  
Sau phần giải thích `display: flex`.

- Chú thích:  
Flexbox giúp sắp xếp các phần tử theo hàng hoặc cột một cách dễ dàng.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flexbox cơ bản</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Kỹ năng của tôi</h1>

    <div class="card-row">
        <div class="card">
            <h2>HTML</h2>
            <p>Tạo cấu trúc nội dung cho website.</p>
        </div>

        <div class="card">
            <h2>CSS</h2>
            <p>Làm đẹp giao diện website.</p>
        </div>

        <div class="card">
            <h2>Portfolio</h2>
            <p>Tạo website cá nhân để giới thiệu bản thân.</p>
        </div>
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

h1 {
    text-align: center;
    color: #2563eb;
}

.card-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    width: 260px;
    border: 1px solid #e5e7eb;
}

.card h2 {
    color: #1f2937;
}

.card p {
    line-height: 1.6;
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo 3 card

HTML:

```html
<div class="card">
    <h2>Giới thiệu</h2>
    <p>Tôi đang học lập trình web.</p>
</div>
```

Tạo đủ 3 card.

### Bài 2: Bọc card bằng `.card-row`

```html
<div class="card-row">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
</div>
```

### Bài 3: Bật Flexbox

```css
.card-row {
    display: flex;
}
```

### Bài 4: Thêm khoảng cách giữa các card

```css
.card-row {
    gap: 20px;
}
```

### Bài 5: Căn giữa các card

```css
.card-row {
    justify-content: center;
}
```

### Bài 6: Thử đổi hướng

```css
.card-row {
    flex-direction: column;
}
```

Sau đó đổi lại:

```css
.card-row {
    flex-direction: row;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Viết flex vào sai phần tử

Cần viết `display: flex` cho phần tử cha.

Đúng:

```css
.card-row {
    display: flex;
}
```

Không nên viết cho từng `.card` nếu muốn các card nằm cùng hàng.

### Lỗi 2: Các card dính sát nhau

Cần thêm:

```css
gap: 20px;
```

### Lỗi 3: Card quá rộng

Nếu mỗi card quá rộng, chúng có thể bị tràn màn hình.

Nên dùng chiều rộng vừa phải:

```css
.card {
    width: 260px;
}
```

### Lỗi 4: Nhầm `justify-content` và `align-items`

- `justify-content`: căn theo hướng chính.
- `align-items`: căn theo hướng vuông góc.

## 8. Bài tập về nhà

Tạo một khu vực gồm 3 card:

- Giới thiệu
- Mục tiêu
- Sản phẩm yêu thích

Yêu cầu:

- 3 card nằm cùng hàng trên màn hình rộng.
- Có khoảng cách giữa các card.
- Card có nền trắng.
- Card có padding.
- Card có border-radius.

## 9. Checklist cuối buổi

- [ ] Em hiểu Flexbox dùng để làm gì.
- [ ] Em biết dùng `display: flex`.
- [ ] Em biết dùng `gap`.
- [ ] Em biết dùng `justify-content`.
- [ ] Em biết dùng `align-items`.
- [ ] Em biết dùng `flex-direction`.
- [ ] Em tạo được nhiều card nằm cùng hàng.
- [ ] Em biết `display: flex` nên đặt ở phần tử cha.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em có một khu vực nhiều card được sắp xếp bằng Flexbox.

Sản phẩm cần có:

```text
[Card 1]   [Card 2]   [Card 3]
```