function solution(arr) {
  let answer = 0;
  let cnt = 0;

  for (let val of arr) {
    if (val === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
