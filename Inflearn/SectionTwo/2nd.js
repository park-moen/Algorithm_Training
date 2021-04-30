function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of arr) {
    if (val > max) {
      max = val;
      answer++;
    }
  }

  return answer;
}

let arr = [130, 140, 148, 145, 150, 150, 158];
console.log(solution(arr));
