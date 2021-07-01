function solution(n) {
  let answer = [];
  const ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = [];
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) temp.push(i);
      }

      if (temp.length > 0) answer.push(temp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
