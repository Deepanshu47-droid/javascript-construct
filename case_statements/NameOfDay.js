const readlineSync = require('readline-sync'); // Import readline-sync

// Take input from user
let number = readlineSync.question('Enter a number (1-7) to display the weekday: ');

// Using switch case to display the weekday
switch (number) {
    case '1':
        console.log("Sunday");
        break;
    case '2':
        console.log("Monday");
        break;
    case '3':
        console.log("Tuesday");
        break;
    case '4':
        console.log("Wednesday");
        break;
    case '5':
        console.log("Thursday");
        break;
    case '6':
        console.log("Friday");
        break;
    case '7':
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}
