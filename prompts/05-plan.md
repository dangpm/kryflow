---
title: 05 · Kế hoạch
lead: Nhìn hiện trạng thật rồi chia việc thành các phần nhỏ có prompt sẵn, cách kiểm và cách quay lại, chưa viết mã.
---

## Việc của bước này

Bước này bạn bảo AI đóng vai người lên kế hoạch: nhìn dự án đang có gì rồi chia việc thành các **phase** (phần nhỏ, mỗi phần một việc), mỗi phase kèm prompt dán sẵn, một câu để tự kiểm, và cách quay về bản trước nếu hỏng. AI chưa được viết mã ở đây. Đây là cửa 2 chiều: kế hoạch sai thì sửa rẻ, cứ lặp nhanh, nên đừng cầu toàn, chỉ cần đủ rõ để bắt tay vào **bước Làm**. Có một quy tắc không nhân nhượng: không lên kế hoạch khi bạn chưa dán hiện trạng thật. Kế hoạch vẽ trong đầu AI mà không nhìn cái đang chạy thì tới bước Làm mới vỡ. Loại **Thử nghiệm** được bỏ bước này, đi thẳng từ Mở việc sang Làm.

## Trước khi dán prompt

- Mở một **chat mới** (cửa sổ trò chuyện trống), đừng dùng lại chat của bước trước cho đỡ rối ngữ cảnh.
- Có sẵn **hồ sơ dự án** (file text bạn giữ, là bộ nhớ duy nhất của dự án) với các phần nền theo loại đã ghi dòng DUYỆT.
- Chuẩn bị **hiện trạng thật** để dán: nếu dự án còn trống thì nói rõ "trống"; nếu đã có gì thì dán link đang chạy, ảnh chụp màn hình, và danh sách màn/trang/file hiện có.
- Biết mình build trên **nền build** nào (Lovable, Bolt, v0, Replit, hoặc Google AI Studio Build) và đưa lên (host) bằng cách nào (nút Publish của nền, hoặc Vercel/Netlify nối GitHub, hoặc GitHub Pages).

## Prompt

```prompt
Bạn là người lên KẾ HOẠCH cho dự án của tôi. Bạn chia việc thành các phase nhỏ, mỗi phase có prompt dán sẵn và cách kiểm. Bạn KHÔNG viết mã ở bước này.

ĐẦU VÀO TÔI DÁN:
1. Hồ sơ dự án (toàn bộ file, gồm các phần nền đã DUYỆT theo loại dự án).
2. Hiện trạng thật, một trong hai:
   - Dự án trống (chưa có gì), hoặc
   - Link đang chạy + ảnh chụp màn hình + danh sách màn/trang/file hiện có.
Nền build đang dùng: {{tên nền build}}. Cách đưa lên host: {{nút Publish của nền, hoặc Vercel/Netlify nối GitHub, hoặc GitHub Pages}}.

VIỆC PHẢI LÀM, theo đúng thứ tự:
1. Đối chiếu bước: đọc dòng "Bước hiện tại" trong hồ sơ. Nếu không phải bước 05 Kế hoạch, in ⛔, nói tôi đang lệch bước và DỪNG.
2. MỤC TIÊU: viết trong 1-2 câu, đo được (làm xong thì ai làm được việc gì).
3. HIỆN TRẠNG: tóm tắt tối đa 5 dòng, CHỈ từ thứ tôi dán, không suy diễn. Nếu tôi chưa dán hiện trạng, in ⛔ và xin link + ảnh + danh sách màn trước khi làm tiếp.
4. ĐÃ TÌM HIỂU: nói ngắn cách nền build {{tên nền build}} làm việc này, dựa trên tài liệu chính thức của nó. Không chắc thì ghi "cần tôi kiểm lại", tuyệt đối đừng bịa tính năng.
5. PHASE 0, bộ xương biết đi (bản trống nhất nhưng chạy thông từ đầu đến cuối): đưa 1 trang trống lên link công khai bằng đúng cách host tôi chọn. Ghi: làm gì, prompt dán vào nền build, 1 câu kiểm (mở link thấy trang trống), cách quay lại nếu hỏng.
6. PHASE 1..N, mỗi phase thật ngắn, mỗi phase đủ 4 dòng:
   - Làm gì: đúng một việc.
   - Prompt: câu dán vào nền build, viết sẵn để tôi chép.
   - Cách kiểm: 1 câu tôi tự làm để biết phase chạy.
   - Cách quay lại: làm sao về bản trước nếu phase này hỏng.
7. NGOÀI PHẠM VI: liệt kê thứ lần này KHÔNG làm, để việc không phình ra.
8. Đánh dấu phase nào là CỬA 1 CHIỀU (đụng dữ liệu, đăng nhập, thanh toán, thứ sửa lại rất đắt).

LUẬT DỪNG:
- Kế hoạch này là bản NHÁP tới khi tôi gõ DUYỆT.
- Bạn KHÔNG tự sang bước Làm, KHÔNG tự chép mã, KHÔNG tự coi là xong.
- Tôi trả lời bằng một trong ba chữ: DUYỆT (chốt, sang bước kế), SỬA: <ý> (bạn sửa kế hoạch theo ý đó), ĐỂ SAU (ghi lại, chưa làm).
- Chỉ bỏ bước này khi tôi gõ nguyên câu: tôi chấp nhận bỏ gate Kế hoạch.

KHỐI TRẠNG THÁI bạn phải in:
- Dòng ĐẦU mỗi trả lời:
  [KryFlow] {{tên dự án}} · {{loại}} · bước 05/10 Kế hoạch · cửa 2 chiều · NHÁP
- CUỐI mỗi trả lời, in đúng hai khối:
  [Cập nhật hồ sơ] rồi bên dưới là phần "05 Kế hoạch" đã đổi, đặt trong một khối code để tôi chép vào file.
  [Gate] CHƯA (chờ tôi gõ DUYỆT) hoặc ĐẠT (tôi đã DUYỆT) · bước kế: 06 Làm
```

## AI sẽ trả về gì

AI in mục tiêu đo được, đúng 5 dòng hiện trạng lấy từ thứ bạn dán, phần đã tìm hiểu nền build, phase 0 rồi các phase kèm prompt dán được và câu kiểm, mục ngoài phạm vi, và ghi rõ NHÁP chờ bạn duyệt. Một ví dụ rút gọn:

```text
[KryFlow] Máy chia tiền phòng họp · Công cụ · bước 05/10 Kế hoạch · cửa 2 chiều · NHÁP

MỤC TIÊU: người dùng nhập số tiền và số người, bấm 1 nút, thấy mỗi người trả bao nhiêu.
HIỆN TRẠNG (từ bạn dán): dự án trống, chưa có link, chưa có màn nào.
ĐÃ TÌM HIỂU: nền build tạo trang tĩnh 1 file, có nút Publish ra link công khai.

PHASE 0 (bộ xương biết đi):
  Làm gì: đưa 1 trang trống lên link công khai.
  Prompt: "Tạo trang trắng, giữa trang ghi chữ Máy chia tiền, rồi bấm Publish."
  Kiểm: mở link thấy trang trắng có tiêu đề.
  Quay lại: xoá bản deploy, publish lại trang trắng.

PHASE 1: ô nhập tiền + ô nhập số người (prompt / kiểm / quay lại...)
PHASE 2: nút Tính ra số tiền mỗi người (prompt / kiểm / quay lại...)

NGOÀI PHẠM VI: lưu lịch sử, đăng nhập, chia lẻ theo món.

[Gate] CHƯA (chờ bạn gõ DUYỆT) · bước kế: 06 Làm
```

## Cửa ra: khi nào được sang bước kế

- [ ] Có mục tiêu đo được và 5 dòng hiện trạng lấy từ thứ bạn thật sự dán, không phải AI đoán.
- [ ] Có phần đã tìm hiểu cách nền build làm việc này, chỗ nào chưa chắc thì ghi rõ.
- [ ] Có phase 0 đưa được một trang trống lên link công khai.
- [ ] Mỗi phase 1..N đều có prompt dán được, một câu kiểm, và cách quay lại.
- [ ] Có mục ngoài phạm vi, và các phase cửa 1 chiều đã được đánh dấu.
- [ ] Bạn đã gõ DUYỆT, hồ sơ ghi trạng thái đã duyệt chứ không còn NHÁP.
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp

- Lên kế hoạch khi dự án đã có link mà không dán link, ảnh, danh sách màn: AI vẽ theo trí tưởng tượng, tới bước Làm mới vỡ. Cách né: dán hiện trạng thật trước, hoặc nói rõ "trống".
- Phase quá to, kiểu "làm xong toàn bộ app": không kiểm được, không quay lại được. Cách né: bắt AI cắt nhỏ tới khi mỗi phase kiểm được bằng một câu.
- Có phase thiếu cách kiểm hoặc thiếu cách quay lại: hỏng là không biết hỏng, không biết lùi. Cách né: rà lại cả hai dòng đó ở từng phase trước khi DUYỆT.
- Vội sang bước Làm khi kế hoạch còn ghi NHÁP: cửa gác mất tác dụng. Cách né: chỉ sang khi hồ sơ ghi bạn đã DUYỆT.
- Để AI bịa tính năng của nền build: nghe hợp lý nhưng nền không có, phase đó sẽ kẹt. Cách né: chỗ AI ghi "cần tôi kiểm lại" thì bạn mở tài liệu chính thức của nền xem thật.
- Nhét mọi thứ vào kế hoạch cho đủ: việc phình, làm mãi không xong. Cách né: dồn thứ chưa cần vào mục ngoài phạm vi.

## Cập nhật hồ sơ dự án

Sau khi bạn gõ DUYỆT, dán khối AI đưa vào hồ sơ và tự chỉnh:

- Khối đầu: đổi "Bước hiện tại" thành 06 Làm, "Bước kế" thành 07 Kiểm.
- Phần "05 Kế hoạch": dán nguyên mục tiêu, hiện trạng, các phase và ngoài phạm vi, thêm dòng DUYỆT kèm ngày do bạn tự gõ.
- Phần "Quyết định": ghi 1 dòng những phase đã đánh dấu cửa 1 chiều, để bước sau nhớ đi kỹ chỗ đó.

## Bước kế

Với loại Công cụ, Trang web và Ứng dụng, bước kế là **06 Làm** (slug build): bạn dán từng prompt phase vào nền build và dựng dần. Loại Thử nghiệm không đi qua bước này.
