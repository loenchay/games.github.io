# Sân Chơi Hội Bạn

Bộ mini game chơi online cùng bạn bè ngay trên trình duyệt, có chat và voice. Người chơi kết nối P2P (WebRTC) trực tiếp với nhau nên không cần backend. Có thể mở trực tiếp file trên máy hoặc deploy lên GitHub Pages.

| Game | File | Người chơi |
|---|---|---|
| Trang danh sách game | `index.html` | |
| Ma Sói | `masoi.html` | 4–16 |
| Diễn Tả Hình Hài | `dienta.html` | 2–16 |

## Giao diện sáng / tối

Bấm nút ☀️ / 🌙 ở góc trên. Mặc định trang theo chế độ sáng/tối của máy; khi đã bấm chọn thì trình duyệt sẽ nhớ.

## Mở trên máy

Nhấp đúp `index.html`, hoặc dán đường dẫn file vào Chrome.

- **Chơi thật (P2P):** mở ở 2 trình duyệt hoặc 2 máy. Một bên tạo phòng, bên kia nhập mã phòng. Cách này cần có internet.
- **Thử một mình:** thêm `?local=1` vào cuối địa chỉ trang game (ví dụ `.../dienta.html?local=1`) rồi mở nhiều tab trong **cùng một trình duyệt**. Mỗi tab đóng vai một người chơi và không cần mạng.

## Diễn Tả Hình Hài

- Mỗi lượt có một người lên sân khấu. Người đó thấy đề bài (hình kèm chữ), trong khi những người khác chỉ thấy nhóm đề, điểm và số nhân.
- Người diễn bấm nút để điều khiển nhân vật:
  - **Toàn thân:** đứng, ngồi, nằm, quỳ, trồng cây chuối.
  - **Đầu và nét mặt.**
  - **Tay trái, tay phải:** giơ cao, chống hông, khoe cơ, ôm đầu, vẫy…
  - **Chân:** bước, dạng, co gối, đá.
  - **Chuyển động lặp** (bật/tắt): đi, chạy, nhảy múa, lắc mông, vỗ cánh, bơi…
  - **Hiệu ứng:** bật nhảy, xoay, té ngã.
- Người diễn bị khoá mic và chat. Những người còn lại bật voice hoặc chat thoải mái. Tin nhắn chat nào lộ đáp án sẽ bị che.
- **Đạo cụ:** người diễn đưa được khoảng 40 món vào tay nhân vật (kéo, lược, micro, điện thoại, cần câu, xương, cà rốt, ống nghe…), mỗi tay một món.
- **Hoá trang con vật:** tai chó / mèo / thỏ / chuột, sừng, râu côn trùng; đuôi chó / mèo / heo / khủng long (đuôi biết vẫy). Kết hợp với tư thế **Bò 4 chân** để diễn con vật.
- **Mẹo diễn:** mỗi đề có gợi ý cách diễn, chỉ người diễn thấy (ví dụ "bò 4 chân + tai chó + đuôi + xương").
- **Bấm chuông** (hoặc phím Space): ai bấm nhanh nhất được gõ đáp án. Máy chấm không phân biệt dấu nên gõ "da bong" vẫn đúng với "đá bóng". Trả lời sai thì bị khoá ở lượt đó, người khác bấm tiếp.
- **Gợi ý tự động:** qua khoảng 35% thời gian diễn thì hiện số chữ (`_ _ _   _ _ _`) cùng gợi ý riêng của đề nếu có. Qua khoảng 65% thì hiện thêm chữ cái đầu của mỗi từ.
- **Tính điểm:** người đoán đúng được `điểm × số nhân`. Người diễn được thêm `điểm × số nhân × actorShare`.
- **Nhân vật 3D "Bé Đụt" (thiết kế mới):** tô màu hoạt hình + viền đậm hợp với giao diện; đầu to, thân hạt đậu, tay chân dẻo như sợi mì, mắt lồi có mí và con ngươi đảo lung tung; chuyển động có lò xo, nhún và co giãn. **37 nhân vật** (Bé Đụt, Học Sinh, Cô Giáo, Cô Ba Nón Lá, Cô Bánh Mì, Chú Xe Ôm, Bà Ngoại, Bác Bảo Vệ, Anh Shipper, Chị Chốt Đơn, Ông Đồ, Khủng Long, Ếch Ộp, Cậu Vàng...). Xem và chọn ở trang **Tủ đồ** (`nhanvat.html`). Có thể dán link ảnh hoặc tải ảnh lên làm mặt. Máy không hỗ trợ WebGL sẽ tự dùng nhân vật 2D.
- **Thêm nhân vật mới:** sửa `src/dienta/chars.js` — mỗi nhân vật là một dòng ghép từ kiểu tóc, mũ, phụ kiện mặt, trang phục và màu sắc (xem chú thích đầu file), rồi chạy `sh build.sh`.
- **Mẹo diễn bấm được:** các gợi ý trong thẻ đề (VD "cúi chào + vỗ tay") là nút bấm, bấm vào là nhân vật làm theo và tự mở đúng tab điều khiển.
- **Sân khấu 3D:** sàn gỗ, rèm nhung, đèn rọi có bóng đổ, đèn chân sân khấu, khán giả cổ vũ khi có người đoán đúng.
- **Tuỳ chọn phòng (chọn trước khi tạo, đổi lại được trong phòng chờ):** thứ tự lên diễn *bốc thăm ngẫu nhiên* (ai diễn rồi không bị bốc lại cho tới vòng sau) hoặc *theo thứ tự vào phòng*; số vòng; thời gian diễn/trả lời; số lượt đổi đề; bật/tắt gợi ý và số nhân điểm; chọn nhóm đề. Tuỳ chọn được nhớ trong trình duyệt cho lần sau.

### Phím tắt cho người diễn

Mỗi nút điều khiển đều hiện phím tắt của nó. Bấm **⌨️ Phím tắt** (hoặc `⇧ /`) để xem toàn bộ và đổi phím theo ý mình.

| Nhóm | Phím mặc định |
|---|---|
| Toàn thân | `1` đứng · `2` ngồi ghế · `3` ngồi xổm · `4` quỳ · `5` nằm · `6` `7` nghiêng · `8` trồng cây chuối · `9` bò 4 chân · `-` cúi người · `=` ngồi xếp bằng |
| Mặt | `⇧1` … `⇧9` |
| Đầu | `←` `→` nghiêng · `↑` ngước · `↓` cúi · `0` thẳng |
| Tay trái | `Q` giơ cao · `W` chéo · `A` dang · `S` chống hông · `Z` hạ · `X` vẫy · thêm `⇧` cho khoe cơ / ôm đầu / đưa lên miệng / ôm ngực / chỉ |
| Tay phải | `P` `O` `L` `K` `M` `N` (đối xứng với tay trái) |
| Chân trái | `R` đá · `F` co gối · `G` dạng · `T` bước · `V` thẳng |
| Chân phải | `U` `J` `H` `Y` `B` |
| Chuyển động | `E` đi · `D` chạy · `C` nhảy múa · `I` lắc mông · thêm `⇧` cho vỗ cánh / bơi / run / vỗ tay… |
| Hiệu ứng | `[` bật nhảy · `]` xoay · `;` té · `'` nhún |
| Xoay người | `⇧↑` nhìn khán giả · `⇧←` `⇧→` quay trái / phải · `⇧↓` quay lưng · `⌥←` `⌥→` xoay chéo |
| Đạo cụ | `,` `.` đổi đạo cụ tay trái / phải · thêm `⇧` để bỏ đạo cụ |
| Hoá trang | `` ` `` đổi tai / sừng · `\` đổi đuôi · thêm `⇧` để bỏ |
| Tổ hợp | `⌥1` … `⌥9` (Windows dùng `Alt`) |
| Đặt lại tư thế | `⌫` |

**Tổ hợp (combo)** là cả một tư thế bấm bằng một phím, có sẵn 9 tổ hợp: Chào hỏi, Đi ngủ, Ăn mì, Gọi điện, Hát, Siêu nhân, Vỗ cánh, Hoảng sợ, Cún con. Muốn tự tạo, bạn tạo dáng cho nhân vật, mở tab **⭐ Tổ hợp**, bấm **＋ Lưu tư thế hiện tại** rồi đặt tên. Tổ hợp mới tự nhận phím `⌥9`, `⌥0`…, và bạn đổi được phím trong bảng phím tắt. Phím tắt và tổ hợp được lưu trong trình duyệt của từng người.

### Thêm đề mới

Mở `data/dienta-data.js` bằng một trình soạn thảo bất kỳ. Mỗi dòng trong `items` là một đề:

```json
{ "id": "con-ga", "name": "Con gà", "image": "🐔", "answer": ["con gà", "gà"], "points": 10, "category": "Con vật" }
```

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã riêng, không được trùng với đề khác |
| `name` | Tên đề hiển thị cho người diễn (nên tối đa 3 từ) |
| `image` | Emoji, hoặc đường dẫn ảnh (`images/ga.png`, `https://...`) |
| `answer` | Danh sách đáp án được chấp nhận |
| `points` | Điểm gốc (gợi ý: 10 dễ · 20 vừa · 30 khó) |
| `category` | Nhóm đề. Chủ phòng bật/tắt được từng nhóm |
| `hint` | *(tuỳ chọn)* Gợi ý chữ, hiện ra khi đã qua khoảng 35% thời gian |
| `acting` | *(tuỳ chọn)* Mẹo diễn, chỉ người diễn thấy |
| `multipliers` | *(tuỳ chọn)* Số nhân riêng cho đề này, ví dụ `[2, 3]` |

- **Số nhân:** được chọn ngẫu nhiên mỗi lượt theo bảng `multipliers` ở đầu file. `weight` càng lớn thì số nhân đó càng hay xuất hiện.
- **Dữ liệu đọc từ máy chủ phòng:** chỉ file đề trên máy người **tạo phòng** được dùng.

> File đề là JSON bọc trong `window.DIENTA_DATA = ...;`. Bọc như vậy là để mở trực tiếp từ ổ đĩa vẫn đọc được, vì Chrome không cho trang mở từ file đọc trực tiếp file `.json`.

## Nhại Như Thật (game mới)

Cả phòng nghe một âm mẫu rồi cùng thu âm nhại lại. Từng bản nhại được phát trên sân khấu 3D, nhân vật của người nhại nhép miệng theo tiếng. Cuối mỗi đề: máy chấm + mọi người bỏ phiếu.

- **Một đề:** nghe mẫu (1–3 lần) → đếm ngược 3-2-1 → mọi người cùng thu → trình diễn lần lượt (bản gốc trước) → bỏ phiếu (không tự bầu) → kết quả.
- **Máy chấm** (`src/nhai/score.js`): so đường cao độ tương đối (giọng nam/nữ đều được) và nhịp to–nhỏ, dài–ngắn bằng DTW. Không hiểu chữ, chỉ nghe ngữ điệu và nhịp. Tuỳ chọn phòng: *máy chấm + bỏ phiếu* (mặc định), *chỉ máy chấm*, *chỉ bỏ phiếu*.
- **45 âm mẫu tự tổng hợp** (không dùng âm thanh có bản quyền): con vật, câu cửa miệng (Alô alô, Ối dồi ôi, Hả???…), tiếng động meme (kèn buồn, còi hơi, ba-dum-tss, còi cảnh sát…), giai điệu dân gian / đã hết bản quyền. File gốc ở `sounds/`, bản nhúng ở `data/nhai-data.js`; tạo lại bằng `gen/sounds.py`.
- **Đề tự thêm ngay trong phòng chờ:** ai cũng thu được 5 giây hoặc chọn file âm thanh trên máy (VD: âm meme tải về), tối đa 8 giây. Đề tự thêm được chơi trước.
- Trong lúc nghe / thu / trình diễn, voice chat tự tắt để không lẫn tiếng.
- Bản thu được nén (12kHz, 8 bit) và gửi thẳng cho người trong phòng, không lưu ở đâu cả.

## Cờ Caro

- Phòng tối đa **10 người**: 2 người ngồi ghế **X** (đi trước) và **O**, những người còn lại là người xem (chat, voice, thả cảm xúc 👏🔥😱 bay trên bàn cờ).
- Cả 2 bấm **Sẵn sàng** là vào ván. Xếp đủ 5 quân liên tiếp (ngang, dọc, chéo) để thắng.
- Trong ván: **xin đi lại** (đối thủ phải đồng ý, tối đa 3 lần/ván), **xin hoà**, **đầu hàng**. Rời phòng giữa ván quá 60 giây bị xử thua.
- Luật chủ phòng chỉnh được: bàn 15×15 / 19×19, giới hạn thời gian mỗi nước (hết giờ thua), **chặn 2 đầu**, ván sau ai đi trước (người thua / luân phiên / giữ nguyên).
- Ghế trống thì người xem bấm **Ngồi ghế** để vào chơi; người chơi có thể **Rời ghế** xuống xem, hoặc **Đổi X/O**.

## Cờ Tướng & Cờ Vua

- Giống Cờ Caro: phòng tối đa **10 người**, 2 người cầm quân (Cờ Tướng: **Đỏ** đi trước / **Đen**; Cờ Vua: **Trắng** / **Đen**), còn lại xem, chat, voice, thả cảm xúc. Người cầm quân Đen thấy bàn cờ quay về phía mình; người xem bấm **⇅ Lật bàn**.
- Bấm quân → hiện các ô đi được → bấm ô đích. Có **đồng hồ mỗi bên** (3/5/10/15/30 phút hoặc không giới hạn, cộng thêm +2/+5/+10s mỗi nước), **biên bản nước đi**, quân đã ăn, xin đi lại (tối đa 3), xin hoà, đầu hàng.
- **Cờ Vua:** luật quốc tế đầy đủ — nhập thành, bắt tốt qua đường, phong cấp (chọn Hậu/Xe/Tượng/Mã), chiếu hết, hoà do pat / lặp 3 lần / 50 nước / thiếu quân. Biên bản theo ký hiệu quốc tế (e4, Nf3, O-O, Qxf7#).
- **Cờ Tướng:** Tướng/Sĩ trong cung, Tượng không qua sông và bị cản mắt, Mã cản chân, Pháo cần ngòi, Tốt qua sông đi ngang, hai Tướng không được đối mặt. Hết nước đi là thua. Hoà khi lặp 3 lần hoặc 60 nước không ăn quân. Biên bản kiểu Việt (P2-5, M8.7, X1/2). Nút **Chữ Việt / Chữ Hán** đổi cách hiện quân.
- Code dùng chung ở `src/duel/` (luật `chess.js`, `xiangqi.js` có kiểm thử perft; `engine.js` phòng; `room.js` giao diện; `boards.js` vẽ bàn SVG).

## Một Lá! · Cờ Cá Ngựa · Cờ Tỷ Phú (bàn chơi nhiều người)

- Dùng chung khung phòng `src/table/`: tối đa **10 người** trong phòng; ai ngồi ghế thì chơi, còn lại xem/chat/voice/thả cảm xúc. Người chơi bấm **Sẵn sàng**, chủ phòng bấm **Bắt đầu**. Có giờ mỗi lượt (15/30/60s hoặc tắt) — hết giờ hoặc mất mạng thì máy tự đi thay. Chủ phòng có nút **Kết thúc ván**.
- Mỗi người nhận trạng thái riêng từ chủ phòng nên **bài trên tay được giấu** với người khác (máy chủ phòng vẫn giữ toàn bộ, chơi với bạn bè tin tưởng nhau).
- **Một Lá!** (2–10 người, kiểu bài màu): đánh cùng màu/cùng số, ⊘ mất lượt, ⇄ đảo chiều, +2, đổi màu, +4. Tuỳ chọn: chia 5/7/10 lá, cộng dồn +2/+4, bốc 1 lá hay bốc tới khi đánh được. Còn 2 lá bấm **📣 Một lá!**, quên thì người khác bấm **🫵 Bắt!** → bốc phạt 2. Hết bài trước thắng, cộng điểm bài còn lại của mọi người.
- **Cờ Cá Ngựa** (2–4 người): luật Việt — đổ 6 (tuỳ chọn 1 hoặc 6) mới xuất quân, đổ 6 đổ thêm, đi trúng ngựa đối thủ là đá về chuồng, tuỳ chọn cấm nhảy qua đầu ngựa khác, lên 5 bậc rồi vào đích phải đổ vừa đủ. Ngựa trượt từng ô, có gợi ý ô đến.
- **Cờ Tỷ Phú** (2–6 người): 40 ô địa danh Việt Nam (Hà Giang → Thủ Thiêm), 4 nhà ga/sân bay, điện lực, cấp nước, Cơ hội & Khí vận. Mua đất, đủ bộ màu thuê ×2 và xây nhà đều → khách sạn, cầm cố/chuộc, đổi chác đất + tiền, tù (đổ đôi / nộp $50 / thẻ), phá sản. Giới hạn thời gian 20–90 phút (hết giờ ai giàu nhất thắng) hoặc chơi tới khi phá sản hết. Bấm vào ô để xem bảng giá thuê. Chưa có đấu giá khi bỏ qua không mua.

## Quyền Cước 97 (đối kháng 2 người)

- Game đánh nhau 2D kiểu thùng game thập niên 90, **12 võ sĩ tự thiết kế**: Tèo, Mai, Bác Sấm, Lão Hạc, Tư Xích Lô, Cô Ba Bánh Mì, Kiệt Ninja, RX-97 Robot, Bé Na, Thầy Bảy (võ Bình Định), Hùng Tạ, Lan Xiếc. Mỗi người 3 chiêu + 1 tuyệt chiêu **riêng, không ai trùng ai** (48 cơ chế khác nhau: phản đòn, gồng chịu đòn, nón lá bay vòng về, hất tung để đánh tiếp trên không, laser, nam châm hút, lăn né chưởng, quăng tạ lăn sát đất, lốc xoáy hút, đoàn xích lô, mưa bánh mì, tên lửa tự đuổi...). Xem mô tả từng chiêu ở màn chọn võ sĩ.
- Lối đánh nhanh: đòn nhẹ **nối liên hoàn** (nhẹ → nhẹ → mạnh → chiêu), huỷ đòn thường vào chiêu, huỷ chiêu vào tuyệt chiêu, **bấm đúp → để chạy, ← ← để lùi nhanh** (né đòn), chạm nhẹ ↑ để nhảy thấp, bộ đệm phím 6 khung (bấm sớm vẫn ra đòn).
- Hình ảnh kiểu arcade: đồ hoạ **pixel** (bật/tắt), hiệu ứng **màn hình CRT**, máy quay phóng to bám theo 2 võ sĩ, màn **VS** trước trận, cắt cảnh khi tung tuyệt chiêu, thanh máu xiên có mặt nhân vật, đếm combo, câu thoại khi thắng. 3 sàn đấu: Phố Cổ Về Đêm, Chợ Nổi Cái Răng, Đỉnh Núi Mây.
- Phòng 10 người: **2 võ sĩ** đấu, còn lại xem (thấy trận y hệt), chat, voice, thả cảm xúc. Người xem bấm **Xếp hàng lên đấu**; tuỳ chọn "thắng ở lại, thua xuống xếp hàng". Luật: thắng 1/2/3 hiệp, 60/99 giây hoặc không giới hạn, chọn sàn đấu.
- Phím: `A D` / `← →` đi, `W` nhảy, `S` ngồi, giữ lùi để đỡ. `J` đấm nhẹ, `U` đấm mạnh, `K` đá nhẹ, `I` đá mạnh. Lệnh chiêu kiểu cổ điển (↓↘→ + Đấm…) hoặc phím tắt `1 2 3`, `Space` = tuyệt chiêu. Áp sát + → + `U` = quật ngã. Điện thoại có cần điều khiển + nút cảm ứng; tay cầm (gamepad) cũng chơi được.
- Mạng: mỗi máy võ sĩ tự mô phỏng (tất định, số nguyên) và gửi phím bấm cho nhau; tín hiệu đối thủ tới trễ thì máy **đoán trước rồi tua lại** (rollback) nên vẫn mượt. Người xem vào giữa trận nhận ảnh chụp trận đấu rồi chạy tiếp.
- Có nút **Tập với máy**. Code ở `src/fight/` (sim.js luật & va chạm, netplay.js đồng bộ, render.js vẽ, chars.js nhân vật, cpu.js máy đánh).

## Rắn Săn Mồi (tới 10 rắn)

- Tới 10 người (thêm rắn máy 0–6 con) chung một cánh đồng lưới 64×40. Mũi tên/`WASD` để rẽ (điện thoại: vuốt trên sân), giữ `Space`/`J` để tăng tốc (tốn bớt đuôi).
- Ăn 🍎 +1, 🥖 +3, 🐸 ếch nhảy lung tung +5. Đầu đâm vào rào hay thân rắn khác (kể cả thân mình) là chết, thân rơi ra thành mồi. Đối đầu trực diện: con dài hơn thắng, bằng nhau cùng chết.
- **Tính giờ** (2/3/5 phút): chết 3 giây hồi sinh, hạ gục +10 điểm, hết giờ nhiều điểm nhất thắng. **Sinh tồn**: không hồi sinh, sau 45 giây rào khép dần, con cuối cùng thắng.
- Phòng tối đa 16 người. Code ở `src/ransan/`.

## Thủ Thành Làng (1–4 người cùng phe)

- Quái (vẽ tay, có hoạt hình): 🐀 chuột đồng, 🐗 heo rừng, 🐃 trâu điên, 🐢 rùa giáp (giáp trừ sát thương mỗi phát), 🐦‍⬛ quạ đen và 🐝 ong vò vẽ (bay), trùm 👹 Chằn Tinh (đợt 10, 20, 30) và 🐉 Thuồng Luồng (tự hồi máu, đợt 15, 25). Lọt cổng là làng mất máu, hết 20 máu là thua.
- 9 vũ khí, mỗi loại 4 cấp, mỗi lần nâng mở một tính năng:
  - Chòi cung: tên đôi → tên lửa (đốt) → mưa tên · Súng máy: xuyên giáp → băng đạn lớn → chí mạng
  - Máy bắn đá: đá tảng → đá choáng → mưa đá · Đại bác: đạn cháy → nòng dài → pháo kép phòng không
  - Ao bùn: bùn sâu → đỉa → đầm lầy · Máy phun băng: lạnh buốt → đóng băng → bão tuyết
  - Pháo tre: pháo đại → pháo hoa (choáng) → pháo dây · Cột điện: dây đồng → giật tê → sấm sét (nảy 6 con)
  - Tia laze: hội tụ (chiếu lâu nóng gấp 3) → tia đôi → tia tử thần; luôn xuyên giáp
- **Gỡ vũ khí** (chỉ người lắp): hoàn 50% giá lắp ban đầu. Ai cũng nâng cấp được vũ khí của đồng đội.
- Vàng từ mỗi con quái chia đều cho cả phe; nút 🎁 tặng 50 vàng; gọi quái sớm được thưởng vàng.
- 8 bản đồ: Đường Làng, Ngã Ba Sông (2 lối), Vòng Xoáy, Ruộng Bậc Thang, Bãi Biển (2 lối), Rừng Tre 3 Lối, Đồi Chè (quái đi từ phải sang), Núi Đá (nhiều đá chắn). 10/20/30 đợt, 3 độ khó; máu quái tăng theo số người chơi, giảm nhẹ ở bản đồ nhiều lối.
- Code ở `src/thuthanh/` (`data.js` dữ liệu, `logic.js` mô phỏng, `art.js` hình vẽ, `view.js` giao diện).

## Đá Gà Pixel (1–8 gà)

- Mỗi người ngồi ghế điều khiển một con gà pixel (8 giống gà màu khác nhau); thiếu người thì thêm **gà máy** (0–4 con, chơi 1 mình luôn có gà máy).
- `WASD`/mũi tên đi, `J`/`Space` **húc** (lao tới, trúng là đối thủ văng đi + choáng), `K` **nhảy** (né cú húc; đáp xuống đầu gà khác thì dẫm choáng). Điện thoại có cần điều khiển + nút Húc/Nhảy.
- Văng khỏi vòng rơm là rơi xuống ao bùn. Sau ~10 giây sàn co dần. Con trụ lại cuối cùng thắng hiệp; thắng đủ 1/2/3 hiệp là vô địch.
- Vật phẩm: 🌽 bắp (3 cú húc cực mạnh), 🌶️ ớt (chạy nhanh), 🍌 vỏ chuối (dẫm phải trượt dài).
- Chủ phòng chạy mô phỏng 60 khung/giây và gửi vị trí cho mọi người ~30 lần/giây; mỗi người gửi phím của mình lên. Code ở `src/daga/`.

## Kéo Co Gõ Phím (Đỏ vs Xanh)

- Ghế 1–4 là đội Đỏ, ghế 5–8 là đội Xanh (tới 4 đấu 4). Đội trống thì có người máy (yếu/vừa/khoẻ) vào kéo.
- **Gõ chữ**: gõ đúng chữ hiện ra (có dấu hay không dấu đều được) là kéo dây; chữ dài kéo mạnh hơn, gõ liền mạch không sai thì chuỗi 🔥 tăng lực. **Bấm nhanh**: bấm nút KÉO / Space liên tục.
- Nhịp "Hò... DÔ!" mỗi 4 giây: kéo đúng lúc DÔ được gấp đôi. Dải lụa qua vạch trắng là thắng; hết giờ thì đội đang dẫn thắng. Có tuỳ chọn cân sức khi hai đội lệch người.
- Người xem bấm **Cổ vũ Đỏ/Xanh** — mỗi lần kéo giúp một chút xíu. Code ở `src/keoco/`.

## Xây Tháp Lắc Lư (1–4 người)

- Thay phiên thả đồ vật lên bè tre đang dập dềnh trên sông: gạch, thùng gỗ, bánh chưng, đốt tre, mâm đồng, bao gạo, ghế đẩu, chum, nón lá, dưa hấu...
- Mỗi lượt dời trái/phải (`A/D`, mũi tên, kéo chuột/ngón tay trên hình), xoay 15° (`Q/E`, `↑`), thả (`Space`). Có giới hạn thời gian mỗi lượt.
- Món nào rơi xuống sông là tháp sập: người thả món cuối thua, những người còn lại thắng. Tháp càng cao sóng càng lắc. Có thể thêm thợ máy; chơi 1 mình để thử kỷ lục.
- Vật lý thật bằng thư viện planck.js (Box2D), chỉ chạy trên máy chủ phòng rồi gửi vị trí các món cho mọi người. Code ở `src/xaythap/`.
- Ba game trên dùng chung phòng bàn chơi (`src/table/`) có thêm kênh thời gian thực (`step`/`live` trong `src/table/engine.js`).

## Đua Xe Đường Làng (2 người đua)

- Góc nhìn sau lưng xe, lao thẳng về phía trước (giả 3D kiểu thùng game), đường chạy qua các làng (Đông Hồ, Bát Tràng, Vạn Phúc...). 6 loại xe: Cúp 50, Vespa Cổ, Dream Lùn, Xe Lam, Xe Đạp Điện, Công Nông — khác nhau về tốc độ, tăng tốc, lạng lách, sức húc.
- Xe tự chạy; `A/D` hoặc `←/→` bẻ lái, giữ `W/↑` chạy hết ga, `S/↓` phanh, `J` **húc ngang** (đẩy đối thủ văng sang bên — vào chướng ngại là nó thua), `K`/`Space` nitro khi đầy. Điện thoại có cần lái + nút Ga/Húc/Nitro (kéo cần xuống để phanh).
- Chướng ngại: cọc, đống rơm, xe ba gác, trâu đi qua đi lại, đá (đâm = thua hiệp), vũng dầu (xoay xe), bùn (chậm), mũi tên vàng (tăng tốc). Bị đối thủ bỏ xa hơn 160 m cũng bị loại. Người bị loại trước thì dừng; người còn lại chưa thắng ngay mà chạy tiếp một mình tới khi cũng đâm (máy quay chuyển sang theo xe đó) — ai trụ lâu hơn hoặc về đích trước thắng hiệp. Đường có đích (1,2 / 2,4 km) hoặc không có đích (ai trụ lâu hơn).
- Phòng 10 người: 2 tay đua, còn lại xem và xếp hàng; thắng ở lại, thua xuống. Dùng chung cơ chế mạng rollback với Quyền Cước. Code ở `src/race/`.

## Vỗ Cánh Sinh Tồn

- Tối đa **16 người** cùng bay trên một bầu trời. Chủ phòng bấm **Cất cánh** → đếm ngược 3 giây → bay. Chạm màn hình hoặc bấm **Space / ↑ / W** để vỗ cánh.
- Đụng cột hoặc rơi xuống đất là thua. **Chú chim trụ lại cuối cùng thắng** — khi chỉ còn 1 chim, ván chưa kết thúc mà chim đó bay tiếp tới khi rơi (để nâng kỷ lục cột). Bay 1 mình = chế độ tập.
- Càng bay càng nhanh, khe càng hẹp, nên ván nào cũng có hồi kết. 3 độ khó: Thong thả / Vừa / Khó.
- Mọi máy dùng chung một "hạt giống" nên thấy y hệt các cột; mỗi người tự điều khiển chim của mình và gửi vị trí cho mọi người xem (chim người khác hiện mờ kèm tên — khi mình đang bay thì càng mờ và nhỏ hơn để dễ tập trung vào chim của mình).
- Ai ẩn tab / mất mạng quá 4 giây khi đang bay sẽ bị coi là rơi, để ván không bị treo.

## Hồ sơ chung + số người online

- Lần đầu mở trang (bất kỳ trang nào), web hỏi tên + avatar một lần. Vào game nào cũng dùng luôn; đổi ở chip tên góc phải hoặc nút ✏️ Đổi trong form vào phòng.
- Góc phải có chip **🟢 N online**: đếm mọi người đang mở Sân Chơi (mọi trang, mọi game). Bấm vào để xem ai đang online và đang ở game nào. Cách đếm: mọi người cùng vào một "phòng" P2P chung, nên phù hợp nhóm nhỏ (vài chục người); nhiều người hơn sẽ nặng máy.
- Thử nhiều người trên một máy: thêm `?local=1&as=Tên` vào link mỗi tab.

## Deploy lên GitHub Pages

1. Tạo repo **public** mới trên GitHub.
2. Bấm **Add file → Upload files**, kéo toàn bộ nội dung thư mục này vào (cả thư mục `assets/` và `data/`), rồi bấm **Commit changes**.
3. Vào **Settings → Pages**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi **Save**.
4. Khoảng 1 phút sau, trang có ở `https://<tên-bạn>.github.io/<tên-repo>/`.

**Cách nhanh bằng Terminal (không lưu token):** chạy `sh deploy-github.sh`. Script chỉ đặt tên/email git riêng cho thư mục này, tắt việc ghi nhớ mật khẩu, rồi push lên `loenchay/games.github.io`. Khi được hỏi Password, dán Personal Access Token; token không được lưu lại trên máy và không ảnh hưởng tài khoản GitLab công ty.

**Domain riêng:** vào **Settings → Pages → Custom domain**. Với subdomain thì trỏ bản ghi `CNAME` về `<tên-bạn>.github.io`. Với domain gốc thì thêm 4 bản ghi `A` trỏ về `185.199.108.153`, `185.199.109.153`, `185.199.110.153` và `185.199.111.153`. Khi DNS đã nhận, tick **Enforce HTTPS**.

### Lưu ý khi chạy trên GitHub Pages

- **Không cần backend:** toàn bộ là file tĩnh, đường dẫn đều là đường dẫn tương đối nên đặt ở `username.github.io/<repo>/` hay domain riêng đều chạy.
- **Micro chỉ chạy trên HTTPS.** GitHub Pages có sẵn HTTPS; nếu dùng domain riêng thì nhớ tick **Enforce HTTPS**.
- **Kho đề lấy từ máy chủ phòng.** Trên GitHub Pages mọi người tải cùng một file `data/dienta-data.js`. Muốn sửa đề thì sửa file trong repo; GitHub có thể cache khoảng 10 phút.
- **Tên file phân biệt hoa/thường** trên GitHub Pages, khác với máy Mac. Đừng đổi tên `assets/`, `data/` hay các file bên trong.
- **Dữ liệu lưu trong trình duyệt** (tên, avatar, phím tắt, tổ hợp, giao diện) gắn theo từng tên miền. Chuyển từ mở file trên máy sang link GitHub Pages thì phải chọn lại.
- **Emoji hiển thị theo máy.** Một vài emoji mới (ví dụ lược 🪮) có thể hiện thành ô vuông trên Windows hoặc Android cũ.

## TURN server (nên có khi chơi thật)

Người dùng 4G hoặc mạng công ty thường cần TURN server mới kết nối được. Đăng ký gói miễn phí ở [Metered](https://www.metered.ca/stun-turn) hoặc Cloudflare, điền thông tin vào file `site-config.js` ở thư mục gốc (không cần build lại).

## Cấu trúc & sửa code

```
index.html  masoi.html  dienta.html   các trang
style.css                              toàn bộ giao diện
data/dienta-data.js                    kho đề Diễn Tả (sửa trực tiếp, không cần build)
assets/*.js                            code đã đóng gói (trình duyệt chạy các file này)
src/                                   mã nguồn
  common.js  net.js  voice.js  config.js  roles.js  theme.js  trystero.js
  catalog.js                           trang danh sách game (thêm game mới vào GAMES)
  masoi.js  engine.js                  Ma Sói
  dienta/engine.js  puppet.js (2D + bảng tư thế)  puppet3d.js (nhân vật 3D)  chars.js (danh sách nhân vật)
         stage3d.js (sân khấu)  tips.js (mẹo diễn)  keys.js  main.js   Diễn Tả
  nhanvat.js       Tủ đồ nhân vật
  nhai/engine.js  score.js (chấm điểm)  audio.js (phát/thu)  main.js   Nhại Như Thật
  caro/engine.js  main.js   Cờ Caro
  bay/world.js (vật lý, cột)  engine.js  main.js   Vỗ Cánh Sinh Tồn
  duel/chess.js xiangqi.js engine.js room.js boards.js   Cờ Vua + Cờ Tướng (dùng chung)
  covua/main.js  cotuong/main.js   điểm vào của 2 game cờ
  table/engine.js room.js   khung phòng nhiều người (ghế, lượt, giờ, giấu bài)
  motla/  cangua/  typhu/   logic.js (luật) + view.js (giao diện) + main.js
  site.js          Hồ sơ chung + đếm online
build.sh                               đóng gói src/ → assets/
```

- **Sửa trong `src/`:** cần cài Node.js rồi chạy `sh build.sh` để cập nhật `assets/` (lần đầu sẽ tự `npm install` esbuild và three).
- **Sửa `style.css` hoặc `data/`:** không cần build.

## Giới hạn

- **Chủ phòng giữ ván.** Nếu chủ phòng thoát hẳn thì ván dừng; nếu chỉ F5 thì ván được khôi phục.
- **Voice dạng mesh** chạy tốt với khoảng 8–10 người.
- **Bấm chuông:** ai mạng nhanh hơn sẽ có lợi vài chục mili-giây.
