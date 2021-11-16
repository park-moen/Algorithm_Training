const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(v => +v);
const data = input[1].split(' ').map(v => +v);
const arr = Array.from({ length: m + 1 }, () => 0);

for (let x of data) {
  arr[x] += 1;
}

let res = 0;

for (let i = 1; i <= m; i++) {
  n -= arr[i];
  res += arr[i] * n;
}

console.log(res);
