const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const setA = new Set(input.slice(1, N + 1));
  const setB = new Set(input.slice(N + 1, input.length));

  const result = [];
  setA.forEach(a => {
    if (setB.has(a)) {
      result.push(a);
    }
  });

  result.sort((a, b) => (a > b ? 1 : -1));

  return result.length + "\n" + result.join("\n");
}

console.log(solution(input));
