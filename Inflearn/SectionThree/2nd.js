// 2가지 방법이 존재합니다.

function solution(s) {
  let answer = 'YES';

  s = s.toLowerCase().replace(/[^a-z]/g, '');
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
