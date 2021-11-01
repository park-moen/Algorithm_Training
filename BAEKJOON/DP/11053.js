const fs = require('fs');
const [n, ...arr] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);

const N = Number(n);
const sequence = arr.map(num => Number(num));

function solution(sequence, len) {
  let answer = 0;
  const dp = Array.from({ length: len }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < len; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (sequence[i] > sequence[j] && max < dp[j]) {
        max = dp[j];
      }
    }

    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }

  console.log(answer);
}

solution(sequence, N);
