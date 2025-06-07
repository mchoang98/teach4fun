# Cài đặt Guizero


### **Tải xuống từ GitHub**

1. Truy cập kho lưu trữ guizero trên [GitHub](https://github.com/lawsie/guizero).
2. Nhấn nút màu xanh **"Code"**, sau đó chọn **"Download ZIP"**.
3. Tải tệp ZIP về máy tính.
4. Mở tệp ZIP vừa tải.
5. Mở thư mục **guizero-master**, sau đó **sao chép thư mục `guizero`** bên trong và **dán vào thư mục chính (home directory)** của bạn.

#### **Windows**

* Sao chép thư mục `guizero` và dán vào thư mục chính của người dùng.

#### **macOS**

* Sao chép thư mục `guizero` và dán vào thư mục chính của người dùng.

➡️ **Lưu ý:** Khi viết mã guizero, hãy đảm bảo bạn lưu file Python trong thư mục chính (nơi bạn đã dán thư mục `guizero`).

---

## **Cài đặt bằng dòng lệnh**

Bạn có thể dùng **Command Prompt** hoặc **Terminal** để cài đặt guizero cho:

* Windows
* macOS
* Raspberry Pi
* Linux

Bạn cũng có thể dùng `pip` để cài đặt thêm tính năng hoặc nâng cấp guizero.

---

### **Windows**

1. Mở **Command Prompt** bằng cách:

   * Nhấn Start > Windows System > Command Prompt
   * Hoặc gõ "command" trong thanh tìm kiếm

2. Gõ lệnh sau để cài đặt guizero bằng pip:

```bash
pip3 install guizero
```

📌 Nếu gặp sự cố, hãy tham khảo hướng dẫn **Sử dụng pip trên Windows**.

---

### **macOS**

1. Mở **Terminal** bằng cách:

   * Mở Applications > Utilities > Terminal
   * Hoặc gõ "terminal" trong thanh tìm kiếm

2. Gõ lệnh sau để cài đặt guizero:

```bash
pip3 install guizero
```

---

### **Raspberry Pi**

1. Mở Terminal bằng cách:

   * Nhấn Menu > Accessories > Terminal

2. Gõ lệnh sau để cài đặt guizero qua `apt`:

```bash
sudo apt-get install python3-guizero
```

📝 **Lưu ý:** Phiên bản cài đặt qua `apt` có thể không phải là phiên bản mới nhất. Bạn luôn có thể cài đặt bản mới nhất bằng `pip`.

---

### **Linux**

1. Mở Terminal.
2. Cài đặt tkinter bằng trình quản lý gói của hệ điều hành (nếu chưa có):

```bash
sudo apt install python3-tk
```

3. Cài đặt guizero bằng pip:

```bash
pip3 install guizero
```

Hoặc (nếu bạn cần quyền quản trị):

```bash
sudo pip3 install guizero
```

📝 Nếu bạn dùng Debian, bạn cũng có thể cài qua `apt`:

```bash
sudo apt-get install python3-guizero
```

---

## **Cài đặt tính năng hình ảnh bổ sung**

Để sử dụng các tính năng hình ảnh mở rộng của guizero như:

* Hỗ trợ ảnh JPG
* Phóng to/thu nhỏ hình ảnh
* Ảnh động GIF

Bạn cần cài **PIL/Pillow (thư viện xử lý ảnh cho Python)**.

### **Cài bằng pip:**

```bash
pip3 install guizero[images]
```

### **Cài bằng apt (Raspberry Pi / Linux):**

```bash
sudo apt-get install python3-pillow
```

📌 **Lưu ý:** Các tính năng hình ảnh bổ sung **không thể cài đặt bằng phương pháp “cài đặt dễ dàng” (Easy install)**.

---

## **Nâng cấp guizero**

Cách bạn cài guizero sẽ quyết định cách nâng cấp.

### **Nếu cài bằng pip:**

```bash
pip3 install guizero --upgrade
```

### **Nếu cài bằng apt:**

```bash
sudo apt-get install python3-guizero
```

### **Nếu dùng cách cài đặt dễ dàng (Download ZIP):**

* Làm theo lại các bước tải ZIP như ban đầu để lấy phiên bản mới nhất.
* Xóa thư mục `guizero` cũ và thay thế bằng thư mục mới vừa tải.

---

Nếu bạn cần mình hướng dẫn cài đặt trực tiếp trên máy bạn, cứ nói nhé!
