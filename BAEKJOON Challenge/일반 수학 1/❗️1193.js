const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  let lineNumber = 1;
  let coverLimitCount = 1;

  while (coverLimitCount < input) {
    coverLimitCount += lineNumber + 1;
    lineNumber++;
  }

  const firstPosition = lineNumber - (coverLimitCount - input);

  let result = "";
  if (lineNumber % 2 === 0) {
    result = `${firstPosition}/${lineNumber + 1 - firstPosition}`;
  } else {
    result = `${lineNumber + 1 - firstPosition}/${firstPosition}`;
  }

  return result;
}

console.log(solution(input));
