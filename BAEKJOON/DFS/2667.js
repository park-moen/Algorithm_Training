const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());

const graph = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
  graph[i] = input[i].split('').map(el => +el);
}

function solution(n, graph) {
  let complex = 0;
  let home = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let cnt = 0;

  function dfs(x, y) {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
        graph[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
    cnt++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        complex++;
        dfs(i, j);
        home.push(cnt);
        cnt = 0;
      }
    }
  }

  home.sort((a, b) => a - b);
  home = [complex, ...home];

  for (let val of home) {
    console.log(val);
  }
}

solution(N, graph);
