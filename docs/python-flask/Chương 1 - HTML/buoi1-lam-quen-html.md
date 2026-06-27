# Bài giảng Buổi 1: Làm quen với HTML

## 1. Mục tiêu buổi học

Sau buổi học này, học viên có thể:

* Hiểu HTML là gì.
* Biết vai trò của HTML trong một website.
* Tạo được file `index.html`.
* Viết được trang web đầu tiên có tiêu đề và đoạn văn.
* Mở file HTML bằng trình duyệt.

---

## 2. HTML là gì?

HTML là viết tắt của **HyperText Markup Language**.

Có thể hiểu đơn giản:

> HTML là ngôn ngữ dùng để tạo cấu trúc nội dung cho trang web.

Một trang web thường có nhiều thành phần như:

* Tiêu đề
* Đoạn văn
* Hình ảnh
* Danh sách
* Liên kết
* Form nhập thông tin
* Bảng dữ liệu

HTML giúp trình duyệt hiểu được phần nào là tiêu đề, phần nào là đoạn văn, phần nào là hình ảnh, phần nào là liên kết.

Ví dụ:

```html
<h1>Đây là tiêu đề</h1>
<p>Đây là một đoạn văn.</p>
```

Trong ví dụ trên:

* `h1` dùng để tạo tiêu đề lớn.
* `p` dùng để tạo đoạn văn.

---

## 3. Website hoạt động như thế nào?

Khi em mở một trang web, trình duyệt như Chrome, Edge hoặc Firefox sẽ đọc file HTML và hiển thị nội dung ra màn hình.

Ví dụ:

```html
<h1>Xin chào</h1>
<p>Tôi đang học HTML.</p>
```

Trình duyệt sẽ hiển thị thành:

# Xin chào

Tôi đang học HTML.

---

## 4. Hình minh họa nên chèn

### Hình 1: Cấu trúc cơ bản của một file HTML

Gợi ý tìm trên Google:

```text
HTML document structure diagram
```

Hoặc:

```text
basic HTML structure html head body
```

Chèn hình vào tài liệu bằng Markdown:

```md
![Cấu trúc cơ bản của HTML](link-hinh-anh)
```

Gợi ý chú thích dưới hình:

> Một file HTML thường gồm phần `head` chứa thông tin của trang và phần `body` chứa nội dung hiển thị trên trình duyệt.

---

## 5. Cấu trúc cơ bản của một file HTML

Một file HTML cơ bản thường có dạng như sau:

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

Giải thích từng phần:

### `<!DOCTYPE html>`

Dòng này cho trình duyệt biết đây là file HTML phiên bản hiện đại.

### `<html>`

Đây là thẻ bao ngoài toàn bộ trang HTML.

### `<head>`

Phần này chứa thông tin của trang web.

Thông tin trong `head` thường không hiển thị trực tiếp trên màn hình.

### `<title>`

Đây là tiêu đề xuất hiện trên tab trình duyệt.

Ví dụ:

```html
<title>Trang web đầu tiên</title>
```

### `<body>`

Phần này chứa nội dung sẽ hiển thị ra màn hình.

Ví dụ:

```html
<body>
    <h1>Xin chào</h1>
    <p>Tôi đang học HTML.</p>
</body>
```

### `<h1>`

Thẻ `h1` dùng để tạo tiêu đề chính của trang.

### `<p>`

Thẻ `p` dùng để tạo đoạn văn.

---

## 6. Chuẩn bị công cụ

Trước khi viết HTML, em cần chuẩn bị:

* Visual Studio Code
* Trình duyệt Chrome hoặc Edge
* Một thư mục để lưu bài học

Ví dụ tạo thư mục:

```text
html-buoi-1
```

Bên trong thư mục này, tạo file:

```text
index.html
```

---

## 7. Thực hành: Tạo trang web đầu tiên

### Bước 1: Tạo file `index.html`

Mở Visual Studio Code.

Tạo file mới tên:

```text
index.html
```

Lưu ý:

* Tên file nên viết thường.
* Phần mở rộng phải là `.html`.
* Không đặt tên là `index.html.txt`.

---

### Bước 2: Viết code HTML đầu tiên

Copy đoạn code sau vào file `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào, tôi là Phú</h1>
    <p>Tôi đang học lập trình Fullstack Web.</p>
</body>
</html>
```

---

### Bước 3: Mở file bằng trình duyệt

Có thể mở bằng một trong các cách sau:

Cách 1:

* Click chuột phải vào file `index.html`
* Chọn `Open With`
* Chọn Chrome hoặc Edge

Cách 2:

* Kéo file `index.html` thả vào trình duyệt

Nếu làm đúng, em sẽ thấy nội dung:

```text
Xin chào, tôi là Phú
Tôi đang học lập trình Fullstack Web.
```

---

## 8. Thực hành cá nhân

Hãy sửa lại nội dung trong file HTML thành thông tin của chính em.

Yêu cầu:

* Tiêu đề trang là: `Trang giới thiệu của tôi`
* Có một tiêu đề chính bằng thẻ `h1`
* Có một đoạn văn giới thiệu bản thân bằng thẻ `p`

Ví dụ:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trang giới thiệu của tôi</title>
</head>
<body>
    <h1>Xin chào, tôi là Nguyễn Văn A</h1>
    <p>Tôi 15 tuổi. Tôi đang học lập trình web và muốn tự tạo website cá nhân.</p>
</body>
</html>
```

---

## 9. Bài tập trên lớp

Tạo trang HTML giới thiệu bản thân với nội dung sau:

* Họ tên
* Tuổi
* Trường học hoặc nghề nghiệp
* Sở thích
* Lý do muốn học lập trình web

Gợi ý code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Giới thiệu bản thân</title>
</head>
<body>
    <h1>Nguyễn Văn A</h1>

    <p>Tôi năm nay 15 tuổi.</p>

    <p>Tôi đang học lập trình web vì muốn tự tạo ra website của riêng mình.</p>

    <p>Sở thích của tôi là đọc sách, chơi game và tìm hiểu công nghệ.</p>
</body>
</html>
```

---

## 10. Lỗi thường gặp

### Lỗi 1: File không chạy được trên trình duyệt

Nguyên nhân có thể là file bị đặt sai tên.

Sai:

```text
index.html.txt
```

Đúng:

```text
index.html
```

---

### Lỗi 2: Quên đóng thẻ

Sai:

```html
<h1>Xin chào
<p>Tôi đang học HTML
```

Đúng:

```html
<h1>Xin chào</h1>
<p>Tôi đang học HTML.</p>
```

---

### Lỗi 3: Viết nội dung ngoài thẻ `body`

Sai:

```html
<html>
<head>
    <title>Trang web</title>
</head>
Xin chào
<body>
</body>
</html>
```

Đúng:

```html
<html>
<head>
    <title>Trang web</title>
</head>
<body>
    Xin chào
</body>
</html>
```

---

## 11. Bài tập về nhà

Tạo file `index.html` giới thiệu bản thân.

Trang cần có:

* Họ tên
* Tuổi
* Nghề nghiệp hoặc trường học
* Sở thích
* Một đoạn nói về mục tiêu học lập trình

Yêu cầu kỹ thuật:

* Có thẻ `html`
* Có thẻ `head`
* Có thẻ `title`
* Có thẻ `body`
* Có ít nhất một thẻ `h1`
* Có ít nhất ba thẻ `p`

---

## 12. Kết quả cần đạt

Sau buổi học này, em cần làm được:

* Tạo file `index.html`
* Viết cấu trúc HTML cơ bản
* Hiểu vai trò của `head`, `title`, `body`
* Biết dùng `h1` để tạo tiêu đề
* Biết dùng `p` để tạo đoạn văn
* Mở được trang HTML bằng trình duyệt
