const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string []} input
 */
function solution(input) {
  const blackBoard = input.map(value => value.split(""));
  let maxLength = 0;

  blackBoard.forEach(value => {
    if (maxLength < value.length) {
      maxLength = value.length;
    }
  });

  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < blackBoard.length; j++) {
      if (blackBoard[j][i] === undefined) {
        continue;
      }

      result += blackBoard[j][i];
    }
  }

  return result;
}

console.log(solution(input));
