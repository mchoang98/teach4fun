# Bài giảng Buổi 6: Bảng, iframe và hoàn thiện Portfolio HTML

## 1. Mục tiêu

Sau buổi học này, em cần:

- Biết tạo bảng HTML.
- Biết dùng `table`, `tr`, `th`, `td`.
- Biết dùng `thead`, `tbody`.
- Biết nhúng video hoặc bản đồ bằng `iframe`.
- Biết kiểm tra lỗi HTML cơ bản.
- Hoàn thiện Portfolio cá nhân bằng HTML.

## 2. Kiến thức chính

Bảng HTML:

```html
<table>
    <thead>
        <tr>
            <th>Tiêu đề cột</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dữ liệu</td>
        </tr>
    </tbody>
</table>
```

Iframe:

```html
<iframe src="https://www.youtube.com/embed/video_id" title="Video giới thiệu"></iframe>
```

## 3. Giải thích dễ hiểu

Bảng dùng để hiển thị dữ liệu theo hàng và cột.

Ví dụ:

- Bảng thông tin cá nhân.
- Bảng lịch học.
- Bảng kỹ năng.
- Bảng sản phẩm.

Iframe dùng để nhúng nội dung từ website khác vào trang của mình.

Ví dụ:

- Video YouTube.
- Google Map.
- Nội dung bên ngoài.

## 4. Hình minh họa nên chèn

- Từ khóa Google:  
`HTML table iframe example`

- Vị trí chèn:  
Sau phần giải thích bảng và iframe.

- Chú thích:  
Table dùng để trình bày dữ liệu dạng bảng, iframe dùng để nhúng nội dung bên ngoài.

## 5. Ví dụ code

### Bảng thông tin cá nhân

```html
<h2>Thông tin cá nhân</h2>

<table border="1">
    <thead>
        <tr>
            <th>Thông tin</th>
            <th>Nội dung</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Họ tên</td>
            <td>Nguyễn Văn An</td>
        </tr>
        <tr>
            <td>Tuổi</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Sở thích</td>
            <td>Lập trình web</td>
        </tr>
    </tbody>
</table>
```

### Nhúng video YouTube

```html
<h2>Video yêu thích</h2>

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video YouTube"
    allowfullscreen>
</iframe>
```

## 6. Thực hành trên lớp

Hoàn thiện Portfolio HTML với các phần:

- Header.
- Menu.
- Ảnh đại diện.
- Giới thiệu.
- Kỹ năng.
- Sở thích.
- Bảng thông tin cá nhân.
- Form liên hệ.
- Video hoặc bản đồ nhúng.
- Footer.

## 7. Lỗi thường gặp

### Lỗi 1: Bảng thiếu tr

Sai:

```html
<table>
    <td>Họ tên</td>
</table>
```

Đúng:

```html
<table>
    <tr>
        <td>Họ tên</td>
    </tr>
</table>
```

### Lỗi 2: Iframe thiếu title

Nên có:

```html
title="Video giới thiệu"
```

### Lỗi 3: Code khó đọc

Nên thụt dòng rõ ràng.

## 8. Bài tập về nhà

Hoàn thiện dự án cuối chương: Portfolio cá nhân bằng HTML.

Yêu cầu:

- Có cấu trúc HTML chuẩn.
- Có semantic layout.
- Có ảnh đại diện.
- Có danh sách kỹ năng.
- Có danh sách sở thích.
- Có bảng thông tin.
- Có form liên hệ.
- Có iframe.
- Có liên kết nội bộ hoặc liên kết ngoài.

## 9. Checklist cuối buổi

- [ ] Em biết tạo bảng.
- [ ] Em biết dùng `tr`.
- [ ] Em biết dùng `th`.
- [ ] Em biết dùng `td`.
- [ ] Em biết dùng `thead`.
- [ ] Em biết dùng `tbody`.
- [ ] Em biết dùng iframe.
- [ ] Em hoàn thiện Portfolio HTML.
- [ ] Em kiểm tra lỗi cơ bản.

## 10. Kết quả cần đạt

Kết thúc buổi này, em hoàn thành Portfolio cá nhân bằng HTML, sẵn sàng học CSS để làm đẹp giao diện.
