const path = require("path");

console.log("DIRECTORY NAME:", path.dirname(__filename));
console.log("FILE NAME:", path.basename(__filename));
console.log("EXTENSION NAME:", path.extname(__filename));

const joinedPath = path.join("src", "documents", "file.txt"); // src/documents/file.txt
console.log(joinedPath);

const normalizedPath = path.normalize(
  "src/documents/../users/../content/file.txt",
); // src/content/file.txt
console.log(normalizedPath);

const resolvedPath = path.resolve("src", "documents", "file.txt");
console.log(resolvedPath);
