// Get command-line arguments (first two args are node and script path)
let args = process.argv.slice(2);

// Convert inputs to numbers
let day = parseInt(args[0]);
let month = parseInt(args[1]);

// Check if the date is within the range
let isValid = (month === 3 && day >= 20) || 
              (month === 4) || 
              (month === 5) || 
              (month === 6 && day <= 20);

// Print result
console.log(isValid);
