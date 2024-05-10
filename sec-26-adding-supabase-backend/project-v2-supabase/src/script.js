import fs from "fs";

import path from "path";
// Function to rename .jsx files to .tsx
function renameFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      renameFiles(filePath); // Recursive call for directories
    } else if (file.endsWith(".jsx")) {
      const newFileName = path.join(dir, path.basename(file, ".jsx") + ".tsx");
      fs.renameSync(filePath, newFileName);
    }
  });
}

// Provide the directory containing your .jsx files
const directory = "./";

renameFiles(directory);
