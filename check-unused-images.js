const fs = require("fs");
const path = require("path");

const imageFolders = [
  "./public/assets/images",
  "./assets"
];

const codeExtensions = [".js", ".jsx", ".ts", ".tsx", ".html"];

const projectRoot = "./";

function getAllFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, extensions, fileList);
    } else if (extensions.includes(path.extname(file))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function getAllImages() {
  let images = [];

  imageFolders.forEach(folder => {
    if (!fs.existsSync(folder)) return;

    const files = fs.readdirSync(folder);
    files.forEach(file => {
      images.push(file);
    });
  });

  return images;
}

const codeFiles = getAllFiles(projectRoot, codeExtensions);
const images = getAllImages();

let codeContent = "";

codeFiles.forEach(file => {
  codeContent += fs.readFileSync(file, "utf8");
});

images.forEach(img => {
  if (!codeContent.includes(img)) {
    console.log("Unused image:", img);
  }
});