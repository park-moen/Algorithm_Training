const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  let result = "";
  for (const item of input) {
    const [first, second] = item.split(" ").map(Number);
    if (first === 0 && second === 0) {
      break;
    }

    if (second % first === 0) {
      result += "factor" + "\n";
    } else if (first % second === 0) {
      result += "multiple" + "\n";
    } else {
      result += "neither" + "\n";
    }
  }
  return result;
}

console.log(solution(input));
