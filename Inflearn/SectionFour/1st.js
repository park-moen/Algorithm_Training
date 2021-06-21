function solution(arr) {
  let answer;
  let max = Number.MIN_VALUE;

  for (let val of arr) {
    let temp = val;
    let sum = 0;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = val;
    } else if (sum === max) {
      if (val > answer) answer = val;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
