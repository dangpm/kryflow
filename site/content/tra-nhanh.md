---
title: Tra nhanh
lead: Một trang tra gọn: mười bước với cửa gác, ký hiệu AI phải in, câu để nói khi AI làm sai, và từ điển thuật ngữ.
---

## Các bước

Mỗi bước làm đúng một việc rồi dừng ở **gate** (cửa: chỗ AI phải dừng chờ bạn gõ DUYỆT). Cột Cửa: 1 chiều là sai thì sửa rất đắt nên đi chậm, 2 chiều là sai thì làm lại rẻ nên lặp nhanh.

| Bước | Tên | Việc | Cửa | Prompt | Xong khi |
|---|---|---|---|---|---|
| 01 | Mở việc | Quyết định làm hay không, để lại hồ sơ dự án đầu tiên có loại và chuỗi bước | 1 chiều | [brief](/buoc/brief/) | Bạn tự trả lời đủ 4 câu gác, đang dở không quá 2 dự án |
| 02 | Luồng | Chốt hành vi: ai muốn gì lúc nào, màn nào, nút nào làm gì | 1 chiều | [flow](/buoc/flow/) | Bảng đếm có số, mỗi màn đủ 4 trạng thái, mỗi quy tắc 1 kịch bản thuận 1 nghịch, phản biện hết lỗ hổng đỏ |
| 03 | Nền | Chốt dữ liệu, quyền, dịch vụ ngoài, nơi host | 1 chiều | [base](/buoc/base/) | Mỗi bảng sinh từ 1 quy tắc, mỗi vai có dòng đọc ghi, mỗi dịch vụ ngoài có dòng lỗi thì sao, đã chọn host và cách quay lại, bạn gật từng bảng |
| 04 | Gu | Định nghĩa gu thiết kế riêng, chọn 1 trục để xuất sắc | 1 chiều | [style](/buoc/style/) | Mood 3-5 từ, 3-5 nguyên tắc, đúng 1 trục đột phá, token 6 mục, 2 tham chiếu, phản biện hết mục trôi về tầm thường |
| 05 | Kế hoạch | Nhìn hiện trạng thật rồi chia việc thành phase nhỏ có prompt sẵn | 2 chiều | [plan](/buoc/plan/) | Qua đủ 6 ô, có phase 0 là link trống, mỗi phase có prompt dán được, 1 câu kiểm, cách quay lại |
| 06 | Làm | Làm đúng từng phase trong kế hoạch đã duyệt, kiểm từng phase | 2 chiều | [build](/buoc/build/) | Mọi phase bạn tick ĐẠT kèm kết quả tự kiểm, không phase nào sửa quá 3 lần, không có tính năng ngoài kế hoạch |
| 07 | Kiểm | Kiểm trên link thật theo AC và chuẩn xong của loại | 2 chiều | [test](/buoc/test/) | Mọi AC có ĐẠT hoặc LỖI do bạn tự bấm, giao diện có ảnh, chuẩn xong theo loại đã đủ |
| 08 | Giao | Đưa bản đã kiểm lên link công khai an toàn, chốt sổ | 2 chiều | [ship](/buoc/ship/) | Đủ 3 cổng trước làm sau, hồ sơ có phiên bản mới và 1 dòng changelog, hồ sơ đã nén, đã ghi cửa kế |
| 09 | Sổ tay | Viết bản đồ thứ đã build để sau này sửa được mà không kể lại từ đầu | 2 chiều | [docs](/buoc/docs/) | Đủ 3 tài liệu, mỗi tính năng đã bấm thử trên link thật, không tài liệu nào ghi giá trị khoá bí mật |
| 10 | Nâng cấp | Cửa duy nhất sửa app đã chạy: đọc tài liệu, phân cửa, giao đúng bước | Sống | [update](/buoc/update/) | Đã in vùng đụng và loại cửa, đi đúng nhánh, tài liệu delta đã ghi trước khi giao lại |
| S | Sửa | Lối phụ khi có lỗi: tìm nguyên nhân gốc nói được bằng 1 câu rồi mới vá | Phụ | [fix](/buoc/fix/) | Có câu lỗi vì X ở Y lọt vì Z, kịch bản tái hiện đã ĐẠT, bài học đã ghi vào Gotcha |

## Chuỗi theo loại dự án

Chọn loại lúc bước Mở việc, chuỗi bước sẽ khác nhau. Ký hiệu bước dùng dấu mũi tên cho gọn.

| Loại | Khi nào | Chuỗi |
|---|---|---|
| Công cụ | Thứ nhỏ dùng một mình hoặc nhóm nhỏ, không đăng nhập, ít hoặc không lưu dữ liệu người khác | Mở việc → Kế hoạch → Làm → Kiểm → Giao → Sổ tay. Bỏ Luồng, Nền, Gu |
| Trang web | Trang giới thiệu, landing, portfolio, sự kiện, có thể có 1 form liên hệ hoặc đặt chỗ | Mở việc → Luồng → Gu → Kế hoạch → Làm → Kiểm → Giao → Sổ tay. Có form hoặc đặt chỗ hoặc thanh toán thì bật Luồng, không thì bỏ |
| Ứng dụng | Có đăng nhập, dữ liệu của nhiều người, trạng thái đổi theo thời gian | Mở việc → Luồng → Nền → Gu → Kế hoạch → Làm → Kiểm → Giao → Sổ tay. Đi đủ 3 cửa 1 chiều |
| Thử nghiệm | Chỉ muốn xem một ý có chạy không trong khung giờ định trước | Mở việc → Làm. Không giao, không tài liệu, làm nhanh rồi ghi kết luận Làm thật hay Bỏ |

## Ký hiệu AI phải in

AI in các ký hiệu này trong khối trạng thái và trong kết quả phản biện, để bạn biết đang ở đâu và cái gì đang chặn cửa.

| Ký hiệu | Nghĩa |
|---|---|
| ▶ | Cửa đang ở: bước và cửa AI đang đứng, in ở đầu mỗi trả lời |
| ✅ | Cửa đã qua: bước bạn đã gõ DUYỆT, không mở lại |
| 🔴 | Lỗ hổng đỏ của kẻ phản biện: phải sửa trước khi qua cửa |
| 🟠 | Rủi ro vừa: nên xử, nếu để sau thì ghi vào Ý tưởng để sau |
| 💡 | Gợi ý cải thiện, không chặn cửa |
| ❓ | Câu hỏi phản biện cần bạn quyết, AI không tự trả lời thay |
| ⛔ | Dừng chờ bạn: yêu cầu trái bước, AI dừng và hỏi thay vì làm luôn |

## Câu nói với AI khi nó làm sai

Chép câu tương ứng dán vào chat để kéo AI về đúng cửa.

| Tình huống | Câu dán vào |
|---|---|
| AI làm luôn, bỏ bước | Dừng lại. Ta đang ở bước {{tên bước}}. Chỉ làm việc của bước này rồi in cửa, đừng nhảy sang bước sau. |
| AI trả lời thay 4 câu gate | Bốn câu gác là của tôi. In lại 4 câu rồi dừng, chừa trống chỗ tôi tự trả lời, đừng điền hộ. |
| AI bịa quyết định cũ | Chỉ dùng hồ sơ tôi vừa dán. Chỗ nào hồ sơ không ghi thì hỏi tôi, đừng bịa lại quyết định cũ. |
| AI báo xong mà chưa thử | Chưa qua bước Kiểm thì chưa gọi là xong. Đưa bảng AC để tôi tự bấm trên link thật trước đã. |
| AI đổi phạm vi | Cái này ngoài kế hoạch. Dừng lại, ghi dòng Lệch và hỏi tôi, đừng tự thêm tính năng. |

## Từ điển

Mỗi thuật ngữ một câu giải thích đời thường.

| Thuật ngữ | Nghĩa |
|---|---|
| **gate** (cửa) | Chỗ kết thúc một bước, AI phải dừng chờ bạn gõ DUYỆT mới được đi tiếp. |
| cửa 1 chiều | Quyết định sai là sửa rất đắt nên đi chậm và bắt buộc có kẻ phản biện: Luồng, Nền, Gu. |
| cửa 2 chiều | Sai thì làm lại rẻ nên cứ lặp nhanh: Kế hoạch, Làm, Kiểm. |
| **Brief** (bản mở việc) | Tờ tóm tắt làm gì cho ai, đo bằng gì, khi nào bỏ, tốn bao nhiêu mỗi tháng. |
| **AC Given-When-Then** (tiêu chí nghiệm thu, dạng Cho trước / Khi / Thì) | Câu mô tả một trường hợp cụ thể để sau này bấm thử xem đúng chưa. |
| **schema** (lược đồ dữ liệu) | Danh sách bảng dữ liệu và các cột, quyết định app nhớ những gì. |
| **token thiết kế** (biến thiết kế) | Bộ giá trị dùng chung cho màu, font, cỡ chữ, khoảng cách, để mọi màn nhìn cùng một gu. |
| **phase** (chặng) | Một khúc việc nhỏ trong kế hoạch, làm xong là kiểm được ngay. |
| **DoD** (Definition of Done, chuẩn xong) | Danh sách điều kiện phải đủ thì mới được gọi là xong, khác nhau theo loại dự án. |
| **rollback** (quay về bản trước) | Cách đưa app về phiên bản chạy được gần nhất khi bản mới hỏng. |
| hồ sơ dự án | Một file text bạn tự giữ rồi dán vào đầu mọi chat mới, là bộ nhớ duy nhất của dự án. |
| phản biện | Mở một chat thứ 2, tốt nhất khác nền tảng, để một AI khác bới lỗ hổng bản nháp của bạn. |
| **changelog** (nhật ký thay đổi) | Danh sách các lần giao, mỗi dòng ghi ngày, phiên bản, làm gì, vì sao. |
| **semver** (đánh số phiên bản kiểu x.y.z) | Cách tăng số phiên bản: tính năng mới thêm 0.1.0, sửa lỗi thêm 0.0.1. |
