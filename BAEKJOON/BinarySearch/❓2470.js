const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1]
  .split(' ')
  .map(item => +item)
  .sort((a, b) => a - b);

function solution(len, arr) {
  let sp = 0;
  let ep = len - 1;
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;

  while (ep > sp) {
    let temp = arr[sp] + arr[ep];

    if (Math.abs(temp) < min) {
      answer = [arr[sp], arr[ep]];
      min = Math.abs(temp);

      if (min === 0) break;
    }

    if (temp < 0) sp += 1;
    else ep -= 1;
  }

  console.log(answer[0], answer[1]);
}

solution(N, arr);
