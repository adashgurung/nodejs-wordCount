// Using Node's builtin api to read a file
const fs = require("fs");

//const wordCount = (string) => string.split(" ").length;

const wordCount = (string) => (string.match(/\S+/g) || []).length;

fs.readFile("mytext.txt", "utf8", function (err, data) {
  if (err) throw err;

  console.log("The text in the file:\n\n", data, "\n");
  // store results in an object to present the log better
  let result = {
    "word count": wordCount(data),
  };
  console.table(result);
});
