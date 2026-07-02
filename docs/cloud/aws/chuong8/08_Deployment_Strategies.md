# Bài 8. Deployment Strategies

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu các chiến lược deployment phổ biến.
- Phân biệt all-at-once, rolling, immutable, blue/green, canary và linear.
- Biết chọn chiến lược phù hợp theo tình huống đề thi.
- Nhận diện keyword liên quan đến deployment strategy.

---

## 2. Deployment strategy là gì?

Deployment strategy là cách đưa version mới lên production.

Mục tiêu:

- Giảm downtime.
- Giảm rủi ro.
- Có thể rollback.
- Kiểm tra version mới trước khi tất cả user dùng.

Không phải lúc nào cũng nên deploy toàn bộ ngay lập tức.

---

## 3. All-at-once Deployment

All-at-once nghĩa là deploy bản mới cho toàn bộ hệ thống cùng lúc.

Ưu điểm:

- Nhanh.
- Đơn giản.
- Ít phức tạp.

Nhược điểm:

- Rủi ro cao.
- Nếu bản mới lỗi, toàn bộ user bị ảnh hưởng.
- Có thể có downtime.

Phù hợp:

- Môi trường dev/test.
- App nhỏ.
- Production ít quan trọng.

---

## 4. Rolling Deployment

Rolling deployment cập nhật từng phần của hệ thống.

Ví dụ có 10 server:

```text
Cập nhật 2 server trước
-> Nếu ổn, cập nhật 2 server tiếp
-> Tiếp tục đến khi xong
```

Ưu điểm:

- Giảm rủi ro hơn all-at-once.
- Hệ thống vẫn có thể phục vụ trong lúc deploy.

Nhược điểm:

- Trong lúc deploy, version cũ và mới cùng tồn tại.
- Rollback có thể mất thời gian.

---

## 5. Immutable Deployment

Immutable deployment tạo môi trường mới hoàn toàn cho version mới.

Sau khi môi trường mới ổn, traffic được chuyển sang môi trường mới.

Ưu điểm:

- An toàn hơn rolling.
- Không sửa trực tiếp môi trường cũ.
- Rollback dễ hơn.

Nhược điểm:

- Tốn thêm resource trong lúc deploy.
- Chậm hơn all-at-once.

---

## 6. Blue/Green Deployment

Blue/green có hai môi trường:

```text
Blue = version hiện tại đang chạy
Green = version mới
```

Khi Green đã sẵn sàng, traffic chuyển từ Blue sang Green.

Ưu điểm:

- Giảm downtime.
- Rollback nhanh bằng cách chuyển traffic lại Blue.
- Phù hợp production.

Nhược điểm:

- Cần duy trì hai môi trường.
- Chi phí cao hơn.

Keyword: **separate old and new environment** → Blue/Green.

---

## 7. Canary Deployment

Canary deployment đưa một phần nhỏ traffic sang version mới trước.

Ví dụ:

```text
10% traffic -> version mới
90% traffic -> version cũ
Sau 10 phút nếu ổn -> 100% traffic version mới
```

Ưu điểm:

- Rủi ro thấp.
- Phát hiện lỗi sớm với ít user.
- Phù hợp production quan trọng.

Nhược điểm:

- Cần monitoring tốt.
- Cần quản lý traffic.

Keyword: **small percentage of traffic first** → Canary.

---

## 8. Linear Deployment

Linear deployment tăng traffic theo từng bước đều nhau.

Ví dụ:

```text
10% -> 20% -> 30% -> ... -> 100%
```

Ưu điểm:

- Chuyển traffic từ từ.
- Kiểm soát tốt hơn all-at-once.

Nhược điểm:

- Mất thời gian hơn.
- Cần monitoring.

Keyword: **gradually increase traffic** → Linear.

---

## 9. So sánh nhanh

| Strategy | Cách hoạt động | Rủi ro | Tốc độ |
|---|---|---|---|
| All-at-once | Deploy toàn bộ ngay | Cao | Nhanh |
| Rolling | Deploy từng phần | Trung bình | Trung bình |
| Immutable | Tạo môi trường mới | Thấp | Chậm hơn |
| Blue/Green | Hai môi trường cũ/mới | Thấp | Nhanh khi switch |
| Canary | Một phần nhỏ traffic trước | Thấp | Trung bình |
| Linear | Tăng traffic từng bước | Thấp | Chậm |

---

## 10. Lambda deployment strategy

Với Lambda, các chiến lược thường gặp:

- All-at-once
- Canary
- Linear

Thường dùng với:

```text
CodeDeploy + Lambda Alias
```

Ví dụ:

```text
Canary10Percent5Minutes
Linear10PercentEvery1Minute
AllAtOnce
```

---

## 11. Kiến thức thi cần nhớ

- All-at-once nhanh nhưng rủi ro cao.
- Rolling cập nhật từng phần.
- Immutable tạo môi trường mới thay vì sửa môi trường cũ.
- Blue/green dùng hai môi trường riêng biệt.
- Canary đưa ít traffic sang version mới trước.
- Linear tăng traffic đều theo thời gian.
- Lambda traffic shifting thường dùng CodeDeploy + Lambda Alias.

---

## 12. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| deploy all users immediately | All-at-once |
| update instances in batches | Rolling |
| create new environment | Immutable |
| separate old and new environment | Blue/Green |
| small percentage first | Canary |
| gradually increase traffic | Linear |
| traffic shifting Lambda | CodeDeploy + Lambda Alias |
| quick rollback by switching traffic | Blue/Green |

---

## 13. Dạng câu hỏi exam thường gặp

### Tình huống 1

Production app cần deploy bản mới cho 10% user trước để kiểm tra lỗi.

Đáp án: **Canary deployment**.

### Tình huống 2

Team muốn có hai môi trường cũ và mới, có thể rollback nhanh bằng cách chuyển traffic.

Đáp án: **Blue/Green deployment**.

### Tình huống 3

Team muốn tăng traffic từ version cũ sang mới theo từng bước đều nhau.

Đáp án: **Linear deployment**.

### Tình huống 4

Môi trường dev cần deploy nhanh, không quan trọng rủi ro.

Đáp án: **All-at-once**.

---

## 14. Bẫy thường gặp

- Canary và Linear đều chuyển traffic dần, nhưng khác nhau:
  - Canary: một phần nhỏ trước, sau đó có thể chuyển toàn bộ.
  - Linear: tăng đều từng bước.

- Blue/Green không giống Rolling.
  - Blue/Green có hai môi trường riêng.
  - Rolling update từng phần trên fleet hiện tại.

- Immutable không sửa trực tiếp môi trường cũ.
  - Nó tạo môi trường mới.

- All-at-once không phù hợp production quan trọng nếu muốn giảm rủi ro.

---

## 15. Bài tập về nhà

### Lý thuyết

1. Deployment strategy là gì?
2. All-at-once là gì?
3. Rolling deployment là gì?
4. Immutable deployment là gì?
5. Blue/Green deployment là gì?
6. Canary deployment là gì?
7. Linear deployment là gì?
8. Strategy nào rủi ro cao nhất?
9. Strategy nào dùng hai môi trường riêng?
10. Lambda traffic shifting thường dùng service nào?

### Tình huống

1. Cần deploy nhanh cho dev. Chọn strategy nào?
2. Cần deploy 10% traffic trước. Chọn strategy nào?
3. Cần tăng traffic từng bước. Chọn strategy nào?
4. Cần rollback nhanh bằng cách chuyển traffic lại môi trường cũ. Chọn strategy nào?
5. Cần tạo môi trường mới hoàn toàn trước khi switch. Chọn strategy nào?

### Lab nhỏ

Viết bảng so sánh 3 strategy:

```text
Canary
Linear
Blue/Green
```

Theo 4 tiêu chí:

- Cách hoạt động
- Rủi ro
- Tốc độ
- Khi nào nên dùng
