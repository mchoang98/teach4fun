# Hướng dẫn làm việc trong repository

## Quy chuẩn tạo và chỉnh sửa bài tập lập trình

Khi tạo mới hoặc chỉnh sửa bài tập lập trình trong repository này, phải viết đề bài rõ ràng, đầy đủ và phù hợp với trình độ của người học. Không được dựa vào ví dụ để ngầm diễn đạt những yêu cầu chưa được nêu trong đề.

### Cấu trúc của một bài tập

Mỗi bài tập nên có các phần sau, theo đúng thứ tự:

1. **Yêu cầu**
2. **Dữ liệu cho trước** hoặc **Dữ liệu đầu vào**
3. **Kết quả mong đợi** hoặc **Dữ liệu đầu ra**
4. **Yêu cầu kỹ thuật**

Có thể thêm phần **Giải thích ví dụ** hoặc **Gợi ý** khi chúng thực sự giúp người học hiểu bài. Không đưa lời giải hoàn chỉnh vào phần gợi ý.

### Cách viết phần Yêu cầu

* Nêu trực tiếp chương trình phải làm gì.
* Giải thích ngắn gọn ý nghĩa của các biến và dữ liệu nếu tên biến chưa đủ rõ.
* Nêu đầy đủ công thức, ngưỡng, đơn vị và quy tắc xử lý có ảnh hưởng đến kết quả.
* Với bài có điều kiện, mô tả kết quả của mọi nhánh cần xử lý, không chỉ nhánh xuất hiện trong ví dụ.
* Làm rõ các ranh giới như “lớn hơn” hay “lớn hơn hoặc bằng”, có bao gồm giá trị đầu mút hay không.
* Nếu phép so sánh chuỗi phân biệt chữ hoa và chữ thường, phải nói rõ.
* Nếu một giá trị có thể âm, bằng 0 hoặc có trường hợp đặc biệt dễ gây hiểu nhầm, phải nêu rõ.
* Dùng câu ngắn, từ ngữ nhất quán và cách nói trực tiếp với người học.
* Bối cảnh chỉ nên hỗ trợ việc hiểu bài; không thêm chi tiết câu chuyện không liên quan đến yêu cầu lập trình.

### Dữ liệu cho trước và dữ liệu đầu vào

Phải xác định rõ bài thuộc một trong hai dạng sau:

* **Dữ liệu cho trước:** người học khai báo các biến được cung cấp và không dùng `input()`.
* **Dữ liệu đầu vào:** chương trình đọc dữ liệu bằng `input()` theo định dạng được mô tả chính xác.

Không gọi các biến khai báo sẵn là “input” nếu chương trình không đọc dữ liệu từ bàn phím.

Khi dùng dữ liệu cho trước:

* Ghi rõ tên biến và giá trị trong khối mã có ngôn ngữ phù hợp, chẳng hạn `python`.
* Yêu cầu người học giữ nguyên tên biến nếu tên biến được dùng để chấm hoặc đối chiếu.
* Ghi đơn vị của số liệu, chẳng hạn đồng, tuổi, điểm hoặc số lượng.

Khi dùng dữ liệu đầu vào:

* Mô tả số dòng, thứ tự các giá trị và cách phân tách chúng.
* Nêu kiểu dữ liệu và miền giá trị khi chúng ảnh hưởng đến cách giải.
* Bảo đảm ví dụ đầu vào có đúng định dạng đã mô tả.

### Kết quả mong đợi và dữ liệu đầu ra

* Mô tả chính xác chương trình phải in gì.
* Nếu có nhiều dòng, nêu ý nghĩa và thứ tự của từng dòng.
* Chuỗi kết quả mẫu phải thống nhất về chính tả, viết hoa và dấu tiếng Việt.
* Kết quả mẫu phải được tính đúng từ dữ liệu mẫu theo yêu cầu của đề.
* Ví dụ chỉ minh họa yêu cầu, không thay thế cho việc mô tả quy tắc tổng quát.

### Yêu cầu kỹ thuật

* Chỉ bắt buộc toán tử, câu lệnh hoặc kỹ thuật phù hợp với mục tiêu bài học.
* Nêu cụ thể thành phần phải dùng, ví dụ `//`, `%`, `and` hoặc `if...else`.
* Không đặt ràng buộc không cần thiết hoặc chưa được học ở thời điểm của bài.
* Phân biệt rõ yêu cầu bắt buộc với gợi ý tùy chọn.

### Bài tập dành cho người mới học

* Mỗi bài nên tập trung vào một hoặc một nhóm nhỏ kiến thức liên quan.
* Không yêu cầu người học tự đoán quy tắc nghiệp vụ từ tên bài hoặc kết quả mẫu.
* Với bài `if`, phải nói rõ điều kiện đúng, điều kiện sai và nội dung cần in ở mỗi nhánh.
* Với `and`, `or` và `not`, diễn đạt điều kiện bằng ngôn ngữ tự nhiên trước khi yêu cầu dùng toán tử.
* Với phép tính, nên nêu công thức bằng lời hoặc ký hiệu nếu có nhiều hơn một cách hiểu hợp lý.
* Gợi ý nên giúp chia bài toán thành các bước nhỏ nhưng vẫn để người học tự viết chương trình.

### Quy tắc định dạng Markdown

* Mỗi tài liệu chỉ có một tiêu đề cấp 1 (`#`).
* Dùng tiêu đề cấp 2 (`##`) cho từng bài tập và cấp 3 (`###`) cho các phần của bài.
* Dùng khối `python` cho mã Python và khối `text` cho dữ liệu hoặc kết quả thuần văn bản.
* Đặt dòng trống trước và sau danh sách, tiêu đề và khối mã để tài liệu dễ đọc.
* Giữ cách đặt tên các phần nhất quán trong cùng một tài liệu.

### Checklist trước khi hoàn tất

Trước khi lưu một đề bài, phải kiểm tra:

* Người học có thể xác định chính xác chương trình cần làm mà không cần hỏi thêm không?
* Tất cả biến, đơn vị, công thức, ngưỡng và trường hợp biên cần thiết đã được nêu chưa?
* Mọi nhánh của điều kiện đã có kết quả xử lý rõ ràng chưa?
* Dữ liệu mẫu có đúng định dạng và kết quả mẫu có tính đúng không?
* Yêu cầu kỹ thuật có đúng với kiến thức đang được luyện tập không?
* Thuật ngữ, tên biến và thông báo đầu ra có nhất quán không?
* Đề bài có vô tình tiết lộ toàn bộ lời giải hoặc gây khó bằng chi tiết không liên quan không?

Nếu bất kỳ câu trả lời nào là “không”, phải sửa đề trước khi xem là hoàn tất.
