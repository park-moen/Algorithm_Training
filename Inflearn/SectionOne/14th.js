function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of s) {
    if (val.length > max) {
      max = val.length;
      answer = val;
    }
  }

  return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
