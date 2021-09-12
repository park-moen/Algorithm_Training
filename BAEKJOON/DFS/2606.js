const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for (let i of input) {
  const [x, y] = i.split(' ').map(el => +el);

  graph[x][y] = 1;
  graph[y][x] = 1;
}

function solution() {
  let answer = new Set();

  function dfs(v) {
    for (let i = 1; i <= N; i++) {
      if (graph[v][i] === 1) {
        graph[v][i] = 0;
        answer.add(i);
        dfs(i);
      }
    }
  }

  dfs(1);

  answer = [...answer].sort((a, b) => a - b);
  console.log(answer.slice(1).length);
}

solution();
