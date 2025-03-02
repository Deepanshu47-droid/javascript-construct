const readlineSync = require('readline-sync');

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

let number = parseInt(readlineSync.question("Enter a number: "));

if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
    let palindrome = getPalindrome(number);
    console.log(`Palindrome of ${number} is ${palindrome}.`);
    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also prime.`);
    } else {
        console.log(`Palindrome ${palindrome} is not prime.`);
    }
} else {
    console.log(`${number} is not a prime number.`);
}
