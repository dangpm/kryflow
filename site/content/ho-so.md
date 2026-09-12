---
title: Hồ sơ dự án
lead: Một file text bạn dán vào đầu mọi chat mới, là bộ nhớ duy nhất của dự án khi cửa sổ chat không nhớ gì.
---

## Vì sao cần

Mỗi lần bạn mở một chat mới, AI quên sạch dự án của bạn. Nó không biết bạn đang làm gì, đã chốt điều gì, đang ở bước nào. Nếu bạn không nhắc lại, AI sẽ tự bịa lại các quyết định cũ theo cách của nó, và bạn build tiếp trên một nền sai. Hồ sơ dự án là thứ duy nhất đi xuyên qua mọi chat: một file text ngắn ghi lại tên dự án, bước đang làm, những gì đã chốt và những lỗi đã trả giá. Bạn dán nó vào đầu mỗi chat để AI nhớ lại đúng dự án thay vì đoán. Không có hồ sơ này thì mỗi chat là một lần bắt đầu lại từ số không.

## Cách dùng

1. **Lưu ở đâu**: giữ một file text tên `kryflow-project.md` trên máy, hoặc một **Google Doc** (tài liệu trực tuyến của Google) nếu bạn muốn mở trên nhiều thiết bị. Đây là bản gốc, chỉ có một bản duy nhất.
2. **Dán khi nào**: đầu mỗi chat mới, dán ba thứ theo thứ tự: prompt của bước, toàn bộ hồ sơ dự án, rồi input riêng của bước đó. Luôn dán hồ sơ dạng chép tay vào chat, đừng upload cố định một lần vào **Project** hay **Gem** (không gian riêng của ChatGPT hoặc Gemini), vì bản upload cũ sẽ được AI tin hơn bản mới bạn vừa sửa.
3. **Chép cập nhật khi nào**: cuối mỗi trả lời, AI in ra khối `[Cập nhật hồ sơ]` chỉ chứa phần thay đổi. Bạn chép khối đó vào file gốc. Dòng DUYỆT chỉ bạn được gõ, AI không tự ghi thay bạn.
4. **Giữ dưới 2 trang**: hồ sơ càng dài, chat mới càng dễ bị cắt mất phần đầu. Chỉ giữ những gì cần cho các bước sau, đừng chép lại cả đoạn AI giải thích.
5. **Dọn nhật ký cũ**: khi phần Nhật ký phình ra, gộp các dòng cũ thành một dòng tóm tắt. Bước **Giao** (bước đưa sản phẩm lên chạy thật) bắt buộc nén hồ sơ một lần trước khi qua cửa.

## Mẫu hồ sơ

Chép khối dưới vào file `kryflow-project.md`, điền các chỗ `{{...}}`. Bảy mục này là khung cố định, đừng đổi tên hay bỏ mục.

```prompt
Thẻ dự án
- Tên: {{tên dự án}}
- Loại: {{tool | web | app | lab}}
- Phiên bản: {{vd v0.1}} · Link bản chạy: {{dán link sau khi Giao, chưa có thì để trống}}
- Nền tảng build: {{vd Lovable | Bolt | v0 | Replit | Google AI Studio Build}}
- Host: {{nút Publish của nền build | Vercel | Netlify | GitHub Pages}}
- Ngày cập nhật: {{yyyy-mm-dd}}

Đang ở bước
- Bước hiện tại: {{vd 05 Kế hoạch}}
- Bước kế: {{vd 06 Làm}}

Chuỗi bước
- {{dán đúng chuỗi bước của loại dự án, đánh dấu bước đã qua}}
- Ví dụ loại tool: 01 Mở việc ✓ · 05 Kế hoạch · 06 Làm · 07 Kiểm · 08 Giao · 09 Sổ tay

Quyết định đã chốt
- {{quyết định 1: chốt gì, vì sao, ngày}}
- {{append thêm dòng mới, không xoá dòng cũ}}

Nhật ký
- {{yyyy-mm-dd}}: {{việc đã làm ở chat này, kết quả}}
- {{yyyy-mm-dd}}: {{lần bỏ cửa nếu có, ghi nguyên câu bạn đã chấp nhận}}

Link file
- {{tên file hoặc màn}}: {{link Google Doc, ảnh, hoặc trang trong nền build}}

Gotcha đã trả giá
- {{lỗi đã gặp}}: {{nguyên nhân gốc}} → {{cách tránh lần sau}}
```

## Ví dụ đã điền

Một dự án tool nhỏ: công cụ chia tiền cho nhóm bạn đi ăn chung.

```text
Thẻ dự án
- Tên: Chia Tiền Nhóm
- Loại: tool
- Phiên bản: v0.2 · Link bản chạy: https://chiatien.example.app
- Nền tảng build: Lovable
- Host: nút Publish của Lovable
- Ngày cập nhật: 2026-09-12

Đang ở bước
- Bước hiện tại: 07 Kiểm
- Bước kế: 08 Giao

Chuỗi bước
- 01 Mở việc ✓ · 05 Kế hoạch ✓ · 06 Làm ✓ · 07 Kiểm · 08 Giao · 09 Sổ tay

Quyết định đã chốt
- 2026-09-10: Không cần đăng nhập, ai có link là dùng được, cho nhẹ.
- 2026-09-10: Nhập tên người và số tiền từng người trả, tool tính ai nợ ai.
- 2026-09-11: Chia đều theo đầu người ở bản đầu, chia theo món để sau.

Nhật ký
- 2026-09-10: Mở việc, trả lời 4 câu gác, chọn loại tool, bỏ Luồng Nền Gu.
- 2026-09-11: Làm xong màn nhập liệu và bảng kết quả, số khớp tay tính.
- 2026-09-12: Kiểm phát hiện lỗi làm tròn khi lẻ 1 đồng, đã ghi Gotcha.

Link file
- Bản chạy thử: https://chiatien.example.app
- Ảnh màn kết quả: https://drive.example.com/anh-ket-qua

Gotcha đã trả giá
- Lệch 1 đồng khi chia lẻ: làm tròn từng người rồi cộng lại nên dư/thiếu → dồn phần lẻ vào người trả nhiều nhất, ghi rõ trên màn.
```

## Khi hồ sơ dài quá

Khi file vượt 2 trang, chat mới bắt đầu bị cắt mất phần đầu và AI đọc thiếu. Gộp các dòng Nhật ký cũ thành một dòng tóm tắt, giữ lại Quyết định và Gotcha vì hai mục này còn dùng cho các bước sau. Nếu vẫn dài, tách phần chi tiết ít dùng ra một file phụ và chỉ để link trong mục Link file.
