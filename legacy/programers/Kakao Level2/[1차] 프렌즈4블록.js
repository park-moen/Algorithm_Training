function solution(m, n, board) {
  board = board.map(v => v.split(''));

  while (true) {
    const array = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          array.push([i, j]);
        }
      }
    }

    if (!array.length) {
      return [].concat(...board).filter(v => !v).length;
    }

    for (let i = 0; i < array.length; i++) {
      const col = array[i][0];
      const row = array[i][1];

      board[col][row] = 0;
      board[col + 1][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row + 1] = 0;
    }

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some(v => !v)) {
        continue;
      }

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (board[k][j] && !board[i][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}

const m = 6;
const n = 6;
const board = ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'];

console.log(solution(m, n, board));
