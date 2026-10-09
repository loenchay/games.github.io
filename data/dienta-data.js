// ============================================================
//  KHO ĐỀ cho game "Diễn Tả Hình Hài"
// ============================================================
//  File này là JSON bọc trong window.DIENTA_DATA = ... ;
//  (bọc như vậy để mở index.html trực tiếp từ ổ đĩa vẫn đọc được).
//
//  Mỗi đề gồm:
//    id        mã riêng, không trùng (chữ thường, không dấu, gạch nối)
//    name      tên đề hiển thị cho người diễn (nên tối đa 3 từ)
//    image     emoji (VD "🐔") HOẶC đường dẫn ảnh (VD "images/con-ga.png" hoặc https://...)
//    answer    danh sách đáp án được chấp nhận. Máy chấm KHÔNG phân biệt dấu,
//              hoa/thường: gõ "con ga" vẫn đúng với "con gà".
//    points    điểm gốc (gợi ý: 10 dễ · 20 vừa · 30 khó)
//    category  nhóm đề (chủ phòng bật/tắt được, và hiện cho người đoán làm gợi ý)
//    hint      (không bắt buộc) gợi ý chữ, hiện ra khi đã qua ~35% thời gian diễn
//    acting    (không bắt buộc) mẹo diễn, CHỈ người diễn thấy (VD "bò 4 chân + tai chó")
//    multipliers (không bắt buộc) danh sách số nhân riêng cho đề này, VD [1, 2]
//
//  Gợi ý tự động: qua 35% thời gian hiện số chữ (_ _ _), qua 65% hiện chữ cái đầu.
//  multipliers  bảng tỉ lệ số nhân ngẫu nhiên mỗi lượt (weight càng lớn càng hay ra)
//  actorShare   người diễn nhận thêm (điểm × số nhân × actorShare) khi có người đoán đúng
//
//  Điểm người đoán đúng = points × số nhân.
//  Thêm đề: copy một dòng trong "items", sửa nội dung, nhớ dấu phẩy giữa các dòng.
// ============================================================
window.DIENTA_DATA = {
  "version": 3,
  "multipliers": [
    {"value": 1, "weight": 55},
    {"value": 2, "weight": 30},
    {"value": 3, "weight": 12},
    {"value": 5, "weight": 3}
  ],
  "actorShare": 0.5,
  "items": [
    {"id": "con-cho", "name": "Con chó", "image": "🐶", "answer": ["con chó", "chó", "cún", "con cún"], "points": 10, "category": "Con vật", "hint": "Bạn thân của con người", "acting": "bò 4 chân + tai chó + đuôi + xương"},
    {"id": "con-meo", "name": "Con mèo", "image": "🐱", "answer": ["con mèo", "mèo"], "points": 10, "category": "Con vật", "hint": "Thích bắt chuột", "acting": "bò 4 chân + tai mèo + đuôi mèo"},
    {"id": "con-tho", "name": "Con thỏ", "image": "🐰", "answer": ["con thỏ", "thỏ"], "points": 10, "category": "Con vật", "hint": "Thích cà rốt", "acting": "tai thỏ + cà rốt + bật nhảy"},
    {"id": "con-ga", "name": "Con gà", "image": "🐔", "answer": ["con gà", "gà", "gà trống", "gà mái"], "points": 10, "category": "Con vật", "hint": "Gáy buổi sáng", "acting": "ngồi xổm + vỗ cánh"},
    {"id": "con-khi", "name": "Con khỉ", "image": "🐒", "answer": ["con khỉ", "khỉ"], "points": 10, "category": "Con vật", "hint": "Thích ăn chuối", "acting": "chuối + ôm đầu + nhún nhảy"},
    {"id": "con-bo", "name": "Con bò", "image": "🐄", "answer": ["con bò", "bò"], "points": 10, "category": "Con vật", "hint": "Cho sữa", "acting": "bò 4 chân + sừng + đuôi"},
    {"id": "con-heo", "name": "Con heo", "image": "🐷", "answer": ["con heo", "heo", "lợn", "con lợn"], "points": 20, "category": "Con vật", "hint": "Ủn ỉn", "acting": "bò 4 chân + đuôi heo xoắn"},
    {"id": "con-ech", "name": "Con ếch", "image": "🐸", "answer": ["con ếch", "ếch", "nhái"], "points": 20, "category": "Con vật", "hint": "Kêu ộp ộp", "acting": "ngồi xổm + bật nhảy"},
    {"id": "con-chuot", "name": "Con chuột", "image": "🐭", "answer": ["con chuột", "chuột"], "points": 20, "category": "Con vật", "hint": "Sợ mèo", "acting": "tai chuột + bò + run rẩy"},
    {"id": "con-vit", "name": "Con vịt", "image": "🦆", "answer": ["con vịt", "vịt"], "points": 20, "category": "Con vật", "hint": "Kêu cạp cạp", "acting": "chống hông 2 tay + đi bộ + lắc mông"},
    {"id": "chim-canh-cut", "name": "Chim cánh cụt", "image": "🐧", "answer": ["chim cánh cụt", "cánh cụt"], "points": 20, "category": "Con vật", "hint": "Sống ở Nam Cực", "acting": "tay hạ dang nhẹ + đi bộ + lắc mông"},
    {"id": "con-cua", "name": "Con cua", "image": "🦀", "answer": ["con cua", "cua"], "points": 20, "category": "Con vật", "hint": "Đi ngang", "acting": "ngồi xổm + khoe cơ 2 tay + lắc"},
    {"id": "chuot-tui", "name": "Chuột túi", "image": "🦘", "answer": ["chuột túi", "kangaroo", "con chuột túi"], "points": 20, "category": "Con vật", "hint": "Nước Úc", "acting": "co 2 tay + nhún nhảy + đuôi khủng long"},
    {"id": "con-buom", "name": "Con bướm", "image": "🦋", "answer": ["con bướm", "bướm"], "points": 20, "category": "Con vật", "hint": "Bay quanh vườn hoa", "acting": "râu côn trùng + vỗ cánh"},
    {"id": "con-ong", "name": "Con ong", "image": "🐝", "answer": ["con ong", "ong"], "points": 20, "category": "Con vật", "hint": "Làm ra mật", "acting": "râu côn trùng + vỗ cánh + run rẩy"},
    {"id": "su-tu", "name": "Sư tử", "image": "🦁", "answer": ["sư tử", "con sư tử"], "points": 20, "category": "Con vật", "hint": "Chúa sơn lâm", "acting": "bò 4 chân + mặt giận"},
    {"id": "khi-dot", "name": "Khỉ đột", "image": "🦍", "answer": ["khỉ đột", "con khỉ đột", "gorilla"], "points": 20, "category": "Con vật", "hint": "To lớn, đấm ngực", "acting": "khoe cơ + đấm + mặt giận"},
    {"id": "hong-hac", "name": "Hồng hạc", "image": "🦩", "answer": ["hồng hạc", "chim hồng hạc"], "points": 20, "category": "Con vật", "hint": "Đứng một chân", "acting": "co gối 1 chân + tay dang"},
    {"id": "con-ca", "name": "Con cá", "image": "🐟", "answer": ["con cá", "cá"], "points": 20, "category": "Con vật", "hint": "Sống dưới nước", "acting": "bơi + mặt ngạc nhiên"},
    {"id": "con-voi", "name": "Con voi", "image": "🐘", "answer": ["con voi", "voi"], "points": 30, "category": "Con vật", "hint": "Có vòi dài", "acting": "1 tay đưa lên miệng làm vòi + đi chậm"},
    {"id": "huou-cao-co", "name": "Hươu cao cổ", "image": "🦒", "answer": ["hươu cao cổ", "con hươu", "hươu"], "points": 30, "category": "Con vật", "hint": "Cổ rất dài", "acting": "2 tay giơ cao + ngước lên"},
    {"id": "con-ran", "name": "Con rắn", "image": "🐍", "answer": ["con rắn", "rắn"], "points": 30, "category": "Con vật", "hint": "Bò trườn, kêu xì xì", "acting": "nằm + nhảy múa uốn éo"},
    {"id": "ca-sau", "name": "Cá sấu", "image": "🐊", "answer": ["cá sấu", "con cá sấu"], "points": 30, "category": "Con vật", "hint": "Hàm to, sống ở đầm lầy", "acting": "nằm/bò + vỗ tay (hàm) + đuôi khủng long"},
    {"id": "oc-sen", "name": "Ốc sên", "image": "🐌", "answer": ["ốc sên", "con ốc sên"], "points": 30, "category": "Con vật", "hint": "Rất chậm", "acting": "bò 4 chân + râu côn trùng"},
    {"id": "bach-tuoc", "name": "Bạch tuộc", "image": "🐙", "answer": ["bạch tuộc", "con bạch tuộc"], "points": 30, "category": "Con vật", "hint": "Có 8 xúc tu", "acting": "nhảy múa + bơi"},
    {"id": "khung-long", "name": "Khủng long", "image": "🦖", "answer": ["khủng long", "con khủng long"], "points": 30, "category": "Con vật", "hint": "Thời tiền sử", "acting": "đuôi khủng long + khoe cơ + mặt giận"},
    {"id": "chay-bo", "name": "Chạy bộ", "image": "🏃", "answer": ["chạy bộ", "chạy"], "points": 10, "category": "Hành động", "acting": "chạy"},
    {"id": "di-ngu", "name": "Đi ngủ", "image": "😴", "answer": ["đi ngủ", "ngủ"], "points": 10, "category": "Hành động", "acting": "nằm + mặt ngủ"},
    {"id": "vay-tay", "name": "Vẫy tay", "image": "👋", "answer": ["vẫy tay", "chào", "chào hỏi"], "points": 10, "category": "Hành động", "acting": "vẫy"},
    {"id": "vo-tay", "name": "Vỗ tay", "image": "👏", "answer": ["vỗ tay"], "points": 10, "category": "Hành động", "acting": "vỗ tay"},
    {"id": "nhay-mua", "name": "Nhảy múa", "image": "💃", "answer": ["nhảy múa", "múa", "khiêu vũ", "nhảy"], "points": 10, "category": "Hành động", "acting": "nhảy múa"},
    {"id": "an-mi", "name": "Ăn mì", "image": "🍜", "answer": ["ăn mì", "ăn phở", "ăn bún", "ăn"], "points": 10, "category": "Hành động", "acting": "ngồi + đũa + tô"},
    {"id": "danh-rang", "name": "Đánh răng", "image": "🪥", "answer": ["đánh răng"], "points": 10, "category": "Hành động", "hint": "Mỗi sáng và tối", "acting": "bàn chải + đưa lên miệng"},
    {"id": "chup-anh", "name": "Chụp ảnh", "image": "📸", "answer": ["chụp ảnh", "chụp hình"], "points": 10, "category": "Hành động", "acting": "máy ảnh"},
    {"id": "goi-dien", "name": "Gọi điện", "image": "📞", "answer": ["gọi điện", "gọi điện thoại", "nghe điện thoại"], "points": 10, "category": "Hành động", "acting": "điện thoại + ôm đầu"},
    {"id": "hat-karaoke", "name": "Hát karaoke", "image": "🎤", "answer": ["hát karaoke", "hát", "karaoke", "ca hát"], "points": 10, "category": "Hành động", "acting": "micro + nhảy múa"},
    {"id": "quet-nha", "name": "Quét nhà", "image": "🧹", "answer": ["quét nhà", "quét"], "points": 10, "category": "Hành động", "hint": "Việc nhà", "acting": "chổi + chèo"},
    {"id": "cui-chao", "name": "Cúi chào", "image": "🙇", "answer": ["cúi chào", "cúi đầu"], "points": 20, "category": "Hành động", "hint": "Lịch sự", "acting": "cúi người"},
    {"id": "ngoi-thien", "name": "Ngồi thiền", "image": "🧘", "answer": ["ngồi thiền", "thiền", "yoga"], "points": 20, "category": "Hành động", "hint": "Tĩnh tâm", "acting": "ngồi xếp bằng + mặt ngủ"},
    {"id": "ngap", "name": "Ngáp", "image": "🥱", "answer": ["ngáp", "buồn ngủ"], "points": 20, "category": "Hành động", "acting": "đưa tay lên miệng + mặt ngạc nhiên"},
    {"id": "hat-xi", "name": "Hắt xì", "image": "🤧", "answer": ["hắt xì", "hắt hơi"], "points": 20, "category": "Hành động", "hint": "Bị cảm", "acting": "khăn giấy + nhún nhảy"},
    {"id": "nhao-lon", "name": "Nhào lộn", "image": "🤸", "answer": ["nhào lộn", "lộn nhào"], "points": 20, "category": "Hành động", "acting": "trồng cây chuối + xoay vòng"},
    {"id": "tu-suong", "name": "Tự sướng", "image": "🤳", "answer": ["tự sướng", "selfie", "chụp tự sướng"], "points": 20, "category": "Hành động", "hint": "Đăng mạng xã hội", "acting": "điện thoại + giơ cao + mặt lè lưỡi"},
    {"id": "thay-ma", "name": "Thây ma", "image": "🧟", "answer": ["thây ma", "zombie", "xác sống"], "points": 20, "category": "Hành động", "hint": "Phim kinh dị", "acting": "2 tay chỉ + đi bộ + mặt sợ"},
    {"id": "chong-mat", "name": "Chóng mặt", "image": "😵", "answer": ["chóng mặt", "say xe"], "points": 20, "category": "Hành động", "acting": "xoay vòng + run rẩy"},
    {"id": "nguoi-may", "name": "Người máy", "image": "🤖", "answer": ["người máy", "robot"], "points": 20, "category": "Hành động", "hint": "Chạy bằng pin", "acting": "khoe cơ + đi bộ"},
    {"id": "leo-nui", "name": "Leo núi", "image": "🧗", "answer": ["leo núi", "leo"], "points": 30, "category": "Hành động", "acting": "tay giơ cao xen kẽ + co gối"},
    {"id": "nhay-du", "name": "Nhảy dù", "image": "🪂", "answer": ["nhảy dù"], "points": 30, "category": "Hành động", "hint": "Từ máy bay xuống", "acting": "2 tay giơ cao + run rẩy"},
    {"id": "ninja", "name": "Ninja", "image": "🥷", "answer": ["ninja"], "points": 30, "category": "Hành động", "hint": "Nhật Bản", "acting": "đấm + đá + ngồi xổm"},
    {"id": "da-bong", "name": "Đá bóng", "image": "⚽", "answer": ["đá bóng", "bóng đá", "đá banh"], "points": 10, "category": "Thể thao", "acting": "quả bóng + đá"},
    {"id": "boi-loi", "name": "Bơi lội", "image": "🏊", "answer": ["bơi lội", "bơi"], "points": 10, "category": "Thể thao", "acting": "bơi"},
    {"id": "dam-boc", "name": "Đấm bốc", "image": "🥊", "answer": ["đấm bốc", "boxing", "quyền anh"], "points": 10, "category": "Thể thao", "acting": "đấm + mặt giận"},
    {"id": "dap-xe", "name": "Đạp xe", "image": "🚴", "answer": ["đạp xe", "đi xe đạp"], "points": 20, "category": "Thể thao", "acting": "ngồi ghế + chạy"},
    {"id": "bong-ro", "name": "Bóng rổ", "image": "🏀", "answer": ["bóng rổ", "ném rổ"], "points": 20, "category": "Thể thao", "hint": "Ném vào rổ", "acting": "quả bóng + giơ cao + bật nhảy"},
    {"id": "cau-long", "name": "Cầu lông", "image": "🏸", "answer": ["cầu lông", "đánh cầu lông"], "points": 20, "category": "Thể thao", "acting": "vợt + giơ cao"},
    {"id": "cu-ta", "name": "Cử tạ", "image": "🏋️", "answer": ["cử tạ", "nâng tạ", "tập tạ"], "points": 20, "category": "Thể thao", "acting": "2 tay giơ cao + ngồi xổm + run rẩy"},
    {"id": "vo-thuat", "name": "Võ thuật", "image": "🥋", "answer": ["võ thuật", "karate", "đánh võ", "võ"], "points": 20, "category": "Thể thao", "acting": "đấm + đá"},
    {"id": "dau-kiem", "name": "Đấu kiếm", "image": "🤺", "answer": ["đấu kiếm"], "points": 20, "category": "Thể thao", "acting": "kiếm + chỉ"},
    {"id": "cheo-thuyen", "name": "Chèo thuyền", "image": "🛶", "answer": ["chèo thuyền", "đua thuyền"], "points": 20, "category": "Thể thao", "hint": "Trên sông", "acting": "ngồi ghế + chèo"},
    {"id": "bong-ban", "name": "Bóng bàn", "image": "🏓", "answer": ["bóng bàn", "ping pong"], "points": 30, "category": "Thể thao", "hint": "Cái bàn nhỏ", "acting": "vợt + nghiêng người"},
    {"id": "danh-golf", "name": "Đánh golf", "image": "⛳", "answer": ["đánh golf", "golf"], "points": 30, "category": "Thể thao", "hint": "Đánh vào lỗ", "acting": "cúi người + chèo"},
    {"id": "bong-chuyen", "name": "Bóng chuyền", "image": "🏐", "answer": ["bóng chuyền"], "points": 30, "category": "Thể thao", "hint": "Có lưới ở giữa", "acting": "2 tay chéo lên + bật nhảy"},
    {"id": "luot-song", "name": "Lướt sóng", "image": "🏄", "answer": ["lướt sóng"], "points": 30, "category": "Thể thao", "hint": "Biển", "acting": "ngồi xổm + dang tay + nghiêng"},
    {"id": "truot-tuyet", "name": "Trượt tuyết", "image": "⛷️", "answer": ["trượt tuyết"], "points": 30, "category": "Thể thao", "hint": "Trời lạnh", "acting": "ngồi xổm + 2 tay chỉ + run rẩy"},
    {"id": "ban-cung", "name": "Bắn cung", "image": "🏹", "answer": ["bắn cung"], "points": 30, "category": "Thể thao", "acting": "dang tay + chỉ"},
    {"id": "dau-vat", "name": "Đấu vật", "image": "🤼", "answer": ["đấu vật", "vật"], "points": 30, "category": "Thể thao", "acting": "ngồi xổm + 2 tay dang + nhún"},
    {"id": "dau-bep", "name": "Đầu bếp", "image": "👨‍🍳", "answer": ["đầu bếp", "nấu ăn", "nấu bếp"], "points": 10, "category": "Nghề nghiệp", "hint": "Trong nhà bếp", "acting": "chảo + chèo"},
    {"id": "bac-si", "name": "Bác sĩ", "image": "👨‍⚕️", "answer": ["bác sĩ"], "points": 10, "category": "Nghề nghiệp", "hint": "Bệnh viện", "acting": "ống nghe"},
    {"id": "tho-cat-toc", "name": "Thợ cắt tóc", "image": "💇", "answer": ["thợ cắt tóc", "cắt tóc"], "points": 10, "category": "Nghề nghiệp", "hint": "Làm đẹp cho mái đầu", "acting": "kéo + lược + ôm đầu"},
    {"id": "canh-sat", "name": "Cảnh sát", "image": "👮", "answer": ["cảnh sát", "công an"], "points": 20, "category": "Nghề nghiệp", "hint": "Bắt kẻ xấu", "acting": "1 tay giơ ra hiệu dừng + mặt giận"},
    {"id": "giao-vien", "name": "Giáo viên", "image": "👨‍🏫", "answer": ["giáo viên", "thầy giáo", "cô giáo"], "points": 20, "category": "Nghề nghiệp", "hint": "Đứng lớp", "acting": "thước + chỉ + sách"},
    {"id": "linh-cuu-hoa", "name": "Lính cứu hỏa", "image": "👨‍🚒", "answer": ["lính cứu hỏa", "cứu hỏa"], "points": 20, "category": "Nghề nghiệp", "hint": "Dập lửa", "acting": "bình chữa cháy + chạy"},
    {"id": "tho-xay", "name": "Thợ xây", "image": "👷", "answer": ["thợ xây", "công nhân"], "points": 20, "category": "Nghề nghiệp", "hint": "Công trường", "acting": "búa + ngồi xổm"},
    {"id": "nong-dan", "name": "Nông dân", "image": "👨‍🌾", "answer": ["nông dân", "làm ruộng"], "points": 20, "category": "Nghề nghiệp", "hint": "Ruộng lúa", "acting": "cúi người + đi bộ"},
    {"id": "cau-ca", "name": "Câu cá", "image": "🎣", "answer": ["câu cá", "ngư dân", "đi câu"], "points": 20, "category": "Nghề nghiệp", "hint": "Bờ sông, hồ", "acting": "cần câu + ngồi ghế + mặt ngủ"},
    {"id": "tham-tu", "name": "Thám tử", "image": "🕵️", "answer": ["thám tử"], "points": 20, "category": "Nghề nghiệp", "hint": "Phá án", "acting": "kính lúp + cúi người"},
    {"id": "phu-thuy", "name": "Phù thủy", "image": "🧙", "answer": ["phù thủy", "pháp sư"], "points": 20, "category": "Nghề nghiệp", "hint": "Phép thuật", "acting": "đũa phép + xoay vòng"},
    {"id": "keo-dan", "name": "Kéo đàn", "image": "🎻", "answer": ["kéo đàn", "chơi violin", "nghệ sĩ violin", "đánh đàn"], "points": 20, "category": "Nghề nghiệp", "hint": "Nhạc cụ có dây", "acting": "violin + chèo"},
    {"id": "phi-cong", "name": "Phi công", "image": "🧑‍✈️", "answer": ["phi công"], "points": 30, "category": "Nghề nghiệp", "hint": "Trên bầu trời", "acting": "dang 2 tay + nghiêng người"},
    {"id": "linh-gac", "name": "Lính gác", "image": "💂", "answer": ["lính gác", "bảo vệ"], "points": 30, "category": "Nghề nghiệp", "hint": "Đứng canh", "acting": "đứng thẳng + kiếm + mặt giận"},
    {"id": "lam-xiec", "name": "Làm xiếc", "image": "🤹", "answer": ["làm xiếc", "diễn viên xiếc", "tung hứng"], "points": 30, "category": "Nghề nghiệp", "hint": "Rạp xiếc", "acting": "trồng cây chuối + bóng"},
    {"id": "cuoi-lon", "name": "Cười lớn", "image": "😂", "answer": ["cười lớn", "cười", "vui"], "points": 10, "category": "Cảm xúc", "acting": "mặt vui + nhún"},
    {"id": "khoc", "name": "Khóc", "image": "😭", "answer": ["khóc", "buồn"], "points": 10, "category": "Cảm xúc", "acting": "mặt buồn + ôm đầu"},
    {"id": "tuc-gian", "name": "Tức giận", "image": "😡", "answer": ["tức giận", "giận"], "points": 10, "category": "Cảm xúc", "acting": "mặt giận + chống hông"},
    {"id": "so-hai", "name": "Sợ hãi", "image": "😱", "answer": ["sợ hãi", "sợ"], "points": 10, "category": "Cảm xúc", "acting": "mặt sợ + run rẩy"},
    {"id": "ngai-ngung", "name": "Ngại ngùng", "image": "😳", "answer": ["ngại ngùng", "xấu hổ", "mắc cỡ"], "points": 20, "category": "Cảm xúc", "acting": "mặt yêu + ôm ngực + nghiêng đầu"},
    {"id": "phan-khich", "name": "Phấn khích", "image": "🤩", "answer": ["phấn khích", "hào hứng"], "points": 20, "category": "Cảm xúc", "acting": "giơ 2 tay + bật nhảy"},
    {"id": "hon-doi", "name": "Hờn dỗi", "image": "😤", "answer": ["hờn dỗi", "dỗi", "giận dỗi"], "points": 20, "category": "Cảm xúc", "hint": "Quay mặt đi", "acting": "ôm ngực + nghiêng đầu + mặt giận"},
    {"id": "lanh-cong", "name": "Lạnh cóng", "image": "🥶", "answer": ["lạnh cóng", "lạnh"], "points": 20, "category": "Cảm xúc", "hint": "Mùa đông", "acting": "ôm ngực + run rẩy"},
    {"id": "nong-buc", "name": "Nóng bức", "image": "🥵", "answer": ["nóng bức", "nóng"], "points": 20, "category": "Cảm xúc", "hint": "Mùa hè", "acting": "khăn giấy + nghiêng"},
    {"id": "soc", "name": "Sốc", "image": "🤯", "answer": ["sốc", "choáng", "bất ngờ"], "points": 30, "category": "Cảm xúc", "acting": "mặt ngạc nhiên + té ngã"},
    {"id": "thuc-day", "name": "Thức dậy", "image": "🛏️", "answer": ["thức dậy", "ngủ dậy"], "points": 10, "category": "Đời sống", "hint": "Buổi sáng", "acting": "nằm → ngồi + ngáp"},
    {"id": "choi-game", "name": "Chơi game", "image": "🎮", "answer": ["chơi game", "chơi điện tử"], "points": 10, "category": "Đời sống", "acting": "tay cầm game + ngồi"},
    {"id": "lam-viec", "name": "Làm việc", "image": "💻", "answer": ["làm việc", "gõ máy tính", "code", "làm bài"], "points": 10, "category": "Đời sống", "hint": "Văn phòng", "acting": "laptop + ngồi ghế"},
    {"id": "tru-mua", "name": "Trú mưa", "image": "☔", "answer": ["trú mưa", "che ô", "mưa"], "points": 10, "category": "Đời sống", "hint": "Thời tiết", "acting": "ô + run rẩy"},
    {"id": "an-com", "name": "Ăn cơm", "image": "🥢", "answer": ["ăn cơm", "ăn"], "points": 10, "category": "Đời sống", "hint": "Bữa tối gia đình", "acting": "đũa + tô + ngồi"},
    {"id": "lai-xe", "name": "Lái xe", "image": "🚗", "answer": ["lái xe", "lái ô tô"], "points": 20, "category": "Đời sống", "acting": "ngồi ghế + 2 tay chỉ + lắc"},
    {"id": "chay-xe-may", "name": "Chạy xe máy", "image": "🛵", "answer": ["chạy xe máy", "đi xe máy"], "points": 20, "category": "Đời sống", "hint": "Đội mũ bảo hiểm", "acting": "ngồi ghế + dang tay + nghiêng"},
    {"id": "di-cho", "name": "Đi chợ", "image": "🛒", "answer": ["đi chợ", "đi siêu thị", "mua sắm"], "points": 20, "category": "Đời sống", "acting": "giỏ + đi bộ"},
    {"id": "ru-em-be", "name": "Ru em bé", "image": "🍼", "answer": ["ru em bé", "bế em bé", "ru con"], "points": 20, "category": "Đời sống", "hint": "Em bé", "acting": "ôm ngực + bình sữa + chèo"},
    {"id": "thoi-nen", "name": "Thổi nến", "image": "🎂", "answer": ["thổi nến", "sinh nhật", "thổi bánh kem"], "points": 20, "category": "Đời sống", "hint": "Mỗi năm một lần", "acting": "bánh kem + mặt ngạc nhiên"},
    {"id": "cau-hon", "name": "Cầu hôn", "image": "💍", "answer": ["cầu hôn"], "points": 20, "category": "Đời sống", "hint": "Quỳ gối", "acting": "quỳ + nhẫn + mặt yêu"},
    {"id": "dap-muoi", "name": "Đập muỗi", "image": "🦟", "answer": ["đập muỗi", "muỗi"], "points": 20, "category": "Đời sống", "hint": "Con vật nhỏ hay cắn", "acting": "vỗ tay + mặt giận"},
    {"id": "tha-bong-bay", "name": "Thả bóng bay", "image": "🎈", "answer": ["thả bóng bay", "bóng bay"], "points": 20, "category": "Đời sống", "acting": "bóng bay + giơ cao"},
    {"id": "phoi-do", "name": "Phơi đồ", "image": "🧺", "answer": ["phơi đồ", "phơi quần áo"], "points": 30, "category": "Đời sống", "hint": "Sau khi giặt", "acting": "giỏ + giơ cao"},
    {"id": "truot-vo-chuoi", "name": "Trượt vỏ chuối", "image": "🍌", "answer": ["trượt vỏ chuối", "trượt chân", "té ngã"], "points": 30, "category": "Đời sống", "hint": "Đi đứng cẩn thận", "acting": "chuối + té ngã"},
    {"id": "li-xi", "name": "Lì xì", "image": "🧧", "answer": ["lì xì", "mừng tuổi"], "points": 20, "category": "Lễ hội Việt", "hint": "Tết", "acting": "tiền + cúi chào"},
    {"id": "chuc-tet", "name": "Chúc Tết", "image": "🙏", "answer": ["chúc tết"], "points": 20, "category": "Lễ hội Việt", "hint": "Mùng một", "acting": "cúi chào + vỗ tay"},
    {"id": "ruoc-den", "name": "Rước đèn", "image": "🏮", "answer": ["rước đèn", "trung thu", "đèn lồng"], "points": 20, "category": "Lễ hội Việt", "hint": "Rằm tháng tám", "acting": "đèn pin + đi bộ"},
    {"id": "danh-trong", "name": "Đánh trống", "image": "🥁", "answer": ["đánh trống", "gõ trống"], "points": 20, "category": "Lễ hội Việt", "hint": "Khai giảng, trung thu", "acting": "đấm + ngồi xổm"},
    {"id": "mua-lan", "name": "Múa lân", "image": "🦁", "answer": ["múa lân", "múa sư tử"], "points": 30, "category": "Lễ hội Việt", "hint": "Trung thu, khai trương", "acting": "2 tay giơ cao + nhảy múa"},
    {"id": "ban-phao-hoa", "name": "Bắn pháo hoa", "image": "🎆", "answer": ["bắn pháo hoa", "pháo hoa", "xem pháo hoa"], "points": 30, "category": "Lễ hội Việt", "hint": "Giao thừa", "acting": "chỉ lên + ngước + mặt ngạc nhiên"},
    {"id": "goi-banh-chung", "name": "Gói bánh chưng", "image": "🍚", "answer": ["gói bánh chưng", "bánh chưng"], "points": 30, "category": "Lễ hội Việt", "hint": "Tết, lá dong", "acting": "ngồi xếp bằng + vỗ tay"}
  ]
};
