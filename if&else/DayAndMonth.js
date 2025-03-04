// Get command-line arguments (first two args are node and script path)
let args = process.argv.slice(2);

// Convert inputs to numbers
let day = parseInt(args[0]);
let month = parseInt(args[1]);

let isValid = false;

if ((month === 3 && day >= 20)) {
    isValid = true;
} else if (month === 4) {
    isValid = true;
} else if (month === 5) {
    isValid = true;
} else if (month === 6 && day <= 20) {
    isValid = true;
} else {
    isValid = false;
}

// Print result
console.log(isValid);
