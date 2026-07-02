# Bài 9. Optimization cho Developer

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu optimization trong AWS gồm performance và cost.
- Biết tối ưu Lambda, DynamoDB, API Gateway, S3 và SQS ở mức Developer Associate.
- Biết chọn giải pháp tối ưu theo keyword trong đề thi.
- Biết tránh tối ưu sai hướng.

---

## 2. Optimization là gì?

Optimization là làm hệ thống tốt hơn theo một hoặc nhiều mục tiêu:

- Chạy nhanh hơn.
- Ổn định hơn.
- Ít lỗi hơn.
- Chi phí thấp hơn.
- Dễ scale hơn.

Trong đề thi DVA-C02, optimization thường gắn với:

```text
performance
cost
latency
throttling
cold start
cache
retry
batch processing
```

---

## 3. Tối ưu Lambda

## Memory tuning

Lambda memory ảnh hưởng đến CPU.

Tăng memory có thể làm Lambda chạy nhanh hơn, dù chi phí mỗi ms cao hơn. Nếu thời gian chạy giảm nhiều, tổng chi phí có thể không tăng hoặc còn giảm.

Cần xem:

```text
Duration
Max Memory Used
Billed Duration
```

## Provisioned concurrency

Dùng khi cần giảm cold start và giữ latency ổn định.

Phù hợp với:

- API production cần phản hồi nhanh.
- Traffic có thể dự đoán.
- Ứng dụng nhạy cảm với latency.

## Giảm package size

Package nhỏ giúp giảm cold start.

Nên:

- Chỉ package dependency cần thiết.
- Tách shared code bằng Lambda Layers nếu hợp lý.
- Tránh init code quá nặng.

---

## 4. Tối ưu DynamoDB

## Chọn capacity mode

| Tình huống | Nên chọn |
|---|---|
| Traffic khó dự đoán | On-demand |
| Traffic ổn định | Provisioned + Auto Scaling |
| Cần kiểm soát chi phí | Provisioned nếu dự đoán được |

## Thiết kế partition key tốt

Partition key nên phân bố traffic đều.

Tránh hot partition.

Ví dụ không tốt:

```text
partitionKey = status
```

Nếu tất cả booking mới đều có status `PENDING`, partition này có thể rất nóng.

## Dùng Query thay vì Scan

Scan đọc toàn table, chậm và tốn chi phí.

Query theo partition key hiệu quả hơn.

## DAX

DAX là cache cho DynamoDB, phù hợp workload đọc nhiều, cần latency thấp.

---

## 5. Tối ưu API Gateway

## API Gateway caching

Dùng khi response lặp lại và không cần real-time tuyệt đối.

Ví dụ:

- Danh sách category.
- Config public.
- Dữ liệu ít thay đổi.

Không phù hợp nếu response thay đổi theo từng user hoặc cần dữ liệu mới ngay.

## Throttling

Throttling giúp bảo vệ backend khỏi traffic quá lớn.

Có thể kết hợp:

- Usage Plan.
- API Key.
- Client retry với exponential backoff.

---

## 6. Tối ưu S3

## Lifecycle policy

Tự động chuyển object sang storage class rẻ hơn hoặc xóa sau thời gian nhất định.

Ví dụ:

```text
Log file sau 30 ngày -> S3 Standard-IA
Sau 365 ngày -> Glacier
Sau 3 năm -> Delete
```

## Multipart upload

Dùng cho file lớn để upload ổn định và hiệu quả hơn.

## Pre-signed URL

Cho phép client upload/download trực tiếp với S3, giảm tải backend.

Flow tốt:

```text
Client -> API Gateway -> Lambda tạo pre-signed URL
Client -> upload trực tiếp lên S3
```

---

## 7. Tối ưu SQS và xử lý batch

## Batch processing

Xử lý nhiều message cùng lúc có thể giảm overhead.

Lambda consume SQS có thể cấu hình batch size.

## Partial batch failure

Giúp chỉ retry message lỗi, không retry cả batch.

## Visibility timeout phù hợp

Visibility timeout nên lớn hơn thời gian xử lý message.

Nếu quá ngắn, message có thể bị xử lý lặp.

---

## 8. Retry và exponential backoff

Khi gặp lỗi tạm thời như throttling, không nên retry liên tục ngay lập tức.

Nên dùng:

```text
exponential backoff
jitter
```

Điều này giúp giảm áp lực lên service đang bị quá tải.

---

## 9. Bảng chọn giải pháp tối ưu

| Vấn đề | Giải pháp nên nghĩ tới |
|---|---|
| Lambda cold start | Provisioned concurrency, giảm package size |
| Lambda chạy chậm | Memory tuning, tối ưu code |
| DynamoDB throttling | On-demand, auto scaling, backoff, key design |
| Query DynamoDB chậm | Query thay Scan, thêm GSI |
| API response lặp lại | API Gateway caching |
| Backend quá tải | Throttling, SQS decoupling |
| File lớn upload lỗi | S3 multipart upload |
| Backend tốn tài nguyên upload file | S3 pre-signed URL |
| SQS message retry cả batch | Partial batch failure |
| Data cũ trong S3 tốn tiền | Lifecycle policy |

---

## 10. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| reduce cold start | Provisioned concurrency |
| stable low latency | Provisioned concurrency |
| optimize Lambda performance | Memory tuning |
| repeated read / microsecond latency | DAX |
| avoid full table scan | Query / GSI |
| reduce backend load | API Gateway caching / SQS |
| large file upload | Multipart upload |
| temporary direct upload | S3 pre-signed URL |
| reduce storage cost | S3 lifecycle |
| retry throttled requests | Exponential backoff |
| process messages in batch | Lambda SQS batch size |

---

## 11. Dạng câu hỏi exam thường gặp

1. Lambda cold start làm API chậm.
2. Lambda chạy lâu và tốn chi phí.
3. DynamoDB bị throttling khi traffic không dự đoán được.
4. App đang dùng Scan và bị chậm.
5. API response lặp lại, cần giảm tải backend.
6. User upload file lớn qua backend làm backend quá tải.
7. S3 chứa file cũ nhiều năm gây tốn chi phí.
8. SQS batch retry lại nhiều message đã xử lý thành công.

---

## 12. Bẫy thường gặp

## Bẫy 1: Tăng Lambda timeout không phải tối ưu performance

Tăng timeout chỉ cho Lambda thêm thời gian chạy. Nó không làm code nhanh hơn.

## Bẫy 2: DAX không thay thế thiết kế key tốt

DAX giúp cache đọc, nhưng nếu access pattern sai hoặc dùng Scan nhiều, vẫn cần thiết kế lại key/GSI.

## Bẫy 3: API Gateway caching không phù hợp với dữ liệu thay đổi liên tục

Nếu dữ liệu phải luôn mới, caching có thể gây sai dữ liệu.

## Bẫy 4: Pre-signed URL không có nghĩa file public vĩnh viễn

Pre-signed URL có thời hạn và dùng để cấp quyền tạm thời.

---

## 13. Lab thực hành

### Lab 1: Tối ưu Lambda memory

1. Tạo Lambda xử lý một tác vụ tính toán.
2. Chạy với memory 128 MB.
3. Ghi lại Duration và Max Memory Used.
4. Tăng lên 512 MB.
5. So sánh Duration và Billed Duration.

### Lab 2: S3 pre-signed URL

1. Tạo API tạo pre-signed URL.
2. Client upload file trực tiếp lên S3.
3. So sánh với flow upload qua backend.

### Lab 3: API Gateway caching

1. Tạo endpoint trả danh sách category.
2. Bật API Gateway caching.
3. Gọi API nhiều lần.
4. Quan sát backend giảm số lần xử lý.

---

## 14. Bài tập về nhà

1. Provisioned concurrency dùng để giải quyết vấn đề gì?
2. Vì sao tăng memory có thể giúp Lambda chạy nhanh hơn?
3. Khi DynamoDB traffic khó dự đoán, nên chọn capacity mode nào?
4. Khi file lớn upload thất bại, nên dùng tính năng nào của S3?
5. Khi muốn giảm chi phí lưu trữ file cũ, nên dùng gì?
