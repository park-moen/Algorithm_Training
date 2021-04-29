function solution(s, t) {
  let answer = 0;

  for (let value of s) {
    if (value === t) answer++;
  }

  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
