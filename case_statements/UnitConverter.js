const readlineSync = require('readline-sync'); // Import readline-sync

// Display options
console.log("Choose conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Take user's choice
let choice = readlineSync.question("Enter your choice (1-4): ");

// Perform conversion based on choice
switch (choice) {
    case '1':
        var feet = parseFloat(readlineSync.question("Enter value in Feet: "));
        var inches = feet * 12;
        console.log(`${feet} Feet = ${inches} Inches`);
        break;
    case '2':
        var feet = parseFloat(readlineSync.question("Enter value in Feet: "));
        var meter = feet * 0.3048;
        console.log(`${feet} Feet = ${meter} Meters`);
        break;
    case '3':
        var inch = parseFloat(readlineSync.question("Enter value in Inches: "));
        var feet = inch / 12;
        console.log(`${inch} Inches = ${feet} Feet`);
        break;
    case '4':
        var meter = parseFloat(readlineSync.question("Enter value in Meters: "));
        var feet = meter * 3.28084;
        console.log(`${meter} Meters = ${feet} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter between 1-4.");
}
