const readlineSync = require("readline-sync");

let input = readlineSync.question("\nPositive integer: ");
lastNumber = 0;
secondLastNumber = 1;

console.log();
while (input > 78 || input < 1 || Number.isNaN(input) == true || input%1!=0) {
  input = Number(readlineSync.question("Positive integer: "));
}

for (i = 0; i < input; i++) {
  sum = lastNumber + secondLastNumber
  secondLastNumber = lastNumber
  lastNumber = sum
}

console.log("\n" + sum.toLocaleString() + ".");
