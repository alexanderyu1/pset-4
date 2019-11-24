const readlineSync = require("readline-sync");

let height = NaN;
let pyramid = "";

console.log();
while (height > 24 || height < 1 || Number.isNaN(height) == true || height % 1 != 0) {
  height = Number(readlineSync.question("Height: "));
}

let layer = height;
