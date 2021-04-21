function solution(n) {
  let answer = 0;
  for (let i = n; i > 0; i--) {
    answer += i;
  }

  return answer;
}

console.log(solution(10));
