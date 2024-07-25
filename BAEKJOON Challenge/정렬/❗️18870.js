const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const positions = input[0].split(" ").map(Number);
  const sortedPositions = Array.from(new Set(positions)).sort((a, b) => a - b);
  const compressedMap = new Map();

  sortedPositions.forEach((position, index) => {
    compressedMap.set(position, index);
  });

  const res = positions.map(position => compressedMap.get(position));

  return res.join(" ");
}

console.log(solution(input));
