---
title: 10 · Nâng cấp
lead: Cửa duy nhất để sửa một sản phẩm đã chạy thật: đọc tài liệu trước, phân loại cửa, giao cho đúng bước, rồi cập nhật tài liệu và giao lại.
---

## Việc của bước này

Bước này là cửa duy nhất để đụng vào một sản phẩm **đã sống** (đã giao ở bước 08 và đã có tài liệu ở bước 09). Có hai loại việc: thêm **tính năng** mới, hoặc **sửa lỗi** trên bản đang chạy. Bước này không tự code: nó đọc tài liệu để hiểu hiện trạng, khoanh vùng đụng, xem đây là cửa 1 chiều hay 2 chiều, rồi chỉ bạn mở chat mới chạy đúng bước tiếp theo. Có bước này vì khi sản phẩm đã có người dùng thật, nhảy vào sửa bừa là cách nhanh nhất làm hỏng cái đang chạy được. Bỏ qua tài liệu và đụng thẳng vào bảng dữ liệu hay đăng nhập có thể làm mất dữ liệu hoặc lộ dữ liệu người này cho người kia, sửa rất đắt. Đây là bước sống suốt vòng đời: mỗi lần muốn đổi gì sau khi giao, bạn quay lại đây.

## Trước khi dán prompt

- Có sẵn hồ sơ dự án (file text `kryflow-project.md`) với khối đầu ghi rõ **phiên bản hiện tại** và **link bản đang chạy**.
- Có bộ tài liệu từ bước 09: `docs/FEATURES.md` (tính năng ứng với màn hoặc file nào) và `docs/RUNBOOK.md` (cách vận hành, các bẫy đã biết). Thiếu một trong hai thì dừng lại, quay về bước **09 Sổ tay** trước, đừng đụng vào sản phẩm.
- Biết rõ bạn muốn gì: một câu mô tả **tính năng** cần thêm, hoặc một câu mô tả **lỗi** cần sửa (thấy gì sai, ở màn nào).
- Mở một **chat mới** trong không gian KryFlow. Đừng nối tiếp chat cũ.
- Nếu việc có thể đụng bảng dữ liệu, đăng nhập hay thanh toán, chuẩn bị mở thêm **chat thứ hai** để chạy phản biện.

## Prompt

```prompt
Bạn là người ĐIỀU PHỐI việc sửa một sản phẩm đã chạy thật. Bạn đọc bản đồ (tài liệu) trước, khoanh vùng đụng, phân loại cửa, rồi chỉ tôi mở chat mới đúng bước. Bạn KHÔNG code ở đây, KHÔNG kể lại dự án từ đầu, KHÔNG mở lại phần Brief.

ĐẦU VÀO tôi dán ngay dưới prompt này:
1. Toàn bộ hồ sơ dự án hiện tại (chú ý khối đầu: phiên bản + link).
2. Nội dung docs/FEATURES.md và docs/RUNBOOK.md.
3. Việc tôi muốn, ghi rõ một trong hai:
   - Tính năng: {{mô tả tính năng muốn thêm}}
   - Lỗi: {{mô tả lỗi: thấy gì sai, ở màn nào}}

KIỂM CỬA VÀO trước tiên:
- Nếu thiếu docs/FEATURES.md hoặc docs/RUNBOOK.md, in ⛔ và chỉ tôi quay về bước 09 Sổ tay. KHÔNG đề xuất sửa, KHÔNG đụng vào sản phẩm.
- Nếu có đủ, tiếp tục.

VIỆC PHẢI LÀM, theo đúng thứ tự:

1. ĐỌC theo thứ tự cố định và nói ngắn bạn hiểu gì: phần mở đầu tài liệu, FEATURES để tìm vùng đụng, RUNBOOK để lấy các bẫy đã biết, rồi phần Quyết định cũ trong hồ sơ. Không đọc tràn lan.

2. IN VÙNG ĐỤNG: liệt kê tính năng, màn hình, bảng dữ liệu và file nào sẽ bị chạm tới. Cái gì KHÔNG đụng cũng nói rõ, để tôi yên tâm phần còn lại không đổi.

3. PHÂN LOẠI CỬA: nói đây là cửa 1 CHIỀU hay 2 CHIỀU và vì sao.
   - Cửa 1 chiều (sửa lại rất đắt): đụng bảng dữ liệu, đăng nhập, phân quyền, thanh toán, hoặc thêm một luồng mới nhiều trạng thái.
   - Cửa 2 chiều (sửa lại rẻ): đổi chữ, đổi màu, sửa một nút, một màn không đụng dữ liệu.

4. CHỌN NHÁNH:
   - Nếu là TÍNH NĂNG mới: viết một bản mô tả gọn (delta spec) tối đa 10 dòng gồm việc cần thêm, màn hoặc bảng bị chạm, và điều gì coi là làm xong. Rồi chỉ tôi mở chat mới chạy bước 05 Kế hoạch với bản này.
   - Nếu là SỬA LỖI: chỉ tôi mở chat mới chạy bước Sửa với vùng đụng bạn vừa khoanh.

5. NẾU LÀ CỬA 1 CHIỀU: bắt tôi chạy PHẢN BIỆN ở chat thứ hai TRƯỚC khi làm. Nói rõ dùng file nào: challengers/challenger-system.md khi đụng bảng, đăng nhập hay thanh toán; challengers/challenger-ux.md khi thêm luồng mới nhiều trạng thái.

6. NHẮC KHÂU KẾT: sau khi làm xong và kiểm xong, phải ghi TÀI LIỆU DELTA (cập nhật FEATURES và RUNBOOK phần đổi) và tăng phiên bản đúng loại: tính năng cộng 0.1.0, sửa lỗi cộng 0.0.1. Rồi mới sang bước Giao.

LUẬT DỪNG Ở CỬA:
- In vùng đụng và loại cửa rồi DỪNG, chờ tôi gõ DUYỆT trước khi bạn viết delta spec hay chỉ bước kế. Không tự nhảy vào code.
- Chỉ mình tôi gõ DUYỆT. Bạn không tự duyệt, không tự tick, không nói "xong".
- Tôi gõ "SỬA: <ý>" thì sửa đúng ý. "ĐỂ SAU" thì ghi vào phần Ý tưởng để sau.

KHỐI TRẠNG THÁI bạn PHẢI in:
- Đầu mỗi trả lời, một dòng:
  [KryFlow] {{tên dự án}} · {{loại}} · bước 10/10 Nâng cấp · cửa live · {{tính năng hay sửa lỗi}}
- Cuối mỗi trả lời:
  [Cập nhật hồ sơ] (chỉ phần đổi, trong khối mã) để tôi tự dán vào file.
  [Gate] ĐẠT hoặc CHƯA. Nếu chưa khoanh xong vùng đụng, chưa phân cửa, hoặc là cửa 1 chiều mà chưa chạy phản biện thì ghi CHƯA và nói còn thiếu gì.
```

## AI sẽ trả về gì

AI nói ngắn nó hiểu gì từ tài liệu, in vùng đụng và loại cửa, rồi tuỳ nhánh mà chỉ bạn mở chat mới chạy bước Kế hoạch (tính năng) hoặc bước Sửa (lỗi), và nhắc khâu tài liệu delta cùng phiên bản trước khi giao lại. Dưới đây là một mẩu rút gọn cho biết thế nào là đúng.

```text
[KryFlow] Đặt lịch PT · Ứng dụng · bước 10/10 Nâng cấp · cửa live · tính năng

Đã đọc FEATURES và RUNBOOK. Việc bạn muốn: cho khách tự huỷ buổi hẹn.

Vùng đụng:
- Tính năng: "Xem lịch của tôi" (FEATURES mục 3).
- Bảng: buoi_hen, thêm nhánh trạng thái da_huy do khách kích.
- File: màn danh sách buổi hẹn của khách.
KHÔNG đụng: đăng nhập, thanh toán, bảng khach_hang.

Loại cửa: 1 CHIỀU. Lý do: đổi vòng đời trạng thái của buoi_hen,
sai thì buổi đã xong vẫn bị huỷ, khó lần lại.

Trước khi làm, chạy phản biện ở chat 2 với challengers/challenger-system.md.
Sau khi qua phản biện, gõ DUYỆT thì tôi viết delta spec 10 dòng cho bước 05 Kế hoạch.
[Gate] CHƯA · chưa chạy phản biện, chưa có DUYỆT.
```

## Cửa ra: khi nào được sang bước kế

- [ ] Đã xác nhận có đủ `docs/FEATURES.md` và `docs/RUNBOOK.md`, phiên bản trong hồ sơ không lệch quá xa bản đang chạy.
- [ ] AI đã in vùng đụng (tính năng, màn, bảng, file) và nói rõ cái gì không đụng.
- [ ] Đã phân loại cửa 1 chiều hay 2 chiều, có lý do.
- [ ] Đi đúng nhánh: tính năng mới có delta spec 10 dòng và sang bước 05 Kế hoạch; sửa lỗi sang bước Sửa với vùng đụng đã khoanh.
- [ ] Nếu là cửa 1 chiều, đã chạy phản biện ở chat 2 và xử lý xong các lỗ hổng đỏ trước khi làm.
- [ ] Bạn đã gõ DUYỆT vào hồ sơ.
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Phản biện (bắt buộc ở bước này)

Bước này chỉ bắt buộc phản biện khi việc rơi vào **cửa 1 chiều**: đụng bảng dữ liệu, đăng nhập, phân quyền, thanh toán, hoặc thêm một luồng mới nhiều trạng thái. Cách chạy:

- Mở một **chat thứ hai**, tốt nhất khác nền (nháp ở ChatGPT thì cãi ở Gemini) để người phản biện không bị nhiễm lý lẽ của chat chính.
- Chọn đúng file theo việc: dán `challengers/challenger-system.md` khi đụng dữ liệu, đăng nhập hay thanh toán; dán `challengers/challenger-ux.md` khi thêm luồng mới nhiều trạng thái. Sau đó dán vùng đụng và delta spec vừa dựng làm đầu vào.
- Bắt người phản biện chỉ ra ít nhất 3 điểm, mỗi điểm đỏ nói rõ "sai thì đắt thế nào": làm hỏng dữ liệu cũ, lộ dữ liệu, tính tiền đôi, hay phá tính năng đang chạy được.
- Mang từng điểm về chat chính, sửa lại delta spec hoặc vùng đụng, lặp tới khi không còn điểm đỏ.
- Nếu người phản biện khen hay trả về dưới 3 điểm, đó là dấu hiệu nó chạy sai vai. Nhắc lại nhiệm vụ và chạy lại.

## Lỗi người mới hay gặp

- Đụng thẳng vào sản phẩm khi chưa có tài liệu: sửa mù, không biết mình đang phá cái gì. Cách né: thiếu FEATURES hoặc RUNBOOK thì quay về bước 09 trước, cửa vẫn CHƯA.
- Sửa một chỗ làm hỏng chỗ khác: đổi một cột dữ liệu khiến màn khác vỡ. Triệu chứng là không khoanh vùng đụng. Cách né: bắt AI in rõ cái gì đụng, cái gì không.
- Coi mọi việc như cửa 2 chiều: nhảy vào sửa bảng dữ liệu như đổi một cái nút. Cách né: đụng dữ liệu, đăng nhập, thanh toán là 1 chiều, phải phản biện.
- Sửa xong quên cập nhật tài liệu: lần sau mở ra bản đồ đã sai, lại sửa mù. Cách né: coi tài liệu delta là bắt buộc, chưa ghi thì chưa được giao lại.
- Tăng phiên bản sai loại: sửa lỗi lại nhảy hẳn một số lớn, mất dấu vết. Cách né: tính năng cộng 0.1.0, sửa lỗi cộng 0.0.1.
- Mở lại Brief để bàn lại ý tưởng: việc nhỏ biến thành làm lại từ đầu. Cách né: bước này chỉ điều phối một thay đổi, không mở lại phần mở việc.

## Cập nhật hồ sơ dự án

Sau khi làm xong và kiểm xong, dán khối AI đưa vào hồ sơ và tự tay ghi:

- Phần **10 Nâng cấp**: ghi vùng đụng, loại cửa, nhánh đã đi (Kế hoạch hay Sửa), và dòng `DUYỆT: <ngày>` do chính bạn gõ.
- Khối đầu: tăng **phiên bản** đúng loại (tính năng cộng 0.1.0, sửa lỗi cộng 0.0.1), cập nhật **Bước hiện tại** và **Bước kế** theo nhánh.
- Phần **Quyết định** (append-only): ghi thay đổi này và các lỗ hổng phản biện đã sửa nếu là cửa 1 chiều.
- Phần **Gotcha** (append-only): ghi bẫy mới phát hiện để lần nâng cấp sau không vấp lại.

## Bước kế

Theo nhánh đã chọn: tính năng mới sang bước **05 Kế hoạch** (slug `plan`, gốc `/kry-plan`); sửa lỗi sang bước **S Sửa** (slug `fix`, gốc `/kry-fix`). Cả hai chạy tiếp qua **06 Làm** và **07 Kiểm**, rồi ghi Sổ tay delta và sang **08 Giao** (slug `ship`, gốc `/kry-ship`) để đưa bản mới lên chạy.
