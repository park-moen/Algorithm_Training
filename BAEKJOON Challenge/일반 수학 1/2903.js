const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

/**
 *
 * @param {number} input
 * @returns
 */
function solution(input) {
  return (2 ** input + 1) ** 2;
}

console.log(solution(input));
