const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.trim());

function getRepaintCount(x, y, pattern) {
  let count = 0;
  const expectedColors = ["W", "B"];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[x + i][y + j] !== expectedColors[(i + pattern + j) % 2]) {
        count++;
      }
    }
  }
  return count;
}

let minRepaints = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const repaintsForPattern1 = getRepaintCount(i, j, 0); // Pattern starting with 'W'
    const repaintsForPattern2 = getRepaintCount(i, j, 1); // Pattern starting with 'B'
    const minRepaintsForCurrentPosition = Math.min(
      repaintsForPattern1,
      repaintsForPattern2
    );
    minRepaints = Math.min(minRepaints, minRepaintsForCurrentPosition);
  }
}

console.log(minRepaints);
