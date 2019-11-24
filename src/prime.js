const readlineSync = require("readline-sync");

let input = NaN;
let output = "";

console.log();
while (input > Number.MAX_SAFE_INTEGER || Number.isNaN(input) == true || input % 1 != 0 || input < 0 || input == "") {
  input = Number(readlineSync.question("Non-negative integer: "));
}

for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    output = "Not prime"
    i = input - 1
  }
  else {
  output = "Prime"
}
}

console.log("\n" + output + ".");
