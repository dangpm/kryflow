---
title: Bảng kiểm bước Giao
lead: Ba cổng để đưa bản đã kiểm lên link công khai an toàn, rồi chốt sổ và chỉ đúng cửa kế.
---

## Cách dùng

Chỉ vào bước này khi bước Kiểm đã kết luận ĐƯỢC GIAO. Đi lần lượt 4 phần dưới, tick từng ô do chính bạn xác nhận. **Publish** (đẩy bản build lên mạng) là lúc dễ hỏng âm thầm nhất, nên đừng bỏ cổng nào.

## Trước khi bấm publish

- [ ] Bước Kiểm đã kết luận ĐƯỢC GIAO, mọi LỖI đã hết
- [ ] Đã **sao lưu** (giữ một bản để quay về): xuất dữ liệu, hoặc ghi lại bản đang chạy trước đó
- [ ] Nội dung là thật, không còn chữ mẫu kiểu "Lorem ipsum" hay ảnh giữ chỗ
- [ ] Không lộ mật khẩu hay **khóa API** (chuỗi bí mật gọi dịch vụ ngoài) trong mã công khai hoặc trong chat
- [ ] Biết rõ mình publish bằng đường nào: nút Publish của nền build, Netlify, Vercel, hay GitHub Pages

## Sau khi live

- [ ] Mở **link công khai** ở tab ẩn danh, đi 1 lượt luồng chính
- [ ] Mở lại trên điện thoại thật, xem có vỡ gì không
- [ ] Chụp ảnh màn hình bản live làm bằng chứng
- [ ] Nếu có gì vỡ: quay về bản sao lưu, sửa, rồi giao lại

## Chốt sổ

- [ ] Tăng **phiên bản** (số đánh dấu bản mới, ví dụ 1.0.0)
- [ ] Thêm 1 dòng **changelog** (nhật ký thay đổi): ngày, phiên bản, làm gì, vì sao
- [ ] Cập nhật hồ sơ dự án: đổi dòng "bước hiện tại", dán link live vào khối đầu
- [ ] Nén hồ sơ: rút phần 01-07 còn 3-5 dòng mỗi phần, bản đầy đủ cất sang file lưu trữ

## Chỉ cửa kế

- [ ] Chưa có Sổ tay: cửa kế là bước 09 Sổ tay
- [ ] Đã có Sổ tay: mọi thay đổi sau này vào bằng bước 10 Nâng cấp
