const readlineSync = require("readline-sync");

let input;

console.log();

while (Number.isNaN(input) || input % 1 !== 0 || input < 1 || input > 9999999999999999) {
  input = Number(readlineSync.question("Number: "));
}

let inputString = String(input);
let inputLength = inputString.length;
let checksum = 0;

for (let i = inputLength - 2; i >= 0; i = i - 2) {
    let everyOtherInput = inputString.charAt(i)
    let inputLength = String(everyOtherInput * 2).length

    if (inputLength > 1) {
        let y = Number(String(everyOtherInput * 2).charAt(1))
        let x = Number(String(everyOtherInput * 2).charAt(0))
        checksum = checksum + x + y
    }
    else {
        checksum = checksum + (everyOtherInput * 2)
    }
}

for (let i = inputLength - 1; i >= 0; i = i - 2) {
    let notUsedInput = inputString.charAt(i)
    checksum = checksum + Number(notUsedInput)
}

var checksumToString = String(checksum);
var lastNumberInput = checksumToString.charAt(checksumToString.length - 1);

if (lastNumberInput === "0") {
    if (inputLength == 15 && inputString.charAt(0) == "3" && (inputString.charAt(1) == "4" || inputString.charAt(1) == "7")) {
        console.log("\nAmex.");
    }
    else if (inputString.charAt(0) == "5" && (inputString.charAt(1) == "1" || inputString.charAt(1) == "2" || inputString.charAt(1) == "3" || inputString.charAt(1) == "4" || inputString.charAt(1) == "5" && inputLength == 16)) {
        console.log("\nMastercard.");
    }
    else if (inputLength <= 16 && inputString.charAt(0) == "4" && inputLength >= 13) {
        console.log("\nVisa.");
    }
    else {
        console.log("\nInvalid.");
    }
}
else {
    console.log("\nInvalid.");
}
