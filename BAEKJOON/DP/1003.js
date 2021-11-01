const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const n = Number(input.shift());

  if (n === 0) {
    console.log('1 0');
  } else {
    const dp = Array.from(Array(n + 1), () => Array().fill([]));
    dp[0][0] = 1;
    dp[0][1] = 0;
    dp[1][0] = 0;
    dp[1][1] = 1;

    for (let i = 2; i <= n; i++) {
      dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
      dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }

    console.log(dp[n].join(' '));
  }
}
