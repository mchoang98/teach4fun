# Phụ lục: Bảng tra cứu JavaScript nhanh

| Cú pháp | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `console.log()` | In ra Console | `console.log("Hello");` |
| `let` | Tạo biến có thể thay đổi | `let age = 15;` |
| `const` | Tạo hằng số | `const name = "An";` |
| `string` | Chuỗi văn bản | `"Xin chào"` |
| `number` | Kiểu số | `15` |
| `boolean` | Đúng/sai | `true`, `false` |
| `if` | Kiểm tra điều kiện | `if (age >= 13) {}` |
| `else` | Trường hợp còn lại | `else {}` |
| `for` | Vòng lặp | `for (let i = 0; i < 5; i++) {}` |
| `array` | Mảng | `["HTML", "CSS"]` |
| `function` | Hàm | `function sayHello() {}` |
| `return` | Trả kết quả | `return a + b;` |
| `querySelector` | Chọn phần tử HTML | `document.querySelector("h1")` |
| `textContent` | Đổi nội dung chữ | `title.textContent = "Mới"` |
| `style` | Đổi CSS bằng JS | `title.style.color = "red"` |
| `classList.add` | Thêm class | `box.classList.add("active")` |
| `classList.remove` | Xóa class | `box.classList.remove("active")` |
| `classList.toggle` | Bật/tắt class | `body.classList.toggle("dark")` |
| `addEventListener` | Lắng nghe sự kiện | `btn.addEventListener("click", ...)` |
| `value` | Lấy giá trị input | `nameInput.value` |
| `preventDefault` | Chặn form tải lại trang | `event.preventDefault()` |

---

# Các lỗi JavaScript thường gặp

## 1. Gõ sai tên biến

Sai:

```js
let fullName = "An";
console.log(fullname);
```

Đúng:

```js
let fullName = "An";
console.log(fullName);
```

JavaScript phân biệt chữ hoa và chữ thường.

## 2. Quên dấu nháy khi viết chuỗi

Sai:

```js
let name = An;
```

Đúng:

```js
let name = "An";
```

## 3. Quên gắn file JavaScript

Sai:

```html
<body>
    <h1>Xin chào</h1>
</body>
```

Đúng:

```html
<body>
    <h1>Xin chào</h1>

    <script src="script.js"></script>
</body>
```

## 4. Chọn sai id hoặc class

HTML:

```html
<p id="intro-text">Xin chào</p>
```

JS đúng:

```js
document.querySelector("#intro-text");
```

## 5. Quên dấu chấm khi chọn class

HTML:

```html
<p class="intro">Xin chào</p>
```

JS đúng:

```js
document.querySelector(".intro");
```

## 6. Form bị tải lại trang

Cần thêm:

```js
event.preventDefault();
```

## 7. Quên `.value` khi lấy dữ liệu input

Sai:

```js
let name = nameInput;
```

Đúng:

```js
let name = nameInput.value;
```

## 8. Nút bấm không hoạt động

Kiểm tra đã viết đúng chưa:

```js
button.addEventListener("click", function() {
    console.log("Đã bấm");
});
```

---

# Gợi ý lộ trình sau Chương 3

Sau khi học xong JavaScript cơ bản, học viên có thể học tiếp:

1. JavaScript DOM nâng cao
2. LocalStorage
3. Mini project Todo List
4. Fetch API
5. Làm việc với API
6. JavaScript module
7. GitHub Pages để đưa website lên mạng
8. Flask backend hoặc Node.js backend cơ bản
