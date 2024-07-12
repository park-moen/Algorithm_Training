const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */

function solution(input) {
  const [word, target] = input.map(value => {
    if (!isNaN(value)) {
      return Number(value);
    } else {
      return value;
    }
  });

  return word[target - 1];
}

console.log(solution(input));
