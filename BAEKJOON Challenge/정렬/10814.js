const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const members = input.map(item => item.split(" "));

  members.sort((a, b) => Number(a[0]) - Number(b[0]));
  return members.map(member => member.join(" ")).join("\n");
}

console.log(solution(input));
