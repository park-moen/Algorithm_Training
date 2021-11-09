const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [N, K] = input
  .shift()
  .split(' ')
  .map(v => +v);
const [targetS, targetX, targetY] = input
  .pop()
  .split(' ')
  .map(v => +v);
const graph = input.map(virus => virus.split(' ').map(v => +v));
const data = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] !== 0) data.push([graph[i][j], 0, i, j]);
  }
}

data.sort();
const queue = [...data];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (queue.length) {
  const [virus, s, x, y] = queue.shift();

  if (s === targetS) break;

  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N && graph[nx][ny] === 0) {
      graph[nx][ny] = virus;
      queue.push([virus, s + 1, nx, ny]);
    }
  }
}

console.log(graph[targetX - 1][targetY - 1]);
