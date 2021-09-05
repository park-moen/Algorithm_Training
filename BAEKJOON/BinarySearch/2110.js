const fs = require('fs');
const [n, c, ...arr] = fs.readFileSync('input.txt').toString().split(/\s+/);

const coord = arr
  .join(' ')
  .trim()
  .split(' ')
  .map(val => +val)
  .sort((a, b) => a - b);

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

function solution(coord, cnt) {
  let answer = 0;

  let start = 1;
  let end = coord[coord.length - 1];

  while (end >= start) {
    const mid = parseInt((start + end) / 2);

    if (count(coord, mid) >= cnt) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
}

solution(coord, Number(c));
