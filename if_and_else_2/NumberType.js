const readlineSync = require("readline-sync"); // Import readline-sync

// Take user input
let number = parseInt(readlineSync.question("Enter a number (1, 10, 100, 1000, etc.): "));

if (number === 1) {
    console.log("Unit");
} else if (number === 10) {
    console.log("Ten");
} else if (number === 100) {
    console.log("Hundred");
} else if (number === 1000) {
    console.log("Thousand");
} else if (number === 10000) {
    console.log("Ten Thousand");
} else if (number === 100000) {
    console.log("Lakh");
} else if (number === 1000000) {
    console.log("Ten Lakh");
} else if (number === 10000000) {
    console.log("Crore");
} else if (number === 100000000) {
    console.log("Ten Crore");
} else {
    console.log("Invalid input! Enter numbers like 1, 10, 100, 1000, etc.");
}
