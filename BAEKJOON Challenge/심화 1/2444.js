const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

/**
 *
 * @param {number} N
 * @returns string
 */
function solution(N) {
  let star = "";

  for (let i = 1; i <= N; i++) {
    star += " ".repeat(N - i) + "*".repeat(i + (i - 1)) + "\n";
  }

  // let star2 = "";
  for (let i = N - 1; i > 0; i--) {
    star += " ".repeat(N - i) + "*".repeat(i + (i - 1)) + "\n";
  }

  return star;
}

console.log(solution(input));
