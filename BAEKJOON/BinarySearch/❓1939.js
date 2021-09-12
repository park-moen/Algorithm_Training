const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const NM = input.shift().split(' ');
const AB = input.pop().split(' ');

const N = Number(NM[0]);
const M = Number(NM[1]);
const A = Number(AB[0]);
const B = Number(AB[1]);

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

let max = Number.MIN_SAFE_INTEGER;

for (let i of input) {
  const [x, y, z] = i.split(' ').map(el => +el);

  if (max < z) {
    max = z;
  }

  graph[x][y] = z;
  graph[y][x] = z;
}

function bfs(s, e, w) {
  const queue = [];
  const visited = Array.from({ length: N + 1 }, () => 0);

  queue.push(s);
  visited[s] = 1;

  while (queue.length) {
    const now = queue.shift();

    if (now === e) return true;
    else {
      for (let i = 1; i <= N; i++) {
        if (visited[i] === 0 && graph[now][i] >= w) {
          visited[i] = 1;
          queue.push(i);
        }
      }
    }
  }
  return false;
}

function binarySearch(a, b, max) {
  let answer = 0;
  let sp = 1;
  let ep = max;

  while (ep >= sp) {
    const mid = parseInt((sp + ep) / 2);

    if (bfs(a, b, mid)) {
      answer = mid;
      sp = mid + 1;
    } else {
      ep = mid - 1;
    }
  }

  return answer;
}

console.log(binarySearch(A, B, max));
