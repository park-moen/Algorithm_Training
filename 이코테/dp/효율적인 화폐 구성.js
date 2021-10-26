const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map(v => Number(v));

input = input.map(v => Number(v));

function solution(m, input) {
  const dp = Array.from({ length: m + 1 }, () => 10001);
  dp[0] = 0;

  for (let coin of input) {
    for (let i = coin; i <= m; i++) {
      if (dp[i - coin] !== 10001) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  if (dp[m] === 10001) return -1;
  return dp[m];
}

console.log(solution(m, input));
