function solution(n) {
  let answer = '';

  function DFS(level) {
    if (level === 0) return;
    else {
      DFS(parseInt(level / 2));
      answer += level % 2;
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));
