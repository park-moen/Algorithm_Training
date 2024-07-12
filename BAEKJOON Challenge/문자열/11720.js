const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  return input[1]
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
