# Bài giảng Buổi 2: Các thẻ HTML cơ bản

## 1. Mục tiêu buổi học

Sau buổi học này, học viên có thể:

* Biết dùng các thẻ tiêu đề từ `h1` đến `h6`.
* Biết dùng thẻ đoạn văn `p`.
* Biết dùng thẻ in đậm `strong`.
* Biết dùng thẻ in nghiêng `em`.
* Biết tạo liên kết bằng thẻ `a`.
* Biết tạo danh sách bằng `ul`, `ol`, `li`.
* Tạo được trang cá nhân có thông tin, kỹ năng, sở thích và liên kết.

---

## 2. Ôn lại buổi trước

Ở buổi trước, em đã học cấu trúc cơ bản của một file HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào</h1>
    <p>Tôi đang học HTML.</p>
</body>
</html>
```

Trong đó:

* `head` chứa thông tin của trang.
* `title` là tiêu đề trên tab trình duyệt.
* `body` chứa nội dung hiển thị.
* `h1` là tiêu đề chính.
* `p` là đoạn văn.

Hôm nay, em sẽ học thêm nhiều thẻ HTML để trang web có nội dung rõ ràng hơn.

---

## 3. Các thẻ tiêu đề `h1` đến `h6`

HTML có 6 cấp độ tiêu đề:

```html
<h1>Tiêu đề cấp 1</h1>
<h2>Tiêu đề cấp 2</h2>
<h3>Tiêu đề cấp 3</h3>
<h4>Tiêu đề cấp 4</h4>
<h5>Tiêu đề cấp 5</h5>
<h6>Tiêu đề cấp 6</h6>
```

Trong đó:

* `h1` là tiêu đề lớn nhất, thường dùng cho tiêu đề chính của trang.
* `h2` dùng cho các phần lớn trong trang.
* `h3` dùng cho mục nhỏ hơn bên trong `h2`.
* `h4`, `h5`, `h6` ít dùng hơn trong bài cơ bản.

Ví dụ:

```html
<h1>Nguyễn Văn A</h1>

<h2>Giới thiệu</h2>
<p>Tôi là học viên đang học lập trình web.</p>

<h2>Kỹ năng</h2>
<p>Tôi đang học HTML, CSS và JavaScript.</p>
```

---

## 4. Thẻ đoạn văn `p`

Thẻ `p` dùng để viết đoạn văn bản.

Ví dụ:

```html
<p>Tôi yêu thích lập trình vì có thể tạo ra sản phẩm của riêng mình.</p>
```

Nếu có nhiều đoạn văn, em nên tách thành nhiều thẻ `p`.

Ví dụ:

```html
<p>Tôi đang học HTML.</p>
<p>Mục tiêu của tôi là tạo được một website cá nhân.</p>
<p>Sau đó, tôi muốn học thêm CSS và JavaScript.</p>
```

Không nên viết tất cả nội dung quá dài trong một dòng.

---

## 5. Thẻ xuống dòng `br`

Thẻ `br` dùng để xuống dòng nhanh.

Ví dụ:

```html
<p>
    Họ tên: Nguyễn Văn A<br>
    Tuổi: 15<br>
    Thành phố: TP. Hồ Chí Minh
</p>
```

Kết quả hiển thị:

```text
Họ tên: Nguyễn Văn A
Tuổi: 15
Thành phố: TP. Hồ Chí Minh
```

Lưu ý:

* `br` không cần thẻ đóng.
* Không nên lạm dụng `br` để chia bố cục lớn.
* Sau này khi học CSS, ta sẽ dùng CSS để căn chỉnh đẹp hơn.

---

## 6. Thẻ in đậm `strong`

Thẻ `strong` dùng để nhấn mạnh nội dung quan trọng.

Ví dụ:

```html
<p>Tôi đang học <strong>HTML cơ bản</strong>.</p>
```

Kết quả:

Tôi đang học **HTML cơ bản**.

Nên dùng `strong` khi muốn nhấn mạnh một từ hoặc cụm từ quan trọng.

---

## 7. Thẻ in nghiêng `em`

Thẻ `em` dùng để nhấn mạnh nhẹ hơn, thường hiển thị chữ nghiêng.

Ví dụ:

```html
<p>Tôi <em>rất thích</em> thiết kế website.</p>
```

Kết quả:

Tôi *rất thích* thiết kế website.

---

## 8. Thẻ liên kết `a`

Thẻ `a` dùng để tạo liên kết.

Cú pháp:

```html
<a href="https://example.com">Nội dung liên kết</a>
```

Ví dụ:

```html
<a href="https://google.com">Truy cập Google</a>
```

Trong đó:

* `a` là thẻ tạo liên kết.
* `href` là địa chỉ trang web muốn mở.
* Nội dung giữa thẻ mở và thẻ đóng là phần người dùng nhìn thấy và bấm vào.

---

## 9. Mở liên kết trong tab mới

Nếu muốn liên kết mở trong tab mới, dùng thêm thuộc tính `target="_blank"`.

Ví dụ:

```html
<a href="https://github.com" target="_blank">GitHub</a>
```

Khi người dùng bấm vào liên kết, trang GitHub sẽ mở ở tab mới.

---

## 10. Tạo liên kết email

Có thể tạo liên kết gửi email bằng `mailto:`.

Ví dụ:

```html
<a href="mailto:example@gmail.com">Gửi email cho tôi</a>
```

Khi bấm vào, máy tính có thể mở ứng dụng gửi email.

---

## 11. Danh sách không có thứ tự `ul`, `li`

Danh sách không có thứ tự thường hiển thị bằng dấu chấm đầu dòng.

Ví dụ:

```html
<h2>Kỹ năng</h2>
<ul>
    <li>HTML cơ bản</li>
    <li>Sử dụng VS Code</li>
    <li>Tạo trang web cá nhân</li>
</ul>
```

Trong đó:

* `ul` là danh sách không có thứ tự.
* `li` là từng mục trong danh sách.

Kết quả:

* HTML cơ bản
* Sử dụng VS Code
* Tạo trang web cá nhân

---

## 12. Danh sách có thứ tự `ol`, `li`

Danh sách có thứ tự thường hiển thị bằng số thứ tự.

Ví dụ:

```html
<h2>Sở thích</h2>
<ol>
    <li>Đọc sách</li>
    <li>Lập trình</li>
    <li>Thiết kế website</li>
</ol>
```

Kết quả:

1. Đọc sách
2. Lập trình
3. Thiết kế website

---

## 13. Hình minh họa nên chèn

### Hình 1: Ví dụ các thẻ tiêu đề HTML

Gợi ý tìm Google:

```text
HTML heading tags h1 h2 h3 example
```

### Hình 2: Ví dụ danh sách HTML

Gợi ý tìm Google:

```text
HTML unordered list ordered list example
```

### Hình 3: Ví dụ thẻ liên kết HTML

Gợi ý tìm Google:

```text
HTML anchor tag href example
```

Cách chèn vào tài liệu:

```md
![Ví dụ thẻ HTML cơ bản](link-hinh-anh)
```

---

## 14. Thực hành: Tạo trang giới thiệu bản thân

Tạo file `index.html` với nội dung sau:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Giới thiệu bản thân</title>
</head>
<body>
    <h1>Nguyễn Văn A</h1>

    <h2>Giới thiệu</h2>
    <p>
        Tôi là học viên đang học lập trình web.
        Tôi muốn học HTML, CSS và JavaScript để tạo ra website của riêng mình.
    </p>

    <h2>Kỹ năng</h2>
    <ul>
        <li>HTML cơ bản</li>
        <li>Sử dụng Visual Studio Code</li>
        <li>Tư duy xây dựng website</li>
    </ul>

    <h2>Sở thích</h2>
    <ol>
        <li>Đọc sách</li>
        <li>Lập trình</li>
        <li>Thiết kế website</li>
    </ol>

    <h2>Liên hệ</h2>
    <p>
        Facebook:
        <a href="https://facebook.com" target="_blank">Trang Facebook của tôi</a>
    </p>

    <p>
        Email:
        <a href="mailto:example@gmail.com">Gửi email cho tôi</a>
    </p>
</body>
</html>
```

---

## 15. Bài tập trên lớp

Hãy tạo trang cá nhân với các phần sau:

### Phần 1: Tiêu đề chính

Dùng thẻ `h1` để viết họ tên của em.

Ví dụ:

```html
<h1>Trần Minh Khang</h1>
```

### Phần 2: Giới thiệu

Dùng thẻ `h2` và `p`.

Ví dụ:

```html
<h2>Giới thiệu</h2>
<p>Tôi là học sinh yêu thích công nghệ và đang học lập trình web.</p>
```

### Phần 3: Kỹ năng

Dùng `ul`, `li`.

Ví dụ:

```html
<h2>Kỹ năng</h2>
<ul>
    <li>HTML</li>
    <li>Gõ phím nhanh</li>
    <li>Sử dụng máy tính</li>
</ul>
```

### Phần 4: Sở thích

Dùng `ol`, `li`.

Ví dụ:

```html
<h2>Sở thích</h2>
<ol>
    <li>Chơi game</li>
    <li>Nghe nhạc</li>
    <li>Học lập trình</li>
</ol>
```

### Phần 5: Liên kết

Thêm ít nhất 2 liên kết:

* Facebook
* GitHub
* Email
* Website yêu thích

Ví dụ:

```html
<a href="https://github.com" target="_blank">GitHub của tôi</a>
```

---

## 16. Lỗi thường gặp

### Lỗi 1: Quên thuộc tính `href`

Sai:

```html
<a>Facebook của tôi</a>
```

Đúng:

```html
<a href="https://facebook.com">Facebook của tôi</a>
```

---

### Lỗi 2: Viết sai danh sách

Sai:

```html
<ul>
    HTML
    CSS
    JavaScript
</ul>
```

Đúng:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

---

### Lỗi 3: Dùng quá nhiều `h1`

Không nên:

```html
<h1>Nguyễn Văn A</h1>
<h1>Kỹ năng</h1>
<h1>Sở thích</h1>
```

Nên dùng:

```html
<h1>Nguyễn Văn A</h1>
<h2>Kỹ năng</h2>
<h2>Sở thích</h2>
```

---

## 17. Bài tập về nhà

Hoàn thiện trang cá nhân với yêu cầu:

* Có họ tên bằng thẻ `h1`
* Có phần giới thiệu bằng thẻ `h2` và `p`
* Có danh sách kỹ năng bằng `ul`, `li`
* Có danh sách sở thích bằng `ol`, `li`
* Có ít nhất 2 liên kết
* Có sử dụng `strong` ít nhất 1 lần
* Có sử dụng `em` ít nhất 1 lần

---

## 18. Kết quả cần đạt

Sau buổi học này, em cần làm được:

* Biết dùng tiêu đề `h1` đến `h6`
* Biết viết đoạn văn bằng `p`
* Biết nhấn mạnh chữ bằng `strong` và `em`
* Biết tạo liên kết bằng `a`
* Biết tạo danh sách bằng `ul`, `ol`, `li`
* Tạo được trang giới thiệu bản thân có nội dung rõ ràng
