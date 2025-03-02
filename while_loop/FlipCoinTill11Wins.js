let heads = 0;
let tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 or 1
    if (flip === 0) {
        heads++;
    } else {
        tails++;
    }
}

console.log(`Heads won ${heads} times.`);
console.log(`Tails won ${tails} times.`);

if (heads === 11) {
    console.log("Heads wins the game!");
} else {
    console.log("Tails wins the game!");
}
