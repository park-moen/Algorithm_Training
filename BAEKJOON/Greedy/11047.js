// 1번 문제 풀이
const fs = require('fs');
const [firstLineInput, ...restInput] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [n, k] = firstLineInput.split(' ').map(v => +v);
const coins = restInput.filter(coin => k >= +coin);

let result = 0;

for (let i = coins.length - 1; i >= 0; i--) {
  if (k < coins[i]) continue;
  result += Math.floor(k / coins[i]);
  k = k % coins[i];

  if (k === 0) break;
}

console.log(result);
