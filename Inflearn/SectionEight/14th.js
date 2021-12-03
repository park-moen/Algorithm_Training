function solution(n, m) {
  let answer = [];
  const temp = Array.from({ length: m }, () => 0);
  console.log(temp);

  function DFS(L, start) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = start; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
