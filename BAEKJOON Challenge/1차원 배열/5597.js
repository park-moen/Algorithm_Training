const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} input
 * @returns string
 */
function solution(input) {
  const list = new Array(31).fill(0);
  input.forEach(item => (list[item] = item));

  let result = "";
  list.slice(1).forEach((item, index) => {
    if (item === 0) {
      result += index + 1 + "\n";
    }
  });

  return result;
}

console.log(solution(input));
