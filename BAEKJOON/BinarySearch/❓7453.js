const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
input = input.slice(1);

const A = [];
const B = [];
const C = [];
const D = [];

for (let i = 0; i < n; i++) {
  let [a, b, c, d] = input[i].split(' ').map(el => +el);

  A.push(a);
  B.push(b);
  C.push(c);
  D.push(d);
}

const AB = [];
const CD = [];

let idx = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    AB[idx] = A[i] + B[j];
    CD[idx++] = C[i] + D[j];
  }
}

CD.sort((c, d) => c - d);

function lowerBound(arr, find) {
  let sp = 0;
  let ep = arr.length;

  while (ep > sp) {
    const mid = parseInt((sp + ep) / 2);

    if (arr[mid] >= find) ep = mid;
    else sp = mid + 1;
  }

  return ep;
}

function upperBound(arr, find) {
  let sp = 0;
  let ep = arr.length;

  while (ep > sp) {
    const mid = parseInt((sp + ep) / 2);

    if (arr[mid] > find) ep = mid;
    else sp = mid + 1;
  }

  return ep;
}

function solution() {
  let cnt = 0;
  for (let key of AB) {
    let lo = lowerBound(CD, -key);
    let hi = upperBound(CD, -key);

    cnt += hi - lo;
  }

  console.log(cnt);
}

solution();
