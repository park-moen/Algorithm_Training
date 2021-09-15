const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let testCase = Number(input.shift());
let graph = [];

function solution(w, h, arr) {
  let cnt = 0;

  function dfs(x, y) {
    graph[x][y] = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < h && ny >= 0 && ny < w && graph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  makeGraph(w, h, arr);

  for (let i = 0; i < h; i < i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }
  console.log(cnt);
}

function makeGraph(width, height, arr) {
  graph = Array.from(Array(height), () => Array(width).fill(0));

  for (let val of arr) {
    const [a, b] = val.split(' ').map(el => +el);
    graph[b][a] = 1;
  }

  input = input.slice(arr.length);
}

while (testCase--) {
  const [M, N, K] = input
    .shift()
    .split(' ')
    .map(el => +el);
  const arr = input.slice(0, K);

  solution(M, N, arr);
}
