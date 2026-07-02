# Bài 4. Lambda Version và Alias

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Lambda version là gì.
- Hiểu Lambda alias là gì.
- Biết cách dùng version/alias cho môi trường production.
- Hiểu traffic shifting trong Lambda deployment.

---

## 2. Vấn đề thực tế

Khi deploy function mới, bạn không nên để production luôn chạy code mới nhất một cách thiếu kiểm soát.

Ví dụ:

```text
Version cũ đang chạy ổn định
Developer deploy code mới
Code mới có bug
Toàn bộ user bị lỗi
```

Để giảm rủi ro, Lambda hỗ trợ:

- Version
- Alias
- Traffic shifting

---

## 3. Lambda Version

Version là bản đóng gói cố định của Lambda function.

Khi publish version, AWS tạo ra một bản không thay đổi của function.

Ví dụ:

```text
$LATEST -> code mới nhất đang chỉnh sửa
Version 1 -> bản ổn định đầu tiên
Version 2 -> bản mới deploy
Version 3 -> bản tiếp theo
```

Đặc điểm:

- Version là immutable.
- Khi đã publish, version không bị thay đổi.
- Production nên trỏ tới version ổn định, không nên phụ thuộc trực tiếp vào `$LATEST`.

---

## 4. Lambda Alias

Alias là tên đại diện trỏ tới một Lambda version.

Ví dụ:

```text
Alias dev -> Version 3
Alias staging -> Version 2
Alias prod -> Version 1
```

Khi cần nâng production, ta chỉ cần đổi alias `prod` sang version mới.

Ví dụ:

```text
prod -> Version 1
Sau khi test ổn:
prod -> Version 2
```

---

## 5. Vì sao dùng Alias?

Alias giúp:

- Quản lý môi trường dev/staging/prod.
- Rollback nhanh.
- Giảm rủi ro khi deploy.
- Hỗ trợ traffic shifting.
- Kết hợp tốt với CodeDeploy.

---

## 6. Traffic Shifting

Traffic shifting là chia traffic giữa các version.

Ví dụ:

```text
90% request -> Version 1
10% request -> Version 2
```

Nếu version mới ổn, tăng dần traffic.

Nếu version mới lỗi, rollback về version cũ.

Đây là nền tảng cho canary deployment.

---

## 7. Canary Deployment với Lambda

Canary deployment nghĩa là đưa một phần nhỏ traffic sang version mới trước.

Ví dụ:

```text
Bước 1: 10% traffic sang version mới
Bước 2: Theo dõi error rate
Bước 3: Nếu ổn, chuyển 100%
Bước 4: Nếu lỗi, rollback
```

Trong AWS, Lambda canary deployment thường kết hợp:

- Lambda version
- Lambda alias
- CodeDeploy
- CloudWatch Alarm

---

## 8. Kiến thức thi cần nhớ

- Version là bản cố định, không thay đổi.
- Alias là tên trỏ tới version.
- Production nên dùng alias trỏ tới version ổn định.
- Traffic shifting dùng để giảm rủi ro deploy.
- Canary deployment cho Lambda thường dùng CodeDeploy + Lambda alias.

---

## 9. Keyword tiếng Anh

| Keyword | Nên nghĩ tới |
|---|---|
| stable version for production | Lambda version / alias |
| immutable function snapshot | Lambda version |
| production pointer | Lambda alias |
| traffic shifting | Lambda alias / CodeDeploy |
| gradual deployment | Canary / Linear |
| rollback Lambda version | Alias về version cũ |

---

## 10. Dạng câu hỏi exam thường gặp

### Tình huống 1

Cần giữ bản production ổn định, không bị ảnh hưởng bởi code mới nhất.

Đáp án nên nghĩ tới: **publish Lambda version và dùng alias cho production**.

### Tình huống 2

Cần chuyển 10% traffic sang version mới để kiểm tra.

Đáp án nên nghĩ tới: **Lambda alias traffic shifting hoặc CodeDeploy canary**.

### Tình huống 3

Version mới lỗi, cần quay lại bản cũ nhanh.

Đáp án nên nghĩ tới: **rollback alias về version cũ**.

---

## 11. Bẫy thường gặp

- `$LATEST` không phải lựa chọn tốt cho production ổn định.
- Version đã publish không chỉnh sửa trực tiếp được.
- Alias không phải bản copy code, alias chỉ trỏ tới version.
- Canary deployment cần theo dõi metric/alarm để rollback an toàn.

---

## 12. Bài tập về nhà

### Lý thuyết

1. Lambda version là gì?
2. Lambda alias là gì?
3. Vì sao production nên dùng alias?
4. Traffic shifting là gì?
5. Canary deployment giúp giảm rủi ro như thế nào?

### Lab đề xuất

- Tạo Lambda version 1.
- Sửa code và publish version 2.
- Tạo alias `prod` trỏ tới version 1.
- Chuyển alias `prod` sang version 2.
- Thử rollback alias về version 1.

---

## Ghi nhớ nhanh cuối bài

- Luôn đọc keyword trong đề trước khi chọn service.
- Với Developer Associate, ưu tiên hiểu tình huống sử dụng hơn là học thuộc định nghĩa.
- Khi gặp câu hỏi về quyền truy cập, hãy kiểm tra IAM Role trước.
