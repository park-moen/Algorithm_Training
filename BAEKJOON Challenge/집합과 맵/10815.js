const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const NCards = input[1].split(" ").map(Number);
  const MCards = input[3].split(" ").map(Number);

  const cardMap = new Map();
  NCards.forEach(card => {
    cardMap.set(card, true);
  });

  return MCards.map(card => (cardMap.has(card) ? 1 : 0)).join(" ");
}

console.log(solution(input));
