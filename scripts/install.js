console.log("DO <===> Running postinstall script...");
const fs = require("fs");
const path = require("path");

console.log("Running postinstall script...");
console.log("Current working directory:", process.cwd());
console.log("__dirname:", __dirname);

// Đường dẫn đến file Watermark.tsx trong package (từ thư mục package trong node_modules)
const sourceFile = path.join(__dirname, "../src/components/Watermark.tsx");
console.log("Source file path:", sourceFile);

// Đường dẫn đích trong dự án người dùng (test-project/src/ui/Watermark.tsx)
const projectRoot = path.resolve(__dirname, "../../..");
const destDir = path.join(projectRoot, "src", "ui");
const destFile = path.join(destDir, "Watermark.tsx");
console.log("Destination directory:", destDir);
console.log("Destination file path:", destFile);

try {
  // Kiểm tra xem thư mục src đã tồn tại chưa, nếu chưa thì tạo
  const srcDir = path.join(projectRoot, "src");
  console.log("Checking src directory:", srcDir);
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
    console.log("Created src directory");
  }

  // Tạo thư mục ui nếu chưa tồn tại
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log("Created ui directory");
  }

  // Copy file Watermark.tsx sang thư mục đích
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log("Successfully copied Watermark.tsx to src/ui/Watermark.tsx");
  } else {
    console.error("Source file not found:", sourceFile);
  }
} catch (error) {
  console.error("Error during installation:", error);
}
