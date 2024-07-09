const fs = require("fs");
const input = Number(fs.readFileSync("input.txt").toString().trim());

function solution(starCount) {
  let result = "";

  for (let i = 1; i <= starCount; i++) {
    const space = " ".repeat(starCount - i);
    const star = "*".repeat(i);

    result += space + star + "\n";
  }

  return result;
}

console.log(solution(input));
