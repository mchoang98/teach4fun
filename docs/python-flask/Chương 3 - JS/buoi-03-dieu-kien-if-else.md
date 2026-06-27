# Bài giảng Buổi 3: Điều kiện if else

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu điều kiện là gì.
- Biết dùng `if`.
- Biết dùng `else`.
- Biết dùng `else if`.
- Biết dùng toán tử so sánh.
- Viết được chương trình kiểm tra tuổi hoặc điểm số.

## 2. Kiến thức chính

Cấu trúc `if else`:

```js
if (điều_kiện) {
    // chạy khi điều kiện đúng
} else {
    // chạy khi điều kiện sai
}
```

Toán tử so sánh:

```text
>   lớn hơn
<   nhỏ hơn
>=  lớn hơn hoặc bằng
<=  nhỏ hơn hoặc bằng
=== bằng nhau
!== khác nhau
```

## 3. Giải thích dễ hiểu

Trong thực tế, ta thường ra quyết định dựa vào điều kiện.

Ví dụ:

```text
Nếu trời mưa thì mang áo mưa.
Nếu không mưa thì đi bình thường.
```

Trong JavaScript, ta viết:

```js
let isRaining = true;

if (isRaining === true) {
    console.log("Mang áo mưa");
} else {
    console.log("Đi bình thường");
}
```

### if

Dùng khi muốn kiểm tra một điều kiện.

```js
let age = 15;

if (age >= 13) {
    console.log("Bạn đủ tuổi học khóa này");
}
```

### else

Dùng khi điều kiện không đúng.

```js
let age = 10;

if (age >= 13) {
    console.log("Bạn đủ tuổi học khóa này");
} else {
    console.log("Bạn chưa đủ tuổi học khóa này");
}
```

### else if

Dùng khi có nhiều trường hợp.

```js
let score = 8;

if (score >= 8) {
    console.log("Giỏi");
} else if (score >= 6.5) {
    console.log("Khá");
} else {
    console.log("Cần cố gắng thêm");
}
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`if else flowchart JavaScript`

- Vị trí chèn:  
Sau phần giải thích điều kiện trong thực tế.

- Chú thích:  
Câu lệnh điều kiện giúp chương trình đưa ra quyết định theo từng trường hợp.

## 5. Ví dụ code

### Ví dụ 1: Kiểm tra tuổi

```js
let age = 15;

if (age >= 13) {
    console.log("Bạn đủ tuổi học lập trình web.");
} else {
    console.log("Bạn cần học khóa nhập môn trước.");
}
```

### Ví dụ 2: Xếp loại điểm

```js
let score = 8.5;

if (score >= 8) {
    console.log("Xếp loại: Giỏi");
} else if (score >= 6.5) {
    console.log("Xếp loại: Khá");
} else if (score >= 5) {
    console.log("Xếp loại: Trung bình");
} else {
    console.log("Xếp loại: Cần cố gắng");
}
```

### Ví dụ 3: Kiểm tra mật khẩu đơn giản

```js
let password = "123456";

if (password === "123456") {
    console.log("Đăng nhập thành công");
} else {
    console.log("Sai mật khẩu");
}
```

## 6. Thực hành trên lớp

### Bài 1: Kiểm tra tuổi

Tạo biến:

```js
let age = 12;
```

Nếu tuổi từ 13 trở lên, in ra:

```text
Đủ tuổi học JavaScript
```

Ngược lại, in ra:

```text
Cần học thêm HTML và CSS
```

### Bài 2: Kiểm tra điểm

Tạo biến:

```js
let score = 7;
```

Quy tắc:

```text
>= 8    : Giỏi
>= 6.5  : Khá
>= 5    : Trung bình
< 5     : Cần cố gắng
```

### Bài 3: Kiểm tra tài khoản

```js
let username = "admin";
let password = "123456";
```

Nếu username là `admin` và password là `123456`, in ra:

```text
Đăng nhập thành công
```

Ngược lại:

```text
Sai tài khoản hoặc mật khẩu
```

Gợi ý dùng toán tử `&&`:

```js
if (username === "admin" && password === "123456") {
    console.log("Đăng nhập thành công");
}
```

## 7. Lỗi thường gặp

### Lỗi 1: Dùng một dấu bằng để so sánh

Không nên:

```js
if (age = 15) {
    console.log("Đúng");
}
```

Nên dùng:

```js
if (age === 15) {
    console.log("Đúng");
}
```

### Lỗi 2: Quên dấu ngoặc tròn

Sai:

```js
if age >= 13 {
    console.log("Đủ tuổi");
}
```

Đúng:

```js
if (age >= 13) {
    console.log("Đủ tuổi");
}
```

### Lỗi 3: Quên dấu ngoặc nhọn

Nên viết đầy đủ:

```js
if (score >= 8) {
    console.log("Giỏi");
}
```

### Lỗi 4: Nhầm thứ tự điều kiện

Nếu kiểm tra điểm, nên kiểm tra điểm cao trước.

Đúng:

```js
if (score >= 8) {
    console.log("Giỏi");
} else if (score >= 6.5) {
    console.log("Khá");
}
```

## 8. Bài tập về nhà

Viết chương trình kiểm tra điểm môn lập trình.

Yêu cầu:

- Tạo biến `score`.
- Nếu điểm từ 9 trở lên: Xuất sắc.
- Nếu điểm từ 8 trở lên: Giỏi.
- Nếu điểm từ 6.5 trở lên: Khá.
- Nếu điểm từ 5 trở lên: Trung bình.
- Nếu dưới 5: Cần luyện tập thêm.

## 9. Checklist cuối buổi

- [ ] Em hiểu điều kiện là gì.
- [ ] Em biết viết `if`.
- [ ] Em biết viết `else`.
- [ ] Em biết viết `else if`.
- [ ] Em biết dùng toán tử so sánh.
- [ ] Em biết dùng `===`.
- [ ] Em viết được chương trình kiểm tra tuổi.
- [ ] Em viết được chương trình kiểm tra điểm.

## 10. Kết quả cần đạt

Kết thúc buổi này, em biết dùng JavaScript để đưa ra kết quả khác nhau dựa trên điều kiện.
