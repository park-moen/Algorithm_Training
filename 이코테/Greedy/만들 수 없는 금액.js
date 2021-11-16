const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const coins = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b);

let target = 1;

for (let x of coins) {
  if (target < x) break;

  target += x;
}

console.log(target);
