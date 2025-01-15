const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function solution(input) {
  if (input === 0) {
    return 1;
  }

  return factorial(input);
}

console.log(solution(input));
