function solution(s, t) {
  let answer = [];
  let temp = 1000;

  for (let val of s) {
    if (val !== t) {
      temp++;
      answer.push(temp);
    } else {
      temp = 0;
      answer.push(temp);
    }
  }

  temp = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== t) {
      temp++;
      answer[i] = Math.min(answer[i], temp);
    } else {
      temp = 0;
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
