---
title: 02 · Luồng
lead: Chốt hành vi sản phẩm, ai muốn gì ở khoảnh khắc nào, màn nào đáp lại, trước khi đụng công nghệ hay màu.
---

## Việc của bước này

Bước này tả **hành vi** (sản phẩm phản ứng ra sao với người dùng), chưa đụng công nghệ hay màu sắc. Bạn trả lời ba câu: ai muốn gì ở khoảnh khắc nào, mỗi màn đáp lại thế nào, và mỗi quy tắc đúng sai ra sao. Đây là **cửa 1 chiều** (quay lại sửa rất đắt): nếu chốt sai một luồng, tới lúc đã dựng xong app bạn phải đập đi làm lại nhiều màn, tốn gấp mười lần sửa ngay bây giờ. Vì đắt như vậy, bước này bắt buộc có một người phản biện ở chat thứ hai. Loại **Công cụ** và **Thử nghiệm** được bỏ bước này, đi thẳng từ Mở việc sang Kế hoạch; loại **Trang web** chỉ bật bước này khi có form hoặc đặt chỗ hoặc thanh toán.

## Trước khi dán prompt

- Cần có trong tay: hồ sơ dự án đã có phần **01 Mở việc** kèm dòng DUYỆT, bên trong ghi rõ vai người dùng và quy tắc (với app) hoặc danh sách trang (với web). Thiếu vai hoặc quy tắc thì quay lại bước 1 trước, đừng để AI đoán.
- Mở một **chat mới** (khung trò chuyện trắng, chưa có nội dung cũ) cho riêng bước này. Đừng dùng lại chat của bước 1.
- Dán đủ ba thứ vào đầu chat: prompt bên dưới, toàn bộ hồ sơ dự án, và một câu mô tả bạn đang muốn tả luồng cho phần nào.
- Chuẩn bị sẵn một chat thứ hai cho người phản biện, tốt nhất ở nền tảng khác (nếu bạn nháp ở ChatGPT thì cho cãi ở Gemini, và ngược lại).

## Prompt

```prompt
Bạn là người đặc tả hành vi sản phẩm. Bạn lấy ý định của người dùng làm gốc, không bàn công nghệ, cơ sở dữ liệu hay màu sắc. Nếu bị hỏi về những thứ đó, bạn từ chối và nói để dành cho bước sau.

ĐẦU VÀO (tôi dán ngay dưới prompt này):
- Toàn bộ hồ sơ dự án, trong đó có phần 01 Mở việc đã DUYỆT.
- Một câu tôi nói đang muốn tả luồng cho phần nào: {{phần cần tả luồng}}.
Nếu phần 01 thiếu vai người dùng hoặc thiếu quy tắc, in ⛔ và bảo tôi quay lại bước 1, đừng tự đoán.

VIỆC PHẢI LÀM, đúng thứ tự:
1. LỚP 0, ĐẾM TRƯỚC KHI VIẾT. In ba bảng có con số cụ thể:
   - Bảng Ai muốn gì: mỗi dòng một vai người dùng và một việc họ muốn đạt.
   - Các điểm vào (nơi người dùng bắt đầu chạm vào sản phẩm), liệt kê và đếm.
   - Bảng Thêm / Xem / Sửa / Xoá cho từng đối tượng dữ liệu (thứ sản phẩm lưu, ví dụ đơn hàng, lịch hẹn), đánh dấu ô nào có ai được làm.
   In tổng số vai, số điểm vào, số đối tượng dữ liệu.
2. Luồng theo ý định. Mỗi luồng viết bốn phần: khoảnh khắc nào, người dùng muốn gì, màn nào đáp lại, điều họ đang lo. Viết theo góc người dùng, cấm viết theo hệ thống kiểu "hệ thống tạo bản ghi".
3. Liệt kê màn (một khung hình người dùng nhìn thấy). Mỗi màn phải đủ bốn trạng thái: rỗng (chưa có dữ liệu), đang tải, lỗi, không quyền (người này không được xem). Thiếu trạng thái nào thì tự bổ sung.
4. Viết AC (acceptance criteria, điều kiện nghiệm thu, tức luật đúng sai của một hành vi) dạng Cho trước / Khi / Thì. Đánh số AC-01, AC-02. Mỗi quy tắc phải có một kịch bản thuận (đi đúng) và một kịch bản nghịch (làm sai, bị chặn).
5. Sau khi in xong, NHẮC tôi mở chat 2 chạy phản biện rồi dán kết quả về đây để sửa. Không tự phản biện trong chat này.

LUẬT DỪNG Ở CỬA:
- Đây là cửa 1 chiều. Bạn in xong bốn phần trên rồi DỪNG, chờ tôi gõ DUYỆT. Không tự sang bước kế, không tự nói xong, không tự tick.
- Chỉ tôi mới được gõ DUYỆT. Tôi có thể gõ SỬA: <ý> để bạn sửa, hoặc ĐỂ SAU để ghi ý vào hồ sơ.
- Cách duy nhất bỏ cửa này: tôi gõ nguyên câu "tôi chấp nhận bỏ gate Luồng", khi đó bạn ghi vào Nhật ký rồi mới đi tiếp.
- Cấm chốt công nghệ và màu ở bước này.

KHỐI TRẠNG THÁI, bạn phải in:
- Đầu trả lời, một dòng: [KryFlow] {{tên dự án}} · {{loại}} · bước 2/10 · cửa 1 chiều · đang tả luồng
- Cuối trả lời, trong khối code: [Cập nhật hồ sơ] chỉ ghi phần đổi (Đang ở bước, Quyết định đã chốt nếu có).
- Dòng cuối cùng: [Gate] CHƯA, cần phản biện chat 2 và bạn gõ DUYỆT. Bước kế: {{03 Nền nếu là app, 04 Gu nếu là web}}.
```

## AI sẽ trả về gì

AI in bảng Lớp 0 có con số thật, danh sách màn kèm đủ bốn trạng thái, các AC đánh số có cặp thuận nghịch, rồi dừng và nhắc bạn chạy phản biện trước khi duyệt. Ví dụ rút gọn:

```text
[KryFlow] Lịch hẹn spa · app · bước 2/10 · cửa 1 chiều · đang tả luồng

LỚP 0 (đếm trước)
Ai muốn gì: Khách (đặt lịch), Lễ tân (xem lịch trong ngày), Chủ (xem doanh thu) = 3 vai
Điểm vào: link đặt lịch, trang quản lý = 2 điểm vào
Thêm/Xem/Sửa/Xoá: đối tượng Lịch hẹn = 4 ô; đối tượng Dịch vụ = 4 ô = 2 đối tượng dữ liệu

LUỒNG THEO Ý ĐỊNH
- Khoảnh khắc: khách rảnh buổi tối. Muốn: đặt giờ nhanh. Màn đáp: chọn dịch vụ rồi chọn giờ. Lo: giờ mình chọn bị người khác lấy mất.

MÀN + 4 TRẠNG THÁI
- Màn Chọn giờ: rỗng (chưa có giờ trống), đang tải, lỗi (mất mạng), không quyền (chưa đăng nhập).

AC
- AC-01 Cho trước một giờ còn trống / Khi khách bấm đặt / Thì giờ đó khoá cho khách.
- AC-01 nghịch: Cho trước giờ vừa bị người khác lấy / Khi khách bấm đặt / Thì báo hết chỗ, mời chọn giờ khác.

Hãy mở chat 2, dán challenger-ux, ép tối thiểu 3 lỗ hổng rồi dán kết quả về đây.

[Gate] CHƯA, cần phản biện chat 2 và bạn gõ DUYỆT. Bước kế: 03 Nền.
```

## Cửa ra: khi nào được sang bước kế

- [ ] Bảng Lớp 0 có con số cụ thể: số vai, số điểm vào, số đối tượng dữ liệu.
- [ ] Mỗi màn đều đủ bốn trạng thái: rỗng, đang tải, lỗi, không quyền.
- [ ] Mỗi quy tắc có một kịch bản thuận và một kịch bản nghịch, AC đánh số.
- [ ] Không có câu nào nói về cơ sở dữ liệu hay màu sắc.
- [ ] Đã chạy phản biện ở chat 2, người phản biện nêu ít nhất 3 lỗ hổng và bạn đã sửa hết lỗ đỏ.
- [ ] Bạn tự gõ DUYỆT vào hồ sơ ở phần 02.

Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Phản biện (bắt buộc ở bước này)

- Mở **chat 2** (khung trò chuyện thứ hai, riêng biệt), tốt nhất ở nền tảng khác với chat chính, để người phản biện không bị nhiễm lý lẽ của chat vừa viết.
- Dán ba thứ: nội dung file `challengers/challenger-ux.md`, hồ sơ dự án, và phần 02 Luồng mà AI vừa in.
- Ép người phản biện nêu tối thiểu 3 lỗ hổng: luồng thiếu, trạng thái quên, quyền hở, AC không có kịch bản nghịch.
- Dán kết quả về chat chính, gõ SỬA: <ý> cho từng lỗ, lặp tới khi hết lỗ đỏ.
- Dấu hiệu chạy sai vai: người phản biện ra dưới 3 điểm, hoặc khen thay vì bới. Gặp vậy phải chạy lại, đừng nhận cho qua.

## Lỗi người mới hay gặp

- Viết luồng theo hệ thống ("hệ thống tạo bản ghi") thay vì theo ý định khách. Cách né: mỗi luồng bắt đầu bằng "khách muốn", không bằng "hệ thống".
- Quên trạng thái rỗng và không quyền vì lúc thử chỉ nghĩ tới màn có sẵn dữ liệu. Cách né: buộc mình liệt kê đủ bốn trạng thái cho từng màn trước khi qua màn khác.
- AC chỉ có kịch bản thuận, thiếu nghịch. Cách né: viết xong dòng thuận thì viết ngay dòng nghịch ngay dưới, cùng số AC.
- Bỏ qua phản biện vì thấy AI đã tự tin. Cách né: nhớ đây là cửa 1 chiều, chat vừa viết không tự cãi mình được, phải mở chat 2.
- Lỡ bàn công nghệ hay màu ("dùng bảng nào", "nút màu xanh"). Cách né: gạch mọi câu như vậy, để dành cho bước Nền và bước Gu.
- Nhảy sang bước kế khi AI viết "xong". Cách né: chỉ dòng DUYỆT do bạn tự gõ mới mở cửa, không phải chữ của AI.

## Cập nhật hồ sơ dự án

Sau khi qua cửa, dán khối AI in vào phần 02 của hồ sơ dự án và tự sửa ba dòng:

- Đang ở bước: 02 Luồng đã DUYỆT, sang bước kế.
- Quyết định đã chốt: ghi các luồng, màn và AC vừa chốt (đây là phần append-only, không xoá).
- Nhật ký: ghi ngày duyệt và một dòng người phản biện đã nêu mấy lỗ, đã sửa hết chưa.

## Bước kế

Nếu là **Ứng dụng**, sang **03 Nền** (slug base) để chốt dữ liệu và kiến trúc. Nếu là **Trang web**, bỏ qua Nền, sang **04 Gu** (slug style) để định hình diện mạo.
