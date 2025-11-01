function solution(n) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result += i;
      const other = n / i;

      if (other !== i) {
        result += other;
      }
    }
  }

  return result;
}

console.log(solution(16));
