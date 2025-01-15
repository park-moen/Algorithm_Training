const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  return 2 ** input;
}

console.log(solution(input));
