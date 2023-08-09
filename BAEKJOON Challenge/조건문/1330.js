const fs = require('fs');
const [left, right] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

let result;

if (left > right) {
  console.log('>');
}
if (left < right) {
  console.log('<');
}

if (left === right) {
  console.log('==');
}
