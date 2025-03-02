let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.floor(Math.random() * 2); // 0 or 1
    if (betResult === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Total bets made: ${bets}`);
console.log(`Total wins: ${wins}`);
console.log(`Final money: Rs ${money}`);

if (money === goal) {
    console.log("Congratulations! You reached your goal!");
} else {
    console.log("You went broke!");
}
