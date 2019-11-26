const readlineSync = require("readline-sync");

let height = NaN;
let pyramid = "";

console.log();
while (height > 24 || height < 1 || Number.isNaN(height) == true || height % 1 != 0) {
  height = Number(readlineSync.question("Height: "));
}

console.log();

for(x = 1; x < height + 1; x++){
  for(var i = 0; i < height - x; i++){
    pyramid = pyramid + " ";
  }for(var i = 0; i < x + 1; i++){
    pyramid = pyramid + "#";
  }
  console.log(pyramid);
  pyramid = "";
}
