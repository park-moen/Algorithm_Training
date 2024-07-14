const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  return input.join("") === input.reverse().join("") ? 1 : 0;
}

console.log(solution(input));
