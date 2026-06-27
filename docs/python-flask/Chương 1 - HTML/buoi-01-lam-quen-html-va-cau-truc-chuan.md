# Bài giảng Buổi 1: Làm quen HTML và cấu trúc chuẩn

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu HTML là gì.
- Biết vai trò của HTML trong website.
- Biết tạo file `index.html`.
- Biết cấu trúc chuẩn của một file HTML.
- Biết dùng các thẻ `html`, `head`, `body`, `title`, `h1`, `p`.
- Biết mở file HTML bằng trình duyệt.

## 2. Kiến thức chính

HTML là ngôn ngữ đánh dấu dùng để tạo cấu trúc nội dung website.

Một file HTML chuẩn thường có:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào HTML</h1>
    <p>Tôi đang học lập trình web.</p>
</body>
</html>
```

## 3. Giải thích dễ hiểu

HTML giúp trình duyệt hiểu trang web có những nội dung nào.

Có thể hiểu:

```text
HTML = bộ khung nội dung của website
```

Ví dụ:

- `h1` dùng cho tiêu đề chính.
- `p` dùng cho đoạn văn.
- `title` là tiêu đề hiển thị trên tab trình duyệt.
- `body` là phần nội dung người dùng nhìn thấy.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML document structure diagram`

- Vị trí chèn:  
Sau phần cấu trúc HTML chuẩn.

- Chú thích:  
Một file HTML gồm phần khai báo, phần head và phần body.

## 5. Ví dụ code

Tạo file `index.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào, tôi là An</h1>
    <p>Tôi đang học HTML để tạo website đầu tiên.</p>
</body>
</html>
```

## 6. Thực hành trên lớp

### Bài 1: Tạo thư mục

```text
html-buoi-1
```

### Bài 2: Tạo file

```text
index.html
```

### Bài 3: Viết cấu trúc HTML chuẩn

Gõ lại cấu trúc HTML chuẩn, không copy nếu đang luyện thao tác.

### Bài 4: Mở bằng trình duyệt

Bấm chuột phải vào file `index.html`, chọn mở bằng Chrome hoặc Edge.

## 7. Lỗi thường gặp

### Lỗi 1: Đặt sai tên file

Nên đặt:

```text
index.html
```

Không đặt:

```text
index.txt
```

### Lỗi 2: Quên đóng thẻ

Sai:

```html
<h1>Xin chào
```

Đúng:

```html
<h1>Xin chào</h1>
```

### Lỗi 3: Viết nội dung ngoài thẻ body

Nội dung người dùng nhìn thấy nên đặt trong:

```html
<body>
    Nội dung ở đây
</body>
```

## 8. Bài tập về nhà

Tạo trang HTML giới thiệu bản thân gồm:

- Họ tên.
- Tuổi.
- Trường học hoặc nghề nghiệp.
- Một đoạn giới thiệu ngắn.
- Mục tiêu học lập trình web.

## 9. Checklist cuối buổi

- [ ] Em hiểu HTML là gì.
- [ ] Em tạo được file `index.html`.
- [ ] Em biết cấu trúc HTML chuẩn.
- [ ] Em biết dùng `title`.
- [ ] Em biết dùng `h1`.
- [ ] Em biết dùng `p`.
- [ ] Em mở được file bằng trình duyệt.

## 10. Kết quả cần đạt

Kết thúc buổi này, em tạo được trang HTML đầu tiên chạy được trên trình duyệt.
