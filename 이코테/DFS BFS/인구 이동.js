const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [n, l, r] = input[0].split(' ').map(v => +v);
const graph = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(' ').map(v => +v);
}

let isMove = false;
let totalCount = 0;

function bfs(row, col, visited, graph) {
  let people = graph[row][col];
  let cnt = 1;
  const queue = [];
  const editArr = [];

  visited[row][col] = true;
  queue.push([row, col]);
  editArr.push([row, col]);

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (visited[nx][ny]) continue;

      const limit = Math.abs(graph[nx][ny] - graph[x][y]);
      if (limit >= l && limit <= r) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        editArr.push([nx, ny]);
        people += graph[nx][ny];
        cnt++;
      }
    }
  }

  const movePeople = parseInt(people / cnt);

  if (cnt > 1) {
    isMove = true;

    for (let [editX, editY] of editArr) {
      graph[editX][editY] = movePeople;
    }
  }
}

while (true) {
  isMove = false;
  const visited = Array.from(Array(n), () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) bfs(i, j, visited, graph);
    }
  }

  if (isMove) totalCount++;
  else break;
}

console.log(totalCount);
