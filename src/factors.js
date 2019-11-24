const readlineSync = require("readline-sync");

let positiveInteger = NaN;

console.log();
while (positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || Number.isNaN(positiveInteger) == true || positiveInteger%1!=0){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (i = 1; i < (positiveInteger / 2); i++) {
  
}
