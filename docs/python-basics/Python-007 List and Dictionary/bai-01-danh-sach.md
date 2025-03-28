# Bài 7-1: Danh sách (List) 

Chào các bạn! Hôm nay, chúng ta sẽ cùng nhau khám phá thế giới lập trình Python qua một câu chuyện hấp dẫn về **Doraemon**, **Nobita** và các món đồ thần kỳ từ **Túi thần kỳ** của Doraemon! Hãy xem cách họ sử dụng **Danh sách (List)** trong Python để lưu trữ những món đồ thần kỳ và làm cho cuộc sống trở nên thú vị hơn nhé!

## Danh sách (List)?

Trong Python, **Danh sách (List)** là một công cụ rất hữu ích để **lưu trữ các món đồ** trong cùng một biến, giống như **Túi thần kỳ** của Doraemon! Bạn có thể lưu trữ **nhiều phần tử** (số, chữ, thậm chí là các danh sách khác) trong một danh sách mà không cần phải lo lắng về việc xếp chúng vào đâu.

## Tạo Danh sách

Để tạo một danh sách trong Python, bạn sử dụng **dấu ngoặc vuông** `[]` và phân tách các phần tử bằng dấu **phẩy** `,`. Hãy tưởng tượng Doraemon đang bỏ các món đồ thần kỳ vào túi thần kỳ của mình vậy!

## Ví dụ 1: Danh sách các món đồ trong túi thần kỳ của Doraemon

```python
doraemon_items = ["Bánh bao thời gian", "Cánh cửa thần kỳ", "Kính vạn hoa", "Mũi tên thời gian"]
print(doraemon_items)
```

**Giải thích**: Trong danh sách `doraemon_items`, chúng ta lưu trữ 4 món đồ thần kỳ mà Doraemon luôn mang theo bên mình: **Bánh bao thời gian**, **Cánh cửa thần kỳ**, **Kính vạn hoa**, và **Mũi tên thời gian**.

## Truy cập vào các phần tử trong danh sách

Giống như Doraemon lấy món đồ trong túi thần kỳ, bạn có thể lấy món đồ trong danh sách bằng cách sử dụng **chỉ số (index)**. Lưu ý rằng chỉ số trong Python bắt đầu từ **0**, vì vậy món đồ đầu tiên sẽ có chỉ số là 0.

## Ví dụ 2: Truy cập món đồ đầu tiên trong danh sách

```python
print(doraemon_items[0])  # Kết quả: Bánh bao thời gian
```

**Giải thích**: `doraemon_items[0]` sẽ lấy món đồ đầu tiên trong danh sách, đó là **Bánh bao thời gian**.

## Thêm món đồ mới vào danh sách

Khi Doraemon tìm thấy món đồ mới trong thế giới kỳ diệu, cậu ấy sẽ thêm nó vào túi thần kỳ của mình. Chúng ta cũng có thể làm điều đó trong Python bằng phương thức `.append()`!

## Ví dụ 3: Thêm món đồ mới vào túi thần kỳ

```python
doraemon_items.append("Cỗ máy thời gian")
print(doraemon_items)  # Kết quả: ['Bánh bao thời gian', 'Cánh cửa thần kỳ', 'Kính vạn hoa', 'Mũi tên thời gian', 'Cỗ máy thời gian']
```

**Giải thích**: Chúng ta vừa thêm món đồ **Cỗ máy thời gian** vào cuối danh sách của Doraemon.

## Sửa đổi món đồ trong danh sách

Doraemon có thể thay đổi món đồ trong túi thần kỳ của mình nếu muốn, giống như khi cậu ấy đổi món đồ này thành món đồ khác. Chúng ta cũng có thể làm điều đó trong Python! Bạn chỉ cần chỉ ra món đồ muốn thay đổi và gán giá trị mới cho nó.

## Ví dụ 4: Thay đổi món đồ thứ 2 trong danh sách

```python
doraemon_items[1] = "Cánh cửa bay"
print(doraemon_items)  # Kết quả: ['Bánh bao thời gian', 'Cánh cửa bay', 'Kính vạn hoa', 'Mũi tên thời gian', 'Cỗ máy thời gian']
```

**Giải thích**: Món đồ thứ 2, **Cánh cửa thần kỳ**, đã được thay đổi thành **Cánh cửa bay**.

## Xóa món đồ khỏi danh sách

Nếu Doraemon không còn cần đến món đồ nào trong túi thần kỳ, cậu ấy có thể lấy nó ra ngoài. Để làm điều này trong Python, bạn có thể dùng phương thức `.remove()` hoặc `del`.

## Ví dụ 5: Xóa món đồ "Kính vạn hoa"

```python
doraemon_items.remove("Kính vạn hoa")
print(doraemon_items)  # Kết quả: ['Bánh bao thời gian', 'Cánh cửa bay', 'Mũi tên thời gian', 'Cỗ máy thời gian']
```

**Giải thích**: Chúng ta đã loại bỏ món đồ **Kính vạn hoa** khỏi danh sách của Doraemon.

## Lặp qua danh sách của Doraemon

Doraemon có rất nhiều món đồ thú vị trong túi thần kỳ, và nếu cậu ấy muốn xem tất cả, chúng ta có thể sử dụng vòng lặp `for` để duyệt qua từng món đồ!

## Ví dụ 6: Lặp qua danh sách và in ra từng món đồ

```python
for item in doraemon_items:
    print(item)
```

**Kết quả**:
```
Bánh bao thời gian
Cánh cửa bay
Mũi tên thời gian
Cỗ máy thời gian
```

**Giải thích**: Chúng ta sử dụng vòng lặp `for` để đi qua từng món đồ trong danh sách và in ra cho Doraemon xem.

## Lấy ngẫu nhiên từ danh sách

Bây giờ, chúng ta sẽ học cách chọn một món đồ ngẫu nhiên từ danh sách của Doraemon. Cũng giống như khi Doraemon không biết mình sẽ lấy món đồ nào, chúng ta có thể sử dụng thư viện **`random`** của Python để lấy ngẫu nhiên một món đồ từ danh sách.

## Ví dụ 7: Lấy ngẫu nhiên một món đồ từ danh sách

```python
import random

# Chọn ngẫu nhiên một món đồ từ danh sách
random_item = random.choice(doraemon_items)
print(f"Món đồ ngẫu nhiên hôm nay là: {random_item}")
```

**Giải thích**: Chúng ta đã sử dụng `random.choice()` để chọn ngẫu nhiên một món đồ từ danh sách `doraemon_items`. Mỗi lần chạy lại, kết quả có thể khác nhau, giống như Doraemon lấy một món đồ bất kỳ từ túi thần kỳ!

---

## Kết luận

Vậy là chúng ta đã học về **Danh sách (List)** trong Python cùng với Doraemon và những món đồ thần kỳ trong túi thần kỳ của cậu ấy! Bạn có thể tạo danh sách, thêm, sửa, xóa các món đồ trong danh sách và thậm chí lặp qua chúng. Và đặc biệt, chúng ta còn có thể **lấy ngẫu nhiên** một món đồ trong danh sách, giống như khi Doraemon chọn món đồ bất kỳ từ túi thần kỳ.

Chúc các bạn học lập trình vui vẻ cùng Doraemon và những món đồ thần kỳ nhé!