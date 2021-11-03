const fs = require('fs');
let [n, arr, m, x] = fs.readFileSync('input.txt').toString().trim().split('\n');
arr = arr.split(' ').map(v => +v);
x = x.split(' ').map(v => +v);

function binarySearch(arr, target, sp, ep) {
  while (sp <= ep) {
    const mid = parseInt((sp + ep) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) ep = mid - 1;
    else sp = mid + 1;
  }
  return null;
}

function solution(n, m, arr, x) {
  arr.sort((a, b) => a - b);
  const answer = [];

  for (let val of x) {
    const result = binarySearch(arr, val, 0, n - 1);

    if (result !== null) answer.push('yes');
    else answer.push('no');
  }

  console.log(answer.join(' '));
}

// solution(+n, +m, arr, x);

function countSort(n, m, arr, x) {
  const answer = [];
  const array = Array(20).fill(0);

  for (let idx of arr) {
    array[idx] = 1;
  }

  for (let idx of x) {
    if (array[idx] === 1) answer.push('yes');
    else answer.push('no');
  }

  console.log(answer.join(' '));
}

// countSort(+n, +m, arr, x);

function setFuc(n, m, arr, x) {
  const answer = [];
  const set = new Set(arr);

  for (let val of x) {
    if (set.has(val)) answer.push('yes');
    else answer.push('no');
  }

  console.log(answer.join(' '));
}

// setFuc(+n, +m, arr, x);
