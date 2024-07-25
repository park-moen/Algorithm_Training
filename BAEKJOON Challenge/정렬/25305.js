const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  const [_, k] = input[0].split(" ").map(Number);

  const sortScore = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return sortScore[k - 1];
}

console.log(solution(input));
