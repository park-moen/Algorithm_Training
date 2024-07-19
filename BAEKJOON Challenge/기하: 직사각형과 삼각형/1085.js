const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  const [x, y, w, h] = input;

  const distanceToLeft = x;
  const distanceToRight = w - x;
  const distanceToBottom = y;
  const distanceToTop = h - y;

  return Math.min(distanceToLeft, distanceToRight, distanceToBottom, distanceToTop);
}

console.log(solution(input));
