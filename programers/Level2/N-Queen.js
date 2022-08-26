function solution(n) {
  let answer = 0;

  function isValid(row, board) {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) {
        return false;
      }

      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
        return false;
      }
    }

    return true;
  }

  function dfs(row, board) {
    if (n === row) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;

        if (isValid(row + 1, board)) {
          dfs(row + 1, board);
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    const board = Array.from({ length: n + 1 }, () => 0);

    board[1] = i;
    dfs(1, board);
  }

  return answer;
}

const n = 4;
solution(n);
