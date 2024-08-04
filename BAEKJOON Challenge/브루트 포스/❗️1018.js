const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} pattern
 * @param {string[]} board
 * @returns number
 */
function getRepaintCount(x, y, pattern, board) {
  const expectedColors = ["W", "B"];

  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i + x][j + y] !== expectedColors[(i + pattern + j) % 2]) {
        count++;
      }
    }
  }

  return count;
}

/**
 *
 * @param {string[]} input
 * @returns
 */
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1);

  let minRepaintCount = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      const repaintForPatternOne = getRepaintCount(i, j, 0, board);
      const repaintForPatternTwo = getRepaintCount(i, j, 1, board);
      const currentMinCount = Math.min(repaintForPatternOne, repaintForPatternTwo);

      minRepaintCount = Math.min(minRepaintCount, currentMinCount);
    }
  }

  return minRepaintCount;
}

console.log(solution(input));
