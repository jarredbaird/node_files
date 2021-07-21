const fs = require("fs");
const ref = process.argv[process.argv.length - 1];

function cat(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(data);
  });
}

cat(ref);
