---
title: Bắt đầu trong 10 phút
lead: Cài một lần, tạo tờ hồ sơ dự án, chạy bước đầu tiên, rồi lặp cùng một nhịp mỗi ngày.
---

## Bạn cần gì

Ba thứ, không cần cài phần mềm lạ:

- Một gói trả phí: **ChatGPT Plus** (bản trả phí của ChatGPT) HOẶC **Google AI Pro** (bản trả phí của Gemini). Chỉ cần một trong hai.
- Một chỗ lưu duy nhất cho tờ hồ sơ dự án: một thư mục trên máy, hoặc một **Google Docs** (tài liệu online của Google). Đây là bộ nhớ của dự án, bạn giữ nó suốt.
- Khoảng 30 phút cho lần đầu. Từ lần sau chỉ còn vài phút mở đầu mỗi chat.

## Cài 1 lần

Bạn dán một **system prompt** (bản luật chung, dán một lần để AI luôn nhớ cách làm việc) và đính kèm vài file mẫu tĩnh. Chọn đúng nhánh theo gói bạn có.

### Nếu bạn dùng ChatGPT

1. Mở ChatGPT, tạo một **Project** (khu làm việc riêng cho một dự án) tên là KryFlow.
2. Vào phần **Instructions** (ô hướng dẫn của Project), dán toàn bộ system prompt vào đó.
3. Đính kèm các file tĩnh: mẫu hồ sơ, bộ prompt các bước, bộ phản biện. Đây là thứ ít đổi nên đính một lần.
4. Mỗi bước sau này bạn mở một chat mới bên trong Project này.

### Nếu bạn dùng Gemini

1. Mở Gemini, tạo một **Gem** (trợ lý riêng bạn tự đặt luật) tên là KryFlow.
2. Dán toàn bộ system prompt vào phần hướng dẫn của Gem.
3. Tải các file tĩnh vào phần **Knowledge** (kho tài liệu của Gem) nếu có ô này.
4. Giữ tờ hồ sơ trong một Google Docs, mỗi chat bạn copy nội dung dán vào.

> Không thấy nút tạo Project hay Gem? Không sao. Bạn chỉ cần dán 8 dòng luật đầu ở đầu mỗi chat mới là chạy được như nhau. Project và Gem chỉ để đỡ phải dán lại phần luật chung.

## Tạo hồ sơ dự án

**Hồ sơ dự án** là một file text bạn giữ, là bộ nhớ duy nhất của dự án và bạn dán nó vào đầu mọi chat mới.

1. Mở mẫu hồ sơ, lưu thành file của riêng bạn, ví dụ `{{tên dự án}}.md`.
2. Điền khối đầu: tên, loại dự án, bước đang ở, nền tảng build, ngày. Chỗ nào chưa biết cứ để trống, bước 1 sẽ điền giúp.
3. Giữ file này dưới 2 trang. Đừng chép cả đoạn chat vào, chỉ giữ phần kết luận.

Xem cấu trúc đầy đủ và cách nén ở trang [Hồ sơ dự án](/ho-so/).

## Chạy bước 1

Bước đầu tiên là **Mở việc**: quyết làm hay không, rồi để lại tờ hồ sơ v0.

1. Mở trang [bước Mở việc](/buoc/brief/), bấm nút Chép để lấy prompt của bước.
2. Mở một chat mới, dán theo thứ tự: prompt bước, rồi toàn bộ hồ sơ, rồi ý tưởng của bạn.
3. AI sẽ in ra 4 câu gác rồi dừng lại chờ bạn: ai dùng, đo bằng số gì, khi nào thì bỏ, tốn bao nhiêu mỗi tháng.
4. Tự tay trả lời cả 4 câu, nhất là câu chi phí mỗi tháng. AI bị cấm trả lời thay bạn ở đây, vì đây là việc chỉ bạn biết.

Trả lời xong, AI in phần Brief và khối hồ sơ v0. Bạn dán khối đó về file, tự gõ dòng DUYỆT, rồi qua bước kế.

## Nhịp làm việc mỗi ngày

Mỗi bước là một chat mới, luôn cùng một nhịp:

1. Mở một chat mới cho đúng bước bạn định làm.
2. Dán tờ hồ sơ dự án vào đầu chat, kèm prompt của bước đó.
3. Nói rõ bạn đang ở bước nào để AI đối chiếu với hồ sơ trước khi làm.
4. Làm việc trong bước, tới khi AI in dòng cửa và dừng lại.
5. Chép khối `[Cập nhật hồ sơ]` ở cuối trả lời về file hồ sơ, rồi tự gõ DUYỆT nếu bạn đồng ý qua cửa.
6. Đóng chat. Lần sau mở chat mới cho bước tiếp theo, lặp lại từ đầu.

Câu mở một chat mới, sửa hai chỗ điền rồi dán:

```prompt
Đây là hồ sơ dự án của tôi, đọc kỹ trước khi làm:

{{dán toàn bộ nội dung file hồ sơ vào đây}}

Tôi đang ở bước {{tên bước, ví dụ Kế hoạch}}.
Hãy đối chiếu bước này với bước ghi trong hồ sơ.
Nếu khớp thì bắt đầu, nếu lệch thì in ⛔ và hỏi tôi trước.
```

## 5 điều đừng làm

- Đừng để câu chi phí mỗi tháng trống, và đừng để AI điền hộ 4 câu gác.
- Đừng bàn màu sắc hay công nghệ ngay ở bước 1, để dành cho các bước sau.
- Đừng đính cố định tờ hồ sơ vào Project hay Gem. Hồ sơ luôn đổi, phải dán bản mới vào chat, nếu không AI sẽ tin bản cũ đã tải lên.
- Đừng mở quá 2 dự án đang dở cùng lúc. Đóng bớt trước khi mở cái mới.
- Đừng bỏ một cửa vì nóng ruột. Muốn bỏ thì gõ nguyên câu "tôi chấp nhận bỏ gate {{tên cửa}}" để nó là quyết định có ý thức, ghi vào nhật ký.

Cần tra nhanh prompt hay chữ khoá của từng bước, mở trang [Tra nhanh](/tra-nhanh/).
