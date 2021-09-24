const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);

input = input.slice(1);

const range = input
  .join(' ')
  .split(' ')
  .map(el => +el);

let max = Math.max(...range) - 1;
let min = Math.min(...range);

function solution(h) {
  let cnt = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const graph = Array.from(Array(N), () => []);

  for (let i = 0; i < N; i++) {
    let temp = input[i].split(' ').map(el => +el);

    graph[i] = temp;
  }

  function dfs(x, y) {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && graph[nx][ny] > h) {
        graph[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] > h) {
        graph[i][j] = 0;
        dfs(i, j);
        cnt++;
      }
    }
  }

  return cnt;
}

const arr = [];
for (let i = min; i <= max; i++) {
  arr.push(solution(i));
}

console.log(Math.max(...arr));
