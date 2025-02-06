const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const divisor = input[1].split(' ').map(Number);

  return Math.min(...divisor) * Math.max(...divisor);
}

console.log(solution(input));
