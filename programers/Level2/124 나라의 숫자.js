function solution(n) {
  let answer = '';
  const numbers = [4, 1, 2];

  while (n) {
    answer = numbers[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }

  return answer;
}

console.log(solution(10));
