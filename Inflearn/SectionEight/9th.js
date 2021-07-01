function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const types = arr.length;

  function DFS(L, sum) {
    if (sum > m || L >= answer) return;

    if (sum === m) {
      console.log(L, sum);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < types; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
