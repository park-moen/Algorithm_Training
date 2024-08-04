const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 *
 * @param {string[]} input
 * @returns string
 */
function solution(input) {
  const cards = input[1].split(" ").map(Number);
  const targets = input[3].split(" ").map(Number);
  const cardMap = new Map();

  for (const card of cards) {
    if (cardMap.has(card)) {
      cardMap.set(card, cardMap.get(card) + 1);
    } else {
      cardMap.set(card, 1);
    }
  }

  const result = [];

  for (const target of targets) {
    if (cardMap.has(target)) {
      result.push(cardMap.get(target));
    } else {
      result.push(0);
    }
  }

  return result.join(" ");
}

console.log(solution(input));
