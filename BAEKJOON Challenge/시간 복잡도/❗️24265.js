const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  console.log(((n - 1) * n) / 2);
  console.log(2);
}

solution(input);
