# Bài 7-2: Từ điển (Dictionary)

Từ điển trong Python là kiểu dữ liệu lưu trữ các cặp **khóa** và **giá trị**. Bạn có thể sử dụng từ điển để lưu trữ thông tin về các **nhân vật Avengers** như tên, khả năng, và các phim nổi bật của họ.

## Cách tạo từ điển

Từ điển trong Python được tạo bằng dấu ngoặc nhọn `{}` và mỗi cặp **khóa-giá trị** được phân tách bằng dấu `:`.

### Ví dụ 1: Tạo từ điển về các nhân vật Avengers

Giả sử bạn muốn lưu thông tin về các **nhân vật Avengers** như **Iron Man**, **Captain America** và **Thor**. Bạn có thể tạo từ điển như sau:

```python
avengers = {
    "Iron Man": {"khả_năng": "Bộ giáp siêu mạnh, trí tuệ nhân tạo", "phim_noi_bat": ["Iron Man 1", "Avengers: Endgame"]},
    "Captain America": {"khả_năng": "Siêu sức mạnh, khả năng chiến đấu tuyệt vời", "phim_noi_bat": ["Captain America: The First Avenger", "Avengers: Endgame"]},
    "Thor": {"khả_năng": "Thần sấm, điều khiển sấm sét", "phim_noi_bat": ["Thor: Ragnarok", "Avengers: Infinity War"]}
}
```

Trong từ điển `avengers`, mỗi tên nhân vật (như "Iron Man", "Captain America") là một khóa, và giá trị của mỗi khóa là một từ điển con chứa thông tin về **khả năng** và **danh sách phim nổi bật**.

## Truy cập giá trị trong từ điển

Để lấy thông tin về một nhân vật, bạn sử dụng tên nhân vật làm khóa trong dấu ngoặc vuông `[]`.

### Ví dụ 2: Truy cập thông tin về Iron Man

```python
iron_man = avengers["Iron Man"]
print(iron_man["khả_năng"])  # Kết quả: Bộ giáp siêu mạnh, trí tuệ nhân tạo
print(iron_man["phim_noi_bat"])  # Kết quả: ['Iron Man 1', 'Avengers: Endgame']
```

## Thêm, sửa đổi và xóa phần tử trong từ điển

### 1. Thêm hoặc sửa đổi một cặp khóa-giá trị

- Nếu khóa đã tồn tại, giá trị của khóa đó sẽ được cập nhật.
- Nếu khóa không tồn tại, một cặp khóa-giá trị mới sẽ được thêm vào từ điển.

### Ví dụ 3: Thêm thông tin về một nhân vật mới

```python
avengers["Black Widow"] = {"khả_năng": "Chiến đấu, khả năng thích nghi tuyệt vời", "phim_noi_bat": ["Black Widow", "Avengers: Endgame"]}
print(avengers["Black Widow"]["khả_năng"])  # Kết quả: Chiến đấu, khả năng thích nghi tuyệt vời
```

### 2. Xóa phần tử trong từ điển

Bạn có thể xóa một phần tử trong từ điển bằng `del` hoặc phương thức `.pop()`.

```python
# Xóa thông tin về Thor
del avengers["Thor"]

# Xóa và lấy thông tin về Captain America
captain_america = avengers.pop("Captain America")
print(captain_america)  # Kết quả: {'khả_năng': 'Siêu sức mạnh, khả năng chiến đấu tuyệt vời', 'phim_noi_bat': ['Captain America: The First Avenger', 'Avengers: Endgame']}

print(avengers)  # Kiểm tra lại từ điển
```

Kết quả:

```python
{
    "Iron Man": {"khả_năng": "Bộ giáp siêu mạnh, trí tuệ nhân tạo", "phim_noi_bat": ["Iron Man 1", "Avengers: Endgame"]},
    "Black Widow": {"khả_năng": "Chiến đấu, khả năng thích nghi tuyệt vời", "phim_noi_bat": ["Black Widow", "Avengers: Endgame"]}
}
```

## Duyệt qua các phần tử trong từ điển

Bạn có thể duyệt qua các phần tử trong từ điển bằng cách sử dụng vòng lặp `for`.

### Ví dụ 4: Duyệt qua các nhân vật Avengers và thông tin của họ

```python
for ten_avenger, thong_tin in avengers.items():
    print(f"Nhân vật: {ten_avenger}")
    print(f"Khả năng: {thong_tin['khả_năng']}")
    print(f"Phim nổi bật: {', '.join(thong_tin['phim_noi_bat'])}")
    print("-" * 30)
```

Kết quả:

```
Nhân vật: Iron Man
Khả năng: Bộ giáp siêu mạnh, trí tuệ nhân tạo
Phim nổi bật: Iron Man 1, Avengers: Endgame
------------------------------
Nhân vật: Black Widow
Khả năng: Chiến đấu, khả năng thích nghi tuyệt vời
Phim nổi bật: Black Widow, Avengers: Endgame
------------------------------
```

## Kiểm tra sự tồn tại của khóa trong từ điển

Để kiểm tra xem một nhân vật có tồn tại trong từ điển không, bạn có thể sử dụng toán tử `in`.

### Ví dụ 5: Kiểm tra sự tồn tại của nhân vật trong từ điển

```python
print("Iron Man" in avengers)  # Kết quả: True
print("Thor" in avengers)  # Kết quả: False
```

## Kết luận

Từ điển trong Python là một công cụ rất hữu ích để lưu trữ và truy xuất dữ liệu theo cặp khóa-giá trị. Với ví dụ về các nhân vật Avengers, bạn có thể dễ dàng quản lý thông tin về các siêu anh hùng yêu thích và các bộ phim nổi bật của họ.

---

Hy vọng với ví dụ về các nhân vật Avengers, học sinh sẽ dễ dàng hiểu hơn về cách sử dụng từ điển trong Python!