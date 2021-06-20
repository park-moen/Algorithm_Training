function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let val of arr) {
    if (min > val) min = val;
  }

  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
