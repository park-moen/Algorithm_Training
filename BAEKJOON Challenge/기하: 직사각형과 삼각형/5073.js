const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(positions) {
  let result = "";

  for (const position of positions) {
    const [a, b, c] = position.split(" ").map(Number);

    if (a === 0 && b === 0 && c === 0) {
      break;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      result += "Invalid";
    } else if (a === b && b === c) {
      result += "Equilateral";
    } else if (a === b || a === c || b === c) {
      result += "Isosceles";
    } else {
      result += "Scalene";
    }

    result += "\n";
  }

  return result;
}

console.log(solution(input));
