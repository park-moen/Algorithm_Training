const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(item => +item);

const arr = [];
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const ch = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '));
}

for (let [a, b] of arr) {
  graph[a][b] = 1;
}

function solution(graph, ch, V, N) {
  let answer = '';

  function dfs(v) {
    for (let i = 1; i <= N; i++) {
      if (ch[i] === 0 && graph[v][i] === 1) {
        ch[i] = 1;
        answer += i;
        dfs(i);
      }
    }
  }

  ch[V] = 1;
  answer += V;
  dfs(V);

  console.log(answer);
}

solution(graph, ch, V, N);
