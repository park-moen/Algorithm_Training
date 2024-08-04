const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  const setA = new Set(input[1].split(" ").map(Number));
  const setB = new Set(input[2].split(" ").map(Number));

  const diffA = [];
  setA.forEach(num => {
    if (!setB.has(num)) {
      diffA.push(num);
    }
  });

  const diffB = [];
  setB.forEach(num => {
    if (!setA.has(num)) {
      diffB.push(num);
    }
  });

  return diffA.length + diffB.length;
}

console.log(solution(input));
