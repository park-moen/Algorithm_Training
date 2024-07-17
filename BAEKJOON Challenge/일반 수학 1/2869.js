const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

/**
 *
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  const [up, down, target] = input;

  return Math.ceil((target - up) / (up - down) + 1);
}

console.log(solution(input));
