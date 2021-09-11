const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(item => +item);
input = input.slice(1);

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

for (let i of input) {
  let [x, y] = i.split(' ').map(item => +item);

  graph[x][y] = 1;
  graph[y][x] = 1;
}

const DFS_graph = [];
const BFS_graph = [];
const BFS_visited = Array.from({ length: N + 1 }, () => 0);
const DFS_visited = Array.from({ length: N + 1 }, () => 0);

function dfs(v) {
  DFS_graph.push(v);
  DFS_visited[v] = 1;

  for (let i = 1; i <= N; i++) {
    if (DFS_visited[i] === 0 && graph[v][i] === 1) {
      DFS_visited[i] = 1;
      dfs(i);
    }
  }
}

function bfs(v) {
  let queue = [];

  queue.push(v);
  BFS_visited[v] = 1;
  BFS_graph.push(v);

  while (queue.length) {
    const nv = queue.shift();

    for (let i = 1; i < graph.length; i++) {
      if (graph[nv][i] === 1 && BFS_visited[i] === 0) {
        BFS_visited[i] = 1;
        queue.push(i);
        BFS_graph.push(i);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(DFS_graph.join(' '));
console.log(BFS_graph.join(' '));
