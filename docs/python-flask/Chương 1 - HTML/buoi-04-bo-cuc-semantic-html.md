#  Buổi 4: Bố cục Semantic HTML

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu semantic HTML là gì.
- Biết dùng `header`, `nav`, `main`, `section`, `article`, `footer`.
- Biết chia bố cục trang rõ ràng.
- Biết tạo cấu trúc Portfolio cá nhân.
- Chuẩn bị nền tảng tốt để học CSS.

## 2. Kiến thức chính

Các thẻ semantic:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

## 3. Giải thích dễ hiểu

Semantic HTML là cách dùng thẻ HTML đúng ý nghĩa.

Ví dụ:

- `header`: phần đầu trang.
- `nav`: menu điều hướng.
- `main`: nội dung chính.
- `section`: một khu vực nội dung.
- `article`: một nội dung độc lập.
- `footer`: phần cuối trang.

Thay vì dùng toàn bộ bằng `div`, ta dùng thẻ có ý nghĩa rõ hơn.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`semantic HTML layout diagram`

- Vị trí chèn:  
Sau phần giải thích các thẻ semantic.

- Chú thích:  
Semantic HTML giúp trang web có cấu trúc rõ ràng và dễ bảo trì.

## 5. Ví dụ code

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Semantic HTML</title>
</head>
<body>
    <header>
        <h1>Portfolio của An</h1>

        <nav>
            <a href="#about">Giới thiệu</a>
            <a href="#skills">Kỹ năng</a>
            <a href="#contact">Liên hệ</a>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>Giới thiệu</h2>
            <p>Tôi đang học lập trình web.</p>
        </section>

        <section id="skills">
            <h2>Kỹ năng</h2>
            <ul>
                <li>HTML</li>
                <li>Sử dụng VS Code</li>
                <li>Tạo website cá nhân</li>
            </ul>
        </section>

        <section>
            <h2>Dự án nhỏ</h2>

            <article>
                <h3>Trang giới thiệu bản thân</h3>
                <p>Dự án HTML đầu tiên của tôi.</p>
            </article>
        </section>

        <section id="contact">
            <h2>Liên hệ</h2>
            <p>Email: an@example.com</p>
        </section>
    </main>

    <footer>
        <p>© 2026 Portfolio của An</p>
    </footer>
</body>
</html>
```

## 6. Thực hành trên lớp

- Chuyển trang cá nhân sang cấu trúc semantic.
- Thêm `header`.
- Thêm `nav`.
- Bọc nội dung chính bằng `main`.
- Chia từng phần bằng `section`.
- Thêm `footer`.

## 7. Lỗi thường gặp

### Lỗi 1: Dùng quá nhiều h1

Mỗi trang nên có một `h1` chính.

### Lỗi 2: Đặt footer trong main không hợp lý

Nên đặt:

```html
<main>
    Nội dung chính
</main>

<footer>
    Phần cuối trang
</footer>
```

### Lỗi 3: Menu không có href

Nên viết:

```html
<a href="#about">Giới thiệu</a>
```

## 8. Bài tập về nhà

Cập nhật Portfolio cá nhân với:

- `header`
- `nav`
- `main`
- Ít nhất 3 `section`
- 1 `footer`

## 9. Checklist cuối buổi

- [ ] Em hiểu semantic HTML.
- [ ] Em biết dùng `header`.
- [ ] Em biết dùng `nav`.
- [ ] Em biết dùng `main`.
- [ ] Em biết dùng `section`.
- [ ] Em biết dùng `article`.
- [ ] Em biết dùng `footer`.
- [ ] Em chia được bố cục Portfolio.

## 10. Kết quả cần đạt

Kết thúc buổi này, Portfolio HTML của em có bố cục rõ ràng, dễ đọc và sẵn sàng để học CSS.
