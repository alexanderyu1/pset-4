const readlineSync = require("readline-sync");``


const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let endLoop =  false
let lowerBound = 1
let upperBound = 0


console.log();
//loop will keep going if any invalid stuff is inputted
while (endLoop === false) {

  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));


  if (Number.isNaN(upperBound) || Number.isNaN(lowerBound)) {
  }

  else if (lowerBound % 1 !== 0 || upperBound % 1 !== 0) {
  }

  else if (lowerBound < MIN || upperBound < MIN) {
  }

  else if (lowerBound > MAX || upperBound > MAX) {
  }

  else if (lowerBound > upperBound) {
  }

  else {
    endLoop = true;
  }
}
//calculate the sum
if (lowerBound % 2 == 0) {
  sum = lowerBound
}

else {
  sum = lowerBound + 1
}

for (let i = Math.ceil((upperBound - lowerBound) / 2); i > 1; i--) {
    sum = Number(sum) + Number((lowerBound%2==0)? lowerBound = Number(lowerBound)+2 : lowerBound = Number(lowerBound)+3);
}

console.log("\n" + sum.toLocaleString() + ".");
