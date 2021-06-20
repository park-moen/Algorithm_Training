function solution(arr) {
  const answer = [];
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let val of arr) {
    if (val % 2) {
      total += val;
      if (min > val) min = val;
    }
  }

  answer.push(min);
  answer.push(total);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
