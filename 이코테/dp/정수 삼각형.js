const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const _ = Number(input.shift());
const dp = [];

while (input.length) {
  const num = input
    .shift()
    .split(' ')
    .map(v => +v);

  dp.push(num);
}

for (let i = dp.length - 2; i >= 0; i--) {
  for (let j = 0; j < dp[i].length; j++) {
    dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
  }
}

console.log(dp[0][0]);
