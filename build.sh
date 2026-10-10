#!/bin/sh
# Đóng gói code trong src/ thành các file trong assets/ (cần Node.js).
# Chạy: sh build.sh
set -e
[ -d node_modules/three ] && [ -d node_modules/planck ] || npm install
npx esbuild src/catalog.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/catalog.js
npx esbuild src/masoi.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/masoi.js
npx esbuild src/dienta/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/dienta.js
npx esbuild src/nhanvat.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/nhanvat.js
npx esbuild src/nhai/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/nhai.js
npx esbuild src/caro/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/caro.js
npx esbuild src/bay/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/bay.js
npx esbuild src/covua/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/covua.js
npx esbuild src/cotuong/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/cotuong.js
npx esbuild src/motla/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/motla.js
npx esbuild src/cangua/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/cangua.js
npx esbuild src/typhu/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/typhu.js
npx esbuild src/fight/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/quyen.js
npx esbuild src/race/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/duaxe.js
npx esbuild src/daga/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/daga.js
npx esbuild src/keoco/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/keoco.js
npx esbuild src/xaythap/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/xaythap.js
echo "Xong! Đã cập nhật assets/"
