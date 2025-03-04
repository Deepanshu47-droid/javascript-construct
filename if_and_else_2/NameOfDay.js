const readlineSync = require("readline-sync"); // Import readline-sync

let dayNumber = parseInt(readlineSync.question("Enter a number (0-6): "));

if (dayNumber === 0) {
    console.log("Sunday");
} else if (dayNumber === 1) {
    console.log("Monday");
} else if (dayNumber === 2) {
    console.log("Tuesday");
} else if (dayNumber === 3) {
    console.log("Wednesday");
} else if (dayNumber === 4) {
    console.log("Thursday");
} else if (dayNumber === 5) {
    console.log("Friday");
} else if (dayNumber === 6) {
    console.log("Saturday");
} else {
    console.log("Invalid input! Enter a number between 0 and 6.");
}
