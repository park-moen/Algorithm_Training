const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(v => v.split(" ").map(Number));

function solution(input) {
  return input.reduce((acc, cur) => {
    const [a, b] = cur;

    return acc + (a + b) + "\n";
  }, "");
}

console.log(solution(input));
