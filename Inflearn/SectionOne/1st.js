// 1번째 방법
function solution(a, b, c) {
  let answer = 0;

  if (a < b) answer = a;
  else if (a > b) answer = b;

  if (answer > c) answer = c;

  return answer;
}

console.log(solution(3, 7, 4));
