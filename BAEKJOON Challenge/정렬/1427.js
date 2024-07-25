const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

function solution(input) {
  const copyInput = [...input];

  return copyInput.sort((a, b) => b - a).join("");
}

console.log(solution(input));
