# Buổi 3: GitHub và quản lý source code

## 1. Mục tiêu

Sau buổi học này, học viên cần:

- Hiểu Git là gì.
- Hiểu GitHub là gì.
- Biết tạo repository.
- Biết commit code.
- Biết push code lên GitHub.
- Biết viết README đơn giản.
- Biết kiểm tra không đưa file bí mật lên GitHub.

## 2. Nội dung học

- Git là gì.
- GitHub là gì.
- Repository là gì.
- Commit là gì.
- Push là gì.
- Tạo repository mới.
- Kết nối project local với GitHub.
- Tạo README.
- Kiểm tra `.gitignore`.

## 3. Kiến thức chính

```text
Git        : công cụ quản lý phiên bản code
GitHub     : nơi lưu code online
Repository : kho chứa source code
Commit     : lưu lại một phiên bản code
Push       : đưa code từ máy lên GitHub
.gitignore : file khai báo những thứ không đưa lên GitHub
README.md  : file giới thiệu dự án
```

## 4. Lệnh Git thường dùng

```bash
git init
git status
git add .
git commit -m "Initial Flask shop project"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## 5. README.md gợi ý

```md
# Flask Shop

Website bán hàng đơn giản sử dụng Flask và PostgreSQL.

## Chức năng

- Xem danh sách sản phẩm
- Xem chi tiết sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Đặt hàng cơ bản
- Quản lý sản phẩm

## Công nghệ

- Python
- Flask
- PostgreSQL
- SQLAlchemy
- HTML/CSS

## Cách chạy local

```bash
pip install -r requirements.txt
python app.py
```
```

## 6. Sản phẩm nhỏ

Học viên có repository GitHub chứa source code website Flask.

## 7. Checklist cuối buổi

- [ ] Có GitHub repository.
- [ ] Code đã push lên GitHub.
- [ ] Có file README.md.
- [ ] Có file .gitignore.
- [ ] Không đưa thư mục `venv` lên GitHub.
- [ ] Không đưa `.env` lên GitHub.
- [ ] Không để lộ password database.

## 8. Kết quả cần đạt

Source code website đã nằm trên GitHub và sẵn sàng kết nối với Render.
