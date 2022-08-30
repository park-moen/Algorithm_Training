// n은 1 이상, 2000 이하인 정수로 재귀 호출로 문제를 풀게 된다면 stackOverflow가 발생한다.

function solution(n) {
  let answer = 0;

  function dfs(value) {
    if (value > n) {
      return;
    }

    if (value === n) {
      answer++;
    } else {
      dfs(value + 1);
      dfs(value + 2);
    }
  }

  dfs(0);

  console.log(answer);

  return answer % 134567;
}

function solution2(n) {
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  console.log(dp[n - 1]);
  return dp[n - 1];
}

const n = 50;
solution2(n);
// solution(n);
