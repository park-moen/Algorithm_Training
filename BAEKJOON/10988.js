const input = require('fs').readFileSync('input.txt').toString().trim();

function solution(str) {
  if (str.split('').reverse().join('') === str) return 1;

  return 0;
}

console.log(solution(input));
