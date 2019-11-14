const readlineSync = require("readline-sync");

let lowerBound = 1000000
let upperBound = 999999

while (lowerBound > upperBound) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (lowerBound > upperBound) {
  console.log("\nInvalid.")
}

else if (lowerBound < MIN || upperBound < MIN) {
  console.log("\nInvalid.")
}

else if (lowerBound > MAX || upperBound > MAX) {
  console.log("\nInvalid.")
}

else if (Number.isInteger(lowerBound) != "true" || Number.isInteger(upperBound) != "true") {
  console.log("\nInvalid.")
}

else {




}
