# CHƯƠNG 2: CSS CƠ BẢN

*Dành cho học viên mới học lập trình web*

> **Sản phẩm cuối chương:** Học viên nâng cấp website cá nhân từ Chương 1 thành một trang web có màu sắc, bố cục, font chữ, khoảng cách, nút bấm, form đẹp và responsive cơ bản.

| Thông tin | Nội dung |
| --- | --- |
| Chương | Chương 2 - CSS cơ bản |
| Số buổi đề xuất | 8 buổi |
| Thời lượng mỗi buổi | 2-3 giờ |
| Điều kiện trước khi học | Đã biết HTML cơ bản |
| Dự án cuối chương | Portfolio cá nhân có CSS |

---

## Mục tiêu Chương 2

Chương 2 giúp học viên chuyển từ trang HTML thô sang một website có giao diện đẹp, dễ đọc và có bố cục rõ ràng. Học viên sẽ học CSS theo hướng thực hành, mỗi buổi đều cải tiến dần website cá nhân đã tạo ở Chương 1.

| Nội dung | Mục tiêu |
| --- | --- |
| Kiến thức chính | Hiểu CSS, selector, màu sắc, font chữ, box model, hình ảnh, nút bấm, Flexbox và responsive cơ bản |
| Kỹ năng thực hành | Tạo file CSS riêng, liên kết với HTML, làm đẹp website cá nhân |
| Sản phẩm cuối chương | Portfolio cá nhân có giao diện đẹp và xem được trên điện thoại |
| Thời lượng đề xuất | 8 buổi học, mỗi buổi 2-3 giờ |

## Kế hoạch học Chương 2

| Buổi | Chủ đề | Nội dung học | Sản phẩm nhỏ |
| --- | --- | --- | --- |
| Buổi 1 | Làm quen với CSS | CSS là gì và cách gắn CSS vào HTML | Trang HTML có màu chữ, màu nền và file CSS riêng |
| Buổi 2 | Selector và cách chọn phần tử | Chọn đúng phần tử để định dạng | Trang cá nhân có nhiều phần được định dạng bằng class và id |
| Buổi 3 | Màu sắc, font chữ và căn chỉnh văn bản | Làm cho chữ dễ đọc và đẹp hơn | Trang giới thiệu có typography rõ ràng và dễ đọc |
| Buổi 4 | Box Model: margin, padding, border | Hiểu khoảng cách và khung của phần tử | Card giới thiệu bản thân có nền trắng, bo góc và khoảng cách đẹp |
| Buổi 5 | Làm đẹp hình ảnh, liên kết và nút bấm | Tạo giao diện thân thiện hơn | Website có ảnh đại diện tròn, liên kết và nút bấm đẹp |
| Buổi 6 | Bố cục với Flexbox | Sắp xếp nội dung theo hàng và cột | Trang có bố cục nhiều card nằm cùng hàng trên màn hình rộng |
| Buổi 7 | Responsive cơ bản | Làm website xem tốt trên điện thoại | Website cá nhân xem tốt trên máy tính và điện thoại |
| Buổi 8 | Hoàn thiện giao diện Portfolio cá nhân | Tổng hợp CSS đã học | Portfolio cá nhân hoàn chỉnh có CSS |

## Sơ đồ tư duy Chương 2

```text
CSS cơ bản
├── Cách gắn CSS vào HTML
├── Selector
│   ├── Tag
│   ├── Class
│   └── ID
├── Màu sắc và chữ
├── Box Model
│   ├── margin
│   ├── padding
│   └── border
├── Hình ảnh, liên kết, nút bấm
├── Flexbox
└── Responsive
```

---

#  Buổi 1: Làm quen với CSS

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu CSS dùng để làm đẹp website.
- Phân biệt được HTML và CSS.
- Biết 3 cách thêm CSS vào HTML: inline CSS, internal CSS, external CSS.
- Tạo được file `style.css`.
- Liên kết được file CSS với file HTML.
- Đổi được màu chữ và màu nền cơ bản.

## 2. Kiến thức chính

CSS là ngôn ngữ dùng để định dạng giao diện website.

CSS có thể chỉnh:

- Màu chữ
- Màu nền
- Cỡ chữ
- Font chữ
- Khoảng cách
- Bố cục
- Nút bấm
- Hình ảnh

Một số thuộc tính học trong buổi này:

```css
color
background-color
```

Cách liên kết CSS vào HTML:

```html
<link rel="stylesheet" href="style.css">
```

## 3. Giải thích dễ hiểu

HTML dùng để tạo nội dung cho website.

Ví dụ:

```html
<h1>Xin chào</h1>
<p>Tôi đang học lập trình web.</p>
```

CSS dùng để làm cho nội dung đó đẹp hơn.

Ví dụ:

```css
h1 {
    color: blue;
}
```

Có thể hiểu đơn giản:

```text
HTML = nội dung của website
CSS  = giao diện của website
```

Nếu HTML giống như bộ xương của trang web, thì CSS giống như quần áo, màu sắc và cách trang trí.

### 3 cách viết CSS

#### Cách 1: Inline CSS

Viết trực tiếp trong thẻ HTML.

```html
<h1 style="color: blue;">Xin chào CSS</h1>
```

Cách này dễ thử nhanh nhưng không nên dùng nhiều vì HTML sẽ bị rối.

#### Cách 2: Internal CSS

Viết CSS trong thẻ `<style>`.

```html
<style>
    h1 {
        color: blue;
    }
</style>
```

Cách này phù hợp với trang nhỏ.

#### Cách 3: External CSS

Viết CSS trong file riêng, ví dụ `style.css`.

```html
<link rel="stylesheet" href="style.css">
```

Đây là cách nên dùng vì code gọn, dễ quản lý và dễ sửa.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML CSS difference illustration`

- Vị trí chèn:  
Sau phần giải thích “HTML = nội dung, CSS = giao diện”.

- Chú thích:  
HTML tạo nội dung cho website, CSS giúp nội dung đó có màu sắc và giao diện đẹp hơn.

## 5. Ví dụ code

Tạo thư mục:

```text
css-buoi-1
├── index.html
└── style.css
```

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CSS đầu tiên</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Xin chào CSS</h1>
    <p>Tôi đang học cách làm đẹp website.</p>
    <p>CSS giúp website dễ nhìn hơn.</p>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: lightyellow;
}

h1 {
    color: blue;
}

p {
    color: gray;
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo thư mục dự án

Tạo thư mục tên:

```text
css-buoi-1
```

Bên trong tạo 2 file:

```text
index.html
style.css
```

### Bài 2: Viết nội dung HTML

Trong file `index.html`, tạo trang giới thiệu ngắn gồm:

- Tiêu đề chính
- 2 đoạn văn
- 1 danh sách sở thích

### Bài 3: Gắn CSS vào HTML

Trong thẻ `<head>`, thêm:

```html
<link rel="stylesheet" href="style.css">
```

### Bài 4: Đổi màu bằng CSS

Trong file `style.css`, đổi:

- Màu nền trang
- Màu tiêu đề
- Màu đoạn văn

## 7. Lỗi thường gặp

### Lỗi 1: Quên liên kết file CSS

Sai:

```html
<head>
    <title>CSS đầu tiên</title>
</head>
```

Đúng:

```html
<head>
    <title>CSS đầu tiên</title>
    <link rel="stylesheet" href="style.css">
</head>
```

### Lỗi 2: Gõ sai tên file CSS

Nếu file tên là:

```text
style.css
```

Thì trong HTML phải viết:

```html
<link rel="stylesheet" href="style.css">
```

Không viết sai thành:

```html
<link rel="stylesheet" href="styles.css">
```

### Lỗi 3: Quên dấu chấm phẩy

Sai:

```css
h1 {
    color: blue
}
```

Đúng:

```css
h1 {
    color: blue;
}
```

## 8. Bài tập về nhà

Tạo trang giới thiệu bản thân có:

- Tiêu đề chính
- 2 đoạn văn giới thiệu
- Danh sách 3 sở thích
- Màu nền
- Màu chữ tiêu đề
- Màu chữ đoạn văn

Gợi ý HTML:

```html
<h1>Giới thiệu bản thân</h1>
<p>Xin chào, tôi tên là...</p>
<p>Tôi đang học HTML và CSS.</p>

<h2>Sở thích của tôi</h2>
<ul>
    <li>Đọc sách</li>
    <li>Chơi game</li>
    <li>Lập trình</li>
</ul>
```

## 9. Checklist cuối buổi

- [ ] Em hiểu CSS dùng để làm gì.
- [ ] Em phân biệt được HTML và CSS.
- [ ] Em biết tạo file `style.css`.
- [ ] Em biết liên kết CSS vào HTML.
- [ ] Em đổi được màu chữ.
- [ ] Em đổi được màu nền.
- [ ] Em mở được website trên trình duyệt.
- [ ] Em sửa được lỗi sai tên file CSS.

## 10. Kết quả cần đạt

Kết thúc buổi này, em có một trang HTML đơn giản đã được làm đẹp bằng CSS.

Sản phẩm cần có:

```text
css-buoi-1
├── index.html
└── style.css
```

---

#  Buổi 2: Selector và cách chọn phần tử

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu selector là gì.
- Biết chọn phần tử bằng tên thẻ HTML.
- Biết dùng class.
- Biết dùng id.
- Biết khi nào nên dùng class, khi nào nên dùng id.
- Biết dùng dấu `.` và dấu `#` trong CSS.

## 2. Kiến thức chính

Selector là cách CSS chọn đúng phần tử HTML cần định dạng.

Có 3 loại selector cơ bản:

### Tag selector

Chọn theo tên thẻ HTML.

```css
p {
    color: gray;
}
```

### Class selector

Chọn theo class.

```css
.intro {
    color: blue;
}
```

### ID selector

Chọn theo id.

```css
#main-title {
    color: darkblue;
}
```

## 3. Giải thích dễ hiểu

Khi website có nhiều phần tử, CSS cần biết em muốn làm đẹp phần nào.

Ví dụ:

```html
<p>Đây là đoạn giới thiệu.</p>
<p>Đây là đoạn sở thích.</p>
<p>Đây là đoạn kỹ năng.</p>
```

Nếu viết:

```css
p {
    color: gray;
}
```

Tất cả thẻ `<p>` sẽ đổi thành màu xám.

Nhưng nếu chỉ muốn đoạn giới thiệu có màu xanh, em cần dùng class.

```html
<p class="intro">Đây là đoạn giới thiệu.</p>
```

CSS:

```css
.intro {
    color: blue;
}
```

### Class là gì?

Class giống như một cái nhãn. Nhiều phần tử có thể dùng chung một class.

```html
<p class="intro">Tôi đang học CSS.</p>
<p class="intro">Tôi thích tạo website.</p>
```

```css
.intro {
    color: darkblue;
}
```

### ID là gì?

ID dùng cho một phần tử đặc biệt, thường không lặp lại nhiều lần trong cùng một trang.

```html
<h1 id="main-title">Trang cá nhân của An</h1>
```

```css
#main-title {
    color: darkred;
}
```

### Khi nào dùng class?

Dùng class khi muốn áp dụng cùng một kiểu cho nhiều phần tử.

Ví dụ:

- Nhiều đoạn giới thiệu
- Nhiều card
- Nhiều nút bấm

### Khi nào dùng id?

Dùng id khi phần tử đó đặc biệt và chỉ xuất hiện một lần.

Ví dụ:

- Tiêu đề chính
- Khu vực header chính

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS selector class id diagram`

- Vị trí chèn:  
Sau phần giải thích class và id.

- Chú thích:  
Class dùng dấu chấm `.`, id dùng dấu thăng `#`.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Selector trong CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-title">Trang cá nhân của An</h1>

    <p class="intro">Tôi đang học CSS.</p>
    <p class="intro">Tôi thích tạo website đẹp.</p>

    <h2>Sở thích</h2>
    <p class="hobby">Tôi thích đọc sách và chơi game.</p>

    <h2>Kỹ năng</h2>
    <p class="skill">Tôi biết HTML cơ bản.</p>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

#main-title {
    color: darkblue;
    text-align: center;
}

.intro {
    color: #444444;
    font-size: 18px;
}

.hobby {
    color: green;
}

.skill {
    color: purple;
}

p {
    line-height: 1.6;
}
```

## 6. Thực hành trên lớp

### Bài 1: Chọn bằng tên thẻ

Viết CSS:

```css
p {
    color: gray;
}
```

Quan sát tất cả đoạn văn đều đổi màu.

### Bài 2: Thêm id cho tiêu đề

HTML:

```html
<h1 id="main-title">Trang cá nhân của tôi</h1>
```

CSS:

```css
#main-title {
    color: blue;
    text-align: center;
}
```

### Bài 3: Thêm class cho đoạn giới thiệu

HTML:

```html
<p class="intro">Tôi đang học CSS.</p>
```

CSS:

```css
.intro {
    font-size: 18px;
    color: darkgreen;
}
```

### Bài 4: Tạo nhiều class

HTML:

```html
<p class="intro">Tôi là học viên mới học web.</p>
<p class="hobby">Tôi thích thiết kế website.</p>
<p class="skill">Tôi biết HTML cơ bản.</p>
```

CSS:

```css
.intro {
    color: blue;
}

.hobby {
    color: orange;
}

.skill {
    color: purple;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Quên dấu chấm khi chọn class

HTML:

```html
<p class="intro">Xin chào</p>
```

Sai:

```css
intro {
    color: blue;
}
```

Đúng:

```css
.intro {
    color: blue;
}
```

### Lỗi 2: Quên dấu thăng khi chọn id

HTML:

```html
<h1 id="main-title">Xin chào</h1>
```

Sai:

```css
main-title {
    color: red;
}
```

Đúng:

```css
#main-title {
    color: red;
}
```

### Lỗi 3: Viết sai tên class

HTML:

```html
<p class="intro">Xin chào</p>
```

CSS sai:

```css
.intros {
    color: blue;
}
```

Tên class trong HTML và CSS phải giống nhau.

## 8. Bài tập về nhà

Cập nhật website cá nhân với yêu cầu:

- Tiêu đề chính có `id="main-title"`.
- Có ít nhất 3 class: `intro`, `hobby`, `skill`.
- Mỗi class có màu chữ khác nhau.
- Tất cả đoạn văn có `line-height: 1.6`.

Gợi ý:

```html
<h1 id="main-title">Trang cá nhân của Bình</h1>

<p class="intro">Tôi là Bình, tôi đang học lập trình web.</p>
<p class="hobby">Tôi thích bóng đá, âm nhạc và game.</p>
<p class="skill">Tôi đã biết HTML và đang học CSS.</p>
```

## 9. Checklist cuối buổi

- [ ] Em hiểu selector là gì.
- [ ] Em biết chọn phần tử bằng tên thẻ.
- [ ] Em biết dùng class trong HTML.
- [ ] Em biết chọn class bằng dấu `.`.
- [ ] Em biết dùng id trong HTML.
- [ ] Em biết chọn id bằng dấu `#`.
- [ ] Em phân biệt được class và id.
- [ ] Em sửa được lỗi quên dấu `.` hoặc `#`.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em có nhiều phần được định dạng riêng bằng class và id.

---

#  Buổi 3: Màu sắc, font chữ và căn chỉnh văn bản

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết đổi màu chữ.
- Biết đổi màu nền.
- Biết chỉnh cỡ chữ.
- Biết chỉnh font chữ.
- Biết chỉnh độ đậm của chữ.
- Biết căn trái, căn phải, căn giữa văn bản.
- Biết chỉnh khoảng cách dòng bằng `line-height`.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
color
background-color
font-size
font-family
font-weight
text-align
line-height
```

Ví dụ:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #222222;
}
```

## 3. Giải thích dễ hiểu

Một website không chỉ cần có nội dung đúng mà còn cần dễ đọc.

Nếu chữ quá nhỏ, người xem sẽ khó đọc. Nếu màu chữ và màu nền quá giống nhau, người xem sẽ bị mỏi mắt. Nếu các dòng chữ quá sát nhau, đoạn văn sẽ khó theo dõi.

CSS giúp em chỉnh phần chữ để website rõ ràng và đẹp hơn.

### Màu sắc trong CSS

Có thể dùng tên màu:

```css
h1 {
    color: blue;
}
```

Hoặc dùng mã màu:

```css
h1 {
    color: #2563eb;
}
```

Một số mã màu gợi ý:

```text
#2563eb : xanh dương
#1f2937 : xám đậm
#f5f7fb : nền xám rất nhạt
#d97706 : cam nhấn
#ffffff : trắng
```

### Font chữ

Font chữ ảnh hưởng đến cảm giác chuyên nghiệp của website.

```css
body {
    font-family: Arial, sans-serif;
}
```

### Cỡ chữ

```css
p {
    font-size: 18px;
}
```

### Độ đậm của chữ

```css
.highlight {
    font-weight: bold;
}
```

### Căn chỉnh văn bản

```css
h1 {
    text-align: center;
}
```

Một số giá trị thường dùng:

```text
left    : căn trái
right   : căn phải
center  : căn giữa
```

### Khoảng cách dòng

```css
p {
    line-height: 1.6;
}
```

`line-height` giúp đoạn văn dễ đọc hơn.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`web typography font size line height example`

- Vị trí chèn:  
Sau phần giải thích `font-size` và `line-height`.

- Chú thích:  
Cỡ chữ, font chữ và khoảng cách dòng ảnh hưởng trực tiếp đến khả năng đọc nội dung.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Màu sắc và chữ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Giới thiệu bản thân</h1>

    <p>Xin chào, tôi là An. Tôi đang học lập trình web và muốn tự tạo website cá nhân.</p>

    <p>Tôi thích học HTML, CSS và tạo ra những sản phẩm có thể chia sẻ với mọi người.</p>

    <p class="highlight">Mục tiêu của tôi là hoàn thành một portfolio cá nhân thật đẹp.</p>
</body>
</html>
```

File `style.css`:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fb;
    color: #222222;
}

h1 {
    color: #1d4ed8;
    text-align: center;
    font-size: 36px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

.highlight {
    color: #d97706;
    font-weight: bold;
}
```

## 6. Thực hành trên lớp

### Bài 1: Đổi font toàn trang

```css
body {
    font-family: Arial, sans-serif;
}
```

### Bài 2: Đổi màu nền và màu chữ

```css
body {
    background-color: #f5f7fb;
    color: #222222;
}
```

### Bài 3: Căn giữa tiêu đề

```css
h1 {
    text-align: center;
}
```

### Bài 4: Tăng cỡ chữ đoạn văn

```css
p {
    font-size: 18px;
}
```

### Bài 5: Chỉnh khoảng cách dòng

```css
p {
    line-height: 1.6;
}
```

### Bài 6: Tạo câu nhấn mạnh

HTML:

```html
<p class="highlight">Tôi rất thích lập trình web.</p>
```

CSS:

```css
.highlight {
    color: #d97706;
    font-weight: bold;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Màu chữ quá khó đọc

Không nên:

```css
body {
    background-color: white;
    color: yellow;
}
```

Nên dùng:

```css
body {
    background-color: #f5f7fb;
    color: #222222;
}
```

### Lỗi 2: Chữ quá nhỏ

Không nên:

```css
p {
    font-size: 10px;
}
```

Nên dùng:

```css
p {
    font-size: 16px;
}
```

hoặc:

```css
p {
    font-size: 18px;
}
```

### Lỗi 3: Quên đơn vị px

Sai:

```css
h1 {
    font-size: 36;
}
```

Đúng:

```css
h1 {
    font-size: 36px;
}
```

### Lỗi 4: Gõ sai tên thuộc tính

Sai:

```css
font-szie: 18px;
```

Đúng:

```css
font-size: 18px;
```

## 8. Bài tập về nhà

Cập nhật trang giới thiệu bản thân với yêu cầu:

- Toàn trang dùng font Arial.
- Nền trang màu sáng.
- Tiêu đề chính căn giữa.
- Tiêu đề chính có màu xanh.
- Đoạn văn có cỡ chữ dễ đọc.
- Có ít nhất một câu dùng class `highlight`.
- Có `line-height` cho đoạn văn.

## 9. Checklist cuối buổi

- [ ] Em biết dùng `color`.
- [ ] Em biết dùng `background-color`.
- [ ] Em biết dùng `font-size`.
- [ ] Em biết dùng `font-family`.
- [ ] Em biết dùng `font-weight`.
- [ ] Em biết căn chữ bằng `text-align`.
- [ ] Em biết chỉnh khoảng cách dòng bằng `line-height`.
- [ ] Em biết tạo class nhấn mạnh nội dung.

## 10. Kết quả cần đạt

Kết thúc buổi này, trang giới thiệu của em cần dễ đọc hơn, có màu sắc rõ ràng và chữ được căn chỉnh hợp lý.

---

#  Buổi 4: Box Model - margin, padding, border

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu mỗi phần tử HTML giống như một chiếc hộp.
- Phân biệt được content, padding, border, margin.
- Biết dùng `padding` để tạo khoảng cách bên trong.
- Biết dùng `margin` để tạo khoảng cách bên ngoài.
- Biết dùng `border` để tạo viền.
- Biết dùng `border-radius` để bo góc.
- Tạo được card giới thiệu bản thân.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
width
margin
padding
border
border-radius
background-color
```

Mô hình Box Model:

```text
margin
  border
    padding
      content
```

## 3. Giải thích dễ hiểu

Trong CSS, mỗi phần tử HTML có thể xem như một chiếc hộp.

Ví dụ:

```html
<div class="profile-card">
    <h1>Xin chào</h1>
    <p>Tôi đang học CSS.</p>
</div>
```

Phần `div` này là một chiếc hộp chứa tiêu đề và đoạn văn.

Một chiếc hộp gồm 4 phần chính:

```text
Content : nội dung bên trong
Padding : khoảng cách từ nội dung đến viền
Border  : đường viền của hộp
Margin  : khoảng cách từ hộp này đến hộp khác
```

### Content

Là phần nội dung thật, ví dụ chữ, ảnh, nút bấm.

### Padding

Padding là khoảng cách bên trong hộp. Nếu không có padding, chữ sẽ sát vào viền hộp và nhìn rất chật.

```css
.card {
    padding: 20px;
}
```

### Border

Border là viền của hộp.

```css
.card {
    border: 1px solid #dddddd;
}
```

### Margin

Margin là khoảng cách bên ngoài hộp.

```css
.card {
    margin: 20px;
}
```

### Border radius

`border-radius` dùng để bo góc hộp.

```css
.card {
    border-radius: 16px;
}
```

Bo góc giúp giao diện mềm mại và hiện đại hơn.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS box model diagram`

- Vị trí chèn:  
Ngay sau phần giới thiệu Box Model.

- Chú thích:  
Box Model gồm content, padding, border và margin. Đây là kiến thức rất quan trọng khi căn chỉnh khoảng cách trong CSS.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Box Model</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <h1>Nguyễn Văn An</h1>
        <p>Tôi là học viên mới học lập trình web.</p>
        <p>Tôi đang học HTML và CSS để tạo website cá nhân.</p>
    </div>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

.profile-card {
    background-color: white;
    width: 500px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 16px;
}

.profile-card h1 {
    margin-top: 0;
    color: #2563eb;
}

.profile-card p {
    margin-bottom: 12px;
    line-height: 1.6;
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo card

HTML:

```html
<div class="profile-card">
    <h1>Thông tin cá nhân</h1>
    <p>Tên: An</p>
    <p>Sở thích: Lập trình web</p>
</div>
```

### Bài 2: Thêm nền trắng cho card

```css
.profile-card {
    background-color: white;
}
```

### Bài 3: Thêm padding

```css
.profile-card {
    padding: 24px;
}
```

### Bài 4: Thêm border

```css
.profile-card {
    border: 1px solid #dddddd;
}
```

### Bài 5: Bo góc card

```css
.profile-card {
    border-radius: 16px;
}
```

### Bài 6: Căn card ra giữa

```css
.profile-card {
    width: 500px;
    margin: 40px auto;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Card quá sát mép màn hình

Nếu không có margin hoặc padding, giao diện sẽ bị chật.

Nên thêm:

```css
.profile-card {
    margin: 40px auto;
    padding: 24px;
}
```

### Lỗi 2: Quên đơn vị px

Sai:

```css
padding: 20;
```

Đúng:

```css
padding: 20px;
```

### Lỗi 3: Card không căn giữa

Muốn dùng `margin: auto`, phần tử cần có `width`.

Đúng:

```css
.profile-card {
    width: 500px;
    margin: 40px auto;
}
```

## 8. Bài tập về nhà

Tạo 3 card cho website cá nhân:

- Card Giới thiệu
- Card Sở thích
- Card Kỹ năng

Mỗi card cần có:

- Nền trắng
- Padding
- Border
- Border radius
- Margin bên dưới

## 9. Checklist cuối buổi

- [ ] Em hiểu Box Model là gì.
- [ ] Em phân biệt được content, padding, border, margin.
- [ ] Em biết dùng `padding`.
- [ ] Em biết dùng `margin`.
- [ ] Em biết dùng `border`.
- [ ] Em biết dùng `border-radius`.
- [ ] Em tạo được card giới thiệu.
- [ ] Em căn được card ra giữa.

## 10. Kết quả cần đạt

Kết thúc buổi này, em tạo được card giới thiệu bản thân có nền trắng, khoảng cách đẹp, viền nhẹ, bo góc và nội dung dễ đọc.

---

#  Buổi 5: Làm đẹp hình ảnh, liên kết và nút bấm

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết chỉnh kích thước hình ảnh.
- Biết bo tròn ảnh đại diện.
- Biết dùng `object-fit`.
- Biết làm đẹp liên kết.
- Biết tạo nút bấm bằng CSS.
- Biết dùng trạng thái `hover`.

## 2. Kiến thức chính

Các kiến thức chính:

```css
img
a
button
hover
border-radius
object-fit
cursor
text-decoration
```

Một số thuộc tính thường dùng:

```css
width
height
border-radius
object-fit
background-color
color
padding
text-decoration
cursor
```

## 3. Giải thích dễ hiểu

Website cá nhân thường có ảnh đại diện, liên kết mạng xã hội, nút liên hệ và nút xem dự án. Nếu để mặc định, hình ảnh và liên kết có thể chưa đẹp.

### Làm đẹp ảnh đại diện

Ảnh đại diện thường nên có kích thước cố định và được bo tròn.

```css
.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}
```

Giải thích:

- `width`: chiều rộng ảnh
- `height`: chiều cao ảnh
- `object-fit: cover`: giúp ảnh không bị méo
- `border-radius: 50%`: biến ảnh thành hình tròn

### Làm đẹp liên kết

```css
a {
    color: #2563eb;
    text-decoration: none;
}
```

### Hover là gì?

Hover là trạng thái khi người dùng đưa chuột lên phần tử.

```css
a:hover {
    text-decoration: underline;
}
```

### Tạo nút bấm

Có thể dùng thẻ `<button>` hoặc thẻ `<a>` có class `btn`.

```html
<a href="#" class="btn">Liên hệ tôi</a>
```

CSS:

```css
.btn {
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
}
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`profile avatar button link css example`

- Vị trí chèn:  
Sau phần giải thích ảnh đại diện và nút bấm.

- Chú thích:  
Ảnh đại diện, liên kết và nút bấm giúp website cá nhân thân thiện và chuyên nghiệp hơn.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hình ảnh và nút bấm</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="profile-card">
        <img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">

        <h1>Nguyễn Văn An</h1>
        <p>Tôi đang học lập trình web.</p>

        <p>
            <a href="https://github.com" target="_blank">GitHub của tôi</a>
        </p>

        <a href="mailto:email@example.com" class="btn">Liên hệ tôi</a>
    </div>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
    text-align: center;
}

.profile-card {
    background-color: white;
    width: 500px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #dddddd;
    border-radius: 16px;
}

.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}

a {
    color: #2563eb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.btn {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 12px;
}

.btn:hover {
    background-color: #1e40af;
    text-decoration: none;
}
```

## 6. Thực hành trên lớp

### Bài 1: Thêm ảnh đại diện

```html
<img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">
```

### Bài 2: Chỉnh kích thước ảnh

```css
.avatar {
    width: 160px;
    height: 160px;
}
```

### Bài 3: Bo tròn ảnh

```css
.avatar {
    border-radius: 50%;
}
```

### Bài 4: Chống méo ảnh

```css
.avatar {
    object-fit: cover;
}
```

### Bài 5: Làm đẹp liên kết

```css
a {
    color: #2563eb;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

### Bài 6: Tạo nút bấm

HTML:

```html
<a href="#" class="btn">Xem dự án</a>
```

CSS:

```css
.btn {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Ảnh không hiện

Kiểm tra tên file ảnh. Nếu HTML viết:

```html
<img src="avatar.jpg">
```

Thì file ảnh phải tên đúng là:

```text
avatar.jpg
```

### Lỗi 2: Ảnh bị méo

Nên thêm:

```css
object-fit: cover;
```

### Lỗi 3: Nút vẫn bị gạch chân

Nếu dùng thẻ `<a>` làm nút, cần thêm:

```css
text-decoration: none;
```

### Lỗi 4: Hover không chạy

Kiểm tra viết đúng cú pháp:

```css
.btn:hover {
    background-color: #1e40af;
}
```

## 8. Bài tập về nhà

Cập nhật website cá nhân với yêu cầu:

- Có ảnh đại diện.
- Ảnh đại diện được bo tròn.
- Có ít nhất 2 liên kết: GitHub, Facebook hoặc Email.
- Có ít nhất 1 nút bấm dạng `.btn`.
- Có hiệu ứng hover cho liên kết hoặc nút.

## 9. Checklist cuối buổi

- [ ] Em biết thêm ảnh vào HTML.
- [ ] Em biết chỉnh kích thước ảnh.
- [ ] Em biết bo tròn ảnh đại diện.
- [ ] Em biết dùng `object-fit`.
- [ ] Em biết làm đẹp liên kết.
- [ ] Em biết tạo nút bằng CSS.
- [ ] Em biết dùng `hover`.
- [ ] Em sửa được lỗi ảnh không hiển thị.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em cần có ảnh đại diện đẹp, liên kết được làm đẹp, nút bấm có màu nền và có hiệu ứng khi đưa chuột lên.

---

#  Buổi 6: Bố cục với Flexbox

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu Flexbox dùng để sắp xếp phần tử.
- Biết dùng `display: flex`.
- Biết dùng `gap`.
- Biết dùng `justify-content`.
- Biết dùng `align-items`.
- Biết dùng `flex-direction`.
- Tạo được bố cục nhiều card nằm cùng hàng.

## 2. Kiến thức chính

Các thuộc tính chính:

```css
display: flex;
gap
justify-content
align-items
flex-direction
```

Ví dụ:

```css
.card-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
}
```

## 3. Giải thích dễ hiểu

Khi chưa dùng Flexbox, các phần tử thường nằm theo chiều dọc.

```text
[Card 1]
[Card 2]
[Card 3]
```

Khi dùng Flexbox, ta có thể sắp xếp chúng theo hàng ngang.

```text
[Card 1]   [Card 2]   [Card 3]
```

Flexbox giúp bố cục dễ hơn, đặc biệt khi cần căn giữa, chia hàng, chia cột hoặc tạo khoảng cách giữa các phần tử.

### display: flex

Đây là thuộc tính bật Flexbox.

```css
.card-row {
    display: flex;
}
```

Khi đó, các phần tử con bên trong `.card-row` sẽ nằm cùng hàng theo mặc định.

### gap

Tạo khoảng cách giữa các phần tử.

```css
.card-row {
    gap: 20px;
}
```

### justify-content

Căn các phần tử theo chiều ngang chính.

```css
.card-row {
    justify-content: center;
}
```

Một số giá trị thường dùng:

```text
flex-start     : dồn về đầu
center         : căn giữa
space-between  : giãn đều, phần tử đầu và cuối sát hai bên
space-around   : giãn đều xung quanh
```

### align-items

Căn các phần tử theo chiều vuông góc.

```css
.card-row {
    align-items: center;
}
```

### flex-direction

Quy định hướng sắp xếp.

```css
.card-row {
    flex-direction: row;
}
```

Một số giá trị:

```text
row     : xếp theo hàng ngang
column  : xếp theo cột dọc
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`CSS flexbox layout diagram`

- Vị trí chèn:  
Sau phần giải thích `display: flex`.

- Chú thích:  
Flexbox giúp sắp xếp các phần tử theo hàng hoặc cột một cách dễ dàng.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Flexbox cơ bản</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Kỹ năng của tôi</h1>

    <div class="card-row">
        <div class="card">
            <h2>HTML</h2>
            <p>Tạo cấu trúc nội dung cho website.</p>
        </div>

        <div class="card">
            <h2>CSS</h2>
            <p>Làm đẹp giao diện website.</p>
        </div>

        <div class="card">
            <h2>Portfolio</h2>
            <p>Tạo website cá nhân để giới thiệu bản thân.</p>
        </div>
    </div>
</body>
</html>
```

File `style.css`:

```css
body {
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #2563eb;
}

.card-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: stretch;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    width: 260px;
    border: 1px solid #e5e7eb;
}

.card h2 {
    color: #1f2937;
}

.card p {
    line-height: 1.6;
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo 3 card

```html
<div class="card">
    <h2>Giới thiệu</h2>
    <p>Tôi đang học lập trình web.</p>
</div>
```

Tạo đủ 3 card.

### Bài 2: Bọc card bằng `.card-row`

```html
<div class="card-row">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
</div>
```

### Bài 3: Bật Flexbox

```css
.card-row {
    display: flex;
}
```

### Bài 4: Thêm khoảng cách giữa các card

```css
.card-row {
    gap: 20px;
}
```

### Bài 5: Căn giữa các card

```css
.card-row {
    justify-content: center;
}
```

### Bài 6: Thử đổi hướng

```css
.card-row {
    flex-direction: column;
}
```

Sau đó đổi lại:

```css
.card-row {
    flex-direction: row;
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Viết flex vào sai phần tử

Cần viết `display: flex` cho phần tử cha.

Đúng:

```css
.card-row {
    display: flex;
}
```

Không nên viết cho từng `.card` nếu muốn các card nằm cùng hàng.

### Lỗi 2: Các card dính sát nhau

Cần thêm:

```css
gap: 20px;
```

### Lỗi 3: Card quá rộng

Nếu mỗi card quá rộng, chúng có thể bị tràn màn hình.

Nên dùng chiều rộng vừa phải:

```css
.card {
    width: 260px;
}
```

### Lỗi 4: Nhầm `justify-content` và `align-items`

- `justify-content`: căn theo hướng chính.
- `align-items`: căn theo hướng vuông góc.

## 8. Bài tập về nhà

Tạo một khu vực gồm 3 card:

- Giới thiệu
- Mục tiêu
- Sản phẩm yêu thích

Yêu cầu:

- 3 card nằm cùng hàng trên màn hình rộng.
- Có khoảng cách giữa các card.
- Card có nền trắng.
- Card có padding.
- Card có border-radius.

## 9. Checklist cuối buổi

- [ ] Em hiểu Flexbox dùng để làm gì.
- [ ] Em biết dùng `display: flex`.
- [ ] Em biết dùng `gap`.
- [ ] Em biết dùng `justify-content`.
- [ ] Em biết dùng `align-items`.
- [ ] Em biết dùng `flex-direction`.
- [ ] Em tạo được nhiều card nằm cùng hàng.
- [ ] Em biết `display: flex` nên đặt ở phần tử cha.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em có một khu vực nhiều card được sắp xếp bằng Flexbox.

---

#  Buổi 7: Responsive cơ bản

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu responsive là gì.
- Biết dùng `max-width`.
- Biết dùng `width: 100%`.
- Biết dùng `img { max-width: 100%; }`.
- Biết viết media query cơ bản.
- Biết chuyển layout hàng thành cột trên màn hình nhỏ.
- Biết kiểm tra website trên chế độ điện thoại.

## 2. Kiến thức chính

Các kiến thức chính:

```css
responsive
max-width
width: 100%
media query
@media
```

Ví dụ media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

## 3. Giải thích dễ hiểu

Website không chỉ xem trên máy tính. Người dùng còn xem trên điện thoại, máy tính bảng và nhiều kích thước màn hình khác nhau.

Responsive nghĩa là website tự điều chỉnh giao diện để phù hợp với từng màn hình.

Ví dụ trên máy tính:

```text
[Card 1] [Card 2] [Card 3]
```

Trên điện thoại:

```text
[Card 1]
[Card 2]
[Card 3]
```

Nếu không responsive, website có thể bị:

- Chữ quá nhỏ
- Card bị tràn ngang
- Ảnh quá lớn
- Người dùng phải kéo ngang để xem

### max-width

`max-width` giúp nội dung không bị quá rộng trên màn hình lớn.

```css
.container {
    max-width: 960px;
    margin: 0 auto;
}
```

### width: 100%

Giúp phần tử chiếm toàn bộ chiều rộng có thể dùng được.

```css
img {
    max-width: 100%;
}
```

### Media query

Media query cho phép viết CSS riêng cho từng kích thước màn hình.

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

Đoạn CSS trên có nghĩa là: khi màn hình nhỏ hơn hoặc bằng 768px, tiêu đề `h1` sẽ có cỡ chữ 28px.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`responsive web design desktop mobile layout`

- Vị trí chèn:  
Sau phần giải thích responsive là gì.

- Chú thích:  
Responsive giúp website hiển thị tốt trên cả máy tính và điện thoại.

## 5. Ví dụ code

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Responsive cơ bản</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Portfolio cá nhân</h1>

        <div class="card-row">
            <div class="card">
                <h2>Giới thiệu</h2>
                <p>Tôi đang học lập trình web.</p>
            </div>

            <div class="card">
                <h2>Kỹ năng</h2>
                <p>Tôi biết HTML và CSS cơ bản.</p>
            </div>

            <div class="card">
                <h2>Mục tiêu</h2>
                <p>Tôi muốn tạo website cá nhân đẹp.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

File `style.css`:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #f5f7fb;
    font-family: Arial, sans-serif;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2563eb;
    text-align: center;
    font-size: 36px;
}

.card-row {
    display: flex;
    gap: 20px;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    width: 100%;
}

img {
    max-width: 100%;
}

@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }

    h1 {
        font-size: 28px;
    }
}
```

## 6. Thực hành trên lớp

### Bài 1: Thêm container

HTML:

```html
<div class="container">
    Nội dung website ở đây
</div>
```

CSS:

```css
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}
```

### Bài 2: Chống tràn ảnh

```css
img {
    max-width: 100%;
}
```

### Bài 3: Viết media query

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

### Bài 4: Chuyển card từ hàng sang cột

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Bài 5: Kiểm tra bằng DevTools

Mở trình duyệt Chrome, bấm chuột phải vào trang web, chọn `Inspect / Kiểm tra`, bật chế độ điện thoại và kiểm tra giao diện.

## 7. Lỗi thường gặp

### Lỗi 1: Website bị tràn ngang

Nên thêm:

```css
* {
    box-sizing: border-box;
}
```

Và kiểm tra lại width của các phần tử.

### Lỗi 2: Ảnh quá lớn

Nên thêm:

```css
img {
    max-width: 100%;
}
```

### Lỗi 3: Quên dấu ngoặc trong media query

Sai:

```css
@media max-width: 768px {
    h1 {
        font-size: 28px;
    }
}
```

Đúng:

```css
@media (max-width: 768px) {
    h1 {
        font-size: 28px;
    }
}
```

### Lỗi 4: Card vẫn nằm ngang trên điện thoại

Kiểm tra đã viết đúng chưa:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

## 8. Bài tập về nhà

Chỉnh website cá nhân để xem tốt trên điện thoại.

Yêu cầu:

- Có `.container`.
- Có `max-width`.
- Có `padding`.
- Ảnh không bị tràn.
- Card không bị tràn ngang.
- Trên điện thoại, card chuyển thành dạng cột.
- Tiêu đề nhỏ hơn trên màn hình nhỏ.

## 9. Checklist cuối buổi

- [ ] Em hiểu responsive là gì.
- [ ] Em biết dùng `.container`.
- [ ] Em biết dùng `max-width`.
- [ ] Em biết dùng `img { max-width: 100%; }`.
- [ ] Em biết viết `@media`.
- [ ] Em biết đổi layout trên màn hình nhỏ.
- [ ] Em kiểm tra được giao diện bằng DevTools.
- [ ] Website của em không bị tràn ngang trên điện thoại.

## 10. Kết quả cần đạt

Kết thúc buổi này, website cá nhân của em cần xem tốt trên cả máy tính và điện thoại.

---

#  Buổi 8: Hoàn thiện giao diện Portfolio cá nhân

## 1. Mục tiêu

Sau buổi học này, em cần:

- Ôn lại toàn bộ kiến thức CSS cơ bản.
- Biết tổ chức file HTML và CSS.
- Biết hoàn thiện giao diện portfolio cá nhân.
- Biết kiểm tra lỗi giao diện.
- Biết kiểm tra responsive.
- Hoàn thành dự án cuối Chương 2.

## 2. Kiến thức chính

Các kiến thức cần dùng lại:

- Liên kết file CSS với HTML.
- Selector.
- Class và id.
- Màu sắc.
- Font chữ.
- Căn chỉnh văn bản.
- Box Model.
- Margin.
- Padding.
- Border.
- Border radius.
- Hình ảnh.
- Liên kết.
- Nút bấm.
- Flexbox.
- Responsive.
- Media query.

## 3. Giải thích dễ hiểu

Trong các buổi trước, em đã học từng phần nhỏ của CSS. Buổi này, em sẽ ghép tất cả lại để hoàn thiện một website portfolio cá nhân.

Portfolio cá nhân là website dùng để giới thiệu bản thân.

Một portfolio đơn giản nên có:

- Header hoặc navigation
- Phần giới thiệu chính
- Ảnh đại diện
- Phần thông tin cá nhân
- Phần kỹ năng
- Phần sở thích hoặc dự án
- Phần liên hệ

Quy trình làm dự án:

```text
Bước 1: Viết HTML trước
Bước 2: Chia các phần rõ ràng
Bước 3: Thêm class cho từng phần
Bước 4: Viết CSS cho màu sắc và chữ
Bước 5: Viết CSS cho card và bố cục
Bước 6: Làm đẹp ảnh, nút, liên kết
Bước 7: Thêm responsive
Bước 8: Kiểm tra và sửa lỗi
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`personal portfolio website layout example`

- Vị trí chèn:  
Sau phần giới thiệu Portfolio cá nhân.

- Chú thích:  
Portfolio cá nhân thường gồm phần giới thiệu, kỹ năng, dự án và liên hệ.

## 5. Ví dụ code

Cấu trúc thư mục:

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

File `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Portfolio cá nhân</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <h1>Portfolio của An</h1>
        <nav>
            <a href="#about">Giới thiệu</a>
            <a href="#skills">Kỹ năng</a>
            <a href="#contact">Liên hệ</a>
        </nav>
    </header>

    <main class="container">
        <section class="hero card">
            <img src="avatar.jpg" alt="Ảnh đại diện" class="avatar">
            <div>
                <h2>Xin chào, tôi là An</h2>
                <p>Tôi đang học lập trình web và muốn tạo ra những website đẹp.</p>
                <a href="#contact" class="btn">Liên hệ tôi</a>
            </div>
        </section>

        <section id="about" class="card">
            <h2>Giới thiệu</h2>
            <p>Tôi là học viên mới học HTML và CSS. Tôi thích công nghệ và thiết kế website.</p>
        </section>

        <section id="skills" class="card">
            <h2>Kỹ năng</h2>

            <div class="card-row">
                <div class="small-card">
                    <h3>HTML</h3>
                    <p>Tạo cấu trúc nội dung.</p>
                </div>

                <div class="small-card">
                    <h3>CSS</h3>
                    <p>Làm đẹp giao diện.</p>
                </div>

                <div class="small-card">
                    <h3>Portfolio</h3>
                    <p>Giới thiệu bản thân.</p>
                </div>
            </div>
        </section>

        <section class="card">
            <h2>Sở thích</h2>
            <ul>
                <li>Lập trình</li>
                <li>Đọc sách</li>
                <li>Chơi game</li>
            </ul>
        </section>

        <section id="contact" class="card">
            <h2>Liên hệ</h2>
            <p>Email: email@example.com</p>
            <a href="mailto:email@example.com" class="btn">Gửi email</a>
        </section>
    </main>
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

.header h1 {
    margin-top: 0;
}

.header a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

.header a:hover {
    text-decoration: underline;
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

.hero {
    display: flex;
    align-items: center;
    gap: 24px;
}

.avatar {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}

.card-row {
    display: flex;
    gap: 20px;
}

.small-card {
    background-color: #f9fafb;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    width: 100%;
}

.btn {
    display: inline-block;
    background-color: var(--primary);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 10px;
}

.btn:hover {
    background-color: #1e40af;
}

p {
    line-height: 1.6;
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .card-row {
        flex-direction: column;
    }

    h1 {
        font-size: 28px;
    }

    .header a {
        display: block;
        margin: 8px 0;
    }
}
```

## 6. Thực hành trên lớp

### Bài 1: Mở lại dự án HTML cá nhân

Mở website cá nhân đã làm từ Chương 1. Nếu chưa có, tạo mới file:

```text
index.html
style.css
```

### Bài 2: Chia bố cục website

Website cần có các phần:

```text
Header
Hero
About
Skills
Hobbies / Projects
Contact
```

### Bài 3: Thêm class cho từng phần

Ví dụ:

```html
<section class="card">
    <h2>Giới thiệu</h2>
    <p>Nội dung giới thiệu...</p>
</section>
```

### Bài 4: Làm đẹp giao diện

Thêm CSS cho:

- Màu nền
- Font chữ
- Card
- Ảnh đại diện
- Nút bấm
- Liên kết

### Bài 5: Tạo bố cục Flexbox

Dùng Flexbox cho:

- Phần hero
- Phần kỹ năng
- Các card nhỏ

### Bài 6: Thêm responsive

Viết media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Bài 7: Kiểm tra sản phẩm

Kiểm tra:

- Website mở được trên trình duyệt.
- CSS có hoạt động.
- Ảnh có hiển thị.
- Nút bấm có hover.
- Card không bị tràn.
- Website xem tốt trên điện thoại.

## 7. Lỗi thường gặp

### Lỗi 1: Không liên kết được CSS

Kiểm tra trong `<head>` có dòng:

```html
<link rel="stylesheet" href="style.css">
```

### Lỗi 2: Mất ảnh đại diện

Kiểm tra file ảnh có nằm cùng thư mục với `index.html` không.

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

### Lỗi 3: Website bị tràn ngang

Thêm:

```css
* {
    box-sizing: border-box;
}
```

Và kiểm tra các phần tử có width quá lớn không.

### Lỗi 4: Card không xuống hàng trên điện thoại

Kiểm tra media query:

```css
@media (max-width: 768px) {
    .card-row {
        flex-direction: column;
    }
}
```

### Lỗi 5: Chữ khó đọc

Nên dùng màu chữ đậm trên nền sáng.

```css
body {
    background-color: #f5f7fb;
    color: #1f2937;
}
```

## 8. Bài tập về nhà

Hoàn thiện dự án Portfolio cá nhân.

Yêu cầu HTML:

- Có cấu trúc HTML đầy đủ.
- Có liên kết đến file `style.css`.
- Có ảnh đại diện.
- Có ít nhất 3 phần nội dung lớn.
- Có danh sách kỹ năng hoặc sở thích.
- Có phần liên hệ.

Yêu cầu CSS:

- Có màu nền và màu chữ rõ ràng.
- Có font chữ thống nhất toàn trang.
- Có container hoặc phần bọc nội dung.
- Có card sử dụng padding, margin, border hoặc border-radius.
- Có nút bấm được làm đẹp.
- Có Flexbox cho ít nhất một khu vực.
- Có responsive cơ bản bằng media query.

Chuẩn bị trình bày sản phẩm trong 2-3 phút theo mẫu:

```text
Xin chào thầy/cô và các bạn.
Đây là website portfolio cá nhân của em.
Trang web có các phần: giới thiệu, kỹ năng, sở thích và liên hệ.
Em đã dùng CSS để chỉnh màu sắc, font chữ, khoảng cách, card, nút bấm và responsive.
Phần em thích nhất là ...
Phần em thấy khó nhất là ...
```

## 9. Checklist cuối buổi

- [ ] Em có đủ file `index.html`.
- [ ] Em có đủ file `style.css`.
- [ ] Em liên kết CSS đúng.
- [ ] Website có màu sắc rõ ràng.
- [ ] Website có font chữ thống nhất.
- [ ] Website có ảnh đại diện.
- [ ] Website có card.
- [ ] Website có nút bấm.
- [ ] Website có Flexbox.
- [ ] Website có responsive.
- [ ] Website không bị tràn ngang.
- [ ] Em có thể trình bày sản phẩm trong 2-3 phút.

## 10. Kết quả cần đạt

Kết thúc buổi này, em hoàn thành Portfolio cá nhân có CSS.

Sản phẩm cuối chương:

```text
portfolio-css
├── index.html
├── style.css
└── avatar.jpg
```

Website cần có:

- Giao diện đẹp hơn HTML thô.
- Màu sắc rõ ràng.
- Font chữ dễ đọc.
- Card có khoảng cách đẹp.
- Ảnh đại diện được làm đẹp.
- Nút bấm và liên kết thân thiện.
- Bố cục dùng Flexbox.
- Responsive cơ bản trên điện thoại.

---

# Dự án cuối Chương 2: Portfolio cá nhân có CSS

Trong dự án cuối chương, học viên sẽ nâng cấp website cá nhân đã làm bằng HTML thành một portfolio có giao diện đẹp, bố cục rõ ràng và responsive cơ bản.

> **Yêu cầu quan trọng:** Dự án không cần JavaScript. Học viên chỉ dùng HTML và CSS để hoàn thiện giao diện.

## 1. Sản phẩm cần hoàn thành

```text
du-an-cuoi-chuong-2
├── index.html
├── style.css
└── avatar.jpg
```

## 2. Bố cục gợi ý

```text
┌────────────────────────────────────┐
│ Header / Navigation                 │
├────────────────────────────────────┤
│ Hero: ảnh đại diện + giới thiệu     │
├────────────────────────────────────┤
│ About: thông tin cá nhân            │
├────────────────────────────────────┤
│ Skills: các kỹ năng                 │
├────────────────────────────────────┤
│ Hobbies / Projects: các card        │
├────────────────────────────────────┤
│ Contact form                        │
└────────────────────────────────────┘
```

## 3. Yêu cầu HTML

- Có cấu trúc HTML đầy đủ.
- Có liên kết đến file `style.css`.
- Có ảnh đại diện.
- Có ít nhất 3 phần nội dung lớn.
- Có danh sách kỹ năng hoặc sở thích.
- Có form liên hệ hoặc phần liên hệ.

## 4. Yêu cầu CSS

- Có màu nền và màu chữ rõ ràng.
- Có font chữ thống nhất toàn trang.
- Có container hoặc phần bọc nội dung.
- Có card sử dụng padding, margin, border hoặc border-radius.
- Có nút bấm được làm đẹp.
- Có Flexbox cho ít nhất một khu vực.
- Có responsive cơ bản bằng media query.

## 5. Tiêu chí đánh giá

| Tiêu chí | Điểm |
| --- | --- |
| Có đủ file index.html và style.css | 1 |
| Liên kết CSS đúng | 1 |
| Giao diện có màu sắc và font chữ rõ ràng | 1 |
| Có bố cục container/card | 1 |
| Có ảnh đại diện được làm đẹp | 1 |
| Có liên kết hoặc nút bấm được làm đẹp | 1 |
| Có form liên hệ hoặc phần liên hệ được định dạng | 1 |
| Có sử dụng Flexbox | 1 |
| Có responsive cơ bản | 1 |
| Trình bày sạch, dễ đọc, ít lỗi | 1 |
| **Tổng điểm** | **10** |

## 6. Checklist trước khi nộp

| Tiêu chí | Đã làm |
| --- | --- |
| Website mở được trên trình duyệt | ☐ |
| Không bị mất ảnh | ☐ |
| Không bị lỗi đường dẫn style.css | ☐ |
| Chữ dễ đọc | ☐ |
| Các phần có khoảng cách hợp lý | ☐ |
| Xem được trên màn hình nhỏ | ☐ |
| Học viên có thể trình bày sản phẩm trong 2-3 phút | ☐ |

---

# Phụ lục: Bảng tra cứu CSS nhanh

| Thuộc tính | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| color | Đổi màu chữ | `color: blue;` |
| background-color | Đổi màu nền | `background-color: yellow;` |
| font-size | Đổi cỡ chữ | `font-size: 18px;` |
| font-family | Đổi font chữ | `font-family: Arial;` |
| text-align | Căn chữ | `text-align: center;` |
| margin | Khoảng cách bên ngoài | `margin: 20px;` |
| padding | Khoảng cách bên trong | `padding: 20px;` |
| border | Tạo viền | `border: 1px solid black;` |
| border-radius | Bo góc | `border-radius: 12px;` |
| width | Chiều rộng | `width: 300px;` |
| max-width | Chiều rộng tối đa | `max-width: 960px;` |
| display: flex | Bật Flexbox | `display: flex;` |
| gap | Khoảng cách giữa phần tử | `gap: 20px;` |
| hover | Trạng thái đưa chuột lên | `a:hover { color: red; }` |

# Các lỗi CSS thường gặp

## Quên dấu chấm phẩy

Sai:

```css
color: blue
```

Đúng:

```css
color: blue;
```

## Gõ sai tên file CSS

Sai:

```html
<link rel="stylesheet" href="styles.css">
```

Đúng:

```html
<link rel="stylesheet" href="style.css">
```

## Quên dấu chấm khi chọn class

Sai:

```css
intro { color: red; }
```

Đúng:

```css
.intro { color: red; }
```

## Quên dấu # khi chọn id

Sai:

```css
main-title { color: red; }
```

Đúng:

```css
#main-title { color: red; }
```
