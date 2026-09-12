---
title: "Ví dụ: tool chia tiền nhóm đi chơi"
lead: "Một tool nhỏ đi trọn đường ray KryFlow loại tool, rồi một vòng Nâng cấp vá lỗi chia lẻ 1 đồng."
---

# Tool chia tiền nhóm đi chơi

Đây là một ván chạy đầy đủ, đọc để thấy đường ray loại **tool** (thứ nhỏ dùng một mình hoặc nhóm nhỏ) đi thế nào. Sản phẩm: một trang web nhập tổng tiền một chuyến đi, đánh dấu ai đã trả, rồi in ra ai còn phải chuyển cho ai bao nhiêu. Một người làm, build bằng chat cộng nút **Publish** (nút đưa trang lên link công khai) của nền no-code.

## Bối cảnh

- Ai dùng: một nhóm 4 người đi Đà Lạt, tự gom tiền.
- Khổ gì: cuối chuyến ngồi tính tay, hay cãi nhau ai đưa ai bao nhiêu.
- Làm gì: nhập tổng tiền và người trả, tool chia đều rồi in danh sách chuyển khoản.

Loại tool nên chuỗi bước gọn còn 6 phần: Mở việc, Kế hoạch, Làm, Kiểm, Giao, Sổ tay. Bỏ ba cửa 1 chiều Luồng, Nền, Gu vì tool này không đăng nhập, không giữ dữ liệu của người khác, và chưa cần bàn màu hay cơ sở dữ liệu. Bỏ có chủ đích, không phải quên.

> Luật xuyên suốt: mỗi bước một chat mới. Đầu chat bạn dán 3 thứ: prompt của bước, toàn bộ **hồ sơ dự án** (một file text là bộ nhớ duy nhất), và input riêng của bước. AI in khối trạng thái ở đầu và cuối trả lời, dừng ở cửa, chỉ đi tiếp khi bạn gõ DUYỆT.

## Bước 01 · Mở việc

Việc: quyết định làm hay không, rồi để lại hồ sơ dự án đầu tiên. Cửa này bắt bạn tự trả lời 4 câu gác, AI bị cấm điền thay.

Prompt bạn dán vào chat:

```prompt
Bạn là người gác cửa Mở việc của KryFlow. Nói tiếng Việt, không viết code, không chốt công nghệ hay màu.
Ý tưởng của tôi: {{một câu tả tool bạn muốn làm}}
Việc phải làm theo thứ tự:
1. Nếu ý tưởng mơ hồ, hỏi tôi tối đa 5 câu gom một lần, rồi mới đi tiếp.
2. In ra 4 câu gác rồi DỪNG, chờ tôi tự trả lời: ai dùng, đo thành công bằng số gì, khi nào thì bỏ, tốn bao nhiêu một tháng.
3. Hỏi tôi đang có mấy dự án đang dở; từ 3 trở lên thì chặn, khuyên đóng bớt.
4. Tìm nhanh 2-3 sản phẩm có sẵn giải việc này, kết luận nên tự làm hay dùng sẵn.
5. Chọn loại dự án và in chuỗi bước riêng của loại.
6. Sinh khối hồ sơ dự án v0 để tôi lưu vào file.
Cuối trả lời in khối trạng thái: đang ở bước 01, cửa đã qua, việc kế, dòng cập nhật hồ sơ.
```

AI in 4 câu gác rồi dừng. Bạn tự trả lời, ví dụ: nhóm 4 người đi Đà Lạt; đo bằng hết ngồi tính tay; đi xong thì bỏ; miễn phí, không nuôi máy chủ. AI xác nhận đây là loại tool, in chuỗi 6 bước, và sinh hồ sơ v0.

Cửa ra: bạn trả lời đủ 4 câu và đang có không quá 2 dự án dở. Sản phẩm để lại: file hồ sơ dự án v0 với phần 01 Brief 10 dòng.

## Bước 05 · Kế hoạch

Loại tool đi thẳng từ Mở việc sang Kế hoạch. Việc: nhìn hiện trạng thật rồi chia việc thành các phase nhỏ, mỗi phase có prompt sẵn, một câu kiểm và cách quay lại. Chưa làm gì.

Prompt bạn dán:

```prompt
Bạn là người lên Kế hoạch của KryFlow. Không viết code, chia việc thành phase nhỏ có prompt sẵn.
Đây là hồ sơ dự án: {{dán toàn bộ hồ sơ}}
Hiện trạng thật: dự án còn trống, chưa có link, chưa có màn nào.
Việc phải làm theo thứ tự:
1. Tóm tắt hiện trạng trong 5 dòng, chỉ từ cái tôi dán, không suy diễn.
2. Đọc cách nền build tôi chọn làm việc này, ghi phần Đã tìm hiểu.
3. Phase 0 walking skeleton: đưa một trang trống lên link công khai qua nút Publish.
4. Chia Phase 1..N, mỗi phase ngắn: làm gì, prompt dán vào nền build, 1 câu kiểm, cách quay lại.
5. Viết mục Ngoài phạm vi để không phình.
Ghi trạng thái NHÁP và DỪNG, chờ tôi gõ DUYỆT trước khi sang bước Làm.
```

AI chia: phase 0 đưa trang trống lên link thật; phase 1 nhập liệu (ô tổng tiền, danh sách người, tick ai đã trả); phase 2 chia đều và in ai chuyển ai. AI cảnh báo sớm: chia lẻ dễ lệch vài đồng do làm tròn, nên để một câu kiểm riêng ở bước Kiểm. Kế hoạch ghi NHÁP, dừng chờ DUYỆT.

Cửa ra: kế hoạch qua đủ các ô, có phase 0 là link công khai trống, mỗi phase có prompt dán được và cách quay lại.

## Bước 06 · Làm

Việc: làm đúng từng phase trong kế hoạch đã DUYỆT, một phase một lần rồi dừng chờ bạn kiểm. Bạn tick ĐẠT, AI không tự tick. Lệch kế hoạch thì dừng hỏi.

Với phase 0, AI đưa prompt để bạn dán vào nền build:

```prompt
Tạo một trang trống, tiêu đề "Chia Tiền Nhóm", nền sáng, một dòng chữ ở giữa trang.
```

Bạn bấm Publish, nền build trả một link công khai (ví dụ chiatien.example.app). Bạn dán link lại, tự mở xem trang trống có chạy không. AI ghi ĐẠT phase 0: đường ra đã thông.

Phase 1, prompt thêm ô nhập:

```prompt
Thêm vào trang: một ô nhập tổng tiền, một danh sách để thêm tên người, và ô tick đánh dấu ai đã trả.
```

Sau mỗi phase, bạn dán lại bản tóm tắt nền build báo, AI đối chiếu kế hoạch. Khớp thì ghi ĐẠT, lệch thì ghi dòng LỆCH và dừng hỏi. Một phase sửa tối đa 3 lần; quá thì dừng, hỏi câu lớn hơn.

Cửa ra: mọi phase bạn tick ĐẠT kèm kết quả tự kiểm, không phase nào sửa quá 3 lần, không có tính năng ngoài kế hoạch.

## Bước 07 · Kiểm

Việc: kiểm trên link thật theo AC (câu mô tả "thế nào là chạy đúng") và chuẩn xong của loại tool, trước khi được nói xong. Không kết luận bằng đọc mã hay bằng lời AI.

Prompt bạn dán:

```prompt
Bạn là người soát chất lượng của KryFlow. Biến mỗi AC thành các bước bấm cụ thể trên link thật.
Link công khai: {{dán link}}
AC cần kiểm: {{dán phần AC trong hồ sơ}}
Việc phải làm:
1. Lập bảng kiểm: AC, bước bấm, kỳ vọng, ô kết quả để tôi điền ĐẠT hoặc LỖI, cột ảnh cho giao diện.
2. Nhắc thử ca nghịch: nhập sai, bỏ trống, bấm 2 lần.
3. Đưa checklist chuẩn xong của tool để tôi tick.
4. Nhắc kiểm không có khoá bí mật lộ trong trang công khai.
Kết luận ĐƯỢC GIAO hay CHƯA. Không tự cho ĐẠT thay tôi.
```

Bạn mở link thật, bấm thử: nhập 400k chia 4 người ra mỗi người 100.000 (ĐẠT); bỏ trống tổng tiền thì báo thiếu (ĐẠT). Lần này bạn dùng số chia chẵn nên tất cả qua sạch, ca lẻ chưa lộ. AI kết luận ĐƯỢC GIAO.

Cửa ra: mọi AC có kết quả do bạn tự bấm và báo, chuẩn xong của loại tool đã đủ, không còn LỖI.

## Bước 08 · Giao

Việc: đưa bản đã kiểm lên link công khai an toàn qua 3 cổng, rồi chốt sổ và chỉ đúng cửa kế.

- Cổng TRƯỚC: sao lưu bản hiện tại, kiểm không lộ khoá bí mật, nội dung là thật không phải chữ mẫu.
- Cổng LÀM: bấm Publish của nền build. AI không tự bấm thay bạn.
- Cổng SAU: mở link ở cửa sổ ẩn danh và trên điện thoại, đi một lượt chia thử, chụp ảnh.

Chốt sổ: phiên bản v1.0.0, thêm một dòng **changelog** (nhật ký thay đổi): `12/09 · v1.0.0 · ra bản chia đều đầu tiên · vì nhóm hay cãi tiền`. AI in dòng LIVE kèm link và phiên bản. Chưa có Sổ tay nên cửa kế là bước 09.

Cửa ra: đủ 3 cổng, hồ sơ có phiên bản mới và 1 dòng changelog, hồ sơ đã nén và đã ghi cửa kế.

## Bước 09 · Sổ tay

Việc: viết bản đồ thứ đã build (không phải thứ muốn build) để sau này sửa được mà không kể lại từ đầu. Ba file gọn:

- README: tool làm gì cho ai, cách bấm Publish lại, cấu trúc một màn nhập và kết quả.
- FEATURES: bảng F01 nhập tổng, F02 chọn người trả, F03 chia đều; dòng đầu ghi "viết ở phiên bản v1.0.0".
- RUNBOOK: cách publish lại, cách quay về bản trước trong 5 phút, chỗ ghi gotcha khi có lỗi.

Bạn bấm thử từng tính năng trên link thật, xác nhận màn có thật rồi AI mới ghi vào sổ. Kiểm không có giá trị khoá bí mật trong 3 file. Từ đây mọi thay đổi đi bằng cửa Nâng cấp, không sửa thẳng nữa. Sổ tay không tăng phiên bản.

## Vòng Nâng cấp: vá lỗi chia lẻ 1 đồng

Tool sống được vài ngày thì một người trong nhóm báo: chia 100k cho 3 người, cộng lại chỉ ra 99.999, thiếu 1 đồng. Đây là lúc vào vòng sống.

### Bước 10 · Nâng cấp

App đã sống nên vào bằng cửa Nâng cấp, không sửa thẳng. AI đọc sổ tay trước: vùng đụng là F03 chia đều ở màn kết quả. Đây là sửa lỗi, không phải tính năng mới. Loại cửa: không đụng bảng dữ liệu, đăng nhập hay thanh toán, nên là cửa 2 chiều, khỏi phản biện. AI chỉ bạn mở chat mới chạy bước Sửa, mang theo vùng đụng F03. Nâng cấp chỉ phân cửa và chỉ đường, không vá.

### Bước S · Sửa

Việc: tìm nguyên nhân gốc nói được bằng 1 câu rồi mới vá.

Prompt bạn dán:

```prompt
Bạn là người tìm nguyên nhân gốc của KryFlow. Cấm vá khi chưa nói được lỗi do đâu bằng 1 câu.
Triệu chứng: chia 100.000 cho 3 người, tổng cộng lại ra 99.999, thiếu 1 đồng.
Vùng đụng: F03 chia đều, màn kết quả.
Việc phải làm:
1. Đưa 3-5 giả thuyết, mỗi cái kèm cách tôi tự kiểm.
2. Sau khi tôi kiểm, chốt nguyên nhân gốc bằng đúng 1 câu: lỗi vì X ở Y, lọt vì Z.
3. Đề xuất cách vá kèm rủi ro và cách quay lại.
4. Nhắc dựng lại đúng ca lỗi, kiểm lại sau khi vá phải ĐẠT.
5. Thêm 1 dòng Gotcha, và nếu cần 1 dòng Checklist trước Giao.
```

Sau khi bạn kiểm, AI chốt nguyên nhân gốc một câu: lỗi vì làm tròn từng phần ở F03, lọt vì lúc Kiểm chỉ thử số chia chẵn. Cách vá: dồn phần lẻ cho một người (2 người 33.333, 1 người 33.334), quay lại được bằng bản sao lưu. Bạn dựng lại ca 100k chia 3, tổng ra đúng 100.000. AI ghi Gotcha và thêm một dòng Checklist trước Giao: luôn thử một ca chia lẻ.

### Bước 07 lần 2 · Kiểm lại

Bạn kiểm lại trên link thật: ca lỗi cũ (100k chia 3) giờ ĐẠT; ca cũ (400k chia 4) vẫn ĐẠT, không hỏng; ca lẻ mới trong checklist (50k chia 3) cũng ĐẠT. Kết luận ĐƯỢC GIAO. Sửa xong luôn kiểm lại cả ca cũ, không chỉ ca vừa vá.

### Bước 08 lần 2 · Giao lại

Đi lại 3 cổng: sao lưu, Publish bản vá, mở ẩn danh chia thử một ca lẻ. Sửa lỗi nên tăng bậc nhỏ nhất: v1.0.0 lên v1.0.1. Thêm dòng changelog: `12/09 · v1.0.1 · vá chia lẻ dồn 1 đồng cho người cuối · vì cộng lại thiếu 1 đồng`. Cập nhật sổ tay delta: F03 ghi chú cách dồn lẻ, đổi dòng phiên bản sổ tay sang v1.0.1.

Vòng Nâng cấp khép lại: Nâng cấp, Sửa, Kiểm, Giao, cập nhật sổ tay. Từ đây mỗi lần muốn thêm hay sửa gì, lại vào đúng cửa Nâng cấp.

## Rút ra

- Cửa gác ép AI dừng ở chỗ đắt tiền, nhất là 4 câu gác chỉ bạn biết.
- Phase 0 là đưa trang trống lên link thật trước, không phải tính năng đầu tiên.
- Kiểm là bạn tự bấm tay trên link công khai, gồm cả ca nghịch và ca chia lẻ.
- Sửa phải nói nguyên nhân gốc bằng 1 câu trước khi vá, rồi cài bài học vào Gotcha và Checklist.
