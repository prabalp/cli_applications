var inquirer = require("inquirer");

//moving files
var moveFile = (file, dir) => {
  var fs = require("fs");
  var path = require("path");

  var f = path.basename(file);
  var dest = path.resolve(dir, f);

  fs.rename(file, dest, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("File moved successfully!");
    }
  });
};

//coping files
var copyFile = (file, dir) => {
  var fs = require("fs");
  var path = require("path");

  var f = path.basename(file);
  var dest = path.resolve(dir, f);

  fs.copyFile(file, dest, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log("File copied successfully!");
    }
  });
};

async function main() {
  const file = await inquirer.prompt([
    {
      name: "file",
      message: "Enter the file name",
      default: "./test.txt",
    },
  ]);

  const dir = await inquirer.prompt([
    {
      name: "dir",
      message: "Enter the directory name",
      default: "./",
    },
  ]);

  // moveFile(file.file, dir.dir);
  copyFile(file.file, dir.dir);
}

await main();
