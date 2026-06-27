#  Buổi 4: Vòng lặp và mảng

## 1. Mục tiêu

Sau buổi học này, em cần:

- Hiểu mảng là gì.
- Biết tạo mảng.
- Biết lấy phần tử trong mảng.
- Biết dùng vòng lặp `for`.
- Biết duyệt qua danh sách.
- Biết hiển thị danh sách sở thích hoặc kỹ năng.

## 2. Kiến thức chính

Mảng dùng để lưu nhiều giá trị trong một biến.

```js
let hobbies = ["Đọc sách", "Chơi game", "Lập trình"];
```

Lấy phần tử trong mảng:

```js
console.log(hobbies[0]);
```

Vòng lặp `for`:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 3. Giải thích dễ hiểu

Nếu chỉ lưu một sở thích, ta có thể viết:

```js
let hobby = "Đọc sách";
```

Nhưng nếu có nhiều sở thích thì sao?

```js
let hobby1 = "Đọc sách";
let hobby2 = "Chơi game";
let hobby3 = "Lập trình";
```

Cách này dài và khó quản lý.

Ta dùng mảng:

```js
let hobbies = ["Đọc sách", "Chơi game", "Lập trình"];
```

Mảng giống như một danh sách.

Mỗi phần tử trong mảng có số thứ tự gọi là index.

Lưu ý: index bắt đầu từ `0`.

```text
hobbies[0] = "Đọc sách"
hobbies[1] = "Chơi game"
hobbies[2] = "Lập trình"
```

### Vòng lặp là gì?

Vòng lặp giúp lặp lại một công việc nhiều lần.

Ví dụ thay vì viết:

```js
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
```

Ta có thể viết:

```js
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`JavaScript array index diagram`

- Vị trí chèn:  
Sau phần giải thích index bắt đầu từ 0.

- Chú thích:  
Mảng lưu nhiều giá trị, mỗi giá trị có vị trí riêng gọi là index.

## 5. Ví dụ code

### Ví dụ 1: Tạo mảng sở thích

```js
let hobbies = ["Đọc sách", "Chơi game", "Lập trình"];

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
```

### Ví dụ 2: Duyệt mảng bằng for

```js
let skills = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
```

### Ví dụ 3: In danh sách có số thứ tự

```js
let hobbies = ["Đọc sách", "Chơi game", "Lập trình"];

for (let i = 0; i < hobbies.length; i++) {
    console.log((i + 1) + ". " + hobbies[i]);
}
```

## 6. Thực hành trên lớp

### Bài 1: Tạo mảng sở thích

```js
let hobbies = ["Đọc sách", "Chơi game", "Nghe nhạc"];
```

In từng phần tử ra Console.

### Bài 2: Tạo mảng kỹ năng

```js
let skills = ["HTML", "CSS", "JavaScript"];
```

Dùng vòng lặp để in ra từng kỹ năng.

### Bài 3: In danh sách có thứ tự

Kết quả mong muốn:

```text
1. HTML
2. CSS
3. JavaScript
```

### Bài 4: Tạo mảng tên bạn bè

Tạo mảng gồm 5 tên bạn bè và in ra Console.

## 7. Lỗi thường gặp

### Lỗi 1: Nhầm index bắt đầu từ 1

Sai:

```js
console.log(hobbies[1]);
```

Nếu muốn lấy phần tử đầu tiên, phải dùng:

```js
console.log(hobbies[0]);
```

### Lỗi 2: Điều kiện vòng lặp sai

Sai:

```js
for (let i = 0; i <= hobbies.length; i++) {
    console.log(hobbies[i]);
}
```

Đúng:

```js
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}
```

### Lỗi 3: Quên tăng biến i

Sai:

```js
for (let i = 0; i < 5;) {
    console.log(i);
}
```

Đúng:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 8. Bài tập về nhà

Tạo 3 mảng:

```js
let hobbies = [...];
let skills = [...];
let favoriteFoods = [...];
```

Mỗi mảng có ít nhất 3 phần tử.

Dùng vòng lặp để in từng danh sách ra Console theo dạng:

```text
Danh sách sở thích:
1. ...
2. ...
3. ...
```

## 9. Checklist cuối buổi

- [ ] Em hiểu mảng là gì.
- [ ] Em biết tạo mảng.
- [ ] Em biết lấy phần tử theo index.
- [ ] Em biết index bắt đầu từ 0.
- [ ] Em biết dùng `.length`.
- [ ] Em biết dùng vòng lặp `for`.
- [ ] Em duyệt được danh sách.
- [ ] Em in được danh sách có số thứ tự.

## 10. Kết quả cần đạt

Kết thúc buổi này, em biết dùng mảng và vòng lặp để xử lý danh sách dữ liệu.
