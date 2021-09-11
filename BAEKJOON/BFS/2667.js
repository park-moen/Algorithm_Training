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
  let cnt = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        queue.push([i, j]);

        while (queue.length) {
          const [x, y] = queue.shift();
          cnt++;

          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
              graph[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        complex++;
        home.push(cnt);
        cnt = 0;
      }
    }
  }

  home = home.sort((a, b) => a - b);
  home.unshift(complex);

  for (let val of home) {
    console.log(val);
  }
}

solution(N, graph);
