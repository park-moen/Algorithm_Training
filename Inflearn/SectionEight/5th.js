function solution(arr) {
  let answer = 'YES';
  const total = arr.reduce((a, b) => a + b, 0);
  const len = arr.length;
  let flag = 0;

  function DFS(L, sum) {
    if (flag === 1) return;
    if (L === len) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
