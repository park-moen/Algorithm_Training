function solution(arr) {
  let answer;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of arr) {
    let temp = val;

    while (temp) {
      sum += temp % 10;
      temp = parseInt(temp / 10);

      if (sum > max) {
        max = sum;
        answer = val;
      } else if (sum === max) {
        answer = Math.max(answer, val);
      }
    }

    sum = 0;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
