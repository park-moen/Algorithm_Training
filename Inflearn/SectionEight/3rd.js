function solution(n) {
  let answer = [];

  function DFS(node) {
    if (node > 7) return;
    else {
      DFS(node * 2);
      DFS(node * 2 + 1);
      answer.push(node);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(1));
