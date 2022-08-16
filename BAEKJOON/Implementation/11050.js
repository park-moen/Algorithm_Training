const fs = require('fs');
const [n, r] = fs
  .readFileSync('input.txt')
  .toString()
  .split(' ')
  .map(v => +v);

function solution(n, r) {
  let answer = [];

  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(n, r));
