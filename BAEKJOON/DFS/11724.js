const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const NM = input[0].split(' ').map(el => +el);
const N = NM[0];
const M = NM[1];

input = input.slice(1);

let graph = Array.from(Array(N + 1), () => []);
let visited = Array.from({ length: N + 1 }, () => 0);

for (let vertex of input) {
  const [a, b] = vertex.split(' ').map(el => +el);

  graph[a].push(b);
  graph[b].push(a);
}

function solution() {
  let cnt = 0;
  function dfs(v) {
    visited[v] = 1;
    for (let nv of graph[v]) {
      if (visited[nv] === 0) {
        visited[nv] = 1;
        dfs(nv);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      cnt++;
      dfs(i);
    }
  }
  console.log(cnt);
}

solution();
