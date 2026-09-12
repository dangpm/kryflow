---
title: 06 · Làm
lead: Thi công đúng từng phần trong kế hoạch đã duyệt bằng nền tảng build, mỗi phần kiểm xong mới sang phần kế.
---

## Việc của bước này
Đây là lúc bạn dựng sản phẩm thật. Bạn không nghĩ lại kế hoạch, chỉ làm đúng từng phần đã ghi trong bước Kế hoạch (05). Có bước này vì AI hay làm tắt: hỏi một câu nó dựng luôn cả app rồi bỏ mọi thứ ở giữa, nên ở đây bạn ép nó làm **một phần một lần** (một mảnh việc nhỏ đã chia sẵn trong kế hoạch) rồi dừng chờ bạn kiểm. Đây là cửa 2 chiều: làm sai một phần thì sửa lại rẻ, cứ lặp nhanh. Nhưng có hai chỗ vẫn đắt: nếu bạn để AI đi cả loạt phần rồi mới xem, hoặc để nó lén thêm tính năng ngoài kế hoạch, thì lúc phát hiện đã rối cả sản phẩm. Bước này không được bỏ với loại dự án nào, kể cả **Thử nghiệm** (dự án 2 tiếng xem ý có chạy không).

## Trước khi dán prompt
- Có phần 05 trong hồ sơ dự án với dòng `Trạng thái: ĐÃ DUYỆT`. Chưa duyệt thì quay lại bước Kế hoạch, đừng làm.
- Có toàn bộ **hồ sơ dự án** (file text `kryflow-project.md`, bộ nhớ bạn dán vào mỗi chat mới) mở sẵn để chép.
- Nếu là dự án lớn 1 sửa nhỏ không đụng bảng dữ liệu và đăng nhập thì được bỏ qua yêu cầu duyệt, nhưng vẫn chạy prompt này.
- Mở **một chat mới** trong Project hoặc Gem KryFlow. Chat cũ đã dài, ngữ cảnh loãng.
- Mở sẵn nền tảng build của bạn (**Lovable, Bolt, v0, Replit, hoặc Google AI Studio Build**, các trang dựng app không cần code) ở tab bên cạnh. AI ở đây soạn prompt, bạn là người dán prompt đó vào nền tảng build.

## Prompt
```prompt
Bạn là người thi công theo kế hoạch: làm đúng từng phần, không nghĩ lại kế hoạch, không tự đổi phạm vi.

ĐẦU VÀO tôi dán ngay dưới:
1. Hồ sơ dự án đầy đủ (khối đầu + các phần 01 đến 05).
2. Phần 05 Kế hoạch với danh sách phần việc và câu tự kiểm của từng phần.
3. Đoạn "Luật dự án" nếu hồ sơ có (mấy dòng ràng buộc phải giữ ở mọi bước build).
Nếu thiếu phần 05 hoặc phần 05 chưa có dòng "Trạng thái: ĐÃ DUYỆT", in ⛔ và hỏi tôi, đừng làm.

MỞ PHIÊN: đối chiếu bước tôi đang gọi với dòng "Bước hiện tại" trong hồ sơ. Lệch thì in ra và dừng hỏi.

LÀM THEO THỨ TỰ:
1. Đọc kế hoạch, liệt kê các phần việc theo số, chỉ ra phần nào đã ĐẠT rồi (nếu Nhật ký làm có ghi), phần kế cần làm là phần nào.
2. Chỉ xử lý ĐÚNG MỘT phần: {{số phần đang làm}}. Soạn cho tôi một prompt để tôi dán vào nền tảng build, gồm: việc cần dựng của riêng phần này, chỉ dẫn thiết kế đã chốt ở phần Gu nếu có, và ràng buộc trong Luật dự án. Đặt prompt đó trong khối code để tôi chép.
3. Dừng lại. Nhắc tôi: dán prompt vào nền tảng build, chạy, rồi dán lại đây bản tóm tắt thay đổi mà nền tảng build báo (nó liệt kê đã tạo hoặc sửa gì).
4. Khi tôi dán bản tóm tắt: so với kế hoạch của phần này. Khớp thì ghi ĐẠT. Lệch thì ghi một dòng bắt đầu bằng "LỆCH:" mô tả chỗ lệch, rồi DỪNG hỏi tôi muốn sửa hay chấp nhận, không tự đi tiếp.
5. Nhắc tôi tự kiểm phần này bằng đúng câu tự kiểm trong kế hoạch, rồi tôi tự tick. Bạn KHÔNG tự tick thay tôi.
6. Một phần sửa tối đa 3 lần. Lần thứ 3 vẫn chưa đạt thì đừng vá tiếp: dừng và đặt một câu hỏi lớn hơn (kế hoạch phần này có sai không, có phải chọn nền hay cách làm khác không).
7. Chỉ sang phần kế khi tôi đã tick phần này ĐẠT. Không gộp nhiều phần trong một lượt.

LUẬT DỪNG Ở CỬA:
- Không có tính năng nào ngoài kế hoạch. Thấy cần thêm thì DỪNG, hỏi tôi, ghi vào "Ý tưởng để sau", không tự dựng.
- Chỉ tôi mới gõ được DUYỆT khi cả bước xong. Bạn không tự nói "xong" hay "hoàn tất" trước khi qua bước Kiểm.
- Ba chữ khoá của tôi: DUYỆT (qua cửa), SỬA: <ý> (làm lại phần đang xử lý), ĐỂ SAU (cất ý tưởng).

CUỐI MỖI TRẢ LỜI in đúng ba khối này:

[KryFlow] {{tên dự án}} · {{loại}} · bước 6/10 · cửa 2 chiều · đang làm phần {{số}}

[Cập nhật hồ sơ]
06 Nhật ký làm:
- Phần {{số}} {{tên phần}}: ĐẠT hoặc LỆCH, kèm kết quả tự kiểm một dòng.
(chỉ ghi phần vừa đổi, đặt trong khối code để tôi chép vào hồ sơ)

[Gate] CHƯA nếu còn phần chưa ĐẠT · ĐẠT khi mọi phần đã ĐẠT và không có tính năng ngoài kế hoạch. Bước kế: 07 Kiểm.
```

## AI sẽ trả về gì
AI xử lý đúng một phần: đưa bạn một prompt để dán vào nền tảng build, rồi dừng chờ bạn chạy và dán lại kết quả. Sau đó nó ghi ĐẠT hoặc LỆCH cho phần đó và dừng, không nhảy nhiều phần một lúc.

```text
[KryFlow] Máy chia tiền phòng họp · Công cụ · bước 6/10 · cửa 2 chiều · đang làm phần 2

Kế hoạch có 4 phần. Phần 1 (khung trang) đã ĐẠT.
Phần kế: phần 2, ô nhập số người và tổng tiền.

Prompt bạn dán vào nền tảng build:

  Thêm vào trang một khối nhập gồm: ô số người (số nguyên, tối thiểu 1)
  và ô tổng tiền (số, đơn vị đồng). Dưới hai ô là nút "Chia".
  Giữ nền trắng, chữ đen, bo góc mềm như phần 1. Chưa cần tính, chỉ dựng ô.

Giờ bạn: dán prompt trên vào nền tảng build, chạy, rồi dán lại đây
bản tóm tắt thay đổi mà nó báo. Tôi sẽ đối chiếu kế hoạch. Tôi dừng ở đây.

[Gate] CHƯA. Bước kế: 07 Kiểm.
```

## Cửa ra: khi nào được sang bước kế
- [ ] Mọi phần trong kế hoạch đều được bạn tick ĐẠT, kèm kết quả tự kiểm ghi trong Nhật ký làm.
- [ ] Không phần nào phải sửa quá 3 lần (phần nào chạm 3 lần mà chưa đạt thì đã dừng hỏi lại kế hoạch, không vá tiếp).
- [ ] Không có tính năng nào ngoài kế hoạch lọt vào sản phẩm.
- [ ] Phần 06 Nhật ký làm trong hồ sơ đã ghi đủ các dòng phần việc.
- [ ] Bạn đã lưu một phiên bản trên **lịch sử phiên bản** của nền tảng build (mốc để quay về nếu bước sau hỏng).
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp
- Để AI làm cả loạt phần rồi mới xem: nó dựng chồng nhiều thứ, hỏng một chỗ là rối cả. Cách né: mỗi lượt chỉ nhận một prompt cho một phần, chạy xong mới xin phần kế.
- Để AI tự nói phần đó ĐẠT: nó đâu thấy màn hình của bạn. Cách né: bạn tự mở nền tảng build chạy thử câu tự kiểm rồi mới tick.
- Vá một phần lần thứ tư, thứ năm: càng vá càng rối. Cách né: chạm 3 lần chưa đạt thì dừng, hỏi lại kế hoạch phần đó có sai không.
- AI lén thêm tính năng "cho tiện": ngoài kế hoạch là ngoài kiểm soát. Cách né: thấy thứ lạ thì bỏ, ghi vào Ý tưởng để sau.
- Quên dán bản tóm tắt thay đổi của nền tảng build: AI không biết thực tế đã dựng gì nên đối chiếu sai. Cách né: mỗi phần chạy xong, chép lại đúng phần nền tảng báo rồi dán vào chat.
- Nói "xong rồi" ngay sau khi build: chưa qua bước Kiểm thì chưa xong. Cách né: build đủ phần thì sang 07 Kiểm, đừng giao luôn.

## Cập nhật hồ sơ dự án
Ghi vào hồ sơ dự án (file text bạn dán mỗi chat):
- Khối đầu: `Bước hiện tại: 06 Làm` khi đang làm, đổi thành `Bước kế: 07 Kiểm` khi cửa ra ĐẠT.
- Phần 06 Nhật ký làm: mỗi phần một dòng, ĐẠT hoặc LỆCH kèm kết quả tự kiểm; giữ luôn dòng `LỆCH:` nếu có để bước sau truy.
- Quyết định: nếu một phần đổi cách làm so với kế hoạch, ghi một dòng vào phần Quyết định.
- Gotcha: chỗ nào nền tảng build làm khó (dựng sai kiểu, đổi màu ngoài ý), ghi lại để lần sau né.

## Bước kế
Xong hết các phần và tick đủ cửa ra thì sang **07 Kiểm** (slug `test`) để soi sản phẩm bằng ảnh thật và bảng kiểm trước khi giao. Riêng loại **Thử nghiệm** thì không sang Kiểm: build tới đâu đủ trả lời câu hỏi thì dừng, ghi thẳng kết luận Làm thật hay Bỏ.
