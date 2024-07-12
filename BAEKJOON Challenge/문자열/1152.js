const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

/**
 *
 * @param {string} input
 * @returns
 */
function solution(input) {
  // 빈문자열 반례에 대한 조건
  if (input === "") {
    return 0;
  }

  return input.split(" ").length;
}

console.log(solution(input));
