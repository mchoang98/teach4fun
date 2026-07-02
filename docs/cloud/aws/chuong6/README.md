# Chương 6. Messaging và Event-driven Architecture

## Mục tiêu chương

Sau chương này, học viên cần:

- Hiểu vì sao ứng dụng cloud-native thường dùng xử lý bất đồng bộ.
- Phân biệt được SQS, SNS và EventBridge.
- Biết khi nào dùng queue, khi nào dùng pub/sub, khi nào dùng event bus.
- Hiểu retry, visibility timeout, dead-letter queue và fanout pattern.
- Làm được các câu hỏi tình huống thường gặp trong đề AWS Certified Developer - Associate DVA-C02.

## Danh sách bài học

| Bài | Tên bài |
|---|---|
| Bài 1 | Tổng quan Messaging trên AWS |
| Bài 2 | Amazon SQS cơ bản |
| Bài 3 | Visibility Timeout và Retry trong SQS |
| Bài 4 | Dead-letter Queue |
| Bài 5 | SQS với Lambda |
| Bài 6 | Amazon SNS |
| Bài 7 | SNS kết hợp SQS |
| Bài 8 | Amazon EventBridge |
| Bài 9 | Bài kiểm tra cuối chương |

## Mini project trong chương

Xây một flow xử lý booking bất đồng bộ:

```text
API Gateway
  -> Lambda tạo booking
  -> SQS Queue
  -> Worker Lambda xử lý booking
  -> SNS gửi thông báo
  -> EventBridge chạy job định kỳ
```

## Keyword cần nhớ

| Keyword trong đề | Nghĩ tới |
|---|---|
| decouple application components | SQS |
| asynchronous worker | SQS |
| message processed multiple times | Standard SQS |
| strict ordering | FIFO Queue |
| failed messages | DLQ |
| message invisible while processing | Visibility Timeout |
| pub/sub | SNS |
| fanout | SNS + SQS |
| event bus | EventBridge |
| scheduled event | EventBridge |
