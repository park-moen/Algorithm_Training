const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const n = Number(input.shift());
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(dp[n]);
}
