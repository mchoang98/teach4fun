# Bài 10-2: Làm Việc Với JSON 

### 1. Giới Thiệu  

Trong thế giới Doraemon, có một bảo bối giúp lưu trữ và chia sẻ dữ liệu vô cùng nhanh chóng, đó là **Hộp Nhớ Mọi Thứ**. Nobita có thể ghi lại thông tin về bạn bè, bài tập, hay danh sách bảo bối mà Doraemon mang đến.  

Trong Python, chúng ta có một công cụ tương tự để lưu trữ dữ liệu có cấu trúc, gọi là **JSON (JavaScript Object Notation)**. Hãy cùng Doraemon khám phá cách sử dụng JSON để quản lý thông tin một cách dễ dàng nhé!  

---

### 2. JSON Là Gì?  

JSON là một định dạng phổ biến dùng để lưu trữ và trao đổi dữ liệu giữa các chương trình. Nó có cấu trúc gần giống **dictionary** trong Python, với các cặp **key-value**.  

Ví dụ về một tệp JSON chứa danh sách bảo bối của Doraemon:  

```json
{
    "bao_boi": [
        {"ten": "Chong chóng tre", "cong_dung": "Giúp bay trên không"},
        {"ten": "Cánh cửa thần kỳ", "cong_dung": "Dịch chuyển tức thì"},
        {"ten": "Túi thần kỳ", "cong_dung": "Chứa tất cả bảo bối"}
    ]
}
```

---

### 3. Đọc Và Ghi Dữ Liệu JSON Trong Python  

Để làm việc với JSON trong Python, chúng ta sử dụng thư viện **json**.  

📌 **Các thao tác chính với JSON:**  
✅ Chuyển **dictionary** thành chuỗi JSON (serialize)  
✅ Chuyển chuỗi JSON thành **dictionary** (deserialize)  
✅ Ghi JSON vào file  
✅ Đọc JSON từ file  

---

### 4. Ví Dụ: **Lưu Trữ Bảo Bối Của Doraemon**  

#### **Chuyển Dictionary Thành Chuỗi JSON**  

Doraemon muốn lưu danh sách bảo bối vào JSON để dễ dàng chia sẻ với bạn bè.  

```python
import json

# Danh sách bảo bối của Doraemon dưới dạng dictionary
bao_boi = {
    "bao_boi": [
        {"ten": "Chong chóng tre", "cong_dung": "Giúp bay trên không"},
        {"ten": "Cánh cửa thần kỳ", "cong_dung": "Dịch chuyển tức thì"},
        {"ten": "Túi thần kỳ", "cong_dung": "Chứa tất cả bảo bối"}
    ]
}

# Chuyển dictionary thành chuỗi JSON
json_bao_boi = json.dumps(bao_boi, indent=4, ensure_ascii=False)
print(json_bao_boi)
```

📌 **Giải thích:**  
- `json.dumps()` chuyển dictionary thành chuỗi JSON.  
- `indent=4` giúp hiển thị JSON đẹp hơn.  
- `ensure_ascii=False` giúp hiển thị tiếng Việt đúng cách.  

---

#### **Ghi Dữ Liệu JSON Vào File**  

Doraemon muốn lưu bảo bối vào một file JSON để sau này có thể tra cứu lại.  

```python
# Ghi JSON vào file "bao_boi.json"
with open("bao_boi.json", "w", encoding="utf-8") as file:
    json.dump(bao_boi, file, indent=4, ensure_ascii=False)

print("Doraemon: Đã lưu danh sách bảo bối vào file 'bao_boi.json'!")
```

📌 **Giải thích:**  
- `json.dump()` ghi dictionary vào file dưới dạng JSON.  

---

#### **Đọc Dữ Liệu JSON Từ File**  

Bây giờ Nobita muốn kiểm tra xem Doraemon đã lưu bảo bối gì.  

```python
# Đọc JSON từ file
with open("bao_boi.json", "r", encoding="utf-8") as file:
    du_lieu = json.load(file)

# Hiển thị danh sách bảo bối
print("Danh sách bảo bối của Doraemon:")
for bb in du_lieu["bao_boi"]:
    print(f"- {bb['ten']}: {bb['cong_dung']}")
```

📌 **Giải thích:**  
- `json.load()` đọc file JSON và chuyển thành dictionary trong Python.  

---

### 5. Thêm Bảo Bối Mới Vào JSON  

Doraemon vừa nhận thêm một bảo bối mới: **"Bánh mì trí nhớ"** giúp Nobita học bài siêu nhanh. Cậu ấy muốn thêm nó vào danh sách.  

```python
# Đọc dữ liệu cũ
with open("bao_boi.json", "r", encoding="utf-8") as file:
    du_lieu = json.load(file)

# Thêm bảo bối mới
du_lieu["bao_boi"].append({"ten": "Bánh mì trí nhớ", "cong_dung": "Học bài siêu nhanh"})

# Ghi lại file JSON
with open("bao_boi.json", "w", encoding="utf-8") as file:
    json.dump(du_lieu, file, indent=4, ensure_ascii=False)

print("Doraemon: Đã thêm 'Bánh mì trí nhớ' vào danh sách bảo bối!")
```

👉 **Khi mở lại file `"bao_boi.json"`, chúng ta sẽ thấy bảo bối mới đã được thêm vào.**  

---

### 6. Bài Tập Vận Dụng  

#### **Bài Tập 1:**  
Doraemon giúp Nobita lưu danh sách bạn bè vào file `"ban_be.json"`. Viết chương trình lưu tên và sở thích của 5 người bạn vào JSON.  

#### **Bài Tập 2:**  
Shizuka muốn lưu danh sách các cuốn sách yêu thích của cô ấy. Viết chương trình giúp cô ấy thêm sách mới vào file `"sach_yeu_thich.json"`.  

#### **Bài Tập 3:**  
Doraemon muốn tạo **sổ điểm của Nobita** với danh sách môn học và điểm số. Viết chương trình giúp Nobita cập nhật điểm mới vào JSON.  

---

### 7. Tổng Kết  

🚀 **Doraemon đã giúp Nobita hiểu cách làm việc với JSON trong Python!**  
✅ **Lưu dữ liệu dưới dạng JSON để dễ dàng quản lý**  
✅ **Ghi dữ liệu vào file để sử dụng sau này**  
✅ **Đọc dữ liệu từ file JSON và hiển thị trên màn hình**  
✅ **Thêm hoặc cập nhật dữ liệu JSON một cách dễ dàng**  

📝 **Với bảo bối "Hộp Nhớ Mọi Thứ" này, Nobita không còn lo quên bài tập hay danh sách bảo bối nữa!** 🎉