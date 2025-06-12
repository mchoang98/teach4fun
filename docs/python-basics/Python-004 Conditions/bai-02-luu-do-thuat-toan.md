
# **Bài 4-2: Lưu đồ thuật toán với if else**

## 1. **Lưu đồ thuật toán là gì?**

Lưu đồ thuật toán (flowchart) là **biểu đồ trực quan** mô tả trình tự thực hiện các bước trong một thuật toán. Trong lập trình, lưu đồ giúp học sinh dễ hiểu logic của chương trình trước khi viết mã nguồn.

## 2. **Biểu tượng trong lưu đồ**

| **Biểu tượng**           | **Ý nghĩa**                                | **Hình ảnh minh hoạ**                        |
| ------------------------ | ------------------------------------------ | -------------------------------------------- |
| **Terminal (Start/End)** | Bắt đầu hoặc kết thúc chương trình         | ![Terminal](https://i.imgur.com/9RIhZDf.png) |
| **Process (Thao tác)**   | Thực hiện một hành động như tính toán, gán | ![Process](https://i.imgur.com/ykqkHf3.png)  |
| **Decision (Điều kiện)** | Kiểm tra điều kiện (rẽ nhánh if/else)      | ![Decision](https://i.imgur.com/2MrEayh.png) |
| **Arrow (Mũi tên)**      | Chỉ hướng đi của luồng xử lý               | ![Arrow](https://i.imgur.com/c93fA4R.png)    |

---

## 3. **Lưu đồ cho câu lệnh `if - else`**

Câu lệnh `if - else` thường được biểu diễn bằng **hình thoi** rẽ nhánh thành **2 hướng: Đúng và Sai**.

### Ví dụ 1: Kiểm tra số chẵn hay lẻ

Giả sử ta cần viết chương trình kiểm tra một số nguyên `n` là **chẵn hay lẻ**:

```python
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
```

### Lưu đồ minh họa:

🖼️ **Cách chèn ảnh lưu đồ** vào bài giảng:

Trong Markdown (hoặc bất kỳ trình soạn thảo HTML nào), bạn có thể thêm ảnh bằng cú pháp:

```markdown
![Lưu đồ chẵn lẻ](duong-dan-anh.png)
```

> 📝 **Gợi ý**: Bạn có thể tải lên ảnh từ máy tính, hoặc dùng ảnh vừa tạo như sau:

```markdown
![Flowchart - Kiểm tra số chẵn lẻ](A_flowchart_titled_"Bài_4-1:_Câu_lệnh_điều_kiện_tr.png)
```

---

## 4. **Lưu đồ nhiều điều kiện với `if - elif - else`**

Khi cần kiểm tra **nhiều trường hợp**, ta dùng `if - elif - else`.

### Ví dụ: Phân loại điểm số

```python
if score >= 8:
    print("Giỏi")
elif score >= 6.5:
    print("Khá")
elif score >= 5:
    print("Trung bình")
else:
    print("Yếu")
```

### Lưu đồ minh họa:

* Mỗi nhánh `elif` là một hình thoi mới nối tiếp nhánh sai của điều kiện trước.
* Có thể biểu diễn bằng **nhiều tầng hình thoi** nối tiếp nhau.

---

## 5. **Lưu đồ lồng nhau (`nested if`)**

Khi đặt một câu lệnh `if` bên trong một `if` khác, ta cần vẽ lưu đồ lồng 2 điều kiện lại với nhau.

### Ví dụ:

```python
if n >= 0:
    if n % 2 == 0:
        print("Số chẵn dương")
    else:
        print("Số lẻ dương")
else:
    print("Số âm")
```

### Lưu đồ:

* Một hình thoi kiểm tra `n >= 0`

  * Nếu đúng, đi tiếp vào nhánh `n % 2 == 0`
  * Nếu sai, kết luận là số âm

---

## 6. **Tóm tắt cách vẽ lưu đồ điều kiện**

| Thành phần       | Biểu diễn                   |
| ---------------- | --------------------------- |
| Điều kiện        | 🔷 Hình thoi                |
| Hành động        | ⬛ Hình chữ nhật             |
| Bắt đầu/Kết thúc | 🔽 Hình oval                |
| Chuyển bước      | ➡ Mũi tên nối giữa các bước |

---

## 7. **Tự luyện**

👉 Hãy chọn một trong các bài sau và **vẽ lưu đồ bằng tay hoặc phần mềm**:

1. Kiểm tra số âm/dương/0
2. Tìm số lớn nhất trong 3 số
3. Phân loại học lực

---

Nếu bạn cần hỗ trợ tạo ảnh lưu đồ cho từng bài cụ thể, hãy nói rõ đề bài. Mình có thể **tạo hình ảnh lưu đồ tự động** cho bạn.
