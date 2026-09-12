---
title: 09 · Sổ tay
lead: Vẽ bản đồ thứ ĐÃ build ra 3 tài liệu, để lần sau bạn hoặc AI ở chat mới sửa được mà không kể lại từ đầu.
---

## Việc của bước này

Bước này viết lại **bản đồ của thứ đã build thật** (không phải thứ bạn từng muốn build), gom vào 3 tài liệu: README, FEATURES, RUNBOOK. Có bước này vì vài tuần sau bạn sẽ quên, và mỗi chat mới thì AI quên sạch: không có bản đồ thì lần sửa nào cũng phải dò lại từ đầu và AI dễ bịa ra tính năng không có. Đây là **cửa 2 chiều** (viết thiếu thì bổ sung sau, không đắt), nhưng tài liệu sai còn hại hơn không có, nên luật cứng là mọi câu phải có nguồn từ link thật. Bước này bỏ được với loại **Thử nghiệm** (lab, chỉ xem ý có chạy không): lab không giao, không cần tài liệu.

## Trước khi dán prompt

- Có trong tay: hồ sơ dự án đầy đủ, trong đó phần 08 Giao đã ghi đã giao live, có **link công khai** và ít nhất 1 dòng **changelog** (nhật ký phiên bản). Chưa giao lần nào thì quay lại bước 08, đừng viết tài liệu cho thứ chưa sống.
- Mở **link thật** (link công khai đang chạy) trong một tab để vừa viết vừa bấm thử, không viết theo trí nhớ.
- Mở một **chat mới** (khung trò chuyện trắng). Dán 3 thứ vào đầu chat: prompt dưới đây, toàn bộ hồ sơ dự án, và lịch sử changelog hiện có.
- Bước này không cần chat phản biện.

## Prompt

```prompt
Bạn là người viết bản đồ dự án {{tên dự án}}. Bạn CHỈ ghi cái đã build thật, cấm chép
ý muốn từ spec vào tài liệu. Nếu một tính năng có trong spec nhưng bạn không thấy bằng
chứng nó đã chạy, bạn hỏi tôi chứ không tự ghi là đã có.

ĐẦU VÀO tôi dán ngay dưới prompt này:
- Toàn bộ hồ sơ dự án (phần 08 Giao phải ghi đã live, có link và changelog).
- Link công khai thật: {{dán link đang chạy}}.
- Lịch sử changelog hiện có: {{dán các dòng phiên bản}}.
- Số phiên bản hiện tại: {{ví dụ v0.2.0}}.

Nếu phần 08 CHƯA ghi đã giao live hoặc thiếu link, in ⛔ và dừng, bảo tôi quay lại
bước 08 Giao. Không viết tài liệu cho thứ chưa sống.

VIỆC PHẢI LÀM, đúng thứ tự, in ra 3 file tách riêng:

1. File README: viết ngắn gồm làm gì cho ai, cách publish lại (đưa bản mới lên link theo
   nền tảng tôi khai), các biến bí mật (secret: mật khẩu, khoá API) TÊN là gì và lấy ở
   đâu nhưng TUYỆT ĐỐI không ghi giá trị thật, và cấu trúc màn (liệt kê các màn thật).

2. File FEATURES (bản đồ tính năng): dòng đầu tiên ghi "Tài liệu viết ở phiên bản {{X}}".
   Bên dưới là một bảng, mỗi dòng một tính năng đánh số F01, F02...:
   | Mã | Tính năng | Nguồn (AC nào) | Màn / bảng / file thật | Trạng thái | Phiên bản |
   Chỉ điền dòng cho tính năng bạn tin đã build; tính năng còn ngờ thì để trạng thái
   "chờ tôi bấm thử" và hỏi tôi, không tự đánh dấu xong.

3. File RUNBOOK (vận hành): ghi cách publish lại bản mới, cách QUAY VỀ BẢN TRƯỚC trong
   5 phút nếu bản mới hỏng, các khoá bí mật để ở đâu (tên chỗ chứa, không ghi giá trị),
   việc nào chạy theo lịch nếu có, và một mục trống tên "Gotcha" để ghi dần các bẫy
   gặp về sau.

4. Sau khi in 3 file, LIỆT KÊ cho tôi từng tính năng F01, F02... và NHẮC tôi tự bấm thử
   từng cái trên link thật, đồng thời xác nhận mỗi màn và bảng bạn ghi là có thật. Chỉ
   khi tôi xác nhận "đã bấm thử hết" bạn mới đổi trạng thái các dòng thành live.

5. Tự KIỂM lại: rà 3 file, khẳng định không có giá trị khoá bí mật nào lọt vào (chỉ được
   có tên biến, không có chuỗi giá trị). Nếu thấy giá trị bí mật, xoá và báo tôi.

LUẬT DỪNG Ở CỬA:
- Đây là cửa 2 chiều nhưng vẫn có cửa. Bạn in xong rồi DỪNG, chờ tôi bấm thử và gõ DUYỆT.
- Chỉ tôi được gõ ba chữ khoá: DUYỆT, SỬA: <ý>, ĐỂ SAU. Bạn không tự gõ DUYỆT, không tự
  tick "đã bấm thử" thay tôi, không tự nói xong.
- Bước Sổ tay KHÔNG làm tăng số phiên bản của dự án. Giữ nguyên phiên bản hiện tại.

KHỐI TRẠNG THÁI bạn phải in:
- Đầu trả lời, một dòng:
  [KryFlow] {{tên dự án}} · {{loại}} · bước 9/10 · cửa Sổ tay · <trạng thái ngắn>
- Cuối trả lời, hai khối:
  [Cập nhật hồ sơ] (trong khối code, chỉ ghi phần đổi để tôi dán vào file)
  [Gate] ĐẠT|CHƯA + nhắc: từ giờ mọi thay đổi đi bước 10 Nâng cấp.
```

## AI sẽ trả về gì

AI in 3 file README, FEATURES, RUNBOOK gọn, mỗi tính năng có màn hoặc file thật kèm phiên bản, dòng "Tài liệu viết ở phiên bản X" ở đầu FEATURES, rồi dừng và nhắc bạn bấm thử từng tính năng trên link thật trước khi duyệt. Ví dụ rút gọn phần FEATURES:

```text
[KryFlow] Máy chia tiền · Công cụ · bước 9/10 · cửa Sổ tay · vừa in 3 file, chờ bạn bấm thử

FEATURES
Tài liệu viết ở phiên bản v0.2.0

| Mã  | Tính năng          | Nguồn  | Màn / file thật        | Trạng thái     | Phiên bản |
|-----|--------------------|--------|------------------------|----------------|-----------|
| F01 | Nhập tổng tiền     | AC-01  | màn Nhập / index.html  | chờ bạn bấm thử| v0.1.0    |
| F02 | Chia đều theo số người | AC-02 | màn Kết quả / app.js | chờ bạn bấm thử| v0.1.0    |
| F03 | Chép kết quả       | AC-04  | nút Chép / app.js      | chờ bạn bấm thử| v0.2.0    |

Bạn mở link thật, bấm thử F01 tới F03, rồi gõ "đã bấm thử hết" để tôi đổi sang live.

[Gate] CHƯA · chờ bạn bấm thử và gõ DUYỆT. Từ giờ mọi thay đổi đi bước 10 Nâng cấp.
```

## Cửa ra: khi nào được sang bước kế

- [ ] Có đủ 3 file: README, FEATURES, RUNBOOK.
- [ ] Dòng "Tài liệu viết ở phiên bản X" ở đầu FEATURES khớp đúng phiên bản đang live.
- [ ] Mỗi tính năng trong bảng FEATURES đã được bạn tự bấm thử trên link thật, không tin theo lời AI.
- [ ] Mỗi màn hoặc bảng ghi trong tài liệu đúng là có thật trên nền tảng, không phải màn trong spec chưa dựng.
- [ ] Đã soát cả 3 file, không có giá trị khoá bí mật nào (chỉ có tên biến, không có chuỗi giá trị).
- [ ] Chưa tick đủ thì chưa sang bước kế, kể cả khi AI bảo xong.

## Lỗi người mới hay gặp

- Chép thẳng ý muốn từ spec vào tài liệu. Triệu chứng: FEATURES có tính năng bạn dự tính mà chưa dựng. Cách né: chỉ ghi dòng nào bạn vừa bấm thử thấy chạy, còn lại để "chờ bấm thử".
- Tài liệu nhắc màn hoặc bảng không có thật. Triệu chứng: RUNBOOK nói tới trang chưa từng dựng. Cách né: mở link thật đối chiếu từng màn trước khi để trạng thái live.
- Dòng phiên bản trong FEATURES lệch bản đang live. Triệu chứng: đầu file ghi v0.1.0 nhưng link đang chạy v0.2.0. Cách né: sửa cho khớp phiên bản trong hồ sơ trước khi duyệt.
- Lỡ dán giá trị khoá bí mật vào tài liệu. Triệu chứng: README có chuỗi mật khẩu hay khoá API thật. Cách né: chỉ ghi tên biến và chỗ lấy, xoá mọi giá trị, đổi khoá nếu đã lỡ để lộ.
- Tin lời AI nói tính năng đã chạy mà không bấm thử. Triệu chứng: sau này mở ra thấy nút không hoạt động. Cách né: tự bấm hết từng tính năng trên link công khai rồi mới gõ DUYỆT.
- Tưởng viết Sổ tay là tăng phiên bản. Triệu chứng: bạn bump lên v0.3.0 dù không đổi gì trong sản phẩm. Cách né: Sổ tay chỉ ghi lại, giữ nguyên phiên bản đang live.

## Cập nhật hồ sơ dự án

Sau bước này, ghi vào hồ sơ:

- Khối đầu: đổi Bước hiện tại thành 10 Nâng cấp, giữ nguyên phiên bản (Sổ tay không bump).
- Quyết định đã chốt: đã có bộ Sổ tay 3 file, ghi nơi cất 3 file đó.
- Nhật ký: thêm 1 dòng ngày, việc "Viết Sổ tay ở phiên bản X, đã bấm thử từng tính năng".

## Bước kế

Đã có Sổ tay nghĩa là dự án chuyển sang giai đoạn sống. Từ giờ mọi thay đổi, thêm tính năng hay sửa lỗi, đều đi vào bằng **bước 10 Nâng cấp** (slug update), rồi quay lại Giao để ra bản mới. Với loại **Thử nghiệm** (lab) đã bỏ bước này thì dừng luôn ở kết luận Làm thật hay Bỏ.
