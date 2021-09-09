const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);

function solution(n, k) {
  let answer = 0;
  let sp = 1;
  let ep = k;

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);
    let cnt = 0;

    for (let i = 1; i <= n; i++) cnt += Math.min(parseInt(mid / i), n);

    if (k > cnt) {
      sp = mid + 1;
    } else {
      answer = mid;
      ep = mid - 1;
    }
  }

  console.log(answer);
}

solution(N, K);
