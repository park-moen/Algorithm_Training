const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map(v => +v);
const board = Array.from(Array(n), () => []);

for (let i = 0; i < n; i++) {
  board[i] = input[i].split(' ').map(v => +v);
}

function bfs(x, y) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  queue.push([x, y]);

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && board[nx][ny] === 1) {
        board[nx][ny] = board[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  console.log(board[n - 1][m - 1]);
}

bfs(0, 0);

// 5 6
// 1 0 1 0 1 0
// 1 1 1 1 1 1
// 0 0 0 0 0 1
// 1 1 1 1 1 1
// 1 1 1 1 1 1
