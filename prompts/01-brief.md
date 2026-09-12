---
title: 01 · Mở việc
lead: Quyết định làm hay không, rồi để lại tờ hồ sơ dự án đầu tiên có loại dự án và chuỗi bước riêng.
---

## Việc của bước này

Bước này trả lời một câu duy nhất: việc này có đáng làm không, và nếu làm thì đi đường nào. Bạn sẽ tự trả lời 4 câu gác (ai dùng, đo bằng số gì, khi nào bỏ, tốn bao nhiêu mỗi tháng), tìm nhanh xem đã có sản phẩm sẵn chưa, chọn loại dự án, rồi để lại một tờ **hồ sơ dự án** (1 file text là bộ nhớ duy nhất của cả dự án). Đây là **cửa 1 chiều** (quyết định xong khó quay lại rẻ): nếu bạn bỏ qua và lao vào build, bạn dễ làm trùng thứ đã có, hoặc nuôi một dự án tốn tiền hằng tháng mà không ai dùng. Bước này không thể bỏ với loại nào, vì mọi loại đều cần tờ hồ sơ.

## Trước khi dán prompt

- Có sẵn một câu mô tả ý tưởng: ai dùng, khổ gì, sản phẩm làm gì.
- Mở một **chat mới** (cuộc trò chuyện trắng). Đây là dự án mới nên chưa có hồ sơ để dán, bạn chỉ dán prompt bên dưới.
- Chuẩn bị một file text trống trên máy hoặc Google Docs, đặt tên `kryflow-project.md`, để chép khối hồ sơ AI sinh ra vào đó ở cuối bước.
- Ý tưởng đang dài và lộn xộn thì mở thêm 1 chat, dán `challengers/debrief.md` để bóc ra các câu bạn cần quyết trước, rồi quay lại đây.

## Prompt

```prompt
Bạn là người gác cửa "Mở việc" của KryFlow. Nói tiếng Việt, ngắn, chỉ việc, với người
chưa từng build sản phẩm. Bạn KHÔNG viết code, KHÔNG chốt công nghệ, KHÔNG chốt màu sắc
ở bước này. Bạn cũng KHÔNG tự trả lời thay tôi 4 câu gác bên dưới.

Ý tưởng của tôi:
{{gõ ý tưởng vào đây: ai dùng, họ đang khổ gì, sản phẩm làm được gì}}

Số dự án tôi đang làm dở (chưa xong, chưa bỏ): {{điền một con số}}

Làm theo đúng thứ tự sau, làm xong việc nào dừng lại đúng chỗ đó nếu cần tôi trả lời:

1. Nếu ý tưởng còn mơ hồ, hỏi tôi tối đa 5 câu, gom hết vào 1 lần hỏi, rồi chờ tôi đáp.
   Nếu đã đủ rõ thì bỏ qua bước hỏi.
2. In ra 4 CÂU GÁC dạng câu hỏi rồi DỪNG chờ tôi tự trả lời, tuyệt đối không tự điền:
   - Ai sẽ dùng cái này, dùng lúc nào?
   - Thành công thì đo bằng con số gì?
   - Khi nào thì tôi cho phép mình bỏ dự án này?
   - Nuôi nó tốn khoảng bao nhiêu mỗi tháng (tiền nền tảng, tiền lưu trữ)?
3. Xem con số dự án dở tôi ghi. Nếu từ 3 trở lên, DỪNG: khuyên tôi đóng hoặc bỏ bớt cho
   còn tối đa 2, không cho đi tiếp cho tới khi tôi xác nhận đã còn 2 hoặc ít hơn.
4. Tìm nhanh 2-3 sản phẩm hoặc mẫu có sẵn giải đúng việc này. Với mỗi cái ghi 1 dòng nó
   làm được gì, thiếu gì. Kết luận rõ: nên tự làm, hay nên dùng cái có sẵn.
5. Đề xuất loại dự án trong 4 loại và giải thích 1 câu vì sao:
   - **tool** (công cụ nhỏ, không đăng nhập): Mở việc, Kế hoạch, Làm, Kiểm, Giao, Sổ tay
   - **web** (trang giới thiệu, landing): thêm Luồng nếu có form, và Gu
   - **app** (có đăng nhập, dữ liệu nhiều người): đủ Luồng, Nền, Gu trước khi build
   - **lab** (thử nhanh xem ý có chạy): làm gọn, sống ngắn
   In ra chuỗi bước riêng của loại bạn chọn.
6. Sinh khối HỒ SƠ DỰ ÁN v0 để tôi chép vào file, gồm: 8 dòng đầu (tên, loại, đang ở
   bước 01, bước kế, chuỗi bước, phiên bản v0 chưa có link, nền tảng build và host để
   trống, ngày), phần "01 Mở việc" ghi lại 4 câu gác và câu trả lời của tôi, phần
   "Đã tìm hiểu" ghi kết luận tự làm hay dùng sẵn, và 4 mục để trống nối dài về sau:
   Quyết định đã chốt, Gotcha, Checklist trước Giao, Ý tưởng để sau.
7. Viết phần Brief đúng độ sâu theo loại: tool hoặc lab thì Brief 10 dòng (việc, người
   dùng, thành công đo bằng gì, phạm vi làm, phạm vi KHÔNG làm). web thì thêm vài dòng
   trang cần có. app thì thêm 1 trang mô tả sản phẩm ngắn (vấn đề, người dùng, việc
   chính họ làm, dữ liệu chính, phạm vi KHÔNG làm).

Luật dừng ở cửa:
- Chỉ tôi được gõ ba chữ khoá: DUYỆT (đồng ý sang bước kế), SỬA: <điều cần đổi>, ĐỂ SAU.
- Bạn không tự gõ DUYỆT, không tự tick, không tự trả lời 4 câu gác thay tôi.
- Cửa này chỉ ĐẠT khi: 4 câu gác đã có câu trả lời của tôi (không phải bạn điền), và tôi
  đang có tối đa 2 dự án dở. Thiếu một trong hai thì in [Gate] CHƯA và nói rõ còn thiếu gì.
- Muốn bỏ cửa này, tôi phải gõ nguyên câu "tôi chấp nhận bỏ gate Mở việc"; khi đó bạn ghi
  câu này vào phần Quyết định của hồ sơ.

Khối trạng thái bắt buộc:
- Đầu mỗi trả lời in 1 dòng:
  [KryFlow] {{tên dự án}} · {{loại}} · bước 01/10 · cửa 1 chiều · {{trạng thái ngắn}}
- Cuối mỗi trả lời in hai khối:
  [Cập nhật hồ sơ] (trong khối code, chỉ ghi phần thay đổi để tôi dán vào file)
  [Gate] ĐẠT hoặc CHƯA + tên bước kế theo loại dự án
```

## AI sẽ trả về gì

Lần đầu, AI sẽ in 4 câu gác rồi dừng chờ bạn. Sau khi bạn trả lời, AI in Brief (10 dòng với tool, hoặc 1 trang mô tả với app), phần Đã tìm hiểu, và khối hồ sơ dự án v0 để bạn lưu. Dưới đây là ví dụ rút gọn phần AI in ra lần đầu:

```text
[KryFlow] Máy chia tiền phòng họp · tool · bước 01/10 · cửa 1 chiều · chờ bạn trả lời 4 câu gác

Trước khi mình đi tiếp, bạn tự trả lời giúp mình 4 câu này (mình không trả lời thay):
1. Ai sẽ dùng cái này, dùng lúc nào?
2. Thành công thì đo bằng con số gì?
3. Khi nào thì bạn cho phép mình bỏ dự án này?
4. Nuôi nó tốn khoảng bao nhiêu mỗi tháng?

Bạn ghi câu trả lời vào đây rồi gửi lại, mình sẽ tìm sản phẩm có sẵn và dựng hồ sơ.

[Gate] CHƯA · còn thiếu: 4 câu trả lời của bạn. Bước kế sau khi ĐẠT: 02 Kế hoạch (plan).
```

## Cửa ra: khi nào được sang bước kế

- [ ] Bạn đã tự tay trả lời cả 4 câu gác, không để AI điền thay câu nào.
- [ ] Câu 4 (tốn bao nhiêu mỗi tháng) có một con số hoặc khoảng số, không để trống.
- [ ] Bạn đang có tối đa 2 dự án đang dở.
- [ ] Đã có kết luận rõ: tự làm hay dùng sản phẩm có sẵn.
- [ ] Đã chọn loại dự án và có chuỗi bước riêng của loại đó.
- [ ] Đã chép khối hồ sơ dự án v0 vào file `kryflow-project.md` và lưu lại.
- [ ] Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp

- AI tự trả lời hộ 4 câu gác cho nhanh. Triệu chứng: bạn thấy 4 câu đã có đáp án mà mình chưa gõ gì. Cách né: gõ SỬA: xoá đáp án, để tôi tự trả lời.
- Đã bàn màu sắc hoặc công nghệ ngay từ đây. Triệu chứng: hồ sơ có chữ "dùng React" hay "màu xanh". Cách né: nhắc AI bước này chưa chốt gì về công nghệ hay màu, xoá đi.
- Bỏ trống câu chi phí mỗi tháng. Triệu chứng: câu 4 để trống vì thấy khó. Cách né: cứ ước lượng thô, kể cả "0 đồng, dùng bản free" cũng là một câu trả lời hợp lệ.
- Ôm quá nhiều dự án dở. Triệu chứng: AI chặn ở bước 3. Cách né: chọn 1 dự án để đóng hoặc chuyển sang mục Ý tưởng để sau, rồi mới đi tiếp.
- Không lưu hồ sơ vào file. Triệu chứng: sang chat sau không có gì để dán. Cách né: chép ngay khối hồ sơ v0 vào `kryflow-project.md` trước khi đóng chat.
- Nhét luôn cả kế hoạch làm vào Brief. Triệu chứng: Brief dài, bàn cách làm từng phần. Cách né: Brief chỉ nói làm gì và không làm gì, cách làm để dành bước Kế hoạch.

## Cập nhật hồ sơ dự án

Sau bước này, file `kryflow-project.md` cần có:

- 8 dòng đầu: tên, loại (tool/web/app/lab), Đang ở bước 01, bước kế, chuỗi bước theo loại, phiên bản v0, nền tảng và host để trống, ngày.
- Phần 01 Mở việc: 4 câu gác kèm câu trả lời của bạn, và dòng DUYỆT do bạn tự ghi khi qua cửa.
- Phần Quyết định đã chốt: ghi loại dự án và kết luận tự làm hay dùng sẵn.
- Nhật ký: 1 dòng ngày, việc "Mở việc, chốt loại và chuỗi bước".

## Bước kế

Với loại **tool** và **lab**, bước kế là **02 Kế hoạch** (slug plan): bỏ Luồng, Nền, Gu, đi thẳng vào lên kế hoạch. Với loại **web** và **app**, bước kế là **02 Luồng** (slug flow) để đặc tả sản phẩm có những màn và hành vi gì trước khi làm.
