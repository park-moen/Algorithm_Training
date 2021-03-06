function solution(n, m) {
  let answer = [];
  const temp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(3, 2));
