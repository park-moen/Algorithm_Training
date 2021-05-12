function solution(n, arr) {
  let answer = 0;

  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const checkGraph = Array.from({ length: n + 1 }, () => 0);
  const path = [];

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && checkGraph[i] === 0) {
          checkGraph[i] = 1;
          path.push(i);
          DFS(i);
          checkGraph[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  checkGraph[1] = 1;
  DFS(1);

  return answer;
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
console.log(solution(5, arr));
