function solution(n) {
  let answer = 0;
  let dozen = 12;

  if (n % dozen) answer = Math.ceil(n / dozen);
  else answer = n / dozen;

  return answer;
}

console.log(solution(11));
