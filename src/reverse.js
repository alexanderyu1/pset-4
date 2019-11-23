const readlineSync = require("readline-sync");

let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let lastNumber = 0;
let reverseOrder = "";

while ( Number.isNaN(positiveInteger) == true || positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || positiveInteger % 1 != 0) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (positiveInteger; positiveInteger > 0; ) {
  lastNumber = positiveInteger % 10;
  reverseOrder = reverseOrder + lastNumber;
  positiveInteger = (positiveInteger-positiveInteger % 10) / 10;
}

let lengthOfString = Number(reverseOrder.length);
let totalString = Number(reverseOrder.length);
finalProduct = "";

lengthOfString = lengthOfString - 1
finalProduct = reverseOrder.charAt(0);

while (lengthOfString > 0) {
  finalProduct = finalProduct + ", " + reverseOrder.charAt(totalString - lengthOfString);
  lengthOfString--
}

console.log("\n" + finalProduct + ".");
