const readlineSync = require('readline-sync');

function isPalindrome(num1, num2) {
    function reverse(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    return reverse(num1) === num2 && reverse(num2) === num1;
}

let num1 = parseInt(readlineSync.question("Enter first number: "));
let num2 = parseInt(readlineSync.question("Enter second number: "));

if (isPalindrome(num1, num2)) {
    console.log(`${num1} and ${num2} are palindromes.`);
} else {
    console.log(`${num1} and ${num2} are not palindromes.`);
}
