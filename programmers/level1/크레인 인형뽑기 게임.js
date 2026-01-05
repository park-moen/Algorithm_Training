/**
 *
 * @param {number[]} board
 * @param {number[]} moves
 */
function solution(board, moves) {
  const basket = [];
  let count = 0;

  for (const position of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][position - 1] !== 0) {
        if (basket[basket.length - 1] === board[i][position - 1]) {
          count += 2;
          basket.pop();
        } else {
          basket.push(board[i][position - 1]);
        }

        board[i][position - 1] = 0;
        break;
      }
    }
  }

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
