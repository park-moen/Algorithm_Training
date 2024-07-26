const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns number
 */
function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const NList = input.slice(1, N + 1);
  const MList = input.slice(N + 1, M + N + 1);

  const listMap = new Map();
  NList.forEach(item => {
    listMap.set(item, true);
  });

  return MList.reduce((acc, cur) => (listMap.has(cur) ? acc + 1 : acc), 0);
}

console.log(solution(input));
