# Bài giảng Buổi 8: Hoàn thiện Portfolio có JavaScript

## 1. Mục tiêu

Sau buổi học này, em cần:

- Ôn lại JavaScript cơ bản.
- Biết kết hợp HTML, CSS và JavaScript.
- Biết thêm tương tác vào Portfolio cá nhân.
- Biết xử lý nút bấm.
- Biết kiểm tra form liên hệ.
- Hoàn thành dự án cuối Chương 3.

## 2. Kiến thức chính

Các kiến thức cần dùng:

- File `script.js`
- Biến
- Điều kiện
- Mảng
- Vòng lặp
- Hàm
- DOM
- Sự kiện
- Form validation

## 3. Giải thích dễ hiểu

Ở Chương 1, em đã tạo nội dung website bằng HTML.

Ở Chương 2, em đã làm đẹp website bằng CSS.

Ở Chương 3, em thêm JavaScript để website có tương tác.

Portfolio cuối chương nên có:

- Nút đổi lời giới thiệu.
- Nút đổi giao diện sáng/tối cơ bản.
- Danh sách kỹ năng hiển thị bằng JavaScript.
- Form liên hệ có kiểm tra dữ liệu.
- Thông báo khi gửi form thành công.

Quy trình làm:

```text
Bước 1: Chuẩn bị lại portfolio HTML/CSS
Bước 2: Tạo file script.js
Bước 3: Gắn script.js vào index.html
Bước 4: Chọn phần tử bằng DOM
Bước 5: Thêm sự kiện click
Bước 6: Thêm kiểm tra form
Bước 7: Kiểm tra lỗi trên Console
Bước 8: Hoàn thiện sản phẩm
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`interactive portfolio website JavaScript example`

- Vị trí chèn:  
Sau phần giới thiệu dự án Portfolio có JavaScript.

- Chú thích:  
JavaScript giúp Portfolio cá nhân có các tương tác như bấm nút, đổi nội dung và kiểm tra form.

## 5. Ví dụ code

Cấu trúc thư mục:

```text
portfolio-js
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
    <title>Portfolio JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <h1 id="main-title">Portfolio của An</h1>
        <button id="theme-btn">Đổi giao diện</button>
    </header>

    <main class="container">
        <section class="card">
            <h2>Giới thiệu</h2>
            <p id="intro-text">Tôi đang học lập trình web.</p>
            <button id="change-intro-btn">Đổi giới thiệu</button>
        </section>

        <section class="card">
            <h2>Kỹ năng</h2>
            <ul id="skill-list"></ul>
        </section>

        <section class="card">
            <h2>Liên hệ</h2>

            <form id="contact-form">
                <label>Họ tên</label>
                <input type="text" id="name-input">

                <label>Email</label>
                <input type="email" id="email-input">

                <button type="submit">Gửi</button>
            </form>

            <p id="message"></p>
        </section>
    </main>

    <script src="script.js"></script>
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

button {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 6px;
    margin-bottom: 12px;
    border: 1px solid #dddddd;
    border-radius: 8px;
}

label {
    display: block;
    font-weight: bold;
}

.dark {
    background-color: #111827;
    color: white;
}

.dark .card {
    background-color: #1f2937;
    border-color: #374151;
}
```

File `script.js`:

```js
let introText = document.querySelector("#intro-text");
let changeIntroBtn = document.querySelector("#change-intro-btn");
let themeBtn = document.querySelector("#theme-btn");

let skillList = document.querySelector("#skill-list");

let form = document.querySelector("#contact-form");
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let message = document.querySelector("#message");

changeIntroBtn.addEventListener("click", function() {
    introText.textContent = "Tôi muốn trở thành lập trình viên web trong tương lai.";
});

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

let skills = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li");
    li.textContent = skills[i];
    skillList.appendChild(li);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;

    if (name === "" || email === "") {
        message.textContent = "Vui lòng nhập đầy đủ họ tên và email.";
        message.style.color = "red";
    } else {
        message.textContent = "Gửi liên hệ thành công!";
        message.style.color = "green";
    }
});
```

## 6. Thực hành trên lớp

### Bài 1: Gắn JavaScript vào Portfolio

Thêm trước `</body>`:

```html
<script src="script.js"></script>
```

### Bài 2: Thêm nút đổi giới thiệu

HTML:

```html
<p id="intro-text">Tôi đang học lập trình web.</p>
<button id="change-intro-btn">Đổi giới thiệu</button>
```

JS:

```js
changeIntroBtn.addEventListener("click", function() {
    introText.textContent = "Tôi yêu thích lập trình web.";
});
```

### Bài 3: Thêm danh sách kỹ năng bằng JavaScript

```js
let skills = ["HTML", "CSS", "JavaScript"];
```

Dùng vòng lặp để hiển thị vào `<ul>`.

### Bài 4: Thêm nút đổi giao diện

```js
document.body.classList.toggle("dark");
```

### Bài 5: Kiểm tra form liên hệ

Nếu họ tên hoặc email rỗng thì báo lỗi.  
Nếu nhập đủ thì báo thành công.

## 7. Lỗi thường gặp

### Lỗi 1: JavaScript không chạy

Kiểm tra:

```html
<script src="script.js"></script>
```

Và kiểm tra file `script.js` có đúng tên không.

### Lỗi 2: querySelector trả về null

Kiểm tra id hoặc class trong HTML có đúng không.

Ví dụ HTML:

```html
<p id="intro-text">
```

JS phải là:

```js
document.querySelector("#intro-text");
```

### Lỗi 3: Nút bấm không hoạt động

Kiểm tra đã có:

```js
addEventListener("click", function() {
    ...
});
```

### Lỗi 4: Form gửi xong bị tải lại trang

Cần có:

```js
event.preventDefault();
```

### Lỗi 5: Danh sách kỹ năng không hiện

Kiểm tra đã chọn đúng `ul` chưa:

```js
let skillList = document.querySelector("#skill-list");
```

## 8. Bài tập về nhà

Hoàn thiện Portfolio cá nhân có JavaScript.

Yêu cầu:

- Có file `index.html`.
- Có file `style.css`.
- Có file `script.js`.
- Có nút đổi nội dung giới thiệu.
- Có nút đổi giao diện sáng/tối cơ bản.
- Có danh sách kỹ năng hiển thị bằng JavaScript.
- Có form liên hệ.
- Form phải kiểm tra dữ liệu trước khi gửi.
- Có thông báo lỗi hoặc thành công.
- Không có lỗi trong Console.

Chuẩn bị trình bày sản phẩm trong 2-3 phút theo mẫu:

```text
Xin chào thầy/cô và các bạn.
Đây là Portfolio cá nhân có JavaScript của em.
Em đã dùng JavaScript để tạo nút đổi nội dung, đổi giao diện, hiển thị danh sách kỹ năng và kiểm tra form liên hệ.
Phần em thích nhất là ...
Phần em thấy khó nhất là ...
```

## 9. Checklist cuối buổi

- [ ] Em có đủ file `index.html`.
- [ ] Em có đủ file `style.css`.
- [ ] Em có đủ file `script.js`.
- [ ] Em gắn JavaScript đúng vào HTML.
- [ ] Em có nút đổi nội dung.
- [ ] Em có nút đổi giao diện.
- [ ] Em hiển thị danh sách bằng JavaScript.
- [ ] Em có form liên hệ.
- [ ] Em kiểm tra được form bằng JavaScript.
- [ ] Website không có lỗi trong Console.
- [ ] Em có thể trình bày sản phẩm trong 2-3 phút.

## 10. Kết quả cần đạt

Kết thúc buổi này, em hoàn thành Portfolio cá nhân có tương tác bằng JavaScript.

Sản phẩm cuối chương:

```text
portfolio-js
├── index.html
├── style.css
└── script.js
```
