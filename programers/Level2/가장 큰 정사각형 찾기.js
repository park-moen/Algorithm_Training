function solution(board) {
  let answer = 0;

  const row = board.length;
  const col = board[0].length;

  if (row < 2 && col < 2) {
    return 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }

      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  return Math.pow(answer, 2);
}

const board1 = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

[
  [0, 1, 1, 1],
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [0, 0, 1, 0],
];

const board2 = [
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

const board3 = [
  [0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

solution(board1);
