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

  else if (lowerBound == "" || upperBound == "") {
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
