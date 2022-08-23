function solution(n, info) {
  const board = Array.from(Array(11), () => 0);
  const infoLength = info.length;

  let answer = [-1];
  let maxGap = Number.MIN_SAFE_INTEGER;

  function dfs(index, remain) {
    if (remain < 0) {
      return;
    }

    if (remain === 0) {
      let apeachScore = 0;
      let lionScore = 0;

      for (let i = 0; i < infoLength; i++) {
        if (info[i] === 0 && board[i] === 0) {
          continue;
        } else if (info[i] >= board[i]) {
          apeachScore += 10 - i;
        } else {
          lionScore += 10 - i;
        }
      }

      if (lionScore > apeachScore && lionScore - apeachScore >= maxGap) {
        if (lionScore - apeachScore > maxGap) {
          maxGap = lionScore - apeachScore;
          answer = [...board];
        } else {
          let currentIndex = 0;

          for (let i = 0; i < infoLength; i++) {
            if (board[i] !== 0 || answer[i] !== 0) {
              currentIndex = i;
            }
          }

          if (board[currentIndex] > answer[currentIndex]) {
            answer = [...board];
          }
        }
      }

      return;
    }

    for (let i = index; i < infoLength; i++) {
      const targetCount = remain - (info[i] + 1) >= 0 ? info[i] + 1 : remain;

      board[i] = targetCount;
      dfs(index + 1, remain - targetCount);
      board[i] = 0;
    }
  }

  dfs(0, n);

  return answer;
}

const n = 10;
const info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3];

console.log(solution(n, info));
