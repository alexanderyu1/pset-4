const readlineSync = require("readline-sync");

let positiveInteger = Number(readlineSync.question("\nPositive integer: "));

while (Number.isNaN(positiveInteger) == true || positiveInteger <= number.MAX_SAFE_INTEGER || positiveInteger >= 1 || positiveInteger % 1 == 0) {
  positiveInteger = Number(readlineSync.question("\nPositive integer: "));
}
