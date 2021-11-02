const fs = require('fs');
const n = +fs.readFileSync('input.txt').toString().trim();
const staticNum = 10007;
const dp = Array.from({ length: n + 1 }, () => 0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % staticNum;
}

console.log(dp[n]);
