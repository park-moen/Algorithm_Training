function solution(s, t) {
  let answer = [];
  let p = 1000;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = 'teachermodedd';
console.log(solution(str, 'e'));
