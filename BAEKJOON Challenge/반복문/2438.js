const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

function solution(starCount) {
  let result = "";

  for (let i = 0; i < starCount; i++) {
    result += "*".repeat(i + 1) + "\n";
  }

  return result;
}

console.log(solution(input));
