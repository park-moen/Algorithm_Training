const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  console.log(
    ((BigInt(input - 2) * BigInt(input - 1) * BigInt(input)) / BigInt(6)).toString()
  );
  console.log(3);
}

solution(input);
