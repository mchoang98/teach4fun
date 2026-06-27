#  Buổi 6: DOM cơ bản

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu DOM là gì.
- Biết JavaScript có thể chọn phần tử HTML.
- Biết dùng `document.querySelector`.
- Biết thay đổi nội dung bằng `textContent`.
- Biết thay đổi CSS bằng JavaScript.
- Biết thêm/xóa class bằng `classList`.
- Tạo được nút đổi nội dung hoặc đổi màu.

## 2. Kiến thức chính

DOM là cách JavaScript nhìn thấy và thao tác với HTML.

Chọn phần tử:

```js
let title = document.querySelector("h1");
```

Đổi nội dung:

```js
title.textContent = "Nội dung mới";
```

Đổi CSS trực tiếp:

```js
title.style.color = "red";
```

Thêm class:

```js
title.classList.add("active");
```

Xóa class:

```js
title.classList.remove("active");
```

Bật/tắt class:

```js
title.classList.toggle("active");
```

## 3. Giải thích dễ hiểu

HTML trên trang web gồm nhiều phần tử.

Ví dụ:

```html
<h1>Xin chào</h1>
<p>Tôi đang học JavaScript.</p>
<button>Đổi nội dung</button>
```

JavaScript có thể chọn các phần tử này và thay đổi chúng.

Ví dụ chọn tiêu đề:

```js
let title = document.querySelector("h1");
```

Đổi nội dung tiêu đề:

```js
title.textContent = "Xin chào DOM";
```

Nhờ DOM, JavaScript có thể làm website thay đổi mà không cần sửa trực tiếp file HTML.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`JavaScript DOM tree illustration`

- Vị trí chèn:  
Sau phần giải thích DOM là cách JavaScript nhìn thấy HTML.

- Chú thích:  
DOM biểu diễn cấu trúc HTML để JavaScript có thể chọn và thay đổi phần tử.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM cơ bản</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-title">Portfolio của An</h1>
    <p class="intro">Tôi đang học JavaScript DOM.</p>

    <button id="change-title-btn">Đổi tiêu đề</button>
    <button id="change-color-btn">Đổi màu</button>

    <script src="script.js"></script>
</body>
</html>
```

File `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    padding: 20px;
}

h1 {
    color: #2563eb;
}

button {
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 8px;
}

.highlight {
    color: #d97706;
}
```

File `script.js`:

```js
let title = document.querySelector("#main-title");
let intro = document.querySelector(".intro");

title.textContent = "Xin chào JavaScript DOM";
intro.textContent = "Nội dung này đã được thay đổi bằng JavaScript.";

title.style.color = "green";
```

## 6. Thực hành trên lớp

### Bài 1: Chọn tiêu đề

```js
let title = document.querySelector("h1");
console.log(title);
```

### Bài 2: Đổi nội dung tiêu đề

```js
title.textContent = "Tiêu đề mới";
```

### Bài 3: Đổi màu tiêu đề

```js
title.style.color = "red";
```

### Bài 4: Chọn đoạn văn bằng class

```js
let intro = document.querySelector(".intro");
intro.textContent = "Tôi đã biết chọn phần tử bằng JavaScript.";
```

### Bài 5: Thêm class bằng JavaScript

```js
title.classList.add("highlight");
```

## 7. Lỗi thường gặp

### Lỗi 1: Chọn sai selector

HTML:

```html
<h1 id="main-title">Xin chào</h1>
```

Sai:

```js
document.querySelector("main-title");
```

Đúng:

```js
document.querySelector("#main-title");
```

### Lỗi 2: Quên dấu chấm khi chọn class

HTML:

```html
<p class="intro">Xin chào</p>
```

Đúng:

```js
document.querySelector(".intro");
```

### Lỗi 3: Script chạy trước HTML

Nên đặt script trước `</body>`:

```html
<script src="script.js"></script>
</body>
```

### Lỗi 4: Gõ sai `textContent`

Sai:

```js
title.textcontent = "Mới";
```

Đúng:

```js
title.textContent = "Mới";
```

## 8. Bài tập về nhà

Tạo trang có:

- Một tiêu đề
- Một đoạn giới thiệu
- Một nút bấm

Dùng JavaScript để:

- Đổi nội dung tiêu đề.
- Đổi nội dung đoạn văn.
- Đổi màu tiêu đề.
- Thêm class cho đoạn văn.

## 9. Checklist cuối buổi

- [ ] Em hiểu DOM là gì.
- [ ] Em biết dùng `document.querySelector`.
- [ ] Em biết chọn bằng tag.
- [ ] Em biết chọn bằng class.
- [ ] Em biết chọn bằng id.
- [ ] Em biết đổi `textContent`.
- [ ] Em biết đổi `style`.
- [ ] Em biết dùng `classList`.

## 10. Kết quả cần đạt

Kết thúc buổi này, em biết dùng JavaScript để thay đổi nội dung và giao diện của HTML.
