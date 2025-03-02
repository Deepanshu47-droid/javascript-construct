const readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question("Enter a number to check if it is prime: "));
let isPrime = true;

if (number <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${number} is a Prime Number.`);
} else {
    console.log(`${number} is NOT a Prime Number.`);
}
