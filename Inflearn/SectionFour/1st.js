function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of arr) {
    let temp = val;
    let sum = 0;

    while (temp) {
      sum += temp % 10;
      temp = parseInt(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = val;
    }

    if (sum === max) answer = Math.max(val, answer);
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
