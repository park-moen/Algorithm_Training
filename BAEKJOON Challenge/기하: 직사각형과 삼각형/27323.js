const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  return input.reduce((acc, cur) => acc * cur, 1);
}

console.log(solution(input));
