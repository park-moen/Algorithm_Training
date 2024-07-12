const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

/**
 *
 * @param {string} input
 * @returns number
 */
function solution(input) {
  return input.length;
}

console.log(solution(input));
