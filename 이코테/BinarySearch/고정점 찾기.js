const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input
  .join('')
  .split(' ')
  .map(v => +v);

let result = -1;
let sp = 0;
let ep = n - 1;

while (sp <= ep) {
  const mid = parseInt((sp + ep) / 2);

  if (arr[mid] === mid) {
    result = mid;
    break;
  } else if (arr[mid] < mid) {
    sp = mid + 1;
  } else {
    ep = mid - 1;
  }
}

console.log(result);
