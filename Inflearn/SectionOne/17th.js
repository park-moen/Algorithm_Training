// 3가지 방법 작성

function solution(s) {
  // let answer = [...new Set(s)];
  // let answer = s.filter((v, i) => {
  //   if (s.indexOf(v) === i) return v;
  // });

  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
