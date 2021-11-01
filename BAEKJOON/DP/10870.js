const fs = require('fs');
const n = +fs.readFileSync('input.txt').toString().trim();
const dp = Array.from({ length: n + 1 }, () => 0);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n]);
