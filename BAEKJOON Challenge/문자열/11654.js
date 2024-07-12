const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

/**
 *
 * @param {string} input
 * @returns number
 */
function solution(input) {
  return input.charCodeAt();
}

console.log(solution(input));
