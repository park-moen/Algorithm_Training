function solution(str1, str2) {
  const n1 = str1.length;
  const m2 = str2.length;
  const dp = Array.from(Array(n1 + 1), () => Array(m2 + 1).fill(0));

  for (let i = 1; i < n1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j < m2 + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < n1 + 1; i++) {
    for (let j = 1; j < m2 + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  console.log(dp[n1][m2]);
}

// const str1 = 'cat';
// const str2 = 'cut';

const str1 = 'sunday';
const str2 = 'saturday';

solution(str1, str2);
