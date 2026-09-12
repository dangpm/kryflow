---
title: Mẫu hồ sơ dự án
lead: Một tờ text là bộ nhớ duy nhất của dự án, bạn dán vào đầu mỗi chat mới và chép phần AI cập nhật ở cuối.
---

## Hồ sơ dự án là gì và dùng sao

**Hồ sơ dự án** (một file text, đặt tên `kryflow-project.md`) là bộ nhớ duy nhất của cả dự án. Chat không nhớ gì giữa các lần, nên bạn cầm tờ này thay cho trí nhớ của AI.

- Lưu ở đâu: một file text trên máy, hoặc một **Google Docs** (tài liệu chữ trên trình duyệt). Chọn một chỗ, giữ đúng một bản.
- Dán khi nào: đầu mỗi **chat mới** (cuộc trò chuyện trắng), dán 3 thứ theo thứ tự: prompt của bước, toàn bộ hồ sơ này, rồi input riêng của bước.
- Ai cập nhật: bạn. Cuối mỗi trả lời AI in khối `[Cập nhật hồ sơ]` chỉ gồm phần đổi, bạn chép phần đó vào file. Dòng DUYỆT do chính bạn gõ, AI không tự ghi.
- Đừng nạp cố định hồ sơ vào Project hay Gem: hồ sơ luôn đổi, bản nạp cũ sẽ được AI tin hơn bản mới bạn dán. Cứ dán lại mỗi chat.
- Giữ hồ sơ dưới 2 trang. Bước Giao có luật nén: rút các phần cũ còn 3-5 dòng, bản đầy đủ cất sang file lưu trữ riêng.
- Bắt đầu: chép khối trong ô bên dưới vào file của bạn, điền chỗ `{{...}}`. Bên dưới nữa là một hồ sơ đã điền để bạn xem mẫu.

## Mẫu để chép

Chép nguyên khối này, điền các chỗ `{{...}}`. Loại **tool** và **lab** thì xoá 3 dòng Luồng, Nền, Gu; loại **web** giữ Luồng (nếu có form) và Gu, bỏ Nền.

```prompt
=== HỒ SƠ DỰ ÁN KRYFLOW ===
Dán toàn bộ khối này vào đầu mỗi chat mới, ngay sau prompt của bước.

THẺ DỰ ÁN
- Tên: {{tên dự án}}
- Loại: {{tool | web | app | lab}}
- Một câu: {{sản phẩm này làm gì, cho ai}}
- Nền tảng build: {{Lovable | Bolt | v0 | Replit | Google AI Studio Build}}
- Nơi host: {{nút Publish của nền build | Netlify nối GitHub | Vercel | GitHub Pages}}
- Phiên bản: {{v0}}    Link công khai: {{chưa có}}
- 4 câu gác (bạn tự trả lời, AI không điền thay):
  1. Ai dùng, dùng lúc nào: {{...}}
  2. Thành công đo bằng con số gì: {{...}}
  3. Khi nào cho phép mình bỏ: {{...}}
  4. Nuôi tốn khoảng bao nhiêu mỗi tháng: {{...}}

ĐANG Ở BƯỚC
- Bước hiện tại: {{01 Mở việc}}
- Việc kế: {{...}}

CHUỖI BƯỚC CỦA DỰ ÁN (tick [x] khi qua cửa, ghi ngày DUYỆT)
- [ ] 01 Mở việc          DUYỆT: {{ngày}}
- [ ] 02 Luồng            DUYỆT: {{ngày}}   (bỏ nếu tool/lab)
- [ ] 03 Nền              DUYỆT: {{ngày}}   (bỏ nếu tool/web/lab)
- [ ] 04 Gu               DUYỆT: {{ngày}}   (bỏ nếu tool/lab)
- [ ] 05 Kế hoạch         DUYỆT: {{ngày}}
- [ ] 06 Làm              DUYỆT: {{ngày}}
- [ ] 07 Kiểm             DUYỆT: {{ngày}}
- [ ] 08 Giao             DUYỆT: {{ngày}}
- [ ] 09 Sổ tay           DUYỆT: {{ngày}}
- [ ] 10 Nâng cấp (lặp lại khi app đã sống)
- Sửa: lối phụ, vào bất cứ khi nào có lỗi, xong quay lại Kiểm

QUYẾT ĐỊNH ĐÃ CHỐT (thêm dòng mới xuống dưới, không xoá dòng cũ)
| Ngày | Chọn gì | Thay vì gì | Vì sao |
| --- | --- | --- | --- |
| {{ngày}} | {{...}} | {{...}} | {{...}} |

NHẬT KÝ (mỗi chat để lại đúng 1 dòng, thêm xuống dưới)
| Ngày | Làm gì | Việc kế |
| --- | --- | --- |
| {{ngày}} | {{...}} | {{...}} |

LINK FILE (dán link khi có; bộ Sổ tay sinh ở bước 09)
- Brief: {{link hoặc "trong hồ sơ"}}
- Luồng: {{link hoặc "không có với loại này"}}
- Nền: {{...}}
- Gu: {{...}}
- Kế hoạch: {{...}}
- Sổ tay (README, FEATURES, RUNBOOK): {{...}}

GOTCHA ĐÃ TRẢ GIÁ (mỗi lỗi 1 dòng: triệu chứng, nguyên nhân gốc, sửa ở đâu)
- {{chưa có}}

CHECKLIST TRƯỚC GIAO (thêm dòng khi học được điều luôn phải kiểm)
- [ ] {{...}}

Ý TƯỞNG ĐỂ SAU (nghĩ ra giữa chừng thì cất đây, không làm chen ngang)
- {{...}}
```

## Một hồ sơ đã điền để xem mẫu

Đây là hồ sơ của một dự án nhỏ loại **tool**: một trang chia tiền cho nhóm đi ăn. Loại tool nên đã xoá 3 dòng Luồng, Nền, Gu.

```text
=== HỒ SƠ DỰ ÁN KRYFLOW ===

THẺ DỰ ÁN
- Tên: Chia Tiền Nhóm
- Loại: tool
- Một câu: nhập tổng hoá đơn và số người, chia đều rồi làm tròn, cho nhóm bạn đi ăn.
- Nền tảng build: Lovable
- Nơi host: nút Publish của Lovable
- Phiên bản: v1.0.0    Link công khai: https://chiatien.example.app
- 4 câu gác:
  1. Ai dùng, dùng lúc nào: nhóm bạn mình, lúc chia tiền cuối bữa ăn.
  2. Thành công đo bằng con số gì: chia xong dưới 30 giây, không phải bấm máy tính tay.
  3. Khi nào cho phép mình bỏ: sau 1 tháng không ai mở lại lần thứ hai thì bỏ.
  4. Nuôi tốn bao nhiêu mỗi tháng: 0 đồng, dùng bản free của nền build.

ĐANG Ở BƯỚC
- Bước hiện tại: 09 Sổ tay đã xong.
- Việc kế: chờ Nâng cấp khi có nhu cầu, chưa làm gì thêm.

CHUỖI BƯỚC CỦA DỰ ÁN
- [x] 01 Mở việc          DUYỆT: 02/09
- [x] 05 Kế hoạch         DUYỆT: 02/09
- [x] 06 Làm              DUYỆT: 03/09
- [x] 07 Kiểm             DUYỆT: 03/09
- [x] 08 Giao             DUYỆT: 03/09
- [x] 09 Sổ tay           DUYỆT: 04/09
- [ ] 10 Nâng cấp (lặp lại khi app đã sống)
- Sửa: lối phụ, đã dùng 1 lần, xem Gotcha

QUYẾT ĐỊNH ĐÃ CHỐT
| Ngày | Chọn gì | Thay vì gì | Vì sao |
| --- | --- | --- | --- |
| 02/09 | Chia đều cho mọi người | Chia theo món từng người gọi | Nhóm ăn chung, gọi chung, đơn giản hơn hẳn |
| 02/09 | Tự làm bằng Lovable | Dùng app chia tiền có sẵn | App sẵn bắt tạo tài khoản, nhóm mình ngại |

NHẬT KÝ
| Ngày | Làm gì | Việc kế |
| --- | --- | --- |
| 02/09 | Mở việc, chốt loại tool và chuỗi 6 bước | Lên kế hoạch |
| 02/09 | Kế hoạch 3 phase, phase 0 là trang trống đã lên link | Làm phase 1 |
| 03/09 | Làm xong nhập liệu và chia đều, tự kiểm đạt | Kiểm trên link thật |
| 03/09 | Kiểm 5 câu chấp nhận, sửa 1 lỗi chia cho 0 người | Giao |
| 03/09 | Giao lên link công khai, chốt v1.0.0 | Viết Sổ tay |
| 04/09 | Viết README, FEATURES, RUNBOOK | Xong, để đó |

LINK FILE
- Brief: trong hồ sơ
- Kế hoạch: trong hồ sơ
- Sổ tay (README, FEATURES, RUNBOOK): trong dự án Lovable, thư mục docs

GOTCHA ĐÃ TRẢ GIÁ
- Nhập 0 người thì phép chia ra lỗi và trang trắng xoá. Nguyên nhân gốc: chia cho 0. Sửa ở form nhập: chặn số người phải từ 1 trở lên.

CHECKLIST TRƯỚC GIAO
- [x] Thử nhập số người bằng 0 và bằng chữ, không được vỡ trang.

Ý TƯỞNG ĐỂ SAU
- Cho phép một người trả nhiều phần (trả hộ bạn), tính lại phần còn lại. Chưa làm.
```

## Lỗi người mới hay gặp

- Không lưu hồ sơ vào file. Triệu chứng: chat sau không có gì để dán, phải kể lại từ đầu. Cách né: chép khối `[Cập nhật hồ sơ]` vào file ngay trước khi đóng mỗi chat.
- Hồ sơ phình quá 2 trang. Triệu chứng: chat mới bị cắt bớt phần đầu, AI quên quyết định cũ. Cách né: nén ở bước Giao, các phần cũ rút còn 3-5 dòng.
- Để AI tự tick hoặc tự ghi DUYỆT. Triệu chứng: thấy dòng DUYỆT có ngày mà bạn chưa gõ. Cách né: chỉ bạn được gõ DUYỆT, xoá dòng AI tự thêm.
- Nạp hồ sơ cố định vào Project hoặc Gem rồi quên cập nhật. Triệu chứng: AI nhắc lại số liệu cũ. Cách né: luôn dán bản mới nhất trong chat, coi bản nạp chỉ là file tĩnh.
