const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('')
  .map(v => +v)
  .sort((a, b) => b - a);

function solution(input) {
  let sum = 0;

  if (input[input.length - 1] !== 0) {
    return -1;
  }

  for (let value of input) {
    sum += value;
  }

  if (sum % 3 !== 0) {
    return -1;
  }

  return input.join('');
}

console.log(solution(input));
