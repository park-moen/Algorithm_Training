const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);

function solution(N, K) {
  const arr = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }

  const temp = arr
    .map(val => val)
    .flat()
    .sort((a, b) => a - b);

  console.log(temp[K]);
}

solution(N, K);
