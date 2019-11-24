const readlineSync = require("readline-sync");

let positiveInteger = readlineSync.question("Positive integer: ");

console.log();
while (positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || Number.isNaN(positiveInteger) == true || positiveInteger%1!=0){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}
