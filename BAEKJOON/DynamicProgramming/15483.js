const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const str1 = input[0];
const str2 = input[1];

function solution(str1, str2) {
  const n = str1.length;
  const m = str2.length;
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  console.log(dp[n][m]);
}

solution(str1, str2);
