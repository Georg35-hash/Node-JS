const path = require("path");

const home = "/home/user/documents";

const file = "example.txt";

const fullPath = path.join(home, file);

const fileExt = path.extname(fullPath);

console.log("Fullpath:", fullPath);
console.log("FileExt:", fileExt);
