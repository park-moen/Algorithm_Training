function solution(m, arr) {
  let answer = [];
  const checkArr = Array.from({ length: arr.length }, () => 0);
  const temp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
