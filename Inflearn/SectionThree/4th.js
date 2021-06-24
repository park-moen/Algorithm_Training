function solution(s, t) {
  let answer = [];
  let pos = 100;
  const len = s.length;

  for (let val of s) {
    if (val === t) {
      pos = 0;
      answer.push(pos);
    } else {
      pos++;
      answer.push(pos);
    }
  }

  pos = 100;

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === t) {
      pos = 0;
    } else {
      pos++;

      answer[i] = Math.min(answer[i], pos);
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
