const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function firstSolution(input) {
  return input * 4;
}

console.log(firstSolution(input));

function secondSolution(input) {
  return input * 3 + 2 * (0.5 * (input - 1)) + 1;
}

console.log(secondSolution(input));
