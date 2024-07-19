const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item => item.split(" ").map(Number));

/**
 *
 * @param {number[][]} input
 * @returns number
 */
function solution(input) {
  const n = input.shift()[0];
  let maxWidth = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  let minWidth = Number.MAX_SAFE_INTEGER;
  let minHeight = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    const [x, y] = input[i];

    if (x > maxWidth) {
      maxWidth = x;
    }

    if (x < minWidth) {
      minWidth = x;
    }

    if (y > maxHeight) {
      maxHeight = y;
    }

    if (y < minHeight) {
      minHeight = y;
    }
  }

  const width = maxWidth - minWidth;
  const height = maxHeight - minHeight;

  return width * height;
}

console.log(solution(input));
