const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function solution(input) {
  console.log(input ** 2);
  console.log(2);
}

solution(input);
