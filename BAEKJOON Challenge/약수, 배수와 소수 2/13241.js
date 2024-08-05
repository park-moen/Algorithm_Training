const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 *
 * @param {number[]} input
 * @returns number
 */
function solution(input) {
  const [a, b] = input;
  return lcm(a, b);
}

console.log(solution(input));
