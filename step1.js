const fs = require("fs");
const argv = process.argv;

try {
  let contents = fs.readFileSync(argv[argv.length - 1], "utf-8");
  console.log(contents);
} catch (error) {
  console.error(error);
  process.exit();
}
