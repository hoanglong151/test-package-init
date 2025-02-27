// scripts/createFolder.js
const fs = require("fs-extra");
const path = require("path");

const targetDir = path.join(process.cwd(), "src", "components");
const watermarkFileSrc = path.join(targetDir, "Watermark.jsx");
const watermarkFileDest = path.join(targetDir, "Watermark.jsx");

// Kiểm tra nếu thư mục chưa tồn tại thì tạo mới
fs.ensureDirSync(targetDir);
console.log(`Thư mục 'components' đã được tạo tại: ${targetDir}`);
// Sao chép file Watermark.jsx vào thư mục components
fs.copyFileSync(watermarkFileSrc, watermarkFileDest);
console.log("File Watermark.jsx đã được sao chép vào thư mục components.");

console.log("Thành công rồi đó CON GÀ NÀY.");
