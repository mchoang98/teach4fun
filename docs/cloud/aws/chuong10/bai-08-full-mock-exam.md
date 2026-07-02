# Bài 8. Full Mock Exam

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết cách làm full mock exam giống thi thật.
- Biết canh thời gian.
- Biết đánh giá mức sẵn sàng trước khi đăng ký thi.
- Biết review mock exam để tăng điểm.

## 2. Full mock exam là gì?

Full mock exam là đề mô phỏng bài thi thật.

Đề thi AWS Developer Associate thường có:

- 65 câu hỏi.
- Câu hỏi trắc nghiệm một đáp án hoặc nhiều đáp án.
- Nội dung phủ 4 domain.
- Nhiều câu tình huống dài.

## 3. Khi nào nên làm full mock?

Không nên làm full mock ngay từ đầu.

Nên làm full mock khi:

- Đã học xong toàn bộ service trọng tâm.
- Đã làm mini test từng domain.
- Điểm mini test thường đạt từ 70% trở lên.
- Đã có notebook câu sai.

## 4. Quy trình làm full mock

### Bước 1. Chuẩn bị

- Tắt điện thoại hoặc thông báo gây xao nhãng.
- Chuẩn bị giấy nháp.
- Không tra Google.
- Không xem đáp án giữa chừng.

### Bước 2. Làm đề như thi thật

Trong lúc làm đề:

- Đọc câu hỏi trước.
- Gạch keyword.
- Loại 2 đáp án sai trước.
- Đánh dấu câu chưa chắc.
- Không mất quá nhiều thời gian cho một câu.

### Bước 3. Chấm điểm

Ghi lại:

```text
Ngày làm đề:
Tên đề:
Tổng số câu:
Số câu đúng:
Tỷ lệ đúng:
Domain yếu nhất:
Service sai nhiều nhất:
```

### Bước 4. Review câu sai

Với mỗi câu sai, ghi:

```text
Câu số:
Domain:
Service:
Keyword:
Lý do sai:
Kiến thức cần học lại:
Ghi nhớ ngắn:
```

## 5. Mục tiêu điểm

| Giai đoạn | Mục tiêu |
|---|---:|
| Full mock đầu tiên | 60–70% |
| Sau khi review câu sai | 70–75% |
| Trước khi thi thật | 75–80% ổn định |
| Mức an toàn | Trên 80% |

Nếu mock exam dưới 60%, chưa nên thi. Cần quay lại học service trọng tâm.

## 6. Chiến thuật làm bài

### Chiến thuật 1. Đọc yêu cầu cuối câu trước

Nhiều câu rất dài. Hãy nhìn đoạn cuối để biết đề hỏi gì:

- What should the developer do?
- Which solution is the MOST secure?
- Which solution requires the LEAST operational overhead?
- Which option is the MOST cost-effective?

### Chiến thuật 2. Tìm keyword

Ví dụ:

- decouple → SQS.
- fanout → SNS + SQS.
- user login → Cognito User Pool.
- distributed tracing → X-Ray.
- buildspec.yml → CodeBuild.

### Chiến thuật 3. Loại đáp án sai rõ ràng

Các đáp án thường sai:

- Hard-code credentials.
- Cấp quyền quá rộng.
- Dùng Scan cho dữ liệu lớn.
- Dùng API Key làm authentication user.
- Dùng service không đúng mục đích.

### Chiến thuật 4. Đừng đổi đáp án nếu không có lý do rõ ràng

Nếu đã chọn theo keyword và logic, đừng đổi chỉ vì cảm giác.

Chỉ đổi khi phát hiện keyword quan trọng bị bỏ sót.

## 7. Sau mỗi mock exam cần làm gì?

Không làm đề mới ngay.

Hãy làm theo thứ tự:

1. Review toàn bộ câu sai.
2. Ghi keyword mới.
3. Học lại service sai nhiều.
4. Làm lại câu sai sau 2–3 ngày.
5. Sau đó mới làm mock tiếp theo.

## 8. Bảng theo dõi mock exam

| Lần | Ngày | Điểm | Domain yếu | Service sai nhiều | Ghi chú |
|---:|---|---:|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

## 9. Bài tập về nhà

- Làm 1 full mock exam 65 câu.
- Không tra tài liệu khi làm.
- Ghi điểm và domain yếu nhất.
- Review ít nhất 20 câu sai hoặc câu chưa chắc.
- Tạo danh sách 10 service cần ôn lại.
