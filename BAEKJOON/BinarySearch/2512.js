const fs = require('fs');
const [n, array, m] = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(n);
const M = Number(m);
const budgets = array
  .split(' ')
  .map(budget => Number(budget))
  .sort((a, b) => a - b);

function sumOfBudget(arr, key) {
  let sum = 0;

  for (let val of arr) {
    if (val > key) {
      sum += key;
    } else {
      sum += val;
    }
  }

  return sum;
}

function solution(budgets, n, target) {
  let answer = 0;
  let sp = 1;
  let ep = budgets[n - 1];

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);

    if (sumOfBudget(budgets, mid) <= target) {
      answer = mid;
      sp = mid + 1;
    } else {
      ep = mid - 1;
    }
  }

  console.log(answer);
}

solution(budgets, N, M);
