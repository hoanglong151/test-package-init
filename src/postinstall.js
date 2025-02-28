import fs from "fs-extra";
import path from "path";

const projectRoot = process.cwd();
const __dirname = path.resolve();
const targetDir = path.resolve(projectRoot, "src", "ui");
const watermarkPath = path.join(
  __dirname,
  "node_modules",
  "test-package-init-pubpublish",
  "src",
  "components",
  "Watermark.tsx"
);
const targetPath = path.join(targetDir, "Watermark.tsx");

console.log("projectRoot: ", projectRoot);
console.log("__dirname: ", __dirname);
console.log("targetDir: ", targetDir);
console.log("watermarkPath: ", watermarkPath);
console.log("targetPath: ", targetPath);

// Kiểm tra nếu thư mục ui đã tồn tại
if (fs.existsSync(targetDir)) {
  // Kiểm tra nếu file Watermark.tsx chưa tồn tại trong thư mục ui
  if (!fs.existsSync(targetPath)) {
    // Copy file Watermark.tsx vào thư mục ui
    fs.copyFileSync(watermarkPath, targetPath);
    console.log(`Copied File Watermark to ui folder.`);
  } else {
    console.log(`File Watermark already exists in ui folder.`);
  }
} else {
  // Nếu thư mục ui chưa tồn tại, tạo mới và copy file vào
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(watermarkPath, targetPath);
  console.log("Created components folder and copied Watermark.tsx.");
}
