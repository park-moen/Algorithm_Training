const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);
const k = input.shift();
const stack = [];

for (let i = 0; i < k; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

const result = stack.reduce((acc, cur) => acc + cur, 0);

console.log(result);
