// 2가지 방법 작성

function solution(s, t) {
  // let answer = s.split(t).length - 1;
  let answer = 0;

  for (let val of s) {
    if (val === t) answer++;
  }

  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
