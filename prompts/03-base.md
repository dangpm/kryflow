---
title: 03 · Nền
lead: Chốt dữ liệu, quyền, dịch vụ ngoài và nơi host trước khi ai đó code, vì sửa nền sau này rất đắt.
---

## Việc của bước này

Bước này định nghĩa **nền** (phần đáy của sản phẩm): các bảng dữ liệu, ai được đọc và ghi cái gì, các dịch vụ ngoài bạn phải gọi, và nơi bạn sẽ đưa sản phẩm lên chạy. Có bước này vì luồng ở bước 02 nói người dùng làm gì, còn nền nói dữ liệu đó nằm ở đâu và ai chạm được. Đây là **cửa 1 chiều** (làm sai thì quay lại rất đắt): đổi một cột dữ liệu khi đã có người dùng thật tốn gấp 10 đến 100 lần sửa một cái nút. Vì vậy bước này đi chậm, làm kỹ, và bắt buộc có người phản biện ở chat thứ hai.

Bước này chỉ dành cho loại **Ứng dụng** (có đăng nhập, dữ liệu của nhiều người). Loại Công cụ, Trang web và Thử nghiệm bỏ bước này, đi thẳng từ bước trước sang bước Kế hoạch hoặc bước Gu.

## Trước khi dán prompt

- Có sẵn hồ sơ dự án (file text `kryflow-project.md` bạn giữ trên máy hoặc Google Docs) với phần **02 Luồng** đã ghi dòng DUYỆT, kèm bảng Thêm/Xem/Sửa/Xoá và các câu chấp nhận (AC).
- Biết bạn sẽ build trên nền nào (Lovable, Bolt, v0, Replit, hay Google AI Studio Build) để AI hiểu giới hạn thật của nền đó.
- Mở một **chat mới** trong không gian KryFlow của bạn. Mỗi bước một chat mới, đừng nối tiếp chat bước 02.
- Chuẩn bị mở thêm một **chat thứ hai** (tốt nhất khác nền: nháp ở ChatGPT thì cãi ở Gemini) để chạy phản biện ở cuối bước.

## Prompt

```prompt
Bạn là người dựng NỀN dữ liệu cho một ứng dụng. Bạn định nghĩa bảng dữ liệu, quyền và dịch vụ ngoài SINH RA TỪ quy tắc đã chốt trong hồ sơ, không bịa thêm cột, không bàn màu sắc hay giao diện.

ĐẦU VÀO tôi dán ngay dưới prompt này:
1. Toàn bộ hồ sơ dự án hiện tại.
2. Nền build tôi sẽ dùng: {{tên nền, ví dụ Lovable}}.
Nếu thiếu phần 02 Luồng đã DUYỆT trong hồ sơ, in ⛔ và hỏi tôi, đừng tự bịa luồng.

VIỆC PHẢI LÀM, theo đúng thứ tự, dừng lại xin tôi gật sau mỗi bảng:

1. BẢNG DỮ LIỆU. Với mỗi bảng in: tên bảng, các cột, mỗi cột ghi kiểu đơn giản (chữ / số / ngày / đúng-sai / liên kết tới bảng khác), có bắt buộc không, có phải duy nhất không, và sinh từ quy tắc nào trong hồ sơ. Cột nào không phục vụ một quy tắc cụ thể thì bỏ, đừng thêm cột "để sau này dùng".

2. QUAN HỆ và VÒNG ĐỜI TRẠNG THÁI. Mô tả bằng lời bảng nào nối bảng nào. Với dữ liệu có trạng thái đổi theo thời gian, ghi rõ đi từ trạng thái nào sang trạng thái nào, ai được đổi, điều kiện gì. Mọi thứ xoá phải là XOÁ MỀM (đánh dấu đã xoá, không mất thật).

3. BẢNG QUYỀN theo vai. Mỗi vai người dùng một dòng: được đọc dữ liệu của ai, được ghi cái gì, được xoá cái gì. Hỏi tôi rõ: dữ liệu của một người thì ai khác được xem, đừng đoán.

4. BẢNG DỊCH VỤ NGOÀI. Mỗi dịch vụ (gửi mail, thanh toán, đăng nhập Google...) một dòng: dùng để làm gì, LỖI THÌ SAO (dịch vụ chết thì sản phẩm xử lý ra sao), GỌI 2 LẦN THÌ SAO (người dùng bấm hai lần thì có bị tính tiền đôi, tạo đơn đôi không).

5. NƠI HOST. Chọn giúp tôi 1 trong 2 làn cho người mới:
   a. Bấm nút Publish ngay trên nền build.
   b. Nối kho mã GitHub với Netlify hoặc Vercel để tự đăng lại mỗi lần sửa.
   Ghi cách QUAY VỀ BẢN TRƯỚC nếu bản mới hỏng, và chi phí ước tính mỗi tháng (nêu rõ mức miễn phí).

LUẬT DỪNG Ở CỬA:
- Đây là cửa 1 chiều. In từng bảng rồi DỪNG, chờ tôi gật "ok bảng này" trước khi sang bảng kế. Không gộp cả 5 bước vào một lần trả lời.
- Sau bảng cuối, nhắc tôi chạy PHẢN BIỆN NỀN ở chat thứ hai với file challengers/challenger-system.md.
- Chỉ mình tôi được gõ DUYỆT. Bạn không tự duyệt, không tự tick, không tự sang bước Gu.
- Nếu tôi gõ "SỬA: <ý>" thì sửa đúng ý đó. "ĐỂ SAU" thì ghi vào phần Ý tưởng để sau.

KHỐI TRẠNG THÁI bạn PHẢI in:
- Đầu mỗi trả lời, một dòng:
  [KryFlow] {{tên dự án}} · Ứng dụng · bước 3/10 Nền · cửa 1 chiều · {{đang làm bảng nào}}
- Cuối mỗi trả lời:
  [Cập nhật hồ sơ] (chỉ phần đổi, trong khối mã) để tôi tự dán vào file.
  [Gate] ĐẠT hoặc CHƯA. Nếu chưa chạy phản biện hoặc tôi chưa gật đủ các bảng thì ghi CHƯA và nói còn thiếu gì.
```

## AI sẽ trả về gì

AI in lần lượt: bảng dữ liệu dạng chữ, phần quan hệ và vòng đời trạng thái, bảng quyền theo vai, bảng dịch vụ ngoài có cột xử lý lỗi, mục chọn host kèm cách quay lại, rồi dừng chờ bạn gật từng bảng. Dưới đây là một mẩu rút gọn cho biết thế nào là đúng.

```text
[KryFlow] Đặt lịch PT · Ứng dụng · bước 3/10 Nền · cửa 1 chiều · bảng 1

Bảng: khach_hang
- ho_ten      | chữ    | bắt buộc | không duy nhất | quy tắc: hồ sơ khách ở luồng "Xem lịch"
- so_dien_thoai | chữ  | bắt buộc | duy nhất       | quy tắc: định danh khách khi đặt
- da_xoa      | đúng-sai | mặc định sai         | quy tắc: xoá mềm, không mất thật

Bảng: buoi_hen
- khach        | liên kết tới khach_hang | bắt buộc | quy tắc: mỗi buổi thuộc 1 khách
- trang_thai   | chữ | bắt buộc | quy tắc: vòng đời buổi hẹn

Vòng đời buoi_hen: cho_duyet -> da_xac_nhan -> da_xong, hoặc -> da_huy.
Chỉ huấn luyện viên được chuyển sang da_xac_nhan.

Tôi mới in bảng 1 và 2. Bạn gật hai bảng này rồi tôi in bảng quyền.
[Gate] CHƯA · còn bảng quyền, dịch vụ ngoài, host, và phản biện.
```

## Cửa ra: khi nào được sang bước kế

- [ ] Mỗi bảng dữ liệu đều truy ra được từ một quy tắc trong hồ sơ, không còn cột "để sau này dùng".
- [ ] Mọi thứ xoá đều là xoá mềm, và mỗi dữ liệu có trạng thái đều có vòng đời rõ đi từ đâu sang đâu.
- [ ] Có bảng quyền: mỗi vai một dòng đọc và ghi, đã chốt ai được xem dữ liệu của ai.
- [ ] Mỗi dịch vụ ngoài có đủ dòng "lỗi thì sao" và "gọi 2 lần thì sao".
- [ ] Đã chọn 1 làn host, ghi cách quay về bản trước và chi phí mỗi tháng.
- [ ] Đã chạy phản biện nền ở chat 2 và xử lý xong các lỗ hổng đỏ.
- [ ] Bạn đã gật từng bảng và gõ DUYỆT vào hồ sơ.
- Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Phản biện (bắt buộc ở bước này)

Đây là cửa phản biện nặng nhất trong cả đường ray, vì sai nền là đắt nhất. Cách chạy:

- Mở một **chat thứ hai**, tốt nhất khác nền (nháp nền ở ChatGPT thì cãi ở Gemini) để người phản biện không bị nhiễm lý lẽ của chat chính.
- Dán file `challengers/challenger-system.md`, rồi dán phần 03 Nền vừa dựng (đủ các bảng) làm đầu vào.
- Bắt người phản biện chỉ ra ít nhất 3 lỗ hổng, mỗi lỗ hổng đỏ phải nói rõ "sai thì đắt thế nào": mất dữ liệu, lộ dữ liệu người này cho người kia, tính tiền đôi, hay không quay lại được.
- Mang từng lỗ hổng về chat nền, sửa lại bảng, rồi lặp cho tới khi không còn lỗ hổng đỏ.
- Nếu người phản biện khen hay trả về dưới 3 điểm, đó là dấu hiệu nó chạy sai vai. Nhắc lại nhiệm vụ và chạy lại.

## Lỗi người mới hay gặp

- Thêm cột cho tương lai: bảng phình ra vì "sau này biết đâu cần". Triệu chứng là cột không gắn quy tắc nào. Cách né: cột nào không truy ra được từ hồ sơ thì xoá.
- Quên phân quyền: ai đăng nhập cũng thấy dữ liệu của mọi người. Triệu chứng là không có bảng quyền theo vai. Cách né: bắt AI hỏi rõ ai xem được của ai trước khi chốt.
- Xoá cứng: bấm xoá là mất luôn, không lấy lại được. Cách né: mọi thứ xoá đều là xoá mềm, chỉ đánh dấu đã xoá.
- Bỏ qua dịch vụ chết: mail hay thanh toán lỗi thì cả sản phẩm treo. Cách né: mỗi dịch vụ ngoài bắt buộc có dòng "lỗi thì sao".
- Gọi hai lần: người dùng bấm nút hai lần, tạo đơn đôi hoặc trừ tiền đôi. Cách né: mỗi dịch vụ ngoài có dòng "gọi 2 lần thì sao".
- Chốt nền một mình: gật hết cho nhanh, bỏ chat phản biện. Cách né: coi bước phản biện là bắt buộc, chưa chạy thì cửa vẫn CHƯA.

## Cập nhật hồ sơ dự án

Sau khi bạn gật hết các bảng, dán khối AI đưa vào hồ sơ và tự tay ghi các dòng sau:

- Khối đầu: đổi **Bước hiện tại** thành `04 Gu`, **Bước kế** thành bước sau đó theo chuỗi loại Ứng dụng.
- Phần **03 Nền**: dán toàn bộ bảng dữ liệu, quan hệ, vòng đời, bảng quyền, bảng dịch vụ ngoài, mục host và cách quay lại. Ghi dòng `DUYỆT: <ngày>` do chính bạn gõ.
- Phần **Quyết định** (append-only): ghi làn host đã chọn và lý do, cùng các lỗ hổng phản biện đã sửa.
- Phần **Gotcha** (append-only): ghi các bẫy dịch vụ ngoài (lỗi thì sao, gọi 2 lần thì sao) để bước Làm không quên.

## Bước kế

Sang bước **04 Gu** (slug `style`, gốc `/kry-style`): định hình ngôn ngữ thiết kế riêng cho ứng dụng. Nền đã chắc thì mới bàn tới diện mạo.
