---
title: KryFlow
lead: Xây sản phẩm bằng ChatGPT hoặc Gemini, từng bước có cửa gác.
---

# KryFlow

Xây sản phẩm bằng ChatGPT hoặc Gemini, từng bước có cửa gác.

Site học trực quan: https://kryflow.dang.pm · Bản gốc cho Claude Code: https://github.com/dangpm/kry-lifecycle

Bạn là đạo diễn, AI là thợ giỏi nhưng hay quên và hay làm tắt. KryFlow là đường ray 10 bước cộng 1 lối cứu lỗi: mỗi bước làm đúng một việc, kết bằng một cửa, AI phải in cửa rồi dừng chờ bạn gõ DUYỆT. Nhờ vậy không mất ngữ cảnh giữa các chat, không bị AI bỏ bước.

Không cần biết code. Bạn chỉ cần một tài khoản chat (**ChatGPT Plus** hoặc **Google AI Pro**, tức Gemini), một nền dựng app **no-code** (không cần gõ code: Lovable, Bolt, v0, Replit, Google AI Studio Build) và một nơi đăng miễn phí.

## Dành cho ai, không dành cho ai

Dành cho: người mới, chưa từng build, muốn ra một công cụ nhỏ, một trang web hoặc một app có đăng nhập mà không lạc giữa hàng chục cửa sổ chat.

Không dành cho: người đã quen dòng lệnh và muốn tự động hoá sâu bằng máy tính của mình. Bản đó là Kry Lifecycle ở link trên.

## 3 luật

| Luật | Nghĩa |
| --- | --- |
| Một bước, một việc, một cửa | Mỗi bước làm đúng một việc rồi dừng ở cửa của nó. AI in cửa và chờ bạn gõ DUYỆT, không gộp việc, không tự nhảy bước. |
| Cửa 1 chiều làm kỹ, cửa 2 chiều lặp nhanh | Luồng, Nền, Gu sai là sửa rất đắt: đi chậm và bắt buộc mở chat 2 cho kẻ phản biện. Kế hoạch, Làm, Kiểm sai thì làm lại, cứ lặp nhanh. |
| Nhìn thật trước khi làm, làm rồi không nghĩ lại | Kế hoạch phải nhìn hiện trạng thật (link, ảnh, danh sách màn) trước khi viết. Lúc Làm bám kế hoạch, lệch thì dừng hỏi, không tự đổi giữa chừng. |

## Bản đồ

```
VÙNG 1 · THIẾT KẾ NỀN (cửa 1 chiều, đi chậm, có kẻ phản biện ở chat 2)
   01 Mở việc → 02 Luồng → 03 Nền → 04 Gu

VÙNG 2 · VÒNG BUILD (cửa 2 chiều, lặp nhanh)
   05 Kế hoạch → 06 Làm → 07 Kiểm ↺
                            ↕
                         S Sửa   (lối phụ, vào bất cứ khi nào có lỗi)

VÙNG 3 · SỐNG (sau khi giao lần đầu)
   08 Giao → 09 Sổ tay → 10 Nâng cấp ↺  (mọi thay đổi vào bằng Nâng cấp, ra bằng Giao)
```

## Các bước

| Bước | Tên | Việc | Cửa | Bỏ được khi | File |
| --- | --- | --- | --- | --- | --- |
| 01 | Mở việc | Quyết định làm hay không, để lại hồ sơ dự án đầu tiên | 1 chiều | không bỏ | prompts/01-brief.md |
| 02 | Luồng | Chốt hành vi: ai muốn gì, màn nào, nút nào làm gì | 1 chiều | tool, lab (web thì bật khi có form) | prompts/02-flow.md |
| 03 | Nền | Chốt dữ liệu, quyền, dịch vụ ngoài, nơi host | 1 chiều | tool, web, lab | prompts/03-base.md |
| 04 | Gu | Định hình gu thiết kế riêng, chọn 1 trục đột phá | 1 chiều | tool, lab | prompts/04-style.md |
| 05 | Kế hoạch | Nhìn hiện trạng thật, chia việc thành phase nhỏ | 2 chiều | lab | prompts/05-plan.md |
| 06 | Làm | Làm từng phase theo kế hoạch, kiểm từng phase | 2 chiều | không bỏ | prompts/06-build.md |
| 07 | Kiểm | Kiểm trên link thật theo tiêu chí và chuẩn xong | 2 chiều | lab | prompts/07-test.md |
| 08 | Giao | Đưa lên link công khai, chốt sổ, nén hồ sơ | 2 chiều | lab | prompts/08-ship.md |
| 09 | Sổ tay | Ghi bản đồ thứ đã build để sau này sửa được | 2 chiều | lab | prompts/09-docs.md |
| 10 | Nâng cấp | Cửa duy nhất để sửa sản phẩm đã chạy thật | sống | dùng khi đã sống | prompts/10-update.md |
| S | Sửa | Tìm nguyên nhân gốc rồi mới vá, có cách quay lại | lối phụ | vào khi có lỗi | prompts/S-fix.md |

## Chuỗi theo loại dự án

Bước 1 chọn loại dự án cho bạn, mỗi loại đi một chuỗi riêng nên không phải bước nào cũng qua.

| Loại | Là gì | Chuỗi bước |
| --- | --- | --- |
| Công cụ | 1 việc nhỏ, cho mình hoặc nhóm nhỏ, không đăng nhập | 01 → 05 → 06 → 07 → 08 → 09 |
| Trang web | Giới thiệu, landing, sự kiện, có thể 1 form | 01 → 02 → 04 → 05 → 06 → 07 → 08 → 09 |
| Ứng dụng | Có đăng nhập, dữ liệu nhiều người, trạng thái đổi | 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 |
| Thử nghiệm | Chỉ xem một ý có chạy không trong khung giờ định trước | 01 → 06 |

## Bắt đầu trong 10 phút

1. Tải repo này về, hoặc mở https://kryflow.dang.pm để xem đường ray trực quan trước.
2. Mở `system/kryflow-guide.md`. Đây là **system prompt** (đoạn luật nền đặt AI vào đúng vai).
3. Trong ChatGPT: tạo một **Project** (thư mục chat riêng của dự án) tên KryFlow, dán guide vào Instructions, tải các file tĩnh trong `prompts/` và `challengers/` vào. Trong Gemini: tạo một **Gem** (trợ lý riêng có sẵn hướng dẫn), dán guide vào Instructions, tải file tĩnh vào Knowledge. Không có Project hay Gem thì dán 8 dòng luật đầu mỗi chat.
4. Chép `templates/project.md` thành một file mới trên máy hoặc Google Docs. Đây là hồ sơ dự án, bộ nhớ duy nhất, bạn dán lại vào đầu mọi chat mới.
5. Mở một chat mới, dán prompt bước `prompts/01-brief.md` cùng ý tưởng của bạn. AI in 4 câu gác rồi dừng, bạn tự trả lời (AI bị cấm trả lời thay).
6. Sau khi bạn gõ DUYỆT, chép khối cập nhật hồ sơ AI in ra vào file hồ sơ, rồi sang bước kế theo chuỗi loại dự án của bạn.
7. Lặp: mỗi bước một chat mới, luôn dán hồ sơ và prompt bước ở đầu chat.

## Cách chạy phản biện

Ba cửa 1 chiều (Luồng, Nền, Gu) bắt buộc có kẻ phản biện, vì AI vừa viết vừa tự cãi thì cửa còn tên mà mất lực. Mở một chat thứ 2, tốt nhất ở nền tảng khác (nháp ở ChatGPT thì cãi ở Gemini). Dán file trong `challengers/` cùng phần vừa làm, ép ra tối thiểu 3 lỗ hổng. Kẻ phản biện ra dưới 3 điểm hoặc quay sang khen là dấu hiệu chạy sai vai, phải chạy lại. Kéo kết quả về chat chính để sửa trước khi bạn gõ DUYỆT.

## Cấu trúc repo

```
kryflow/
  README.md            bạn đang đọc
  CHANGELOG.md         lịch sử phiên bản
  LICENSE              MIT
  prompts/             11 file bước: việc, prompt chép được, mẫu output, cửa ra, lỗi hay gặp
  challengers/         kẻ phản biện cho 3 cửa 1 chiều (ux, system, ui) và bản tuỳ chọn
  system/              kryflow-guide.md, system prompt dán vào Project hoặc Gem
  templates/           project.md (mẫu hồ sơ), changelog.md, decision.md
  checklists/          kiem.md, giao.md cho bước Kiểm và bước Giao
  examples/            dự án mẫu chạy qua các bước
  site/                mã nguồn kryflow.dang.pm, đọc dữ liệu từ content
```

## Khác gì bản gốc

| Bản gốc Kry Lifecycle | KryFlow | Vì sao |
| --- | --- | --- |
| Chạy trên máy bằng dòng lệnh, kèm nhiều công cụ dev | ChatGPT hoặc Gemini, chat cộng nền no-code cộng host free | Người mới không có hạ tầng dev |
| Bộ nhớ dự án dựa vào công cụ ngoài và bộ nhớ tự động | 1 file hồ sơ text dán tay vào mỗi chat | Không cần công cụ ngoài, chỉ copy-paste |
| Kẻ phản biện chạy tự động cùng máy | Mở chat 2, tốt nhất khác nền tảng, dán prompt phản biện | Không có công cụ tự động mà vẫn giữ lực phản biện |
| 3-4 file mỗi bước | 1 file prompt gộp mỗi bước | Đọc trên GitHub không ngợp |
| 4 làn đưa lên chạy thật | Nút Publish của nền build, hoặc Netlify, Vercel, GitHub Pages | Chỉ dùng bản miễn phí |
| Tối đa 3 dự án đang dở | Tối đa 2 dự án đang dở | Người mới tự đếm bằng mắt, hạ cho dễ giữ |

## Góp ý

Thấy chỗ khó hiểu hoặc sai, mở một issue trong repo này. Nói rõ bạn đang ở bước nào và kẹt ở đâu.

## License

MIT. Xem file `LICENSE`.
