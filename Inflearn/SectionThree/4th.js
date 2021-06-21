function solution(s, t) {
  let answer = [];
  let position = 100;

  for (let val of s) {
    if (val === t) {
      position = 0;
      answer.push(position);
    } else {
      position++;
      answer.push(position);
    }
  }

  position = 100;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) position = 0;
    else {
      position++;
      answer[i] = Math.min(answer[i], position);
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
