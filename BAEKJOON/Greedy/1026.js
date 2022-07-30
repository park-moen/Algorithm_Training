const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => b - a);
const B = input[2]
  .split(' ')
  .map(v => +v)
  .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);
