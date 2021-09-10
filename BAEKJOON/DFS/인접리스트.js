function solution(n, arr) {
  let answer = 0;
  let path = [];
  const graph = Array.from(Array(n + 1), () => Array());
  const visited = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (visited[graph[v][i]] === 0) {
          visited[graph[v][i]] = 1;
          path.push(graph[v][i]);
          dfs(graph[v][i]);
          visited[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }

  path[0] = 1;
  visited[1] = 1;
  dfs(1);

  console.log(answer);
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
solution(5, arr);
