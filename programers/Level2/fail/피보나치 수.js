function solution(n) {
  const memoization = new Array(n + 1).fill(0);
  const STATIC_NUMBER = 1234567;

  memoization[0] = 0;
  memoization[1] = 1;

  for (let i = 2; i <= n; i++) {
    memoization[i] = (memoization[i - 1] + memoization[i - 2]) % STATIC_NUMBER;
  }

  return memoization[n];
}

console.log(solution(8));
