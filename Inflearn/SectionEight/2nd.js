function solution(n) {
  let answer = '';

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += L % 2;
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));
