// 1번째 방법
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solution(3, 7, 4));

// 2번째 방법
function solution2(a, b, c) {
  let answer;

  return answer;
}

console.log(solution2(3, 7, 4));
