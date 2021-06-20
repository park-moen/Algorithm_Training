function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let val of s) {
    const len = val.length;
    if (len > max) {
      max = len;
      answer = val;
    }
  }

  return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
