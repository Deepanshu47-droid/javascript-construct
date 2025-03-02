// Get command-line argument (year)
let args = process.argv.slice(2);
let year = parseInt(args[0]);

// Check if it's a valid 4-digit number
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
} else {
    console.log("Please enter a valid 4-digit year.");
}
