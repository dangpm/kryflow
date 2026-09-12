---
title: 07 · Kiểm
lead: Tự bấm thử sản phẩm trên link thật theo từng tiêu chí, trước khi được nói xong.
---

## Việc của bước này

Bước này bạn tự mở sản phẩm trên **link công khai** (đường web ai cũng vào được) và bấm thử từng **AC** (tiêu chí nghiệm thu, tức điều kiện để coi là làm đúng, chốt từ bước Làm). AI không được cho ĐẠT thay bạn, nó chỉ dựng bảng kiểm và biến mỗi AC thành các bước bấm cụ thể, còn ĐẠT hay LỖI là do tay bạn thử ra. Có bước này vì đọc mã hay nghe AI nói "chạy tốt" không phải là bằng chứng, chỉ có bấm thật trên link thật mới là. Đây là cửa 2 chiều nên sai thì lặp lại rẻ, nhưng còn một AC nào ở trạng thái LỖI thì chưa được sang bước Giao. Với loại **Thử nghiệm** (lab) bước này bỏ được, chỉ cần ghi kết luận Làm thật hay Bỏ.

## Trước khi dán prompt

- Đã có **link công khai** mở được ở tab ẩn danh, không phải **bản xem trước** (preview bên trong trình soạn của nền build).
- Hồ sơ dự án đang mở, phần 06 Làm đã ĐẠT mọi phase và phần 07 đã có danh sách AC.
- Mở một **chat mới** cho bước này, dán 3 thứ: prompt dưới đây, toàn bộ hồ sơ, và link + danh sách AC.
- Chuẩn bị 2 tài khoản thử nếu sản phẩm có đăng nhập, và một trình duyệt để mở cửa sổ ẩn danh.

## Prompt

```prompt
Bạn là người soát chất lượng khó tính. Việc của bạn: biến mỗi AC thành các bước bấm cụ thể trên link thật để tôi tự thử, KHÔNG tự kết luận ĐẠT.

ĐẦU VÀO TÔI DÁN NGAY DƯỚI:
- Toàn bộ hồ sơ dự án (đây là bộ nhớ, tin bản này, không tin trí nhớ của bạn).
- Link công khai: {{dán link}}
- Danh sách AC ở phần 07: {{dán AC}}

Nghi thức mở phiên: đối chiếu bước tôi gọi với dòng "bước hiện tại" trong hồ sơ. Nếu lệch, in ⛔ và hỏi lại, dừng, không làm tiếp.
Nếu tôi chỉ đưa bản xem trước trong trình soạn, in ⛔ và yêu cầu link công khai mở được ở tab ẩn danh, rồi dừng.

VIỆC PHẢI LÀM THEO THỨ TỰ:
1. Lập bảng kiểm, mỗi AC một dòng, gồm cột: AC, các bước bấm, kỳ vọng, ô Kết quả để tôi điền ĐẠT hoặc LỖI, cột Ảnh (ghi "cần ảnh" nếu là giao diện).
2. Thêm dòng kịch bản nghịch để tôi thử: nhập sai định dạng, bỏ trống ô bắt buộc, bấm gửi 2 lần liên tiếp, tắt mạng giữa chừng, mở bằng tài khoản khác.
3. Đưa checklist "chuẩn xong theo loại" đúng loại dự án {{loại}} để tôi tự tick:
   - Công cụ: mở nhanh, làm đúng 1 việc chính, lỗi nhập liệu có báo rõ.
   - Trang web: mọi liên kết chạy, form gửi được và có màn cảm ơn, mở tốt trên máy tính.
   - Ứng dụng: đăng nhập và đăng xuất chạy, tài khoản A không thấy dữ liệu tài khoản B, làm mới trang không mất trạng thái.
   - Chạy theo lịch: chạy thử một vòng thật ra kết quả đúng, và có báo khi chạy hỏng.
4. Nhắc tôi kiểm không có khoá bí mật (mật khẩu, chuỗi API) lộ trong mã trang công khai hay dán nhầm trong chat.
5. Chờ tôi bấm thật rồi báo lại từng ô ĐẠT hoặc LỖI kèm ảnh cho phần giao diện. Gom mọi LỖI thành một danh sách gọn để tôi dán sang bước Sửa.
6. Chỉ khi mọi AC đều ĐẠT và checklist theo loại đủ thì mới ghi "ĐƯỢC GIAO"; còn dù một LỖI thì ghi "CHƯA".

LUẬT DỪNG Ở CỬA:
- Bạn KHÔNG tự cho ĐẠT bằng cách đọc mã hay bằng lời. ĐẠT hay LỖI là do tôi bấm thật và báo.
- In dòng "▶ Cửa đã qua: 06 Làm / đang ở: 07 Kiểm" rồi DỪNG chờ tôi báo kết quả, đừng nói "xong".
- Chỉ tôi được gõ DUYỆT. Tôi có thể gõ "SỬA: <ý>" hoặc "ĐỂ SAU". Bạn không tự tick, không tự sang bước.
- Muốn bỏ cửa này chỉ khi tôi gõ nguyên câu "tôi chấp nhận bỏ gate Kiểm", khi đó bạn ghi vào Nhật ký.

ĐẦU MỌI TRẢ LỜI in:
[KryFlow] {{tên}} · {{loại}} · bước 07/10 · cửa Kiểm (2 chiều) · đang kiểm

CUỐI MỌI TRẢ LỜI in 2 khối:
[Cập nhật hồ sơ] chỉ ghi phần đổi, trong khối mã.
[Gate] ĐẠT hoặc CHƯA · nếu ĐẠT thì bước kế là 08 Giao, nếu còn LỖI thì rẽ qua Sửa rồi kiểm lại.
```

## AI sẽ trả về gì

AI dựng một bảng kiểm theo AC kèm bước bấm và ô kết quả trống, thêm dòng kịch bản nghịch và checklist theo loại, rồi dừng chờ bạn thử thật. Nó chưa được kết luận đã xong.

```text
[KryFlow] Máy chia tiền · Công cụ · bước 07/10 · cửa Kiểm (2 chiều) · đang kiểm
▶ Cửa đã qua: 06 Làm / đang ở: 07 Kiểm

Bảng kiểm (bạn tự bấm rồi điền):
| AC | Bước bấm | Kỳ vọng | Kết quả | Ảnh |
|----|----------|---------|---------|-----|
| Chia đều 300k cho 3 người | Nhập 300000, số người 3, bấm Chia | Ra 100000 mỗi người | ____ | cần ảnh |
| Bỏ trống số tiền | Để trống, bấm Chia | Báo "nhập số tiền" | ____ | cần ảnh |

Kịch bản nghịch nên thử: nhập chữ thay số, bấm Chia 2 lần, mở ở tab ẩn danh.
Checklist Công cụ: [ ] mở nhanh [ ] làm đúng 1 việc [ ] lỗi nhập có báo rõ.
Nhắc: xem mã trang có lộ khoá bí mật nào không.

Bạn bấm thử rồi báo từng ô ĐẠT/LỖI giúp tôi.
[Gate] CHƯA · chờ bạn báo kết quả thật
```

## Cửa ra: khi nào được sang bước kế

- [ ] Bạn đã mở link công khai ở tab ẩn danh và tự bấm thử, không kết luận qua đọc mã.
- [ ] Mọi AC có kết quả ĐẠT hoặc LỖI do chính bạn bấm ra.
- [ ] Phần giao diện có ảnh chụp thật, không phải mô tả bằng chữ.
- [ ] Checklist chuẩn xong theo loại dự án đã tick đủ.
- [ ] Đã kiểm không có khoá bí mật lộ trong mã công khai hay trong chat.
- [ ] Không còn AC nào ở trạng thái LỖI.
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Phản biện (bắt buộc ở bước này)

Với **Trang web** và **Ứng dụng**, sau khi bảng kiểm ĐẠT, mở một **chat thứ 2**, tốt nhất khác nền tảng với chat kiểm (kiểm ở ChatGPT thì soi ở Gemini), dán prompt trong `challengers/design-review.md` kèm các ảnh chụp thật. Kẻ này đóng vai giám đốc thiết kế khó tính, chấm GIAO, CẦN SỬA hoặc LÀM LẠI. Nếu nó chỉ khen hoặc ra dưới 3 điểm cụ thể thì là chạy sai vai, chạy lại. Có điểm CẦN SỬA thì rẽ qua bước Sửa rồi quay lại kiểm, không mang thẳng sang Giao.

## Lỗi người mới hay gặp

- Kiểm trên bản xem trước trong trình soạn: nó chạy khác bản thật đã đăng, nên luôn mở link công khai ở tab ẩn danh.
- Để AI tự điền ĐẠT cho nhanh: mất sạch giá trị của bước, bạn phải tự bấm và tự báo kết quả.
- Chỉ thử đường thuận: bỏ trống, nhập sai, bấm 2 lần mới là chỗ vỡ, luôn chạy kịch bản nghịch.
- Ứng dụng chỉ thử 1 tài khoản: không phát hiện tài khoản A thấy dữ liệu tài khoản B, hãy đăng nhập 2 tài khoản.
- Duyệt giao diện bằng trí nhớ: không có ảnh thì không có bằng chứng, chụp lại từng màn quan trọng.
- Còn LỖI mà nóng ruột sang Giao: đưa lỗi lên bản chạy thật rồi mới sửa thì đắt hơn nhiều, dọn hết LỖI trước.

## Cập nhật hồ sơ dự án

Sau bước này, dán khối AI in vào hồ sơ:

- Bước hiện tại: 07 Kiểm đã xong · Bước kế: 08 Giao (nếu còn LỖI thì Sửa trước).
- Phần 07 Kiểm: dán bảng AC kèm kết quả và tên ảnh, checklist theo loại đã tick, danh sách LỖI nếu có.
- Nhật ký: ghi ngày kiểm, kết luận ĐƯỢC GIAO hay CHƯA, và ai chạy phản biện thiết kế.
- Ý tưởng để sau: các điểm nhỏ chưa sửa lần này, đẩy xuống đây để không quên.

## Bước kế

Mọi AC ĐẠT và checklist theo loại đủ thì sang **08 Giao** (slug ship) để đưa lên chạy thật. Nếu còn LỖI, rẽ qua **Sửa** (slug fix) tìm nguyên nhân gốc, sửa xong quay lại Kiểm rồi mới Giao.
