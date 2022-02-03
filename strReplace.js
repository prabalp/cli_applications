const nthline = require("nthline");
const replace = require("replace-in-file");
var fs = require("fs");

var filePath = "./test/ajaxtabs.js";
rowNumber = 87;

nthline(rowNumber, filePath).then(async (line) => {
  var str = "foward";
  var re = new RegExp(str, "g");
  previousString = line;
  var newString = line.replace(re, "forward");
  console.log(newString);
  function write() {
    var data = fs.readFileSync(filePath, "utf8");

    var result = data.replace(/previousString/g, newString);
    fs.writeFileSync(filePath, result, "utf8");
    console.log("done");
    // console.log(result);
  }

  write();
});
