# Bài giảng Buổi 2: Biến, kiểu dữ liệu và toán tử

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu biến là gì.
- Biết dùng `let` và `const`.
- Biết các kiểu dữ liệu cơ bản.
- Biết nối chuỗi.
- Biết dùng toán tử số học.
- Biết in giá trị biến ra Console.

## 2. Kiến thức chính

Biến dùng để lưu dữ liệu.

Khai báo biến bằng `let`:

```js
let age = 15;
```

Khai báo hằng số bằng `const`:

```js
const schoolName = "Let's Code Academy";
```

Các kiểu dữ liệu cơ bản:

```text
String  : chuỗi văn bản
Number  : số
Boolean : đúng hoặc sai
```

Ví dụ:

```js
let name = "An";
let age = 15;
let isStudent = true;
```

## 3. Giải thích dễ hiểu

Biến giống như một chiếc hộp để lưu thông tin.

Ví dụ:

```js
let name = "An";
```

Có thể hiểu là:

```text
Tạo một chiếc hộp tên là name
Bên trong hộp chứa giá trị "An"
```

Khi cần dùng lại tên, ta chỉ cần gọi biến `name`.

```js
console.log(name);
```

### let là gì?

`let` dùng cho dữ liệu có thể thay đổi.

```js
let score = 8;
score = 9;
```

### const là gì?

`const` dùng cho dữ liệu không nên thay đổi.

```js
const birthYear = 2010;
```

### String

String là chuỗi văn bản, thường đặt trong dấu nháy.

```js
let fullName = "Nguyễn Văn An";
```

### Number

Number là số.

```js
let age = 15;
```

### Boolean

Boolean chỉ có 2 giá trị:

```js
true
false
```

Ví dụ:

```js
let isLearning = true;
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`JavaScript variables illustration`

- Vị trí chèn:  
Sau phần giải thích biến giống như chiếc hộp.

- Chú thích:  
Biến dùng để lưu dữ liệu trong chương trình.

## 5. Ví dụ code

File `script.js`:

```js
let fullName = "Nguyễn Văn An";
let age = 15;
let favoriteSubject = "Lập trình web";
let isStudent = true;

console.log("Họ tên:");
console.log(fullName);

console.log("Tuổi:");
console.log(age);

console.log("Môn học yêu thích:");
console.log(favoriteSubject);

console.log("Có phải học viên không?");
console.log(isStudent);
```

Ví dụ nối chuỗi:

```js
let name = "An";
let message = "Xin chào, tôi là " + name;

console.log(message);
```

Ví dụ toán tử:

```js
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

## 6. Thực hành trên lớp

### Bài 1: Tạo biến thông tin cá nhân

```js
let fullName = "Tên của em";
let age = 14;
let hobby = "Chơi game";
```

### Bài 2: In thông tin ra Console

```js
console.log(fullName);
console.log(age);
console.log(hobby);
```

### Bài 3: Nối chuỗi giới thiệu

```js
let intro = "Xin chào, tôi là " + fullName + ", năm nay tôi " + age + " tuổi.";
console.log(intro);
```

### Bài 4: Tính năm sinh gần đúng

```js
let currentYear = 2026;
let birthYear = currentYear - age;

console.log("Năm sinh gần đúng là:");
console.log(birthYear);
```

## 7. Lỗi thường gặp

### Lỗi 1: Quên dấu nháy khi viết chuỗi

Sai:

```js
let name = An;
```

Đúng:

```js
let name = "An";
```

### Lỗi 2: Dùng biến trước khi tạo

Sai:

```js
console.log(age);
let age = 15;
```

Nên viết:

```js
let age = 15;
console.log(age);
```

### Lỗi 3: Gõ sai tên biến

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

### Lỗi 4: Thay đổi giá trị của const

Sai:

```js
const school = "A";
school = "B";
```

Nếu giá trị cần thay đổi, hãy dùng `let`.

## 8. Bài tập về nhà

Tạo file `script.js` lưu thông tin cá nhân:

- Họ tên
- Tuổi
- Trường học
- Sở thích
- Môn học yêu thích
- Có đang học JavaScript không?

Sau đó in ra Console thành đoạn giới thiệu hoàn chỉnh.

Ví dụ kết quả:

```text
Xin chào, tôi là An.
Tôi 15 tuổi.
Tôi thích lập trình web.
Tôi đang học JavaScript: true
```

## 9. Checklist cuối buổi

- [ ] Em hiểu biến là gì.
- [ ] Em biết dùng `let`.
- [ ] Em biết dùng `const`.
- [ ] Em biết kiểu string.
- [ ] Em biết kiểu number.
- [ ] Em biết kiểu boolean.
- [ ] Em biết nối chuỗi.
- [ ] Em biết dùng toán tử cộng, trừ, nhân, chia.

## 10. Kết quả cần đạt

Kết thúc buổi này, em viết được chương trình JavaScript đơn giản để lưu và hiển thị thông tin cá nhân.
