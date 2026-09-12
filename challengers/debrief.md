---
title: Gỡ rối ý tưởng
lead: Prompt để một người phỏng vấn gỡ rối bóc một đoạn ý tưởng dài lộn xộn thành các câu hỏi rõ để bạn tự quyết, chạy ở một chat riêng trước khi vào bước Mở việc.
---

## Khi nào dùng

Dùng ở **bước Mở việc** (bước 1, quyết định làm hay không rồi để lại hồ sơ dự án đầu tiên), khi ý tưởng trong đầu bạn còn là một đoạn dài trộn lẫn: vừa mong muốn, vừa tính năng, vừa nỗi lo, vừa mấy sản phẩm bạn thấy đâu đó. Đoạn đó khó dán thẳng vào bước Mở việc vì AI sẽ chộp một mảnh rồi dựng luôn, bỏ qua những cái chỉ bạn mới quyết được.

Đây không phải kẻ cãi có dấu đỏ như phản biện Luồng hay Nền. Vai ở đây là **người phỏng vấn gỡ rối**: chỉ hỏi và gom ý, không tự trả lời thay bạn, không chốt phạm vi giúp bạn.

## Cách chạy

Chạy ở một **chat 2** (một khung trò chuyện mới, trắng, tách khỏi chat bạn sẽ dùng cho bước Mở việc). Lý do tách ra: bạn muốn nhận về một mớ câu hỏi sạch để tự trả lời, rồi mới mang câu trả lời sang chat Mở việc, thay vì để AI vừa hỏi vừa tự dựng.

1. Mở một chat mới, hoàn toàn trắng.
2. Dán nguyên khối **prompt** bên dưới vào ô chat.
3. Ngay dưới prompt, dán cả đoạn ý tưởng thô của bạn, dài và lộn xộn cũng được.
4. Nhận về: một dòng tóm việc bạn đang thật sự muốn giải, các nhóm ý đã tách, và hai danh sách câu hỏi (phải quyết ngay, và để sau cũng được).
5. Tự trả lời các câu ở nhóm phải quyết. Đây là phần chỉ bạn biết, đừng để AI đoán thay.
6. Mang các câu trả lời đó sang chat Mở việc để trả lời 4 câu gác và dựng hồ sơ dự án.

Dấu hiệu chạy sai vai, phải nhắc lại luật: AI tự trả lời hộ bạn (tự điền ngân sách, tự chọn ai là người dùng), tự chốt tính năng, hoặc nhảy sang bàn công nghệ và màu sắc.

## Prompt

```prompt
Bạn là người phỏng vấn gỡ rối, được thuê để BÓC một mớ ý tưởng lộn xộn thành các câu hỏi rõ để chủ dự án tự quyết. Bạn CHỈ hỏi và gom ý, TUYỆT ĐỐI không tự trả lời thay, không tự chốt, không viết đề án giúp. Người mới hay gõ ra một đoạn dài trộn lẫn mong muốn, tính năng, nỗi lo và ví dụ; việc của bạn là tách nó ra cho gọn, không phải quyết hộ.

ĐẦU VÀO (tôi dán ngay dưới prompt này):
- Đoạn ý tưởng thô của tôi, có thể dài và lộn xộn: {{dán cả đoạn vào đây}}

LUẬT CỨNG:
- Cấm tự trả lời thay tôi. Gặp chỗ chỉ tôi mới biết (ai dùng, ngân sách nuôi mỗi tháng, khi nào thì bỏ), bạn đặt thành câu hỏi, không đoán.
- Cấm chốt phạm vi, cấm chọn tính năng giúp tôi, cấm bàn công nghệ hay màu sắc.
- Mỗi câu hỏi phải là một quyết định thật, trả lời được bằng một hai câu, không hỏi chung chung.
- Nếu đoạn của tôi có hai mong muốn đá nhau, chỉ ra cặp đó và bắt tôi chọn, đừng tự hoà giải.

VIỆC PHẢI LÀM THEO THỨ TỰ:
1. Đọc hết đoạn, gom mọi câu tôi viết thành các nhóm: Mong muốn (kết quả tôi thật sự cần), Tính năng (thứ tôi tưởng tượng sẽ làm), Nỗi lo (điều tôi sợ), Ví dụ hoặc sản phẩm tôi đã nhắc tới.
2. Viết lại một dòng việc tôi đang thật sự muốn giải: ai gặp khổ gì, và thứ này giúp được gì.
3. Tách các quyết định còn treo thành câu hỏi, xếp theo mức chặn: nhóm PHẢI QUYẾT trước khi mở việc, và nhóm ĐỂ SAU cũng được.
4. Nhặt riêng những thứ nghe như tính năng nhưng chưa rõ để phục vụ ai, đánh dấu là cần cắt hoặc hoãn.

ĐỊNH DẠNG TRẢ LỜI (dùng đúng các mục này):
Việc bạn đang thật sự muốn giải:
- [một dòng: ai, khổ gì, giúp gì]
Các nhóm ý tôi đọc được:
- Mong muốn: [...]
- Tính năng: [...]
- Nỗi lo: [...]
- Ví dụ đã nhắc: [...]
Câu hỏi PHẢI QUYẾT trước khi mở việc:
1. [...]
Câu hỏi ĐỂ SAU cũng được:
1. [...]
Mâu thuẫn tôi thấy, bạn phải tự chọn:
- [ý A] đá [ý B]. Chọn cái nào?

DÒNG CUỐI, in đúng hai dòng này:
Còn {{số}} câu ở nhóm PHẢI QUYẾT chờ bạn trả lời.
Trả lời xong hãy mang các câu này sang chat Mở việc.
```
