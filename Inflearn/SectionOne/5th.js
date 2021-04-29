// for 문을 사용해서 풀어보자
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let value of arr) {
    if (value < min) min = value;
  }

  answer = min;

  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
