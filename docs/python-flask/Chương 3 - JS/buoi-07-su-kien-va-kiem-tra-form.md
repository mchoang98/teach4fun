#  Buổi 7: Sự kiện và kiểm tra form

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu sự kiện là gì.
- Biết xử lý sự kiện `click`.
- Biết xử lý sự kiện `submit`.
- Biết lấy giá trị từ ô input.
- Biết kiểm tra form đơn giản.
- Biết hiển thị thông báo lỗi hoặc thành công.

## 2. Kiến thức chính

Sự kiện là hành động xảy ra trên website.

Ví dụ:

- Người dùng bấm nút.
- Người dùng nhập chữ.
- Người dùng gửi form.
- Người dùng đưa chuột vào phần tử.

Lắng nghe sự kiện:

```js
button.addEventListener("click", function() {
    console.log("Bạn vừa bấm nút");
});
```

Lấy giá trị input:

```js
let name = nameInput.value;
```

Ngăn form tải lại trang:

```js
event.preventDefault();
```

## 3. Giải thích dễ hiểu

Website có tương tác nghĩa là khi người dùng làm gì đó, website sẽ phản hồi.

Ví dụ:

```text
Người dùng bấm nút → Website đổi nội dung
Người dùng gửi form → Website kiểm tra dữ liệu
Người dùng nhập thiếu tên → Website báo lỗi
```

JavaScript xử lý các hành động này bằng sự kiện.

### Sự kiện click

```js
button.addEventListener("click", function() {
    console.log("Nút đã được bấm");
});
```

### Sự kiện submit

Dùng khi người dùng gửi form.

```js
form.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

`event.preventDefault()` giúp trang không bị tải lại sau khi gửi form.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`JavaScript event listener diagram`

- Vị trí chèn:  
Sau phần giải thích sự kiện là hành động của người dùng.

- Chú thích:  
Event listener giúp JavaScript phản hồi khi người dùng thao tác trên website.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Form JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Form liên hệ</h1>

    <form id="contact-form">
        <label>Họ tên</label>
        <input type="text" id="name-input" placeholder="Nhập họ tên">

        <label>Email</label>
        <input type="email" id="email-input" placeholder="Nhập email">

        <button type="submit">Gửi liên hệ</button>
    </form>

    <p id="message"></p>

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

form {
    background-color: white;
    padding: 24px;
    border-radius: 12px;
    max-width: 400px;
    border: 1px solid #e5e7eb;
}

label {
    display: block;
    margin-top: 12px;
    margin-bottom: 6px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 8px;
}

button {
    margin-top: 16px;
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
}

#message {
    font-weight: bold;
}
```

File `script.js`:

```js
let form = document.querySelector("#contact-form");
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let message = document.querySelector("#message");

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

### Bài 1: Tạo nút bấm

HTML:

```html
<button id="hello-btn">Bấm vào tôi</button>
```

JS:

```js
let button = document.querySelector("#hello-btn");

button.addEventListener("click", function() {
    console.log("Xin chào");
});
```

### Bài 2: Tạo form liên hệ

Form gồm:

- Họ tên
- Email
- Nút gửi

### Bài 3: Lấy giá trị input

```js
let name = nameInput.value;
console.log(name);
```

### Bài 4: Kiểm tra dữ liệu rỗng

```js
if (name === "") {
    message.textContent = "Vui lòng nhập họ tên";
}
```

### Bài 5: Hiển thị thông báo thành công

Nếu nhập đủ thông tin:

```js
message.textContent = "Gửi thành công";
message.style.color = "green";
```

## 7. Lỗi thường gặp

### Lỗi 1: Form bị tải lại trang

Cần thêm:

```js
event.preventDefault();
```

### Lỗi 2: Chọn sai id input

HTML:

```html
<input id="name-input">
```

JS phải là:

```js
document.querySelector("#name-input");
```

### Lỗi 3: Quên `.value`

Sai:

```js
let name = nameInput;
```

Đúng:

```js
let name = nameInput.value;
```

### Lỗi 4: Gõ sai `addEventListener`

Sai:

```js
button.addeventlistener(...)
```

Đúng:

```js
button.addEventListener(...)
```

## 8. Bài tập về nhà

Tạo form đăng ký đơn giản gồm:

- Họ tên
- Tuổi
- Email

Yêu cầu kiểm tra:

- Nếu họ tên rỗng, báo lỗi.
- Nếu email rỗng, báo lỗi.
- Nếu tuổi nhỏ hơn 10, báo “Tuổi chưa phù hợp”.
- Nếu hợp lệ, báo “Đăng ký thành công”.

## 9. Checklist cuối buổi

- [ ] Em hiểu sự kiện là gì.
- [ ] Em biết dùng `addEventListener`.
- [ ] Em xử lý được sự kiện click.
- [ ] Em xử lý được sự kiện submit.
- [ ] Em biết dùng `event.preventDefault()`.
- [ ] Em biết lấy giá trị input bằng `.value`.
- [ ] Em biết kiểm tra dữ liệu rỗng.
- [ ] Em hiển thị được thông báo lỗi hoặc thành công.

## 10. Kết quả cần đạt

Kết thúc buổi này, em tạo được form liên hệ có kiểm tra dữ liệu bằng JavaScript.
