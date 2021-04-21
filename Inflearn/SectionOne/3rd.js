function solution(n) {
  let answer;
  const dozen = 12;
  answer = Math.ceil(n / dozen);
  return answer;
}

console.log(solution(178));
