# Bài giảng Buổi 3: Hình ảnh và Form trong HTML

## 1. Mục tiêu buổi học

Sau buổi học này, học viên có thể:

* Biết thêm hình ảnh vào trang web bằng thẻ `img`.
* Hiểu các thuộc tính `src`, `alt`, `width`.
* Biết tạo form nhập dữ liệu bằng thẻ `form`.
* Biết dùng `label`, `input`, `textarea`, `button`.
* Biết dùng các thuộc tính `type`, `placeholder`, `required`.
* Hoàn thiện trang giới thiệu bản thân có ảnh đại diện và form liên hệ.

---

## 2. Ôn lại buổi trước

Ở buổi trước, em đã học các thẻ HTML cơ bản:

```html
<h1>Tiêu đề chính</h1>
<h2>Tiêu đề phụ</h2>
<p>Đây là đoạn văn.</p>

<ul>
    <li>Kỹ năng 1</li>
    <li>Kỹ năng 2</li>
</ul>

<a href="https://google.com">Truy cập Google</a>
```

Hôm nay, em sẽ nâng cấp trang cá nhân bằng cách thêm:

* Ảnh đại diện
* Form liên hệ

---

## 3. Thẻ hình ảnh `img`

Thẻ `img` dùng để hiển thị hình ảnh trên trang web.

Cú pháp:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" width="200">
```

Trong đó:

* `src` là đường dẫn đến hình ảnh.
* `alt` là mô tả hình ảnh.
* `width` là chiều rộng của ảnh.

Lưu ý:

Thẻ `img` không cần thẻ đóng.

Không viết:

```html
<img src="avatar.jpg"></img>
```

Chỉ cần viết:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" width="200">
```

---

## 4. Thuộc tính `src`

`src` là nơi khai báo đường dẫn ảnh.

Ví dụ ảnh nằm cùng thư mục với file `index.html`:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" width="200">
```

Cấu trúc thư mục:

```text
html-buoi-3
│
├── index.html
└── avatar.jpg
```

Nếu ảnh nằm trong thư mục `images`:

```html
<img src="images/avatar.jpg" alt="Ảnh đại diện" width="200">
```

Cấu trúc thư mục:

```text
html-buoi-3
│
├── index.html
└── images
    └── avatar.jpg
```

---

## 5. Thuộc tính `alt`

`alt` là nội dung mô tả ảnh.

Ví dụ:

```html
<img src="avatar.jpg" alt="Ảnh chân dung của Nguyễn Văn A" width="200">
```

`alt` rất quan trọng vì:

* Khi ảnh bị lỗi, trình duyệt có thể hiển thị mô tả thay thế.
* Giúp người dùng hiểu ảnh nói về điều gì.
* Hỗ trợ công cụ đọc màn hình cho người khiếm thị.

Không nên viết `alt` quá chung chung.

Chưa tốt:

```html
<img src="avatar.jpg" alt="ảnh">
```

Tốt hơn:

```html
<img src="avatar.jpg" alt="Ảnh đại diện của Nguyễn Văn A">
```

---

## 6. Thuộc tính `width`

`width` dùng để chỉnh chiều rộng ảnh.

Ví dụ:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" width="200">
```

Nghĩa là ảnh có chiều rộng 200px.

Ví dụ khác:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" width="300">
```

Ảnh sẽ lớn hơn.

Lưu ý:

* Không nên để ảnh quá lớn.
* Với ảnh đại diện, có thể dùng `width="150"` hoặc `width="200"`.

---

## 7. Hình minh họa nên chèn

### Hình 1: Ví dụ thẻ ảnh HTML

Gợi ý tìm Google:

```text
HTML img tag src alt width example
```

### Hình 2: Ví dụ form HTML đơn giản

Gợi ý tìm Google:

```text
simple HTML form input textarea button example
```

### Hình 3: Cấu trúc thư mục ảnh trong HTML

Gợi ý tìm Google:

```text
HTML image file path folder structure
```

Cách chèn vào tài liệu:

```md
![Ví dụ form HTML](link-hinh-anh)
```

Gợi ý chú thích:

> Form HTML giúp người dùng nhập thông tin như họ tên, email, số điện thoại và nội dung liên hệ.

---

## 8. Form HTML là gì?

Form là khu vực cho phép người dùng nhập dữ liệu.

Ví dụ:

* Form đăng nhập
* Form đăng ký tài khoản
* Form liên hệ
* Form tìm kiếm
* Form đặt hàng

Trong bài này, em sẽ tạo một form liên hệ đơn giản gồm:

* Họ tên
* Email
* Số điện thoại
* Nội dung tin nhắn
* Nút gửi

---

## 9. Thẻ `form`

Thẻ `form` dùng để bao quanh toàn bộ form.

Ví dụ:

```html
<form>
    <!-- Các ô nhập dữ liệu sẽ nằm ở đây -->
</form>
```

Trong bài cơ bản này, form chưa cần gửi dữ liệu lên server.

Sau này khi học backend với Flask, em sẽ học cách xử lý dữ liệu từ form.

---

## 10. Thẻ `label`

Thẻ `label` dùng để ghi nhãn cho ô nhập liệu.

Ví dụ:

```html
<label>Họ tên:</label>
```

Khi nhìn vào form, người dùng biết ô này dùng để nhập gì.

---

## 11. Thẻ `input`

Thẻ `input` dùng để tạo ô nhập dữ liệu một dòng.

Ví dụ:

```html
<input type="text">
```

Một số kiểu `input` thường gặp:

```html
<input type="text">
<input type="email">
<input type="tel">
<input type="password">
```

Giải thích:

* `text`: nhập văn bản thường.
* `email`: nhập email.
* `tel`: nhập số điện thoại.
* `password`: nhập mật khẩu.

---

## 12. Thuộc tính `placeholder`

`placeholder` là chữ gợi ý bên trong ô nhập.

Ví dụ:

```html
<input type="text" placeholder="Nhập họ tên">
```

Khi ô còn trống, người dùng sẽ thấy dòng chữ:

```text
Nhập họ tên
```

---

## 13. Thuộc tính `required`

`required` dùng để bắt buộc người dùng phải nhập thông tin.

Ví dụ:

```html
<input type="email" placeholder="Nhập email" required>
```

Nếu người dùng chưa nhập email mà bấm gửi, trình duyệt sẽ báo lỗi.

---

## 14. Thẻ `textarea`

`textarea` dùng để nhập nội dung nhiều dòng.

Ví dụ:

```html
<textarea placeholder="Nhập nội dung liên hệ"></textarea>
```

Nên dùng `textarea` cho các nội dung dài như:

* Lời nhắn
* Góp ý
* Mô tả bản thân
* Nội dung liên hệ

---

## 15. Thẻ `button`

Thẻ `button` dùng để tạo nút bấm.

Ví dụ:

```html
<button type="submit">Gửi liên hệ</button>
```

Trong đó:

* `type="submit"` nghĩa là nút gửi form.
* Nội dung giữa thẻ mở và thẻ đóng là chữ hiển thị trên nút.

---

## 16. Thực hành: Thêm ảnh và form vào trang cá nhân

Tạo hoặc sửa file `index.html` như sau:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio cá nhân</title>
</head>
<body>
    <h1>Nguyễn Văn A</h1>

    <img src="avatar.jpg" alt="Ảnh đại diện của Nguyễn Văn A" width="200">

    <h2>Giới thiệu</h2>
    <p>
        Tôi đang học lập trình Fullstack Web.
        Tôi muốn tạo được website cá nhân bằng HTML, CSS, JavaScript và Flask.
    </p>

    <h2>Kỹ năng</h2>
    <ul>
        <li>HTML cơ bản</li>
        <li>Thiết kế giao diện web</li>
        <li>Tạo form liên hệ</li>
    </ul>

    <h2>Sở thích</h2>
    <ol>
        <li>Học lập trình</li>
        <li>Đọc sách công nghệ</li>
        <li>Thiết kế website</li>
    </ol>

    <h2>Liên hệ</h2>
    <p>
        GitHub:
        <a href="https://github.com" target="_blank">Trang GitHub của tôi</a>
    </p>

    <h2>Form liên hệ</h2>

    <form>
        <label>Họ tên:</label><br>
        <input type="text" placeholder="Nhập họ tên" required><br><br>

        <label>Email:</label><br>
        <input type="email" placeholder="Nhập email" required><br><br>

        <label>Số điện thoại:</label><br>
        <input type="tel" placeholder="Nhập số điện thoại"><br><br>

        <label>Nội dung:</label><br>
        <textarea placeholder="Nhập nội dung liên hệ"></textarea><br><br>

        <button type="submit">Gửi liên hệ</button>
    </form>
</body>
</html>
```

---

## 17. Kiểm tra kết quả

Sau khi viết xong, mở file `index.html` bằng trình duyệt.

Kiểm tra các phần sau:

* Trang có hiển thị họ tên không?
* Ảnh đại diện có hiện không?
* Có phần giới thiệu không?
* Có danh sách kỹ năng không?
* Có danh sách sở thích không?
* Có liên kết không?
* Form có ô họ tên không?
* Form có ô email không?
* Form có ô số điện thoại không?
* Form có ô nội dung không?
* Có nút gửi không?
* Khi bỏ trống ô bắt buộc và bấm gửi, trình duyệt có báo lỗi không?

---

## 18. Lỗi thường gặp

### Lỗi 1: Ảnh không hiển thị

Nguyên nhân thường gặp:

* Sai tên file ảnh.
* Sai đường dẫn ảnh.
* Ảnh không nằm cùng thư mục với file HTML.
* File ảnh có đuôi khác với code.

Ví dụ:

Trong thư mục có file:

```text
avatar.png
```

Nhưng trong code lại viết:

```html
<img src="avatar.jpg">
```

Cách sửa:

```html
<img src="avatar.png" alt="Ảnh đại diện" width="200">
```

---

### Lỗi 2: Quên `alt`

Chưa tốt:

```html
<img src="avatar.jpg" width="200">
```

Tốt hơn:

```html
<img src="avatar.jpg" alt="Ảnh đại diện của tôi" width="200">
```

---

### Lỗi 3: Quên đóng `textarea`

Sai:

```html
<textarea placeholder="Nhập nội dung">
```

Đúng:

```html
<textarea placeholder="Nhập nội dung"></textarea>
```

---

### Lỗi 4: Dùng sai `type` cho email

Chưa tốt:

```html
<input type="text" placeholder="Nhập email">
```

Tốt hơn:

```html
<input type="email" placeholder="Nhập email" required>
```

Khi dùng `type="email"`, trình duyệt có thể kiểm tra định dạng email cơ bản.

---

## 19. Bài tập trên lớp

Hoàn thiện trang giới thiệu bản thân với các yêu cầu:

* Có họ tên.
* Có ảnh đại diện.
* Có đoạn giới thiệu bản thân.
* Có danh sách kỹ năng.
* Có danh sách sở thích.
* Có ít nhất một liên kết.
* Có form liên hệ gồm:

  * Họ tên
  * Email
  * Số điện thoại
  * Nội dung
  * Nút gửi

---

## 20. Bài tập về nhà

Hoàn thiện dự án cuối chương: **Trang giới thiệu bản thân bằng HTML**.

Yêu cầu bắt buộc:

* File chính tên `index.html`
* Có cấu trúc HTML đầy đủ
* Có thẻ `title`
* Có thẻ `h1`
* Có đoạn văn giới thiệu
* Có danh sách kỹ năng
* Có danh sách sở thích
* Có ít nhất một liên kết
* Có ảnh đại diện
* Có form liên hệ

Yêu cầu nâng cao:

* Thêm bảng thông tin cá nhân
* Thêm liên kết YouTube yêu thích
* Thêm nhiều hình ảnh hơn
* Thêm phần mục tiêu học tập

---

## 21. Checklist tự đánh giá

Trước khi nộp bài, em hãy tự kiểm tra:

* [ ] Tôi đã tạo file `index.html`
* [ ] Trang mở được trên trình duyệt
* [ ] Có tiêu đề trang bằng thẻ `title`
* [ ] Có tiêu đề chính bằng thẻ `h1`
* [ ] Có đoạn giới thiệu bản thân
* [ ] Có danh sách kỹ năng
* [ ] Có danh sách sở thích
* [ ] Có ít nhất một liên kết
* [ ] Có ảnh đại diện
* [ ] Có form liên hệ
* [ ] Form có ô họ tên
* [ ] Form có ô email
* [ ] Form có ô nội dung
* [ ] Form có nút gửi

---

## 22. Kết quả cần đạt

Sau buổi học này, em cần hoàn thành được một trang HTML cá nhân cơ bản gồm:

* Văn bản
* Tiêu đề
* Đoạn giới thiệu
* Danh sách
* Liên kết
* Hình ảnh
* Form liên hệ

Đây là sản phẩm đầu tiên trong hành trình học lập trình web.
