const fs = require('fs');
const input = +fs.readFileSync('input.txt').toString().trim();
const wallet = [3, 5];

function solution(n, wallet) {
  const d = Array.from({ length: n + 1 }, () => 5001);
  d[0] = 0;

  for (let coin of wallet) {
    for (let i = coin; i <= n; i++) {
      if (d[i - coin] !== 5001) d[i] = Math.min(d[i], d[i - coin] + 1);
    }
  }

  if (d[n] === 5001) return -1;

  return d[n];
}

console.log(solution(input, wallet));
