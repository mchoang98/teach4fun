#  Buổi 5: Form HTML đầy đủ

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết tạo form HTML.
- Biết dùng `label`.
- Biết dùng nhiều loại `input`.
- Biết dùng `textarea`.
- Biết dùng `select` và `option`.
- Biết dùng `radio` và `checkbox`.
- Biết dùng `required`, `placeholder`, `name`.
- Hiểu vì sao form cần thuộc tính `name`.

## 2. Kiến thức chính

Các thẻ và thuộc tính:

```html
<form>
<label>
<input>
<textarea>
<select>
<option>
<button>
```

Input type thường dùng:

```text
text
email
tel
number
date
radio
checkbox
password
```

## 3. Giải thích dễ hiểu

Form là nơi người dùng nhập dữ liệu.

Ví dụ:

- Form liên hệ.
- Form đăng ký.
- Form đặt hàng.
- Form thêm sản phẩm.

Trong HTML, mỗi ô nhập nên có `name`.  
Khi học backend Flask, server sẽ dựa vào `name` để lấy dữ liệu.

Ví dụ:

```html
<input type="text" name="full_name">
```

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML form input types example`

- Vị trí chèn:  
Sau phần giải thích form.

- Chú thích:  
Form giúp người dùng nhập và gửi dữ liệu lên website.

## 5. Ví dụ code

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form liên hệ</title>
</head>
<body>
    <h1>Form liên hệ</h1>

    <form>
        <label for="full_name">Họ tên:</label><br>
        <input type="text" id="full_name" name="full_name" placeholder="Nhập họ tên" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="Nhập email" required><br><br>

        <label for="phone">Số điện thoại:</label><br>
        <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại"><br><br>

        <label for="age">Tuổi:</label><br>
        <input type="number" id="age" name="age" min="1"><br><br>

        <label for="birthday">Ngày sinh:</label><br>
        <input type="date" id="birthday" name="birthday"><br><br>

        <label for="topic">Chủ đề liên hệ:</label><br>
        <select id="topic" name="topic">
            <option value="study">Học tập</option>
            <option value="project">Dự án</option>
            <option value="other">Khác</option>
        </select><br><br>

        <p>Giới tính:</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Nam</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Nữ</label><br><br>

        <p>Kỹ năng quan tâm:</p>
        <input type="checkbox" id="html" name="skills" value="html">
        <label for="html">HTML</label>

        <input type="checkbox" id="css" name="skills" value="css">
        <label for="css">CSS</label>

        <input type="checkbox" id="js" name="skills" value="javascript">
        <label for="js">JavaScript</label><br><br>

        <label for="message">Nội dung:</label><br>
        <textarea id="message" name="message" placeholder="Nhập nội dung liên hệ"></textarea><br><br>

        <button type="submit">Gửi liên hệ</button>
    </form>
</body>
</html>
```

## 6. Thực hành trên lớp

Tạo form đăng ký gồm:

- Họ tên.
- Email.
- Số điện thoại.
- Tuổi.
- Ngày sinh.
- Chủ đề quan tâm.
- Giới tính.
- Kỹ năng muốn học.
- Nội dung ghi chú.
- Nút gửi.

## 7. Lỗi thường gặp

### Lỗi 1: Input thiếu name

Sai:

```html
<input type="text">
```

Đúng:

```html
<input type="text" name="full_name">
```

### Lỗi 2: Label không liên kết với input

Nên dùng:

```html
<label for="email">Email</label>
<input id="email" name="email">
```

### Lỗi 3: Radio cùng nhóm nhưng name khác nhau

Radio cùng nhóm phải có cùng `name`.

Đúng:

```html
<input type="radio" name="gender">
<input type="radio" name="gender">
```

## 8. Bài tập về nhà

Tạo form đăng ký khóa học gồm:

- Họ tên.
- Email.
- Số điện thoại.
- Tuổi.
- Khóa học muốn đăng ký.
- Lịch học mong muốn.
- Ghi chú.
- Checkbox đồng ý điều khoản.
- Nút gửi.

## 9. Checklist cuối buổi

- [ ] Em biết tạo form.
- [ ] Em biết dùng label.
- [ ] Em biết dùng input text.
- [ ] Em biết dùng input email.
- [ ] Em biết dùng input number.
- [ ] Em biết dùng select.
- [ ] Em biết dùng radio.
- [ ] Em biết dùng checkbox.
- [ ] Em biết dùng textarea.
- [ ] Em hiểu vai trò của `name`.

## 10. Kết quả cần đạt

Kết thúc buổi này, em tạo được form HTML đầy đủ và sẵn sàng học xử lý form bằng JavaScript hoặc Flask.
