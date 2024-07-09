const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(v => v.split(" ").map(Number));

function solution(input) {
  let result = "";
  let index = 0;

  while (true) {
    const [a, b] = input[index];

    if (a + b === 0) {
      break;
    }

    result += a + b + "\n";

    index++;
  }

  return result;
}

console.log(solution(input));
