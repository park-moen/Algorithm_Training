const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

/**
 *
 * @param {number[]} angles
 * @returns string
 */
function solution(angles) {
  const [a, b, c] = angles;
  const sum = a + b + c;

  if (sum !== 180) {
    return "Error";
  }

  if (a === 60 && b === 60 && c === 60) {
    return "Equilateral";
  }

  if (a === b || a === c || b === c) {
    return "Isosceles";
  }

  return "Scalene";
}

console.log(solution(input));
