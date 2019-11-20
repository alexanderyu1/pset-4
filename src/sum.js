const readlineSync = require("readline-sync");``


const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let endLoop =  false
let lowerBound = 1
let upperBound = 0


  console.log();
//loop will keep going if any invalid stuff is inputted
while (endLoop === false) {

  const lowerBound = Number(readlineSync.question("Lower bound: "));
  const upperBound = Number(readlineSync.question("Upper bound: "));


  if (Number.isNaN(upperBound) || Number.isNaN(lowerBound)) {
  }

  else if (lowerBound % 1 !== 0 || upperBound % 1 !== 0) {
  }

  else if (lowerBound < MIN || upperBound < MIN) {
  }

  else if (lowerBound > MAX || upperBound > MAX) {
  }

  else if (lowerBound >= upperBound) {
  }

  else {
    endLoop = true;
  }
}

let lowerboundEven = null;
let upperboundEven = null;

if (lowerBound % 2 === 0) {
  lowerboundEven = lowerBound
}

else {
  lowerboundEven = lowerBound + 1
}

if (upperBound % 2 === 0) {
  upperboundEven = upperBound
}

else {
  upperboundEven = upperBound - 1
}

//basically just the equation for sum of all consecutive numbers but modified ((n / 2)(first number + last number) = sum)

const evenNumbers = ((upperboundEven - lowerboundEven) / 2) + 1 ;//number of integers
const sum = ((evenNumbers / 2) * (upperboundEven + lowerboundEven));

console.log("\n" + sum + ".");
