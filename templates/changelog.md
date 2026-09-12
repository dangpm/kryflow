---
title: Mẫu changelog
lead: Mỗi lần Giao để lại đúng một dòng, để sau này biết bản nào có gì và vì sao.
---

## Changelog là gì và dùng sao

**Changelog** (nhật ký thay đổi) là danh sách các lần bạn đưa bản mới lên link công khai. Mỗi lần Giao thêm đúng một dòng: ngày, phiên bản, làm gì, vì sao. Nhờ nó, ba tháng sau bạn vẫn biết bản đang chạy khác bản cũ chỗ nào, và khi cần quay về bản trước thì biết quay về đâu.

- Lưu ở đâu: một file `CHANGELOG.md` trong dự án, hoặc một phần trong hồ sơ nếu dự án nhỏ.
- Thêm khi nào: mỗi lần qua bước Giao, thêm một dòng, dòng mới nằm trên cùng.
- Cách đánh phiên bản, ba số dạng `vX.Y.Z`:
  - Lần Giao đầu tiên: `v1.0.0`.
  - Thêm tính năng: tăng số giữa, ví dụ `v1.0.0` lên `v1.1.0`.
  - Sửa lỗi: tăng số cuối, ví dụ `v1.1.0` lên `v1.1.1`.
- Viết ngắn: một dòng nói được người dùng thấy gì đổi, không kể chi tiết kỹ thuật.

## Mẫu để chép

```prompt
# Changelog

| Ngày | Phiên bản | Làm gì | Vì sao |
| --- | --- | --- | --- |
| {{ngày}} | {{vX.Y.Z}} | {{người dùng thấy gì đổi}} | {{vì sao làm}} |
```

## Một changelog đã điền để xem mẫu

Bản mới nhất nằm trên cùng.

```text
# Changelog

| Ngày | Phiên bản | Làm gì | Vì sao |
| --- | --- | --- | --- |
| 10/09 | v1.1.0 | Thêm nút chép kết quả chia ra clipboard | Nhóm hay dán vào chat nhóm để báo tiền |
| 05/09 | v1.0.1 | Chặn nhập 0 người, hiện lời nhắc thay vì trắng trang | Có lần vỡ trang vì chia cho 0 |
| 03/09 | v1.0.0 | Bản đầu: nhập tổng và số người, chia đều rồi làm tròn | Giao lần đầu, chốt việc chính đã chạy |
```
