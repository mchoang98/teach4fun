# Bài 10-1: Đọc Ghi File Trong Python 

### 1. Giới Thiệu  

Trong thế giới của Doraemon, có một bảo bối đặc biệt có thể ghi nhớ tất cả những gì Nobita viết vào và đọc lại khi cần. Đó chính là **Cuốn Sổ Ghi Nhớ Vạn Năng**. Trong Python, chúng ta có thể tạo ra một công cụ tương tự bằng cách sử dụng tính năng **đọc và ghi file**.  

Hãy cùng khám phá cách Doraemon giúp Nobita lưu trữ những ghi chú quan trọng của mình bằng lập trình Python!  

---

### 2. Cách Đọc Và Ghi File Trong Python  

Trong Python, chúng ta có thể thao tác với file bằng các chế độ sau:  

- **"r"** (read) – Chỉ đọc file.  
- **"w"** (write) – Ghi đè file (nếu file đã tồn tại, nội dung cũ sẽ bị xóa).  
- **"a"** (append) – Ghi tiếp vào cuối file.  
- **"r+"** (read and write) – Vừa đọc vừa ghi file.  

Doraemon sẽ tạo một chương trình giúp Nobita ghi lại những gì cần nhớ vào **Cuốn Sổ Ghi Nhớ Vạn Năng** và đọc lại khi cần.  

---

### 3. Ví Dụ: **Cuốn Sổ Ghi Nhớ Vạn Năng**  

Doraemon giúp Nobita ghi lại danh sách bài tập về nhà vào file `"so_ghi_nho.txt"` và đọc lại khi cần.  

#### **Ghi File (Nobita viết vào sổ)**  

```python
# Mở file ở chế độ ghi ('w') để viết nội dung mới
with open("so_ghi_nho.txt", "w", encoding="utf-8") as so:
    so.write("1. Làm bài tập Toán trang 15\n")
    so.write("2. Học thuộc bảng cửu chương\n")
    so.write("3. Viết đoạn văn về Doraemon\n")

print("Doraemon: Nobita, tớ đã ghi lại bài tập vào sổ cho cậu rồi!")
```

👉 **Khi chạy chương trình trên, một file `"so_ghi_nho.txt"` sẽ được tạo và lưu lại các bài tập.**  

---

#### **Đọc File (Nobita mở sổ ra xem lại)**  

```python
# Mở file ở chế độ đọc ('r') và hiển thị nội dung
with open("so_ghi_nho.txt", "r", encoding="utf-8") as so:
    noi_dung = so.read()

print("📖 Nobita mở sổ ra xem lại:")
print(noi_dung)
```

👉 **Sau khi chạy, Nobita sẽ thấy danh sách bài tập xuất hiện trên màn hình!**  

---

### 4. Ghi Tiếp Vào File (Nobita bổ sung thêm bài tập)  

Bây giờ, Nobita nhớ ra còn bài tập tiếng Anh nữa, cậu ấy muốn bổ sung vào sổ mà không làm mất nội dung cũ. Doraemon sẽ giúp cậu ấy sử dụng chế độ `"a"` (append).  

```python
# Mở file ở chế độ ghi tiếp ('a') để thêm nội dung mà không xóa nội dung cũ
with open("so_ghi_nho.txt", "a", encoding="utf-8") as so:
    so.write("4. Dịch 5 câu tiếng Anh sang tiếng Nhật\n")

print("Doraemon: Tớ đã thêm bài tập tiếng Anh vào sổ của cậu rồi!")
```

👉 **Khi mở lại file, nội dung sẽ có thêm bài tập tiếng Anh.**  

---

### 5. Đọc File Theo Dòng (Nobita đọc từng dòng một)  

Nobita muốn đọc từng bài tập một cách chậm rãi. Doraemon sẽ giúp cậu ấy sử dụng phương thức `readlines()` để đọc từng dòng một.  

```python
# Mở file và đọc từng dòng
with open("so_ghi_nho.txt", "r", encoding="utf-8") as so:
    for dong in so.readlines():
        print(f"Nobita đọc: {dong.strip()}")
```

👉 **Chương trình sẽ hiển thị từng bài tập một cách tuần tự.**  

---

### 6. Xóa Nội Dung File (Doraemon giúp Nobita làm lại từ đầu)  

Nếu Nobita muốn viết lại từ đầu, Doraemon sẽ sử dụng chế độ `"w"` để xóa toàn bộ nội dung cũ và ghi mới.  

```python
with open("so_ghi_nho.txt", "w", encoding="utf-8") as so:
    so.write("Sổ mới, không còn bài tập cũ!\n")

print("Doraemon: Tớ đã giúp cậu tạo một cuốn sổ mới!")
```

---

### 7. Bài Tập Vận Dụng  

#### **Bài Tập 1:**  
Doraemon giúp Nobita ghi danh sách bạn bè vào một file `"ban_be.txt"`. Viết chương trình ghi tên 5 người bạn vào file và đọc lại danh sách này.  

#### **Bài Tập 2:**  
Doraemon có bảo bối **Máy Nhớ Lại**. Hãy viết chương trình lưu lại những điều vui vẻ mà Nobita đã trải qua trong ngày, sau đó hiển thị chúng mỗi khi Nobita buồn.  

#### **Bài Tập 3:**  
Shizuka muốn lưu danh sách các quyển sách cô ấy đã đọc. Viết chương trình giúp cô ấy thêm sách mới vào file `"sach.txt"` mà không làm mất sách cũ.  

---

### 8. Tổng Kết  

- **Doraemon đã giúp Nobita hiểu cách đọc và ghi file trong Python!**  
- **Ghi file bằng `"w"`**, ghi tiếp bằng `"a"`, và đọc file bằng `"r"`.  
- **Có thể đọc file theo từng dòng để xem nội dung tuần tự.**  
- **Có thể xóa nội dung file bằng cách mở file ở chế độ `"w"` và ghi lại.**  

🔹 **Bây giờ, Nobita đã có một cuốn sổ ghi nhớ vạn năng do Doraemon tạo ra, giúp cậu ấy ghi lại mọi thứ quan trọng mà không sợ quên mất!** 🎉