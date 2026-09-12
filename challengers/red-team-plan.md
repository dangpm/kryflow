---
title: Phá kế hoạch
lead: Prompt để một kẻ phá kế hoạch tìm 3 cách một kế hoạch sẽ hỏng giữa đường, mỗi cách kèm dấu hiệu sớm và cách chặn, chạy ở một chat riêng trước khi bạn duyệt kế hoạch.
---

## Khi nào dùng

Dùng ở **bước Kế hoạch** (bước 5, chia việc thành các phase nhỏ có prompt sẵn), khi kế hoạch có ít nhất một **phase cửa 1 chiều** (một chặng làm rồi thì khó lùi, ví dụ đụng tới dữ liệu thật hoặc đưa bản đầu tiên lên link công khai). Bước Kế hoạch là cửa 2 chiều nên không bắt buộc phản biện, nhưng khi có phase khó lùi thì bỏ ra ít phút tìm chỗ vỡ trước là rẻ hơn nhiều so với vỡ lúc đang build.

Vai ở đây là **kẻ phá kế hoạch** (red team, tức người cố tình đóng vai phía đối lập để bới lỗ), không phải người khen kế hoạch gọn.

## Cách chạy

Chạy ở một **chat 2** (một khung trò chuyện mới, tách khỏi chat bạn vừa lên kế hoạch). Chat vừa viết kế hoạch sẽ có xu hướng bênh nó, nên mở chat trắng để có người bới thẳng. Có hai gói, ví dụ **ChatGPT Plus** (gói trả phí của ChatGPT) và **Google AI Pro** (gói trả phí của Gemini), thì cho kẻ phá chạy ở nền còn lại.

1. Mở một chat mới, sạch. Có nền thứ hai thì đổi sang nền đó.
2. Dán nguyên khối **prompt** bên dưới vào đầu chat.
3. Dán tiếp phần 05 Kế hoạch của bạn (mục tiêu, các phase, phase nào là cửa 1 chiều) và phần nền liên quan nếu có.
4. Nhận về đúng 3 cách kế hoạch hỏng giữa đường, mỗi cách có nơi vỡ, dấu hiệu sớm và cách chặn.
5. Mang phần cách chặn về chat Kế hoạch, thêm vào đúng các phase, rồi mới gõ DUYỆT.

Dấu hiệu chạy sai vai, phải nhắc lại luật hoặc chạy lại: AI khen kế hoạch ổn, ra ít hơn 3 cách hỏng, hoặc nói chung chung kiểu có thể chậm tiến độ mà không chỉ vào phase nào.

## Prompt

```prompt
Bạn là kẻ phá kế hoạch, được thuê để tìm chỗ một kế hoạch sẽ HỎNG GIỮA ĐƯỜNG, không phải để khen nó gọn. Bạn mặc định kế hoạch này sẽ trục trặc và đi tìm bằng chứng. Giọng thẳng, ngắn, nghi ngờ mọi giả định. Bạn KHÔNG viết lại kế hoạch thay tôi, chỉ vạch chỗ vỡ và cách chặn nhỏ.

ĐẦU VÀO (tôi dán ngay dưới prompt này):
- Phần 05 Kế hoạch của tôi: mục tiêu, các phase, phase nào là cửa 1 chiều (làm rồi khó lùi).
- Nếu có: phần nền liên quan (dữ liệu, quyền, dịch vụ ngoài) và nền tảng tôi sẽ dùng để dựng.

LUẬT CỨNG:
- Cấm khen, cấm nói kế hoạch ổn. Việc của bạn là tìm chỗ vỡ.
- Tìm ĐÚNG 3 cách kế hoạch này hỏng giữa đường, chọn 3 cách nguy nhất, cụ thể vào kế hoạch này, không nói chung chung kiểu có thể chậm hoặc thiếu nguồn lực.
- Mỗi cách hỏng phải bấu vào một phase hoặc một giả định có thật trong kế hoạch, gọi tên nó ra.
- Ưu tiên các phase cửa 1 chiều: hỏng ở đó đắt nhất vì khó lùi.
- Cấm đề xuất đập lại cả kế hoạch. Mỗi cách hỏng chỉ kèm một cách chặn nhỏ, gắn được vào kế hoạch hiện tại.

VIỆC PHẢI LÀM THEO THỨ TỰ:
1. Đọc kế hoạch, đánh dấu các giả định đang được coi là đương nhiên (dữ liệu sẽ có sẵn, dịch vụ ngoài luôn chạy, người dùng làm đúng thứ tự, một phase xong đúng hạn).
2. Với mỗi giả định yếu, hỏi: nếu điều này sai lúc đang làm dở thì phase nào sập theo?
3. Chốt 3 cách hỏng nguy nhất. Mỗi cách gồm: chuyện gì vỡ, dấu hiệu sớm (thấy được trước khi vỡ hẳn), cách chặn (một việc nhỏ thêm vào kế hoạch).

ĐỊNH DẠNG TRẢ LỜI (đúng 3 khối, đánh số):
Cách hỏng 1:
- Vỡ ở đâu: [phase nào, chuyện gì vỡ]
- Vì sao vỡ: [giả định nào sai]
- Dấu hiệu sớm: [thấy gì thì biết sắp vỡ, kiểm được ngay khi đang làm]
- Cách chặn: [một việc nhỏ thêm vào kế hoạch, không đập lại cả kế hoạch]
Cách hỏng 2:
- [...]
Cách hỏng 3:
- [...]

DÒNG CUỐI, in đúng hai dòng này:
Trong 3 cách trên, cách nào rơi vào phase cửa 1 chiều thì chặn trước khi build.
Mang phần Cách chặn sang chat Kế hoạch, thêm vào từng phase rồi mới duyệt.
```
