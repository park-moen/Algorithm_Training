const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('')
  .map(v => +v);

let res = input.shift();

for (let num of input) {
  if (res <= 1 || num <= 1) {
    res += num;
  } else {
    res *= num;
  }
}

console.log(res);
