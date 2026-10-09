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

## Vỗ Cánh Sinh Tồn

- Tối đa **16 người** cùng bay trên một bầu trời. Chủ phòng bấm **Cất cánh** → đếm ngược 3 giây → bay. Chạm màn hình hoặc bấm **Space / ↑ / W** để vỗ cánh.
- Đụng cột hoặc rơi xuống đất là thua. **Chú chim trụ lại cuối cùng thắng** (nếu cùng rơi thì ai rơi sau thắng). Bay 1 mình = chế độ tập.
- Càng bay càng nhanh, khe càng hẹp, nên ván nào cũng có hồi kết. 3 độ khó: Thong thả / Vừa / Khó.
- Mọi máy dùng chung một "hạt giống" nên thấy y hệt các cột; mỗi người tự điều khiển chim của mình và gửi vị trí cho mọi người xem (chim người khác hiện mờ kèm tên).
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
  site.js          Hồ sơ chung + đếm online
build.sh                               đóng gói src/ → assets/
```

- **Sửa trong `src/`:** cần cài Node.js rồi chạy `sh build.sh` để cập nhật `assets/` (lần đầu sẽ tự `npm install` esbuild và three).
- **Sửa `style.css` hoặc `data/`:** không cần build.

## Giới hạn

- **Chủ phòng giữ ván.** Nếu chủ phòng thoát hẳn thì ván dừng; nếu chỉ F5 thì ván được khôi phục.
- **Voice dạng mesh** chạy tốt với khoảng 8–10 người.
- **Bấm chuông:** ai mạng nhanh hơn sẽ có lợi vài chục mili-giây.
