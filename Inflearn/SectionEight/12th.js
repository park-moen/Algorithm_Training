function solution(n, r) {
  let answer;
  const dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    else if (n === r || r === 0) return 1;
    else {
      dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return dy[n][r];
    }
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3));
