# Bài 3. CloudFormation nâng cao

## 1. Mục tiêu bài học

Sau bài này, học viên cần:

- Hiểu Change Set trong CloudFormation.
- Hiểu Drift Detection.
- Biết rollback là gì.
- Biết vì sao không nên sửa resource thủ công ngoài CloudFormation.
- Nhận diện các keyword nâng cao trong đề thi.

---

## 2. Vì sao cần CloudFormation nâng cao?

Khi dự án nhỏ, ta có thể tạo resource một lần rồi ít thay đổi.

Nhưng trong dự án thật, infrastructure thay đổi liên tục:

- Thêm Lambda mới.
- Thêm DynamoDB table.
- Thêm IAM permission.
- Thay đổi API Gateway.
- Cập nhật memory hoặc timeout của Lambda.

Nếu thay đổi không kiểm soát, production dễ bị lỗi.

CloudFormation cung cấp các tính năng giúp kiểm soát thay đổi an toàn hơn.

---

## 3. Change Set là gì?

Change Set cho phép xem trước CloudFormation sẽ thay đổi gì trước khi update stack.

Ví dụ:

```text
Bạn sửa template
-> Tạo Change Set
-> CloudFormation hiển thị resource nào sẽ được thêm/sửa/xóa
-> Bạn kiểm tra
-> Nếu ổn thì Execute Change Set
```

Lợi ích:

- Tránh xóa nhầm resource.
- Biết thay đổi có ảnh hưởng production không.
- Review trước khi apply.

Keyword trong đề: **preview changes before updating stack** → nghĩ đến **Change Set**.

---

## 4. Ví dụ Change Set

Giả sử template ban đầu có:

```text
- 1 Lambda function
- 1 DynamoDB table
```

Sau đó bạn sửa template để thêm:

```text
- 1 SQS queue
```

Change Set sẽ cho biết:

```text
Add: SQS Queue
Modify: none
Delete: none
```

Nếu Change Set hiển thị sẽ xóa DynamoDB table production, bạn có thể dừng lại trước khi gây lỗi.

---

## 5. Drift Detection là gì?

Drift Detection dùng để phát hiện resource thật trên AWS có bị thay đổi khác với template CloudFormation hay không.

Ví dụ:

Template quy định Lambda timeout là 10 giây.

Nhưng ai đó vào AWS Console sửa timeout thành 30 giây.

Lúc này resource đã bị **drift**.

CloudFormation Drift Detection giúp phát hiện sự khác biệt này.

Keyword trong đề: **detect manual changes** → nghĩ đến **Drift Detection**.

---

## 6. Vì sao drift nguy hiểm?

Drift nguy hiểm vì:

- Template không còn phản ánh đúng production.
- Deploy lần sau có thể ghi đè thay đổi thủ công.
- Team khó biết cấu hình thật đang là gì.
- Dễ gây lỗi giữa dev/staging/production.

Best practice:

```text
Không sửa resource thủ công nếu resource đang được quản lý bởi CloudFormation.
```

---

## 7. Rollback trong CloudFormation

Rollback là quay lại trạng thái trước đó khi update stack thất bại.

Ví dụ:

```text
Update stack
-> Tạo resource mới lỗi
-> CloudFormation rollback
-> Stack quay lại trạng thái ổn định trước đó
```

Rollback giúp giảm rủi ro khi triển khai infrastructure.

---

## 8. Stack update

Khi muốn thay đổi infrastructure, ta update stack bằng template mới.

Quy trình tốt:

```text
Sửa template
-> Validate template
-> Create Change Set
-> Review Change Set
-> Execute Change Set
-> Theo dõi stack event
```

---

## 9. Stack event

Stack event cho biết tiến trình tạo hoặc update resource.

Ví dụ:

```text
CREATE_IN_PROGRESS
CREATE_COMPLETE
UPDATE_IN_PROGRESS
UPDATE_COMPLETE
ROLLBACK_IN_PROGRESS
ROLLBACK_COMPLETE
```

Khi deploy lỗi, stack event giúp biết resource nào gây lỗi.

---

## 10. Kiến thức thi cần nhớ

- Change Set dùng để xem trước thay đổi trước khi update stack.
- Drift Detection dùng để phát hiện thay đổi thủ công ngoài template.
- Rollback giúp quay lại trạng thái ổn định khi update lỗi.
- Stack events giúp debug lỗi khi tạo/update stack.
- Không nên sửa resource thủ công nếu resource được quản lý bởi CloudFormation.

---

## 11. Keyword tiếng Anh

| Keyword | Nghĩ tới |
|---|---|
| preview changes | Change Set |
| before updating stack | Change Set |
| detect manual changes | Drift Detection |
| resource differs from template | Drift |
| update failed | Rollback |
| stack events | Troubleshooting CloudFormation |
| infrastructure changed outside template | Drift Detection |

---

## 12. Dạng câu hỏi exam thường gặp

### Tình huống 1

Team muốn biết CloudFormation sẽ thêm, sửa, xóa resource nào trước khi update production stack.

Đáp án: **Change Set**.

### Tình huống 2

Một developer đã sửa security group thủ công trên Console. Team muốn phát hiện resource nào khác với template.

Đáp án: **Drift Detection**.

### Tình huống 3

Update stack thất bại và cần quay lại trạng thái trước đó.

Đáp án: **Rollback**.

### Tình huống 4

CloudFormation update lỗi, cần xem resource nào gây lỗi.

Đáp án: **Stack Events**.

---

## 13. Bẫy thường gặp

- Change Set không dùng để phát hiện thay đổi thủ công đã xảy ra.
  - Việc đó là Drift Detection.

- Drift Detection không dùng để preview thay đổi sắp deploy.
  - Việc đó là Change Set.

- Rollback không phải backup dữ liệu database.
  - Rollback chủ yếu liên quan đến trạng thái stack/resource.

- Stack Events không phải application logs.
  - Application logs thường nằm trong CloudWatch Logs.

---

## 14. Bài tập về nhà

### Lý thuyết

1. Change Set là gì?
2. Khi nào dùng Change Set?
3. Drift Detection là gì?
4. Drift xảy ra khi nào?
5. Vì sao không nên sửa resource thủ công?
6. Rollback là gì?
7. Stack Events dùng để làm gì?
8. Change Set khác Drift Detection thế nào?
9. Drift Detection có tự sửa resource không?
10. CloudFormation có giúp giảm lỗi thao tác thủ công không?

### Tình huống

1. Cần xem trước thay đổi trước khi update production. Dùng gì?
2. Cần phát hiện resource bị sửa ngoài template. Dùng gì?
3. Update stack lỗi. Cần xem lỗi ở đâu?
4. Stack update thất bại cần quay lại bản trước. Gọi là gì?
5. Một Lambda được sửa timeout thủ công. Đây là hiện tượng gì?

### Lab nhỏ

Mô phỏng bằng giấy:

Template ban đầu:

```text
- Lambda A
- DynamoDB Table A
```

Template mới:

```text
- Lambda A sửa memory
- DynamoDB Table A
- SQS Queue A
```

Hãy viết Change Set dự kiến:

```text
Modify: ...
Add: ...
Delete: ...
```
