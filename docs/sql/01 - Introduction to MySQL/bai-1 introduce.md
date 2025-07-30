# Bài 1 - Giới thiệu về MySQL

## 🎓 **CHƯƠNG 1 – Bài 1: Giới thiệu về MySQL và hệ quản trị cơ sở dữ liệu**

---

### 🎯 **Mục tiêu bài học**

Sau bài này, học viên sẽ:

* Hiểu cơ bản về hệ quản trị cơ sở dữ liệu (RDBMS).
* Biết MySQL là gì, so với các hệ quản trị khác.
* Cài đặt được MySQL & MySQL Workbench.
* Thực hiện được kết nối cơ bản và thử câu lệnh đầu tiên.

---

### 🧠 **1. Khái niệm cơ bản**

#### 🔹 Database là gì?

> Là tập hợp có tổ chức của dữ liệu, được lưu trữ và truy xuất hiệu quả.

#### 🔹 DBMS là gì?

> **DBMS (Database Management System)** là phần mềm quản lý cơ sở dữ liệu.

#### 🔹 RDBMS là gì?

> **RDBMS (Relational Database Management System)** là dạng DBMS tổ chức dữ liệu theo **bảng (table)** và **mối quan hệ** giữa chúng.

---

### 🛠 **2. MySQL là gì?**

* Một hệ quản trị cơ sở dữ liệu mã nguồn mở, phổ biến nhất hiện nay.
* Sử dụng ngôn ngữ SQL (**Structured Query Language**).
* Ưu điểm: nhanh, nhẹ, dễ dùng, cộng đồng lớn.
* Dùng nhiều trong các hệ thống web như: WordPress, Laravel, PHP, Python (Flask, Django)...

---

### 💬 **3. So sánh MySQL với các RDBMS khác**

| Tên        | Nguồn mở | Hiệu năng      | Dùng phổ biến ở         |
| ---------- | -------- | -------------- | ----------------------- |
| **MySQL**  | ✅        | Cao            | Web/app                 |
| PostgreSQL | ✅        | Cao, chuẩn hóa | Fintech, AI             |
| SQL Server | ❌        | Trung bình     | Hệ thống nội bộ Windows |
| Oracle     | ❌        | Rất cao        | Doanh nghiệp lớn        |

---

### 💻 **4. Cài đặt MySQL và Workbench**

#### 🔹 Hướng dẫn:

1. Truy cập: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
2. Tải: **MySQL Installer** cho Windows
3. Cài: MySQL Server + MySQL Workbench
4. Đặt mật khẩu cho `root` user

📌 *Ghi chú: nên dùng bản MySQL 8.x trở lên.*

---

### 💻 **5. Giao diện làm việc**

* **Workbench**: giao diện trực quan
* **Command Line**: truy cập bằng `mysql -u root -p`

Ví dụ:

```bash
mysql -u root -p
```

```sql
SHOW DATABASES;
```

---

### ✅ **6. Thực hành**

**Bài tập nhỏ:**

1. Đăng nhập MySQL bằng dòng lệnh hoặc Workbench.
2. Gõ lệnh:

```sql
SHOW DATABASES;
CREATE DATABASE test_db;
USE test_db;
CREATE TABLE hello (id INT, name VARCHAR(50));
INSERT INTO hello VALUES (1, 'Phú');
SELECT * FROM hello;
```


