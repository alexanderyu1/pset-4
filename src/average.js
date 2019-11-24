const readlineSync = require("readline-sync");

let nonNegativeInteger = 0;
let firstInput = NaN;
let totalInputs = 1; //since user must enter at least 1 input
let totalSum = 0;

//stuff for the first input
while (firstInput > Number.MAX_SAFE_INTEGER || firstInput < Number.MIN_SAFE_INTEGER || Number.isNaN(firstInput) == true || firstInput % 1 != 0 || firstInput < 0) {
  firstInput = Number(readlineSync.question("\nNon-negative Integer: "));
}

totalSum = firstInput

//stuff for the rest of the inputs
while (nonNegativeInteger >= 0) {
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));

  if (nonNegativeInteger > Number.MAX_SAFE_INTEGER || nonNegativeInteger < Number.MIN_SAFE_INTEGER || Number.isNaN(nonNegativeInteger) == true || nonNegativeInteger % 1 != 0 || nonNegativeInteger < 0) {
    totalSum = totalSum;
  }
  else {
    totalSum = nonNegativeInteger + totalSum;
    totalInputs++;
  }
}

console.log("\n" + (totalSum / totalInputs).toLocaleString(undefined, {minimumFractionDigits: 3}) + ".");
