const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());
const dp = Array.from({ length: n + 1 }, () => 0);
const t = [];
const p = [];
let maxValue = 0;

for (let i = 0; i < n; i++) {
  const [x, y] = input
    .shift()
    .split(' ')
    .map(v => +v);

  t.push(x);
  p.push(y);
}

for (let i = n - 1; i >= 0; i--) {
  const time = t[i] + i;

  if (time <= n) {
    console.log(time, i);
    dp[i] = Math.max(p[i] + dp[time], maxValue);
    maxValue = dp[i];
  } else {
    dp[i] = maxValue;
  }
}

console.log(maxValue);
