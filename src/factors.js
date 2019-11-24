const readlineSync = require("readline-sync");

let positiveInteger = NaN;
let factorOutput = "";
let factors = 0;

console.log();
while (positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || Number.isNaN(positiveInteger) == true || positiveInteger % 1!= 0){
  positiveInteger = Number(readlineSync.question("Positive integer: "));
}

for (i = 1; i < (positiveInteger / 2); i++) {
  if (positiveInteger % i ==0) {
    factors = positiveInteger / i;
    factorOutput = String(factorOutput) + String(i);
  if (i !== factors) {
    factorOutput = String(factorOutput) + ", " + String(factors) + ", ";
  }
  else {
    i = positiveInteger
  }
  }
}

console.log("\n" + factorOutput + ".");
