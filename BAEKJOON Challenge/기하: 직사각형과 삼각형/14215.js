const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(input) {
  const position = [...input];
  const [a, b, c] = position.sort((a, b) => a - b);

  let perimeter = 0;

  if (a + b > c) {
    perimeter = a + b + c;
  } else {
    perimeter = a + b + (a + b - 1);
  }

  return perimeter;
}

console.log(solution(input));
