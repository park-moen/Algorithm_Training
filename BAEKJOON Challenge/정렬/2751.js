const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} input
 * @returns string
 */
function solution(input) {
  return input
    .slice(1)
    .sort((a, b) => a - b)
    .join("\n");
}

console.log(solution(input));
