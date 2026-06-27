# Buổi 8: Hoàn thiện giao diện Portfolio cá nhân

## 1. Mục tiêu

Sau buổi học này, em cần:

- Ôn lại toàn bộ kiến thức CSS cơ bản.
- Biết tổ chức file HTML và CSS.
- Biết hoàn thiện giao diện portfolio cá nhân.
- Biết kiểm tra lỗi giao diện.
- Biết kiểm tra responsive.
- Hoàn thành dự án cuối Chương 2.

## 2. Kiến thức chính

Các kiến thức cần dùng lại:

- Liên kết file CSS với HTML.
- Selector.
- Class và id.
- Màu sắc.
- Font chữ.
- Căn chỉnh văn bản.
- Box Model.
- Margin.
- Padding.
- Border.
- Border radius.
- Hình ảnh.
- Liên kết.
- Nút bấm.
- Flexbox.
- Responsive.
- Media query.

## 3. Giải thích dễ hiểu

Trong các buổi trước, em đã học từng phần nhỏ của CSS.

Buổi này, em sẽ ghép tất cả lại để hoàn thiện một website portfolio cá nhân.

Portfolio cá nhân là website dùng để giới thiệu bản thân.

Một portfolio đơn giản nên có:

- Header hoặc navigation
- Phần giới thiệu chính
- Ảnh đại diện
- Phần thông tin cá nhân
- Phần kỹ năng
- Phần sở thích hoặc dự án
- Phần liên hệ

Quy trình làm dự án:

```text
Bước 1: Viết HTML trước
Bước 2: Chia các phần rõ ràng
Bước 3: Thêm class cho từng phần
Bước 4: Viết CSS cho màu sắc và chữ
Bước 5: Viết CSS cho card và bố cục
Bước 6: Làm đẹp ảnh, nút, liên kết
Bước 7: Thêm responsive
Bước 8: Kiểm tra và sửa lỗi
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`personal portfolio website layout example`

- Vị trí chèn:  
Sau phần giới thiệu Portfolio cá nhân.

- Chú thích:  
Portfolio cá nhân thường gồm phần giới thiệu, kỹ năng, dự án và liên hệ.

## 5. Ví dụ code

Cấu trúc thư mục:

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Portfolio cá nhân</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <h1>Portfolio của An</h1>
        <nav>
            <a href="#about">Giới thiệu</a>
            <a href="#skills">Kỹ năng</a>
            <a href="#contact">Liên hệ</a>
        </nav>
    </header>

    <main class="container">
        <section class="hero card">
            <img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">
            <div>
                <h2>Xin chào, tôi là An</h2>
                <p>Tôi đang học lập trình web và muốn tạo ra những website đẹp.</p>
                <a href="#contact" class="btn">Liên hệ tôi</a>
            </div>
        </section>

        <section id="about" class="card">
            <h2>Giới thiệu</h2>
            <p>Tôi là học viên mới học HTML và CSS. Tôi thích công nghệ và thiết kế website.</p>
        </section>

        <section id="skills" class="card">
            <h2>Kỹ năng</h2>

            <div class="card-row">
                <div class="small-card">
                    <h3>HTML</h3>
                    <p>Tạo cấu trúc nội dung.</p>
                </div>

                <div class="small-card">
                    <h3>CSS</h3>
                    <p>Làm đẹp giao diện.</p>
                </div>

                <div class="small-card">
                    <h3>Portfolio</h3>
                    <p>Giới thiệu bản thân.</p>
                </div>
            </div>
        </section>

        <section class="card">
            <h2>Sở thích</h2>
            <ul>
                <li>Lập trình</li>
                <li>Đọc sách</li>
                <li>Chơi game</li>
            </ul>
        </section>

        <section id="contact" class="card">
            <h2>Liên hệ</h2>
            <p>Email: email@example.com</p>
            <a href="mailto:email@example.com" class="btn">Gửi email</a>
        </section>
    </main>
</body>
</html>
```

File `style.css`:

```css
:root {
    --primary: #2563eb;
    --background: #f5f7fb;
    --text: #1f2937;
    --card: #ffffff;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background);
    color: var(--text);
}

.header {
    background-color: var(--primary);
    color: white;
    padding: 24px;
    text-align: center;
}

.header h1 {
    margin-top: 0;
}

.header a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

.header a:hover {
    text-decoration: underline;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background-color: var(--card);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    margin-bottom: 20px;
}

.hero {
    display: flex;
    align-items: center;
    gap: 24px;
}

.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}

.card-row {
    display: flex;
    gap: 20px;
}

.small-card {
    background-color: #f9fafb;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    width: 100%;
}

.btn {
    display: inline-block;
    background-color: var(--primary);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 10px;
}

.btn:hover {
    background-color: #1e40af;
}

p {
    line-height: 1.6;
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .card-row {
        flex-direction: column;
    }

    h1 {
        font-size: 28px;
    }

    .header a {
        display: block;
        margin: 8px 0;
    }
}
```

## 6. Thực hành trên lớp

### Bài 1: Mở lại dự án HTML cá nhân

Mở website cá nhân đã làm từ Chương 1.

Nếu chưa có, tạo mới file:

```text
index.html
style.css
```

### Bài 2: Chia bố cục website

Website cần có các phần:

```text
Header
Hero
About
Skills
Hobbies / Projects
Contact
```

### Bài 3: Thêm class cho từng phần

Ví dụ:

```html
<section class="card">
    <h2>Giới thiệu</h2>
    <p>Nội dung giới thiệu...</p>
</section>
```

### Bài 4: Làm đẹp giao diện

Thêm CSS cho:

- Màu nền
- Font chữ
- Card
- Ảnh đại diện
- Nút bấm
- Liên kết

### Bài 5: Tạo bố cục Flexbox

Dùng Flexbox cho:

- Phần hero
- Phần kỹ năng
- Các card nhỏ

### Bài 6: Thêm responsive

Viết media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Bài 7: Kiểm tra sản phẩm

Kiểm tra:

- Website mở được trên trình duyệt.
- CSS có hoạt động.
- Ảnh có hiển thị.
- Nút bấm có hover.
- Card không bị tràn.
- Website xem tốt trên điện thoại.

## 7. Lỗi thường gặp

### Lỗi 1: Không liên kết được CSS

Kiểm tra trong `<head>` có dòng:

```html
<link rel="stylesheet" href="style.css">
```

### Lỗi 2: Mất ảnh đại diện

Kiểm tra file ảnh có nằm cùng thư mục với `index.html` không.

Ví dụ:

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

### Lỗi 3: Website bị tràn ngang

Thêm:

```css
* {
    box-sizing: border-box;
}
```

Và kiểm tra các phần tử có width quá lớn không.

### Lỗi 4: Card không xuống hàng trên điện thoại

Kiểm tra media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Lỗi 5: Chữ khó đọc

Nên dùng màu chữ đậm trên nền sáng.

Ví dụ:

```css
body {
    background-color: #f5f7fb;
    color: #1f2937;
}
```

## 8. Bài tập về nhà

Hoàn thiện dự án Portfolio cá nhân.

Yêu cầu HTML:

- Có cấu trúc HTML đầy đủ.
- Có liên kết đến file `style.css`.
- Có ảnh đại diện.
- Có ít nhất 3 phần nội dung lớn.
- Có danh sách kỹ năng hoặc sở thích.
- Có phần liên hệ.

Yêu cầu CSS:

- Có màu nền và màu chữ rõ ràng.
- Có font chữ thống nhất toàn trang.
- Có container hoặc phần bọc nội dung.
- Có card sử dụng padding, margin, border hoặc border-radius.
- Có nút bấm được làm đẹp.
- Có Flexbox cho ít nhất một khu vực.
- Có responsive cơ bản bằng media query.

Chuẩn bị trình bày sản phẩm trong 2-3 phút theo mẫu:

```text
Xin chào thầy/cô và các bạn.
Đây là website portfolio cá nhân của em.
Trang web có các phần: giới thiệu, kỹ năng, sở thích và liên hệ.
Em đã dùng CSS để chỉnh màu sắc, font chữ, khoảng cách, card, nút bấm và responsive.
Phần em thích nhất là ...
Phần em thấy khó nhất là ...
```

## 9. Checklist cuối buổi

- [ ] Em có đủ file `index.html`.
- [ ] Em có đủ file `style.css`.
- [ ] Em liên kết CSS đúng.
- [ ] Website có màu sắc rõ ràng.
- [ ] Website có font chữ thống nhất.
- [ ] Website có ảnh đại diện.
- [ ] Website có card.
- [ ] Website có nút bấm.
- [ ] Website có Flexbox.
- [ ] Website có responsive.
- [ ] Website không bị tràn ngang.
- [ ] Em có thể trình bày sản phẩm trong 2-3 phút.

## 10. Kết quả cần đạt

Kết thúc buổi này, em hoàn thành Portfolio cá nhân có CSS.

Sản phẩm cuối chương:

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

Website cần có:

- Giao diện đẹp hơn HTML thô.
- Màu sắc rõ ràng.
- Font chữ dễ đọc.
- Card có khoảng cách đẹp.
- Ảnh đại diện được làm đẹp.
- Nút bấm và liên kết thân thiện.
- Bố cục dùng Flexbox.
- Responsive cơ bản trên điện thoại.