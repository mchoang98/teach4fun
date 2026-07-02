# Bài 5. Kỹ năng đọc đề tiếng Anh AWS

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Biết đọc câu hỏi AWS tiếng Anh theo ý chính.
- Không bị hoảng khi gặp đoạn đề dài.
- Biết tìm keyword quan trọng.
- Biết loại đáp án sai bằng yêu cầu chính của đề.

## 2. Cách đọc đề AWS

Không cần dịch từng chữ.

Hãy đọc theo 4 bước:

```text
Bước 1: Xác định hệ thống đang gặp vấn đề gì
Bước 2: Tìm yêu cầu chính của đề
Bước 3: Gạch keyword quan trọng
Bước 4: Loại đáp án sai, chọn đáp án đúng nhất
```

## 3. Các nhóm từ khóa quan trọng

### Nhóm yêu cầu bảo mật

| Từ khóa tiếng Anh | Ý nghĩa |
|---|---|
| secure | an toàn |
| least privilege | quyền tối thiểu |
| temporary credentials | credentials tạm thời |
| encrypt at rest | mã hóa khi lưu trữ |
| encrypt in transit | mã hóa khi truyền |
| rotate secrets | xoay vòng secret |
| avoid hard-coded credentials | tránh ghi credentials trong code |

### Nhóm yêu cầu performance

| Từ khóa tiếng Anh | Ý nghĩa |
|---|---|
| low latency | độ trễ thấp |
| high throughput | thông lượng cao |
| throttling | bị giới hạn request/capacity |
| scale automatically | tự động scale |
| optimize performance | tối ưu hiệu năng |
| cache response | cache kết quả |

### Nhóm yêu cầu reliability

| Từ khóa tiếng Anh | Ý nghĩa |
|---|---|
| highly available | sẵn sàng cao |
| fault tolerant | chịu lỗi |
| retry | thử lại |
| dead-letter queue | hàng đợi lỗi |
| rollback | quay lại phiên bản cũ |
| minimize downtime | giảm downtime |

### Nhóm yêu cầu deployment

| Từ khóa tiếng Anh | Ý nghĩa |
|---|---|
| artifact | file build để deploy |
| pipeline | quy trình tự động |
| buildspec.yml | file cấu hình CodeBuild |
| canary | deploy một phần nhỏ traffic |
| blue/green | môi trường cũ/mới song song |
| infrastructure as code | hạ tầng bằng code |

## 4. Mẫu phân tích câu hỏi

Ví dụ:

```text
A company runs a serverless application using API Gateway and Lambda.
Users report intermittent 502 errors. The developer wants to identify the root cause.
What should the developer do?
```

Cách phân tích:

- Serverless application: API Gateway + Lambda.
- Lỗi: 502.
- Yêu cầu: identify root cause.
- Dịch vụ cần nghĩ tới: CloudWatch Logs, API Gateway logs, Lambda logs, X-Ray nếu trace nhiều service.

Không cần dịch toàn bộ câu. Chỉ cần biết đề đang hỏi lỗi gì và cần công cụ nào.

## 5. Kỹ thuật loại đáp án sai

### Loại theo service sai mục đích

Ví dụ:

- Cần decouple → SQS.
- Đáp án chọn SNS đơn thuần có thể sai nếu cần queue worker.

### Loại theo bảo mật sai

Ví dụ:

- Đáp án hard-code access key thường sai.
- Đáp án cấp AdministratorAccess thường sai nếu đề nói least privilege.

### Loại theo performance sai

Ví dụ:

- DynamoDB dữ liệu lớn mà đáp án dùng Scan thường sai.
- API cần cache mà đáp án tăng Lambda memory có thể không đúng trọng tâm.

### Loại theo yêu cầu “most secure”, “least operational overhead”

Các cụm này rất quan trọng:

| Cụm từ | Cách hiểu |
|---|---|
| most secure | chọn giải pháp bảo mật nhất |
| least operational overhead | chọn giải pháp ít vận hành nhất |
| cost-effective | tối ưu chi phí |
| minimal changes | ít thay đổi nhất |
| most scalable | scale tốt nhất |

## 6. Từ vựng AWS hay gặp

| Từ | Nghĩa dễ hiểu |
|---|---|
| invoke | gọi/chạy function |
| permission | quyền |
| role | vai trò/quyền tạm cho service |
| policy | tài liệu định nghĩa quyền |
| provisioned | cấu hình trước |
| on-demand | dùng đến đâu tính đến đó |
| throughput | lượng xử lý |
| latency | độ trễ |
| availability | độ sẵn sàng |
| durability | độ bền dữ liệu |
| encryption | mã hóa |
| credentials | thông tin xác thực |
| endpoint | điểm gọi API |
| integration | tích hợp |
| payload | dữ liệu gửi đi |

## 7. Bài tập luyện đọc đề

Với mỗi câu hỏi AWS, hãy ghi ra:

```text
1. Service chính trong đề:
2. Vấn đề đang xảy ra:
3. Keyword quan trọng:
4. Yêu cầu cuối cùng:
5. Đáp án có thể loại:
6. Đáp án chọn:
7. Lý do chọn:
```

## 8. Bài tập về nhà

- Chọn 10 câu tiếng Anh bất kỳ trong đề luyện DVA.
- Không dịch từng chữ.
- Chỉ gạch keyword.
- Viết lại ý chính bằng tiếng Việt.
- Ghi lý do chọn đáp án đúng.
