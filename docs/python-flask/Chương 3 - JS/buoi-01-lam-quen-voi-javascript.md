# Bài giảng Buổi 1: Làm quen với JavaScript

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu JavaScript dùng để làm gì.
- Phân biệt được HTML, CSS và JavaScript.
- Biết cách gắn JavaScript vào HTML.
- Biết tạo file `script.js`.
- Biết dùng `console.log()` để kiểm tra chương trình.
- Biết mở DevTools trên trình duyệt.

## 2. Kiến thức chính

JavaScript là ngôn ngữ lập trình giúp website có tương tác.

Ví dụ JavaScript có thể làm:

- Bấm nút để đổi nội dung.
- Kiểm tra form có nhập đủ thông tin chưa.
- Hiển thị thông báo.
- Tạo menu mở/đóng.
- Tạo danh sách động.
- Thay đổi giao diện khi người dùng thao tác.

Cách gắn JavaScript vào HTML:

```html
<script src="script.js"></script>
```

Thông thường nên đặt trước thẻ đóng `</body>`.

## 3. Giải thích dễ hiểu

Có thể hiểu:

```text
HTML       = Nội dung
CSS        = Giao diện
JavaScript = Hành động
```

Ví dụ:

```html
<button>Bấm vào tôi</button>
```

HTML tạo ra nút bấm.

```css
button {
    background-color: blue;
    color: white;
}
```

CSS làm nút đẹp hơn.

```js
console.log("Bạn đã bấm nút");
```

JavaScript giúp website xử lý hành động.

JavaScript không chỉ để trang web đẹp hơn, mà để trang web có thể phản hồi lại người dùng.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML CSS JavaScript roles illustration`

- Vị trí chèn:  
Sau phần giải thích HTML, CSS và JavaScript.

- Chú thích:  
HTML tạo nội dung, CSS tạo giao diện, JavaScript tạo tương tác.

## 5. Ví dụ code

Cấu trúc thư mục:

```text
js-buoi-1
├── index.html
├── style.css
└── script.js
```

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JavaScript đầu tiên</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Xin chào JavaScript</h1>
    <p>Tôi đang học cách làm website có tương tác.</p>

    <script src="script.js"></script>
</body>
</html>
```

File `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #1f2937;
    padding: 20px;
}

h1 {
    color: #2563eb;
}
```

File `script.js`:

```js
console.log("Xin chào JavaScript!");
console.log("File script.js đã được kết nối thành công.");
```

## 6. Thực hành trên lớp

### Bài 1: Tạo thư mục dự án

Tạo thư mục:

```text
js-buoi-1
```

Bên trong có:

```text
index.html
style.css
script.js
```

### Bài 2: Gắn JavaScript vào HTML

Trong file `index.html`, thêm dòng này trước `</body>`:

```html
<script src="script.js"></script>
```

### Bài 3: In thông báo ra Console

Trong file `script.js`, viết:

```js
console.log("Tôi đang học JavaScript");
```

### Bài 4: Mở DevTools

Trên trình duyệt Chrome:

```text
Chuột phải → Inspect / Kiểm tra → Console
```

Quan sát dòng chữ đã được in ra.

## 7. Lỗi thường gặp

### Lỗi 1: Gõ sai tên file JavaScript

Sai:

```html
<script src="scripts.js"></script>
```

Đúng:

```html
<script src="script.js"></script>
```

### Lỗi 2: Không thấy kết quả trên trang web

`console.log()` không hiển thị trực tiếp trên trang web.  
Nó hiển thị trong tab Console của DevTools.

### Lỗi 3: Đặt thẻ script sai vị trí

Nên đặt trước `</body>`:

```html
<script src="script.js"></script>
</body>
```

### Lỗi 4: Quên lưu file

Sau khi sửa code, cần lưu file rồi tải lại trình duyệt.

## 8. Bài tập về nhà

Tạo trang giới thiệu bản thân có:

- File `index.html`
- File `style.css`
- File `script.js`

Trong `script.js`, in ra Console:

```js
console.log("Họ tên của tôi là ...");
console.log("Tôi đang học JavaScript");
console.log("Mục tiêu của tôi là tạo website có tương tác");
```

## 9. Checklist cuối buổi

- [ ] Em hiểu JavaScript dùng để làm gì.
- [ ] Em phân biệt được HTML, CSS và JavaScript.
- [ ] Em tạo được file `script.js`.
- [ ] Em gắn được JS vào HTML.
- [ ] Em biết dùng `console.log()`.
- [ ] Em mở được DevTools.
- [ ] Em xem được kết quả trong Console.
- [ ] Em sửa được lỗi sai tên file JS.

## 10. Kết quả cần đạt

Kết thúc buổi này, em có một website HTML/CSS đơn giản và đã kết nối được với file JavaScript riêng.
