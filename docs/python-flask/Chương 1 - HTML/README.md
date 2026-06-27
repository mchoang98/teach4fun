# GIÁO TRÌNH TUẦN 1: HTML CƠ BẢN

## Mục tiêu tuần học

| Nội dung           | Mục tiêu                                                                 |
| ------------------ | ------------------------------------------------------------------------ |
| Kiến thức chính    | Hiểu cấu trúc cơ bản của một trang HTML                                  |
| Kỹ năng thực hành  | Tạo được trang giới thiệu bản thân đơn giản                              |
| Sản phẩm cuối tuần | Một trang HTML có văn bản, hình ảnh, danh sách, liên kết và form liên hệ |
| Thời lượng đề xuất | 3 buổi học, mỗi buổi 2–3 giờ                                             |

---

## Kế hoạch học Tuần 1

| Buổi   | Chủ đề              | Nội dung học                                                                                                                                                 | Thực hành trên lớp                                                                                          | Bài tập về nhà                                                                                    | Kết quả cần đạt                                                                  |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Buổi 1 | Làm quen với HTML   | HTML là gì; vai trò của HTML trong website; cấu trúc file HTML; cách tạo file `index.html`; cách mở file HTML bằng trình duyệt                               | Tạo file `index.html`; viết trang web đầu tiên với tiêu đề và đoạn văn giới thiệu                           | Viết một trang HTML giới thiệu bản thân gồm họ tên, tuổi, nghề nghiệp, sở thích                   | Học viên hiểu được cấu trúc cơ bản của file HTML và chạy được trang web đầu tiên |
| Buổi 2 | Các thẻ HTML cơ bản | Thẻ tiêu đề `h1` đến `h6`; thẻ đoạn văn `p`; thẻ xuống dòng `br`; thẻ in đậm `strong`; thẻ in nghiêng `em`; thẻ liên kết `a`; thẻ danh sách `ul`, `ol`, `li` | Tạo trang giới thiệu có tiêu đề, đoạn mô tả, danh sách kỹ năng, danh sách sở thích và liên kết mạng xã hội  | Thêm ít nhất 2 liên kết vào trang cá nhân, ví dụ Facebook, GitHub hoặc email                      | Học viên biết dùng các thẻ HTML cơ bản để trình bày nội dung                     |
| Buổi 3 | Hình ảnh và Form    | Thẻ hình ảnh `img`; thuộc tính `src`, `alt`, `width`; form HTML; thẻ `input`, `textarea`, `button`, `label`; thuộc tính `type`, `placeholder`, `required`    | Thêm ảnh đại diện vào trang cá nhân; tạo form liên hệ gồm họ tên, email, số điện thoại và nội dung tin nhắn | Hoàn thiện trang giới thiệu bản thân có ảnh, thông tin cá nhân, danh sách kỹ năng và form liên hệ | Học viên hoàn thành trang HTML giới thiệu bản thân cơ bản                        |

---

## Nội dung chi tiết từng buổi

### Buổi 1: Làm quen với HTML

| Phần học           | Nội dung                                                             |
| ------------------ | -------------------------------------------------------------------- |
| Mục tiêu           | Hiểu HTML là gì và tạo được file HTML đầu tiên                       |
| Kiến thức          | HTML là ngôn ngữ đánh dấu dùng để xây dựng cấu trúc nội dung website |
| Công cụ            | Visual Studio Code, trình duyệt Chrome hoặc Edge                     |
| File cần tạo       | `index.html`                                                         |
| Thẻ học trong buổi | `html`, `head`, `title`, `body`, `h1`, `p`                           |

#### Mẫu code buổi 1

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào, tôi là Phú</h1>
    <p>Tôi đang học lập trình Fullstack Web.</p>
</body>
</html>
```

#### Bài thực hành buổi 1

| Yêu cầu      | Mô tả                                          |
| ------------ | ---------------------------------------------- |
| Tạo file     | Tạo file tên `index.html`                      |
| Thêm tiêu đề | Viết tiêu đề chính bằng thẻ `h1`               |
| Thêm mô tả   | Viết một đoạn giới thiệu bản thân bằng thẻ `p` |
| Chạy thử     | Mở file bằng trình duyệt để xem kết quả        |

---

### Buổi 2: Các thẻ HTML cơ bản

| Phần học           | Nội dung                                                     |
| ------------------ | ------------------------------------------------------------ |
| Mục tiêu           | Biết cách trình bày nội dung bằng các thẻ HTML phổ biến      |
| Kiến thức          | Tiêu đề, đoạn văn, danh sách, liên kết                       |
| Thẻ học trong buổi | `h1`, `h2`, `h3`, `p`, `strong`, `em`, `a`, `ul`, `ol`, `li` |
| Sản phẩm nhỏ       | Trang cá nhân có thông tin, kỹ năng, sở thích và liên kết    |

#### Mẫu code buổi 2

```html
<!DOCTYPE html>
<html>
<head>
    <title>Giới thiệu bản thân</title>
</head>
<body>
    <h1>Nguyễn Văn A</h1>

    <h2>Giới thiệu</h2>
    <p>Tôi là học viên đang học lập trình web.</p>

    <h2>Kỹ năng</h2>
    <ul>
        <li>HTML cơ bản</li>
        <li>Sử dụng VS Code</li>
        <li>Tư duy xây dựng website</li>
    </ul>

    <h2>Sở thích</h2>
    <ol>
        <li>Đọc sách</li>
        <li>Lập trình</li>
        <li>Thiết kế website</li>
    </ol>

    <h2>Liên hệ</h2>
    <p>
        Facebook:
        <a href="https://facebook.com" target="_blank">Trang Facebook của tôi</a>
    </p>
</body>
</html>
```

#### Bài thực hành buổi 2

| Yêu cầu                 | Mô tả                                                    |
| ----------------------- | -------------------------------------------------------- |
| Thêm phần giới thiệu    | Viết 3–5 dòng mô tả bản thân                             |
| Thêm danh sách kỹ năng  | Dùng `ul`, `li`                                          |
| Thêm danh sách sở thích | Dùng `ol`, `li`                                          |
| Thêm liên kết           | Dùng thẻ `a` để liên kết tới Facebook, GitHub hoặc email |
| Kiểm tra trang          | Mở trên trình duyệt và kiểm tra liên kết hoạt động       |

---

### Buổi 3: Hình ảnh và Form

| Phần học           | Nội dung                                              |
| ------------------ | ----------------------------------------------------- |
| Mục tiêu           | Biết cách thêm hình ảnh và tạo form nhập dữ liệu      |
| Kiến thức          | Thẻ hình ảnh, form, input, textarea, button           |
| Thẻ học trong buổi | `img`, `form`, `label`, `input`, `textarea`, `button` |
| Sản phẩm nhỏ       | Trang giới thiệu có ảnh đại diện và form liên hệ      |

#### Mẫu code buổi 3

```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio cá nhân</title>
</head>
<body>
    <h1>Nguyễn Văn A</h1>

    <img src="avatar.jpg" alt="Ảnh đại diện" width="200">

    <h2>Giới thiệu</h2>
    <p>Tôi đang học lập trình Fullstack Web với HTML, CSS, JavaScript và Flask.</p>

    <h2>Kỹ năng</h2>
    <ul>
        <li>HTML</li>
        <li>Thiết kế giao diện web</li>
        <li>Tạo form liên hệ</li>
    </ul>

    <h2>Form liên hệ</h2>

    <form>
        <label>Họ tên:</label><br>
        <input type="text" placeholder="Nhập họ tên" required><br><br>

        <label>Email:</label><br>
        <input type="email" placeholder="Nhập email" required><br><br>

        <label>Số điện thoại:</label><br>
        <input type="tel" placeholder="Nhập số điện thoại"><br><br>

        <label>Nội dung:</label><br>
        <textarea placeholder="Nhập nội dung liên hệ"></textarea><br><br>

        <button type="submit">Gửi liên hệ</button>
    </form>
</body>
</html>
```

#### Bài thực hành buổi 3

| Yêu cầu                | Mô tả                                       |
| ---------------------- | ------------------------------------------- |
| Thêm ảnh đại diện      | Dùng thẻ `img`                              |
| Thêm mô tả bản thân    | Viết đoạn giới thiệu ngắn                   |
| Thêm danh sách kỹ năng | Tối thiểu 3 kỹ năng                         |
| Tạo form liên hệ       | Gồm họ tên, email, số điện thoại, nội dung  |
| Thêm nút gửi           | Dùng thẻ `button`                           |
| Kiểm tra form          | Bấm gửi thử để kiểm tra các trường bắt buộc |

---

## Dự án cuối tuần: Trang giới thiệu bản thân bằng HTML

| Hạng mục                 | Yêu cầu                                                      |
| ------------------------ | ------------------------------------------------------------ |
| Tên dự án                | Trang giới thiệu bản thân                                    |
| File chính               | `index.html`                                                 |
| Nội dung bắt buộc        | Họ tên, ảnh đại diện, giới thiệu, kỹ năng, sở thích, liên hệ |
| Thành phần HTML bắt buộc | Tiêu đề, đoạn văn, danh sách, liên kết, hình ảnh, form       |
| Mức độ hoàn thành        | Trang mở được trên trình duyệt và hiển thị đúng nội dung     |
| Nâng cao                 | Thêm bảng thông tin cá nhân hoặc nhúng video YouTube         |

---

## Checklist đánh giá cuối tuần

| Tiêu chí                          | Đạt / Chưa đạt |
| --------------------------------- | -------------- |
| Tạo được file `index.html`        |                |
| Có cấu trúc HTML đầy đủ           |                |
| Có tiêu đề trang bằng thẻ `title` |                |
| Có tiêu đề chính bằng thẻ `h1`    |                |
| Có đoạn giới thiệu bản thân       |                |
| Có danh sách kỹ năng              |                |
| Có danh sách sở thích             |                |
| Có ít nhất 1 liên kết             |                |
| Có ảnh đại diện                   |                |
| Có form liên hệ                   |                |
| Form có ô nhập họ tên             |                |
| Form có ô nhập email              |                |
| Form có ô nhập nội dung           |                |
| Có nút gửi form                   |                |
| Trang mở được trên trình duyệt    |                |

---

## Bài tập tổng hợp cuối tuần

| Bài tập | Mô tả                                                         |
| ------- | ------------------------------------------------------------- |
| Bài 1   | Tạo trang giới thiệu bản thân bằng HTML                       |
| Bài 2   | Thêm ảnh đại diện vào trang                                   |
| Bài 3   | Thêm danh sách kỹ năng và sở thích                            |
| Bài 4   | Thêm liên kết tới Facebook, GitHub hoặc email                 |
| Bài 5   | Tạo form liên hệ gồm họ tên, email, số điện thoại và nội dung |
| Bài 6   | Kiểm tra lại toàn bộ trang trên trình duyệt                   |

---

## Kết quả sau Tuần 1

| Kết quả               | Mô tả                                                 |
| --------------------- | ----------------------------------------------------- |
| Kiến thức             | Hiểu HTML là gì và biết cấu trúc cơ bản của trang web |
| Kỹ năng               | Tạo được trang web tĩnh bằng HTML                     |
| Sản phẩm              | Một trang giới thiệu bản thân hoàn chỉnh ở mức cơ bản |
| Chuẩn bị cho tuần sau | Sẵn sàng học CSS để làm đẹp giao diện                 |
