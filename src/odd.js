const readlineSync = require("readline-sync");

let positiveInteger = readlineSync.question("\nPositive integer: ");
let sumOfOdd = 0 ;

while ( Number.isNaN(positiveInteger) == true || positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || positiveInteger % 1 != 0) {
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (positiveInteger; positiveInteger > 0;) {
  numberInInteger = positiveInteger % 10;
  positiveInteger = (positiveInteger - positiveInteger % 10) / 10;
    if (numberInInteger % 2 != 0) {
      sumOfOdd = sumOfOdd + numberInInteger
    }
}

console.log("\n" + sumOfOdd + ".");
