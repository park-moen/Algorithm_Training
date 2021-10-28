const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
const n = Number(input.shift());
const arr = input.map(v => +v).reverse();
const dp = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - Math.max(...dp));
