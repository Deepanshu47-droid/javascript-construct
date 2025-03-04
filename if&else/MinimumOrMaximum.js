
// Generate 5 random 3-digit numbers
let numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // Random number from 100 to 999
    numbers.push(randomNum);
}

// Initialize min and max with the first element
let minValue = numbers[0];
let maxValue = numbers[0];

// Find minimum and maximum using if-else
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i];
    } else if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

// Print results
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
