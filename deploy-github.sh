#!/bin/sh
# Đưa game lên GitHub Pages: https://loenchay.github.io/games.github.io/
# - KHÔNG lưu token trên máy (tắt trình lưu mật khẩu riêng cho thư mục này)
# - KHÔNG đụng cấu hình git chung (tên/email/tài khoản GitLab công ty giữ nguyên)
# Chạy: mở Terminal, kéo thư mục này vào, gõ:  sh deploy-github.sh
set -e
cd "$(dirname "$0")"
REPO="https://github.com/loenchay/games.github.io.git"

[ -d .git ] || git init -q -b main
# Chỉ áp dụng trong repo này
git config user.name "loenchay"
git config user.email "loenchay@users.noreply.github.com"
git config credential.helper ""          # không dùng Keychain / không ghi nhớ token
git remote get-url origin >/dev/null 2>&1 || git remote add origin "$REPO"
git remote set-url origin "$REPO"

git add -A
git commit -q -m "Cập nhật game $(date '+%Y-%m-%d %H:%M')" || echo "Không có thay đổi mới để commit."

echo ""
echo "GitHub sẽ hỏi Username và Password:"
echo "  Username: loenchay"
echo "  Password: dán Personal Access Token (không phải mật khẩu GitHub). Token chỉ dùng cho lần này, không được lưu."
echo ""
if [ "$FORCE" = "1" ]; then
  git -c credential.helper= push -f -u origin main
else
  LOG=$(mktemp)
  if ! git -c credential.helper= push -u origin main 2>&1 | tee "$LOG"; then :; fi
  if grep -qE "403|denied|Authentication failed|401" "$LOG"; then
    rm -f "$LOG"
    echo ""
    echo "Token không có quyền ghi vào repo. Tạo lại token (Fine-grained):"
    echo "  - Resource owner: loenchay"
    echo "  - Repository access: Only select repositories -> games.github.io"
    echo "  - Repository permissions -> Contents: Read and write"
    exit 1
  fi
  if grep -qE "rejected|fetch first|non-fast-forward" "$LOG"; then
    rm -f "$LOG"
    echo ""
    echo "Push bị từ chối: repo trên GitHub đã có sẵn nội dung khác (VD: README tạo lúc tạo repo)."
    echo "Nếu muốn ghi đè bằng bản trên máy, chạy:  FORCE=1 sh deploy-github.sh"
    exit 1
  fi
  rm -f "$LOG"
fi
echo ""
echo "Xong! Vài phút sau mở: https://loenchay.github.io/games.github.io/"
