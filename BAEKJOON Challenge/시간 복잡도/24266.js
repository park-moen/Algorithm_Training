const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  console.log((BigInt(n) ** 3n).toString());
  console.log(3);
}

solution(input);
