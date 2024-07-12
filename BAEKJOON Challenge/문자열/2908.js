const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

/**
 *
 * @param {string} value
 * @returns number
 */
function reverseValue(value) {
  return Number(value.split("").reverse().join(""));
}

/**
 *
 * @param {string []} input
 * @returns number
 */
function solution(input) {
  const left = reverseValue(input[0]);
  const right = reverseValue(input[1]);

  return Math.max(left, right);
}

console.log(solution(input));
