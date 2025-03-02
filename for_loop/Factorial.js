const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter a number to find its factorial: "));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);
