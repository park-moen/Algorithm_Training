const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {value string} value
 * @returns {number[]}
 */
function conversionNumberArray(value) {
  return value.split(" ").map(Number);
}

/**
 *
 * @param {string[]} input
 * @returns {string}
 */
function solution(input) {
  const [_, A] = conversionNumberArray(input[0]);
  const list = conversionNumberArray(input[1]);

  return list.filter(item => item < A).join(" ");
}

console.log(solution(input));
