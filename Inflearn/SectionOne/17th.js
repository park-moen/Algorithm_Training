function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
