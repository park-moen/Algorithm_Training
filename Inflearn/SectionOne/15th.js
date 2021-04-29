function solution(s) {
  let answer;
  let min = parseInt(s.length / 2);

  if (s.length % 2) answer = s.substring(min, min + 1);
  else answer = s.substring(min - 1, min + 1);

  return answer;
}
console.log(solution('study'));
console.log(solution('good'));
