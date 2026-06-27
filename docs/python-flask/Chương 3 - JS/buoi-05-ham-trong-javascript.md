#  Buổi 5: Hàm trong JavaScript

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu hàm là gì.
- Biết tạo hàm.
- Biết gọi hàm.
- Biết dùng tham số.
- Biết dùng `return`.
- Biết tách chương trình thành các phần nhỏ dễ quản lý.

## 2. Kiến thức chính

Cú pháp tạo hàm:

```js
function sayHello() {
    console.log("Xin chào");
}
```

Gọi hàm:

```js
sayHello();
```

Hàm có tham số:

```js
function sayHello(name) {
    console.log("Xin chào " + name);
}
```

Hàm có kết quả trả về:

```js
function add(a, b) {
    return a + b;
}
```

## 3. Giải thích dễ hiểu

Hàm là một khối lệnh được đặt tên.

Khi cần chạy lại khối lệnh đó, ta chỉ cần gọi tên hàm.

Ví dụ, nếu muốn chào người dùng nhiều lần, thay vì viết:

```js
console.log("Xin chào An");
console.log("Xin chào Bình");
console.log("Xin chào Chi");
```

Ta có thể viết hàm:

```js
function sayHello(name) {
    console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Bình");
sayHello("Chi");
```

Hàm giúp code:

- Gọn hơn
- Dễ đọc hơn
- Dễ sửa hơn
- Có thể tái sử dụng

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`JavaScript function input output diagram`

- Vị trí chèn:  
Sau phần giải thích hàm là khối lệnh được đặt tên.

- Chú thích:  
Hàm nhận dữ liệu đầu vào, xử lý và có thể trả về kết quả.

## 5. Ví dụ code

### Ví dụ 1: Hàm không có tham số

```js
function showWelcomeMessage() {
    console.log("Chào mừng bạn đến với JavaScript!");
}

showWelcomeMessage();
```

### Ví dụ 2: Hàm có tham số

```js
function introduce(name, age) {
    console.log("Xin chào, tôi là " + name);
    console.log("Tôi " + age + " tuổi");
}

introduce("An", 15);
introduce("Bình", 14);
```

### Ví dụ 3: Hàm có return

```js
function calculateBirthYear(age) {
    let currentYear = 2026;
    return currentYear - age;
}

let birthYear = calculateBirthYear(15);
console.log(birthYear);
```

### Ví dụ 4: Hàm xếp loại điểm

```js
function getRank(score) {
    if (score >= 8) {
        return "Giỏi";
    } else if (score >= 6.5) {
        return "Khá";
    } else if (score >= 5) {
        return "Trung bình";
    } else {
        return "Cần cố gắng";
    }
}

console.log(getRank(8.5));
console.log(getRank(6));
```

## 6. Thực hành trên lớp

### Bài 1: Tạo hàm chào hỏi

```js
function sayHello() {
    console.log("Xin chào các bạn");
}
```

Gọi hàm 3 lần.

### Bài 2: Tạo hàm giới thiệu

```js
function introduce(name, hobby) {
    console.log("Tôi là " + name);
    console.log("Tôi thích " + hobby);
}
```

Gọi hàm với thông tin của em.

### Bài 3: Tạo hàm cộng hai số

```js
function add(a, b) {
    return a + b;
}
```

In kết quả ra Console.

### Bài 4: Tạo hàm kiểm tra tuổi

Nếu tuổi từ 13 trở lên, trả về:

```text
Đủ tuổi học JavaScript
```

Ngược lại:

```text
Cần học thêm HTML và CSS
```

## 7. Lỗi thường gặp

### Lỗi 1: Tạo hàm nhưng quên gọi hàm

```js
function sayHello() {
    console.log("Xin chào");
}
```

Đoạn trên chỉ tạo hàm, chưa chạy hàm.

Cần gọi:

```js
sayHello();
```

### Lỗi 2: Quên dấu ngoặc khi gọi hàm

Sai:

```js
sayHello;
```

Đúng:

```js
sayHello();
```

### Lỗi 3: Nhầm `return` và `console.log`

`console.log()` chỉ in ra Console.

`return` trả kết quả về cho nơi gọi hàm.

### Lỗi 4: Tham số và giá trị truyền vào không khớp

```js
function introduce(name, age) {
    console.log(name + " " + age);
}

introduce("An");
```

Khi thiếu `age`, kết quả có thể là `undefined`.

## 8. Bài tập về nhà

Viết các hàm sau:

```js
function sayHello(name) {
    // in ra Xin chào + name
}

function calculateAge(birthYear) {
    // trả về tuổi
}

function getScoreRank(score) {
    // trả về xếp loại điểm
}

function showHobbies(hobbies) {
    // dùng vòng lặp in danh sách sở thích
}
```

## 9. Checklist cuối buổi

- [ ] Em hiểu hàm là gì.
- [ ] Em biết tạo hàm.
- [ ] Em biết gọi hàm.
- [ ] Em biết dùng tham số.
- [ ] Em biết truyền giá trị vào hàm.
- [ ] Em biết dùng `return`.
- [ ] Em phân biệt được `return` và `console.log`.
- [ ] Em viết được hàm xử lý thông tin đơn giản.

## 10. Kết quả cần đạt

Kết thúc buổi này, em biết dùng hàm để chia chương trình thành nhiều phần nhỏ dễ quản lý.
