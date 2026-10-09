#!/bin/sh
# Đóng gói code trong src/ thành các file trong assets/ (cần Node.js).
# Chạy: sh build.sh
set -e
[ -d node_modules/three ] || npm install
npx esbuild src/catalog.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/catalog.js
npx esbuild src/masoi.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/masoi.js
npx esbuild src/dienta/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/dienta.js
npx esbuild src/nhanvat.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/nhanvat.js
npx esbuild src/nhai/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/nhai.js
npx esbuild src/caro/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/caro.js
npx esbuild src/bay/main.js --bundle --format=iife --target=es2020 --legal-comments=none --minify --outfile=assets/bay.js
echo "Xong! Đã cập nhật assets/"
