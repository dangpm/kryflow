---
title: Bắt đầu trong 10 phút
lead: Cài một lần, rồi mỗi ngày chỉ mở chat và làm theo bước.
---

## Bạn cần gì

- Một gói trả phí: **ChatGPT Plus** hoặc **Google AI Pro** (tức Gemini). Chỉ cần một.
- Một chỗ lưu ghi chú dự án: một file trên máy, hoặc một Google Docs.
- Khoảng 10 phút cho lần đầu.

## Ba bước cài

1. **Tải bộ KryFlow** trên [GitHub](https://github.com/dangpm/kryflow) về máy. Trong đó có sẵn các prompt và file mẫu.
2. **Dạy AI luật chơi một lần.** Mở file `system/kryflow-guide.md`, chép nội dung vào phần hướng dẫn của một khu làm việc riêng: **Project** nếu bạn dùng ChatGPT, **Gem** nếu bạn dùng Gemini. Không tìm thấy nút đó cũng không sao, chép vào đầu mỗi chat vẫn chạy.
3. **Tạo tờ ghi chú dự án.** Copy file `templates/project.md` thành file của bạn. Đây là trí nhớ của dự án. Bạn dán nó vào đầu mỗi chat mới, vì chat mới thì AI quên hết.

## Rồi làm theo bước

Bắt đầu ở [bước 1: Mở việc](/buoc/brief/). Mỗi bước bạn mở một chat mới, dán tờ ghi chú, chép prompt của bước vào, rồi làm theo.

Mỗi lần AI xong một bước, nó dừng lại chờ bạn gật. Bạn kiểm thấy ổn thì gõ **DUYỆT**, rồi qua bước sau. Chưa ổn thì gõ **SỬA** và nói rõ chỗ cần sửa.

## Nhịp mỗi ngày

Mở chat mới, dán tờ ghi chú, nói bạn đang ở bước nào:

```prompt
Đây là ghi chú dự án của tôi:
{{dán toàn bộ tờ ghi chú vào đây}}

Tôi đang ở bước {{tên bước}}. Tiếp giúp tôi.
```

Cuối chat, AI đưa một khối cập nhật. Bạn chép nó về tờ ghi chú. Vậy là không mất gì khi qua chat mới.

## Năm điều đừng làm

- Đừng để AI làm nhiều bước một lúc. Một chat, một bước.
- Đừng bỏ tờ ghi chú. Không có nó, chat mới là AI quên sạch.
- Đừng để AI tự nói "xong". Bạn tự mở link bấm thử mới tính.
- Đừng bàn màu hay công nghệ ở mấy bước đầu. Chưa tới lúc.
- Đừng vội. Ba bước đầu chậm là cố ý, để khỏi sửa lại tốn công sau.
