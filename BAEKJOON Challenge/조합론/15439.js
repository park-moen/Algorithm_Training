const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  if (input === 1) {
    return 0;
  }

  return input * (input - 1);
}

console.log(solution(input));
