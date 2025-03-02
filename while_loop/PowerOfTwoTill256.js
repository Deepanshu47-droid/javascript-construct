const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the power n: "));

console.log(`Powers of 2 up to 2^${n} or until 256:`);

for (let i = 0; i <= n; i++) {
    let power = Math.pow(2, i);
    if (power > 256) break;
    console.log(`2^${i} = ${power}`);
}
