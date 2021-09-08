const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);

function solution(N, K) {
  let answer;
  let sp = 1;
  let ep = K;

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);
    let cnt = 0;

    for (let i = 1; i <= N; i++) cnt += Math.min(parseInt(mid / i), N);

    console.log(mid);
    if (cnt < K) {
      sp = mid + 1;
    } else {
      console.log(mid, ep);
      answer = mid;
      ep = mid - 1;
    }
  }

  console.log(answer);
}

solution(N, K);
