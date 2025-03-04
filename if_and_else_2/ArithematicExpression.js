const readlineSync = require("readline-sync"); // Import readline-sync

// Taking input from the user
let a = parseFloat(readlineSync.question("Enter value for a: "));
let b = parseFloat(readlineSync.question("Enter value for b: "));
let c = parseFloat(readlineSync.question("Enter value for c: "));

// Perform arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Display the results
console.log(`Results of expressions:`);
console.log(`1. a + b * c  = ${result1}`);
console.log(`2. a % b + c  = ${result2}`);
console.log(`3. c + a / b  = ${result3}`);
console.log(`4. a * b + c  = ${result4}`);

// Finding maximum value using if-else
let maxValue = result1;

if (result2 > maxValue) {
    maxValue = result2;
}
if (result3 > maxValue) {
    maxValue = result3;
}
if (result4 > maxValue) {
    maxValue = result4;
}

// Finding minimum value using if-else
let minValue = result1;

if (result2 < minValue) {
    minValue = result2;
}
if (result3 < minValue) {
    minValue = result3;
}
if (result4 < minValue) {
    minValue = result4;
}

console.log(`\nMaximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);
