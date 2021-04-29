function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let value of arr) {
    if (value % 2) {
      sum += value;
      if (value < min) min = value;
    }
  }

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
