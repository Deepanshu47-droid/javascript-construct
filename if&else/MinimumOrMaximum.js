// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // 100 to 999
    numbers.push(randomNum);
}

// Find minimum and maximum values
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

// Print results
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
