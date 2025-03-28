# Bài 7-3: Set và Tuple

## 1. Set – Bộ Sưu Tập Bảo Bối

Trong thế giới của Doraemon, **Set** giống như một **bộ sưu tập các bảo bối**, trong đó mỗi bảo bối chỉ xuất hiện một lần, dù có bao nhiêu lần bạn sử dụng nó. Ví dụ, nếu Doraemon có một bộ sưu tập các bảo bối như cánh cửa thần kỳ, máy tạo hình và cây kéo thần, mỗi bảo bối sẽ chỉ xuất hiện một lần trong bộ sưu tập, dù Doraemon có thể sử dụng chúng nhiều lần.

**Set** trong Python cũng tương tự: đó là một **tập hợp không chứa phần tử trùng lặp**. Bạn có thể thêm, xóa các phần tử, nhưng những phần tử trong set luôn là duy nhất.

## 2. Cách Tạo Set

Để tạo một set, bạn chỉ cần sử dụng dấu ngoặc nhọn `{}` hoặc sử dụng hàm `set()`.

### Ví Dụ:

```python
# Tạo một set chứa các bảo bối của Doraemon
bao_boi_set = {"cánh cửa thần kỳ", "máy tạo hình", "cây kéo thần"}
print(bao_boi_set)  # In ra: {'máy tạo hình', 'cây kéo thần', 'cánh cửa thần kỳ'}
```

Bạn sẽ thấy rằng dù chúng ta đưa cùng một bảo bối vào nhiều lần, **cánh cửa thần kỳ** chẳng hạn, thì nó vẫn chỉ xuất hiện một lần trong tập hợp.

```python
# Thêm một bảo bối vào set
bao_boi_set.add("máy bay giấy")
print(bao_boi_set)  # In ra: {'máy tạo hình', 'máy bay giấy', 'cây kéo thần', 'cánh cửa thần kỳ'}

# Xóa một bảo bối khỏi set
bao_boi_set.remove("máy tạo hình")
print(bao_boi_set)  # In ra: {'máy bay giấy', 'cây kéo thần', 'cánh cửa thần kỳ'}
```

## 3. Tuple – Bộ Sưu Tập Bảo Bối Không Thể Thay Đổi

Bây giờ chúng ta sẽ tìm hiểu về **Tuple**, một loại bộ sưu tập đặc biệt mà Doraemon sở hữu trong chiếc túi thần kỳ của mình. **Tuple** giống như một bộ sưu tập bảo bối mà Doraemon đã quyết định không thay đổi. Khi bạn đã tạo một **Tuple**, bạn không thể thay đổi, thêm hoặc xóa bất kỳ bảo bối nào trong đó. Nó giống như một bộ sưu tập hoàn hảo mà Doraemon không muốn thay đổi.

### Ví Dụ:

```python
# Tạo một tuple chứa các bảo bối
bao_boi_tuple = ("cánh cửa thần kỳ", "máy tạo hình", "cây kéo thần")
print(bao_boi_tuple)  # In ra: ('cánh cửa thần kỳ', 'máy tạo hình', 'cây kéo thần')
```

Nếu bạn cố gắng thay đổi các bảo bối trong **Tuple**, bạn sẽ gặp lỗi. Đây chính là điểm đặc biệt của **Tuple** – đó là một bộ sưu tập bất biến.

```python
# Cố gắng thay đổi bảo bối trong tuple sẽ gây lỗi
# bao_boi_tuple[0] = "máy bay giấy"  # Lỗi: 'tuple' object does not support item assignment
```

Tuy nhiên, bạn có thể sử dụng tuple để **lưu trữ thông tin không thay đổi** như danh sách các bảo bối mà Doraemon yêu thích.

## 4. Set và Tuple – Điểm Khác Nhau

| Đặc điểm           | Set                                | Tuple                              |
|--------------------|------------------------------------|------------------------------------|
| Thay đổi          | Có thể thay đổi (có thể thêm, xóa phần tử) | Không thay đổi (bất biến)         |
| Phần tử trùng lặp | Không cho phép phần tử trùng lặp    | Có thể có phần tử trùng lặp       |
| Sắp xếp           | Không có thứ tự                    | Có thứ tự                         |

## 5. Bài Luyện Tập

### Bài Tập 1: Bộ Sưu Tập Các Bảo Bối
Tạo một **set** chứa các bảo bối mà Doraemon đã sử dụng trong ngày hôm nay. Sau đó, thử thêm và xóa một bảo bối.

### Bài Tập 2: Danh Sách Các Bảo Bối Quan Trọng
Tạo một **tuple** lưu trữ tên các bảo bối mà Doraemon không muốn thay đổi. In ra các bảo bối trong tuple.

### Bài Tập 3: So Sánh Set và Tuple
So sánh điểm khác biệt giữa **set** và **tuple** bằng cách sử dụng một ví dụ đơn giản.

---

## Tóm Tắt

- **Set** giống như một bộ sưu tập bảo bối của Doraemon, chỉ chứa những bảo bối duy nhất và có thể thay đổi.
- **Tuple** là bộ sưu tập bảo bối không thay đổi, bạn không thể thay đổi, thêm hoặc xóa bảo bối trong nó sau khi đã tạo.
- Sử dụng **Set** khi bạn cần lưu trữ những phần tử duy nhất và có thể thay đổi, còn **Tuple** dùng khi bạn muốn lưu trữ những phần tử cố định.

Cả **Set** và **Tuple** đều là công cụ tuyệt vời giúp Doraemon quản lý và sắp xếp các bảo bối của mình một cách dễ dàng. Hãy thử tạo và sử dụng chúng nhé!