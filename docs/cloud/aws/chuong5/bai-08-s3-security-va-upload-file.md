# Bài 8. S3 Security và Upload File

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Biết bảo mật file trong S3.
- Hiểu bucket policy, ACL cơ bản.
- Biết pre-signed URL dùng khi nào.
- Hiểu multipart upload và encryption.

## 2. Vấn đề bảo mật khi upload file

Sai lầm phổ biến:

```text
Public bucket để user upload file trực tiếp.
```

Cách này nguy hiểm vì:

- User có thể truy cập file không nên truy cập.
- Dễ lộ dữ liệu.
- Dễ bị upload file không kiểm soát.
- Không phù hợp với best practices.

Giải pháp thường dùng: S3 pre-signed URL.

## 3. Pre-signed URL là gì?

Pre-signed URL là URL tạm thời cho phép upload/download object private trong một khoảng thời gian nhất định.

Flow phổ biến:

```text
Client -> API Gateway -> Lambda
Lambda tạo pre-signed URL
Client dùng URL đó upload file trực tiếp lên S3
```

Ưu điểm:

- Bucket vẫn private.
- Không cần đưa AWS credentials cho client.
- URL có thời hạn.
- Giảm tải backend vì client upload trực tiếp lên S3.

## 4. Khi nào dùng pre-signed URL?

Dùng khi:

- User upload avatar.
- User upload ảnh booking.
- User download file private.
- File không nên public.
- Backend không muốn nhận file rồi upload lại lên S3.

## 5. Bucket Policy

Bucket policy là resource-based policy cho bucket S3.

Dùng để:

- Cho phép hoặc chặn access vào bucket.
- Giới hạn theo principal.
- Giới hạn theo condition.
- Bắt buộc encryption.

## 6. ACL cơ bản

ACL là cơ chế cấp quyền cũ hơn.

Trong đề thi hiện đại, thường ưu tiên bucket policy/IAM policy hơn ACL nếu có thể.

## 7. Multipart Upload

Multipart upload dùng cho file lớn.

Thay vì upload một lần, file được chia thành nhiều part.

Ưu điểm:

- Upload file lớn ổn định hơn.
- Có thể retry từng part.
- Tăng tốc upload.

Keyword:

```text
large file upload
upload fails for large files
multipart upload
```

## 8. S3 Encryption

S3 hỗ trợ mã hóa dữ liệu at rest.

Một số loại thường gặp:

- SSE-S3
- SSE-KMS
- SSE-C

Developer Associate thường gặp nhất:

```text
Encrypt object using KMS key -> SSE-KMS
```

## 9. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Temporary private access | Pre-signed URL |
| User upload private file | S3 pre-signed URL |
| Avoid exposing AWS credentials | Pre-signed URL / IAM Role |
| Large file upload | Multipart upload |
| Encrypt object with customer key | SSE-KMS |
| Bucket access control | Bucket policy |

## 10. Dạng câu hỏi exam thường gặp

### Tình huống 1

User cần upload ảnh private lên S3, không được public bucket.

Đáp án: tạo pre-signed URL.

### Tình huống 2

File lớn upload hay thất bại.

Đáp án: multipart upload.

### Tình huống 3

Cần mã hóa file bằng key do customer quản lý.

Đáp án: SSE-KMS với customer managed key.

## 11. Bẫy thường gặp

- Pre-signed URL không làm bucket public.
- Không đưa access key/secret key vào frontend.
- Không nên dùng public bucket cho file riêng tư.
- Multipart upload không phải để bảo mật, nó để upload file lớn hiệu quả hơn.

## 12. Lab thực hành

1. Tạo bucket private.
2. Tạo Lambda generate pre-signed URL upload.
3. Client dùng URL upload file.
4. Kiểm tra object trong S3.
5. Bật encryption SSE-KMS cho bucket.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
