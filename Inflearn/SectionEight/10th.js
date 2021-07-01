function solution(m, arr) {
  let answer = [];
  const len = arr.length;
  const ch = Array.from({ length: len }, () => 0);
  const temp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < len; i++) {
        if (ch[i] === 0) {
          temp[L] = arr[i];
          ch[i] = 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
