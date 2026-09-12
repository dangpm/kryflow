---
title: S · Sửa
lead: Tìm cho ra nguyên nhân gốc nói được bằng một câu rồi mới vá, vá có đường lùi, cài bài học để lỗi không lặp.
---

## Việc của bước này

Sửa là lối phụ, vào bất cứ khi nào có lỗi, dù đang ở bước nào. Việc của bước này không phải vá cho hết lỗi trước mắt mà là tìm cho ra **nguyên nhân gốc** (chỗ thật sự gây lỗi, không phải cái triệu chứng bạn nhìn thấy) và nói nó ra bằng đúng một câu trước khi động tay. Có bước riêng cho việc này vì người mới hay vá ngay chỗ đang đau, lỗi lặn đi rồi mọc lại chỗ khác, càng vá càng rối. Đây là cửa 2 chiều nên sửa sai thì làm lại rẻ, nhưng có ba luật cứng: chưa nói được nguyên nhân gốc thì chưa vá, một lỗi vá tối đa 3 lần, và sửa xong bắt buộc ghi một dòng bài học. Loại **Thử nghiệm** (lab, chỉ xem một ý có chạy không) thì bỏ bước này, hỏng thì ghi luôn kết luận Bỏ. Nếu lỗi nằm ở tầng nền (dữ liệu sai, hai người dùng đụng nhau, phân quyền), mở **chat thứ 2** chạy kẻ phản biện nền (`challengers/system.md`) trước khi vá.

## Trước khi dán prompt

- Có trong tay: **triệu chứng** (lỗi trông thế nào), thông báo lỗi dạng chữ hoặc ảnh chụp màn hình, việc bạn vừa làm ngay trước khi lỗi hiện ra, và lỗi xảy ra **luôn luôn** hay **ngẫu nhiên**.
- Hồ sơ dự án đang mở để dán vào chat và để ghi dòng Gotcha sau khi sửa.
- Mở một **chat mới** cho lần sửa này, dán 3 thứ: prompt dưới đây, toàn bộ hồ sơ, và phần mô tả lỗi ở trên.
- Bật sẵn hai thứ để tự kiểm: **công cụ xem lỗi của trình duyệt** (bấm chuột phải trên trang, chọn Kiểm tra, mở tab Console) và **bảng dữ liệu của nền build** (nơi xem các dòng dữ liệu đã lưu).

## Prompt

```prompt
Bạn là người đi tìm nguyên nhân gốc của lỗi. Luật cứng: KHÔNG đề xuất cách vá nào khi chưa nói được lỗi do đâu bằng đúng một câu.

ĐẦU VÀO TÔI DÁN NGAY DƯỚI:
- Toàn bộ hồ sơ dự án (đây là bộ nhớ, tin bản này, không tin trí nhớ của bạn).
- Triệu chứng: {{lỗi trông thế nào}}
- Thông báo lỗi hoặc ảnh: {{dán chữ lỗi hoặc mô tả ảnh}}
- Việc làm gần nhất trước khi lỗi: {{bạn vừa làm gì}}
- Lỗi xảy ra: {{luôn luôn / ngẫu nhiên}}

Nghi thức mở phiên: đối chiếu bước tôi gọi với dòng "bước hiện tại" trong hồ sơ. Nếu lệch, in ⛔ và hỏi lại, dừng, không làm tiếp.
Nếu tôi chưa đưa đủ triệu chứng, thông báo lỗi, việc làm gần nhất và luôn hay ngẫu nhiên, in ⛔ và hỏi cho đủ rồi dừng.

VIỆC PHẢI LÀM THEO THỨ TỰ:
1. Đưa 3-5 giả thuyết về nguyên nhân, xếp từ dễ xảy ra nhất. Mỗi giả thuyết kèm cách TÔI tự kiểm: bấm gì, xem ở đâu (Console của trình duyệt, bảng dữ liệu của nền build, thử bằng tài khoản thứ 2). KHÔNG vá ở bước này.
2. Dừng, chờ tôi kiểm từng giả thuyết và báo lại cái nào đúng.
3. Sau khi tôi báo, chốt nguyên nhân gốc bằng ĐÚNG MỘT CÂU theo mẫu: "Lỗi vì X ở chỗ Y, lọt tới đây vì Z". Chưa chốt được câu này thì quay lại bước 1, không đi tiếp.
4. Đề xuất cách vá, kèm rủi ro của cách vá và ĐƯỜNG LÙI (cách quay về bản trước nếu vá làm tệ hơn: khôi phục phiên bản cũ trên nền build, hoặc gỡ lại phần vừa đổi).
5. Nhắc tôi dựng lại kịch bản làm lỗi hiện ra, và sau khi vá phải chạy đúng kịch bản đó, kết quả phải ĐẠT.
6. Cài bài học: soạn 1 dòng Gotcha (triệu chứng, nguyên nhân gốc, dấu hiệu phát hiện sớm, sửa ở đâu). Nếu cần, thêm 1 dòng cho Checklist trước Giao.
7. Một lỗi vá tối đa 3 lần. Nếu lần thứ 3 vẫn hỏng, DỪNG vá, in câu hỏi kiến trúc lớn hơn (ví dụ: chỗ này có đang chồng hai việc vào một không, dữ liệu có đang sai từ gốc không) để tôi cân nhắc quay lại bước Nền hoặc Luồng.

LUẬT DỪNG Ở CỬA:
- Cấm đề xuất vá khi chưa có câu nguyên nhân gốc ở bước 3.
- In dòng "▶ Cửa đã qua: giả thuyết / đang ở: chốt nguyên nhân gốc" (hoặc bước tương ứng) rồi DỪNG chờ tôi kiểm, đừng nói "đã sửa xong".
- Chỉ tôi được gõ DUYỆT. Tôi có thể gõ "SỬA: <ý>" hoặc "ĐỂ SAU". Bạn không tự tick, không tự kết luận đã hết lỗi.
- Sửa xong chưa được coi là qua cửa nếu chưa có dòng Gotcha trong hồ sơ.

ĐẦU MỌI TRẢ LỜI in:
[KryFlow] {{tên}} · {{loại}} · lối phụ Sửa · cửa fix (2 chiều) · đang tìm nguyên nhân

CUỐI MỌI TRẢ LỜI in 2 khối:
[Cập nhật hồ sơ] chỉ ghi phần đổi, trong khối mã.
[Gate] ĐẠT hoặc CHƯA · nếu ĐẠT thì quay lại bước Kiểm để thử lại, nếu CHƯA thì đang chờ tôi kiểm giả thuyết hoặc chờ vá.
```

## AI sẽ trả về gì

AI đưa 3-5 giả thuyết kèm cách bạn tự kiểm, rồi dừng chờ bạn kiểm. Nó chưa vá gì, chưa chốt nguyên nhân. Sau khi bạn báo kết quả kiểm, nó mới chốt nguyên nhân gốc một câu và đề xuất cách vá có đường lùi.

```text
[KryFlow] Máy chia tiền · Công cụ · lối phụ Sửa · cửa fix (2 chiều) · đang tìm nguyên nhân
▶ Cửa đã qua: nhận lỗi / đang ở: đưa giả thuyết

Triệu chứng: chia 100000 cho 3 người ra 33333.33, thừa số lẻ dài.
3 giả thuyết (bạn tự kiểm giúp tôi):
1. Không làm tròn kết quả. Kiểm: mở Console, xem dòng tính chia có làm tròn không.
2. Chia trước khi đổi sang đồng. Kiểm: thử số 90000 chia 3, xem có ra 30000 chẵn không.
3. Ô nhập nhận cả dấu phẩy. Kiểm: gõ 100,000 rồi bấm Chia, xem số nhảy sao.

Bạn kiểm rồi báo cái nào đúng, tôi sẽ chốt nguyên nhân gốc một câu.
[Gate] CHƯA · chờ bạn kiểm giả thuyết
```

## Cửa ra: khi nào được sang bước kế

- [ ] Bạn đã tự kiểm các giả thuyết, không để AI đoán bừa rồi vá luôn.
- [ ] Có đúng một câu nguyên nhân gốc dạng "lỗi vì X ở Y, lọt vì Z" trước khi vá.
- [ ] Cách vá có ghi rõ rủi ro và đường lùi về bản trước.
- [ ] Đã dựng lại kịch bản làm lỗi hiện ra, chạy sau khi vá cho kết quả ĐẠT.
- [ ] Đã ghi 1 dòng Gotcha vào hồ sơ (và Checklist trước Giao nếu cần).
- [ ] Nếu đã vá 3 lần chưa xong, đã dừng và đặt câu hỏi kiến trúc thay vì thử tiếp.
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp

- Vá ngay chỗ đang đau: triệu chứng lặn rồi mọc chỗ khác. Cách né: bắt AI chốt câu nguyên nhân gốc trước, chưa có câu đó thì chưa cho vá.
- Tin AI nói "đã sửa" mà không thử lại: lỗi vẫn còn. Cách né: tự chạy lại đúng kịch bản làm lỗi hiện ra, thấy ĐẠT mới tin.
- Vá xong không ghi bài học: lần sau lặp y hệt. Cách né: coi dòng Gotcha là bắt buộc, chưa ghi thì chưa qua cửa.
- Vá hoài một lỗi tới lần thứ tư, thứ năm: đang chữa sai chỗ. Cách né: đủ 3 lần thì dừng, hỏi câu kiến trúc, có thể phải quay lại Nền hoặc Luồng.
- Sửa thẳng trên bản chạy thật không có đường lùi: hỏng nặng hơn không gỡ được. Cách né: hỏi AI đường lùi trước, hoặc lưu lại bản trước khi đổi.
- Lỗi tầng nền (dữ liệu sai, hai người đụng nhau, phân quyền) mà vá kiểu bề mặt: sai gốc vẫn còn. Cách né: mở chat 2 chạy kẻ phản biện nền trước khi vá.

## Cập nhật hồ sơ dự án

Sau bước này, dán khối AI in vào hồ sơ:

- Bước hiện tại: giữ nguyên bước đang làm dở, chỉ ghi "đã sửa lỗi ..." · Bước kế: quay lại 07 Kiểm để thử lại.
- Gotcha: thêm 1 dòng gồm triệu chứng, nguyên nhân gốc, dấu hiệu phát hiện sớm, sửa ở đâu (phần này append-only, không xoá dòng cũ).
- Checklist trước Giao: nếu lỗi này đáng phòng trước mỗi lần giao, thêm 1 dòng nhắc.
- Nhật ký: ghi ngày sửa, đã vá mấy lần, và nếu đã dừng ở lần 3 thì ghi câu hỏi kiến trúc còn treo.

## Bước kế

Sửa xong và kịch bản tái hiện đã ĐẠT thì quay lại **07 Kiểm** (slug test) để chạy lại toàn bộ bảng kiểm, chắc chắn lỗi này hết mà không làm vỡ chỗ khác, rồi mới tính chuyện sang **08 Giao** (slug ship). Nếu đã vá 3 lần chưa xong, dừng lại xem có phải quay về bước Nền hoặc Luồng để sửa từ gốc.
