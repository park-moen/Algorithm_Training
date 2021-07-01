function solution(n) {
  let answer;

  function DFS(num) {
    if (num === 1) return 1;
    else return num * DFS(num - 1);
  }

  answer = DFS(n);

  return answer;
}

console.log(solution(5));
