const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = input.length;
const m = input[0].split(' ').length;
const graph = Array.from({ length: n }, () => []);

for (let i = 0; i < n; i++) {
  graph[i] = input[i].split(' ').map(v => +v);
}

function dfsSolution(graph, n, m) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y) {
    graph[x][y] = 0;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny]) dfs(nx, ny);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        answer++;
        dfs(i, j);
      }
    }
  }

  console.log(answer);
}

// dfsSolution(graph, n, m);

function bfsSolution(graph, n, m) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        answer++;
        graph[i][j] = 0;
        queue.push([i, j]);

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 1) {
              graph[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  console.log(answer);
}

bfsSolution(graph, n, m);

// 1 1 0 0 0 1 0
// 0 1 1 0 1 1 0
// 0 1 0 0 0 0 0
// 0 0 0 1 0 1 1
// 1 1 0 1 1 0 0
// 1 0 0 0 1 0 0
// 1 0 1 0 1 0 0
