const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const [n, m] = input
    .shift()
    .split(' ')
    .map(v => +v);
  const array = input
    .shift()
    .split(' ')
    .map(v => +v);

  const dp = [];
  let idx = 0;

  for (let i = 0; i < n; i++) {
    dp.push(array.slice(idx, idx + m));
    idx += m;
  }

  for (let j = 1; j < m; j++) {
    let up = 0;
    let left = 0;
    let down = 0;

    for (let i = 0; i < n; i++) {
      if (i !== 0) up = dp[i - 1][j - 1];
      if (i !== n - 1) down = dp[i + 1][j - 1];

      left = dp[i][j - 1];
      dp[i][j] = dp[i][j] + Math.max(up, left, down);
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dp[i][m - 1]);
  }

  console.log(result);
}
