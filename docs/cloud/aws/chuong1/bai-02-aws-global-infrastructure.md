# Bài 2. AWS Global Infrastructure

## 1. Mục tiêu bài học

Sau bài học này, học viên cần:

- Hiểu AWS Global Infrastructure là gì.
- Phân biệt Region và Availability Zone.
- Biết vì sao cần chọn Region phù hợp.
- Hiểu tính sẵn sàng cao ở mức cơ bản.
- Nhận diện keyword về Region/AZ trong đề thi.

---

## 2. AWS Global Infrastructure là gì?

AWS Global Infrastructure là hệ thống hạ tầng toàn cầu của AWS.

AWS đặt hạ tầng ở nhiều khu vực trên thế giới để người dùng có thể triển khai ứng dụng gần khách hàng hơn, tăng tốc độ truy cập và tăng độ ổn định.

Các khái niệm quan trọng:

- Region
- Availability Zone
- Data Center
- Edge Location

Trong chương này, ta tập trung vào Region và Availability Zone.

---

## 3. Region là gì?

Region là một khu vực địa lý nơi AWS đặt hạ tầng cloud.

Ví dụ:

- Singapore
- Tokyo
- Sydney
- Frankfurt
- North Virginia

Khi triển khai dịch vụ AWS, bạn thường phải chọn Region.

Ví dụ:

```text
ap-southeast-1 = Singapore
ap-northeast-1 = Tokyo
us-east-1 = North Virginia
```

---

## 4. Vì sao cần chọn Region phù hợp?

Khi chọn Region, cần cân nhắc:

### 1. Độ trễ

Ứng dụng nên đặt gần người dùng chính.

Ví dụ:

Người dùng ở Việt Nam thường chọn Singapore để giảm độ trễ.

### 2. Chi phí

Mỗi Region có giá dịch vụ khác nhau.

### 3. Dịch vụ hỗ trợ

Không phải dịch vụ AWS nào cũng có mặt ở tất cả Region.

### 4. Quy định dữ liệu

Một số hệ thống yêu cầu dữ liệu phải nằm trong một quốc gia hoặc khu vực nhất định.

---

## 5. Availability Zone là gì?

Availability Zone, thường viết tắt là AZ, là một hoặc nhiều data center độc lập bên trong một Region.

Một Region thường có nhiều Availability Zone.

Ví dụ:

```text
Region: ap-southeast-1
AZ: ap-southeast-1a
AZ: ap-southeast-1b
AZ: ap-southeast-1c
```

Các AZ trong cùng một Region được kết nối tốc độ cao nhưng tách biệt về mặt vật lý.

---

## 6. Vì sao Availability Zone quan trọng?

Availability Zone giúp tăng tính sẵn sàng của hệ thống.

Nếu một AZ gặp sự cố, hệ thống có thể tiếp tục chạy ở AZ khác.

Ví dụ:

- RDS Multi-AZ giúp database có bản dự phòng ở AZ khác.
- Load Balancer có thể phân phối traffic đến EC2 ở nhiều AZ.
- Một số dịch vụ managed của AWS tự động dùng nhiều AZ phía sau.

---

## 7. Data Center là gì?

Data center là trung tâm dữ liệu vật lý.

Bên trong data center có:

- Server
- Storage
- Network device
- Power system
- Cooling system
- Physical security

Người dùng AWS thường không cần quản lý trực tiếp data center. Đây là phần AWS chịu trách nhiệm.

---

## 8. Edge Location là gì?

Edge Location là điểm hạ tầng dùng để đưa nội dung đến gần người dùng hơn.

Dịch vụ thường liên quan:

- CloudFront
- Route 53

Trong Developer Associate, Edge Location không phải phần trọng tâm nhất, nhưng cần biết CloudFront dùng để cache nội dung gần người dùng.

---

## 9. Kiến thức thi cần nhớ

| Khái niệm | Ý nghĩa |
|---|---|
| Region | Khu vực địa lý để triển khai service |
| Availability Zone | Data center độc lập trong một Region |
| Multi-AZ | Triển khai qua nhiều AZ để tăng độ sẵn sàng |
| Latency | Độ trễ giữa user và hệ thống |
| Edge Location | Điểm cache gần user, thường liên quan CloudFront |

---

## 10. Keyword tiếng Anh cần nhớ

| Keyword | Nghĩ tới |
|---|---|
| region | Khu vực triển khai service |
| availability zone | Data center độc lập trong region |
| high availability | Triển khai nhiều AZ |
| fault tolerance | Hệ thống chịu lỗi tốt |
| latency | Độ trễ |
| data residency | Yêu cầu dữ liệu nằm ở khu vực nhất định |
| multi-AZ | Dự phòng qua nhiều AZ |
| edge location | CloudFront/cache gần user |

---

## 11. Bẫy thường gặp

### Bẫy 1: Nhầm Region và AZ

Region là khu vực địa lý lớn. AZ là data center độc lập bên trong Region.

### Bẫy 2: Nghĩ mọi dịch vụ đều global

Nhiều dịch vụ AWS là regional. Khi tạo resource, cần chọn đúng Region.

### Bẫy 3: Chỉ triển khai một AZ cho hệ thống cần sẵn sàng cao

Nếu ứng dụng yêu cầu high availability, nên thiết kế nhiều AZ hoặc dùng managed service có hỗ trợ Multi-AZ.

---

## 12. Lab gợi ý

1. Mở AWS Console.
2. Xem góc trên bên phải để đổi Region.
3. Chọn Region Singapore.
4. Vào EC2 dashboard và xem danh sách Availability Zone.
5. Vào S3 và quan sát bucket có chọn Region khi tạo.

---

## 13. Câu hỏi ôn tập

1. Region là gì?
2. Availability Zone là gì?
3. Một Region có thể có nhiều AZ không?
4. Vì sao nên đặt app gần user?
5. Multi-AZ giúp ích gì?
6. Data center thuộc trách nhiệm của ai?
7. Edge Location thường liên quan đến dịch vụ nào?
8. Vì sao không phải service nào cũng có ở mọi Region?
9. Nếu user ở Việt Nam, Region nào thường được cân nhắc?
10. High availability liên quan gì đến AZ?

---

## 14. Tóm tắt bài học

AWS có hạ tầng toàn cầu. Developer cần hiểu Region và Availability Zone để triển khai ứng dụng đúng vị trí, giảm độ trễ và tăng độ sẵn sàng.

```text
Region = khu vực địa lý
Availability Zone = data center độc lập trong Region
Multi-AZ = tăng độ sẵn sàng
```
