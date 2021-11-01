const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, k] = input
  .shift()
  .split(' ')
  .map(v => +v);

const a = input[0]
  .split(' ')
  .map(v => +v)
  .sort();
const b = input[1]
  .split(' ')
  .map(v => +v)
  .sort()
  .reverse();

for (let i = 0; i < k; i++) {
  if (a[i] < b[i]) [a[i], b[i]] = [b[i], a[i]];
  else break;
}

const sum = a.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
