const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the value of n: "));
let harmonic = 0;

for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}
console.log(`The ${n}th Harmonic Number is: ${harmonic}`);
