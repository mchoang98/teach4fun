# Bài 5. Capacity và Performance trong DynamoDB

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu On-demand và Provisioned capacity.
- Biết RCU và WCU là gì.
- Hiểu nguyên nhân DynamoDB throttling.
- Biết các hướng xử lý performance cơ bản.

## 2. Capacity mode trong DynamoDB

DynamoDB có 2 chế độ capacity chính:

1. On-demand
2. Provisioned

## 3. On-demand capacity

On-demand phù hợp khi:

- Traffic khó dự đoán.
- App mới chưa biết tải thực tế.
- Muốn đơn giản, không cấu hình RCU/WCU.
- Chấp nhận chi phí có thể cao hơn nếu traffic lớn.

Keyword:

```text
unpredictable workload
unknown traffic pattern
serverless simple scaling
```

## 4. Provisioned capacity

Provisioned phù hợp khi:

- Traffic có thể dự đoán.
- Muốn kiểm soát chi phí.
- Biết cần bao nhiêu read/write capacity.

Provisioned dùng:

- RCU: Read Capacity Unit
- WCU: Write Capacity Unit

## 5. RCU và WCU

### RCU

RCU đại diện cho năng lực đọc.

Nếu đọc quá nhiều vượt capacity, DynamoDB có thể throttling.

### WCU

WCU đại diện cho năng lực ghi.

Nếu ghi quá nhiều vượt capacity, DynamoDB có thể throttling.

## 6. Throttling là gì?

Throttling xảy ra khi request vượt quá khả năng xử lý được cấp.

Dấu hiệu:

- Request bị lỗi throttling.
- Latency tăng.
- App cần retry.
- CloudWatch metric báo throttled requests.

## 7. Nguyên nhân throttling thường gặp

- Provisioned capacity quá thấp.
- Hot partition.
- Dùng Scan quá nhiều.
- GSI bị thiếu capacity.
- Traffic tăng đột biến.

## 8. Hot partition là gì?

Hot partition xảy ra khi quá nhiều request tập trung vào cùng một partition key.

Ví dụ xấu:

```text
Partition Key: status
```

Nếu phần lớn item có status `PENDING`, tất cả request đổ vào một partition.

## 9. Cách xử lý performance

Các hướng thường gặp:

- Dùng On-demand nếu traffic khó dự đoán.
- Tăng RCU/WCU nếu dùng Provisioned.
- Thiết kế partition key phân tán tốt hơn.
- Tránh Scan.
- Dùng retry với exponential backoff.
- Kiểm tra GSI capacity.
- Dùng DAX cho read-heavy workload nếu phù hợp.

## 10. Keyword tiếng Anh cần nhớ

| Keyword trong đề | Nên nghĩ tới |
|---|---|
| Unpredictable traffic | On-demand |
| Predictable traffic | Provisioned |
| Read capacity | RCU |
| Write capacity | WCU |
| Throttling | Capacity / hot partition / retry |
| Hot partition | Poor partition key design |
| Exponential backoff | Retry strategy |

## 11. Dạng câu hỏi exam thường gặp

### Tình huống 1

DynamoDB table bị throttling khi traffic tăng bất ngờ.

Đáp án có thể là: chuyển sang On-demand hoặc tăng capacity.

### Tình huống 2

Một partition key nhận phần lớn request.

Đáp án thường là: thiết kế lại partition key để phân tán workload.

### Tình huống 3

Ứng dụng cần retry khi bị throttled.

Đáp án thường là: exponential backoff.

## 12. Bẫy thường gặp

- Tăng capacity không giải quyết triệt để nếu lỗi là hot partition.
- GSI cũng có thể bị throttling.
- Dùng Scan nhiều sẽ làm tốn capacity.
- DAX không thay thế thiết kế key tốt.

## 13. Lab thực hành

1. Tạo table DynamoDB với On-demand.
2. Quan sát CloudWatch metrics.
3. Chuyển sang Provisioned nếu muốn thử nghiệm.
4. Tạo nhiều request đọc/ghi.
5. Kiểm tra metric read/write capacity.

---

## Bài tập về nhà

1. Ghi lại 5 keyword tiếng Anh quan trọng trong bài.
2. Viết lại bằng lời của mình: khi nào nên dùng service trong bài.
3. Làm 5 câu trắc nghiệm tự luyện hoặc nhờ giáo viên cung cấp thêm.
4. Nếu có tài khoản AWS, thực hành lại lab theo từng bước.
