const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns number
 */
function solution(input) {
  const substringSet = new Set();

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      substringSet.add(input.slice(i, j + 1));
    }
  }

  return substringSet.size;
}

console.log(solution(input));
