const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let testCase = Number(input.shift());
let graph = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (testCase--) {
  const [M, N, K] = input
    .shift()
    .split(' ')
    .map(el => +el);
  const arr = input.slice(0, K);
  let cnt = 0;
  const queue = [];

  graph = Array.from(Array(N), () => []);

  for (let val of arr) {
    const [w, h] = val.split(' ').map(el => +el);
    graph[h][w] = 1;
  }
  input = input.slice(K);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        queue.push([i, j]);

        while (queue.length) {
          const [x, y] = queue.shift();

          console.log(x, y);

          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 1) {
              graph[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }

        cnt++;
      }
    }
  }

  console.log(cnt);
}
