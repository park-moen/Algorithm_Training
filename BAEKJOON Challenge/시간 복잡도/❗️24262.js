const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  console.log(1);
  console.log(0);
}

solution(input);
