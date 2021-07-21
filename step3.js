const fs = require("fs");
const axios = require("axios");
const process = require("process");
let out = false;
let path, outFile;

if (process.argv.length > 3) {
  if (process.argv[2] === "--out") {
    out = true;
    outFile = process.argv[3];
    path = process.argv[4];
  } else if (process.argv[2] != "--out") {
    console.log("ERROR!!! WTF KIND OF ARGUMENTS HAVE YOU PROVIDED??");
    process.exit(2);
  }
} else {
  path = process.argv[2];
}

function cat(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else if (out) {
      fs.writeFile(outFile, data, "utf-8", (err) => console.log(err));
    } else {
      console.log(data);
    }
  });
}

async function webCat(url) {
  let response = await axios.get(url);
  if (out) {
    fs.writeFile(outFile, response.data, "utf-8", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("OUTPUT WRITTEN TO FILE");
      }
    });
  } else {
    console.log(response.data);
  }
}

if (path.includes("http")) {
  webCat(path);
} else {
  cat(path);
}
