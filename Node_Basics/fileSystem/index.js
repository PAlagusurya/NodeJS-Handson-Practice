const fs = require("fs");
const path = require("path");

//SYNC WAY OF ACCESSING FILES:

const dataFolder = path.join(__dirname, "dataFolder");
const asyncDataFolder = path.join(__dirname, "asyncDataFolder");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("SYNC: Folder created successfully");
}

const filePath = path.join(dataFolder, "file.txt");
fs.writeFileSync(filePath, "Hello, this is a sample text file.");
console.log("SYNC: File created successfully");

const readContent = fs.readFileSync(filePath, "utf8");
console.log("SYNC: File read successfully", readContent);

fs.appendFileSync(filePath, "\nThis is an appended line.");
console.log("SYNC: File appended successfully");

//ASYNC WAY OF ACCESSING FILES:

fs.mkdir(asyncDataFolder, { recursive: true }, (err) => {
  if (err) {
    console.error("ASYNC: Error creating folder", err);
  } else {
    console.log("ASYNC: Folder created successfully");
  }
});

const asyncFilepath = path.join(asyncDataFolder, "asyncFile.txt");
fs.writeFile(
  asyncFilepath,
  "Hello, this is an async sample text file.",
  (err) => {
    if (err) {
      console.error("ASYNC: Error creating file", err);
    } else {
      console.log("ASYNC: File created successfully");
      fs.readFile(asyncFilepath, "utf8", (err, data) => {
        if (err) {
          console.log("ASYNC: Error reading file", err);
        } else {
          console.log("ASYNC: File read successfully", data);
          fs.appendFile(
            asyncFilepath,
            "\nThis is an async appended line.",
            (err) => {
              if (err) {
                console.error("ASYNC: Error appending file", err);
              } else {
                console.log("ASYNC: File appended successfully");
              }
            },
          );
        }
      });
    }
  },
);
