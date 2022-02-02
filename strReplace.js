const nthline = require("nthline");
const replace = require("replace-in-file");

var filePath = "./test/ajaxtabs.js";
rowNumber = 87;

nthline(rowNumber, filePath).then(async (line) => {
  var str = "foward";
  var re = new RegExp(str, "g");
  var result = line.replace(re, "forward");
  console.log(result);
  const options = {
    files: filePath,
    from: /line/g,
    to: result,
  };
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
});
