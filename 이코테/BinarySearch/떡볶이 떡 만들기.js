const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/);
const n = Number(input.shift());
const m = Number(input.shift());
const arr = input.map(v => +v);

function totalLen(arr, target) {
  let total = 0;

  for (let len of arr) {
    if (len > target) total += len - target;
  }

  return total;
}

function solution(arr, n, m) {
  let answer = 0;
  let sp = 0;
  let ep = Math.max(...arr);

  while (sp <= ep) {
    const mid = parseInt((sp + ep) / 2);

    if (totalLen(arr, mid) < m) {
      ep = mid - 1;
    } else {
      answer = mid;
      sp = mid + 1;
    }
  }

  console.log(answer);
}

solution(arr, n, m);
