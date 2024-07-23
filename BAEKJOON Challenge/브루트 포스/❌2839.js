const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let N = Number(input);
  let result = 0;

  while (true) {
    if (N % 5 === 0) {
      result += N / 5;
      break;
    }

    N -= 3;
    result += 1;

    if (N < 0) {
      result = -1;
      break;
    }
  }

  return result;
}

console.log(solution(input));
