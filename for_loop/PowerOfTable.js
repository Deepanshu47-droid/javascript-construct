const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the power n: "));
console.log(`Table of powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
