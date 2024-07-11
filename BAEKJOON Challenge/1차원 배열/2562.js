const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} input
 * @returns string
 */
function solution(input) {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      maxIndex = i + 1;
    }
  }

  return max + "\n" + maxIndex;
}

console.log(solution(input));
