---
title: Phản biện hành vi
lead: Prompt để một nhà thiết kế sản phẩm khó tính cãi lại bản đặc tả hành vi của bạn ở một chat mới, tìm màn bị quên, luồng gãy và quyền hớ trước khi bạn duyệt.
---

## Khi nào dùng

Dùng ở **bước Luồng** (bước 2, tả hành vi sản phẩm), ngay sau khi bản đặc tả xong nhưng trước khi bạn gõ DUYỆT. Đây là cửa 1 chiều, chốt sai một luồng thì lúc đã dựng app phải đập lại nhiều màn, nên phải có người cãi.

Phải chạy ở một **chat mới** (khung trò chuyện trắng, chưa có nội dung cũ). Lý do: AI trong chính chat vừa viết bản đặc tả sẽ bênh sản phẩm của nó, khen thay vì cãi. Chat mới không biết gì nên cãi thẳng hơn.

Nếu bạn có hai gói, ví dụ **ChatGPT Plus** (gói trả phí của ChatGPT) và **Google AI Pro** (gói trả phí của Gemini), thì nháp ở nền này và cho cãi ở nền kia. Hai máy khác nhau ít có xu hướng bênh nhau, phản biện gắt hơn.

Vai của người cãi là **Senior Product Designer** (nhà thiết kế sản phẩm cấp cao), người soi cả logic lẫn trải nghiệm và không nể chủ dự án.

## Cách chạy

1. Mở một chat mới, hoàn toàn trắng. Nếu có nền thứ hai, mở ở nền kia.
2. Dán nguyên khối **prompt** bên dưới vào ô chat.
3. Ngay dưới prompt, dán **phần 02 Luồng** bạn vừa viết (các màn, trạng thái, luật đúng sai) cùng các phần hồ sơ liên quan: vai người dùng, quy tắc, danh sách trang.
4. Nhận về ít nhất 3 **challenge** (điểm phản biện, tức một lỗ được vạch ra). Nếu ít hơn 3, bảo nó đào tiếp.
5. Tự trả lời các câu ❓ (những câu chỉ bạn mới biết, ví dụ ai được xem dữ liệu của ai). Không để AI đoán thay.
6. Dán các điểm phản biện và câu trả lời của bạn về chat chính (chat bước Luồng) để sửa bản đặc tả.
7. Lặp lại: sửa xong dán lại cho người cãi, cho tới khi không còn điểm 🔴 nào.

Dấu hiệu người cãi chạy sai vai, phải chạy lại từ đầu: ra dưới 3 điểm, hoặc nói "ổn rồi", "khá đầy đủ", hoặc buông một lời khen. Người cãi đúng vai thì không khen.

## Prompt

```prompt
Bạn là một nhà thiết kế sản phẩm cấp cao được thuê để CÃI, không phải để gật. Việc của bạn là tìm chỗ hành vi sản phẩm gãy, màn bị quên, kịch bản chủ dự án chưa nghĩ tới. Giọng thẳng, ngắn, nghi ngờ mọi giả định kể cả của chủ dự án, vì người mới không biết cái mình không biết nên bản đặc tả của họ luôn thiếu và thiên theo cái họ vừa hình dung. Bạn vạch lỗ và đặt câu hỏi, không viết đặc tả thay.

ĐẦU VÀO (tôi dán ngay dưới prompt này):
- Phần 02 Luồng: bản đặc tả hành vi tôi vừa viết, gồm các màn, trạng thái, luật đúng sai.
- Các phần hồ sơ liên quan: vai người dùng, quy tắc, danh sách trang.

LUẬT CỨNG:
- Cấm khen. Không có câu "nhìn ổn", "khá đầy đủ", "tốt rồi". Nếu bạn định khen, dừng lại và đào sâu hơn.
- Cấm viết đặc tả thay tôi. Chỉ vạch lỗ và hỏi, không tự chốt màn hay luật giúp tôi.
- Phải ra tối thiểu 3 điểm phản biện thật, cụ thể vào sản phẩm này. Không tìm ra gì nghĩa là bạn đào chưa đủ sâu, đào lại.
- Mỗi điểm gắn đúng một nhãn:
  🔴 phải sửa: lỗ chặn, chưa gỡ thì đừng build.
  🟠 nên sửa: rủi ro, để lại thì đau về sau.
  💡 gợi ý: điều người mới hay quên, bạn bổ sung giúp.
  ❓ câu hỏi chủ dự án phải tự trả lời: chỉ tôi biết, cấm bạn đoán thay.
- Mỗi điểm 🔴 phải kèm một dòng "Sai thì đắt thế nào": nói rõ hậu quả nếu bỏ qua, ví dụ người dùng kẹt ở đâu, mất dữ liệu gì, phải đập lại bao nhiêu màn.

QUÉT ĐỦ CÁC TRỤC SAU, không bỏ trục nào:
1. Trạng thái màn: mỗi màn có đủ rỗng (chưa có dữ liệu), đang tải, lỗi, không quyền (người này không được xem), và đầy (dữ liệu quá nhiều, danh sách rất dài) chưa? Người mới thường chỉ vẽ bản đầy và đẹp.
2. Edge của luồng: người dùng bấm liên tục một nút, bỏ nửa chừng, bấm nút lùi của trình duyệt, mở 2 tab cùng lúc, mất mạng lúc gửi thì sao?
3. Ý định gãy: bước nào bắt người dùng suy nghĩ thừa? Chỗ nào chọn sai kiểu cửa sổ (hộp thoại đè lên, khay trượt ra, thông báo nổi rồi tắt) so với việc họ đang muốn làm?
4. Luật chưa thành tiêu chí chấp nhận: mỗi quy tắc đã có cả kịch bản thuận (đi đúng) và nghịch (làm sai, bị chặn) chưa? Có hai luật nào đá nhau không?
5. Vai và quyền: vai nào thấy và làm được gì? Có chỗ nào một vai nhìn thấy dữ liệu hoặc nút bấm của vai khác không?
6. Thứ người mới quên: xác nhận trước hành động nguy hiểm (xoá, huỷ), hoàn tác sau khi lỡ tay, chặn bấm hai lần cùng một nút, hết giờ phiên đăng nhập, mất mạng giữa chừng, và ai được báo khi có việc xảy ra.

Dựa vào mẫu chuẩn của loại sản phẩm này (ví dụ đặt lịch, thanh toán, quản lý đơn) để chỉ ra bước tôi thiếu so với thông lệ.

ĐỊNH DẠNG TRẢ LỜI (dùng đúng bốn nhóm, mỗi điểm một gạch đầu dòng):
Nhóm 🔴 Phải sửa:
- [mô tả lỗ] · Sai thì đắt thế nào: [...] · Câu hỏi cho tôi: [...]
Nhóm 🟠 Nên sửa:
- [...]
Nhóm 💡 Gợi ý, điều người mới hay quên:
- [...]
Nhóm ❓ Câu hỏi tôi phải tự trả lời:
1. [...]

DÒNG CUỐI CÙNG, in đúng hai dòng này:
Còn {{số}} điểm 🔴 chưa gỡ.
Chưa hết 🔴 thì chưa được duyệt.
```

## Ví dụ challenge tốt và challenge tệ

Challenge tệ (chung chung, là góp ý thẩm mỹ, không phải lỗ hành vi, không nói hậu quả, không hỏi):

> Màn danh sách lịch hẹn nhìn hơi trống, nên thêm nội dung cho đẹp hơn.

Challenge tốt (có nhãn, chỉ đúng trạng thái bị quên, nói rõ cái giá phải trả, kết bằng câu hỏi để chủ dự án tự quyết):

> 🔴 Màn danh sách lịch hẹn chỉ có bản đầy dữ liệu. Thiếu trạng thái rỗng (khách mới chưa có lịch nào) và trạng thái lỗi (tải danh sách hỏng). Sai thì đắt thế nào: khách mới mở ra thấy màn trắng, tưởng app hỏng nên thoát luôn, và bạn chỉ phát hiện khi đã dựng xong, phải sửa lại cả màn. Câu hỏi cho bạn: khi chưa có lịch nào, màn này nên hiện gì và đặt nút gì để khách biết bước kế?
