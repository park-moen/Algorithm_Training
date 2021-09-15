const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let graph = [];

function solution(w, h) {
  let cnt = 0;

  function dfs(x, y) {
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];

    graph[x][y] = 0;

    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < h && ny >= 0 && ny < w && graph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }

  console.log(cnt);
}

function makeGraph(w, h) {
  graph = Array.from(Array(h), () => []);

  for (let i = 0; i < h; i++) {
    let temp = input[i].split(' ').map(v => +v);
    graph[i] = temp;
  }

  input = input.slice(h);
}

while (true) {
  const [w, h] = input
    .shift()
    .split(' ')
    .map(v => +v);

  if (w === 0 && h === 0) break;
  else {
    makeGraph(w, h);
    solution(w, h);
  }
}
