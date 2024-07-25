const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} input
 * @returns string
 */
function solution(input) {
  const result = [];
  const num = input.slice().sort((a, b) => a - b);
  const average = Math.floor(num.reduce((acc, cur) => acc + cur, 0) / num.length);

  result.push(average, num[Math.floor(num.length / 2)]);

  return result.join("\n");
}

console.log(solution(input));
