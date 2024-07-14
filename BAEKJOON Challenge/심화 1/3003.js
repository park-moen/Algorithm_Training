const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

/**
 *
 * @param {number []} input
 * @returns
 */
function solution(input) {
  const blackPiece = [1, 1, 2, 2, 2, 8];

  return blackPiece.map((value, index) => value - input[index]).join(" ");
}

console.log(solution(input));
