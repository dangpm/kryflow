---
title: 08 · Giao
lead: Đưa bản đã kiểm lên link công khai an toàn qua 3 cổng, rồi chốt sổ và chỉ đúng cửa kế.
---
## Việc của bước này
Bước này đưa bản đã qua Kiểm lên một link công khai để người khác dùng thật, gọi là **publish** (đẩy bản build lên mạng). Có bước này vì lúc đẩy lên là lúc dễ hỏng âm thầm nhất: quên nội dung thật, lộ khoá bí mật, hoặc chưa từng mở link thật xem một lần. Ta đi qua 3 cổng bạn tự xác nhận: trước khi giao, lúc giao, sau khi giao. Đây là **cửa 2 chiều** (sửa lại rẻ): nếu link mới có gì vỡ, bạn có bản sao lưu để quay về, nên không cần sợ. Với loại **Thử nghiệm** (lab, chỉ xem ý có chạy không), bước này bỏ được.

## Trước khi dán prompt
- Có trong tay: hồ sơ dự án đầy đủ, trong đó phần 07 phải ghi kết luận ĐƯỢC GIAO. Chưa có dòng đó thì quay lại bước 07 Kiểm.
- Biết mình đang dùng nền tảng build nào và host (nơi chứa trang) ở đâu: nút Publish của nền build, Netlify, Vercel, hay GitHub Pages.
- Mở một chat mới. Dán 3 thứ vào đầu chat: prompt dưới đây, toàn bộ hồ sơ dự án, và link build hiện tại nếu đã có.

## Prompt
```prompt
Bạn là người điều phối giao hàng cho dự án {{tên dự án}}. Việc của bạn: dẫn tôi qua 3 cổng để đưa bản đã kiểm lên link công khai an toàn, rồi chốt sổ. Bạn KHÔNG tự bấm publish thay tôi. Mỗi cổng bạn hỏi và chờ tôi tự xác nhận.

ĐẦU VÀO tôi dán:
- Hồ sơ dự án (toàn bộ file, phần 07 phải ghi ĐƯỢC GIAO).
- Nền tảng build và host tôi đang dùng: {{ví dụ Lovable, Vercel, GitHub Pages}}.
- Số phiên bản hiện tại nếu có: {{ví dụ v0.1.0}}.

LUẬT MỞ ĐẦU:
1. Đọc hồ sơ. Nếu phần 07 CHƯA kết luận ĐƯỢC GIAO, in ⛔ và dừng, bảo tôi quay lại bước 07 Kiểm. Không giao khi chưa kiểm.
2. Nếu đạt, đi lần lượt 3 cổng dưới đây, mỗi cổng chờ tôi gõ xác nhận rồi mới sang cổng kế.

CỔNG TRƯỚC (chuẩn bị, chưa publish):
3. Nhắc tôi tạo bản backup (bản sao lưu để quay về nếu hỏng) và xuất dữ liệu ra nếu app có lưu dữ liệu người dùng.
4. Hỏi tôi đã kiểm chưa lộ khoá bí mật (secret: mật khẩu, khoá API) trong mã hay trên màn hình chưa.
5. Hỏi nội dung đang hiển thị là nội dung thật, không còn chữ mẫu {{ví dụ ảnh giữ chỗ, chữ Lorem ipsum}}.
Chờ tôi gõ "cổng trước xong" rồi mới đi tiếp.

CỔNG LÀM (publish):
6. Hướng dẫn tôi đưa bản build lên link công khai theo đúng host tôi khai: nút Publish của nền build, hoặc kéo thả thư mục lên Netlify, hoặc nối GitHub. Chỉ mô tả theo nguyên tắc, không bịa tên nút cụ thể.
7. Hỏi tôi link công khai vừa nhận: {{dán link}}.
Chờ tôi gõ "đã publish" rồi mới đi tiếp.

CỔNG SAU (nhìn bằng mắt trên link thật):
8. Bảo tôi mở link đó ở cửa sổ ẩn danh và trên điện thoại, đi hết 1 lượt luồng chính (việc quan trọng nhất của dự án), chụp lại ảnh màn hình.
9. Hỏi có gì vỡ không. Nếu có, dừng chốt sổ, ghi lỗi vào hồ sơ và bảo tôi sang bước Sửa.
Chờ tôi gõ "cổng sau xong".

CHỐT SỔ (chỉ khi cả 3 cổng xong):
10. Tăng số phiên bản: thêm tính năng thì tăng số giữa, sửa lỗi thì tăng số cuối. Soạn 1 dòng changelog (nhật ký phiên bản) dạng: ngày, phiên bản, làm gì, vì sao.
11. Nén hồ sơ: rút mỗi phần 01 đến 07 còn 3 đến 5 dòng cốt lõi, giữ hồ sơ dưới 2 trang. Nhắc tôi cất bản đầy đủ sang 1 file lưu trữ riêng TRƯỚC khi xoá.
12. Chỉ đúng cửa kế: nếu hồ sơ CHƯA có Sổ tay thì cửa kế là bước 09 Sổ tay. Nếu đã có Sổ tay thì mọi thay đổi sau đi bước 10 Nâng cấp.

LUẬT DỪNG:
- Không tự xác nhận thay tôi bất kỳ cổng nào. Không nói "xong" khi tôi chưa gõ đủ xác nhận 3 cổng.
- Kết bước bằng [Gate] rồi dừng, chờ tôi gõ DUYỆT. Ba chữ khoá: DUYỆT (chỉ tôi gõ), SỬA: <ý>, ĐỂ SAU.

KHỐI TRẠNG THÁI phải in:
- Đầu trả lời: [KryFlow] {{tên}} · {{loại}} · bước 8/10 · cửa Giao · <trạng thái>
- Cuối trả lời: [Cập nhật hồ sơ] (trong khối code, chỉ phần đổi) và [Gate] ĐẠT|CHƯA + cửa kế.
```

## AI sẽ trả về gì
AI mở khối trạng thái, dẫn bạn vào cổng đầu tiên và dừng chờ bạn xác nhận. Nó không tự bấm gì. Chỉ khi bạn gõ xác nhận đủ 3 cổng, AI mới chốt sổ, in dòng LIVE có link và phiên bản, thêm 1 dòng changelog, rồi chỉ đúng cửa kế.

```text
[KryFlow] Máy chia tiền · Công cụ · bước 8/10 · cửa Giao · đang ở cổng TRƯỚC

Trước khi đẩy lên, xác nhận giúp tôi 3 việc:
1. Đã có bản backup và (nếu có lưu dữ liệu) đã xuất dữ liệu ra chưa?
2. Đã soát để không lộ khoá bí mật trong mã hay trên màn hình chưa?
3. Nội dung đang hiện là nội dung thật, hết chữ mẫu và ảnh giữ chỗ chưa?

Xong cả 3 thì gõ "cổng trước xong", tôi sẽ hướng dẫn publish.

[Gate] CHƯA · đang chờ bạn xác nhận cổng TRƯỚC
```

## Cửa ra: khi nào được sang bước kế
- [ ] Phần 07 đã ghi ĐƯỢC GIAO trước khi bắt đầu bước này.
- [ ] Đã có bản backup, không lộ khoá bí mật, nội dung là nội dung thật (cổng TRƯỚC).
- [ ] Đã publish và có link công khai (cổng LÀM).
- [ ] Đã mở link thật ở ẩn danh và trên điện thoại, đi hết 1 lượt luồng chính, không vỡ (cổng SAU).
- [ ] Hồ sơ có số phiên bản mới, 1 dòng changelog, và đã nén xuống dưới 2 trang.
- [ ] Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp
- Bấm publish khi phần 07 chưa ghi ĐƯỢC GIAO. Triệu chứng: giao xong mới phát hiện lỗi Kiểm đã bắt. Cách né: đọc phần 07 trước, thấy ĐƯỢC GIAO mới đi.
- Bỏ cổng SAU, tin bản build là đủ. Triệu chứng: bản trên link thật vỡ nhưng bản build vẫn ổn. Cách né: luôn mở link công khai bằng cửa sổ ẩn danh và điện thoại.
- Quên backup trước khi đẩy đè. Triệu chứng: bản mới hỏng mà không có gì quay về. Cách né: tạo bản sao lưu ở cổng TRƯỚC, chưa có thì chưa publish.
- Đẩy lên khi còn chữ mẫu hoặc ảnh giữ chỗ. Triệu chứng: người thật thấy Lorem ipsum. Cách né: soát từng màn ở cổng TRƯỚC.
- Quên chốt sổ, chạy đi làm việc khác. Triệu chứng: lần sau không biết bản live là phiên bản nào. Cách né: chưa tăng phiên bản và ghi changelog thì cửa chưa đạt.
- Để hồ sơ phình quá 2 trang. Triệu chứng: chat mới bị cắt mất ngữ cảnh cũ. Cách né: nén phần 01 đến 07, cất bản đầy đủ sang file lưu trữ.

## Cập nhật hồ sơ dự án
Sau bước này, ghi vào hồ sơ:
- Khối đầu: đổi Bước hiện tại thành 09 Sổ tay (hoặc 10 Nâng cấp nếu đã có Sổ tay), cập nhật Phiên bản và link live.
- Quyết định đã chốt: đã giao live, link công khai, phiên bản mới.
- Nhật ký: thêm 1 dòng changelog dạng ngày, phiên bản, làm gì, vì sao.
- Nén phần 01 đến 07 còn 3 đến 5 dòng mỗi phần, cất bản đầy đủ sang file lưu trữ riêng.

## Bước kế
Nếu đây là lần giao đầu tiên và hồ sơ chưa có Sổ tay, sang bước 09 Sổ tay (slug docs) để ghi lại cách chạy và cách sửa. Nếu đã có Sổ tay rồi thì mọi thay đổi sau này đi vào bằng bước 10 Nâng cấp (slug update), rồi quay lại Giao để ra bản mới.
