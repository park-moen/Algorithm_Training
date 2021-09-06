const fs = require('fs');
const [n, ...arr] = fs.readFileSync('input.txt').toString().trim().split(/\s+/);

const N = Number(n);
const sequence = arr.map(num => Number(num));

function lowerBound(target, dp) {
  let answer = 0;
  let sp = 0;
  let ep = dp.length - 1;

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);
    if (target <= dp[mid]) {
      answer = mid;
      ep = mid - 1;
    } else {
      sp = mid + 1;
    }
  }

  return answer;
}

function solution(sequence) {
  const dp = [];
  dp.push(sequence[0]);

  for (let item of sequence) {
    if (item > dp[dp.length - 1]) {
      dp.push(item);
    } else {
      const point = lowerBound(item, dp);
      dp[point] = item;
    }
  }

  console.log(dp.length);
}

solution(sequence, N);
