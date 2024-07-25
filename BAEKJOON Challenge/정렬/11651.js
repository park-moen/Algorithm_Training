const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const positions = input.map(item => item.split(" ").map(Number));

  positions.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  return positions.map(position => position.join(" ")).join("\n");
}

console.log(solution(input));
