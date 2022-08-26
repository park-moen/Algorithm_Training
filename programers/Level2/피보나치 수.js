// 재귀 방식으로 풀게된다면 너무 깊게 dfs를 진행하게 된다면 스택오버플로우 or 시간초가가 발생하여 에러가 발생한다.

function nonSolution(n) {
  const memoization = Array.from({ length: n + 2 }, () => 0);
  const REMAINSTAICNUMBER = 1234567;
  let answer = 0;

  function dfs(n) {
    if (memoization[n] !== 0) {
      return memoization[n];
    }

    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    } else {
      memoization[n - 1] = dfs(n - 1);
      memoization[n - 2] = dfs(n - 2);

      return memoization[n - 1] + memoization[n - 2];
    }
  }

  answer = dfs(n);

  return REMAINSTAICNUMBER % answer;
}

// 동적 프로그래밍으로 문제 해결

function solution(n) {
  const memoization = new Array(n + 1).fill(0);
  const REMAINSTAICNUMBER = 1234567;

  memoization[0] = 0;
  memoization[1] = 1;

  for (let i = 2; i <= n; i++) {
    // JS 숫자 타입은 64비트 부동소수점을 사용하고 있어서 100,000번째 피보나치 수는 자릿수가 20,000을 넘어가며,
    // 64비트 범위를 넘어가서 출력값이 Infinity로 표시되는 문제가 발생
    // 해결책으로 memoization[i]값을 피보나치 수을 추가하기 전에 1234567로 나누어 나머지값을 출력하는 방식을 채택
    memoization[i] = (memoization[i - 1] + memoization[i - 2]) % REMAINSTAICNUMBER;
  }

  return memoization[n];
}

const n = 100000;

console.log(solution(n));
