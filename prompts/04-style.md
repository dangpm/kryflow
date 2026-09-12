---
title: 04 · Gu
lead: Định nghĩa gu thiết kế riêng cho sản phẩm này từ ý định của nó, chọn đúng 1 trục để xuất sắc, không bốc mẫu có sẵn.
---

## Việc của bước này

Bước này chốt **gu** (phong cách nhìn và cảm của sản phẩm): tâm trạng chủ đạo, vài nguyên tắc riêng, đúng 1 trục để làm khác đám đông, cộng một bộ **token** nhỏ (các giá trị màu, font, cỡ chữ, khoảng cách để nền build dùng lại). Có bước này vì nếu không định gu trước, nền no-code sẽ tự bịa một kiểu chung chung na ná mọi trang khác, và bạn sẽ sửa diện mạo hoài mà không bao giờ ưng. Đây là **cửa 1 chiều** (đi tiếp thì quay lại rất đắt): đổi gu sau khi đã build gần xong nghĩa là dựng lại nhiều màn, nên làm kỹ ngay bây giờ.

Bỏ được bước này nếu dự án của bạn là **Công cụ** (thứ nhỏ dùng một mình hoặc nhóm nhỏ) hoặc **Thử nghiệm** (chỉ xem một ý có chạy không): với hai loại đó đi thẳng sang bước Kế hoạch. Trang web và Ứng dụng thì bắt buộc đi qua đây.

## Trước khi dán prompt

- Mở một **chat mới** (cửa sổ trò chuyện trắng) trên ChatGPT hoặc Gemini. Bước một chat, đừng nối tiếp chat cũ.
- Có sẵn **hồ sơ dự án** (file text kryflow-project.md, bộ nhớ duy nhất của dự án) với phần Brief đã ghi dòng DUYỆT. Nếu là app hoặc web có form thì phải có cả phần Luồng đã DUYỆT.
- Biết rõ **tâm thế người dùng lúc mở sản phẩm**: họ vội, thư giãn, lo lắng, hay đang tập trung làm việc. Ghi 1 câu trước, sẽ dán vào chỗ điền.
- Chưa cần mở nền build. Bước này chỉ nói chuyện với AI để chốt gu trên giấy.

## Prompt

```prompt
Bạn là người định hình GU THIẾT KẾ RIÊNG cho đúng sản phẩm này.
Không bốc mẫu có sẵn, không dùng từ rỗng (sạch, hiện đại, đẹp, tối giản chung chung).
Mỗi câu bạn viết phải bám ý định của sản phẩm và tâm thế người dùng.

ĐẦU VÀO (tôi dán ngay dưới đây):
1. Hồ sơ dự án đầy đủ:
{{dán toàn bộ hồ sơ dự án ở đây}}
2. Tâm thế người dùng lúc mở sản phẩm:
{{ví dụ: đang vội tra cứu / đang thư giãn buổi tối / đang lo lắng cần trấn an}}

VIỆC PHẢI LÀM, ĐÚNG THỨ TỰ:
1. Đọc Brief và tâm thế người dùng. Nói lại 1 câu bạn hiểu sản phẩm này khiến người dùng CẢM thấy gì.
2. Tìm 2 hoặc 3 tham chiếu hạng A cùng ngành (sản phẩm thật, có tên, có link). Với mỗi cái nói rõ: học gì và cố tình KHÁC gì.
3. Chốt MOOD 3 đến 5 từ, không rỗng (ví dụ: ấm, chắc tay, ít chữ). Giải thích mỗi từ bằng nửa câu.
4. Viết 3 đến 5 NGUYÊN TẮC RIÊNG cho sản phẩm này, mỗi nguyên tắc là một việc làm được hoặc không được, không phải tính từ.
5. Chọn ĐÚNG 1 TRỤC ĐỘT PHÁ: một chỗ sản phẩm này cố tình làm hơn hẳn phần còn lại. Giải thích nó đổi thiết kế cụ thể thế nào.
6. Sinh TOKEN tối giản đúng 6 mục, ghi dạng bảng: màu nền và màu chữ cộng 1 màu nhấn, 1 đến 2 font, 3 bậc cỡ chữ, khoảng cách gốc, độ bo góc, độ nổi của khối. Ghi giá trị thật (mã màu, px), không để trống.
7. Viết ĐOẠN CHỈ DẪN THIẾT KẾ dài 5 đến 8 dòng, để tôi dán vào đầu MỌI prompt gửi nền build sau này. Gói mood, trục đột phá và token vào đoạn đó.
8. Nhắc tôi làm 2 việc trước khi qua cửa: chạy phản biện gu ở một chat thứ 2, và bảo nền build dựng thử 1 màn mẫu để tôi duyệt bằng mắt.

LUẬT DỪNG Ở CỬA:
- Đây là cửa 1 chiều. Làm xong 8 việc thì in [Gate] rồi DỪNG, chờ tôi.
- Ba chữ khoá: tôi gõ DUYỆT thì mới được coi là qua cửa; bạn KHÔNG tự duyệt thay tôi. Tôi gõ "SỬA: <ý>" thì bạn sửa đúng ý đó. Tôi gõ "ĐỂ SAU" thì bạn ghi ý vào phần Ý tưởng để sau.
- Cách duy nhất bỏ cửa này: tôi gõ nguyên câu "tôi chấp nhận bỏ gate Gu", khi đó bạn ghi 1 dòng vào Nhật ký rồi mới đi tiếp.
- Nếu bước tôi gọi lệch với bước ghi trong hồ sơ, in ⛔ và hỏi lại, đừng làm.

KHỐI TRẠNG THÁI (bắt buộc):
- Đầu trả lời in đúng dòng này:
[KryFlow] {{tên dự án}} · {{loại}} · bước 4/10 · cửa 1 chiều · đang làm
- Cuối trả lời in 2 khối:
[Cập nhật hồ sơ] (chỉ phần thay đổi của mục 04 Gu, đặt trong khối code để tôi chép)
[Gate] ĐẠT hoặc CHƯA + tên bước kế
```

## AI sẽ trả về gì

AI trả về mood, các nguyên tắc, 1 trục đột phá, bảng token 6 mục, 2 link tham chiếu, và đoạn chỉ dẫn thiết kế bạn sẽ tái dùng ở bước Làm. Đúng là khi mọi câu đều dính tới sản phẩm, không có từ rỗng. Ví dụ rút gọn:

```text
[KryFlow] Máy chia tiền phòng họp · Trang web · bước 4/10 · cửa 1 chiều · đang làm

Mood: gọn, chắc tay, không màu mè (người dùng đang vội chia tiền nhanh).
Nguyên tắc:
- Con số phải to hơn mọi thứ khác trên màn.
- Không quá 1 màu nhấn, không dùng ảnh nền.
- Mỗi màn hỏi đúng 1 việc.
Trục đột phá: tốc độ nhập liệu. Ô nhập luôn ở chính giữa, tự nhảy ô kế, không cần bấm nút.
Token:
| Mục        | Giá trị                    |
| nền/chữ    | #FFFFFF nền, #1A1A1A chữ    |
| màu nhấn   | #2E7D32                    |
| font       | Inter                      |
| cỡ chữ     | 32 / 18 / 14 px            |
| khoảng cách| 8px gốc                    |
| bo góc     | 10px                       |
Tham chiếu: splitwise.com (học: chia rõ ai trả bao nhiêu), ... (khác: mình nhanh hơn)

Đoạn chỉ dẫn thiết kế (dán vào mọi prompt build):
Nền trắng, chữ đen, 1 màu nhấn xanh #2E7D32. Font Inter. Con số kết quả to 32px...

[Cập nhật hồ sơ] ...
[Gate] CHƯA. Cần: chạy phản biện + render 1 màn mẫu. Bước kế: 05 Kế hoạch.
```

## Cửa ra: khi nào được sang bước kế

- [ ] Có mood 3 đến 5 từ, không rỗng, mỗi từ giải thích được vì sao hợp sản phẩm này.
- [ ] Có 3 đến 5 nguyên tắc riêng, mỗi cái là một việc làm được hoặc không, không phải tính từ chung chung.
- [ ] Gọi tên được đúng 1 trục đột phá cụ thể và nói được nó đổi thiết kế thế nào.
- [ ] Có bảng token đủ 6 mục với giá trị thật, và đoạn chỉ dẫn thiết kế 5 đến 8 dòng để tái dùng.
- [ ] Đã render thử 1 màn mẫu và bạn duyệt được bằng mắt.
- [ ] Đã chạy phản biện gu ở chat 2 và hết mục "đang trôi về tầm thường".
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Phản biện (bắt buộc ở bước này)

Vì đây là cửa 1 chiều, phản biện là bắt buộc cho Trang web và Ứng dụng. Cùng một AI vừa vẽ gu vừa tự khen thì cửa còn tên mà mất lực, nên làm ở nơi khác:

- Mở một **chat thứ 2**, tốt nhất trên nền tảng khác (nếu bước Gu bạn dùng ChatGPT thì phản biện bằng Gemini, và ngược lại).
- Dán prompt trong file **challengers/challenger-ui.md**, rồi dán phần 04 Gu vừa nhận (mood, nguyên tắc, trục, token, đoạn chỉ dẫn).
- Kẻ phản biện phải chỉ thẳng chỗ "đang trôi về tầm thường" và ép bạn giữ đúng 1 trục. Nếu nó ra dưới 3 điểm hoặc chỉ khen, đó là dấu hiệu nó chạy sai vai: chạy lại.
- Mang các điểm về chat chính, gõ "SỬA: <ý>" cho từng điểm. Lặp tới khi hết mục "đang trôi về tầm thường" thì mới gõ DUYỆT.

## Lỗi người mới hay gặp

- Nguyên tắc toàn từ rỗng (sạch, hiện đại, tối giản): AI đọc không biết làm gì. Cách né: đổi mỗi từ thành một việc làm được hoặc không được.
- Bốc gu của một app nổi tiếng khác ngành: trông lạc. Cách né: tham chiếu phải cùng ngành, và luôn ghi rõ mình khác gì.
- Chọn 2 đến 3 trục đột phá cho oai: dàn đều thành ra nhạt. Cách né: ép mình chọn đúng 1, các cái còn lại chỉ cần đủ dùng.
- Chốt gu mà chưa nhìn màn thật: chữ nghe hay nhưng lên màn xấu. Cách né: bảo nền build dựng thử 1 màn mẫu rồi mới duyệt.
- Bỏ qua chat phản biện vì ngại phiền: cửa 1 chiều mất lực gác. Cách né: coi chat 2 là một phần bắt buộc của bước, không phải tuỳ chọn.
- Không lưu đoạn chỉ dẫn thiết kế: mỗi prompt build sau lại ra một kiểu khác. Cách né: dán đoạn đó vào hồ sơ và vào đầu mọi prompt ở bước Làm.

## Cập nhật hồ sơ dự án

Chép khối [Cập nhật hồ sơ] AI in ra vào file hồ sơ. Tối thiểu ghi:

- Đang ở bước: chuyển sang 05 Kế hoạch (khi bạn đã gõ DUYỆT).
- Phần 04 Gu: mood, nguyên tắc, trục đột phá, bảng token 6 mục, 2 tham chiếu, và đoạn chỉ dẫn thiết kế 5 đến 8 dòng.
- Quyết định đã chốt: 1 dòng nói trục đột phá bạn chọn và vì sao.
- Nhật ký: ghi ngày, đã chạy phản biện gu ở chat 2, đã duyệt màn mẫu bằng mắt.

## Bước kế

Sau khi bạn gõ DUYỆT, cả Trang web và Ứng dụng đều đi tới **05 Kế hoạch** (slug plan): nhìn hiện trạng thật rồi vạch việc trước khi để nền build làm.
