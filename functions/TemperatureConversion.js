const readlineSync = require('readline-sync');

function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        return "Invalid Celsius input. Must be between 0°C and 100°C.";
    }
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        return "Invalid Fahrenheit input. Must be between 32°F and 212°F.";
    }
    return (degF - 32) * 5/9;
}

let choice = readlineSync.question("Enter 1 for C to F, 2 for F to C: ");

switch (choice) {
    case "1":
        let degC = parseFloat(readlineSync.question("Enter temperature in °C: "));
        console.log(`Temperature in °F: ${celsiusToFahrenheit(degC)}`);
        break;
    case "2":
        let degF = parseFloat(readlineSync.question("Enter temperature in °F: "));
        console.log(`Temperature in °C: ${fahrenheitToCelsius(degF)}`);
        break;
    default:
        console.log("Invalid choice.");
}
