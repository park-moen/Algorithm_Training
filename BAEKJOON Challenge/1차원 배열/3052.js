const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} input
 * @returns number
 */
function solution(input) {
  return new Set(input.map(item => item % 42)).size;
}

console.log(solution(input));
