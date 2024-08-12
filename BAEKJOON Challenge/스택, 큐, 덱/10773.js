const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [_, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  const stack = [];

  input.forEach(value => {
    if (value === 0) {
      stack.pop();
    } else {
      stack.push(value);
    }
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
