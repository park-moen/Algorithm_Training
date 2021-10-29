const fs = require('fs');
const n = +fs.readFileSync('input.txt').toString().trim();
const dp = Array(n).fill(0);

let i2 = 0;
let i3 = 0;
let i5 = 0;
let next2 = 2;
let next3 = 3;
let next5 = 5;

dp[0] = 1;

for (let i = 1; i < n; i++) {
  dp[i] = Math.min(next2, next3, next5);

  if (dp[i] === next2) {
    i2 += 1;
    next2 = dp[i2] * 2;
  }
  if (dp[i] === next3) {
    i3 += 1;
    next3 = dp[i3] * 3;
  }
  if (dp[i] === next5) {
    i5 += 1;
    next5 = dp[i5] * 5;
  }
}

console.log(dp[n - 1]);
