const fs = require("fs");
const axios = require("axios");
const process = require("process");
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

async function webCat(url) {
  let response = await axios.get(url);
  console.log(response.data);
}

if (ref.includes("http")) {
  webCat(ref);
} else {
  cat(ref);
}
