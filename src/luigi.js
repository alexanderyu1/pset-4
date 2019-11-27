const readlineSync = require("readline-sync");

let height = NaN;
let pyramidContent;
let pyramidContentMirror;

console.log();
while (height > 24 || height < 1 || Number.isNaN(height) == true || height % 1 != 0) {
  height = Number(readlineSync.question("Height: "));
}

console.log();

let layer = height;

while (layer > 0) {
    pyramidContent = "";
    pyramidContentMirror = "";

    for (let i = 0; i <= height; i++) {
        pyramidContent = pyramidContent + "#";
    }
    for (let i = 0; i < layer - 1; i++) {
        pyramidContent = pyramidContent.replace(pyramidContent.charAt(i), " ");
    }
    for (let i = layer - 2; i < height; i++) {
        pyramidContentMirror = pyramidContentMirror + "#";
    }

    console.log(pyramidContent + " " + pyramidContentMirror);
    layer--;
}

console.log();
