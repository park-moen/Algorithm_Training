const fs = require('fs');

const [n, m, ...temp] = fs.readFileSync('input.txt').toString().split(/\s+/);

const arr = temp.map(v => +v).sort((a, b) => a - b);

function count(arr, mid) {
  let cnt = 0;

  for (let val of arr) {
    cnt += parseInt(val / mid);
  }

  return cnt;
}

function solution(arr, m) {
  let answer = 0;
  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);

    if (count(arr, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  console.log(answer);
}

solution(arr, m);
