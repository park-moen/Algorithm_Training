function solution(n) {
  let answer = [];
  const checkArr = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = '';

      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) temp += i + ' ';
      }

      if (temp.length > 0) answer.push(temp.trim());
    } else {
      checkArr[v] = 1;
      DFS(v + 1);
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
