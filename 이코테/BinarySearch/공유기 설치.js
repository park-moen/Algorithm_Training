const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map(v => +v);
const coord = input.map(v => +v).sort((a, b) => a - b);

function count(arr, distance) {
  let ep = arr[0];
  let cnt = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= distance) {
      ep = arr[i];
      cnt++;
    }
  }

  return cnt;
}

function solution(n, m, arr) {
  let answer = 0;
  let sp = 1;
  let ep = n - 1;

  while (sp <= ep) {
    const mid = parseInt((sp + ep) / 2);

    if (count(arr, mid) >= m) {
      answer = mid;
      sp = mid + 1;
    } else {
      ep = mid - 1;
    }
  }

  return answer;
}

console.log(solution(n, m, coord));
