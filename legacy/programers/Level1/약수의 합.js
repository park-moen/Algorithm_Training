function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

const n1 = 12;
const n2 = 5;

solution(n2);
