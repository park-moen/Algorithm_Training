function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let value of s) {
    if (value.length > max) {
      max = value.length;
      answer = value;
    }
  }

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
