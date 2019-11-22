const readlineSync = require("readline-sync");

let positiveInteger = Number(readlineSync.question("\nPositive integer: "));
let lastNumber = 0;
let reverseOrder = "";

while ( Number.isNaN(positiveInteger) == true || positiveInteger > Number.MAX_SAFE_INTEGER || positiveInteger < 1 || positiveInteger % 1 != 0) {
  positiveInteger = Number(readlineSync.question("\nPositive integer: "));
}

for (positiveInteger; positiveInteger > 0; ) {
  lastNumber = positiveInteger % 10;
  reverseOrder = reverseOrder + lastNumber;
  positiveInteger = (positiveInteger-positiveInteger % 10) / 10;
}

let lengthOfString = Number(reverseOrder.length);
let totalString = Number(reverseOrder.length);
x = "";
while (lengthOfString > 0) {
  x = x + ", " + reverseOrder.charAt(totalString - lengthOfString);
  lengthOfString--

}

console.log(x + ", ");
