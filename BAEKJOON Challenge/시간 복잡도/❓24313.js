const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [aList, c, n0] = input;
  const [a1, a0] = aList.trim().split(" ").map(Number);

  const fn = a1 * n0 + a0;
  const gn = c * n0;

  return fn <= gn && a1 - c <= 0 ? 1 : 0;
}

console.log(solution(input));
