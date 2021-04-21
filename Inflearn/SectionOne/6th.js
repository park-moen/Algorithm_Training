function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      answer.push(arr[i]);
      sum += arr[i];
    }
  }

  answer = [sum, Math.min(...answer)];

  retur answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
